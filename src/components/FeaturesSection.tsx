import { Eye, Activity, Target, FileText } from "lucide-react";

export function FeaturesSection() {
    return (
        <section className="bg-background py-24">
            <div className="mx-auto max-w-7xl px-8">
                <h2 className="heading-xl mb-16 text-center">
                    できること（主要機能）
                </h2>

                <div className="grid gap-8 md:grid-cols-2">
                    <div className="rounded-2xl border-2 border-foreground bg-secondary p-8 shadow-[0_4px_0_#141414]">
                        <Eye className="mb-6 h-12 w-12" />
                        <h3 className="heading-md mb-4 font-bold">AIからの認知を可視化</h3>
                        <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                            <li>どのAIにどれくらい言及されているか</li>
                            <li>メイン推薦なのか、単なる一覧の1つなのか</li>
                        </ul>
                    </div>

                    <div className="rounded-2xl border-2 border-foreground bg-secondary p-8 shadow-[0_4px_0_#141414]">
                        <Activity className="mb-6 h-12 w-12" />
                        <h3 className="heading-md mb-4 font-bold">強み・弱みと改善優先度がわかる</h3>
                        <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                            <li>テーマごとに「優れている／普通／劣っている」をスコア化</li>
                            <li>「まず直すべきページ」がひと目で分かる</li>
                        </ul>
                    </div>

                    <div className="rounded-2xl border-2 border-foreground bg-secondary p-8 shadow-[0_4px_0_#141414]">
                        <Target className="mb-6 h-12 w-12" />
                        <h3 className="heading-md mb-4 font-bold">競合との位置関係を把握</h3>
                        <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                            <li>AI上でのシェア・ポジションを可視化</li>
                            <li>どのテーマで誰が主導権を握っているか</li>
                        </ul>
                    </div>

                    <div className="rounded-2xl border-2 border-foreground bg-secondary p-8 shadow-[0_4px_0_#141414]">
                        <FileText className="mb-6 h-12 w-12" />
                        <h3 className="heading-md mb-4 font-bold">コンテンツ改善のための土台データ</h3>
                        <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                            <li>見出し・構成・FAQ・比較コンテンツの改善指針に使える</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
