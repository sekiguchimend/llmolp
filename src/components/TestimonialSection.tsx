import { ArrowLeft, ArrowRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function TestimonialSection() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-5xl px-8 text-center">
        <div className="mb-8 flex items-center justify-center gap-8">
          <button className="rounded-full p-4 hover:bg-muted">
            <ArrowLeft className="h-12 w-12" />
          </button>
          
          <div className="flex-1">
            <h2 className="heading-lg mb-8">
              "cal.com (@calcom) is awesome AND built on open source"
            </h2>
            
            <div className="flex items-center justify-center gap-3">
              <span className="text-xl font-medium">Andy Randall</span>
              <Avatar className="h-14 w-14 border-2 border-foreground">
                <AvatarImage src="/avatars/andy-randall.png" alt="Andy Randall" />
                <AvatarFallback>AR</AvatarFallback>
              </Avatar>
            </div>
          </div>

          <button className="rounded-full p-4 hover:bg-muted">
            <ArrowRight className="h-12 w-12" />
          </button>
        </div>
      </div>
    </section>
  );
}