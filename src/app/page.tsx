import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { SmartRecommender } from "@/components/sections/smart-recommender";
import { Services } from "@/components/sections/services";
import { PatientStories } from "@/components/sections/patient-stories";
import { Support } from "@/components/sections/support";
import { HowItWorks } from "@/components/sections/how-it-works";


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <HowItWorks />
        <SmartRecommender />
        <PatientStories />
        <Support />
      </main>
      <Footer />
    </div>
  );
}
