import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default function TermsOfServicePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="font-headline text-4xl font-bold text-primary mb-8">Terms of Service</h1>
        <div className="prose lg:prose-xl max-w-none">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <p>
            Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the SahaAakar website 
            (the "Service") operated by SahaAakar ("us", "we", or "our").
          </p>
          <p>
            Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. 
            These Terms apply to all visitors, users and others who access or use the Service.
          </p>
          <p>
            By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the 
            terms then you may not access the Service.
          </p>

          <h2 className="font-headline text-2xl font-bold text-primary mt-6 mb-4">AI Profile Analysis</h2>
          <p>
            Our Service includes an AI Profile Analysis tool. By using this tool, you grant us permission to process the 
            information you provide (profile summary, desired job) to generate suggestions. The suggestions are for 
            informational purposes only and do not constitute professional advice. We are not liable for any actions 
            taken based on these suggestions.
          </p>

          <h2 className="font-headline text-2xl font-bold text-primary mt-6 mb-4">Intellectual Property</h2>
          <p>
            The Service and its original content (excluding content provided by users), features and functionality are 
            and will remain the exclusive property of SahaAakar and its licensors.
          </p>
          
          <h2 className="font-headline text-2xl font-bold text-primary mt-6 mb-4">Links To Other Web Sites</h2>
          <p>
            Our Service may contain links to third-party web sites or services that are not owned or controlled by SahaAakar.
            SahaAakar has no control over, and assumes no responsibility for, the content, privacy policies, or practices 
            of any third party web sites or services. You further acknowledge and agree that SahaAakar shall not be responsible 
            or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with 
            use of or reliance on any such content, goods or services available on or through any such web sites or services.
          </p>
          
          <h2 className="font-headline text-2xl font-bold text-primary mt-6 mb-4">Changes</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is 
            material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes 
            a material change will be determined at our sole discretion.
          </p>
          
          <h2 className="font-headline text-2xl font-bold text-primary mt-6 mb-4">Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at contact@sahaaakar.com.
          </p>
          <p>Content to be filled and reviewed by SahaAakar legal team.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
