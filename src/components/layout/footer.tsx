import { HeartPulse, Github, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-8">
          <Link href="/" className="flex items-center space-x-2">
            <HeartPulse className="h-8 w-8 text-primary" />
            <span className="font-bold text-2xl font-headline">MediConnect</span>
          </Link>
        </div>
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-4 mb-8 text-muted-foreground">
          <Link href="/#services" className="hover:text-primary transition-colors">Services</Link>
          <Link href="/#recommender" className="hover:text-primary transition-colors">Find a Hospital</Link>
          <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
          <Link href="/#testimonials" className="hover:text-primary transition-colors">Testimonials</Link>
          <Link href="/#support" className="hover:text-primary transition-colors">Support</Link>
        </nav>
        <div className="flex justify-center space-x-6 mb-8">
          <Link href="#" aria-label="Twitter">
            <Twitter className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
          </Link>
          <Link href="#" aria-label="GitHub">
            <Github className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
          </Link>
          <Link href="#" aria-label="LinkedIn">
            <Linkedin className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
          </Link>
        </div>
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} MediConnect. All Rights Reserved. Your health, your way.
        </p>
      </div>
    </footer>
  );
}
