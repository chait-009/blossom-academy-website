import { Target, Heart, TrendingUp } from "lucide-react";

const values = [
  { icon: Heart, title: "Trust", description: "Building lasting relationships with students and parents through transparency and integrity." },
  { icon: Target, title: "Dedication", description: "Committed faculty who go beyond the curriculum to ensure deep conceptual understanding." },
  { icon: TrendingUp, title: "Results", description: "Proven track record of excellent board and competitive exam results year after year." },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">About Our Academy</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mt-3 rounded-full" />
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Blossom Science Academy is a premier coaching institute located in the heart of Chinchwad, dedicated to nurturing young minds and preparing them for academic excellence. Our expert faculty, small batch sizes, and result-oriented approach ensure every student receives personalized attention to reach their fullest potential.
          </p>
          <p className="mt-4 text-base font-semibold text-primary">
            "Believe – Achieve – Succeed"
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {values.map((v) => (
            <div key={v.title} className="bg-card rounded-xl p-8 text-center shadow-md border border-border hover:shadow-lg transition-shadow">
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
  );
};

export default About;
