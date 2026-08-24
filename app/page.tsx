"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { ColorPalette } from "@/components/ColorPalette";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Marquee } from "@/components/Marquee";

export default function Home() {
  const [selectedColor, setSelectedColor] = useState("");

  useEffect(() => {
    // Efecto del cursor glow
    const glow = document.createElement("div");
    glow.className = "cursor-glow";
    document.body.appendChild(glow);

    const handleMouseMove = (e: MouseEvent) => {
      glow.style.left = e.clientX + "px";
      glow.style.top = e.clientY + "px";
    };

    document.addEventListener("mousemove", handleMouseMove);
    
    // Observer para animaciones reveal
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add("visible"), i * 90);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach((el) => observer.observe(el));

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      glow.remove();
      observer.disconnect();
    };
  }, []);

  return (
    <main>
      <Navbar />
      <Hero />
      <Marquee />
      <Services />
      <ColorPalette onSelectColor={setSelectedColor} />
      <ContactForm selectedColor={selectedColor} />
      <Footer />
    </main>
  );
}
