import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { Process } from "@/components/sections/process";
import { Cta } from "@/components/sections/cta";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <Process />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
