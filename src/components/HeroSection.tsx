import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronRight } from "lucide-react";


export function HeroSection() {
  return (
    <section className="relative flex min-h-[80vh] flex-col justify-center bg-gradient-to-b from-muted to-background px-4 pb-32 pt-24 text-center md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-4xl">
          <h1 className="heading-hero mb-8">
            埋もれない企業へ
          </h1>
          <p className="heading-sm text-muted-foreground">
            AI検索での自社サイトの見られ方を見える化するプラットフォーム
          </p>
        </div>

        <div className="mx-auto mb-16 flex max-w-3xl flex-col items-center gap-4 sm:flex-row">
          <div className="flex flex-1 w-full items-center gap-0 rounded-[32px] border-2 border-foreground bg-secondary shadow-[0_4px_0_#141414]">
            <Input
              type="text"
              placeholder="https://example.com"
              className="heading-sm border-0 bg-transparent px-6 py-6 shadow-none focus-visible:ring-0"
            />
          </div>

          <Button
            className="w-full sm:w-auto rounded-[32px] border-2 border-foreground bg-secondary px-8 py-6 text-foreground shadow-[0_4px_0_#141414] hover:bg-secondary/90 label-lg h-auto"
          >
            AI-SEOスコアをチェック
            <ChevronRight className="ml-2 h-5 w-5 rounded-full border-2 border-foreground" />
          </Button>
        </div>
      </div>
    </section>
  );
}