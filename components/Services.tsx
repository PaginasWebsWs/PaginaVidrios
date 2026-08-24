/* eslint-disable @typescript-eslint/no-unused-vars */
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Palette, Package, Wrench, Droplet, Shield } from "lucide-react";

const services = [
  {
    icon: TrendingUp,
    title: "Curvado a Medida",
    description: "Radios desde 200mm, espesores 4-19mm. Tecnología de curvado en caliente de precisión.",
  },
  {
    icon: Palette,
    title: "Cualquier Color",
    description: "Personalización total con colores RAL, Pantone, texturas mates o brillantes.",
  },
  {
    icon: Package,
    title: "Venta de Planchas",
    description: "Stock disponible y producción bajo pedido. Entregas rápidas a todo el territorio.",
  },
  {
    icon: Wrench,
    title: "Instalación Profesional",
    description: "Equipo certificado para montaje de vidrios curvos en todo tipo de proyectos.",
  },
  {
    icon: Droplet,
    title: "Vidrio Coloreado",
    description: "Más de 500 tonalidades en stock. Coloración en masa o por lámina adhesiva.",
  },
  {
    icon: Shield,
    title: "Templado Industrial",
    description: "Temple térmico que quintuplica la resistencia. Certificaciones internacionales.",
  },
];

export function Services() {
  return (
    <section id="servicios" className="py-16 md:py-24 bg-[#1E293B]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12 reveal">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-[#4A8FBF]" />
            <span className="text-xs tracking-[0.22em] uppercase text-[#4A8FBF]">Nuestros Servicios</span>
            <div className="w-8 h-px bg-[#4A8FBF]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-['Cormorant_Garamond']">
            Todo lo que necesitas<br />en <span className="text-[#4A8FBF] italic">vidrio curvo</span>
          </h2>
          <p className="text-[#94A3B8] mt-4 max-w-2xl mx-auto">
            Soluciones integrales en vidrio curvo para proyectos residenciales, comerciales e industriales
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 reveal">
          {services.map((service, index) => (
            <Card key={index} className="group bg-[#0F172A] border-[#334155] hover:border-[#4A8FBF] transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-14 h-14 bg-linear-to-br from-[#2C6E9E] to-[#4A8FBF] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-xl text-white">{service.title}</CardTitle>
                <CardDescription className="text-[#94A3B8]">{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
