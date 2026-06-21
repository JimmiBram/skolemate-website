import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PartnerBar from "@/components/PartnerBar";
import FeatureCards from "@/components/FeatureCards";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import ChatIntroSection from "@/components/ChatIntroSection";
import PricingSection from "@/components/PricingSection";
import FAQ from "@/components/FAQ";
import TrustBadges from "@/components/TrustBadges";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import StructuredData from "@/components/StructuredData";

const Index = () => {
  return (
    <>
      <StructuredData />
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <FeatureCards />
          <TestimonialCarousel />
          <ChatIntroSection />
          <PartnerBar />
          <PricingSection />
          <FAQ />
          <TrustBadges />
          <ContactForm />
        </main>
        <Footer />
        <CookieBanner />
      </div>
    </>
  );
};

export default Index;
