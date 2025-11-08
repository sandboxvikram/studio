import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Layers, MousePointerClick, Smartphone } from 'lucide-react';

const features = [
  {
    icon: <Layers className="h-8 w-8 text-primary" />,
    title: "Structured Content",
    description: "Display your content in a structured, visually appealing manner using modern components and layouts.",
  },
  {
    icon: <MousePointerClick className="h-8 w-8 text-primary" />,
    title: "Interactive Elements",
    description: "Engage your users with interactive elements like buttons, forms, and sliders for a dynamic experience.",
  },
  {
    icon: <Smartphone className="h-8 w-8 text-primary" />,
    title: "Responsive Design",
    description: "Our designs are fully responsive, ensuring a seamless experience across all devices, from desktops to mobile phones.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Core Features</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            Everything you need for a stunning web presence
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Web Weaver provides a comprehensive toolkit to build and showcase your digital identity with style and functionality.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {features.map((feature) => (
              <Card key={feature.title} className="transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <CardHeader>
                  {feature.icon}
                  <CardTitle className="mt-4">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
