"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import { useCart } from "./CartContext";
import { useTheme } from "./ThemeContext";
import { MENU_ITEMS, CATEGORIES } from "./menuData";

const ALL_CATEGORY = "All";

export default function Home() {
  const { addItem, totalItems, openCart } = useCart();
  const { theme, toggleTheme } = useTheme();
  const [videoIndex, setVideoIndex] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeCategory, setActiveCategory] = useState(ALL_CATEGORY);

  const visibleItems =
    activeCategory === ALL_CATEGORY
      ? MENU_ITEMS
      : MENU_ITEMS.filter((item) => item.category === activeCategory);

  // Cards start hidden (reveal animation). When the filter changes we re-render
  // a different set of nodes, so re-trigger the reveal so they don't stay
  // invisible; previously-seen ones just snap back with no extra delay.
  // Skipped on first mount so ScrollReveal keeps handling the scroll-in.
  const isFirstFilterRender = useRef(true);
  useEffect(() => {
    if (isFirstFilterRender.current) {
      isFirstFilterRender.current = false;
      return;
    }
    document
      .querySelectorAll("#menu [data-stagger]")
      .forEach((el) => {
        el.classList.remove("revealed");
        if (el instanceof HTMLElement) el.style.transitionDelay = "";
        requestAnimationFrame(() => el.classList.add("revealed"));
      });
  }, [activeCategory]);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
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

          <div className="flex items-center gap-6 sm:gap-8 text-sm font-semibold tracking-wide" style={{ color: "var(--nav-text)" }}>
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
          </div>
        </div>
      </nav>



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
            className="reveal-scale relative w-full max-w-[320px] sm:max-w-[480px] lg:max-w-[560px] aspect-[5/4] rounded-[1.5rem] sm:rounded-[2.5rem] overflow-hidden shadow-2xl"
            style={{
              backgroundColor: "var(--bg-card)",
              border: "2px solid var(--hero-border)",
            }}
          >
            <Image
              alt="Boba King signature drinks on a tray"
              fill
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 480px, 560px"
              className="object-cover"
              src="/hero-drinks.jpg"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-60 pointer-events-none" />
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 p-4 sm:p-6 rounded-2xl bg-black/50 backdrop-blur-xl pointer-events-none">
              <span
                className="text-[10px] sm:text-xs font-bold uppercase tracking-wider"
                style={{ color: "var(--gold)" }}
              >
                Featured Drinks
              </span>
              <h3 className="text-lg sm:text-xl font-extrabold font-heading mt-1 text-white">
                The Boba King Lineup
              </h3>
              <p className="text-[10px] sm:text-xs text-gray-300 mt-1">
                Classic, taro, matcha & more — handcrafted fresh daily.
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

        {/* Category filter tabs */}
        <div
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10"
          role="tablist"
          aria-label="Filter menu by category"
        >
          {[ALL_CATEGORY, ...CATEGORIES].map((cat) => {
            const active = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setActiveCategory(cat)}
                className="px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-colors"
                style={
                  active
                    ? {
                        backgroundImage:
                          "linear-gradient(50deg, var(--gold-light), var(--gold))",
                        color: "#0A1931",
                      }
                    : {
                        backgroundColor: "var(--bg-card)",
                        color: "var(--text-secondary)",
                        border: "1px solid var(--border-gold)",
                      }
                }
              >
                {cat}
              </button>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {visibleItems.map((item) => (
            <div
              key={item.id}
              data-stagger
              className={`rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col justify-between shadow-xl ${
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
              { name: "Ama Mensah", stars: 5, text: "The Taro King Special is my go-to after lectures at Central Campus. The boba is always fresh and chewy, and I've tried pretty much everywhere in Winneba. Nothing else comes close.", avatar: "/avatars/ama-mensah.svg" },
              { name: "Kofi Asante", stars: 5, text: "Best boba spot on Yeenua Street, hands down. The student discount makes it even better. My go-to is the Matcha Royal — smooth and not too sweet.", avatar: "/avatars/kofi-asante.svg" },
              { name: "Efua Amoako", stars: 5, text: "Brought my friends from Accra here after visiting the Winneba beach. They wouldn't stop talking about the Strawberry Crush. Premium quality for the price.", avatar: "/avatars/efua-amoako.svg" },
              { name: "Nana Yaw Boateng", stars: 5, text: "I love that the boba is made fresh daily. You can really taste the difference. The Mango Fruit Tea is my summer essential after morning classes on Central Campus.", avatar: "/avatars/nana-yaw-boateng.svg" },
              { name: "Abena Osei", stars: 5, text: "After late-night study sessions at the university library, nothing hits like a Classic Milk Tea from Boba King. Fast pickup, friendly staff, right on Yeenua Street.", avatar: "/avatars/abena-osei.svg" },
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
              src="/whatsapp-qr.png"
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
      <div
        className="reveal-section relative z-10 py-10 sm:py-16 max-w-7xl mx-auto px-5 sm:px-6"
        style={{ backgroundColor: "var(--bg)" }}
      >
        <div
          className="rounded-3xl sm:rounded-[2rem] overflow-hidden relative"
          style={{ backgroundColor: "var(--gold)" }}
        >
          <div className="p-8 sm:p-12 lg:p-16 flex flex-col items-start">
            {/* Badge */}
            <span
              className="inline-block px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-widest mb-6"
              style={{ backgroundColor: "#0A1931", color: "#FFFFFF" }}
            >
              Exclusive Offer
            </span>

            {/* Heading */}
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight mb-5"
              style={{ color: "#0A1931" }}
            >
              Get <span className="underline decoration-[3px] underline-offset-8">10%</span> OFF!
            </h2>

            {/* Body copy */}
            <p
              className="text-sm sm:text-base font-bold max-w-lg leading-relaxed mb-8"
              style={{ color: "#0A1931" }}
            >
              Show us you follow us on <span className="font-extrabold">TIKTOK</span> and <span className="font-extrabold">INSTAGRAM</span> upon pickup to redeem your instant discount on any drink!
            </p>

            {/* Operating hours card */}
            <div
              className="rounded-2xl p-5 sm:p-6 w-full max-w-md"
              style={{ backgroundColor: "rgba(10, 25, 49, 0.15)" }}
            >
              <p
                className="font-extrabold text-xs sm:text-sm uppercase tracking-widest mb-3"
                style={{ color: "#0A1931" }}
              >
                Operating Hours
              </p>
              <div className="flex flex-col gap-1.5">
                <p className="text-sm sm:text-base font-bold" style={{ color: "#0A1931" }}>
                  Mon – Sat: 12:00 PM – 11:00 PM
                </p>
                <p className="text-sm sm:text-base font-bold" style={{ color: "#0A1931" }}>
                  Sun: 3:00 PM – 10:00 PM
                </p>
              </div>
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
              src="https://maps.google.com/maps?q=995C%2BV3%20Winneba,%20Ghana&z=17&output=embed"
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
          className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm"
          style={{ color: "var(--text-muted)" }}
        >
          <p>
            &copy; {new Date().getFullYear()} BOBA KING &bull; Winneba &bull;{" "}
            <a href="tel:0248978606" className="underline" style={{ color: "var(--gold)" }}>
              0248978606
            </a>
          </p>
          <div className="flex flex-wrap items-center gap-3 text-xs">
            <a href="/privacy" className="hover:underline transition-colors" style={{ color: "var(--text-secondary)" }}>
              Privacy Policy
            </a>
            <span style={{ color: "var(--text-muted)" }}>&bull;</span>
            <a href="/cookies" className="hover:underline transition-colors" style={{ color: "var(--text-secondary)" }}>
              Cookie Policy
            </a>
            <span style={{ color: "var(--text-muted)" }}>&bull;</span>
            <a href="/terms" className="hover:underline transition-colors" style={{ color: "var(--text-secondary)" }}>
              Terms & Conditions
            </a>
          </div>
        </div>
      </footer>
      </div>

      {/* --- Back to Top Button --- */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300"
        style={{
          opacity: showScrollTop ? 1 : 0,
          transform: showScrollTop ? "translateY(0) scale(1)" : "translateY(20px) scale(0.8)",
          pointerEvents: showScrollTop ? "auto" : "none",
          backgroundImage: "linear-gradient(50deg, var(--gold-light), var(--gold))",
          color: "#0A1931",
        }}
        aria-label="Back to top"
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </button>
    </>
  );
}
