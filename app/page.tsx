import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import Features from "@/components/Features";
import ShowcaseCard from "@/components/ShowcaseCard";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-navy-900 relative">
      {/* Ambient Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-purple-glow/10 rounded-full blur-[150px] animate-glow" />
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-soft-blue/10 rounded-full blur-[150px] animate-glow" />
      </div>
      <Navbar />
      <Hero />
      <TrustSection />
      <Features />
      <ShowcaseCard />
      <HowItWorks />
      \n <Testimonials />
      <Pricing />
      <FinalCTA />
      <Footer />
    </main>
  );
}
