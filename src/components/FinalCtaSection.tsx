import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export function FinalCtaSection() {
    return (
        <section className="bg-background py-24">
            <div className="mx-auto max-w-4xl px-8 text-center">
                <h2 className="heading-lg mb-12">
                    まずは、AI検索での“見られ方”を知るところから始めませんか？
                </h2>

                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <Button className="rounded-[32px] border-2 border-foreground bg-foreground px-8 py-6 text-background shadow-[0_4px_0_#141414] hover:bg-foreground/90 label-lg h-auto">
                        無料で現状のイメージを知りたい
                        <ChevronRight className="ml-2 h-5 w-5 rounded-full border-2 border-background" />
                    </Button>

                    <Button variant="outline" className="rounded-[32px] border-2 border-foreground bg-background px-8 py-6 text-foreground shadow-[0_4px_0_#141414] hover:bg-secondary label-lg h-auto">
                        先行案内を希望する
                    </Button>
                </div>
            </div>
        </section>
    );
}
