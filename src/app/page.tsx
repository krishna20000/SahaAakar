import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { BeforeAfterSection } from '@/components/sections/BeforeAfterSection';
import { WhyChooseUsSection } from '@/components/sections/WhyChooseUsSection';
import { AiProfileAnalyzerSection } from '@/components/sections/AiProfileAnalyzerSection';
import { CallToActionSection } from '@/components/sections/CallToActionSection';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <ServicesSection />
        <BeforeAfterSection />
        <WhyChooseUsSection />
        <AiProfileAnalyzerSection />
        <CallToActionSection />
      </main>
      <Footer />
    </div>
  );
}
