import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { courses } from "@/data/courseData";
import { ArrowRight, ArrowLeft, Phone, MapPin, Clock } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const RequestCallbackPage = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ name: "", phone: "", email: "", course: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateStep1 = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.phone.trim()) e.phone = "Phone is required";
    else if (!/^[6-9]\d{9}$/.test(form.phone.trim())) e.phone = "Enter a valid 10-digit phone number";
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) e.email = "Enter a valid email";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const validateStep2 = () => {
    const e: Record<string, string> = {};
    if (!form.course) e.course = "Please select a course";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleNext = () => {
    if (validateStep1()) { setErrors({}); setStep(2); }
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validateStep2()) return;
    const text = `Callback Request:\nName: ${form.name.trim()}\nPhone: ${form.phone.trim()}\nEmail: ${form.email.trim() || "N/A"}\nCourse: ${form.course}\nMessage: ${form.message.trim() || "N/A"}`;
    window.open(`https://wa.me/919922197616?text=${encodeURIComponent(text)}`, "_blank");
    toast({ title: "Request Sent", description: "Your callback request has been sent via WhatsApp." });
    setForm({ name: "", phone: "", email: "", course: "", message: "" });
    setErrors({});
    setStep(1);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--secondary)/0.15),transparent_60%)]" />
          <div className="container mx-auto px-4 text-center relative">
            <h1 className="text-3xl md:text-5xl font-extrabold text-primary-foreground">
              Request a Callback
            </h1>
            <p className="mt-4 text-primary-foreground/80 max-w-2xl mx-auto text-lg">
              Fill in your details and our counselors will call you back within 24 hours.
            </p>
          </div>
        </section>

        {/* Main content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
              {/* Left: Image + Info (hidden on mobile) */}
              <div className="hidden lg:block">
                <ScrollReveal>
                  <img
                    src="/callback-banner.png"
                    alt="Blossom Science Academy - Now in Chinchwad"
                    className="rounded-2xl shadow-lg border border-border w-full"
                  />
                </ScrollReveal>
                <ScrollReveal delay={0.2}>
                  <div className="mt-8 space-y-4">
                    <div className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground text-sm">Call Us Directly</p>
                        <p className="text-sm text-muted-foreground">99221 97616 / 99221 97709</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground text-sm">Working Hours</p>
                        <p className="text-sm text-muted-foreground">Mon–Sat, 8:00 AM – 8:00 PM</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground text-sm">Visit Our Centre</p>
                        <p className="text-sm text-muted-foreground">Jakat Naka, Chinchwad, Pune</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>

              {/* Right: Form */}
              <ScrollReveal>
                <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
                  <h2 className="text-2xl font-bold text-primary mb-2">Fill Your Details</h2>
                  <p className="text-sm text-muted-foreground mb-6">We'll call you back at your preferred time.</p>

                  {/* Step indicator */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex items-center gap-2">
                      <div className={`flex items-center justify-center h-9 w-9 rounded-full text-sm font-bold ${step >= 1 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>1</div>
                      <span className={`text-sm font-medium ${step === 1 ? "text-foreground" : "text-muted-foreground"}`}>Details</span>
                    </div>
                    <div className={`h-0.5 flex-1 ${step >= 2 ? "bg-primary" : "bg-border"}`} />
                    <div className="flex items-center gap-2">
                      <div className={`flex items-center justify-center h-9 w-9 rounded-full text-sm font-bold ${step >= 2 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>2</div>
                      <span className={`text-sm font-medium ${step === 2 ? "text-foreground" : "text-muted-foreground"}`}>Course</span>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {step === 1 && (
                      <>
                        <div>
                          <label className="text-sm font-medium text-foreground">Full Name *</label>
                          <Input placeholder="Enter your full name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={`mt-1 ${errors.name ? "border-destructive" : ""}`} maxLength={100} />
                          {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
                        </div>
                        <div>
                          <label className="text-sm font-medium text-foreground">Phone Number *</label>
                          <Input placeholder="Your 10-digit phone number" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={`mt-1 ${errors.phone ? "border-destructive" : ""}`} maxLength={10} />
                          {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone}</p>}
                        </div>
                        <div>
                          <label className="text-sm font-medium text-foreground">Email Address</label>
                          <Input placeholder="Your email (optional)" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={`mt-1 ${errors.email ? "border-destructive" : ""}`} maxLength={255} />
                          {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
                        </div>
                        <Button type="button" onClick={handleNext} size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                          Next Step <ArrowRight className="h-4 w-4 ml-2" />
                        </Button>
                      </>
                    )}

                    {step === 2 && (
                      <>
                        <div>
                          <label className="text-sm font-medium text-foreground">Course Interest *</label>
                          <select
                            value={form.course}
                            onChange={(e) => setForm({ ...form, course: e.target.value })}
                            className={`mt-1 flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${errors.course ? "border-destructive" : "border-input"} ${!form.course ? "text-muted-foreground" : "text-foreground"}`}
                          >
                            <option value="" disabled>Select a course</option>
                            {courses.map((c) => (
                              <option key={c.id} value={c.title}>{c.title}</option>
                            ))}
                          </select>
                          {errors.course && <p className="text-xs text-destructive mt-1">{errors.course}</p>}
                        </div>
                        <div>
                          <label className="text-sm font-medium text-foreground">Message</label>
                          <Textarea placeholder="Any specific requirements or questions..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="mt-1" maxLength={1000} rows={4} />
                        </div>
                        <div className="flex gap-3">
                          <Button type="button" variant="outline" size="lg" onClick={() => { setStep(1); setErrors({}); }} className="flex-1">
                            <ArrowLeft className="h-4 w-4 mr-2" /> Back
                          </Button>
                          <Button type="submit" size="lg" className="flex-1 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold">
                            Submit Request
                          </Button>
                        </div>
                      </>
                    )}
                  </form>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default RequestCallbackPage;
