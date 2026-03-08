import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AnnouncementBanner from "@/components/AnnouncementBanner";
import About from "@/components/About";
import Courses from "@/components/Courses";
import WhyUs from "@/components/WhyUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <AnnouncementBanner />
      <About />
      <Courses />
      <WhyUs />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
