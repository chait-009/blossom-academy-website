import { useState } from "react";
import { Phone, MapPin, Instagram, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const courseOptions = [
  "8th–10th SSC Board",
  "8th–10th CBSE Board",
  "11th–12th Regular",
  "11th–12th Integrated",
  "Foundation Program",
  "MHT-CET Preparation",
  "IIT-JEE Preparation",
  "NEET Preparation",
  "NDA Preparation",
];

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", phone: "", email: "", course: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.phone.trim()) e.phone = "Phone is required";
    else if (!/^[6-9]\d{9}$/.test(form.phone.trim())) e.phone = "Enter a valid 10-digit phone number";
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) e.email = "Enter a valid email";
    if (!form.course) e.course = "Please select a course";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    const text = `Hello! I am ${form.name.trim()}.\nPhone: ${form.phone.trim()}\nEmail: ${form.email.trim() || "N/A"}\nInterested in: ${form.course}\nMessage: ${form.message.trim() || "N/A"}`;
    const url = `https://wa.me/919922197616?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
    toast({ title: "Redirecting to WhatsApp", description: "Your enquiry is being sent via WhatsApp." });
    setForm({ name: "", phone: "", email: "", course: "", message: "" });
    setErrors({});
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">Contact Us</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mt-3 rounded-full" />
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Have questions? Reach out to us or fill in the enquiry form below.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Form */}
          <div className="bg-card rounded-xl p-8 border border-border shadow-md">
            <h3 className="text-xl font-semibold text-foreground mb-6">Send an Enquiry</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  placeholder="Your Name *"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={errors.name ? "border-destructive" : ""}
                  maxLength={100}
                />
                {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
              </div>
              <div>
                <Input
                  placeholder="Phone Number *"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className={errors.phone ? "border-destructive" : ""}
                  maxLength={10}
                />
                {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone}</p>}
              </div>
              <div>
                <Input
                  placeholder="Email (optional)"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={errors.email ? "border-destructive" : ""}
                  maxLength={255}
                />
                {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
              </div>
              <div>
                <select
                  value={form.course}
                  onChange={(e) => setForm({ ...form, course: e.target.value })}
                  className={`flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${errors.course ? "border-destructive" : "border-input"} ${!form.course ? "text-muted-foreground" : "text-foreground"}`}
                >
                  <option value="" disabled>Select Course / Program *</option>
                  {courseOptions.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
                {errors.course && <p className="text-xs text-destructive mt-1">{errors.course}</p>}
              </div>
              <div>
                <Textarea
                  placeholder="Your Message (optional)"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  maxLength={1000}
                  rows={4}
                />
              </div>
              <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold">
                Send Enquiry via WhatsApp
              </Button>
            </form>
          </div>

          {/* Contact Info + Map */}
          <div className="space-y-8">
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Call Us</p>
                  <a href="tel:9922197616" className="text-sm text-muted-foreground hover:text-primary">99221 97616</a>
                  <span className="text-muted-foreground text-sm"> / </span>
                  <a href="tel:9922197709" className="text-sm text-muted-foreground hover:text-primary">99221 97709</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Visit Us</p>
                  <p className="text-sm text-muted-foreground">1st Floor, Aarya Associate, Jakat Naka Walhekarwadi corner, near Shri Fattechand Jain School & RMD International School, Chinchwad.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Instagram className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Follow Us</p>
                  <a href="https://www.instagram.com/blossom_science_academy/" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary">
                    @blossom_science_academy
                  </a>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-xl overflow-hidden border border-border shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d236.29880662338107!2d73.77547129142962!3d18.628921771071127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1772904698924!5m2!1sen!2sin"
                width="100%"
                height="280"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Blossom Science Academy Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
