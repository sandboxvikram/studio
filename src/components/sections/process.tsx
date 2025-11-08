import { Award, Code, Rocket, Search } from 'lucide-react';

const processSteps = [
    {
        icon: <Search className="h-8 w-8" />,
        title: "1. Discover",
        description: "We start by understanding your vision, goals, and audience to lay a solid foundation for your project."
    },
    {
        icon: <Award className="h-8 w-8" />,
        title: "2. Design",
        description: "Our team crafts a stunning, user-centric design that reflects your brand and engages your visitors."
    },
    {
        icon: <Code className="h-8 w-8" />,
        title: "3. Develop",
        description: "Using the latest technologies, we bring the design to life with clean, efficient, and scalable code."
    },
    {
        icon: <Rocket className="h-8 w-8" />,
        title: "4. Deploy",
        description: "After rigorous testing, we launch your website, ensuring a smooth and successful deployment."
    }
]

export function Process() {
  return (
    <section id="process" className="bg-muted/50 py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Our Process</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            A Journey from Idea to Reality
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Our streamlined process ensures quality and efficiency at every stage of your project's development.
          </p>
        </div>

        <div className="relative mt-16">
          <div className="absolute left-1/2 top-0 -ml-[1px] h-full w-0.5 bg-border" aria-hidden="true" />
          {processSteps.map((step, index) => (
            <div key={step.title} className="group relative mb-12">
              <div className="flex items-center md:justify-center">
                <div className={`flex flex-col items-center text-center md:w-1/2 ${index % 2 === 0 ? 'md:items-end md:pr-16 md:text-right' : 'md:items-start md:pl-16 md:text-left'}`}>
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md absolute left-1/2 -translate-x-1/2 md:translate-x-0 md:static">
                    {step.icon}
                  </div>
                  <div className="mt-4 md:mt-0">
                    <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                    <p className="mt-2 text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
