export interface Address {
  zipcode: number,
  detail: string,
}

export interface CityData{
  cities: City[]
}

export interface District {
  zip: number | string,
  name: string
}

export interface City {
  district: District[],
  name: string
}