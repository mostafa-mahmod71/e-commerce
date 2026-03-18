export interface Iproduct {
  _id: string;
  id: string;
  title: string;
  slug: string;
  description: string;
  price: number;
  quantity: number;
  sold: number;
  ratingsAverage: number;
  ratingsQuantity: number;
  imageCover: string;
  images: string[];
  brand: Brand;
  category: Category;
  subcategory: Subcategory[];
  createdAt: string;
  updatedAt: string;
}

export interface Brand {
  _id: string;
  name: string;
  slug: string;
  image: string;
}

export interface Category {
  _id: string;
  name: string;
  slug: string;
  image: string;
}

export interface Subcategory {
  _id: string;
  name?: string;
  slug?: string;
  category?: string;
}
