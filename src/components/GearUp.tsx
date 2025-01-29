// // src\components\GearUp.tsx
// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import { ChevronLeft, ChevronRight } from 'lucide-react'
// import Image from 'next/image'
// import Link from "next/link"

// export default function GearUp() {

//   return (
//     <div className="container mx-auto px-4 mb-[84px]">
//       <h2 className="text-2xl font-medium mb-8">Gear Up</h2>
      
//       <div className="grid lg:grid-cols-2 gap-8">
//         {/* Men's Section */}
//         <div className="space-y-6">
//           <div className="flex items-center justify-end gap-2">
//             <span className="text-sm font-medium">Shop Men&apos;s</span>
//             <Button variant="ghost" size="icon" className="rounded-full bg-gray-100">
//               <ChevronLeft className="h-4 w-4" />
//             </Button>
//             <Button variant="ghost" size="icon" className="rounded-full bg-gray-200">
//               <ChevronRight className="h-4 w-4" />
//             </Button>
//           </div>
          
//           <div className="grid sm:grid-cols-2 gap-4">
//             <Link href={"/products"}>
//             <Card className="border-0 shadow-none">
//               <CardContent className="p-0">
//                 <div className="aspect-[3/4] bg-gray-100 relative">
//                   <Image
//                     src="/home/card5.png" 
//                     alt="Nike Dri-FIT ADV TechKnit Ultra"
//                     layout="fill"
//                     objectFit="cover"
//                   />
//                 </div>
//                 <div className="p-4 space-y-2">
//                   <div className="flex justify-between items-start">
//                     <h3 className="font-medium text-sm">Nike Dri-FIT ADV TechKnit Ultra</h3>
//                     <span className="text-sm font-medium">₹ 3,895</span>
//                   </div>
//                   <p className="text-gray-500 text-sm">Men&apos;s Short-Sleeve Running Top</p>
//                 </div>
//               </CardContent>
//             </Card>
//             </Link>

//             <Link href={"/products"}>
//             <Card className="border-0 shadow-none">
//               <CardContent className="p-0">
//                 <div className="aspect-[3/4] bg-gray-100 relative">
//                   <Image
//                     src="/home/card6.png" 
//                     alt="Nike Dri-FIT Challenger"
//                     layout="fill"
//                     objectFit="cover"
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 <div className="p-4 space-y-2">
//                   <div className="flex justify-between items-start">
//                     <h3 className="font-medium text-sm">Nike Dri-FIT Challenger</h3>
//                     <span className="text-sm font-medium">₹ 2,495</span>
//                   </div>
//                   <p className="text-gray-500 text-sm">Men&apos;s 18cm (approx.) 2-in-1 Versatile Shorts</p>
//                 </div>
//               </CardContent>
//             </Card>
//             </Link>

//           </div>
//         </div>

//         {/* Women&apos;s Section */}
//         <div className="space-y-6">
//           <div className="flex items-center justify-end gap-2">
//             <span className="text-sm font-medium">Shop Women&apos;s</span>
//             <Button variant="ghost" size="icon" className="rounded-full bg-gray-100">
//               <ChevronLeft className="h-4 w-4" />
//             </Button>
//             <Button variant="ghost" size="icon" className="rounded-full bg-gray-200">
//               <ChevronRight className="h-4 w-4" />
//             </Button>
//           </div>
          
//           <div className="grid sm:grid-cols-2 gap-4">
//             <Link href={"/products"}>
//             <Card className="border-0 shadow-none">
//               <CardContent className="p-0">
//                 <div className="aspect-[3/4] bg-gray-100 relative">
//                   <Image
//                     src="/home/card7.png" 
//                     alt="Nike Dri-FIT ADV Run Division"
//                     layout="fill"
//                     objectFit="cover"
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 <div className="p-4 space-y-2">
//                   <div className="flex justify-between items-start">
//                     <h3 className="font-medium text-sm">Nike Dri-FIT ADV Run Division</h3>
//                     <span className="text-sm font-medium">₹ 5,295</span>
//                   </div>
//                   <p className="text-gray-500 text-sm">Women&apos;s Long-Sleeve Running Top</p>
//                 </div>
//               </CardContent>
//             </Card>
//             </Link>

//             <Link href={"/products"}>
//             <Card className="border-0 shadow-none">
//               <CardContent className="p-0">
//                 <div className="aspect-[3/4] bg-gray-100 relative">
//                   <Image
//                     src="/home/card8.png" 
//                     alt="Nike Fast"
//                     layout="fill"
//                     objectFit="cover"
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 <div className="p-4 space-y-2">
//                   <div className="flex justify-between items-start">
//                     <h3 className="font-medium text-sm">Nike Fast</h3>
//                     <span className="text-sm font-medium">₹ 3,795</span>
//                   </div>
//                   <p className="text-gray-500 text-sm">Women&apos;s Mid-Rise 7/8 Running Leggings with Pockets</p>
//                 </div>
//               </CardContent>
//             </Card>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }




















"use client"

import React, { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { CarouselApi } from "@/components/ui/carousel"
import { getGearUpData, IGearUP } from "@/services/heroImageApi"

export default function GearUp() {
  const [menApi, setMenApi] = React.useState<CarouselApi>()
  const [womenApi, setWomenApi] = React.useState<CarouselApi>()

  const [menData, setMenData] = useState<IGearUP[]>([]) 
  const [womenData, setWomenData] = useState<IGearUP[]>([]) 

  const products = {
    men: [
      {
        name: "Nike Dri-FIT ADV TechKnit Ultra",
        price: "₹ 3,895",
        description: "Men's Short-Sleeve Running Top",
        image: "/home/card5.png",
      },
      {
        name: "Nike Dri-FIT Challenger",
        price: "₹ 2,495",
        description: "Men's 18cm (approx.) 2-in-1 Versatile Shorts",
        image: "/home/card6.png",
      },
      {
        name: "Nike Dri-FIT ADV TechKnit Ultra",
        price: "₹ 3,895",
        description: "Men's Short-Sleeve Running Top",
        image: "/home/card5.png",
      },
      {
        name: "Nike Dri-FIT Challenger",
        price: "₹ 2,495",
        description: "Men's 18cm (approx.) 2-in-1 Versatile Shorts",
        image: "/home/card6.png",
      }
    ],
    women: [
      {
        name: "Nike Dri-FIT ADV Run Division",
        price: "₹ 5,295",
        description: "Women's Long-Sleeve Running Top",
        image: "/home/card7.png",
      },
      {
        name: "Nike Fast",
        price: "₹ 3,795",
        description: "Women's Mid-Rise 7/8 Running Leggings with Pockets",
        image: "/home/card8.png",
      },
      {
        name: "Nike Dri-FIT ADV Run Division",
        price: "₹ 5,295",
        description: "Women's Long-Sleeve Running Top",
        image: "/home/card7.png",
      },
      {
        name: "Nike Fast",
        price: "₹ 3,795",
        description: "Women's Mid-Rise 7/8 Running Leggings with Pockets",
        image: "/home/card8.png",
      }
    ],
  }


  useEffect(()=>{
    async function getData(){
      const res: IGearUP[] = await getGearUpData()
      setMenData(res.filter((item)=> (item.category == "Men's Shorts")))
      setWomenData(res.filter((item)=> (item.category == "Women's Shorts")))
     
    }

    getData()
  },[])

  return (
    <div className="container mx-auto px-4 mb-[84px]">
      <h2 className="text-2xl font-medium mb-8">Gear Up</h2>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Men's Section */}
        <div className="space-y-6">
          <div className="flex items-center justify-end gap-2">
            <span className="text-sm font-medium">Shop Men&apos;s</span>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-gray-100"
              onClick={() => menApi?.scrollPrev()}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-gray-200"
              onClick={() => menApi?.scrollNext()}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          <Carousel setApi={setMenApi}>
            <CarouselContent>
              {menData.map((product, index) => (
                <CarouselItem key={index} className="sm:basis-1/2">
                  <Link href={`/products/ProductDetail?image=${product.image}&colors=${product.colors}&productName=${product.productName}&_id=${product._id}&category=${product.category}&description=${product.description}&inventory=${product.inventory}&price=${product.price}`}>
                    <Card className="border-0 shadow-none">
                      <CardContent className="p-0">
                        <div className="aspect-[3/4] bg-gray-100 relative">
                          <Image
                            src={product.image || "/placeholder.svg"}
                            alt={product.productName}
                            layout="fill"
                            objectFit="cover"
                          />
                        </div>
                        <div className="p-4 space-y-2">
                          <div className="flex justify-between items-start">
                            <h3 className="font-medium text-sm">{product.productName}</h3>
                            <span className="text-sm font-medium">{product.price}</span>
                          </div>
                          <p className="text-gray-500 text-sm">{(product.description).slice(0, 40)}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Women's Section */}
        <div className="space-y-6">
          <div className="flex items-center justify-end gap-2">
            <span className="text-sm font-medium">Shop Women&apos;s</span>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-gray-100"
              onClick={() => womenApi?.scrollPrev()}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-gray-200"
              onClick={() => womenApi?.scrollNext()}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          <Carousel setApi={setWomenApi}>
            <CarouselContent>
              {womenData.map((product, index) => (
                <CarouselItem key={index} className="sm:basis-1/2">
                  <Link href={`/products/ProductDetail?image=${product.image}&colors=${product.colors}&productName=${product.productName}&_id=${product._id}&category=${product.category}&description=${product.description}&inventory=${product.inventory}&price=${product.price}`}>
                    <Card className="border-0 shadow-none">
                      <CardContent className="p-0">
                        <div className="aspect-[3/4] bg-gray-100 relative">
                          <Image
                            src={product.image || "/placeholder.svg"}
                            alt={product.productName}
                            layout="fill"
                            objectFit="cover"
                          />
                        </div>
                        <div className="p-4 space-y-2">
                          <div className="flex justify-between items-start">
                            <h3 className="font-medium text-sm">{product.productName}</h3>
                            <span className="text-sm font-medium">{product.price}</span>
                          </div>
                          <p className="text-gray-500 text-sm">{(product.description).slice(0, 38)}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  )
}

