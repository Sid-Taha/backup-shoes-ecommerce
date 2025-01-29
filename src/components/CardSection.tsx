"use client"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState, useCallback } from "react"
import { type BestSellingProduct, getBestSellingData } from "@/services/heroImageApi"

export default function ProductShowcase() {
  const [res, setRes] = useState<BestSellingProduct[]>([])
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getBestSellingData()
        setRes(data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  const scrollPrev = useCallback(() => {
    api?.scrollPrev()
  }, [api])

  const scrollNext = useCallback(() => {
    api?.scrollNext()
  }, [api])

  return (
    <div className="w-full bg-white px-4 py-8 md:px-6 lg:px-8 mb-[84px]">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-medium text-gray-900">Best of Air Max</h2>
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium">Shop</span>

          {/* Left Chevron */}
          <button
            onClick={scrollPrev}
            className="flex items-center justify-center w-[48px] h-[48px] rounded-full bg-[#E5E5E5] hover:bg-[#D5D5D5] transition-colors"
            aria-label="Previous items"
          >
            <ChevronLeft size={24} className="text-gray-900" />
          </button>

          {/* Right Chevron */}
          <button
            onClick={scrollNext}
            className="flex items-center justify-center w-[48px] h-[48px] rounded-full bg-[#E5E5E5] hover:bg-[#D5D5D5] transition-colors"
            aria-label="Next items"
          >
            <ChevronRight size={24} className="text-gray-900" />
          </button>
        </div>
      </div>


        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
          setApi={setApi}>
          <CarouselContent className="-ml-2 md:-ml-4">
            {res.map((product, index: number) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">

         
                <Link href={`/products/ProductDetail?image=${product.image}&colors=${product.colors}&productName=${product.productName}&_id=${product._id}&category=${product.category}&description=${product.description}&inventory=${product.inventory}&price=${product.price}`}>
                  <div className="group relative flex flex-col rounded-xl overflow-hidden shadow-md hover:shadow-lg">
                    <div className="aspect-square overflow-hidden rounded-lg bg-gray-100 relative">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.productName}
                        fill
                        className="h-full w-full object-contain object-center"
                      />
                    </div>
                    <div className="mt-4 px-1 flex items-start justify-between">
                      <div>
                        <h3 className="text-[16px] font-medium text-gray-900">{product.productName}</h3>
                        <p className="mt-1 text-[16px] text-gray-500">{product.category}</p>
                      </div>
                      <p className="text-[16px] font-medium text-gray-900">₹{product.price.toLocaleString()}</p>
                    </div>
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden" />
          <CarouselNext className="hidden" />
        </Carousel>
    </div>
  )
}



