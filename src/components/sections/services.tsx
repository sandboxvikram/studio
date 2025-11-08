import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plane, Stethoscope, BriefcaseMedical } from 'lucide-react';

const services = [
  {
    icon: <BriefcaseMedical className="h-8 w-8 text-primary" />,
    title: "Personalized Treatment Plans",
    description: "Receive tailored treatment plans including cost estimates, recovery timelines, and recommended partner hospitals.",
  },
  {
    icon: <Plane className="h-8 w-8 text-primary" />,
    title: "Integrated Travel & Stay",
    description: "Book flights, trains, and accommodations near your chosen hospital directly through our platform.",
  },
  {
    icon: <Stethoscope className="h-8 w-8 text-primary" />,
    title: "Smart Hospital Recommender",
    description: "Our AI-powered tool suggests the best hospitals and doctors based on your unique medical needs and preferences.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Our Services</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            A Complete Platform for Your Medical Journey
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            From finding the right doctor to booking your travel, MediConnect simplifies every step of your medical travel experience.
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
