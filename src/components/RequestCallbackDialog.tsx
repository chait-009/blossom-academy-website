import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { courses } from "@/data/courseData";
import { ArrowRight, ArrowLeft } from "lucide-react";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const RequestCallbackDialog = ({ open, onOpenChange }: Props) => {
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
    onOpenChange(false);
  };

  const handleOpenChange = (open: boolean) => {
    if (!open) { setStep(1); setErrors({}); }
    onOpenChange(open);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-primary text-xl">Request a Callback</DialogTitle>
          <DialogDescription>Fill in your details and we'll get back to you shortly.</DialogDescription>
        </DialogHeader>

        {/* Step indicator */}
        <div className="flex items-center gap-3 mb-2">
          <div className={`flex items-center justify-center h-8 w-8 rounded-full text-sm font-bold ${step >= 1 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>1</div>
          <div className={`h-0.5 flex-1 ${step >= 2 ? "bg-primary" : "bg-border"}`} />
          <div className={`flex items-center justify-center h-8 w-8 rounded-full text-sm font-bold ${step >= 2 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>2</div>
        </div>
        <p className="text-xs text-muted-foreground mb-2">{step === 1 ? "Step 1: Your Details" : "Step 2: Course & Message"}</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {step === 1 && (
            <>
              <div>
                <label className="text-sm font-medium text-foreground">Name *</label>
                <Input placeholder="Your full name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={errors.name ? "border-destructive" : ""} maxLength={100} />
                {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
              </div>
              <div>
                <label className="text-sm font-medium text-foreground">Phone Number *</label>
                <Input placeholder="Your phone number" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={errors.phone ? "border-destructive" : ""} maxLength={10} />
                {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone}</p>}
              </div>
              <div>
                <label className="text-sm font-medium text-foreground">Email</label>
                <Input placeholder="Your email address" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={errors.email ? "border-destructive" : ""} maxLength={255} />
                {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
              </div>
              <Button type="button" onClick={handleNext} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                Next <ArrowRight className="h-4 w-4 ml-2" />
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
                  className={`flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${errors.course ? "border-destructive" : "border-input"} ${!form.course ? "text-muted-foreground" : "text-foreground"}`}
                >
                  <option value="" disabled>Select course type</option>
                  {courses.map((c) => (
                    <option key={c.id} value={c.title}>{c.title}</option>
                  ))}
                </select>
                {errors.course && <p className="text-xs text-destructive mt-1">{errors.course}</p>}
              </div>
              <div>
                <label className="text-sm font-medium text-foreground">Message</label>
                <Textarea placeholder="Tell us about your requirements..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} maxLength={1000} rows={3} />
              </div>
              <div className="flex gap-3">
                <Button type="button" variant="outline" onClick={() => { setStep(1); setErrors({}); }} className="flex-1">
                  <ArrowLeft className="h-4 w-4 mr-2" /> Back
                </Button>
                <Button type="submit" className="flex-1 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold">
                  Submit Request
                </Button>
              </div>
            </>
          )}
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default RequestCallbackDialog;
