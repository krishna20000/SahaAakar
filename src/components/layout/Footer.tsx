import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-muted/50 py-12 text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <Link href="/" className="font-headline text-2xl font-bold text-primary">
              SahaAakar
            </Link>
            <p className="mt-2 text-sm text-foreground/70">
              Crafting powerful online identities.
            </p>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="#why-us" className="hover:text-primary transition-colors">Why Choose Us</Link></li>
              <li><Link href="#ai-analyzer" className="hover:text-primary transition-colors">AI Profile Analyzer</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold mb-3">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="mailto:contact@sahaaakar.com" className="hover:text-primary transition-colors">contact@sahaaakar.com</a></li>
              {/* Optional: Add phone number or address */}
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-border pt-8 text-center text-sm text-foreground/60">
          <p>&copy; {currentYear} SahaAakar. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <span>&bull;</span>
            <Link href="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
          <p className="mt-4">Made by CodeCrafter</p>
        </div>
      </div>
    </footer>
  );
}
