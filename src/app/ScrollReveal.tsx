"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const selector =
      ".reveal-section, .reveal-left, .reveal-right, .reveal-scale, [data-stagger]";

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");

            // Stagger children with data-stagger attribute inside this section
            const staggerChildren = entry.target.querySelectorAll(
              "[data-stagger]"
            );
            staggerChildren.forEach((child, i) => {
              (child as HTMLElement).style.transitionDelay = `${i * 120}ms`;
              child.classList.add("revealed");
            });
          }
        });
      },
      { threshold: 0.06, rootMargin: "0px 0px -30px 0px" }
    );

    document.querySelectorAll(selector).forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
