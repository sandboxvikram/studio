import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, ListChecks, Plane, HeartHandshake } from 'lucide-react';

const steps = [
  {
    icon: <Search className="h-10 w-10 text-primary" />,
    title: "1. Share Your Medical Needs",
    description: "Tell us about your condition and treatment needs. Our AI platform finds top Indian hospitals specializing in your required care.",
  },
  {
    icon: <ListChecks className="h-10 w-10 text-primary" />,
    title: "2. Receive Curated Plans",
    description: "Get personalized treatment plans, transparent cost estimates, and profiles of leading doctors and accredited hospitals.",
  },
  {
    icon: <Plane className="h-10 w-10 text-primary" />,
    title: "3. Plan Your Trip to India",
    description: "We assist with visa paperwork, book your flights, and arrange comfortable accommodation near your chosen hospital.",
  },
  {
    icon: <HeartHandshake className="h-10 w-10 text-primary" />,
    title: "4. Arrive and Receive Care",
    description: "You'll be greeted at the airport. We provide 24/7 multilingual support throughout your treatment and recovery in India.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-32 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary uppercase">Your Journey to Health</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            A Seamless Medical Travel Experience in 4 Steps
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            From your home to your recovery in India, we've designed a stress-free process so you can focus on what matters most: your health.
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
