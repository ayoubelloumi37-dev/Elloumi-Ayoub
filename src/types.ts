export type PageId = 'home' | 'about' | 'services' | 'contact';

export interface Category {
  id: string;
  name: string;
  shortDesc: string;
  iconName: string;
  badge?: string;
  itemCount: string;
}

export interface ProductItem {
  id: string;
  name: string;
  category: string;
  description: string;
  priceEstimate?: string;
  origin: string;
  packaging: string;
  image: string;
  isPopular?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  points: string[];
  icon: string;
}

export interface ContactFormData {
  fullName: string;
  phone: string;
  email: string;
  categoryInterest: string;
  message: string;
}
