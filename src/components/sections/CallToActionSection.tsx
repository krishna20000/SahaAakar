import { Button } from '@/components/ui/button';
import { AnimatedWrapper } from '@/components/AnimatedWrapper';
import Link from 'next/link';

export function CallToActionSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedWrapper animationType="fade-up">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">
            Ready to Elevate Your Brand?
          </h2>
        </AnimatedWrapper>
        <AnimatedWrapper animationType="fade-up" delay="delay-200">
          <p className="mt-6 max-w-xl mx-auto text-lg md:text-xl text-primary-foreground/80">
            Let's discuss how SahaAakar can help you achieve your career goals. Schedule your complimentary consultation today.
          </p>
        </AnimatedWrapper>
        <AnimatedWrapper animationType="fade-up" delay="delay-400">
          <Button 
            asChild
            size="lg" 
            variant="secondary" 
            className="mt-8 md:mt-10 px-10 py-7 text-lg bg-accent text-accent-foreground shadow-lg hover:bg-accent/90 transition-opacity transform hover:scale-105"
          >
             <Link href="mailto:contact@sahaaakar.com?subject=Consultation Request">Schedule Your Free Consultation</Link>
          </Button>
        </AnimatedWrapper>
      </div>
    </section>
  );
}
