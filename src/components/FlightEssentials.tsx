// src\components\FlightEssentials.tsx
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function FlightEssentials() {
  return (
    <section className="relative w-full max-w-[1344px] mx-auto px-4  md:px-12 lg:px-0 mb-[84px]">
      <h2 className="text-xl md:text-2xl font-medium text-[#111111] font-helvetica mb-8">
        Do not Miss
      </h2>
      <div className="relative w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 mb-12">
          <div className="relative w-full h-[500px] lg:h-[700px]">
            <Image
              src="/home/card901.png"
              alt="Jordan Brand Spring Collection"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative w-full  lg:h-[700px] lg:pl-6 bg-[#ececec]">
            <div className="absolute top-0 right-0 p-4 flex justify-between w-full">
              <div className="space-y-1">
                <span className="text-sm font-medium">JORDAN</span>
                <p className="text-sm">BRAND</p>
              </div>
              <span className="text-sm font-medium">SPRING</span>
              <p className="text-sm">2023</p>
            </div>
            
            <div className="w-full h-full flex justify-center items-center pt-[20px]">
              <div className="relative w-[300px] h-[300px] mt-16">
                <Image
                  src="/home/card902.png"
                  alt="Jordan Brand Detail Shot"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-[52px] font-medium uppercase tracking-wide text-[#111111] font-helvetica">
            Flight Essentials
          </h1>
          <p className="text-sm md:text-base text-[#111111] font-abeezee max-w-[578px] mx-auto">
            Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.
          </p>
          <Link href={"/products"}>
            <Button
              className="rounded-full bg-[#111111] text-white hover:bg-[#222222] px-6"
            >
              Shop
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

