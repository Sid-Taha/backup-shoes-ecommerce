// src\components\Featured.tsx
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function FeaturedSection() {
  return (
    <section className="relative w-full max-w-[1344px] mx-auto px-4 md:px-12 lg:px-0 mb-[84px]">
      <h2 className="text-xl md:text-2xl font-medium text-neutral-900 mb-6">
        Featured
      </h2>
      <div className="relative w-full">
        {/* Hero Image Container */}
        <div className="relative w-full h-[400px] md:h-[600px] lg:h-[700px] mb-12">
          <Image
            src="/home/card4.png"
            alt="Runner on mountain trail"
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>
        
        {/* Content Overlay */}
        <div className="relative w-full max-w-4xl mx-auto text-center px-4">
          <h1 className="text-3xl md:text-5xl lg:text-[54px] font-medium leading-tight uppercase text-neutral-900 mb-6">
            Step into what feels good
          </h1>
          <p className="text-sm md:text-base lg:text-[15px] leading-relaxed text-neutral-900 mb-8 max-w-lg mx-auto">
            Cause everyone should know the feeling of running in that perfect pair.
          </p>
          <Link href="/products">
            <Button 
              className="rounded-full px-6 py-3 bg-neutral-900 hover:bg-neutral-800 text-white"
            >
              Find Your Shoe
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

