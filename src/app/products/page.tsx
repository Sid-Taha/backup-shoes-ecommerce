// src\app\products\page.tsx
"use client"
import FilterHeader from '@/components/FilterHeader'
import FilterSidebar from '@/components/FilterSidebar'
import ProductsCards from '@/components/ProductsCards'
import RelatedCategories from '@/components/RelatedCategories'
import React, { useState } from 'react'

function ProductPage() {

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [price, setPrice] = useState<number>(0)

  return (
    <div className='px-[48px] pt-[76px] mt-[99px]'>
      <FilterHeader setSelectedCategory={setSelectedCategory}/>
      <div className='flex gap-[48px]'>
        <FilterSidebar setPrice={setPrice}/>
        <div className='flex flex-col gap-[100px]'>
        <ProductsCards selectedCategory={selectedCategory} price={price}/>
          <RelatedCategories/>
        </div>
      </div>
    </div>
  )
}

export default ProductPage