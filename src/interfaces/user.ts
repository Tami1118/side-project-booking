import type { Address } from "@/interfaces/country"

export interface User {
  name: string;
  phone: string;
  email: string;
  address: Address;
}
