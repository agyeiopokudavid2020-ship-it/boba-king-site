import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Boba King | Bubble Tea in Winneba",
  description:
    "Premium bubble tea crafted for everyone. Bold flavors, fresh boba, good vibes right here in Winneba.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#0A1931] antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
