// API
export interface Address {
  zipcode: number | string,
  detail: string,
}

// JSON 檔
export interface City {
  districts: District[],
  name: string
}

export interface District {
  zip: number | string,
  name: string
}