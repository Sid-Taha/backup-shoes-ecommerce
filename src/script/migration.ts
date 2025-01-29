// src\script\migration.mjs
"use server";

import { client } from "@/sanity/lib/client";

async function uploadImageToSanity(imageUrl: string) {
  try {
    const response = await fetch(imageUrl);
    if (!response.ok) throw new Error(`Failed to fetch image: ${response.statusText}`);
    const blob = await response.blob();

    const asset = await client.assets.upload("image", blob);
 
    return asset;
  } catch (error) {
    console.error("Image upload failed:", error);
    throw error;
  }
}

interface Product {
  productName: string;
  category: string;
  price: number;
  inventory: number;
  colors: string[];
  status: string;
  image: string;
  description: string;
}


export async function fetchData() {
  try {
    const response = await fetch("https://template-03-api.vercel.app/api/products");
    if (!response.ok) throw new Error(`Failed to fetch products: ${response.statusText}`);
    const products = await response.json();
    const data = await products.data

    // Upload images concurrently
    const uploadPromises = data.map(async (product: Product) => {
      const imageAsset = await uploadImageToSanity(product.image);

      

      const sanityProduct = {

        _type: 'product',
        productName: product.productName,
        category: product.category,
        price: product.price,
        inventory: product.inventory,
        colors: product.colors || [], // Optional, as per your schema
        status: product.status,
        description: product.description,
        image: {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: imageAsset._id,
          },
        }
      };

      
      await client.create(sanityProduct);
    });

    await Promise.all(uploadPromises);
  } catch (error) {
    console.error("Data fetching failed:", error);
    throw error;
  }
}