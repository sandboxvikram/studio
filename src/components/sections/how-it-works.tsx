import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, ListChecks, Plane, HeartHandshake } from 'lucide-react';

const steps = [
  {
    icon: <Search className="h-10 w-10 text-primary" />,
    title: "1. Tell Us Your Needs",
    description: "Fill out a simple form with your medical condition, location, and budget preferences.",
  },
  {
    icon: <ListChecks className="h-10 w-10 text-primary" />,
    title: "2. Get AI Recommendations",
    description: "Our AI analyzes your request and provides a personalized list of top hospitals and doctors.",
  },
  {
    icon: <Plane className="h-10 w-10 text-primary" />,
    title: "3. Plan Your Journey",
    description: "Receive treatment plans, cost estimates, and book your travel and stay seamlessly.",
  },
  {
    icon: <HeartHandshake className="h-10 w-10 text-primary" />,
    title: "4. Receive Care & Support",
    description: "Get the best medical care with our 24/7 support team assisting you at every step.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-32 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary uppercase">How It Works</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            Your Medical Journey in 4 Simple Steps
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            We've simplified the entire process to ensure you have a stress-free experience from start to finish.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-y-10 gap-x-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div key={step.title} className="text-center">
                <div className="flex items-center justify-center h-20 w-20 bg-primary/10 rounded-full mx-auto mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold font-headline mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
