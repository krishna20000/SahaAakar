import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ExpertGuidanceIcon } from '@/components/icons/ExpertGuidanceIcon';
import { ProvenResultsIcon } from '@/components/icons/ProvenResultsIcon';
import { PersonalizedStrategyIcon } from '@/components/icons/PersonalizedStrategyIcon';
import { UnlockOpportunitiesIcon } from '@/components/icons/UnlockOpportunitiesIcon';
import { AnimatedWrapper } from '@/components/AnimatedWrapper';

const trustPoints = [
  {
    icon: ExpertGuidanceIcon,
    title: 'Expert Guidance',
    description: 'Benefit from our deep expertise in personal branding, LinkedIn algorithms, and market trends.',
  },
  {
    icon: ProvenResultsIcon,
    title: 'Proven Results',
    description: 'Our strategies have helped numerous clients achieve significant career growth and visibility.',
  },
  {
    icon: PersonalizedStrategyIcon,
    title: 'Personalized Strategy',
    description: 'We tailor every plan to your unique goals, industry, and aspirations for maximum effectiveness.',
  },
  {
    icon: UnlockOpportunitiesIcon,
    title: 'Unlock Opportunities',
    description: 'A powerful brand opens doors to new roles, partnerships, and industry recognition.',
  },
];

export function WhyChooseUsSection() {
  return (
    <section id="why-us" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedWrapper animationType="fade-up" className="text-center mb-12 md:mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary">Why Partner With SahaAakar?</h2>
          <p className="mt-4 max-w-xl mx-auto text-lg text-foreground/70">
            We are dedicated to your success and providing unparalleled value.
          </p>
        </AnimatedWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustPoints.map((point, index) => (
            <AnimatedWrapper key={point.title} animationType="fade-up" delay={`delay-${index * 150}`}>
              <Card className="h-full text-center transform hover:scale-105 transition-transform duration-300 ease-out shadow-lg hover:shadow-xl group">
                <CardHeader className="items-center">
                  <div className="p-3 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                     <point.icon className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle className="font-headline text-xl text-foreground">{point.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/70">{point.description}</p>
                </CardContent>
              </Card>
            </AnimatedWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
