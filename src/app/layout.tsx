import "./globals.css";
import type { Metadata } from "next";
import { CartProvider } from "./CartContext";
import CartDrawer from "./CartDrawer";
import { ThemeProvider } from "./ThemeContext";

export const metadata: Metadata = {
  metadataBase: new URL("https://boba-king.com"),
  title: {
    default: "Boba King | Bubble Tea Fit for Royalty in Winneba",
    template: "%s | Boba King",
  },
  description:
    "Handcrafted boba, rich brewed teas, and vibrant flavors made fresh daily for the University of Education, Winneba community. Order instantly on WhatsApp.",
  keywords: [
    "bubble tea Winneba",
    "boba Ghana",
    "milk tea UEW",
    "Boba King",
    "tapioca pearls",
    "bubble tea delivery Winneba",
  ],
  openGraph: {
    type: "website",
    siteName: "Boba King",
    title: "Boba King | Bubble Tea Fit for Royalty",
    description:
      "Handcrafted boba made fresh daily in Winneba. Classic, taro, matcha & more — order instantly on WhatsApp.",
    locale: "en_GH",
    images: [
      {
        url: "/hero-drinks.jpg",
        width: 1200,
        height: 960,
        alt: "Boba King signature drinks on a tray",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Boba King | Bubble Tea Fit for Royalty",
    description:
      "Handcrafted boba made fresh daily in Winneba. Order instantly on WhatsApp.",
    images: ["/hero-drinks.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem('boba-king-theme');if(t)document.documentElement.setAttribute('data-theme',t)}catch(e){}`,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased min-h-screen" style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}>
        <ThemeProvider>
          <CartProvider>
            {children}
            <CartDrawer />
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
