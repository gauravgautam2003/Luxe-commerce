export interface IPayment {
  id: string;
  orderId: string;
  amount: number;
  method: "UPI" | "CARD" | "COD";
  status: "Pending" | "Success" | "Failed";
}