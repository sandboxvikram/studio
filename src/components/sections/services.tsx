import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plane, Stethoscope, BriefcaseMedical, MessageCircleQuestion } from 'lucide-react';

const services = [
  {
    icon: <BriefcaseMedical className="h-8 w-8 text-primary" />,
    title: "Personalized Treatment Plans",
    description: "Receive comprehensive, transparent treatment plans from JCI and NABH-accredited hospitals, including detailed cost breakdowns.",
  },
  {
    icon: <Plane className="h-8 w-8 text-primary" />,
    title: "End-to-End Travel Logistics",
    description: "We handle your medical visa invitation, flight bookings, and airport transfers for a seamless journey to India.",
  },
  {
    icon: <MessageCircleQuestion className="h-8 w-8 text-primary" />,
    title: "24/7 On-the-Ground Support",
    description: "Our multilingual team is available around the clock to assist with your needs, from local transport to dietary requirements.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Our Services</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            Complete Care for Your Medical Journey to India
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            We provide a comprehensive suite of services to ensure your medical travel is safe, comfortable, and hassle-free.
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
