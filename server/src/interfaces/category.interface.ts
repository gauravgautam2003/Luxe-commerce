export interface ICategory {
  name: string;
  slug: string;
  description?: string;
  image?: string;
  parentCategory?: string;
  isActive: boolean;

  createdAt?: Date;
  updatedAt?: Date;
}