import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { ShoppingCart, ArrowLeft } from 'lucide-react';
import { ColorSelector } from '@/components/ColorSelector';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const product = products.find((p) => p.id === id);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-semibold mb-4">Producto no encontrado</h1>
          <Button onClick={() => navigate('/')}>Volver al inicio</Button>
        </main>
        <Footer />
      </div>
    );
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      return;
    }

    addToCart({
      ...product,
      quantity,
      selectedSize,
      selectedColor: selectedColor || product.color,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate(-1)}
            className="mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver
          </Button>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div className="space-y-4">
              <Card className="aspect-square overflow-hidden">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </Card>
              
              <div className="grid grid-cols-3 gap-3">
                {product.images.map((image, index) => (
                  <Card
                    key={index}
                    className={`aspect-square overflow-hidden cursor-pointer border-2 transition-smooth ${
                      selectedImage === index ? 'border-primary' : 'border-transparent'
                    }`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </Card>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              {/* Título y precio */}
              <div>
                <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
                <p className="text-2xl font-bold text-primary">{formatPrice(product.price)}</p>
              </div>

              {/* Descripción */}
              {product.description && (
                <p className="text-muted-foreground">{product.description}</p>
              )}

              {/* Selección de talla */}
              <div>
                <label className="block text-sm font-medium mb-3">
                  Talla {!selectedSize && <span className="text-destructive">*</span>}
                </label>
                <div className="grid grid-cols-6 gap-2">
                  {product.sizes.map((size) => (
                    <Button
                      key={size}
                      variant={selectedSize === size ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setSelectedSize(size)}
                      className="h-10"
                    >
                      {size}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Selección de color */}
              <div>
                <label className="block text-sm font-medium mb-3">Color</label>
                <ColorSelector
                  selectedColor={selectedColor || product.color}
                  onColorChange={setSelectedColor}
                  availableColors={[product.color]}
                />
              </div>

              {/* Cantidad */}
              <div>
                <label className="block text-sm font-medium mb-3">Cantidad</label>
                <div className="flex items-center gap-3 w-fit">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="h-10 w-10 p-0"
                  >
                    -
                  </Button>
                  <span className="text-lg font-medium w-12 text-center">{quantity}</span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setQuantity(quantity + 1)}
                    className="h-10 w-10 p-0"
                  >
                    +
                  </Button>
                </div>
              </div>

              {/* Botón de agregar al carrito */}
              <div className="space-y-2">
                <Button
                  className="w-full"
                  size="lg"
                  onClick={handleAddToCart}
                  disabled={!selectedSize}
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Agregar al Carrito
                </Button>
                {!selectedSize && (
                  <p className="text-sm text-destructive text-center">
                    Por favor selecciona una talla
                  </p>
                )}
              </div>

              {/* Información del producto */}
              <div className="pt-4 border-t border-border space-y-2 text-sm text-muted-foreground">
                <p><strong>Estilo:</strong> {product.style}</p>
                <p><strong>Categoría:</strong> {product.category}</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
