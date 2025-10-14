import { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { ProductGrid } from '@/components/ProductGrid';
import { Footer } from '@/components/Footer';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Filter } from 'lucide-react';
import { SortFilter, SortOption } from '@/components/SortFilter';
import { MobileFilters } from '@/components/MobileFilters';

const Category = () => {
  const { category } = useParams<{ category: string }>();
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedStyle, setSelectedStyle] = useState<string>('');
  const [priceRange, setPriceRange] = useState<[number, number]>([60000, 200000]);
  const [sortBy, setSortBy] = useState<SortOption>('newest');
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  const categoryProducts = products.filter(
    (product) => product.category === category
  );

  const filteredProducts = useMemo(() => {
    let filtered = categoryProducts.filter((product) => {
      const colorMatch = !selectedColor || product.color === selectedColor;
      const sizeMatch = !selectedSize || product.sizes.includes(selectedSize);
      const styleMatch = !selectedStyle || product.style === selectedStyle;
      const priceMatch =
        product.price >= priceRange[0] && product.price <= priceRange[1];

      return colorMatch && sizeMatch && styleMatch && priceMatch;
    });

    // Aplicar ordenamiento
    switch (sortBy) {
      case 'price-asc':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        filtered.sort((a, b) => b.id - a.id);
        break;
      case 'oldest':
        filtered.sort((a, b) => a.id - b.id);
        break;
      default:
        break;
    }

    return filtered;
  }, [categoryProducts, selectedColor, selectedSize, selectedStyle, priceRange, sortBy]);

  const colors = [...new Set(categoryProducts.map((p) => p.color))];
  const sizes = [...new Set(categoryProducts.flatMap((p) => p.sizes))];
  const styles = [...new Set(categoryProducts.map((p) => p.style))];

  const categoryTitle =
    category === 'hombres'
      ? 'Hombres'
      : category === 'mujeres'
      ? 'Mujeres'
      : 'Outlet';

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <section className="border-b border-border bg-muted/30">
          <div className="container mx-auto px-4 py-2">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-3xl mb-1">{categoryTitle}</h1>
              <p className="text-muted-foreground">
                {filteredProducts.length} productos disponibles
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          <div className="flex gap-8">
            {/* Filtros para desktop */}
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <Card className="p-6 sticky top-24">
                <div className="flex items-center gap-2 mb-6">
                  <Filter className="h-5 w-5" />
                  <h2 className="font-semibold">Filtros</h2>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium mb-3">Color</h3>
                    <div className="space-y-2">
                      <Button
                        variant={selectedColor === '' ? 'default' : 'ghost'}
                        size="sm"
                        className="w-full justify-start"
                        onClick={() => setSelectedColor('')}
                      >
                        Todos
                      </Button>
                      {colors.map((color) => (
                        <Button
                          key={color}
                          variant={selectedColor === color ? 'default' : 'ghost'}
                          size="sm"
                          className="w-full justify-start"
                          onClick={() => setSelectedColor(color)}
                        >
                          {color}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium mb-3">Talla</h3>
                    <div className="grid grid-cols-3 gap-2">
                      {sizes.map((size) => (
                        <Button
                          key={size}
                          variant={selectedSize === size ? 'default' : 'outline'}
                          size="sm"
                          onClick={() =>
                            setSelectedSize(selectedSize === size ? '' : size)
                          }
                        >
                          {size}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium mb-3">Estilo</h3>
                    <div className="space-y-2">
                      <Button
                        variant={selectedStyle === '' ? 'default' : 'ghost'}
                        size="sm"
                        className="w-full justify-start"
                        onClick={() => setSelectedStyle('')}
                      >
                        Todos
                      </Button>
                      {styles.map((style) => (
                        <Button
                          key={style}
                          variant={selectedStyle === style ? 'default' : 'ghost'}
                          size="sm"
                          className="w-full justify-start"
                          onClick={() => setSelectedStyle(style)}
                        >
                          {style}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium mb-3">Precio</h3>
                    <div className="space-y-4">
                      <Slider
                        value={priceRange}
                        onValueChange={(value) => setPriceRange(value as [number, number])}
                        min={60000}
                        max={200000}
                        step={1000}
                        className="w-full"
                      />
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>${(priceRange[0] / 1000).toFixed(0)}k</span>
                        <span>${(priceRange[1] / 1000).toFixed(0)}k</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </aside>

            {/* Grid de productos */}
            <div className="flex-1">
              <ProductGrid products={filteredProducts} />
            </div>
          </div>
        </div>

        {/* Filtros móviles */}
        <MobileFilters
          isOpen={isMobileFiltersOpen}
          onClose={() => setIsMobileFiltersOpen(false)}
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
          selectedStyle={selectedStyle}
          setSelectedStyle={setSelectedStyle}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          colors={colors}
          sizes={sizes}
          styles={styles}
          onApplyFilters={() => {}}
        />
      </main>

      <Footer />
    </div>
  );
};

export default Category;
