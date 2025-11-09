import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, ListChecks, Plane, HeartHandshake } from 'lucide-react';

const steps = [
  {
    icon: <Search className="h-10 w-10 text-primary" />,
    title: "1. Tell Us Your Needs",
    description: "Use our AI recommender to enter your medical condition, preferred city, and budget. It's simple, secure, and takes just a few minutes.",
  },
  {
    icon: <ListChecks className="h-10 w-10 text-primary" />,
    title: "2. Receive Personalized Options",
    description: "Our AI provides a curated list of India's leading hospitals and doctors that match your needs, complete with ratings and accreditations.",
  },
  {
    icon: <Plane className="h-10 w-10 text-primary" />,
    title: "3. Plan Your Medical Travel",
    description: "We handle the logistics for you, from providing medical visa invitation letters to assisting with flight and accommodation bookings.",
  },
  {
    icon: <HeartHandshake className="h-10 w-10 text-primary" />,
    title: "4. Receive World-Class Care",
    description: "Arrive in India with confidence. We provide airport transfers and 24/7 on-ground support to ensure a smooth treatment and recovery experience.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-32 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary uppercase">Your Journey to Health</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            Your Medical Travel to India in 4 Simple Steps
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            We've designed a clear and stress-free process, so you can focus on what truly matters: your health and recovery.
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
