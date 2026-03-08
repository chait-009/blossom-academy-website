import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const RefundPolicy = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="pt-16">
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-primary">Refund Policy</h1>
          <p className="mt-2 text-muted-foreground">Last updated: March 2026</p>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl prose prose-sm text-muted-foreground">
          <h2 className="text-primary">Overview</h2>
          <p>At Blossom Science Academy, we strive to provide the best educational experience. This Refund Policy outlines the terms and conditions for fee refunds.</p>

          <h2 className="text-primary">Eligibility for Refund</h2>
          <ul>
            <li>Refund requests must be made within 7 days of enrollment</li>
            <li>A valid reason must be provided for the refund request</li>
            <li>Refunds are applicable only if classes have not commenced or within the first week of classes</li>
          </ul>

          <h2 className="text-primary">Non-Refundable Items</h2>
          <ul>
            <li>Registration fees are non-refundable</li>
            <li>Study material charges once distributed are non-refundable</li>
            <li>Fees after the first month of classes are non-refundable</li>
          </ul>

          <h2 className="text-primary">Refund Process</h2>
          <p>To request a refund, please contact our administration office with your enrollment details. Approved refunds will be processed within 15-30 business days through the original payment method.</p>

          <h2 className="text-primary">Contact</h2>
          <p>For refund-related queries, please contact us at:<br />Phone: 99221 97616 / 99221 97709</p>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default RefundPolicy;
