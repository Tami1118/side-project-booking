import type { User } from "@/interfaces/user"

export interface Order {
  roomId: string;
  checkInDate: string;
  checkOutDate: string;
  peopleNum: number;
  userInfo: User;
}

export interface Date {
  start: string | Date;
  end: string | Date;
}