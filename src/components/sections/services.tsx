import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plane, Stethoscope, BriefcaseMedical, MessageCircleQuestion } from 'lucide-react';

const services = [
  {
    icon: <BriefcaseMedical className="h-8 w-8 text-primary" />,
    title: "AI-Powered Hospital Matching",
    description: "Our intelligent recommender connects you with JCI and NABH-accredited hospitals and renowned doctors perfectly suited to your medical needs.",
  },
  {
    icon: <Plane className="h-8 w-8 text-primary" />,
    title: "Complete Travel Assistance",
    description: "We simplify your journey by assisting with medical visa invitations, flight and accommodation booking, and airport transfers in India.",
  },
  {
    icon: <MessageCircleQuestion className="h-8 w-8 text-primary" />,
    title: "Dedicated On-Ground Support",
    description: "Our multilingual support team is available 24/7 in India to help with local travel, appointments, and any other needs you may have.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Our Services</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            End-to-End Support for Your Medical Journey
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            MediConnect is more than a discovery platform. We provide a complete suite of services to ensure your medical travel to India is safe, seamless, and stress-free.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {services.map((service) => (
              <Card key={service.title} className="transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <CardHeader>
                  {service.icon}
                  <CardTitle className="mt-4">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
