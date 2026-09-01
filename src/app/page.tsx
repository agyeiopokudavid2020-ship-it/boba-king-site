"use client";

import { useState } from "react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import { useCart } from "./CartContext";
import { useTheme } from "./ThemeContext";

// Types
interface MenuItem {
  id: string;
  name: string;
  category: string;
  price: number;
  priceLabel: string;
  description: string;
  badge?: string;
  image: string;
  wide?: boolean;
}

// Data
const MENU_ITEMS: MenuItem[] = [
  {
    id: "classic-milk-tea",
    name: "Classic Milk Tea",
    category: "Signature Milk Tea",
    price: 35,
    priceLabel: "GHS 35",
    description:
      "Traditional black tea brewed to perfection with rich cream and chewy brown sugar tapioca pearls.",
    badge: "🔥 Bestseller",
    image:
      "https://images.unsplash.com/photo-1558857563-b371033873b8?auto=format&fit=crop&w=600&q=80",
    wide: true,
  },
  {
    id: "taro-king-special",
    name: "Taro King Special",
    category: "Signature Milk Tea",
    price: 40,
    priceLabel: "GHS 40",
    description:
      "Rich, velvety sweet taro tea blended with signature boba for an authentic royal treat.",
    badge: "👑 Royal Pick",
    image:
      "https://images.unsplash.com/photo-1541658016709-82535e94bc69?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "strawberry-crush",
    name: "Strawberry Crush",
    category: "Fruit Tea & Refreshers",
    price: 40,
    priceLabel: "GHS 40",
    description:
      "Fresh strawberry puree infused into premium green tea with bursting popping boba.",
    badge: "🍓 Fruity",
    image:
      "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "matcha-royal",
    name: "Matcha Royal",
    category: "Specialty Tea",
    price: 45,
    priceLabel: "GHS 45",
    description:
      "Authentic ceremonial grade Japanese matcha layered smooth over velvety cold milk.",
    badge: "🍵 Premium",
    image:
      "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=600&q=80",
    wide: true,
  },
  {
    id: "mango-fruit-tea",
    name: "Mango Fruit Tea",
    category: "Fruit Tea & Refreshers",
    price: 35,
    priceLabel: "GHS 35",
    description:
      "Sun-ripened tropical mango paired with aromatic jasmine green tea over crushed ice.",
    badge: "🥭 Refreshing",
    image:
      "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "vanilla-boba-latte",
    name: "Vanilla Boba Latte",
    category: "Specialty Tea",
    price: 42,
    priceLabel: "GHS 42",
    description: "Smooth vanilla latte with chewy brown sugar boba pearls.",
    badge: "⭐ Fan Favorite",
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=600&q=80",
  },
];

export default function Home() {
  const { addItem, totalItems, openCart } = useCart();
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [videoIndex, setVideoIndex] = useState(0);
  const videos = ["/video1.mp4", "/video2.mp4"];

  return (
    <>
      <ScrollReveal />
      <div
        className="min-h-screen transition-colors duration-300"
        style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}
      >
      {/* --- Navigation --- */}
      <nav
        className="sticky top-0 z-50 transition-colors duration-300"
        style={{
          backgroundColor: "var(--bg-card)",
          boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
          borderBottom: "1px solid var(--border-gold)",
        }}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <div
              className="w-11 h-11 shrink-0 rounded-full overflow-hidden flex items-center justify-center"
              style={{ backgroundColor: "var(--bg-card)" }}
            >
              <Image
                alt="BOBA KING Logo"
                width={44}
                height={44}
                className="object-contain p-0.5"
                src="/logo.jpg"
              />
            </div>
            <span
              className="font-black font-heading text-xl tracking-tight"
              style={{ color: "var(--gold)" }}
            >
              BOBA KING
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wide" style={{ color: "var(--nav-text)" }}>
            <a href="#menu">Menu</a>
            <a href="#why-us">About Us</a>
            <a href="#location">Location</a>
            <a href="#hours">Hours</a>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-full flex items-center justify-center text-xl transition-colors"
              style={{ backgroundColor: "var(--icon-btn-bg)" }}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
            <button
              onClick={openCart}
              className="relative w-10 h-10 rounded-full flex items-center justify-center text-xl"
              style={{ backgroundColor: "var(--icon-btn-bg)" }}
              aria-label="Open cart"
            >
              🛒
              {totalItems > 0 && (
                <span
                  className="absolute -top-1 -right-1 w-5 h-5 rounded-full text-[10px] font-black flex items-center justify-center text-white"
                  style={{ backgroundColor: "var(--gold)" }}
                >
                  {totalItems}
                </span>
              )}
            </button>
            <button
              onClick={() => setMenuOpen((o) => !o)}
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded-lg"
              aria-label="Toggle menu"
            >
              <span className={`block w-6 h-0.5 rounded-full transition-all duration-300 ${menuOpen ? "translate-y-2 rotate-45" : ""}`} style={{ backgroundColor: "var(--nav-text)" }} />
              <span className={`block w-6 h-0.5 rounded-full transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} style={{ backgroundColor: "var(--nav-text)" }} />
              <span className={`block w-6 h-0.5 rounded-full transition-all duration-300 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} style={{ backgroundColor: "var(--nav-text)" }} />
            </button>
            <a
              href="https://wa.me/233248978606?text=Hello%20Boba%20King!%20I%20want%20to%20order"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:block font-extrabold px-6 py-2.5 rounded-full"
              style={{
                backgroundImage: "linear-gradient(50deg, var(--gold-light), var(--gold))",
                color: "#0A1931",
              }}
            >
              Order Now
            </a>
          </div>
        </div>
      </nav>

      {/* --- Mobile Nav Drawer --- */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-[60] md:hidden"
          onClick={() => setMenuOpen(false)}
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
          <div
            className="absolute top-0 right-0 h-full w-72 flex flex-col shadow-2xl transition-transform duration-300"
            style={{
              backgroundColor: "var(--bg)",
              borderLeft: "1px solid var(--border-gold)",
              animation: "slideInRight 0.3s ease-out",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-4 border-b"              style={{ borderColor: "var(--border-gold)" }}>
              <span className="font-heading font-bold text-lg" style={{ color: "var(--gold)" }}>
                Menu
              </span>
              <button
                onClick={() => setMenuOpen(false)}
                className="w-9 h-9 rounded-full flex items-center justify-center text-white text-lg hover:bg-white/10 transition-colors"
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>
            <nav className="flex flex-col gap-1 px-3 py-4">
              {[
                { label: "Menu", href: "#menu" },
                { label: "About Us", href: "#why-us" },
                { label: "Location", href: "#location" },
                { label: "Hours", href: "#hours" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-3 rounded-xl text-sm font-semibold transition-colors"
                  style={{ color: "var(--text-secondary)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(194,143,26,0.1)")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="mt-auto px-5 pb-6">
              <a
                href="https://wa.me/233248978606?text=Hello%20Boba%20King!%20I%20want%20to%20order"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center font-extrabold px-6 py-3 rounded-full"
                style={{
                  backgroundImage: "linear-gradient(50deg, var(--gold-light), var(--gold))",
                  color: "#0A1931",
                }}
              >
                Order Now
              </a>
            </div>
          </div>
        </div>
      )}

      {/* --- Hero Section --- */}
      <section className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 pt-6 sm:pt-20 pb-8 sm:pb-20 grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-12 items-center">
        <div className="flex flex-col gap-3 sm:gap-6">
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black font-heading tracking-tight leading-[1.1]">
            Bubble Tea <br />
            <span style={{ color: "var(--gold)" }}>Fit for Royalty</span>
          </h1>
          <p
            className="text-sm sm:text-lg max-w-xl font-medium leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            Handcrafted boba, rich brewed teas, and vibrant flavors made fresh
            daily for the University of Education, Winneba community.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-2.5 sm:gap-4 pt-1 sm:pt-2">
            <a
              href="https://wa.me/233248978606?text=Hello%20Boba%20King!%20I%20want%20to%20order"
              target="_blank"
              rel="noopener noreferrer"
              className="font-black px-6 sm:px-8 py-3 sm:py-4 rounded-2xl text-center"
              style={{
                backgroundImage:
                  "linear-gradient(50deg, var(--gold-light), var(--gold))",
                color: "#0A1931",
              }}
            >
              Order Now
            </a>
            <a
              href="#menu"
              className="font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-2xl text-center"
              style={{
                backgroundColor: "var(--border-subtle)",
                color: "var(--text)",
              }}
            >
              Explore Menu
            </a>
          </div>
          <div
            className="flex flex-wrap items-center gap-2 sm:gap-3 pt-1 sm:pt-4 text-[10px] sm:text-xs font-bold"
            style={{ color: "var(--text-secondary)" }}
          >
            <span
              className="px-3 sm:px-4 py-1 sm:py-2 rounded-xl"
              style={{ backgroundColor: "var(--bg-card)" }}
            >
              📍 CE-051-7918, Yeenua St
            </span>
            <span
              className="px-3 sm:px-4 py-1 sm:py-2 rounded-xl"
              style={{ backgroundColor: "var(--bg-card)" }}
            >
              📌 Plus Code: 995C+V3
            </span>
            <span
              className="px-3 sm:px-4 py-1 sm:py-2 rounded-xl"
              style={{ backgroundColor: "var(--bg-card)" }}
            >
              📞 0248978606
            </span>
          </div>
        </div>

        <div className="relative flex justify-center">
          <div
            className="reveal-scale relative w-full max-w-[260px] sm:max-w-[420px] aspect-square sm:aspect-[4/5] rounded-[1.5rem] sm:rounded-[2.5rem] overflow-hidden shadow-2xl"
            style={{
              backgroundColor: "var(--bg-card)",
              border: "2px solid var(--hero-border)",
            }}
          >
            <Image
              alt="Boba King Signature Drink"
              fill
              sizes="(max-width: 768px) 80vw, 420px"
              className="object-cover"
              src="https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-60 pointer-events-none" />
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 p-4 sm:p-6 rounded-2xl bg-black/50 backdrop-blur-xl pointer-events-none">
              <span
                className="text-[10px] sm:text-xs font-bold uppercase tracking-wider"
                style={{ color: "var(--gold)" }}
              >
                Featured Beverage
              </span>
              <h3 className="text-lg sm:text-xl font-extrabold font-heading mt-1 text-white">
                Vanilla Boba Latte
              </h3>
              <p className="text-[10px] sm:text-xs text-gray-300 mt-1">
                Smooth vanilla latte with chewy brown sugar boba pearls.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Video Section --- */}
      <div className="reveal-section relative z-10 py-10 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6">
        <div
          className="relative w-full aspect-[16/10] sm:aspect-video rounded-2xl sm:rounded-[2rem] overflow-hidden shadow-2xl"
          style={{ backgroundColor: "var(--bg-card)" }}
        >
          <video
            key={videoIndex}
            src={videos[videoIndex]}
            className="w-full h-full object-cover"
            autoPlay
            muted
            playsInline
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          <button
            onClick={() => setVideoIndex((i) => (i - 1 + videos.length) % videos.length)}
            className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-10 sm:h-10 rounded-full backdrop-blur-md text-white flex items-center justify-center transition-opacity hover:opacity-80"
            style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
            aria-label="Previous video"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            onClick={() => setVideoIndex((i) => (i + 1) % videos.length)}
            className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-10 sm:h-10 rounded-full backdrop-blur-md text-white flex items-center justify-center transition-opacity hover:opacity-80"
            style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
            aria-label="Next video"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
          <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {videos.map((_, i) => (
              <button
                key={i}
                onClick={() => setVideoIndex(i)}
                className="h-2.5 rounded-full transition-all duration-300"
                style={{
                  width: videoIndex === i ? "1.75rem" : "0.625rem",
                  backgroundColor: videoIndex === i ? "var(--gold)" : "rgba(255,255,255,0.4)",
                }}
                aria-label={`Go to video ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* --- Why Us Section --- */}
      <div
        className="reveal-section relative z-10 py-16 sm:py-24 transition-colors duration-300"
        style={{ backgroundColor: "var(--section-alt-bg)" }}
        id="why-us"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
            <h2
              className="text-2xl sm:text-3xl lg:text-5xl font-black font-heading tracking-tight mb-3 sm:mb-4"
              style={{ color: "var(--gold)" }}
            >
              Why Customers Love Boba King
            </h2>
            <p
              className="text-sm sm:text-base font-medium"
              style={{ color: "var(--text-secondary)" }}
            >
              Premium quality, fast service, unbeatable taste.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
            <div
              data-stagger
              className="md:col-span-2 p-6 sm:p-8 rounded-2xl sm:rounded-3xl flex flex-col gap-3 sm:gap-4"
              style={{ backgroundColor: "var(--bg-card)" }}
            >
              <div
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center text-2xl sm:text-3xl"
                style={{ backgroundColor: "var(--feature-icon-bg)" }}
              >
                🧋
              </div>
              <h3
                className="text-lg sm:text-xl font-bold font-heading"
                style={{ color: "var(--text)" }}
              >
                Fresh Daily Boba
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                Slow-cooked brown sugar pearls prepared fresh every morning for
                maximum chewiness. We never cut corners on quality.
              </p>
            </div>
            <div
              data-stagger
              className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl flex flex-col gap-3 sm:gap-4"
              style={{ backgroundColor: "var(--bg-card)" }}
            >
              <div
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center text-2xl sm:text-3xl"
                style={{ backgroundColor: "var(--feature-icon-bg)" }}
              >
                🎓
              </div>
              <h3
                className="text-lg sm:text-xl font-bold font-heading"
                style={{ color: "var(--text)" }}
              >
                Friendly Prices
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                Royalty taste engineered to fit every budget in Winneba.
              </p>
            </div>
            <div
              data-stagger
              className="md:col-span-2 p-6 sm:p-8 rounded-2xl sm:rounded-3xl flex flex-col gap-3 sm:gap-4"
              style={{ backgroundColor: "var(--bg-card)" }}
            >
              <div
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center text-2xl sm:text-3xl"
                style={{ backgroundColor: "var(--feature-icon-bg)" }}
              >
                ⚡
              </div>
              <h3
                className="text-lg sm:text-xl font-bold font-heading"
                style={{ color: "var(--text)" }}
              >
                Instant Pickups
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                Skip lines completely by sending your customized order directly
                via WhatsApp. It&apos;s ready when you arrive.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* --- Menu Section --- */}
      <div
        className="reveal-section relative z-10 py-16 sm:py-28 max-w-7xl mx-auto px-5 sm:px-6"
        id="menu"
      >
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <h2
            className="text-2xl sm:text-3xl lg:text-5xl font-black font-heading tracking-tight mb-3 sm:mb-4"
            style={{ color: "var(--gold)" }}
          >
            The Royal Menu
          </h2>
          <p
            className="text-sm sm:text-base font-medium"
            style={{ color: "var(--text-secondary)" }}
          >
            Pick your favorite flavor and tap to order right away.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {MENU_ITEMS.map((item) => (
            <div
              key={item.id}
              className={`rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col justify-between shadow-xl data-stagger ${
                item.wide ? "md:col-span-2 lg:col-span-2" : ""
              }`}
              style={{ backgroundColor: "var(--bg-card)" }}
            >
              <div>
                <div
                  className="relative w-full overflow-hidden"
                  style={{
                    aspectRatio: item.wide ? "16/9" : "4/3",
                    backgroundColor: "var(--feature-icon-bg)",
                  }}
                >
                  <Image
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                    src={item.image}
                  />
                  {item.badge && (
                    <span
                      className="absolute top-3 right-3 backdrop-blur-md text-[10px] sm:text-xs font-black px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full"
                      style={{
                        backgroundColor: "var(--badge-bg)",
                        color: "var(--gold)",
                      }}
                    >
                      {item.badge}
                    </span>
                  )}
                </div>
                <div className="p-4 sm:p-6 flex flex-col gap-3 sm:gap-4 flex-grow justify-between">
                  <div>
                    <div className="flex justify-between items-start gap-2 mb-2">
                      <h3
                        className="text-lg sm:text-xl font-bold font-heading leading-tight"
                        style={{ color: "var(--text)" }}
                      >
                        {item.name}
                      </h3>
                      <span
                        className="text-xl sm:text-2xl font-black shrink-0"
                        style={{ color: "var(--gold)" }}
                      >
                        {item.priceLabel}
                      </span>
                    </div>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {item.description}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      addItem({
                        id: item.id,
                        name: item.name,
                        price: item.price,
                        priceLabel: item.priceLabel,
                        image: item.image,
                      })
                    }
                    className="w-full font-bold py-3 sm:py-3.5 rounded-xl sm:rounded-2xl text-center transition-opacity hover:opacity-90"
                    style={{
                      backgroundImage:
                        "linear-gradient(50deg, var(--gold-light), var(--gold))",
                      color: "#0A1931",
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- Testimonials Section --- */}
      <div
        className="reveal-section relative z-10 py-16 sm:py-24 transition-colors duration-300"
        style={{ backgroundColor: "var(--section-alt-bg)" }}
      >
        <div className="max-w-3xl mx-auto px-5 sm:px-6">
          <div className="text-center mb-10 sm:mb-16">
            <h2
              className="text-2xl sm:text-3xl lg:text-5xl font-black font-heading tracking-tight mb-3 sm:mb-4"
              style={{ color: "var(--gold)" }}
            >
              What Our Customers Say
            </h2>
            <p className="text-sm sm:text-base font-medium" style={{ color: "var(--text-secondary)" }}>
              Real reviews from our community.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:gap-6">
            {[
              { name: "Ama Mensah", stars: 5, text: "The Taro King Special is my go-to after lectures at Central Campus. The boba is always fresh and chewy, and I've tried pretty much everywhere in Winneba. Nothing else comes close.", avatar: "https://i.pravatar.cc/150?img=47" },
              { name: "Kofi Asante", stars: 5, text: "Best boba spot on Yeenua Street, hands down. The student discount makes it even better. My go-to is the Matcha Royal — smooth and not too sweet.", avatar: "https://i.pravatar.cc/150?img=53" },
              { name: "Efua Amoako", stars: 5, text: "Brought my friends from Accra here after visiting the Winneba beach. They wouldn't stop talking about the Strawberry Crush. Premium quality for the price.", avatar: "https://i.pravatar.cc/150?img=45" },
              { name: "Nana Yaw Boateng", stars: 5, text: "I love that the boba is made fresh daily. You can really taste the difference. The Mango Fruit Tea is my summer essential after morning classes on Central Campus.", avatar: "https://i.pravatar.cc/150?img=68" },
              { name: "Abena Osei", stars: 5, text: "After late-night study sessions at the university library, nothing hits like a Classic Milk Tea from Boba King. Fast pickup, friendly staff, right on Yeenua Street.", avatar: "https://i.pravatar.cc/150?img=44" },
            ].map((review, i) => (
              <div
                key={i}
                data-stagger
                className="rounded-2xl sm:rounded-3xl p-5 sm:p-8"
                style={{ backgroundColor: "var(--bg-card)" }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 bg-gray-200">
                    <img src={review.avatar} alt={review.name} className="w-full h-full object-cover" />
                  </div>
                  <h4 className="font-bold text-base" style={{ color: "var(--text)" }}>
                    {review.name}
                  </h4>
                </div>
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: review.stars }).map((_, j) => (
                    <span key={j} style={{ color: "var(--gold)" }}>&#9733;</span>
                  ))}
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {review.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- QR Code / Fast Track Section --- */}
      <div
        className="reveal-section relative z-10 py-16 sm:py-24 max-w-7xl mx-auto px-5 sm:px-6"
        id="hours"
      >
        <div
          className="rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-center"
          style={{ backgroundColor: "var(--bg-card)" }}
        >
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "var(--gold)" }}>
            Fast Track
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black font-heading tracking-tight mb-3" style={{ color: "var(--text)" }}>
            Scan to Order Instantly
          </h2>
          <p className="text-sm sm:text-base mb-8" style={{ color: "var(--text-secondary)" }}>
            Point your phone camera to start your order on WhatsApp.
          </p>
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 mx-auto mb-8 rounded-xl overflow-hidden">
            <Image
              src="https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=https://wa.me/233248978606?text=Hello%20Boba%20King!%20I%20want%20to%20order"
              alt="Scan to order on WhatsApp"
              fill
              className="object-cover"
              sizes="224px"
            />
          </div>
          <div className="flex flex-col items-center gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
            <a href="tel:0248978606" className="font-bold text-base underline" style={{ color: "var(--text)" }}>
              📞 0248978606
            </a>
            <p>📍 CE-051-7918, Yeenua St, Winneba</p>
            <p>📌 Plus Code: 995C+V3</p>
          </div>
        </div>
      </div>

      {/* --- Promo / Offer Section --- */}
      <div className="reveal-section relative z-10 py-8 sm:py-12 max-w-7xl mx-auto px-5 sm:px-6" style={{ backgroundColor: "var(--bg)" }}>
        <div
          className="rounded-3xl sm:rounded-[2rem] p-8 sm:p-12 relative overflow-hidden"
          style={{ backgroundColor: "var(--gold)" }}
        >
          <div className="relative z-10">
            <span className="inline-block px-3 py-1.5 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-wider mb-5" style={{ backgroundColor: "#1A1A1A", color: "#FFFFFF" }}>
              Exclusive Offer
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight mb-5" style={{ color: "#1A1A1A" }}>
              Get <span className="underline decoration-2 underline-offset-4">10%</span> OFF!
            </h2>
            <p className="text-sm sm:text-base font-bold max-w-lg mb-8 leading-relaxed" style={{ color: "#1A1A1A" }}>
              Show us you follow us on TIKTOK and INSTAGRAM upon pickup to redeem your instant discount on any drink!
            </p>
            <div
              className="inline-block rounded-2xl p-5 sm:p-6"
              style={{ backgroundColor: "rgba(0,0,0,0.2)" }}
            >
              <p className="font-black text-sm uppercase tracking-wider mb-2" style={{ color: "#1A1A1A" }}>
                Operating Hours
              </p>
              <p className="text-sm font-bold" style={{ color: "#1A1A1A" }}>
                Mon – Sat: 12:00 PM – 11:00 PM
              </p>
              <p className="text-sm font-bold" style={{ color: "#1A1A1A" }}>
                Sun: 3:00 PM – 10:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* --- Location Section --- */}
      <div
        className="reveal-section relative z-10 py-16 sm:py-24"
        id="location"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black font-heading tracking-tight mb-3" style={{ color: "var(--gold)" }}>
            Visit Our Shop
          </h2>
          <p className="text-sm sm:text-base font-medium mb-8" style={{ color: "var(--text-secondary)" }}>
            Conveniently located in Winneba close to campus.
          </p>
          <div className="rounded-2xl sm:rounded-3xl overflow-hidden mb-6" style={{ border: "2px solid var(--border-gold)" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.0!2d-0.983!3d5.345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMjAnNDIuMCJOIDDCsDU4JzU4LjgiVw!5e0!3m2!1sen!2sgh!4v1700000000000!5m2!1sen!2sgh"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Boba King Location"
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://www.google.com/maps/search/CE-051-7918+Yeenua+St+Winneba"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center font-bold py-3.5 rounded-2xl transition-opacity hover:opacity-90"
              style={{ backgroundColor: "var(--bg-card)", color: "var(--text)", border: "1px solid var(--border-gold)" }}
            >
              Open in Google Maps
            </a>
            <a
              href="https://wa.me/233248978606?text=Hello%20Boba%20King!%20I%20want%20to%20order"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center font-bold py-3.5 rounded-2xl transition-opacity hover:opacity-90"
              style={{ backgroundImage: "linear-gradient(50deg, var(--gold-light), var(--gold))", color: "#0A1931" }}
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* --- Opening Hours Section --- */}
      <div className="reveal-section relative z-10 py-16 sm:py-24 max-w-3xl mx-auto px-5 sm:px-6">
        <div className="rounded-2xl sm:rounded-3xl p-6 sm:p-10" style={{ backgroundColor: "var(--bg-card)" }}>
          <h2 className="text-xl sm:text-2xl font-black font-heading tracking-tight mb-6 sm:mb-8" style={{ color: "var(--gold)" }}>
            <span className="mr-2">⏰</span>Opening Hours
          </h2>
          <div className="flex flex-col">
            {[
              ["Monday", "12:00 PM – 11:00 PM"],
              ["Tuesday", "12:00 PM – 11:00 PM"],
              ["Wednesday", "12:00 PM – 11:00 PM"],
              ["Thursday", "12:00 PM – 11:00 PM"],
              ["Friday", "12:00 PM – 11:00 PM"],
              ["Saturday", "12:00 PM – 11:00 PM"],
              ["Sunday", "3:00 PM – 10:00 PM"],
            ].map(([day, hours], i) => (
              <div
                key={day}
                className="flex justify-between items-center py-4"
                style={{ borderBottom: i < 6 ? "1px solid var(--border-gold)" : "none" }}
              >
                <span className="text-sm sm:text-base font-medium" style={{ color: "var(--text)" }}>
                  {day}
                </span>
                <span className="text-sm sm:text-base font-bold" style={{ color: "var(--gold)" }}>
                  {hours}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- Footer --- */}
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
            &copy; {new Date().getFullYear()} BOBA KING &bull; Winneba &bull;{" "}
            <a href="tel:0248978606" className="underline" style={{ color: "var(--gold)" }}>
              0248978606
            </a>
          </p>
        </div>
      </footer>
      </div>
    </>
  );
}
