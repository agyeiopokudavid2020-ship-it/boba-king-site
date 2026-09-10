import LegalPage from "../legal/LegalPage";

export default function CookiePolicy() {
  return (
    <LegalPage title="Cookie Policy" lastUpdated="September 1, 2026">
      <section>
        <h2 className="text-xl font-bold font-heading mb-3" style={{ color: "var(--text)" }}>
          1. What Are Cookies
        </h2>
        <p className="leading-relaxed">
          Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold font-heading mb-3" style={{ color: "var(--text)" }}>
          2. How We Use Cookies
        </h2>
        <p className="leading-relaxed">
          We use cookies for the following purposes:
        </p>
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li><strong>Essential cookies:</strong> Required for the website to function properly (e.g., theme preferences, cart state)</li>
          <li><strong>Performance cookies:</strong> Help us understand how visitors interact with our website</li>
          <li><strong>Functionality cookies:</strong> Remember your preferences and settings (e.g., dark/light theme)</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold font-heading mb-3" style={{ color: "var(--text)" }}>
          3. Types of Cookies We Use
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm mt-2" style={{ borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid var(--border-gold)" }}>
                <th className="text-left py-2 pr-4 font-bold" style={{ color: "var(--text)" }}>Cookie</th>
                <th className="text-left py-2 pr-4 font-bold" style={{ color: "var(--text)" }}>Purpose</th>
                <th className="text-left py-2 font-bold" style={{ color: "var(--text)" }}>Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: "1px solid var(--border-gold)" }}>
                <td className="py-2 pr-4 font-medium">theme</td>
                <td className="py-2 pr-4">Stores your theme preference (dark/light)</td>
                <td className="py-2">1 year</td>
              </tr>
              <tr style={{ borderBottom: "1px solid var(--border-gold)" }}>
                <td className="py-2 pr-4 font-medium">cart</td>
                <td className="py-2 pr-4">Stores your shopping cart items</td>
                <td className="py-2">Session</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold font-heading mb-3" style={{ color: "var(--text)" }}>
          4. Third-Party Cookies
        </h2>
        <p className="leading-relaxed">
          We may use third-party services (such as Google Analytics) that set their own cookies. These services have their own privacy policies governing the use of cookies. We do not control third-party cookies and recommend reviewing their respective policies.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold font-heading mb-3" style={{ color: "var(--text)" }}>
          5. Managing Cookies
        </h2>
        <p className="leading-relaxed">
          You can control and manage cookies through your browser settings. Most browsers allow you to:
        </p>
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>View what cookies are set</li>
          <li>Delete cookies</li>
          <li>Block cookies from specific or all websites</li>
          <li>Block third-party cookies</li>
        </ul>
        <p className="leading-relaxed mt-2">
          Please note that disabling cookies may affect the functionality of our website.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold font-heading mb-3" style={{ color: "var(--text)" }}>
          6. Changes to This Policy
        </h2>
        <p className="leading-relaxed">
          We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated &quot;Last updated&quot; date.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold font-heading mb-3" style={{ color: "var(--text)" }}>
          7. Contact Us
        </h2>
        <p className="leading-relaxed">
          If you have any questions about our use of cookies, please contact us at{" "}
          <a href="tel:0248978606" className="font-bold underline" style={{ color: "var(--gold)" }}>
            0248978606
          </a>
          {" "}or via{" "}
          <a href="https://wa.me/233248978606" target="_blank" rel="noopener noreferrer" className="font-bold underline" style={{ color: "var(--gold)" }}>
            WhatsApp
          </a>.
        </p>
      </section>
    </LegalPage>
  );
}
