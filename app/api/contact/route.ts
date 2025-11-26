import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import {
  sanitizeInput,
  containsMaliciousPatterns,
  containsSqlInjection,
  isValidEmail,
  isValidPhone,
  isValidName,
  isValidCompany,
  isValidMessage,
  checkRateLimit,
  getClientIp,
} from "@/lib/security";

// セキュリティヘッダーを追加
function addSecurityHeaders(response: NextResponse): NextResponse {
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-XSS-Protection", "1; mode=block");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  return response;
}

// エラーレスポンスを生成
function errorResponse(message: string, status: number): NextResponse {
  const response = NextResponse.json({ error: message }, { status });
  return addSecurityHeaders(response);
}

// 成功レスポンスを生成
function successResponse(data: object, status: number = 200): NextResponse {
  const response = NextResponse.json(data, { status });
  return addSecurityHeaders(response);
}

export async function POST(request: NextRequest) {
  try {
    // 1. Content-Type検証
    const contentType = request.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      return errorResponse("Content-Typeはapplication/jsonである必要があります", 415);
    }

    // 2. レート制限チェック
    const clientIp = getClientIp(request);
    const rateLimit = checkRateLimit(clientIp, 5, 60000); // 1分間に5回まで

    if (!rateLimit.allowed) {
      const response = errorResponse(
        "リクエスト回数の上限に達しました。しばらく待ってから再度お試しください",
        429
      );
      response.headers.set("Retry-After", String(Math.ceil((rateLimit.resetTime - Date.now()) / 1000)));
      response.headers.set("X-RateLimit-Remaining", "0");
      return response;
    }

    // 3. リクエストボディのサイズチェック
    const contentLength = request.headers.get("content-length");
    if (contentLength && parseInt(contentLength) > 50000) {
      return errorResponse("リクエストサイズが大きすぎます", 413);
    }

    // 4. JSONパース
    let body;
    try {
      body = await request.json();
    } catch {
      return errorResponse("無効なJSONフォーマットです", 400);
    }

    // 5. 必須フィールドの存在チェック
    const { name, email, company, phone, message } = body;

    if (!name || typeof name !== "string") {
      return errorResponse("名前は必須です", 400);
    }
    if (!email || typeof email !== "string") {
      return errorResponse("メールアドレスは必須です", 400);
    }
    if (!message || typeof message !== "string") {
      return errorResponse("お問い合わせ内容は必須です", 400);
    }

    // オプショナルフィールドの型チェック
    if (company !== undefined && company !== null && typeof company !== "string") {
      return errorResponse("会社名の形式が不正です", 400);
    }
    if (phone !== undefined && phone !== null && typeof phone !== "string") {
      return errorResponse("電話番号の形式が不正です", 400);
    }

    // 6. 入力値のトリム
    const trimmedName = name.trim();
    const trimmedEmail = email.trim().toLowerCase();
    const trimmedCompany = company?.trim() || "";
    const trimmedPhone = phone?.trim() || "";
    const trimmedMessage = message.trim();

    // 7. 悪意のあるパターン検出（XSS、SQLインジェクション）
    const fieldsToCheck = [
      { name: "名前", value: trimmedName },
      { name: "メールアドレス", value: trimmedEmail },
      { name: "会社名", value: trimmedCompany },
      { name: "電話番号", value: trimmedPhone },
      { name: "お問い合わせ内容", value: trimmedMessage },
    ];

    for (const field of fieldsToCheck) {
      if (field.value && containsMaliciousPatterns(field.value)) {
        console.warn(`Malicious pattern detected in ${field.name} from IP: ${clientIp}`);
        return errorResponse("不正な入力が検出されました", 400);
      }
      if (field.value && containsSqlInjection(field.value)) {
        console.warn(`SQL injection attempt detected in ${field.name} from IP: ${clientIp}`);
        return errorResponse("不正な入力が検出されました", 400);
      }
    }

    // 8. 各フィールドの詳細なバリデーション
    if (!isValidName(trimmedName)) {
      return errorResponse("名前は1〜100文字で入力してください", 400);
    }

    if (!isValidEmail(trimmedEmail)) {
      return errorResponse("有効なメールアドレスを入力してください", 400);
    }

    if (trimmedCompany && !isValidCompany(trimmedCompany)) {
      return errorResponse("会社名は200文字以内で入力してください", 400);
    }

    if (trimmedPhone && !isValidPhone(trimmedPhone)) {
      return errorResponse("有効な電話番号を入力してください", 400);
    }

    if (!isValidMessage(trimmedMessage)) {
      return errorResponse("お問い合わせ内容は1〜5000文字で入力してください", 400);
    }

    // 9. 入力のサニタイズ（保存前）
    const sanitizedData = {
      name: sanitizeInput(trimmedName),
      email: trimmedEmail, // メールアドレスはサニタイズしない（検証済み）
      company: trimmedCompany ? sanitizeInput(trimmedCompany) : null,
      phone: trimmedPhone ? sanitizeInput(trimmedPhone) : null,
      message: sanitizeInput(trimmedMessage),
    };

    // 10. Supabaseにデータを保存
    const { data, error } = await supabase
      .from("contacts")
      .insert([sanitizedData])
      .select("id, created_at");

    if (error) {
      console.error("Supabase error:", error);
      return errorResponse("お問い合わせの送信に失敗しました", 500);
    }

    // 11. 成功レスポンス（機密情報は返さない）
    return successResponse(
      {
        success: true,
        message: "お問い合わせを受け付けました",
        id: data?.[0]?.id,
      },
      201
    );
  } catch (error) {
    console.error("Server error:", error);
    return errorResponse("サーバーエラーが発生しました", 500);
  }
}

// GETリクエストは許可しない
export async function GET() {
  return errorResponse("Method not allowed", 405);
}

// その他のメソッドも許可しない
export async function PUT() {
  return errorResponse("Method not allowed", 405);
}

export async function DELETE() {
  return errorResponse("Method not allowed", 405);
}

export async function PATCH() {
  return errorResponse("Method not allowed", 405);
}

