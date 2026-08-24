/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search, Gem, Award } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToContact = () => {
    const element = document.querySelector("#contacto");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToServices = () => {
    const element = document.querySelector("#servicios");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="inicio" className="relative overflow-hidden min-h-screen flex items-center">
      {/* Background con gradientes azules */}
      <div className="absolute inset-0 bg-linear-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_50%,rgba(44,110,158,0.09)_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_80%_at_15%_80%,rgba(74,143,191,0.07)_0%,transparent_55%)]" />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left reveal"
          >
            <div className="inline-flex items-center gap-2 bg-[#2C6E9E]/20 text-[#4A8FBF] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Award className="w-4 h-4" />
              <span>Líder en curvado de vidrio desde 2015</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 font-['Cormorant_Garamond']">
              Planchas de vidrio curvo
              <span className="text-[#4A8FBF] italic block">
                de cualquier color
              </span>
            </h1>

            <p className="text-lg text-[#94A3B8] mb-8 max-w-2xl mx-auto lg:mx-0">
              Fabricación profesional de vidrios curvados a medida. Colores personalizados,
              acabados premium y envíos a todo el país.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-[#2C6E9E] hover:bg-[#4A8FBF] hover:shadow-xl transform hover:scale-105 transition-all"
                onClick={scrollToContact}
              >
                Solicitar cotización <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-[#4A8FBF] text-[#4A8FBF] hover:bg-[#2C6E9E]/20"
                onClick={scrollToServices}
              >
                Ver servicios <Search className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-[#2C6E9E] rounded-full filter blur-3xl opacity-20 animate-pulse" />
              <Gem className="w-48 h-48 md:w-64 md:h-64 text-[#4A8FBF] relative z-10 mx-auto" />
              <div className="absolute bottom-0 left-0 right-0 text-center mt-4">
                <div className="inline-flex gap-2 bg-[#1E293B]/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-[#334155]">
                  <div className="w-3 h-3 bg-[#4A8FBF] rounded-full animate-pulse" />
                  <span className="text-sm font-semibold text-white">+200 colores disponibles</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats flotantes */}
      <div className="absolute bottom-8 left-0 right-0 z-10 reveal">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            <div className="border-l-2 border-[#4A8FBF] pl-4">
              <div className="text-2xl md:text-3xl font-bold text-white">18+</div>
              <div className="text-xs text-[#94A3B8] uppercase tracking-wider">Años de experiencia</div>
            </div>
            <div className="border-l-2 border-[#4A8FBF] pl-4">
              <div className="text-2xl md:text-3xl font-bold text-white">500+</div>
              <div className="text-xs text-[#94A3B8] uppercase tracking-wider">Colores disponibles</div>
            </div>
            <div className="border-l-2 border-[#4A8FBF] pl-4">
              <div className="text-2xl md:text-3xl font-bold text-white">3,200</div>
              <div className="text-xs text-[#94A3B8] uppercase tracking-wider">Proyectos entregados</div>
            </div>
            <div className="border-l-2 border-[#4A8FBF] pl-4">
              <div className="text-2xl md:text-3xl font-bold text-white">100%</div>
              <div className="text-xs text-[#94A3B8] uppercase tracking-wider">Garantía de calidad</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
