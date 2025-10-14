import { Link } from 'react-router-dom';
import { X, Home, User, Users, Tag } from 'lucide-react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const menuItems = [
    { to: '/', label: 'Inicio', icon: Home },
    { to: '/category/hombres', label: 'Hombres', icon: User },
    { to: '/category/mujeres', label: 'Mujeres', icon: Users },
    { to: '/category/outlet', label: 'Outlet', icon: Tag },
  ];

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="left" className="w-80 bg-white">
        <SheetHeader className="pb-6">
          <SheetTitle className="text-2xl font-bold gradient-text text-left">
            Jeans Bogotá
          </SheetTitle>
        </SheetHeader>
        
        <nav className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.to}
                to={item.to}
                onClick={onClose}
                className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 group"
              >
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <span className="text-lg font-medium text-gray-700 group-hover:text-blue-600 transition-colors duration-200">
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>
        
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500 text-center">
            Tu tienda de confianza para jeans de calidad premium
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
};
