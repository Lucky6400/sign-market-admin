export interface IProductData {
  richDescription?: string;
  image: string;
  images?: string[];
  brand?: string;
  price: number;
  rating: number;
  numReviews?: number;
  isFeatured?: boolean;
  name: string;
  slug?: string;
  category?: string;
  description: string;
  countInStock: number;
  id: string;
}
export interface IProductUploadResponse {
  status: number;
  message: string;
}

export interface IProductReducerState {
  isLoading: boolean;
  error: string;
  data: IProductData[];
  upload: {
    isUploading: boolean;
    error: string;
    data: IProductUploadResponse;
  };
}
