import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Contact from "@/components/Contact";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-5xl font-extrabold text-primary">Contact Us</h1>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">Get in touch with us for admissions, enquiries, or any questions you may have.</p>
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ContactPage;
