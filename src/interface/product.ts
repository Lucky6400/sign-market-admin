export interface IProductPayloadData {
  name: string;
  price: number;
  countInStock: number;
  brand: string;
  description: string;
  image: File | null;
}
