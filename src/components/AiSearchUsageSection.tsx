import { TrendingUp, Users, Calendar } from "lucide-react";

export function AiSearchUsageSection() {
    return (
        <section className="bg-muted py-24">
            <div className="mx-auto max-w-7xl px-8">
                <h2 className="heading-xl mb-16 text-center">
                    AI検索は“これから”ではなく“すでに始まっている”
                </h2>

                <div className="grid gap-8 md:grid-cols-3">
                    <div className="flex flex-col items-center text-center">
                        <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full border-2 border-foreground bg-background shadow-[0_4px_0_#141414]">
                            <TrendingUp className="h-10 w-10" />
                        </div>
                        <h3 className="heading-sm mb-2">現在の AI 検索利用率</h3>
                        <p className="text-muted-foreground">急速に普及が進んでいます</p>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full border-2 border-foreground bg-background shadow-[0_4px_0_#141414]">
                            <Calendar className="h-10 w-10" />
                        </div>
                        <h3 className="heading-sm mb-2">2030年までの予測</h3>
                        <p className="text-muted-foreground">検索のスタンダードに</p>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full border-2 border-foreground bg-background shadow-[0_4px_0_#141414]">
                            <Users className="h-10 w-10" />
                        </div>
                        <h3 className="heading-sm mb-2">10代の利用率</h3>
                        <p className="text-muted-foreground">若年層では既に定着</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
