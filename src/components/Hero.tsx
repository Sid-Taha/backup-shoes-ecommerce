"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import { getHeroImage } from "@/services/heroImageApi";
import { InteractiveHoverButton } from "./ui/interactive-hover-button";


function Hero() {
  const [heroImage, setHeroImage] = useState([]);

  useEffect(() => {
    const heroImage = async () => {
      const res = await getHeroImage();
      setHeroImage(res);
    };

    heroImage();
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto mb-[84px]">
      {/* Main Product Image Section */}
      <div className="w-full h-auto xsm:mb-0 mb-16 overflow-hidden relative">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: false }}
          autoplay={{ delay: 3000 }}
          className="w-full h-auto"
        >
          {heroImage.length > 0 ? (
            heroImage.map((image: string, index: number) => {
              return (
                <SwiperSlide key={index}>
                  <Image
                    src={image}
                    alt="Nike Air Max Pulse"
                    width={1280}
                    height={700}
                    className=" xsm:h-[250px] md:h-[700px]"
                    priority={true}
                    
                  />
                </SwiperSlide>
              );
            })
          ) : (
            <SwiperSlide>
              <Image
                src="/heroImage.webp"
                alt="Nike Air Max Pulse"
                width={1280}
                height={700}
                className=" xsm:h-[250px] md:h-[700px]"
                priority={true}
              />
            </SwiperSlide>
          )}
        </Swiper>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto text-center space-y-6 px-4 sm:px-6 lg:px-8">
        <span className="text-sm font-medium text-gray-900">First Look</span>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 uppercase">
          Nike Air Max Pulse
        </h1>

        <p className="text-base text-gray-600 max-w-xl mx-auto">
          Extreme comfort. Hyper durable. Max volume. Introducing the Air Max
          Pulse —designed to push you past your limits and help you go to the
          max.
        </p>

        {/* CTA Buttons */}
        <div className="flex items-center justify-center gap-3 pt-4">
          <Button
            variant="default"
            className="rounded-full px-6 py-2 text-sm sm:text-base"
          >
            Notify Me
          </Button>
          <InteractiveHoverButton>Shop Air Max</InteractiveHoverButton>
        </div>
      </div>
    </div>
  );
}

export default Hero;
