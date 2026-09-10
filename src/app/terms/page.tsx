import LegalPage from "../legal/LegalPage";

export default function TermsAndConditions() {
  return (
    <LegalPage title="Terms & Conditions" lastUpdated="September 1, 2026">
      <section>
        <h2 className="text-xl font-bold font-heading mb-3" style={{ color: "var(--text)" }}>
          1. Acceptance of Terms
        </h2>
        <p className="leading-relaxed">
          By accessing and using the Boba King website and services, you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our website or services.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold font-heading mb-3" style={{ color: "var(--text)" }}>
          2. Orders and Payments
        </h2>
        <ul className="list-disc list-inside space-y-1">
          <li>All orders are placed via WhatsApp and confirmed by our team</li>
          <li>Prices are listed in Ghanaian Cedis (GH₵) and are subject to change without notice</li>
          <li>Payment is made upon pickup at our physical location</li>
          <li>We reserve the right to refuse or cancel any order for any reason</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold font-heading mb-3" style={{ color: "var(--text)" }}>
          3. Promotions and Discounts
        </h2>
        <p className="leading-relaxed">
          Promotional offers (such as the 10% social media discount) are subject to the following conditions:
        </p>
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>You must present valid proof of following our TIKTOK and/or INSTAGRAM accounts at the time of pickup</li>
          <li>The discount applies to any single drink on the menu</li>
          <li>Promotions cannot be combined with other offers unless stated otherwise</li>
          <li>We reserve the right to modify or end promotions at any time</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold font-heading mb-3" style={{ color: "var(--text)" }}>
          4. Product Quality
        </h2>
        <p className="leading-relaxed">
          We strive to maintain the highest quality in all our beverages. All boba pearls are prepared fresh daily. If you are unsatisfied with your order, please contact us within 2 hours of pickup and we will do our best to resolve the issue.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold font-heading mb-3" style={{ color: "var(--text)" }}>
          5. Allergen Information
        </h2>
        <p className="leading-relaxed">
          Our products may contain or come into contact with common allergens including milk, soy, tree nuts, and gluten. Please inform us of any allergies or dietary restrictions when placing your order.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold font-heading mb-3" style={{ color: "var(--text)" }}>
          6. Intellectual Property
        </h2>
        <p className="leading-relaxed">
          All content on this website, including text, images, logos, and design elements, is the property of Boba King and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our written consent.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold font-heading mb-3" style={{ color: "var(--text)" }}>
          7. Limitation of Liability
        </h2>
        <p className="leading-relaxed">
          Boba King shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our website or services. Our total liability shall not exceed the amount paid for the specific order in question.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold font-heading mb-3" style={{ color: "var(--text)" }}>
          8. Governing Law
        </h2>
        <p className="leading-relaxed">
          These Terms and Conditions are governed by and construed in accordance with the laws of the Republic of Ghana. Any disputes shall be subject to the exclusive jurisdiction of the courts in Winneba, Ghana.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold font-heading mb-3" style={{ color: "var(--text)" }}>
          9. Changes to These Terms
        </h2>
        <p className="leading-relaxed">
          We reserve the right to update these Terms and Conditions at any time. Changes will be effective immediately upon posting. Your continued use of our website and services constitutes acceptance of the updated terms.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold font-heading mb-3" style={{ color: "var(--text)" }}>
          10. Contact Us
        </h2>
        <p className="leading-relaxed">
          For questions regarding these Terms and Conditions, please contact us:
        </p>
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>Phone: <a href="tel:0248978606" className="font-bold underline" style={{ color: "var(--gold)" }}>0248978606</a></li>
          <li>WhatsApp: <a href="https://wa.me/233248978606" target="_blank" rel="noopener noreferrer" className="font-bold underline" style={{ color: "var(--gold)" }}>Message us</a></li>
          <li>Address: CE-051-7918, Yeenua St, Winneba</li>
        </ul>
      </section>
    </LegalPage>
  );
}
