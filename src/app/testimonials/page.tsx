import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { PatientStories } from '@/components/sections/patient-stories';

export default function TestimonialsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <PatientStories />
      </main>
      <Footer />
    </div>
  );
}