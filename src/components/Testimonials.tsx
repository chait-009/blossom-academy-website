import { useState, useEffect, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { motion, AnimatePresence } from "framer-motion";

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
  {
    name: "Meera Joshi",
    role: "8th Std Student",
    text: "I love studying at Blossom! The teachers make even tough Science topics fun and easy. My grades have improved a lot since I joined.",
    rating: 5,
  },
  {
    name: "Vikram Pawar",
    role: "Parent of 10th Std Student",
    text: "The dedication of the faculty at Blossom is unmatched. They go above and beyond to ensure every child understands the concepts thoroughly.",
    rating: 5,
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  // Auto-advance every 5s
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const t = testimonials[current];

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
  };

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">What Our Students Say</h2>
            <div className="w-20 h-1 bg-secondary mx-auto mt-3 rounded-full" />
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Hear from students and parents who have experienced the Blossom difference.
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-2xl mx-auto">
          <div className="relative min-h-[250px] flex items-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="w-full"
              >
                <div className="bg-card rounded-2xl p-8 md:p-10 border border-border shadow-md text-center">
                  <div className="flex justify-center gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                    ))}
                  </div>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed italic">
                    "{t.text}"
                  </p>
                  <div className="mt-6 pt-4 border-t border-border">
                    <p className="font-semibold text-foreground">{t.name}</p>
                    <p className="text-sm text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="h-10 w-10 rounded-full border border-border bg-card flex items-center justify-center hover:bg-primary/10 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5 text-foreground" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                  className={`h-2.5 rounded-full transition-all duration-300 ${i === current ? "w-8 bg-primary" : "w-2.5 bg-border hover:bg-primary/40"}`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="h-10 w-10 rounded-full border border-border bg-card flex items-center justify-center hover:bg-primary/10 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5 text-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
