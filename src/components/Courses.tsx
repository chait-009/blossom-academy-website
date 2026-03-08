import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { courses } from "@/data/courseData";
import { Clock, Users, ArrowRight } from "lucide-react";

const Courses = () => {
  const featured = courses.slice(0, 6);

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
          {featured.map((c) => (
            <div key={c.id} className="bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-lg hover:border-primary/30 transition-all group flex flex-col">
              <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded-full w-fit">{c.category}</span>
              <h3 className="font-semibold text-lg text-foreground mt-3 mb-2">{c.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-1">{c.shortDescription}</p>
              <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{c.duration}</span>
                <span className="flex items-center gap-1"><Users className="h-3.5 w-3.5" />{c.batchSize}</span>
              </div>
              <Link to={`/courses/${c.id}`}>
                <Button variant="outline" size="sm" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  View Details <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/courses">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
              View All Courses <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Courses;
