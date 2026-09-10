import Link from "next/link";

interface LegalPageProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export default function LegalPage({ title, lastUpdated, children }: LegalPageProps) {
  return (
    <div
      className="min-h-screen transition-colors duration-300"
      style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}
    >
      {/* Simple Nav */}
      <nav
        className="sticky top-0 z-50 transition-colors duration-300"
        style={{
          backgroundColor: "var(--bg-card)",
          boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
          borderBottom: "1px solid var(--border-gold)",
        }}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <span
              className="font-black font-heading text-xl tracking-tight"
              style={{ color: "var(--gold)" }}
            >
              BOBA KING
            </span>
          </Link>
          <Link
            href="/"
            className="text-sm font-semibold transition-colors"
            style={{ color: "var(--nav-text)" }}
          >
            &larr; Back to Home
          </Link>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-5 sm:px-6 py-12 sm:py-20">
        <h1
          className="text-3xl sm:text-4xl font-black font-heading tracking-tight mb-2"
          style={{ color: "var(--gold)" }}
        >
          {title}
        </h1>
        <p
          className="text-sm mb-10"
          style={{ color: "var(--text-secondary)" }}
        >
          Last updated: {lastUpdated}
        </p>
        <div
          className="prose prose-sm max-w-none space-y-6"
          style={{ color: "var(--text-secondary)" }}
        >
          {children}
        </div>
      </div>

      {/* Footer */}
      <footer
        className="border-t py-8 px-6"
        style={{
          borderColor: "var(--border-gold)",
          backgroundColor: "var(--footer-bg)",
        }}
      >
        <div
          className="max-w-7xl mx-auto text-center text-sm"
          style={{ color: "var(--text-muted)" }}
        >
          <p>
            &copy; {new Date().getFullYear()} BOBA KING &bull; Winneba
          </p>
        </div>
      </footer>
    </div>
  );
}
