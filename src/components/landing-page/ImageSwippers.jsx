import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ImageSwippers = () => {
      const images = [
    { id: 1, src: "/images/bath-works.jpg" },
    { id: 2, src: "/images/benihana.jpg" },
    { id: 3, src: "/images/build-a-bear.jpg" },
    { id: 4, src: "/images/carhartt.jpg" },
    { id: 5, src: "/images/dartmouth.jpg" },
    { id: 6, src: "/images/drexel.jpg" },
    { id: 7, src: "/images/duck-unlimited.jpg" },
    { id: 8, src: "/images/gnc.jpg" },
    { id: 9, src: "/images/marine-corps.jpg" },
    { id: 10, src: "/images/nyu.jpg" },
    { id: 11, src: "/images/pngfind.com-usta-logo-png-5046022.png" },
    { id: 12, src: "/images/steelers.jpg" },
    { id: 13, src: "/images/tag-heuer.jpg" },
  ];

  return (
    <section className="py-12 px-4 bg-gray-200">
      <div className="bg-orange-500 text-white p-4 rounded-r-lg py-8 mb-6">
        <h2 className="text-3xl font-bold">Data Entry Service Examples</h2>
      </div>
      
      <Swiper
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        spaceBetween={30}
        slidesPerView={4}
        navigation
        loop={true}
        className="max-w-5xl mx-auto"
      >
        {images.map((image) => (
          <SwiperSlide key={image.id}>
            <div className="relative w-[150px] h-[150px]">
              <Image
                src={image.src}
                width={150}
                height={150}
                className="rounded-none"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default ImageSwippers;
