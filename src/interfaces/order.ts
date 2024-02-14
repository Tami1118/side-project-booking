import type { Room } from "@/interfaces/room"
import type { TempUser } from "@/interfaces/user"

export interface Order {
  checkInDate: string | Date;
  checkOutDate: string | Date;
  createdAt: string | Date;
  orderUserId: string;
  peopleNum: number;
  roomId: Room;
  status: number;
  updateAt: string | Date;
  userInfo: TempUser;
  _id: string,
}

export interface TempOrder {
  checkInDate: string | Date;
  checkOutDate: string | Date;
  peopleNum: number;
  roomId: string;
  userInfo: TempUser;
}

export interface CheckDate {
  start: string
  end: string;
}