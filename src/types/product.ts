export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  images: string[];
  category: 'hombres' | 'mujeres' | 'outlet';
  color: string;
  sizes: string[];
  style: string;
  description?: string;
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize: string;
  selectedColor: string;
}
