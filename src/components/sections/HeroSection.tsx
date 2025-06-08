
import { Button } from '@/components/ui/button';
import { AnimatedWrapper } from '@/components/AnimatedWrapper';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 bg-gradient-to-br from-background via-purple-50 to-pink-50 overflow-hidden">
      <div className="absolute inset-0 opacity-25" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1701967341617-14499d8bf8c3?q=80&w=1994&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }} data-ai-hint="abstract tech"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <AnimatedWrapper animationType="fade-up">
          <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tight text-primary">
            Craft Your Brand.
          </h1>
        </AnimatedWrapper>
        <AnimatedWrapper animationType="fade-up" delay="delay-200">
          <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tight text-foreground mt-2 md:mt-4">
            Own Your Story.
          </h1>
        </AnimatedWrapper>
        <AnimatedWrapper animationType="fade-up" delay="delay-400">
          <p className="mt-6 md:mt-8 max-w-2xl mx-auto text-lg md:text-xl text-foreground/80">
            SahaAakar empowers professionals, entrepreneurs, and startups to build influential online identities. We help you stand out, build your network, and unlock new opportunities.
          </p>
        </AnimatedWrapper>
        <AnimatedWrapper animationType="fade-up" delay="delay-600">
          <Button 
            asChild
            size="lg" 
            className="mt-8 md:mt-10 px-10 py-7 text-lg bg-gradient-to-r from-primary to-brand-purple-lighter text-primary-foreground shadow-lg hover:opacity-90 transition-opacity transform hover:scale-105"
          >
            <Link href="#contact">Book a Free Consultation</Link>
          </Button>
        </AnimatedWrapper>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
}

