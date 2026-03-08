import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { courses, getCategories } from "@/data/courseData";
import { Clock, Users, GraduationCap, ArrowRight } from "lucide-react";
import { useState } from "react";

const CoursesPage = () => {
  const categories = getCategories();
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filtered = activeCategory === "All" ? courses : courses.filter((c) => c.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-5xl font-extrabold text-primary">Our Courses</h1>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">Comprehensive programs designed to help students excel in board exams and competitive entrance tests.</p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            {/* Category filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              <Button variant={activeCategory === "All" ? "default" : "outline"} size="sm" onClick={() => setActiveCategory("All")} className={activeCategory === "All" ? "bg-primary text-primary-foreground" : "border-primary text-primary"}>
                All
              </Button>
              {categories.map((cat) => (
                <Button key={cat} variant={activeCategory === cat ? "default" : "outline"} size="sm" onClick={() => setActiveCategory(cat)} className={activeCategory === cat ? "bg-primary text-primary-foreground" : "border-primary text-primary"}>
                  {cat}
                </Button>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {filtered.map((course) => (
                <div key={course.id} className="bg-card rounded-xl border border-border shadow-sm hover:shadow-lg hover:border-primary/30 transition-all group flex flex-col">
                  <div className="p-6 flex-1">
                    <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded-full">{course.category}</span>
                    <h3 className="font-semibold text-lg text-foreground mt-3 mb-2">{course.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{course.shortDescription}</p>
                    <div className="space-y-2 text-xs text-muted-foreground">
                      <div className="flex items-center gap-2"><Clock className="h-3.5 w-3.5 text-primary" />{course.duration}</div>
                      <div className="flex items-center gap-2"><Users className="h-3.5 w-3.5 text-primary" />{course.batchSize}</div>
                      <div className="flex items-center gap-2"><GraduationCap className="h-3.5 w-3.5 text-primary" />{course.eligibility}</div>
                    </div>
                  </div>
                  <div className="p-6 pt-0">
                    <Link to={`/courses/${course.id}`}>
                      <Button variant="outline" size="sm" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        View Details <ArrowRight className="h-4 w-4 ml-1" />
                      </Button>
                    </Link>
                  </div>
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

export default CoursesPage;
