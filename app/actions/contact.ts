"use server";

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
} from "@/lib/security";

interface ContactFormData {
  company: string;
  name: string;
  phone: string;
  email: string;
  hiring_timing: string;
  message: string;
}

interface ContactResponse {
  success: boolean;
  message: string;
  error?: string;
}

export async function submitContactForm(
  formData: ContactFormData
): Promise<ContactResponse> {
  try {
    const { name, email, company, phone, message, hiring_timing } = formData;

    // 1. 必須フィールドの存在チェック
    if (!name || typeof name !== "string") {
      return { success: false, message: "", error: "名前は必須です" };
    }
    if (!email || typeof email !== "string") {
      return { success: false, message: "", error: "メールアドレスは必須です" };
    }
    if (!company || typeof company !== "string") {
      return { success: false, message: "", error: "会社名は必須です" };
    }
    if (!phone || typeof phone !== "string") {
      return { success: false, message: "", error: "電話番号は必須です" };
    }
    if (!hiring_timing || typeof hiring_timing !== "string") {
      return { success: false, message: "", error: "採用希望時期は必須です" };
    }

    // オプショナルフィールドの型チェック
    if (message !== undefined && message !== null && typeof message !== "string") {
      return { success: false, message: "", error: "お問い合わせ内容の形式が不正です" };
    }

    // 2. 入力値のトリム
    const trimmedName = name.trim();
    const trimmedEmail = email.trim().toLowerCase();
    const trimmedCompany = company.trim();
    const trimmedPhone = phone.trim();
    const trimmedHiringTiming = hiring_timing.trim();
    const trimmedMessage = message?.trim() || "";

    // 3. 悪意のあるパターン検出（XSS、SQLインジェクション）
    const fieldsToCheck = [
      { name: "名前", value: trimmedName },
      { name: "メールアドレス", value: trimmedEmail },
      { name: "会社名", value: trimmedCompany },
      { name: "電話番号", value: trimmedPhone },
      { name: "採用希望時期", value: trimmedHiringTiming },
      { name: "お問い合わせ内容", value: trimmedMessage },
    ];

    for (const field of fieldsToCheck) {
      if (field.value && containsMaliciousPatterns(field.value)) {
        console.warn(`Malicious pattern detected in ${field.name}`);
        return { success: false, message: "", error: "不正な入力が検出されました" };
      }
      if (field.value && containsSqlInjection(field.value)) {
        console.warn(`SQL injection attempt detected in ${field.name}`);
        return { success: false, message: "", error: "不正な入力が検出されました" };
      }
    }

    // 4. 各フィールドの詳細なバリデーション
    if (!isValidName(trimmedName)) {
      return { success: false, message: "", error: "名前は1〜100文字で入力してください" };
    }

    if (!isValidEmail(trimmedEmail)) {
      return { success: false, message: "", error: "有効なメールアドレスを入力してください" };
    }

    if (!isValidCompany(trimmedCompany)) {
      return { success: false, message: "", error: "会社名は200文字以内で入力してください" };
    }

    if (!isValidPhone(trimmedPhone)) {
      return { success: false, message: "", error: "有効な電話番号を入力してください" };
    }

    // 採用希望時期のバリデーション
    const validHiringTimings = ["1month", "3months", "6months", "1year", "undecided"];
    if (!validHiringTimings.includes(trimmedHiringTiming)) {
      return { success: false, message: "", error: "有効な採用希望時期を選択してください" };
    }

    if (trimmedMessage && !isValidMessage(trimmedMessage)) {
      return { success: false, message: "", error: "お問い合わせ内容は5000文字以内で入力してください" };
    }

    // 5. 入力のサニタイズ（保存前）
    const sanitizedData = {
      name: sanitizeInput(trimmedName),
      email: trimmedEmail, // メールアドレスはサニタイズしない（検証済み）
      company: sanitizeInput(trimmedCompany),
      phone: sanitizeInput(trimmedPhone),
      hiring_timing: trimmedHiringTiming, // 列挙型のためサニタイズ不要（検証済み）
      message: trimmedMessage ? sanitizeInput(trimmedMessage) : null,
    };

    // 6. Supabaseにデータを保存
    const { data, error } = await supabase
      .from("contacts")
      .insert([sanitizedData])
      .select("id, created_at");

    if (error) {
      console.error("Supabase error:", error);
      return { success: false, message: "", error: "お問い合わせの送信に失敗しました" };
    }

    // 7. 成功レスポンス
    return {
      success: true,
      message: "お問い合わせを受け付けました。ありがとうございます。",
    };
  } catch (error) {
    console.error("Server error:", error);
    return { success: false, message: "", error: "サーバーエラーが発生しました" };
  }
}

