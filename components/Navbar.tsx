"use client";

import { useState, useEffect } from "react";
import { Menu, X, Gem } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Inicio", href: "#inicio" },
  { name: "Servicios", href: "#servicios" },
  { name: "Vidrio Curvo", href: "#curvos" },
  { name: "Colores", href: "#colores" },
  { name: "Contacto", href: "#contacto" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled ? "bg-[#0F172A]/98 border-b border-[#2C6E9E]/15" : "bg-linear-to-b from-[#0F172A]/95 to-transparent"
    )}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer group" onClick={() => scrollToSection("#inicio")}>
            <Gem className="w-8 h-8 text-[#4A8FBF] group-hover:scale-110 transition-transform" />
            <div>
              <h1 className="text-xl md:text-2xl font-bold">
                Vitrum<span className="text-[#4A8FBF] italic">Curve</span>
              </h1>
              <p className="text-xs text-[#94A3B8] hidden md:block tracking-wide">VIDRIOS CURVOS · COLOR INFINITO</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-[#94A3B8] hover:text-[#4A8FBF] font-medium transition-colors text-sm uppercase tracking-wider"
              >
                {item.name}
              </button>
            ))}
          </div>

          <Button
            className="hidden md:inline-flex bg-[#2C6E9E] hover:bg-[#4A8FBF] hover:shadow-lg transition-all"
            onClick={() => scrollToSection("#contacto")}
          >
            Cotizar
          </Button>

          {/* Mobile menu button */}
          <button className="md:hidden text-[#94A3B8]" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-[#334155]">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left py-3 text-[#94A3B8] hover:text-[#4A8FBF] font-medium transition-colors"
              >
                {item.name}
              </button>
            ))}
            <Button
              className="w-full mt-4 bg-[#2C6E9E]"
              onClick={() => scrollToSection("#contacto")}
            >
              Cotizar
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
