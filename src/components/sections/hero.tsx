import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { MoveRight } from 'lucide-react';
import Image from 'next/image';

const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');

export function Hero() {
  return (
    <section className="relative h-[80vh] min-h-[500px] w-full">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="container text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl font-headline">
            Weave Your Web Presence
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-foreground/80 md:text-xl">
            Crafting beautiful, responsive, and engaging web experiences tailored to your needs.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild size="lg">
              <a href="#features">
                Learn More <MoveRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#contact">Contact Us</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
