import { Search, MessageSquare, HelpCircle } from "lucide-react";

export function SearchBehaviorSection() {
    return (
        <section className="bg-background py-24">
            <div className="mx-auto max-w-7xl px-8">
                <h2 className="heading-xl mb-16 text-center">
                    検索は『キーワード』から『AIに聞く』へ
                </h2>

                <div className="grid gap-8 md:grid-cols-3">
                    <div className="rounded-2xl border-2 border-foreground bg-secondary p-8 shadow-[0_4px_0_#141414]">
                        <MessageSquare className="mb-6 h-12 w-12" />
                        <p className="heading-sm">
                            ChatGPT に質問してから比較サイトを見る
                        </p>
                    </div>

                    <div className="rounded-2xl border-2 border-foreground bg-secondary p-8 shadow-[0_4px_0_#141414]">
                        <Search className="mb-6 h-12 w-12" />
                        <p className="heading-sm">
                            Perplexity で『おすすめ○○サービス』を調べる
                        </p>
                    </div>

                    <div className="rounded-2xl border-2 border-foreground bg-secondary p-8 shadow-[0_4px_0_#141414]">
                        <HelpCircle className="mb-6 h-12 w-12" />
                        <p className="heading-sm">
                            Gemini に『自社に合うツール』を聞く
                        </p>
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <p className="heading-md font-bold">
                        AI の回答だけで意思決定が完結するケースが増えている
                    </p>
                </div>
            </div>
        </section>
    );
}
