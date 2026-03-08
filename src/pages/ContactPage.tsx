import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Contact from "@/components/Contact";
import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";

const quickInfo = [
  {
    icon: Phone,
    title: "Call Us Directly",
    description: "Speak to our counselors for instant guidance",
    action: "99221 97616 / 99221 97709",
    href: "tel:9922197616",
  },
  {
    icon: Clock,
    title: "Working Hours",
    description: "We're available to help you during",
    action: "Mon–Sat, 8:00 AM – 8:00 PM",
    href: null,
  },
  {
    icon: MapPin,
    title: "Visit Our Centre",
    description: "Come see our facilities in person",
    action: "Chinchwad, Pune",
    href: "https://maps.google.com/?q=18.628921771071127,73.77547129142962",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Us",
    description: "Quick responses on WhatsApp",
    action: "Chat Now",
    href: "https://wa.me/919922197616",
  },
];

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--secondary)/0.15),transparent_60%)]" />
          <div className="container mx-auto px-4 text-center relative">
            <h1 className="text-3xl md:text-5xl font-extrabold text-primary-foreground">
              Get In Touch
            </h1>
            <p className="mt-4 text-primary-foreground/80 max-w-2xl mx-auto text-lg">
              Have questions about admissions, courses, or fees? We're here to help you take the next step in your academic journey.
            </p>
            <Link to="/request-callback">
              <Button
                size="lg"
                className="mt-8 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold text-base px-8"
              >
                Request a Callback
              </Button>
            </Link>
          </div>
        </section>

        {/* Quick Contact Cards */}
        <section className="py-12 -mt-8 relative z-10">
          <div className="container mx-auto px-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {quickInfo.map((item, i) => (
                <ScrollReveal key={item.title} delay={i * 0.1}>
                  <div className="bg-card rounded-xl p-6 border border-border shadow-md text-center hover:shadow-lg transition-shadow h-full">
                    <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 mb-3">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground text-sm">{item.title}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="mt-2 inline-block text-sm font-semibold text-primary hover:text-secondary transition-colors"
                      >
                        {item.action}
                      </a>
                    ) : (
                      <p className="mt-2 text-sm font-semibold text-primary">{item.action}</p>
                    )}
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Main Contact Section */}
        <Contact />

        {/* FAQ-style info */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <ScrollReveal>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Still Have Questions?</h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Don't hesitate to reach out. Our team is ready to assist you with admissions, batch schedules, fee structure, and more.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:9922197616">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold w-full sm:w-auto">
                    Call: 99221 97616
                  </Button>
                </a>
                <a href="https://wa.me/919922197616" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold w-full sm:w-auto">
                    WhatsApp Us
                  </Button>
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ContactPage;
