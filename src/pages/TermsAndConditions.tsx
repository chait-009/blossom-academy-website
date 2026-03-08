import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TermsAndConditions = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="pt-16">
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-primary">Terms and Conditions</h1>
          <p className="mt-2 text-muted-foreground">Last updated: March 2026</p>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl prose prose-sm text-muted-foreground">
          <h2 className="text-primary">Acceptance of Terms</h2>
          <p>By accessing and using the Blossom Science Academy website and services, you agree to be bound by these Terms and Conditions.</p>

          <h2 className="text-primary">Services</h2>
          <p>Blossom Science Academy provides educational coaching services for students in classes 8th to 12th across SSC and CBSE boards, along with competitive exam preparation for MHT-CET, JEE, NEET, NDA, and IISER.</p>

          <h2 className="text-primary">Enrollment</h2>
          <ul>
            <li>Enrollment is subject to availability and eligibility criteria</li>
            <li>All fees must be paid as per the schedule provided at the time of admission</li>
            <li>The academy reserves the right to modify batch timings and schedules as needed</li>
          </ul>

          <h2 className="text-primary">Student Conduct</h2>
          <ul>
            <li>Students are expected to maintain discipline and decorum on premises</li>
            <li>Regular attendance is mandatory for all enrolled courses</li>
            <li>Any form of misconduct may result in termination of enrollment</li>
          </ul>

          <h2 className="text-primary">Intellectual Property</h2>
          <p>All study materials, content, and resources provided by Blossom Science Academy are proprietary and must not be reproduced, distributed, or shared without written consent.</p>

          <h2 className="text-primary">Limitation of Liability</h2>
          <p>Blossom Science Academy shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services or website.</p>

          <h2 className="text-primary">Changes to Terms</h2>
          <p>We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on this page.</p>

          <h2 className="text-primary">Contact</h2>
          <p>For queries regarding these terms, contact us at:<br />Phone: 99221 97616 / 99221 97709<br />Address: 1st Floor, Aarya Associate, Jakat Naka Walhekarwadi corner, Chinchwad.</p>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default TermsAndConditions;
