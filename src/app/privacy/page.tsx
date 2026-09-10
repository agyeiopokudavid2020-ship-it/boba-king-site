import LegalPage from "../legal/LegalPage";

export default function PrivacyPolicy() {
  return (
    <LegalPage title="Privacy Policy" lastUpdated="September 1, 2026">
      <section>
        <h2 className="text-xl font-bold font-heading mb-3" style={{ color: "var(--text)" }}>
          1. Introduction
        </h2>
        <p className="leading-relaxed">
          Welcome to Boba King (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold font-heading mb-3" style={{ color: "var(--text)" }}>
          2. Information We Collect
        </h2>
        <p className="leading-relaxed">
          We may collect information that you provide directly to us, including:
        </p>
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>Name and contact information (phone number, email address)</li>
          <li>Order history and preferences</li>
          <li>Communications you send to us (e.g., WhatsApp messages, customer support inquiries)</li>
          <li>Usage data such as pages visited, time spent, and navigation patterns</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold font-heading mb-3" style={{ color: "var(--text)" }}>
          3. How We Use Your Information
        </h2>
        <p className="leading-relaxed">
          We use the information we collect to:
        </p>
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>Process and fulfill your orders</li>
          <li>Communicate with you about orders, promotions, and updates</li>
          <li>Improve our website, products, and services</li>
          <li>Personalize your experience</li>
          <li>Comply with legal obligations</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold font-heading mb-3" style={{ color: "var(--text)" }}>
          4. Information Sharing
        </h2>
        <p className="leading-relaxed">
          We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
        </p>
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>With your consent</li>
          <li>To comply with legal requirements</li>
          <li>To protect our rights and safety</li>
          <li>With service providers who assist us in operating our website (e.g., hosting, analytics)</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold font-heading mb-3" style={{ color: "var(--text)" }}>
          5. Data Security
        </h2>
        <p className="leading-relaxed">
          We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold font-heading mb-3" style={{ color: "var(--text)" }}>
          6. Your Rights
        </h2>
        <p className="leading-relaxed">
          You have the right to access, correct, or delete your personal information. To exercise these rights, please contact us at{" "}
          <a href="tel:0248978606" className="font-bold underline" style={{ color: "var(--gold)" }}>
            0248978606
          </a>
          {" "}or via WhatsApp.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold font-heading mb-3" style={{ color: "var(--text)" }}>
          7. Changes to This Policy
        </h2>
        <p className="leading-relaxed">
          We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page with an updated &quot;Last updated&quot; date.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold font-heading mb-3" style={{ color: "var(--text)" }}>
          8. Contact Us
        </h2>
        <p className="leading-relaxed">
          If you have questions about this Privacy Policy, please contact us:
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
