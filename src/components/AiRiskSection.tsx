import { AlertTriangle, TrendingDown, EyeOff } from "lucide-react";

export function AiRiskSection() {
    return (
        <section className="bg-background py-24">
            <div className="mx-auto max-w-7xl px-8">
                <h2 className="heading-xl mb-16 text-center">
                    AIに最適化されていないと、ユーザーに届かない
                </h2>

                <div className="grid gap-8 md:grid-cols-2">
                    <div className="rounded-2xl border-2 border-foreground bg-red-50 p-8">
                        <div className="mb-4 flex items-center gap-4">
                            <EyeOff className="h-8 w-8 text-red-600" />
                            <h3 className="heading-sm font-bold text-red-900">
                                検討のテーブルに乗らない
                            </h3>
                        </div>
                        <p className="text-red-800">
                            AI検索に出てこないということは、ユーザーの選択肢にすら入らないことを意味します。
                        </p>
                    </div>

                    <div className="rounded-2xl border-2 border-foreground bg-red-50 p-8">
                        <div className="mb-4 flex items-center gap-4">
                            <TrendingDown className="h-8 w-8 text-red-600" />
                            <h3 className="heading-sm font-bold text-red-900">
                                流入の大幅減少
                            </h3>
                        </div>
                        <p className="text-red-800">
                            HubSpotの事例ではブログ流入が80%減少。従来のSEOだけでは不十分です。
                        </p>
                    </div>
                </div>

                <div className="mt-12 rounded-2xl border-2 border-foreground bg-secondary p-8 text-center shadow-[0_4px_0_#141414]">
                    <div className="mb-4 flex justify-center">
                        <AlertTriangle className="h-12 w-12 text-yellow-600" />
                    </div>
                    <p className="heading-md font-bold mb-4">
                        これは“そのうちやる”ではなく“早期対応が必要”なテーマ
                    </p>
                    <p className="text-muted-foreground">
                        競合だけが新しい顧客獲得チャネルを先取りし、差が広がってしまいます。
                    </p>
                </div>
            </div>
        </section>
    );
}
