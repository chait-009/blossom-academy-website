import { Users, BookCheck, UserCheck, ClipboardCheck, HelpCircle, Trophy } from "lucide-react";

const features = [
  { icon: Users, title: "Experienced Faculty", description: "Highly qualified and passionate teachers with years of teaching experience." },
  { icon: UserCheck, title: "Small Batch Sizes", description: "Limited students per batch ensuring individual attention and better learning." },
  { icon: BookCheck, title: "Personalized Attention", description: "Customized study plans and mentoring for each student's unique needs." },
  { icon: ClipboardCheck, title: "Regular Testing", description: "Frequent tests and assessments to track progress and identify improvement areas." },
  { icon: HelpCircle, title: "Doubt-Solving Sessions", description: "Dedicated doubt-clearing sessions to ensure no concept is left unclear." },
  { icon: Trophy, title: "Result-Oriented Approach", description: "Focused methodology designed to deliver outstanding exam results consistently." },
];

const WhyUs = () => {
  return (
    <section id="why-us" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">Why Choose Us</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mt-3 rounded-full" />
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Discover what sets Blossom Science Academy apart and makes us the preferred choice for students and parents in Chinchwad.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((f) => (
            <div key={f.title} className="bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-lg transition-shadow text-center">
              <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-secondary/15 mb-4">
                <f.icon className="h-7 w-7 text-secondary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
