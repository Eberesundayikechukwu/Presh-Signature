export type Page = 'home' | 'about' | 'menu' | 'contact';

export interface ProductCategory {
  id: string;
  name: string;
  shortDescription: string;
  items: string[];
  imageUrl: string;
  imageAlt: string;
}

export interface BrandPillar {
  title: string;
  description: string;
}
