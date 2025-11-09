import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { PatientStories } from "@/components/sections/patient-stories";
import { HowItWorks } from "@/components/sections/how-it-works";
import { BlogSection } from "@/components/sections/blog";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from "next/image";

const featureImage = PlaceHolderImages.find(p => p.id === 'recommender-feature');

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <section className="py-20 sm:py-32">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-primary">Why Choose India for Your Healthcare?</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
                World-Class Medical Care at a Fraction of the Cost
              </p>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                India is a leading destination for medical tourism, offering a unique combination of cutting-edge technology, highly skilled doctors, and significant cost savings. MediConnect helps you access this world-class ecosystem with confidence and ease.
              </p>
            </div>
          </div>
        </section>
        
        <Services />
        
        <HowItWorks />

        <section className="py-20 sm:py-32">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
                  Find the Right Hospital with Our AI-Powered Recommender
                </h2>
                <p className="mt-6 text-lg leading-8 text-muted-foreground">
                  Stop the guesswork. Our intelligent platform analyzes your medical needs, budget, and location preferences to recommend the best JCI-accredited hospitals and specialists for you. Get a personalized, data-driven plan in minutes.
                </p>
                <div className="mt-8">
                  <Button asChild size="lg">
                    <Link href="/recommender">
                      Get Your Free Recommendations <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
              {featureImage && (
                <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={featureImage.imageUrl}
                    alt={featureImage.description}
                    fill
                    className="object-cover"
                    data-ai-hint={featureImage.imageHint}
                  />
                </div>
              )}
            </div>
          </div>
        </section>

        <PatientStories />
        
        <BlogSection />
        
      </main>
      <Footer />
    </div>
  );
}
