import { Dot } from "lucide-react";

export function ScrollingBanner() {
  const features = [
    "Pay to meet",
    "Embed it anywhere",
    "Opt-in bookings",
    "Simple rescheduling",
    "Available in over 26 languages",
    "Hashed booking links",
  ];

  return (
    <div className="overflow-hidden rounded-[32px] bg-foreground py-6">
      <div className="flex animate-scroll gap-3">
        {[...features, ...features].map((feature, index) => (
          <div key={index} className="flex items-center gap-3 whitespace-nowrap">
            <Dot className="h-4 w-4 text-background" />
            <span className="body-lg text-background">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
}