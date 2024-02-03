import type { User } from "@/interfaces/user"

export interface Order {
  roomId: string;
  checkInDate: Date | string;
  checkOutDate: Date | string;
  peopleNum: number;
  userInfo: User;
}

export interface Date {
  start: Date;
  end: Date;
}