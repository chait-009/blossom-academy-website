import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { getCourseById } from "@/data/courseData";
import { Button } from "@/components/ui/button";
import { Clock, Users, GraduationCap, Calendar, CheckCircle, BookOpen, ArrowLeft } from "lucide-react";
import { useState } from "react";
import RequestCallbackDialog from "@/components/RequestCallbackDialog";

const CourseDetailPage = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const course = getCourseById(courseId || "");
  const [callbackOpen, setCallbackOpen] = useState(false);

  if (!course) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 text-center">
          <h1 className="text-3xl font-bold text-primary">Course Not Found</h1>
          <p className="mt-4 text-muted-foreground">The course you're looking for doesn't exist.</p>
          <Link to="/courses"><Button className="mt-6 bg-primary">Browse All Courses</Button></Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16">
          <div className="container mx-auto px-4">
            <Link to="/courses" className="inline-flex items-center gap-1 text-sm text-primary hover:underline mb-4">
              <ArrowLeft className="h-4 w-4" /> Back to Courses
            </Link>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <span className="text-xs font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">{course.category}</span>
                <h1 className="text-3xl md:text-4xl font-extrabold text-primary mt-3">{course.title}</h1>
                <p className="mt-3 text-muted-foreground max-w-2xl">{course.description}</p>
              </div>
              <div className="shrink-0">
                <Button onClick={() => setCallbackOpen(true)} size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold">
                  Enquire Now
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Key Info */}
        <section className="py-10 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border">
                <Clock className="h-5 w-5 text-primary shrink-0" />
                <div><p className="text-xs text-muted-foreground">Duration</p><p className="text-sm font-semibold text-foreground">{course.duration}</p></div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border">
                <Users className="h-5 w-5 text-primary shrink-0" />
                <div><p className="text-xs text-muted-foreground">Batch Size</p><p className="text-sm font-semibold text-foreground">{course.batchSize}</p></div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border">
                <GraduationCap className="h-5 w-5 text-primary shrink-0" />
                <div><p className="text-xs text-muted-foreground">Eligibility</p><p className="text-sm font-semibold text-foreground">{course.eligibility}</p></div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border">
                <Calendar className="h-5 w-5 text-primary shrink-0" />
                <div><p className="text-xs text-muted-foreground">Schedule</p><p className="text-sm font-semibold text-foreground">{course.schedule}</p></div>
              </div>
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-bold text-primary mb-6">Course Highlights</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {course.highlights.map((h) => (
                <div key={h} className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{h}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Syllabus */}
        <section className="py-12 bg-muted/50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-bold text-primary mb-6">Detailed Syllabus</h2>
            <div className="space-y-6">
              {course.syllabus.map((s) => (
                <div key={s.subject} className="bg-card rounded-xl p-6 border border-border">
                  <h3 className="font-semibold text-foreground flex items-center gap-2 mb-3">
                    <BookOpen className="h-5 w-5 text-primary" /> {s.subject}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {s.topics.map((t) => (
                      <span key={t} className="text-xs bg-primary/5 text-muted-foreground border border-border px-2.5 py-1 rounded-full">{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-bold text-primary mb-6">Key Features</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {course.features.map((f) => (
                <div key={f} className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-primary to-primary/90">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">Interested in {course.title}?</h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">Get in touch with us to learn more about admissions, batch timings, and fees.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={() => setCallbackOpen(true)} size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold">
                Request Callback
              </Button>
              <a href="tel:9922197616">
                <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold">
                  Call Now: 99221 97616
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      <RequestCallbackDialog open={callbackOpen} onOpenChange={setCallbackOpen} />
    </div>
  );
};

export default CourseDetailPage;
