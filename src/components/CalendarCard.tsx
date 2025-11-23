import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Clock, MapPin, Globe } from "lucide-react";

export function CalendarCard() {
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const daysInMonth = [
    [null, null, null, null, 1, 2, 3],
    [4, 5, 6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15, 16, 17],
    [18, 19, 20, 21, 22, 23, 24],
    [25, 26, 27, 28, 29, 30, 31],
  ];

  return (
    <div className="rounded-[32px] border-2 border-foreground bg-background p-8 shadow-lg">
      <div className="mb-6 flex items-start gap-4">
        <Avatar className="h-12 w-12 border-2 border-muted">
          <AvatarImage src="/avatars/rick-astley.png" alt="Rick Astley" />
          <AvatarFallback>RA</AvatarFallback>
        </Avatar>
        
        <div className="flex-1">
          <p className="text-sm font-medium text-muted-foreground">Rick Astley</p>
          <h3 className="text-lg font-medium">Get Rickrolled</h3>
          <p className="mt-2 text-sm leading-relaxed">
            Book me and I will never give you up. Cal will never let you down. 
            Open Source will never run around and desert you.
          </p>
          
          <div className="mt-4 space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <Clock className="h-4 w-4" />
              <span>30 min</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="h-4 w-4" />
              <span>Zoom</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Globe className="h-4 w-4" />
              <span>Europe / Dublin</span>
            </div>
          </div>
        </div>

        <div className="ml-auto">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-base font-bold">December</span>
            <span className="ml-4 text-sm">2022</span>
          </div>
          
          <div className="grid grid-cols-7 gap-1">
            {days.map((day) => (
              <div key={day} className="text-center text-xs font-medium text-muted-foreground">
                {day}
              </div>
            ))}
            
            {daysInMonth.map((week, weekIndex) => (
              week.map((day, dayIndex) => (
                <div
                  key={`${weekIndex}-${dayIndex}`}
                  className={`flex h-8 w-8 items-center justify-center text-sm ${
                    day ? "cursor-pointer hover:bg-muted rounded-sm" : ""
                  }`}
                >
                  {day || ""}
                </div>
              ))
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}