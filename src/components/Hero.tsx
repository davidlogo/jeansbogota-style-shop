import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-jeans.jpg';

export const Hero = () => {
  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <div className="animate-fade-in-up">
          <h1 className="text-6xl md:text-7xl lg:text-8xl mb-6 font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent leading-tight">
            Nueva Colección
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8 rounded-full"></div>
        </div>
        
        <div className="animate-fade-in-up animation-delay-200">
          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
            Descubre nuestra última colección de jeans premium. Estilo, comodidad y calidad en cada pieza.
          </p>
        </div>
        
        <div className="animate-fade-in-up animation-delay-400">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              asChild 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <Link to="/category/hombres">Comprar Hombres</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              asChild 
              className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-8 py-4 text-lg font-semibold backdrop-blur-sm transition-all duration-300"
            >
              <Link to="/category/mujeres">Comprar Mujeres</Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Elementos decorativos */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-1 h-1 bg-white/40 rounded-full animate-pulse animation-delay-1000"></div>
      <div className="absolute bottom-32 left-20 w-1.5 h-1.5 bg-white/50 rounded-full animate-pulse animation-delay-2000"></div>
    </section>
  );
};
