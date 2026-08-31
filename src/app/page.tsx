'use client';

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";

const MENU_ITEMS = [
  {
    name: "Classic Milk Tea",
    price: 35,
    tag: "🔥 Bestseller",
    desc: "Traditional black tea brewed to perfection with rich cream and chewy brown sugar tapioca pearls.",
    img: "https://images.unsplash.com/photo-1558857563-b371033873b8?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Taro King Special",
    price: 40,
    tag: "👑 Royal Pick",
    desc: "Rich, velvety sweet taro tea blended with signature boba for an authentic royal treat.",
    img: "https://images.unsplash.com/photo-1541658016709-82535e94bc69?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Strawberry Crush",
    price: 40,
    tag: "🍓 Fruity",
    desc: "Fresh strawberry puree infused into premium green tea with bursting popping boba.",
    img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Matcha Royal",
    price: 45,
    tag: "🍵 Premium",
    desc: "Authentic ceremonial grade Japanese matcha layered smooth over velvety cold milk.",
    img: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Mango Fruit Tea",
    price: 35,
    tag: "🥭 Refreshing",
    desc: "Sun-ripened tropical mango paired with aromatic jasmine green tea over crushed ice.",
    img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Vanilla Boba Latte",
    price: 40,
    tag: "⭐ Fan Favorite",
    desc: "Smooth vanilla latte with chewy brown sugar boba pearls and a hint of caramel.",
    img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=600&q=80",
  },
];

const HOURS = [
  { day: "Monday", time: "12:00 PM – 11:00 PM" },
  { day: "Tuesday", time: "12:00 PM – 11:00 PM" },
  { day: "Wednesday", time: "12:00 PM – 11:00 PM" },
  { day: "Thursday", time: "12:00 PM – 11:00 PM" },
  { day: "Friday", time: "12:00 PM – 11:00 PM" },
  { day: "Saturday", time: "12:00 PM – 11:00 PM" },
  { day: "Sunday", time: "3:00 PM – 10:00 PM" },
];

const VIDEOS = ["/video1.mp4", "/video2.mp4"];
const VIDEOS_COUNT = VIDEOS.length;

const GOLD = "#C28F1A";
const GOLD_GRADIENT = "linear-gradient(50deg, #F6E073, #C28F1A)";
const BTN_TEXT = "#0A1931";

type CartItem = { name: string; price: number; qty: number };

// Scroll-reveal hook
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("revealed");
          observer.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

// Wrapper component for scroll-reveal sections
function RevealSection({
  children,
  className = "",
  style,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  id?: string;
}) {
  const ref = useReveal();
  return (
    <div ref={ref} className={`reveal-section ${className}`} style={style} id={id}>
      {children}
    </div>
  );
}

export default function BobaKing() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDark, setIsDark] = useState(true);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const baseWaUrl =
    "https://wa.me/233248978606?text=Hello%20Boba%20King!%20I%20want%20to%20order";

  // Theme colors
  const BG = isDark ? "#0A1931" : "#E8EDF5";
  const CARD = isDark ? "#0D1F38" : "#FFFFFF";
  const TEXT_PRIMARY = isDark ? "#FFFFFF" : "#0A1931";
  const TEXT_SECONDARY = isDark ? "#D1D5DB" : "#374151";
  const BORDER_COLOR = isDark ? "rgba(255,255,255,0.05)" : "rgba(10,25,49,0.1)";
  const CARD_ALT = isDark ? `${CARD}99` : "#D6DFEB";

  const goToSlide = useCallback((idx: number) => {
    setCurrentSlide(idx);
  }, []);

  const goToNext = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % VIDEOS_COUNT);
  }, []);

  const goToPrev = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + VIDEOS_COUNT) % VIDEOS_COUNT);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
    }
  }, [currentSlide]);

  // Cart functions
  const addToCart = useCallback((name: string, price: number) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.name === name);
      if (existing) {
        return prev.map((item) =>
          item.name === name ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { name, price, qty: 1 }];
    });
    setCartOpen(true);
  }, []);

  const updateQty = useCallback((name: string, delta: number) => {
    setCart((prev) => {
      const updated = prev
        .map((item) =>
          item.name === name ? { ...item, qty: item.qty + delta } : item
        )
        .filter((item) => item.qty > 0);
      return updated;
    });
  }, []);

  const removeFromCart = useCallback((name: string) => {
    setCart((prev) => prev.filter((item) => item.name !== name));
  }, []);

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  const sendWhatsAppOrder = useCallback(() => {
    const lines = cart.map(
      (item) => `${item.qty}x ${item.name} - GHS ${item.price * item.qty}`
    );
    const msg = encodeURIComponent(
      `Hello Boba King! I'd like to order:\n\n${lines.join("\n")}\n\nTotal: GHS ${cartTotal}\n\nPlease confirm!`
    );
    window.open(`https://wa.me/233248978606?text=${msg}`, "_blank");
  }, [cart, cartTotal]);

  const navLinks = [
    { href: "#menu", label: "Menu" },
    { href: "#why-us", label: "About Us" },
    { href: "#location", label: "Location" },
    { href: "#hours", label: "Hours" },
  ];

  return (
    <div
      className="min-h-screen transition-colors duration-300"
      style={{ backgroundColor: BG, color: TEXT_PRIMARY }}
    >
      {/* NAVBAR */}
      <nav
        className="sticky top-0 z-50 transition-colors duration-300"
        style={{
          backgroundColor: "white",
          boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
        }}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <div
              className="w-11 h-11 shrink-0 rounded-full overflow-hidden flex items-center justify-center"                  style={{ backgroundColor: isDark ? "#0D1F38" : "#0A1931" }}
            >
              <Image
                src="/logo.jpg"
                alt="BOBA KING Logo"
                width={44}
                height={44}
                className="object-contain p-0.5"
              />
            </div>
            <span
              className="font-black font-heading text-xl tracking-tight"
              style={{ color: GOLD }}
            >
              BOBA KING
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wide text-gray-700">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {/* Theme toggle */}
            <button
              onClick={() => setIsDark(!isDark)}
              className="w-10 h-10 rounded-full flex items-center justify-center text-xl"
              style={{ backgroundColor: isDark ? "#0D1F38" : "#0A1931" }}
              aria-label="Toggle theme"
            >
              {isDark ? "☀️" : "🌙"}
            </button>

            {/* Cart button */}
            <button
              onClick={() => setCartOpen(!cartOpen)}
              className="relative w-10 h-10 rounded-full flex items-center justify-center text-xl"
              style={{ backgroundColor: isDark ? "#0D1F38" : "#0A1931" }}
              aria-label="Open cart"
            >
              🛒
              {cartCount > 0 && (
                <span
                  className="absolute -top-1 -right-1 w-5 h-5 rounded-full text-[10px] font-bold flex items-center justify-center text-white"
                  style={{ backgroundColor: GOLD }}
                >
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded-lg"
              aria-label="Toggle menu"
            >
              <span
                className={`block w-6 h-0.5 bg-gray-800 rounded-full transition-all duration-300 ${
                  mobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-gray-800 rounded-full transition-all duration-300 ${
                  mobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-gray-800 rounded-full transition-all duration-300 ${
                  mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>

            <a
              href={baseWaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:block font-extrabold px-6 py-2.5 rounded-full"
              style={{ backgroundImage: GOLD_GRADIENT, color: BTN_TEXT }}
            >
              Order Now
            </a>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-semibold py-2 text-gray-700"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={baseWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="font-extrabold px-6 py-3 rounded-full text-center mt-2"
                style={{ backgroundImage: GOLD_GRADIENT, color: BTN_TEXT }}
              >
                Order Now
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* CART PANEL */}
      {cartOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/40 z-[60]"
            onClick={() => setCartOpen(false)}
          />
          <div
            className="fixed top-0 right-0 h-full w-full max-w-md z-[70] shadow-2xl flex flex-col transition-colors duration-300"
            style={{
              backgroundColor: isDark ? "#0D1F38" : "#FFFFFF",
              color: isDark ? "#FFFFFF" : "#111827",
            }}
          >
            {/* Cart header */}
            <div
              className="flex items-center justify-between px-6 py-5"
              style={{ borderBottom: `1px solid ${BORDER_COLOR}` }}
            >
              <h3 className="font-black font-heading text-xl">
                Your Order ({cartCount})
              </h3>
              <button
                onClick={() => setCartOpen(false)}
                className="w-10 h-10 rounded-full flex items-center justify-center text-2xl"
                style={{ backgroundColor: isDark ? "#0A1931" : "#D6DFEB" }}
              >
                ✕
              </button>
            </div>

            {/* Cart items */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
                  <span className="text-5xl">🧋</span>
                  <p style={{ color: TEXT_SECONDARY }} className="font-medium">
                    Your cart is empty. Tap &quot;Add to Cart&quot; on any drink to get started.
                  </p>
                </div>
              ) : (
                <div className="flex flex-col gap-3">
                  {cart.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center gap-3 p-4 rounded-xl"
                      style={{ backgroundColor: isDark ? "#0A1931" : "#0A1931" }}
                    >
                      <div className="flex-1">
                        <p className="font-bold text-sm">{item.name}</p>
                        <p
                          className="text-xs font-semibold mt-0.5"
                          style={{ color: GOLD }}
                        >
                          GHS {item.price} each
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQty(item.name, -1)}
                          className="w-7 h-7 rounded-full font-bold text-sm flex items-center justify-center"
                          style={{
                            backgroundColor: isDark ? "#0D1F38" : "#D6DFEB",
                            border: `1px solid ${BORDER_COLOR}`,
                          }}
                        >
                          −
                        </button>
                        <span className="w-6 text-center font-bold text-sm">
                          {item.qty}
                        </span>
                        <button
                          onClick={() => updateQty(item.name, 1)}
                          className="w-7 h-7 rounded-full font-bold text-sm flex items-center justify-center"
                          style={{
                            backgroundColor: isDark ? "#0D1F38" : "#D6DFEB",
                            border: `1px solid ${BORDER_COLOR}`,
                          }}
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.name)}
                        className="text-red-400 text-lg ml-1"
                      >
                        🗑
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Cart footer */}
            {cart.length > 0 && (
              <div
                className="px-6 py-5"
                style={{ borderTop: `1px solid ${BORDER_COLOR}` }}
              >
                <div className="flex justify-between items-center mb-4">
                  <span className="font-bold text-sm" style={{ color: TEXT_SECONDARY }}>
                    Total
                  </span>
                  <span className="font-black text-xl" style={{ color: GOLD }}>
                    GHS {cartTotal}
                  </span>
                </div>
                <button
                  onClick={sendWhatsAppOrder}
                  className="w-full font-black py-4 rounded-2xl text-center text-lg"
                  style={{ backgroundImage: GOLD_GRADIENT, color: BTN_TEXT }}
                >
                  Place Order
                </button>
              </div>
            )}
          </div>
        </>
      )}

      {/* HERO SECTION */}
      <section className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 pt-6 sm:pt-20 pb-8 sm:pb-20 grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-12 items-center">
        <div className="flex flex-col gap-3 sm:gap-6">
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black font-heading tracking-tight leading-[1.1]">
            Bubble Tea <br />
            <span style={{ color: GOLD }}>Fit for Royalty</span>
          </h1>

          <p className="text-sm sm:text-lg max-w-xl font-medium leading-relaxed" style={{ color: TEXT_SECONDARY }}>
            Handcrafted boba, rich brewed teas, and vibrant flavors made fresh
            daily for the University of Education, Winneba community.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-2.5 sm:gap-4 pt-1 sm:pt-2">
            <a
              href={baseWaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-black px-6 sm:px-8 py-3 sm:py-4 rounded-2xl text-center"
              style={{ backgroundImage: GOLD_GRADIENT, color: BTN_TEXT }}
            >
              Order Now
            </a>
            <a
              href="#menu"
              className="font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-2xl text-center"
              style={{
                backgroundColor: isDark ? "rgba(255,255,255,0.1)" : "#0A1931",
                color: isDark ? TEXT_PRIMARY : "#FFFFFF",
              }}
            >
              Explore Menu
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-1 sm:pt-4 text-[10px] sm:text-xs font-bold" style={{ color: TEXT_SECONDARY }}>
            <span
              className="px-3 sm:px-4 py-1 sm:py-2 rounded-xl"                  style={{ backgroundColor: isDark ? "#0D1F38" : "#0A1931" }}
            >
              📍 CE-051-7918, Yeenua St
            </span>
            <span
              className="px-3 sm:px-4 py-1 sm:py-2 rounded-xl"                  style={{ backgroundColor: isDark ? "#0D1F38" : "#0A1931" }}
            >
              📌 Plus Code: 995C+V3
            </span>
            <span
              className="px-3 sm:px-4 py-1 sm:py-2 rounded-xl"                  style={{ backgroundColor: isDark ? "#0D1F38" : "#0A1931" }}
            >
              📞 0248978606
            </span>
          </div>
        </div>

        <div className="relative flex justify-center">
          <div
            className="relative w-full max-w-[260px] sm:max-w-[420px] aspect-square sm:aspect-[4/5] rounded-[1.5rem] sm:rounded-[2.5rem] overflow-hidden shadow-2xl"                style={{ backgroundColor: isDark ? "#0D1F38" : "#0A1931", border: `2px solid ${GOLD}44` }}
          >
            <Image
              src="https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80"
              alt="Boba King Signature Drink"
              fill
              sizes="(max-width: 768px) 80vw, 420px"
              className="object-cover opacity-100"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-60 pointer-events-none" />

            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 p-4 sm:p-6 rounded-2xl bg-black/50 backdrop-blur-xl pointer-events-none">
              <span
                className="text-[10px] sm:text-xs font-bold uppercase tracking-wider"
                style={{ color: GOLD }}
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

      {/* VIDEO SLIDESHOW */}
      <RevealSection className="relative z-10 py-10 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6">
        <div
          className="relative w-full aspect-[16/10] sm:aspect-video rounded-2xl sm:rounded-[2rem] overflow-hidden shadow-2xl"
          style={{ backgroundColor: isDark ? "#0D1F38" : "#0A1931" }}
        >
          <video
            ref={videoRef}
            src={VIDEOS[currentSlide]}
            className="w-full h-full object-cover"
            autoPlay
            muted
            playsInline
            onEnded={goToNext}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

          <button
            onClick={goToPrev}
            className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-10 sm:h-10 rounded-full backdrop-blur-md text-white flex items-center justify-center"
            style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
            aria-label="Previous video"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-10 sm:h-10 rounded-full backdrop-blur-md text-white flex items-center justify-center"
            style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
            aria-label="Next video"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
          </button>

          <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {VIDEOS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  idx === currentSlide ? "w-7" : "w-2.5"
                }`}
                style={{
                  backgroundColor:
                    idx === currentSlide ? GOLD : "rgba(255,255,255,0.4)",
                }}
                aria-label={`Go to video ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </RevealSection>

      {/* WHY CUSTOMERS LOVE BOBA KING */}
      <RevealSection
        id="why-us"
        className="relative z-10 py-16 sm:py-24 transition-colors duration-300"
        style={{ backgroundColor: CARD_ALT }}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
            <h2
              className="text-2xl sm:text-3xl lg:text-5xl font-black font-heading tracking-tight mb-3 sm:mb-4"
              style={{ color: GOLD }}
            >
              Why Customers Love Boba King
            </h2>
            <p className="text-sm sm:text-base font-medium" style={{ color: TEXT_SECONDARY }}>
              Premium quality, fast service, unbeatable taste.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
            <div
              className="md:col-span-2 p-6 sm:p-8 rounded-2xl sm:rounded-3xl flex flex-col gap-3 sm:gap-4"
              style={{ backgroundColor: CARD }}
            >
              <div
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center text-2xl sm:text-3xl"                    style={{ backgroundColor: isDark ? "#0A1931" : "#0A1931" }}
                  >
                    🧋
              </div>
              <h3 className="text-lg sm:text-xl font-bold font-heading" style={{ color: TEXT_PRIMARY }}>
                Fresh Daily Boba
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: TEXT_SECONDARY }}>
                Slow-cooked brown sugar pearls prepared fresh every morning for
                maximum chewiness. We never cut corners on quality.
              </p>
            </div>

            <div
              className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl flex flex-col gap-3 sm:gap-4"
              style={{ backgroundColor: CARD }}
            >
              <div
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center text-2xl sm:text-3xl"
                style={{ backgroundColor: isDark ? "#0A1931" : "#0A1931" }}
              >
                🎓
              </div>
              <h3 className="text-lg sm:text-xl font-bold font-heading" style={{ color: TEXT_PRIMARY }}>
                Friendly Prices
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: TEXT_SECONDARY }}>
                Royalty taste engineered to fit every budget in Winneba.
              </p>
            </div>

            <div
              className="md:col-span-2 p-6 sm:p-8 rounded-2xl sm:rounded-3xl flex flex-col gap-3 sm:gap-4"
              style={{ backgroundColor: CARD }}
            >
              <div
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center text-2xl sm:text-3xl"
                style={{ backgroundColor: isDark ? "#0A1931" : "#0A1931" }}
              >
                ⚡
              </div>
              <h3 className="text-lg sm:text-xl font-bold font-heading" style={{ color: TEXT_PRIMARY }}>
                Instant Pickups
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: TEXT_SECONDARY }}>
                Skip lines completely by sending your customized order directly
                via WhatsApp. It&apos;s ready when you arrive.
              </p>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* ROYAL MENU */}
      <RevealSection id="menu" className="relative z-10 py-16 sm:py-28 max-w-7xl mx-auto px-5 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <h2
            className="text-2xl sm:text-3xl lg:text-5xl font-black font-heading tracking-tight mb-3 sm:mb-4"
            style={{ color: GOLD }}
          >
            The Royal Menu
          </h2>
          <p className="text-sm sm:text-base font-medium" style={{ color: TEXT_SECONDARY }}>
            Pick your favorite flavor and tap to order right away.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {MENU_ITEMS.map((item, idx) => {
            const isLarge = idx === 0 || idx === 3;
            return (
              <div
                key={idx}
                className={`rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col justify-between shadow-xl ${
                  isLarge ? "md:col-span-2 lg:col-span-2" : ""
                }`}
                style={{ backgroundColor: CARD }}
              >
                <div
                  className={`relative w-full overflow-hidden ${
                    isLarge ? "aspect-[16/9]" : "aspect-[4/3]"
                  }`}
                  style={{ backgroundColor: isDark ? "#0A1931" : "#0A1931" }}
                >
                  <Image
                    src={item.img}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                  <span
                    className="absolute top-3 right-3 backdrop-blur-md text-[10px] sm:text-xs font-black px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full"
                    style={{
                      backgroundColor: isDark ? "rgba(10,25,49,0.8)" : "rgba(255,255,255,0.85)",
                      color: GOLD,
                    }}
                  >
                    {item.tag}
                  </span>
                </div>

                <div className="p-4 sm:p-6 flex flex-col gap-3 sm:gap-4 flex-grow justify-between">
                  <div>
                    <div className="flex justify-between items-start gap-2 mb-2">
                      <h3
                        className="text-lg sm:text-xl font-bold font-heading leading-tight"
                        style={{ color: TEXT_PRIMARY }}
                      >
                        {item.name}
                      </h3>
                      <span
                        className="text-xl sm:text-2xl font-black shrink-0"
                        style={{ color: GOLD }}
                      >
                        GHS {item.price}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: TEXT_SECONDARY }}>
                      {item.desc}
                    </p>
                  </div>

                  <button
                    onClick={() => addToCart(item.name, item.price)}
                    className="w-full font-bold py-3 sm:py-3.5 rounded-xl sm:rounded-2xl text-center"
                    style={{ backgroundImage: GOLD_GRADIENT, color: BTN_TEXT }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </RevealSection>

      {/* WHAT OUR CUSTOMERS SAY */}
      <RevealSection
        className="relative z-10 py-16 sm:py-24 overflow-hidden transition-colors duration-300"
        style={{ backgroundColor: CARD_ALT }}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
            <h2
              className="text-2xl sm:text-3xl lg:text-5xl font-black font-heading tracking-tight mb-3 sm:mb-4"
              style={{ color: GOLD }}
            >
              What Our Customers Say
            </h2>
            <p className="text-sm sm:text-base font-medium" style={{ color: TEXT_SECONDARY }}>
              Real reviews from our community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                name: "Ama Mensah",
                avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=120&h=120&q=80",
                rating: 5,
                text: "The Taro King Special is my go-to after lectures at Central Campus. The boba is always fresh and chewy, and I've tried pretty much everywhere in Winneba. Nothing else comes close.",
              },
              {
                name: "Kofi Asante",
                avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80",
                rating: 5,
                text: "WhatsApp ordering is a game changer. I send my order and it's ready by the time I walk over from North Campus. The Oreo Cookie Blast is unbeatable.",
              },
              {
                name: "Efua Amoako",
                avatar: "https://images.unsplash.com/photo-1523824921871-d6f1a15151f1?auto=format&fit=crop&w=120&h=120&q=80",
                rating: 5,
                text: "Best boba spot on Yeenua Street, hands down. The student discount makes it even better. My go-to is the Matcha Royal — smooth and not too sweet.",
              },
              {
                name: "Nana Yaw Boateng",
                avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80",
                rating: 5,
                text: "Brought my friends from Accra here after visiting the Winneba beach. They wouldn't stop talking about the Strawberry Crush. Premium quality for the price.",
              },
              {
                name: "Abena Osei",
                avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=120&h=120&q=80",
                rating: 5,
                text: "I love that the boba is made fresh daily. You can really taste the difference. The Mango Fruit Tea is my summer essential after morning classes on Central Campus.",
              },
              {
                name: "Kwame Darko",
                avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&h=120&q=80",
                rating: 5,
                text: "After late-night study sessions at the university library, nothing hits like a Classic Milk Tea from Boba King. Fast pickup, friendly staff, right on Yeenua Street.",
              },
            ].map((review, idx) => {
              const isLarge = idx === 1 || idx === 4;
              return (
                <div
                  key={idx}
                  className={`p-5 sm:p-7 rounded-2xl sm:rounded-3xl flex flex-col gap-4 ${
                    isLarge ? "md:col-span-2 lg:col-span-2" : ""
                  }`}
                  style={{ backgroundColor: CARD }}
                >
                  <div className="flex gap-0.5">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 sm:w-5 sm:h-5"
                        style={{ color: GOLD }}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <p className="text-sm leading-relaxed flex-grow" style={{ color: TEXT_SECONDARY }}>
                    {review.text}
                  </p>

                  <div className="flex items-center gap-3 pt-2">
                    <Image
                      src={review.avatar}
                      alt={review.name}
                      width={44}
                      height={44}
                      className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover shrink-0"
                    />
                    <p className="font-bold text-sm" style={{ color: isDark ? TEXT_PRIMARY : "#0A1931" }}>
                      {review.name}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </RevealSection>

      {/* QR + DEAL SECTION */}
      <RevealSection className="relative z-10 py-10 sm:py-16 max-w-7xl mx-auto px-5 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-5 sm:gap-8 items-stretch">
          <div
            className="p-6 sm:p-8 lg:p-12 rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl flex flex-col items-center text-center justify-between"
            style={{ backgroundColor: CARD, color: TEXT_PRIMARY }}
          >
            <div>
              <span
                className="text-[10px] sm:text-xs font-extrabold px-3 sm:px-4 py-1 sm:py-1.5 rounded-full uppercase tracking-wider"
                style={{ color: `${TEXT_PRIMARY}99` }}
              >
                Fast Track
              </span>
              <h3 className="text-2xl sm:text-3xl font-black font-heading mt-3 sm:mt-4 mb-2">
                Scan to Order Instantly
              </h3>
              <p className="text-xs sm:text-sm font-semibold mb-4 sm:mb-6" style={{ color: TEXT_SECONDARY }}>
                Point your phone camera to start your order on WhatsApp.
              </p>
            </div>

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=https://wa.me/233248978606?text=Hello%20Boba%20King!%20I%20want%20to%20order"
              alt="WhatsApp QR Code"
              className="w-44 h-44 sm:w-56 sm:h-56 mx-auto rounded-xl sm:rounded-2xl shadow-lg shrink-0"
            />

            <div
              className="mt-5 sm:mt-8 pt-4 sm:pt-6 w-full text-[10px] sm:text-xs font-semibold flex flex-col gap-1"
              style={{ borderTop: `1px solid ${BORDER_COLOR}`, color: TEXT_SECONDARY }}
            >
              <p className="text-sm sm:text-base font-black" style={{ color: TEXT_PRIMARY }}>
                📞 0248978606
              </p>
              <p>📍 CE-051-7918, Yeenua St, Winneba</p>
              <p>📌 Plus Code: 995C+V3</p>
            </div>
          </div>

          <div
            className="p-6 sm:p-8 lg:p-12 rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl flex flex-col justify-between"
            style={{ backgroundImage: GOLD_GRADIENT, color: BTN_TEXT }}
          >
            <div className="flex flex-col gap-3 sm:gap-4">
              <span className="bg-[#0A1931] text-white text-[10px] sm:text-xs font-extrabold px-3 sm:px-4 py-1 sm:py-1.5 rounded-full w-fit uppercase tracking-wider">
                Exclusive Offer
              </span>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading leading-tight">
                Get <span className="underline decoration-wavy decoration-[#0A1931]">10% OFF!</span>
              </h3>
              <p className="text-base sm:text-lg font-bold opacity-90">
                Show us you follow us on TIKTOK and INSTAGRAM upon pickup to
                redeem your instant discount on any drink!
              </p>
            </div>

            <div className="mt-6 sm:mt-8 bg-[#0A1931]/10 p-4 sm:p-6 rounded-xl sm:rounded-2xl">
              <h4 className="font-black text-xs uppercase tracking-wider mb-2">
                Operating Hours
              </h4>
              <p className="text-xs sm:text-sm font-extrabold">
                Mon – Sat: 12:00 PM – 11:00 PM
              </p>
              <p className="text-xs sm:text-sm font-extrabold">
                Sun: 3:00 PM – 10:00 PM
              </p>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* LOCATION & HOURS */}
      <RevealSection
        id="location"
        className="relative z-10 py-16 sm:py-24 transition-colors duration-300"
        style={{ backgroundColor: CARD_ALT }}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="flex flex-col gap-5 sm:gap-6">
            <div>
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-black font-heading mb-2"
                style={{ color: GOLD }}
              >
                Visit Our Shop
              </h2>
              <p className="text-sm sm:text-base font-medium" style={{ color: TEXT_SECONDARY }}>
                Conveniently located in Winneba close to campus.
              </p>
            </div>

            <div className="h-60 sm:h-80 w-full rounded-2xl sm:rounded-[2rem] overflow-hidden shadow-2xl relative">
              <iframe
                title="BOBA KING Location"
                src="https://maps.google.com/maps?q=5.3596363,-0.629784&z=17&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="https://maps.app.goo.gl/7bHzWZiRVfJPXF3U6"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl sm:rounded-2xl text-sm text-center"
                style={{
                  backgroundColor: isDark ? "rgba(255,255,255,0.1)" : "#0A1931",
                  color: isDark ? TEXT_PRIMARY : "#FFFFFF",
                }}
              >
                Open in Google Maps
              </a>
              <a
                href={baseWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl sm:rounded-2xl text-sm text-center"
                style={{ backgroundImage: GOLD_GRADIENT, color: BTN_TEXT }}
              >
                WhatsApp Us
              </a>
            </div>
          </div>

          <div
            id="hours"
            className="p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-[2rem] shadow-xl"
            style={{ backgroundColor: CARD }}
          >
            <h3
              className="text-xl sm:text-2xl font-black font-heading mb-4 sm:mb-6 flex items-center gap-3"
              style={{ color: GOLD }}
            >
              <span>⏰</span> Opening Hours
            </h3>
            <div className="flex flex-col gap-2 sm:gap-3">
              {HOURS.map((h, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center py-2 sm:py-2.5 text-xs sm:text-sm font-semibold"
                  style={{ borderBottom: `1px solid ${BORDER_COLOR}` }}
                >
                  <span style={{ color: TEXT_SECONDARY }}>{h.day}</span>
                  <span style={{ color: GOLD }}>{h.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </RevealSection>

      {/* FOOTER */}
      <footer
        className="relative z-10 py-6 sm:py-8 text-center text-[10px] sm:text-xs font-semibold"
        style={{ borderTop: `1px solid ${BORDER_COLOR}`, color: TEXT_SECONDARY }}
      >
        <p>© 2026 BOBA KING • Winneba • 0248978606</p>

      </footer>
    </div>
  );
}
