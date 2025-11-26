/**
 * セキュリティユーティリティ関数
 */

// HTMLエスケープ（XSS対策）
export function escapeHtml(str: string): string {
  const htmlEscapes: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#x27;",
    "/": "&#x2F;",
    "`": "&#x60;",
    "=": "&#x3D;",
  };

  return str.replace(/[&<>"'`=/]/g, (char) => htmlEscapes[char] || char);
}

// 危険なパターンを検出
export function containsMaliciousPatterns(str: string): boolean {
  const maliciousPatterns = [
    /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    /javascript:/gi,
    /on\w+\s*=/gi, // onclick, onerror, etc.
    /data:/gi,
    /vbscript:/gi,
    /expression\s*\(/gi,
    /<iframe/gi,
    /<object/gi,
    /<embed/gi,
    /<link/gi,
    /<style/gi,
    /url\s*\(/gi,
    /@import/gi,
  ];

  return maliciousPatterns.some((pattern) => pattern.test(str));
}

// SQLインジェクション検出
export function containsSqlInjection(str: string): boolean {
  const sqlPatterns = [
    /(\b(SELECT|INSERT|UPDATE|DELETE|DROP|CREATE|ALTER|EXEC|UNION|FETCH|DECLARE|TRUNCATE)\b)/gi,
    /(--|#|\/\*)/g,
    /(\b(OR|AND)\b\s+\d+\s*=\s*\d+)/gi,
    /'\s*(OR|AND)\s*'.*?'/gi,
  ];

  return sqlPatterns.some((pattern) => pattern.test(str));
}

// 入力のサニタイズ
export function sanitizeInput(str: string): string {
  // トリム
  let sanitized = str.trim();

  // 制御文字を除去（改行とタブは許可）
  sanitized = sanitized.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, "");

  // 連続する空白を単一の空白に
  sanitized = sanitized.replace(/\s+/g, " ");

  // HTMLエスケープ
  sanitized = escapeHtml(sanitized);

  return sanitized;
}

// メールアドレスの厳格な検証
export function isValidEmail(email: string): boolean {
  // RFC 5322に基づいた厳格な検証
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  if (!emailRegex.test(email)) {
    return false;
  }

  // 長さチェック
  if (email.length > 254) {
    return false;
  }

  // ローカル部分の長さチェック
  const [localPart] = email.split("@");
  if (localPart.length > 64) {
    return false;
  }

  return true;
}

// 電話番号の検証（日本の電話番号形式）
export function isValidPhone(phone: string): boolean {
  // 数字、ハイフン、括弧、スペース、プラスのみ許可
  const phoneRegex = /^[0-9\-\(\)\s\+]+$/;

  if (!phoneRegex.test(phone)) {
    return false;
  }

  // 数字のみを抽出して桁数チェック（10〜15桁）
  const digitsOnly = phone.replace(/\D/g, "");
  if (digitsOnly.length < 10 || digitsOnly.length > 15) {
    return false;
  }

  return true;
}

// 名前の検証
export function isValidName(name: string): boolean {
  // 長さチェック（1〜100文字）
  if (name.length < 1 || name.length > 100) {
    return false;
  }

  // 制御文字が含まれていないか
  if (/[\x00-\x1F\x7F]/.test(name)) {
    return false;
  }

  return true;
}

// 会社名の検証
export function isValidCompany(company: string): boolean {
  // 長さチェック（0〜200文字）
  if (company.length > 200) {
    return false;
  }

  // 制御文字が含まれていないか
  if (/[\x00-\x1F\x7F]/.test(company)) {
    return false;
  }

  return true;
}

// メッセージの検証
export function isValidMessage(message: string): boolean {
  // 長さチェック（1〜5000文字）
  if (message.length < 1 || message.length > 5000) {
    return false;
  }

  return true;
}

// レート制限用のシンプルなインメモリストア
const rateLimitStore: Map<string, { count: number; resetTime: number }> =
  new Map();

// レート制限チェック
export function checkRateLimit(
  ip: string,
  maxRequests: number = 5,
  windowMs: number = 60000 // 1分
): { allowed: boolean; remaining: number; resetTime: number } {
  const now = Date.now();
  const record = rateLimitStore.get(ip);

  // 古いレコードをクリーンアップ（メモリリーク防止）
  if (rateLimitStore.size > 10000) {
    const oldEntries = Array.from(rateLimitStore.entries()).filter(
      ([, v]) => v.resetTime < now
    );
    oldEntries.forEach(([key]) => rateLimitStore.delete(key));
  }

  if (!record || record.resetTime < now) {
    // 新しいウィンドウを開始
    rateLimitStore.set(ip, { count: 1, resetTime: now + windowMs });
    return { allowed: true, remaining: maxRequests - 1, resetTime: now + windowMs };
  }

  if (record.count >= maxRequests) {
    return { allowed: false, remaining: 0, resetTime: record.resetTime };
  }

  record.count++;
  return {
    allowed: true,
    remaining: maxRequests - record.count,
    resetTime: record.resetTime,
  };
}

// IPアドレスの取得
export function getClientIp(request: Request): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }

  const realIp = request.headers.get("x-real-ip");
  if (realIp) {
    return realIp;
  }

  return "unknown";
}

