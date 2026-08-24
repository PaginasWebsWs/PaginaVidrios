"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Paintbrush, Sparkles } from "lucide-react";

const colors = [
  { name: "Rojo Passion", class: "bg-gradient-to-br from-red-500 to-red-600" },
  { name: "Azul Profundo", class: "bg-gradient-to-br from-blue-500 to-blue-600" },
  { name: "Verde Esmeralda", class: "bg-gradient-to-br from-green-500 to-green-600" },
  { name: "Ámbar Dorado", class: "bg-gradient-to-br from-yellow-500 to-yellow-600" },
  { name: "Violeta Real", class: "bg-gradient-to-br from-purple-500 to-purple-600" },
  { name: "Rosa Quartz", class: "bg-gradient-to-br from-pink-500 to-pink-600" },
  { name: "Terracota", class: "bg-gradient-to-br from-orange-500 to-orange-600" },
  { name: "Turquesa", class: "bg-gradient-to-br from-teal-500 to-teal-600" },
  { name: "Índigo", class: "bg-gradient-to-br from-indigo-500 to-indigo-600" },
  { name: "Grafito", class: "bg-gradient-to-r from-gray-700 to-gray-900" },
];

interface ColorPaletteProps {
  onSelectColor: (color: string) => void;
}

export function ColorPalette({ onSelectColor }: ColorPaletteProps) {
  const [selectedColor, setSelectedColor] = useState<string>("");

  const handleColorSelect = (colorName: string) => {
    setSelectedColor(colorName);
    onSelectColor(colorName);
  };

  return (
    <section id="colores" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Crea tu color único</h2>
          <div className="w-24 h-1 bg-linear-to-r from-emerald-500 to-cyan-500 mx-auto rounded-full" />
          <p className="text-gray-600 mt-4">Selecciona un color de referencia o solicita una mezcla personalizada</p>
        </div>

        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Paintbrush className="w-5 h-5 text-emerald-600" />
              Paleta de colores
            </CardTitle>
            <CardDescription>Más de 200 colores disponibles en nuestro catálogo</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {colors.map((color) => (
                <div
                  key={color.name}
                  className={`${color.class} h-24 rounded-2xl cursor-pointer transition-all hover:scale-105 hover:shadow-lg ${
                    selectedColor === color.name ? "ring-4 ring-emerald-500 ring-offset-2" : ""
                  }`}
                  onClick={() => handleColorSelect(color.name)}
                  title={color.name}
                />
              ))}
            </div>

            <div className="text-center mt-8">
              <Button
                variant="outline"
                className="border-emerald-600 text-emerald-600 hover:bg-emerald-50"
                onClick={() => {
                  const customColor = prompt("¿Qué color personalizado necesitas? (Ej: Coral pastel, Azul metálico, etc.)");
                  if (customColor) {
                    handleColorSelect(customColor);
                  }
                }}
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Solicitar color personalizado
              </Button>
            </div>

            {selectedColor && (
              <div className="mt-6 p-4 bg-emerald-50 rounded-lg text-center">
                <p className="text-emerald-800 font-semibold">
                  Color seleccionado: {selectedColor}
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
