export interface Room {
  name: string;
  description: string;
  imageUrl: string;
  imageUrlList: string[];
  areaInfo: string;
  bedInfo: string;
  maxPeople: number;
  price: number;
  status: 1;
  facilityInfo: ProvideInfo[];
  amenityInfo: ProvideInfo[];
  _id: string;
  createdAt: Date;
  updatedAt: Date;
}

interface ProvideInfo {
  title: string;
  isProvide: boolean;
}