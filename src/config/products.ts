import type { Product } from '@/types/catalogue';

// Replace images with your own hosted URLs (or files in /public). The first image is the card photo.
export const PRODUCTS: Product[] = [
  {
    id: 'ivory-oversized-tee',
    name: 'Ivory Oversized Tee',
    price: 499,
    description:
      'A heavyweight cotton tee with a relaxed drop-shoulder fit. Soft hand-feel and a clean ivory finish for effortless festive layering.',
    images: [
      'https://images.pexels.com/photos/39820148/pexels-photo-39820148.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/17459718/pexels-photo-17459718.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    categoryIds: ['oversized'],
    sizes: ['M', 'L', 'XL', 'XXL'],
  },
  {
    id: 'sunset-oversized-graphic',
    name: 'Sunset Oversized Graphic',
    price: 549,
    description:
      'Oversized fit with a bold sunset-toned graphic across the chest. Pairs well with denims and sneakers for evening gatherings.',
    images: [
      'https://images.pexels.com/photos/39820147/pexels-photo-39820147.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/20736690/pexels-photo-20736690.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    categoryIds: ['oversized', 'printed'],
    sizes: ['M', 'L', 'XL', 'XXL'],
  },
  {
    id: 'abstract-print-oversized',
    name: 'Abstract Print Oversized',
    price: 599,
    description:
      'An artistic abstract print on a roomy oversized cut. Designed to stand out in every photo from the festival season.',
    images: [
      'https://images.pexels.com/photos/36942017/pexels-photo-36942017.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/36942018/pexels-photo-36942018.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    categoryIds: ['oversized', 'printed'],
    sizes: ['M', 'L', 'XL', 'XXL'],
  },
  {
    id: 'weekend-script-print',
    name: 'Weekend Script Print Tee',
    price: 399,
    description:
      'Regular fit tee with a playful script print. Lightweight cotton that keeps you comfortable through long celebrations.',
    images: [
      'https://images.pexels.com/photos/37011552/pexels-photo-37011552.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/37026122/pexels-photo-37026122.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    categoryIds: ['printed', 'regular-fit'],
    sizes: ['M', 'L', 'XL', 'XXL'],
  },
  {
    id: 'classic-regular-fit-tee',
    name: 'Classic Regular Fit Tee',
    price: 349,
    description:
      'A timeless crew-neck tee in a tailored regular fit. Breathable cotton that works for every day of the festive season.',
    images: [
      'https://images.pexels.com/photos/37704838/pexels-photo-37704838.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/34156905/pexels-photo-34156905.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    categoryIds: ['regular-fit'],
    sizes: ['M', 'L', 'XL'],
  },
  {
    id: 'everyday-cotton-regular-tee',
    name: 'Everyday Cotton Regular Tee',
    price: 379,
    description:
      'Soft, pre-washed cotton in a regular fit with a softened collar. A dependable everyday essential in a range of festive shades.',
    images: [
      'https://images.pexels.com/photos/34156907/pexels-photo-34156907.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/5648268/pexels-photo-5648268.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    categoryIds: ['regular-fit'],
    sizes: ['M', 'L', 'XL', 'XXL'],
  },
  {
    id: 'navy-polo-collar',
    name: 'Navy Polo Collar Tee',
    price: 200,
    description:
      'A refined navy polo with a structured collar and two-button placket. Smart enough for dinners and relaxed enough for the day.',
    images: [
      'https://images.pexels.com/photos/17987935/pexels-photo-17987935.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/9301162/pexels-photo-9301162.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    categoryIds: ['collar', 'regular-fit'],
    sizes: ['M', 'L', 'XL', 'XXL'],
  },
  {
    id: 'sand-collar-tee',
    name: 'Sand Collar Tee',
    price: 200,
    description:
      'A warm sand-toned polo with a crisp collar and breathable piqué knit. A versatile piece for festive gatherings.',
    images: [
      'https://images.pexels.com/photos/17898548/pexels-photo-17898548.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/17898556/pexels-photo-17898556.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    categoryIds: ['collar'],
    sizes: ['M', 'L', 'XL', 'XXL'],
  },
  {
    id: 'festive-saffron-collar-print',
    name: 'Festive Saffron Collar Print',
    price: 200,
    description:
      'A saffron polo with a subtle festive print along the placket. Brings a touch of color to your Diwali look.',
    images: [
      'https://images.pexels.com/photos/9301162/pexels-photo-9301162.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/17987935/pexels-photo-17987935.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    categoryIds: ['collar', 'printed'],
    sizes: ['M', 'L', 'XL', 'XXL'],
  },
];
