
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="p-6 shadow-lg bg-black/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <img src="/logo-deluxurymotors.png" alt="Deluxury Motors Logo" className="h-10" />
          <Button className="bg-white text-black hover:bg-gray-200">
            <a href="https://wa.me/34661719351" target="_blank" rel="noopener noreferrer">
              Contáctanos por WhatsApp
            </a>
          </Button>
        </div>
      </header>

      <section className="bg-cover bg-center h-[400px] flex items-center justify-center" style={{ backgroundImage: "url('/car-luxury-bg.jpg')" }}>
        <h2 className="text-4xl font-bold bg-black/60 px-6 py-4 rounded-xl">Encuentra el coche perfecto para ti</h2>
      </section>

      <section className="py-12 px-4 max-w-7xl mx-auto">
        <h3 className="text-3xl font-semibold mb-8">Coches disponibles</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((car) => (
            <Card key={car} className="bg-white text-black hover:shadow-xl">
              <CardContent className="p-4">
                <img src="/car-placeholder.jpg" alt="Coche" className="rounded-lg mb-4" />
                <h4 className="text-xl font-bold">Marca y modelo</h4>
                <p className="text-sm text-gray-700">Año • Kilometraje • Precio</p>
                <Button className="mt-4 w-full">Ver más</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-white text-black py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-semibold mb-4">¿Quieres vender tu coche?</h3>
          <p className="mb-6">Publica tu vehículo de forma gratuita o destaca tu anuncio con opciones premium.</p>
          <Input placeholder="Marca, modelo, año..." className="mb-4" />
          <Button className="bg-black text-white hover:bg-gray-800">Publicar mi coche</Button>
        </div>
      </section>

      <footer className="bg-black py-6 text-center text-gray-400">
        <p>© 2025 Deluxury Motors. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
