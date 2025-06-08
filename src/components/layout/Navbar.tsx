'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useState } from 'react';

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#showcase', label: 'Showcase' },
  { href: '#why-us', label: 'Why Us' },
  { href: '#ai-analyzer', label: 'AI Analyzer' },
  { href: '#contact', label: 'Contact' },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-headline text-2xl font-bold text-primary">SahaAakar</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-foreground/70 transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-2">
          <Button 
            asChild
            className="hidden md:inline-flex bg-gradient-to-r from-primary to-brand-purple-lighter text-primary-foreground hover:opacity-90 transition-opacity transform hover:scale-105"
          >
            <Link href="#contact">Book a Call</Link>
          </Button>
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[360px] p-0">
              <div className="p-6">
                <Link href="/" className="mb-6 block" onClick={handleLinkClick}>
                  <span className="font-headline text-2xl font-bold text-primary">SahaAakar</span>
                </Link>
                <nav className="flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="text-lg text-foreground/80 transition-colors hover:text-foreground"
                      onClick={handleLinkClick}
                    >
                      {link.label}
                    </Link>
                  ))}
                   <Button 
                    asChild
                    className="w-full mt-4 bg-gradient-to-r from-primary to-brand-purple-lighter text-primary-foreground hover:opacity-90 transition-opacity"
                    onClick={handleLinkClick}
                  >
                    <Link href="#contact">Book a Call</Link>
                  </Button>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
