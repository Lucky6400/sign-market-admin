export interface IProduct {
  richDescription?: string;
  image?: string;
  images?: string[];
  brand: string;
  price: number;
  rating: number;
  numReviews?: number;
  isFeatured: boolean;
  name: string;
  slug?: string;
  category?: string;
  description: string;
  countInStock: number;
  id: string;
}
