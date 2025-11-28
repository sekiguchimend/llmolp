import { BarChart3, Layers, Database } from "lucide-react";

export function ServiceOverviewSection() {
    return (
        <section className="bg-muted py-24">
            <div className="mx-auto max-w-7xl px-8">
                <h2 className="heading-xl mb-16 text-center">
                    AI-SEO Platform とは？
                </h2>

                <div className="grid gap-8 md:grid-cols-3">
                    <div className="rounded-2xl border-2 border-foreground bg-background p-8 shadow-[0_4px_0_#141414]">
                        <Database className="mb-6 h-12 w-12" />
                        <h3 className="heading-sm mb-4">自動収集・解析</h3>
                        <p className="text-muted-foreground">
                            ChatGPT / Perplexity / Gemini などの回答を自動収集・解析します。
                        </p>
                    </div>

                    <div className="rounded-2xl border-2 border-foreground bg-background p-8 shadow-[0_4px_0_#141414]">
                        <BarChart3 className="mb-6 h-12 w-12" />
                        <h3 className="heading-sm mb-4">見られ方を可視化</h3>
                        <p className="text-muted-foreground">
                            「AI から見た自社・競合サイトの見られ方」を可視化するダッシュボードを提供。
                        </p>
                    </div>

                    <div className="rounded-2xl border-2 border-foreground bg-background p-8 shadow-[0_4px_0_#141414]">
                        <Layers className="mb-6 h-12 w-12" />
                        <h3 className="heading-sm mb-4">テーマ別に把握</h3>
                        <p className="text-muted-foreground">
                            料金・機能・導入事例・FAQ など“テーマ別”に状況を把握できます。
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
