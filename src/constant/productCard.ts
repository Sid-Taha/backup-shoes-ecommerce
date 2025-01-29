// src\constant\productCard.ts
export interface Product {
  id: number
  name: string
  category: string
  price: number
  image: string
}

export const products: Product[] = [
  {
    id: 1,
    name: "Nike Air Max Pulse",
    category: "Women's Shoes",
    price: 13995,
    image: "/home/card1.png",
  },
  {
    id: 2,
    name: "Nike Air Max Pulse",
    category: "Men's Shoes",
    price: 13995,
    image: "/home/card2.png",
  },
  {
    id: 3,
    name: "Nike Air Max 97 SE",
    category: "Men's Shoes",
    price: 16995,
    image: "/home/card3.png",
  },
  {
    id: 4,
    name: "Nike Air Max SYSTM",
    category: "Women's Shoes",
    price: 13995,
    image: "/home/card1.png",
  },
]