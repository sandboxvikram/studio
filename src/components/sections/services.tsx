import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plane, Stethoscope, BriefcaseMedical, MessageCircleQuestion, HeartHandshake, FileCheck, Hotel, Languages, Repeat } from 'lucide-react';

const services = [
  {
    icon: <BriefcaseMedical className="h-8 w-8 text-primary" />,
    title: "AI-Powered Hospital Matching",
    description: "Our intelligent platform analyzes your medical needs, budget, and preferences to provide a curated list of India's top JCI-accredited hospitals. Get data-driven recommendations for world-class specialists and facilities, ensuring you receive the highest standard of care.",
  },
  {
    icon: <Plane className="h-8 w-8 text-primary" />,
    title: "End-to-End Travel Logistics",
    description: "We handle all the complexities of your journey. This includes arranging medical visa invitation letters, booking flights that fit your schedule, and securing comfortable accommodation near your chosen hospital, from trusted guesthouses to luxury hotels.",
  },
  {
    icon: <HeartHandshake className="h-8 w-8 text-primary" />,
    title: "Dedicated On-Ground Support",
    description: "From the moment you land, your dedicated case manager is there for you. We provide airport transfers, manage all your hospital appointments, facilitate communication with medical staff, and offer 24/7 multilingual support for any needs that arise during your stay.",
  },
  {
    icon: <Repeat className="h-8 w-8 text-primary" />,
    title: "Post-Treatment & Wellness Support",
    description: "Our care continues even after your treatment. We assist with follow-up virtual consultations with your doctor, help you manage prescriptions, and can arrange recuperative wellness retreats (like yoga or Ayurveda) to support your full recovery.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">A Service for Every Step</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            Your Comprehensive Medical Travel Partner
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            MediConnect is more than a platform—we are your dedicated partner. We provide a complete suite of services to ensure your medical journey to India is safe, seamless, and centered around your well-being.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Card key={service.title} className="transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-xl bg-background/50">
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
