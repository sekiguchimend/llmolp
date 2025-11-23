import { Card } from "@/components/ui/card";

interface FeatureCardProps {
  number: string;
  title: string;
  description: string;
  image?: string;
  children?: React.ReactNode;
}

export function FeatureCard({ number, title, description, image, children }: FeatureCardProps) {
  return (
    <Card className="overflow-hidden rounded-2xl border-2 border-foreground border-l-[17px] p-0">
      <div className="p-8">
        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border-2 border-foreground bg-foreground">
          <span className="text-2xl font-bold text-background">{number}</span>
        </div>

        {image && (
          <div className="mb-6 overflow-hidden rounded-2xl border-2 border-foreground">
            <img src={image} alt={title} className="w-full" />
          </div>
        )}

        {children && (
          <div className="mb-6">
            {children}
          </div>
        )}
      </div>

      <div className="border-t-2 border-dashed border-foreground p-8">
        <h3 className="heading-md mb-4">{title}</h3>
        <p className="body-lg text-muted-foreground">{description}</p>
      </div>
    </Card>
  );
}