import { ArrowRight } from "lucide-react";

export function UsageStepsSection() {
    return (
        <section className="bg-background py-24">
            <div className="mx-auto max-w-7xl px-8">
                <h2 className="heading-xl mb-16 text-center">
                    使い方はシンプル
                </h2>

                <div className="grid gap-8 md:grid-cols-4">
                    <div className="relative flex flex-col items-center text-center">
                        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-foreground bg-secondary text-2xl font-bold shadow-[0_4px_0_#141414]">
                            1
                        </div>
                        <p className="heading-sm">自社URLと競合URLを登録</p>
                        <div className="absolute right-[-20%] top-8 hidden md:block">
                            <ArrowRight className="h-8 w-8 text-muted-foreground" />
                        </div>
                    </div>

                    <div className="relative flex flex-col items-center text-center">
                        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-foreground bg-secondary text-2xl font-bold shadow-[0_4px_0_#141414]">
                            2
                        </div>
                        <p className="heading-sm">主要AIへのクエリを自動で投げて回答データを収集</p>
                        <div className="absolute right-[-20%] top-8 hidden md:block">
                            <ArrowRight className="h-8 w-8 text-muted-foreground" />
                        </div>
                    </div>

                    <div className="relative flex flex-col items-center text-center">
                        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-foreground bg-secondary text-2xl font-bold shadow-[0_4px_0_#141414]">
                            3
                        </div>
                        <p className="heading-sm">ダッシュボードで可視化された結果を確認</p>
                        <div className="absolute right-[-20%] top-8 hidden md:block">
                            <ArrowRight className="h-8 w-8 text-muted-foreground" />
                        </div>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-foreground bg-secondary text-2xl font-bold shadow-[0_4px_0_#141414]">
                            4
                        </div>
                        <p className="heading-sm">結果をもとにサイト・コンテンツを改善</p>
                        <p className="mt-2 text-sm text-muted-foreground">（※ここは各社の運用で実施）</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
