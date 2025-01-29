"use server"

import { client } from "@/sanity/lib/client"


export async function getHeroImage() {
  const res = await client.fetch(`*[_type == "heroSection"].image.asset->url`)

  return res
}

export interface BestSellingProduct {
  productName: string;
  category: string;
  price: number;
  image: string;
  colors: string[];
  _id: string;
  description: string;
  inventory: number
}

export async function getBestSellingData() {
  const res = await client.fetch(`*[_type == 'product' && status == 'Best Seller']{
  productName,
  category,
  price,
  'image': image.asset->url,
  colors,
  _id,
  description,
  inventory
}`)

  return res
}




export interface IGearUP {
  productName : string
  price: number
  description: string
  inventory: number
  colors: string
  category: string
  status: string
  image: string
  _id: string
}

export async function getGearUpData(){
  const res = await client.fetch(`*[_type == 'product' && status == 'Gear Up']{productName,
  price,
  description,
  inventory,
  'colors': colors[0],
  category,
  status,
  'image': image.asset->url,
  _id
}`)
    
  return res
}




