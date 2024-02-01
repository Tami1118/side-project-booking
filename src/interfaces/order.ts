export interface Order {
  roomId: string;
  checkInDate: string;
  checkOutDate: string;
  peopleNum: number;
  userInfo: {
    address: {
      zipcode: number;
      detail: string;
    },
    name: string;
    phone: string;
    email: string;
  }
}

export interface Date {
  start: Date;
  end: Date;
}