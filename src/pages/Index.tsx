import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import BlogSection from "@/components/BlogSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <BlogSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
