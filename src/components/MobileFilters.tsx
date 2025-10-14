import { Button } from './ui/button';
import { Card } from './ui/card';
import { Slider } from './ui/slider';
import { Filter, X } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';

interface MobileFiltersProps {
  isOpen: boolean;
  onClose: () => void;
  selectedColor: string;
  setSelectedColor: (color: string) => void;
  selectedSize: string;
  setSelectedSize: (size: string) => void;
  selectedStyle: string;
  setSelectedStyle: (style: string) => void;
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
  colors: string[];
  sizes: string[];
  styles: string[];
  onApplyFilters: () => void;
}

export const MobileFilters = ({
  isOpen,
  onClose,
  selectedColor,
  setSelectedColor,
  selectedSize,
  setSelectedSize,
  selectedStyle,
  setSelectedStyle,
  priceRange,
  setPriceRange,
  colors,
  sizes,
  styles,
  onApplyFilters
}: MobileFiltersProps) => {
  const handleApplyFilters = () => {
    onApplyFilters();
    onClose();
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="bottom" className="h-[80vh] bg-white">
        <SheetHeader className="pb-4">
          <div className="flex items-center justify-between">
            <SheetTitle className="text-xl font-semibold">Filtros</SheetTitle>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-5 w-5" />
            </Button>
          </div>
        </SheetHeader>
        
        <div className="space-y-6 overflow-y-auto pb-20">
          {/* Color */}
          <div>
            <h3 className="font-medium mb-3 text-gray-900">Color</h3>
            <div className="grid grid-cols-2 gap-2">
              <Button
                variant={selectedColor === '' ? 'default' : 'outline'}
                size="sm"
                className="justify-start"
                onClick={() => setSelectedColor('')}
              >
                Todos
              </Button>
              {colors.map((color) => (
                <Button
                  key={color}
                  variant={selectedColor === color ? 'default' : 'outline'}
                  size="sm"
                  className="justify-start"
                  onClick={() => setSelectedColor(color)}
                >
                  {color}
                </Button>
              ))}
            </div>
          </div>

          {/* Talla */}
          <div>
            <h3 className="font-medium mb-3 text-gray-900">Talla</h3>
            <div className="grid grid-cols-4 gap-2">
              {sizes.map((size) => (
                <Button
                  key={size}
                  variant={selectedSize === size ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedSize(selectedSize === size ? '' : size)}
                >
                  {size}
                </Button>
              ))}
            </div>
          </div>

          {/* Estilo */}
          <div>
            <h3 className="font-medium mb-3 text-gray-900">Estilo</h3>
            <div className="grid grid-cols-2 gap-2">
              <Button
                variant={selectedStyle === '' ? 'default' : 'outline'}
                size="sm"
                className="justify-start"
                onClick={() => setSelectedStyle('')}
              >
                Todos
              </Button>
              {styles.map((style) => (
                <Button
                  key={style}
                  variant={selectedStyle === style ? 'default' : 'outline'}
                  size="sm"
                  className="justify-start"
                  onClick={() => setSelectedStyle(style)}
                >
                  {style}
                </Button>
              ))}
            </div>
          </div>

          {/* Precio */}
          <div>
            <h3 className="font-medium mb-3 text-gray-900">Precio</h3>
            <div className="space-y-4">
              <Slider
                value={priceRange}
                onValueChange={(value) => setPriceRange(value as [number, number])}
                min={60000}
                max={200000}
                step={1000}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-600">
                <span>${(priceRange[0] / 1000).toFixed(0)}k</span>
                <span>${(priceRange[1] / 1000).toFixed(0)}k</span>
              </div>
            </div>
          </div>
        </div>

        {/* Botón de aplicar filtros */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200">
          <Button 
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            onClick={handleApplyFilters}
          >
            Aplicar Filtros
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};
