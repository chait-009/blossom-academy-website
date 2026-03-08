import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sneha Patil",
    role: "10th SSC — 94.60%",
    text: "Blossom Science Academy helped me understand difficult concepts with ease. The teachers are always available for doubt clearing and the regular tests boosted my confidence for boards.",
    rating: 5,
  },
  {
    name: "Rahul Deshmukh",
    role: "Parent of 9th Std Student",
    text: "My son's performance improved drastically after joining Blossom. The small batch sizes mean he gets personal attention, and the monthly progress reports keep us informed.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "MHT-CET Aspirant",
    text: "The foundation course at Blossom gave me a head start for CET preparation. The faculty explains everything from basics to advanced level, which helped me score well in competitive exams.",
    rating: 5,
  },
  {
    name: "Aditya Kulkarni",
    role: "JEE Foundation Student",
    text: "The problem-solving approach at Blossom is excellent. The teachers don't just teach formulas — they make you understand the logic behind them. Best coaching in Chinchwad!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">What Our Students Say</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mt-3 rounded-full" />
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Hear from students and parents who have experienced the Blossom difference.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-lg transition-shadow flex flex-col"
            >
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground flex-1 leading-relaxed">"{t.text}"</p>
              <div className="mt-4 pt-4 border-t border-border">
                <p className="font-semibold text-foreground text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
