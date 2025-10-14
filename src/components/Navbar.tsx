import { Link } from 'react-router-dom';
import { ShoppingCart, Menu } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { useCart } from '@/context/CartContext';
import { MobileMenu } from './MobileMenu';
import { useState } from 'react';

export const Navbar = () => {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            {/* Botón de menú para móvil */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden hover:bg-blue-50 hover:text-blue-600 transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </Button>
            
            <Link 
              to="/" 
              className="text-2xl font-bold gradient-text hover:scale-105 transition-transform duration-300"
            >
              Jeans Bogotá
            </Link>
          </div>
          
          <div className="hidden md:flex items-center gap-10">
            <Link 
              to="/category/hombres" 
              className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition-all duration-300 relative group"
            >
              Hombres
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              to="/category/mujeres" 
              className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition-all duration-300 relative group"
            >
              Mujeres
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              to="/category/outlet" 
              className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition-all duration-300 relative group"
            >
              Outlet
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>

          <Button 
            variant="ghost" 
            size="icon" 
            asChild 
            className="relative hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 group"
          >
            <Link to="/cart">
              <ShoppingCart className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
              {totalItems > 0 && (
                <Badge 
                  className="absolute -top-2 -right-2 h-6 w-6 flex items-center justify-center p-0 text-xs bg-gradient-to-r from-red-500 to-pink-500 text-white border-2 border-white shadow-lg animate-pulse"
                  variant="default"
                >
                  {totalItems}
                </Badge>
              )}
            </Link>
          </Button>
        </div>
      </div>
      
      {/* Menú móvil */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </nav>
  );
};
