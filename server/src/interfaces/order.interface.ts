export interface ICartItem {
  productId: string;
  quantity: number;
}

export interface IOrder {
  id: string;
  userId: string;
  items: ICartItem[];
  totalAmount: number;
  status: "Pending" | "Processing" | "Shipped" | "Delivered" | "Cancelled";
}