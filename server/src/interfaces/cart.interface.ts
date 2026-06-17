import type { Types } from "mongoose";

export interface ICartItem {
  productId: Types.ObjectId;
  quantity: number;
}

export interface ICart {
  id: string;
  userId: Types.ObjectId;
  items: ICartItem[];
  totalPrice: number;
}