export interface getAllData {
  products: Product[]
  total: number
  skip: number
  limit: number
  info: Info
}

export interface Info {
  count: number
  pages: number
  next: string
  prev: null
}

export interface Product {
  id: number
  title: string
  description: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  brand: string
  category: string
  thumbnail: string
  images: string[]
  quantity?: number
}
