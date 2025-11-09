import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { AIBot } from '@/components/sections/ai-bot';

export default function BotPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <AIBot />
      </main>
      <Footer />
    </div>
  );
}
