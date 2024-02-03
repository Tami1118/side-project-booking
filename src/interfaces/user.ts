import type { Address } from "@/interfaces/Address"

export interface User {
  name: string;
  phone: string;
  email: string;
  address: Address;
}
