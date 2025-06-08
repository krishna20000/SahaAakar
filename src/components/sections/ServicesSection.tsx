import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LinkedInIcon } from '@/components/icons/LinkedInIcon';
import { PersonalBrandingIcon } from '@/components/icons/PersonalBrandingIcon';
import { CopywritingIcon } from '@/components/icons/CopywritingIcon';
import { AnimatedWrapper } from '@/components/AnimatedWrapper';

const services = [
  {
    icon: LinkedInIcon,
    title: 'LinkedIn Optimization',
    description: 'Transform your LinkedIn profile into a powerful magnet for recruiters and connections. We optimize every section for maximum impact.',
    dataAiHint: 'linkedin optimization'
  },
  {
    icon: PersonalBrandingIcon,
    title: 'Personal Branding',
    description: 'Define and build a compelling personal brand that showcases your unique strengths, values, and expertise to your target audience.',
    dataAiHint: 'personal brand'
  },
  {
    icon: CopywritingIcon,
    title: 'Strategic Copywriting',
    description: 'Craft persuasive and engaging content for your profile, posts, and outreach that resonates with your audience and drives action.',
    dataAiHint: 'creative writing'
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedWrapper animationType="fade-up" className="text-center mb-12 md:mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary">Our Expertise</h2>
          <p className="mt-4 max-w-xl mx-auto text-lg text-foreground/70">
            We offer a suite of services designed to elevate your professional presence.
          </p>
        </AnimatedWrapper>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedWrapper key={service.title} animationType="fade-up" delay={`delay-${index * 150}`}>
              <Card className="h-full transform hover:scale-105 transition-transform duration-300 ease-out shadow-lg hover:shadow-2xl overflow-hidden group">
                <CardHeader className="items-center text-center">
                  <div className="p-4 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-12 w-12 text-primary" />
                  </div>
                  <CardTitle className="font-headline text-2xl text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-foreground/70">{service.description}</p>
                </CardContent>
              </Card>
            </AnimatedWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
