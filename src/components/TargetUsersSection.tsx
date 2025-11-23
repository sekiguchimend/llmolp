import { CheckCircle2 } from "lucide-react";

export function TargetUsersSection() {
    return (
        <section className="bg-muted py-24">
            <div className="mx-auto max-w-7xl px-8">
                <h2 className="heading-xl mb-16 text-center">
                    こんな企業におすすめです
                </h2>

                <div className="mx-auto max-w-3xl rounded-3xl border-2 border-foreground bg-background p-12 shadow-[0_8px_0_#141414]">
                    <ul className="space-y-6">
                        <li className="flex items-start gap-4">
                            <CheckCircle2 className="mt-1 h-8 w-8 shrink-0 text-green-600" />
                            <span className="heading-sm">
                                BtoB SaaS / クラウドサービスでリード獲得を強化したい企業
                            </span>
                        </li>
                        <li className="flex items-start gap-4">
                            <CheckCircle2 className="mt-1 h-8 w-8 shrink-0 text-green-600" />
                            <span className="heading-sm">
                                金融・人材・不動産など、比較サイト／ランキング経由のCVが多い業界
                            </span>
                        </li>
                        <li className="flex items-start gap-4">
                            <CheckCircle2 className="mt-1 h-8 w-8 shrink-0 text-green-600" />
                            <span className="heading-sm">
                                海外SEOやグローバル展開を行なっている企業
                            </span>
                        </li>
                        <li className="flex items-start gap-4">
                            <CheckCircle2 className="mt-1 h-8 w-8 shrink-0 text-green-600" />
                            <span className="heading-sm">
                                「AI時代の検索行動」を前提に、早めに手を打ちたい企業
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
