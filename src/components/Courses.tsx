import { BookOpen, FlaskConical, Atom, Microscope, Shield, Rocket, GraduationCap, Brain, Swords } from "lucide-react";
import { Button } from "@/components/ui/button";

const courses = [
  { icon: BookOpen, title: "8th–10th SSC Board", description: "Comprehensive coaching for Maharashtra SSC Board with focus on Science and Maths fundamentals." },
  { icon: GraduationCap, title: "8th–10th CBSE Board", description: "Structured CBSE coaching with NCERT-aligned curriculum and regular assessments." },
  { icon: Brain, title: "11th–12th Regular", description: "In-depth subject coaching for Science stream (PCM/PCB) with board exam preparation." },
  { icon: Rocket, title: "11th–12th Integrated", description: "Board + competitive exam preparation in an integrated format for maximum efficiency." },
  { icon: Atom, title: "Foundation Program", description: "Early preparation program building strong fundamentals for future competitive exams." },
  { icon: FlaskConical, title: "MHT-CET Preparation", description: "Targeted preparation for Maharashtra CET with extensive practice and mock tests." },
  { icon: Microscope, title: "IIT-JEE Preparation", description: "Rigorous coaching for JEE Main & Advanced with problem-solving and concept clarity." },
  { icon: Shield, title: "NEET Preparation", description: "Focused NEET coaching covering Physics, Chemistry, and Biology with regular testing." },
  { icon: Swords, title: "NDA Preparation", description: "Comprehensive NDA exam preparation covering Mathematics and General Ability." },
];

const Courses = () => {
  return (
    <section id="courses" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Courses</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mt-3 rounded-full" />
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            We offer a wide range of courses tailored to help students excel in board exams and competitive entrance tests.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {courses.map((c) => (
            <div
              key={c.title}
              className="bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-lg hover:border-primary/30 transition-all group"
            >
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors mb-4">
                <c.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg text-foreground mb-2">{c.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{c.description}</p>
              <a href="#contact">
                <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Enquire Now
                </Button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
