import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { PatientStories } from "@/components/sections/patient-stories";
import { HowItWorks } from "@/components/sections/how-it-works";
import { BlogSection } from "@/components/sections/blog";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Search, ListChecks, Plane, HeartHandshake } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from "next/image";

const featureImage = PlaceHolderImages.find(p => p.id === 'hospital-1');

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <section className="py-20 sm:py-32">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-primary">A New Approach to Healthcare</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
                Your Health, Your Journey, Simplified
              </p>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                MediConnect is a comprehensive platform designed to make your medical journey seamless and stress-free. We connect you with world-class hospitals and provide end-to-end support, from travel arrangements to post-treatment care.
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
                  Our intelligent recommender analyzes your medical needs, budget, and location preferences to suggest the best hospitals for you. Get personalized results in minutes and take the guesswork out of choosing the right care.
                </p>
                <div className="mt-8">
                  <Button asChild size="lg">
                    <Link href="/recommender">
                      Find a Hospital <ArrowRight className="ml-2 h-5 w-5" />
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