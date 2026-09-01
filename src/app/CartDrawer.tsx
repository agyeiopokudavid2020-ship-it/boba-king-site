"use client";

import Image from "next/image";
import { useCart } from "./CartContext";

export default function CartDrawer() {
  const { items, removeItem, updateQuantity, clearCart, totalPrice, isOpen, closeCart } =
    useCart();

  const whatsappMessage = items
    .map((i) => `${i.quantity}x ${i.name}`)
    .join("%0A");
  const whatsappUrl = `https://wa.me/233248978606?text=Hello%20Boba%20King!%20I%20want%20to%20order:%0A${whatsappMessage}`;

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm transition-opacity"
          onClick={closeCart}
        />
      )}

      {/* Drawer */}
      <div
        className="fixed top-0 right-0 z-[101] h-full w-full max-w-md transition-transform duration-300 ease-in-out"
        style={{
          backgroundColor: "var(--bg)",
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
          borderLeft: "1px solid var(--border-gold)",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b" style={{ borderColor: "var(--border-gold)" }}>
          <h2 className="font-heading font-bold text-lg" style={{ color: "var(--gold)" }}>
            Your Cart ({items.reduce((s, i) => s + i.quantity, 0)})
          </h2>
          <button
            onClick={closeCart}
            className="w-9 h-9 rounded-full flex items-center justify-center text-lg transition-colors"
            style={{ color: "var(--text)" }}
            aria-label="Close cart"
          >
            ✕
          </button>
        </div>

        {/* Items */}
        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[60%] text-center px-6">
            <span className="text-5xl mb-4">🛒</span>
            <p style={{ color: "var(--text-secondary)" }} className="font-medium">Your cart is empty</p>
            <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>
              Add some drinks to get started!
            </p>
          </div>
        ) : (
          <div className="flex flex-col h-[calc(100%-140px)] overflow-y-auto px-5 py-4 gap-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex gap-3 p-3 rounded-2xl"
                style={{ backgroundColor: "var(--bg-card)" }}
              >
                <div className="relative w-16 h-16 shrink-0 rounded-xl overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start gap-2">
                    <h4 className="text-sm font-bold truncate" style={{ color: "var(--text)" }}>
                      {item.name}
                    </h4>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-gray-500 hover:text-red-400 text-xs shrink-0 transition-colors"
                      aria-label={`Remove ${item.name}`}
                    >
                      ✕
                    </button>
                  </div>
                  <p className="text-xs mt-0.5" style={{ color: "var(--gold)" }}>
                    {item.priceLabel}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-7 h-7 rounded-lg flex items-center justify-center text-sm font-bold transition-colors"
                      style={{ backgroundColor: "var(--border-subtle)", color: "var(--text)" }}
                    >
                      -
                    </button>
                    <span className="text-sm font-bold w-5 text-center" style={{ color: "var(--text)" }}>
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-7 h-7 rounded-lg flex items-center justify-center text-sm font-bold transition-colors"
                      style={{ backgroundColor: "var(--border-subtle)", color: "var(--text)" }}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Footer */}
        {items.length > 0 && (
          <div
            className="absolute bottom-0 left-0 right-0 px-5 py-4 border-t"
            style={{
              backgroundColor: "var(--bg)",
              borderColor: "var(--border-gold)",
            }}
          >
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm font-medium" style={{ color: "var(--text-muted)" }}>Total</span>
              <span className="text-xl font-black" style={{ color: "var(--gold)" }}>
                GHS {totalPrice}
              </span>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center font-bold py-3 rounded-2xl transition-opacity hover:opacity-90"
              style={{
                backgroundImage: "linear-gradient(50deg, var(--gold-light), var(--gold))",
                color: "#0A1931",
              }}
            >
              Order via WhatsApp
            </a>
            <button
              onClick={clearCart}
              className="w-full text-center text-xs mt-2 hover:text-red-400 transition-colors"
              style={{ color: "var(--text-muted)" }}
            >
              Clear cart
            </button>
          </div>
        )}
      </div>
    </>
  );
}
