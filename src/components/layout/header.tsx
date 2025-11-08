"use client";

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, HeartPulse } from "lucide-react";
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: "/#services", label: "Services" },
  { href: "/#recommender", label: "Find a Hospital" },
  { href: "/blog", label: "Blog" },
  { href: "/#testimonials", label: "Testimonials" },
  { href: "/#support", label: "Support" },
];

export function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      isScrolled || pathname !== '/' ? "border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60" : "bg-transparent"
    )}>
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <div className="mr-4 flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <HeartPulse className="h-7 w-7 text-primary" />
            <span className="font-bold text-xl font-headline">MediConnect</span>
          </Link>
          <nav className="hidden gap-6 text-sm md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-medium text-foreground/70 transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-2">
          <Button asChild className="hidden sm:inline-flex">
            <Link href="/#recommender">Get Started</Link>
          </Button>
          <Button variant="outline" className="hidden sm:inline-flex">
             <Link href="/#support">Contact Us</Link>
          </Button>
          <Sheet open={isMenuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <Link href="/" className="mb-8 flex items-center" onClick={closeMenu}>
                <HeartPulse className="mr-2 h-7 w-7 text-primary" />
                <span className="font-bold text-xl font-headline">MediConnect</span>
              </Link>
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-lg font-medium text-foreground/80 transition-colors hover:text-foreground"
                    onClick={closeMenu}
                  >
                    {link.label}
                  </Link>
                ))}
                 <Button asChild className="mt-4">
                    <Link href="/#recommender">Get Started</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
