import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AnimatedWrapper } from '@/components/AnimatedWrapper';
import { ArrowRight } from 'lucide-react';

export function BeforeAfterSection() {
  return (
    <section id="showcase" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedWrapper animationType="fade-up" className="text-center mb-12 md:mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary">Witness the Transformation</h2>
          <p className="mt-4 max-w-xl mx-auto text-lg text-foreground/70">
            See the tangible impact our services can have on your professional brand.
          </p>
        </AnimatedWrapper>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <AnimatedWrapper animationType="slide-in-left" className="h-full">
            <Card className="shadow-xl hover:shadow-2xl transition-shadow duration-300 h-full">
              <CardHeader>
                <CardTitle className="font-headline text-2xl text-center text-destructive">Before SahaAakar</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src="https://images.unsplash.com/photo-1696041760753-c54dca3529f1?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Before profile optimization"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover w-full"
                  data-ai-hint="unfocused profile"
                />
                <p className="mt-4 text-sm text-foreground/70 text-center">
                  Generic, underutilized profile with limited engagement and visibility.
                </p>
              </CardContent>
            </Card>
          </AnimatedWrapper>
          
          <AnimatedWrapper animationType="fade-in" delay="delay-150" className="hidden md:flex justify-center items-center">
             <ArrowRight className="h-16 w-16 text-primary" />
          </AnimatedWrapper>

          <AnimatedWrapper animationType="slide-in-right" delay="delay-300" className="h-full">
            <Card className="shadow-xl hover:shadow-2xl transition-shadow duration-300 h-full">
              <CardHeader>
                <CardTitle className="font-headline text-2xl text-center text-primary">After SahaAakar</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src="https://placehold.co/600x400.png"
                  alt="After profile optimization"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover w-full"
                  data-ai-hint="professional resume"
                />
                <p className="mt-4 text-sm text-foreground/70 text-center">
                  Optimized, compelling profile attracting opportunities and building a strong network.
                </p>
              </CardContent>
            </Card>
          </AnimatedWrapper>
        </div>
      </div>
    </section>
  );
}
