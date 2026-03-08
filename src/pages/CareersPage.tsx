import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Briefcase, GraduationCap, Heart, Users, ArrowRight, ArrowLeft, CheckCircle2, Upload } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const openPositions = [
  {
    title: "Physics Faculty",
    type: "Full-Time",
    experience: "2+ Years",
    description: "Teach Physics for 8th–12th SSC/CBSE students with focus on conceptual clarity and competitive exam prep.",
  },
  {
    title: "Chemistry Faculty",
    type: "Full-Time",
    experience: "2+ Years",
    description: "Deliver engaging Chemistry lessons for board and entrance exam aspirants.",
  },
  {
    title: "Mathematics Faculty",
    type: "Full-Time / Part-Time",
    experience: "1+ Years",
    description: "Guide students in Mathematics across board and JEE/MHT-CET foundation levels.",
  },
  {
    title: "Biology Faculty",
    type: "Full-Time",
    experience: "2+ Years",
    description: "Prepare students for NEET and board exams with in-depth Biology coaching.",
  },
];

const perks = [
  { icon: Briefcase, title: "Growth Opportunities", description: "Clear career progression and leadership pathways." },
  { icon: Heart, title: "Supportive Culture", description: "Collaborative, respectful environment that values every team member." },
  { icon: GraduationCap, title: "Continuous Learning", description: "Regular training sessions and professional development workshops." },
  { icon: Users, title: "Small Teams", description: "Work in focused teams that make a real impact on student outcomes." },
];

const CareersPage = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    qualification: "",
    currentOrg: "",
    message: "",
    resumeFile: null as File | null,
  });

  const updateField = (field: string, value: string | File | null) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const canProceed = () => {
    if (step === 1) return formData.fullName.trim() && formData.email.trim() && formData.phone.trim();
    if (step === 2) return formData.position.trim() && formData.experience.trim() && formData.qualification.trim();
    return true;
  };

  const handleSubmit = () => {
    const { fullName, email, phone, position, experience, qualification, currentOrg, message } = formData;
    const text = `*Career Application*%0A%0A*Name:* ${encodeURIComponent(fullName)}%0A*Email:* ${encodeURIComponent(email)}%0A*Phone:* ${encodeURIComponent(phone)}%0A*Position:* ${encodeURIComponent(position)}%0A*Experience:* ${encodeURIComponent(experience)}%0A*Qualification:* ${encodeURIComponent(qualification)}%0A*Current Org:* ${encodeURIComponent(currentOrg || "N/A")}%0A*Message:* ${encodeURIComponent(message || "N/A")}`;
    window.open(`https://wa.me/919922197616?text=${text}`, "_blank");
    toast({ title: "Application sent!", description: "We'll review your application and get back to you soon." });
    setStep(1);
    setFormData({ fullName: "", email: "", phone: "", position: "", experience: "", qualification: "", currentOrg: "", message: "", resumeFile: null });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,hsl(var(--secondary)/0.15),transparent_60%)]" />
          <div className="container mx-auto px-4 text-center relative">
            <ScrollReveal>
              <span className="inline-block bg-secondary/20 text-secondary font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
                We're Hiring!
              </span>
              <h1 className="text-3xl md:text-5xl font-extrabold text-primary-foreground">
                Join Our Team
              </h1>
              <p className="mt-4 text-primary-foreground/80 max-w-2xl mx-auto text-lg">
                Be part of a passionate team dedicated to shaping the future of students. Build your career at Blossom Science Academy.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Perks */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-primary">Why Work With Us?</h2>
                <div className="w-20 h-1 bg-secondary mx-auto mt-3 rounded-full" />
              </div>
            </ScrollReveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {perks.map((p, i) => (
                <ScrollReveal key={p.title} delay={i * 0.1}>
                  <div className="bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow text-center h-full">
                    <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 mb-4">
                      <p.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{p.title}</h3>
                    <p className="text-sm text-muted-foreground">{p.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-primary">Open Positions</h2>
                <div className="w-20 h-1 bg-secondary mx-auto mt-3 rounded-full" />
                <p className="mt-4 text-muted-foreground max-w-xl mx-auto">Explore our current openings. Don't see your role? Apply anyway — we're always looking for talented educators.</p>
              </div>
            </ScrollReveal>
            <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {openPositions.map((pos, i) => (
                <ScrollReveal key={pos.title} delay={i * 0.1}>
                  <div className="bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-md hover:border-primary/30 transition-all h-full">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-semibold text-lg text-foreground">{pos.title}</h3>
                      <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded-full whitespace-nowrap">{pos.type}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{pos.description}</p>
                    <p className="text-xs text-muted-foreground">
                      <span className="font-semibold text-foreground">Experience:</span> {pos.experience}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section className="py-16" id="apply">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-primary">Apply Now</h2>
                <div className="w-20 h-1 bg-secondary mx-auto mt-3 rounded-full" />
                <p className="mt-4 text-muted-foreground max-w-xl mx-auto">Fill in your details below and we'll get back to you shortly.</p>
              </div>
            </ScrollReveal>

            <div className="max-w-2xl mx-auto">
              {/* Step Indicator */}
              <div className="flex items-center justify-center gap-2 mb-8">
                {[1, 2, 3].map((s) => (
                  <div key={s} className="flex items-center gap-2">
                    <div className={`h-9 w-9 rounded-full flex items-center justify-center text-sm font-semibold transition-colors ${step >= s ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
                      {step > s ? <CheckCircle2 className="h-5 w-5" /> : s}
                    </div>
                    {s < 3 && <div className={`w-12 h-0.5 ${step > s ? "bg-primary" : "bg-border"}`} />}
                  </div>
                ))}
              </div>

              <div className="bg-card rounded-xl border border-border shadow-md p-6 md:p-8">
                {/* Step 1: Personal Info */}
                {step === 1 && (
                  <div className="space-y-5">
                    <h3 className="text-lg font-semibold text-foreground">Personal Information</h3>
                    <div>
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input id="fullName" placeholder="Enter your full name" value={formData.fullName} onChange={(e) => updateField("fullName", e.target.value)} className="mt-1.5" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" placeholder="your@email.com" value={formData.email} onChange={(e) => updateField("email", e.target.value)} className="mt-1.5" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input id="phone" type="tel" placeholder="9876543210" value={formData.phone} onChange={(e) => updateField("phone", e.target.value)} className="mt-1.5" />
                    </div>
                  </div>
                )}

                {/* Step 2: Professional Info */}
                {step === 2 && (
                  <div className="space-y-5">
                    <h3 className="text-lg font-semibold text-foreground">Professional Details</h3>
                    <div>
                      <Label htmlFor="position">Position Applying For *</Label>
                      <select
                        id="position"
                        value={formData.position}
                        onChange={(e) => updateField("position", e.target.value)}
                        className="mt-1.5 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        <option value="">Select a position</option>
                        {openPositions.map((p) => (
                          <option key={p.title} value={p.title}>{p.title}</option>
                        ))}
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="experience">Years of Experience *</Label>
                      <Input id="experience" placeholder="e.g. 3 years" value={formData.experience} onChange={(e) => updateField("experience", e.target.value)} className="mt-1.5" />
                    </div>
                    <div>
                      <Label htmlFor="qualification">Highest Qualification *</Label>
                      <Input id="qualification" placeholder="e.g. M.Sc. Physics, B.Ed." value={formData.qualification} onChange={(e) => updateField("qualification", e.target.value)} className="mt-1.5" />
                    </div>
                    <div>
                      <Label htmlFor="currentOrg">Current Organization</Label>
                      <Input id="currentOrg" placeholder="Where do you currently work?" value={formData.currentOrg} onChange={(e) => updateField("currentOrg", e.target.value)} className="mt-1.5" />
                    </div>
                  </div>
                )}

                {/* Step 3: Additional Info */}
                {step === 3 && (
                  <div className="space-y-5">
                    <h3 className="text-lg font-semibold text-foreground">Additional Information</h3>
                    <div>
                      <Label htmlFor="message">Why do you want to join Blossom Science Academy?</Label>
                      <Textarea id="message" placeholder="Tell us about your motivation, teaching philosophy, and what you can bring to our team..." rows={5} value={formData.message} onChange={(e) => updateField("message", e.target.value)} className="mt-1.5" />
                    </div>
                    <div>
                      <Label>Resume / CV</Label>
                      <div className="mt-1.5 border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/40 transition-colors">
                        <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                        <p className="text-sm text-muted-foreground">
                          Please email your resume to{" "}
                          <a href="mailto:contact@blossomscienceacademy.in" className="text-primary font-semibold hover:underline">
                            contact@blossomscienceacademy.in
                          </a>
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">with subject: "Application – {formData.position || "Position"}"</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation */}
                <div className="flex items-center justify-between mt-8">
                  {step > 1 ? (
                    <Button variant="outline" onClick={() => setStep(step - 1)} className="border-primary text-primary">
                      <ArrowLeft className="h-4 w-4 mr-1" /> Back
                    </Button>
                  ) : (
                    <div />
                  )}
                  {step < 3 ? (
                    <Button onClick={() => setStep(step + 1)} disabled={!canProceed()} className="bg-primary text-primary-foreground hover:bg-primary/90">
                      Next <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
                  ) : (
                    <Button onClick={handleSubmit} className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold">
                      Submit Application
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default CareersPage;
