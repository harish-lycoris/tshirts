import type { Product } from '@/types/catalogue';

export const PRODUCTS: Product[] = [
  // Acid Wash / Oversized
  {
    id: 'acidwash-printed',
    name: 'Acid Wash Printed Tee',
    price: 400,
    description: 'Bold printed design on acid-wash cotton.',
    images: ['/products/acidwash-front.webp', '/products/acidwash-back.webp'],
    categoryIds: ['printed', 'oversized'],
    sizes: ['M', 'L', 'XL', 'XXL'],
  },
  // Collar
  {
    id: 'collar-polo',
    name: 'Collar Polo Tee',
    price: 200,
    description: 'Classic collar polo with clean finish.',
    images: ['/products/collar.webp'],
    categoryIds: ['collar', 'regular-fit'],
    sizes: ['M', 'L', 'XL', 'XXL'],
  },
  // Collar 1 (alternate design)
  {
    id: 'collar-polo-1',
    name: 'Collar Polo Tee - Variation',
    price: 200,
    description: 'Second collar design variation.',
    images: ['/products/collar-1.webp'],
    categoryIds: ['collar', 'regular-fit'],
    sizes: ['M', 'L', 'XL', 'XXL'],
  },
  // Collar Stripe (front/back)
  {
    id: 'collar-stripe',
    name: 'Collar Stripe Tee',
    price: 200,
    description: 'Striped collar detail on polo cut.',
    images: ['/products/collar-stripe-front.webp', '/products/collar-stripe-back.webp'],
    categoryIds: ['collar'],
    sizes: ['M', 'L', 'XL', 'XXL'],
  },
  // Dragon Black
  {
    id: 'dragon-black',
    name: 'Dragon Black Tee',
    price: 350,
    description: 'Dragon graphic on black base.',
    images: ['/products/dragon-black-front.webp', '/products/dragon-black-back.webp'],
    categoryIds: ['printed', 'oversized'],
    sizes: ['M', 'L', 'XL', 'XXL'],
  },
  // Dragon White
  {
    id: 'dragon-white',
    name: 'Dragon White Tee',
    price: 350,
    description: 'Dragon graphic on white base.',
    images: ['/products/dragon-white-front.webp', '/products/dragon-white-back.webp'],
    categoryIds: ['printed', 'oversized'],
    sizes: ['M', 'L', 'XL', 'XXL'],
  },
  // Eagle Acid Wash
  {
    id: 'eagle-acid',
    name: 'Eagle Acid Wash Tee',
    price: 400,
    description: 'Eagle print on acid-wash fabric.',
    images: ['/products/eagle-front.webp', '/products/eagle-back.webp'],
    categoryIds: ['printed', 'oversized'],
    sizes: ['M', 'L', 'XL', 'XXL'],
  },
  // Ex-Mix
  {
    id: 'ex-mix',
    name: 'Ex-Mix Tee',
    price: 300,
    description: 'Mixed graphic design tee.',
    images: ['/products/ex-mix-front.webp', '/products/ex-mix-back.webp'],
    categoryIds: ['printed', 'regular-fit'],
    sizes: ['M', 'L', 'XL', 'XXL'],
  },
  // Ferrari
  {
    id: 'ferrari-tee',
    name: 'Ferrari Tee',
    price: 300,
    description: 'Ferrari branded tee.',
    images: ['/products/ferrari-front.webp', '/products/ferrari-back.webp'],
    categoryIds: ['printed', 'regular-fit'],
    sizes: ['M', 'L', 'XL', 'XXL'],
  },
  // Iron Man
  {
    id: 'ironman',
    name: 'Iron Man Tee',
    price: 300,
    description: 'Iron Man graphic tee.',
    images: ['/products/ironman-front.webp', '/products/ironman-back.webp'],
    categoryIds: ['printed', 'oversized'],
    sizes: ['M', 'L', 'XL', 'XXL'],
  },
  // Naruto
  {
    id: 'naruto',
    name: 'Naruto Tee',
    price: 400,
    description: 'Naruto character print.',
    images: ['/products/naruto-front.webp', '/products/naruto-back.webp'],
    categoryIds: ['printed', 'oversized'],
    sizes: ['M', 'L', 'XL', 'XXL'],
  },
  // Porsche
  {
    id: 'porsche',
    name: 'Porsche Tee',
    price: 350,
    description: 'Porsche branded tee.',
    images: ['/products/porsche-front.webp', '/products/porsche-back.webp'],
    categoryIds: ['printed', 'regular-fit'],
    sizes: ['M', 'L', 'XL', 'XXL'],
  },
];
