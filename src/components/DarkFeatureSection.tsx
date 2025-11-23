export function DarkFeatureSection() {
  const steps = [
    {
      title: "Connect your calendar(s)",
      description: "Cal reads your availability from all your existing calendars ensuring you never get double booked!",
      active: true,
    },
    {
      title: "Set your availability",
      active: false,
    },
    {
      title: "Share your link",
      active: false,
    },
    {
      title: "Let people book when it works for both of you",
      active: false,
    },
  ];

  return (
    <section className="rounded-[32px] bg-foreground px-8 py-16 text-background">
      <div className="mx-auto max-w-7xl">
        <h2 className="heading-lg mb-12 text-center">
          Schedule meetings without the email tennis
        </h2>

        <ol className="space-y-8">
          {steps.map((step, index) => (
            <li key={index} className="flex gap-4">
              <span className={`heading-md ${step.active ? 'text-background' : 'text-muted-foreground'}`}>
                {index + 1}.
              </span>
              <div>
                <h3 className={`heading-md mb-2 ${step.active ? 'text-background' : 'text-muted-foreground'}`}>
                  {step.title}
                </h3>
                {step.description && (
                  <p className="heading-sm text-background max-w-md">
                    {step.description}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}