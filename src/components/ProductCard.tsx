import { Product } from '@/types/product';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { ShoppingCart, Eye, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const navigate = useNavigate();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Card className="group overflow-hidden border-0 shadow-md hover:shadow-2xl transition-all duration-500 hover-lift bg-white">
      <div className="relative">
        <div 
          className="aspect-square overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 cursor-pointer relative"
          onClick={() => navigate(`/product/${product.id}`)}
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          
          {/* Overlay con botones de acción */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <div className="flex gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <Button 
                size="sm" 
                className="bg-white/90 hover:bg-white text-gray-900 shadow-lg"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/product/${product.id}`);
                }}
              >
                <Eye className="h-4 w-4" />
              </Button>
              <Button 
                size="sm" 
                variant="outline" 
                className="bg-white/90 hover:bg-white border-white/50 text-gray-900 shadow-lg"
                onClick={(e) => {
                  e.stopPropagation();
                  // Aquí se podría agregar funcionalidad de favoritos
                }}
              >
                <Heart className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {/* Badge de descuento (opcional) */}
          {product.price > 200000 && (
            <div className="absolute top-3 left-3 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
              -20%
            </div>
          )}
        </div>
      </div>
      
      <CardContent className="p-6">
        <h3 className="font-semibold text-gray-900 mb-2 text-lg group-hover:text-blue-600 transition-colors duration-300">
          {product.name}
        </h3>
        
        <div className="mb-4">
          <div className="flex flex-col">
            <p className="text-lg font-bold text-gray-900">{formatPrice(product.price)}</p>
            {product.price > 200000 && (
              <p className="text-sm text-gray-500 line-through">
                {formatPrice(product.price * 1.25)}
              </p>
            )}
          </div>
        </div>
        
        <Button 
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-2.5 shadow-lg hover:shadow-xl transition-all duration-300"
          onClick={() => navigate(`/product/${product.id}`)}
        >
          <Eye className="h-4 w-4 mr-2" />
          Ver Detalles
        </Button>
      </CardContent>
    </Card>
  );
};
