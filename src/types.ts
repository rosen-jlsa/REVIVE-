export interface Variant {
  id: string;
  name: string;
  sku: string;
  price: number;
  compareAtPrice?: number;
  badge?: string;
}

export interface PurchaseOption {
  type: 'one-time' | 'subscription';
  price: number;
  discountPercentage?: number;
  intervals?: string[];
  selectedInterval?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  verified: boolean;
  title: string;
  body: string;
  skinType?: string;
  ageRange?: string;
}

export interface ProductDetails {
  brand: string;
  title: string;
  subtitle: string;
  volume: string;
  formulation: string;
  rating: number;
  reviewCount: number;
  oneTimePrice: number;
  subscriptionPrice: number;
  description: string;
  bullets: string[];
}
