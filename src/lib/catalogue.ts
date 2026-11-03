import type { Category, Product } from '@/types/catalogue';

export interface CatalogueFilter {
  query: string;
  categoryId: string | null;
}

export function filterProducts(
  products: Product[],
  categories: Category[],
  { query, categoryId }: CatalogueFilter,
): Product[] {
  const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean);

  return products.filter((product) => {
    if (categoryId && !product.categoryIds.includes(categoryId)) return false;
    if (terms.length === 0) return true;

    const haystack = [
      product.name,
      product.description,
      ...product.categoryIds.map(
        (id) => categories.find((category) => category.id === id)?.label ?? id,
      ),
    ]
      .join(' ')
      .toLowerCase();

    return terms.every((term) => haystack.includes(term));
  });
}
