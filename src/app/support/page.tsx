import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Support } from '@/components/sections/support';

export default function SupportPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Support />
      </main>
      <Footer />
    </div>
  );
}