import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="font-headline text-4xl font-bold text-primary mb-8">Privacy Policy</h1>
        <div className="prose lg:prose-xl max-w-none">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <p>
            Welcome to SahaAakar. We are committed to protecting your personal information and your right to privacy. 
            If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information, 
            please contact us at contact@sahaaakar.com.
          </p>
          <p>
            This privacy notice describes how we might use your information if you:
          </p>
          <ul>
            <li>Visit our website at [Your Website URL]</li>
            <li>Engage with us in other related ways ― including any sales, marketing, or events</li>
          </ul>
          <p>
            In this privacy notice, if we refer to:
          </p>
          <ul>
            <li>"Website," we are referring to any website of ours that references or links to this policy</li>
            <li>"Services," we are referring to our Website, and other related services, including any sales, marketing, or events</li>
          </ul>
          <p>
            The purpose of this privacy notice is to explain to you in the clearest way possible what information we collect, 
            how we use it, and what rights you have in relation to it. If there are any terms in this privacy notice that you 
            do not agree with, please discontinue use of our Services immediately.
          </p>

          <h2 className="font-headline text-2xl font-bold text-primary mt-6 mb-4">1. WHAT INFORMATION DO WE COLLECT?</h2>
          <p>
            <strong>Personal information you disclose to us</strong>
          </p>
          <p>
            <em>In Short: We collect personal information that you provide to us.</em>
          </p>
          <p>
            We collect personal information that you voluntarily provide to us when you express an interest in obtaining 
            information about us or our products and Services, when you participate in activities on the Website or otherwise 
            when you contact us.
          </p>
          <p>
            The personal information that we collect depends on the context of your interactions with us and the Website, 
            the choices you make and the products and features you use. The personal information we collect may include the following: 
            Name, Email Address, Profile Summary, Desired Job (for AI Analysis).
          </p>

          <h2 className="font-headline text-2xl font-bold text-primary mt-6 mb-4">2. HOW DO WE USE YOUR INFORMATION?</h2>
          <p>
            <em>In Short: We process your information for purposes based on legitimate business interests, the fulfillment 
            of our contract with you, compliance with our legal obligations, and/or your consent.</em>
          </p>
          <p>
            We use personal information collected via our Website for a variety of business purposes described below. 
            We process your personal information for these purposes in reliance on our legitimate business interests, 
            in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
          </p>
          <ul>
            <li>To provide and manage your requested services (e.g., AI Profile Analysis).</li>
            <li>To respond to user inquiries/offer support to users.</li>
            <li>To send administrative information to you.</li>
            <li>To protect our Services.</li>
            <li>For other Business Purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Website, products, marketing and your experience.</li>
          </ul>
          {/* Add more sections as needed */}
          <p>Content to be filled by SahaAakar legal team.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
