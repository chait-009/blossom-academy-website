import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AnnouncementBanner from "@/components/AnnouncementBanner";
import About from "@/components/About";
import Courses from "@/components/Courses";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEOHead from "@/components/SEOHead";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Blossom Science Academy | Best Science Coaching in Chinchwad, Pune"
        description="Blossom Science Academy – Premier coaching institute in Chinchwad for 8th-12th SSC/CBSE, JEE, NEET, MHT-CET & NDA preparation. Empowering Minds For Eternal Futures."
        canonical="/"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          name: "Blossom Science Academy",
          url: "https://blossomscienceacademy.com",
          logo: "https://blossomscienceacademy.com/logo.png",
          description: "Premier coaching institute in Chinchwad for 8th-12th SSC/CBSE, JEE, NEET, MHT-CET & NDA preparation.",
          address: { "@type": "PostalAddress", addressLocality: "Chinchwad", addressRegion: "Pune", addressCountry: "IN" },
          telephone: "+91-9922197616",
          email: "contact@blossomscienceacademy.in",
          sameAs: [
            "https://www.instagram.com/blossom_science_academy/",
            "https://www.facebook.com/blossomscienceacademy",
            "https://www.youtube.com/@blossomscienceacademy"
          ]
        }}
      />
      <Navbar />
      <Hero />
      <AnnouncementBanner />
      <About />
      <Courses />
      <WhyUs />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
