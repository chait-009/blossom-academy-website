import { Button } from "@/components/ui/button";
import { GraduationCap, Users, Award } from "lucide-react";

const stats = [
  { icon: GraduationCap, value: "5+", label: "Years of Excellence" },
  { icon: Users, value: "1000+", label: "Students Guided" },
  { icon: Award, value: "20+", label: "Expert Faculty" },
];

const Hero = () => {
  return (
    <section id="home" className="relative pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
      <div className="relative container mx-auto px-4 py-20 md:py-32 flex flex-col items-center text-center">
        <img src="/logo.png" alt="Blossom Science Academy" className="h-24 w-24 md:h-32 md:w-32 object-contain mb-6" />
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-primary leading-tight max-w-4xl">
          Empowering Minds For <span className="text-secondary">Eternal Futures</span>
        </h1>
        <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-2xl">
          Premier coaching institute in Chinchwad offering comprehensive classes for 8th–12th (SSC/CBSE), Foundation, MHT-CET, JEE, NEET & NDA preparation.
        </p>
        <p className="mt-2 text-sm font-semibold text-primary tracking-wider uppercase">
          Believe – Achieve – Succeed
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <a href="#contact">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold text-base px-8">
              Enroll Now
            </Button>
          </a>
          <a href="#courses">
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold text-base px-8">
              View Courses
            </Button>
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-3xl">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-2 p-6 rounded-xl bg-card shadow-md border border-border">
              <s.icon className="h-8 w-8 text-secondary" />
              <span className="text-2xl font-bold text-primary">{s.value}</span>
              <span className="text-sm text-muted-foreground">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
