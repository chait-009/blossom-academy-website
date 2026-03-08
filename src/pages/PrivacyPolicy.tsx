import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="pt-16">
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-primary">Privacy Policy</h1>
          <p className="mt-2 text-muted-foreground">Last updated: March 2026</p>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl prose prose-sm text-muted-foreground">
          <h2 className="text-primary">Introduction</h2>
          <p>Blossom Science Academy ("we", "our", "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website or use our services.</p>

          <h2 className="text-primary">Information We Collect</h2>
          <p>We may collect the following personal information:</p>
          <ul>
            <li>Name, email address, and phone number when you fill out our contact or enquiry forms</li>
            <li>Course preferences and academic details</li>
            <li>Website usage data through cookies and analytics</li>
          </ul>

          <h2 className="text-primary">How We Use Your Information</h2>
          <ul>
            <li>To respond to your enquiries and provide information about our courses</li>
            <li>To send updates about admissions, schedules, and academic programs</li>
            <li>To improve our website and services</li>
            <li>To comply with legal obligations</li>
          </ul>

          <h2 className="text-primary">Data Protection</h2>
          <p>We implement appropriate security measures to protect your personal data against unauthorized access, alteration, or destruction. We do not sell, trade, or rent your personal information to third parties.</p>

          <h2 className="text-primary">Third-Party Services</h2>
          <p>Our website may contain links to third-party websites such as WhatsApp and Instagram. We are not responsible for the privacy practices of these external sites.</p>

          <h2 className="text-primary">Contact Us</h2>
          <p>If you have questions about this Privacy Policy, please contact us at:</p>
          <p>Phone: 99221 97616 / 99221 97709<br />Address: 1st Floor, Aarya Associate, Jakat Naka Walhekarwadi corner, near Shri Fattechand Jain School & RMD International School, Chinchwad.</p>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default PrivacyPolicy;
