export interface HeaderProps {
  name: string;
  email: string;
  password: string;
  role: "user" | "admin" | "root";
  _id: string;
  createdAt: Date;
  updatedAt: Date;
}
