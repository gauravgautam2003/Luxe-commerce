export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  phone: string;
  role: "USER" | "ADMIN";
  isVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
}