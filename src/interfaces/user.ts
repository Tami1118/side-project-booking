import type { Address } from "@/interfaces/country"

export interface User {
  address: Address;
  birthday: string | Date;
  createAt: string | Date;
  email: string;
  phone: string;
  name: string;
  updateAt: string | Date;
  id: string;
}

export interface TempUser {
  name: string;
  phone: string;
  email: string;
  address: Address;
}