import { Gem } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0F172A] border-t border-[#334155] py-12">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Gem className="w-8 h-8 text-[#4A8FBF]" />
              <h3 className="text-2xl font-bold">
                Vitrum<span className="text-[#4A8FBF] italic">Curve</span>
              </h3>
            </div>
            <p className="text-[#94A3B8]">Especialistas en vidrio curvo de cualquier color desde 2015.</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Enlaces rápidos</h4>
            <ul className="space-y-2 text-[#94A3B8]">
              <li><a href="#inicio" className="hover:text-[#4A8FBF] transition">Inicio</a></li>
              <li><a href="#servicios" className="hover:text-[#4A8FBF] transition">Servicios</a></li>
              <li><a href="#curvos" className="hover:text-[#4A8FBF] transition">Vidrio Curvo</a></li>
              <li><a href="#colores" className="hover:text-[#4A8FBF] transition">Colores</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Servicios</h4>
            <ul className="space-y-2 text-[#94A3B8]">
              <li>Curvado a medida</li>
              <li>Colores personalizados</li>
              <li>Instalación profesional</li>
              <li>Asesoría técnica</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Contacto</h4>
            <ul className="space-y-2 text-[#94A3B8]">
              <li>📧 hola@vitrumcurve.com</li>
              <li>📱 +54 11 4567 8901</li>
              <li>📍 Buenos Aires, Argentina</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#334155] mt-8 pt-8 text-center text-[#94A3B8]">
          <p>&copy; 2025 VitrumCurve - Todos los derechos reservados. Vidrios curvos de cualquier color.</p>
        </div>
      </div>
    </footer>
  );
}
