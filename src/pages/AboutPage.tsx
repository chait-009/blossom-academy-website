import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Target, Heart, TrendingUp, Users, BookOpen, Award } from "lucide-react";

const values = [
  { icon: Heart, title: "Trust", description: "Building lasting relationships with students and parents through transparency and integrity." },
  { icon: Target, title: "Dedication", description: "Committed faculty who go beyond the curriculum to ensure deep conceptual understanding." },
  { icon: TrendingUp, title: "Results", description: "Proven track record of excellent board and competitive exam results year after year." },
];

const stats = [
  { icon: Users, value: "1000+", label: "Students Guided" },
  { icon: BookOpen, value: "12+", label: "Courses Offered" },
  { icon: Award, value: "20+", label: "Expert Faculty" },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-5xl font-extrabold text-primary">About Blossom Science Academy</h1>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">Premier coaching institute in Chinchwad, empowering students for academic excellence since day one.</p>
          </div>
        </section>

        {/* Mission */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-primary">Our Mission</h2>
              <div className="w-20 h-1 bg-secondary mx-auto mt-3 rounded-full" />
            </div>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>Blossom Science Academy is a premier coaching institute located in the heart of Chinchwad, dedicated to nurturing young minds and preparing them for academic excellence. Our expert faculty, small batch sizes, and result-oriented approach ensure every student receives personalized attention to reach their fullest potential.</p>
              <p>We offer comprehensive coaching for 8th to 12th standard students across SSC and CBSE boards, along with specialized preparation for competitive exams like MHT-CET, JEE, NEET, NDA, and IISER.</p>
              <p className="text-primary font-semibold text-center text-xl">"Believe – Achieve – Succeed"</p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-primary">Our Core Values</h2>
              <div className="w-20 h-1 bg-secondary mx-auto mt-3 rounded-full" />
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {values.map((v) => (
                <div key={v.title} className="bg-card rounded-xl p-8 text-center shadow-md border border-border">
                  <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-primary/10 mb-4">
                    <v.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground">{v.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col items-center gap-2 p-6 rounded-xl bg-card shadow-md border border-border">
                  <s.icon className="h-8 w-8 text-secondary" />
                  <span className="text-3xl font-bold text-primary">{s.value}</span>
                  <span className="text-sm text-muted-foreground">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default AboutPage;
