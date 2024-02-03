export interface CityData{
  cities: City[]
}

export interface District {
  zip: string,
  name: string
}

export interface City {
  district: District[],
  name: string
}

export interface AddressData {
  city: string,
  zipcode: number,
  detail: string
}