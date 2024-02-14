export interface Room {
  amenityInfo: ProvideInfo[];
  areaInfo: string;
  bedInfo: string;
  createdAt: string | Date;
  description: string;
  facilityInfo: ProvideInfo[];
  imageUrl: string;
  imageUrlList: string[];
  maxPeople: number;
  name: string;
  price: number;
  status: number;
  updatedAt: string | Date;
  _id: string;
}

interface ProvideInfo {
  title: string;
  isProvide: boolean;
}