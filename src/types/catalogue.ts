export interface Category {
  id: string;
  label: string;
  description: string;
}

export interface ComboOffer {
  categoryId: string;
  quantity: number;
  bundlePrice: number;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  images: string[];
  categoryIds: string[];
  sizes: string[];
}

export interface CartLine {
  productId: string;
  size: string;
  quantity: number;
}
