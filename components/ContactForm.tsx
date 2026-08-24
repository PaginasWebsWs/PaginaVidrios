"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, Clock, Send } from "lucide-react";

const formSchema = z.object({
  nombre: z.string().min(2, "El nombre es requerido"),
  email: z.string().email("Email inválido"),
  telefono: z.string().optional(),
  colorDeseado: z.string().min(1, "Indica el color deseado"),
  mensaje: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

interface ContactFormProps {
  selectedColor?: string;
}

export function ContactForm({ selectedColor = "" }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      colorDeseado: selectedColor,
    },
  });

  // Update form when selectedColor changes
  if (selectedColor && selectedColor !== "") {
    setValue("colorDeseado", selectedColor);
  }

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Form data:", data);
    setSubmitStatus({
      type: "success",
      message: "✓ ¡Solicitud enviada! Te contactaremos en breve.",
    });

    reset();
    setIsSubmitting(false);

    setTimeout(() => setSubmitStatus(null), 5000);
  };

  return (
    <section id="contacto" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">¿Listo para tu proyecto?</h2>
            <div className="w-24 h-1 bg-linear-to-r from-emerald-500 to-cyan-500 mx-auto rounded-full" />
            <p className="text-gray-600 mt-4">
              Déjanos tus datos y te contactaremos en menos de 24 horas con una cotización detallada
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Info Card */}
            <Card className="bg-linear-to-br from-emerald-600 to-cyan-600 text-white">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Información de contacto</h3>
                    <p className="text-emerald-50">Estamos aquí para ayudarte con tu proyecto</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5" />
                      <span>+54 11 4567 8901</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5" />
                      <span>hola@vitrumcurve.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5" />
                      <span>Lun-Vie 9:00 a 18:00</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/20">
                    <p className="text-sm text-emerald-50">✓ Asesoría personalizada</p>
                    <p className="text-sm text-emerald-50">✓ Muestras físicas disponibles</p>
                    <p className="text-sm text-emerald-50">✓ Presupuesto en 24h</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Form */}
            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div>
                    <Label htmlFor="nombre">Nombre completo *</Label>
                    <Input id="nombre" {...register("nombre")} className="mt-1" />
                    {errors.nombre && <p className="text-red-500 text-sm mt-1">{errors.nombre.message}</p>}
                  </div>

                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" {...register("email")} className="mt-1" />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                  </div>

                  <div>
                    <Label htmlFor="telefono">Teléfono</Label>
                    <Input id="telefono" {...register("telefono")} className="mt-1" />
                  </div>

                  <div>
                    <Label htmlFor="colorDeseado">Color deseado *</Label>
                    <Input id="colorDeseado" {...register("colorDeseado")} className="mt-1" placeholder="Ej: Azul marino, Verde jade" />
                    {errors.colorDeseado && <p className="text-red-500 text-sm mt-1">{errors.colorDeseado.message}</p>}
                  </div>

                  <div>
                    <Label htmlFor="mensaje">Mensaje / dimensiones</Label>
                    <Textarea id="mensaje" {...register("mensaje")} rows={3} className="mt-1" placeholder="Indica radio de curvatura, medidas, cantidad..." />
                  </div>

                  <Button type="submit" className="w-full bg-linear-to-r from-emerald-600 to-cyan-600" disabled={isSubmitting}>
                    {isSubmitting ? "Enviando..." : "Enviar solicitud"}
                    <Send className="ml-2 w-4 h-4" />
                  </Button>

                  {submitStatus && (
                    <div className={`p-3 rounded-lg text-center ${submitStatus.type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                      {submitStatus.message}
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
