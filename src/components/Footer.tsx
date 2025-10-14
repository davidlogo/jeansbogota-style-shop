import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, CreditCard, Truck, Shield } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white mt-20">
      <div className="container mx-auto px-4 py-16">
        {/* Sección principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4 gradient-text">Jeans Bogotá</h3>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Tu tienda de confianza para jeans de calidad premium. Estilo, comodidad y calidad en cada pieza. 
              Más de 10 años vistiendo a Colombia.
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-pink-600 hover:bg-pink-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-blue-400 hover:bg-blue-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-6 text-white">Enlaces Rápidos</h3>
            <div className="space-y-3">
              <a href="/category/hombres" className="block text-gray-300 hover:text-white transition-colors duration-300">
                Jeans para Hombres
              </a>
              <a href="/category/mujeres" className="block text-gray-300 hover:text-white transition-colors duration-300">
                Jeans para Mujeres
              </a>
              <a href="/category/outlet" className="block text-gray-300 hover:text-white transition-colors duration-300">
                Outlet
              </a>
              <a href="/cart" className="block text-gray-300 hover:text-white transition-colors duration-300">
                Carrito de Compras
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-6 text-white">Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">info@jeansbogota.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">+57 1 234 5678</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">Bogotá, Colombia</span>
              </div>
            </div>
          </div>
        </div>

        {/* Sección de beneficios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg backdrop-blur-sm">
            <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
              <Truck className="h-6 w-6 text-white" />
            </div>
            <div>
              <h4 className="font-semibold text-white">Envío Gratis</h4>
              <p className="text-sm text-gray-300">En compras superiores a $150.000</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg backdrop-blur-sm">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
              <CreditCard className="h-6 w-6 text-white" />
            </div>
            <div>
              <h4 className="font-semibold text-white">Pago Seguro</h4>
              <p className="text-sm text-gray-300">Múltiples métodos de pago</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg backdrop-blur-sm">
            <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <div>
              <h4 className="font-semibold text-white">Garantía</h4>
              <p className="text-sm text-gray-300">30 días de garantía</p>
            </div>
          </div>
        </div>

        {/* Línea divisoria y copyright */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; 2025 Jeans Bogotá. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Política de Privacidad
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Términos y Condiciones
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
