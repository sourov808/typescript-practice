export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;

  rating?: string;

  category?: string;

  availabilityStatus?: string;
  brand?: string;
  returnPolicy?: string;
  warrantyInformation?: string;
  weight?: string;
  shippingInformation?: string;
  reviews?: Review[];
  stock: number;
}

export interface Review {
  rating?: number;
  comment?: string;
  date?: string;
  reviewerName?: string;
  reviewerEmail?: string;
}

export interface ProductState {
  items: Product[];
  selectedProduct: Product | null;
  loading: boolean;
  error: string | null;
  currentPage: number;
  totalPages: number;
  limit: number;
}
