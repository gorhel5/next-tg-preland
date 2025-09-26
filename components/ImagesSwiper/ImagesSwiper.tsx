// components/ImageSlider/ImageSlider.tsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import css from "./ImagesSwiper.module.css";
const slides = [
  {
    id: 1,
    image: "/xabar-logo.jpeg", // Замени на свои пути к фото
  },
  {
    id: 2,
    image: "/xabar-logo.jpeg", // Замени на свои пути к фото
  },
];

export default function ImageSlider() {
  return (
    <div className={css.sliderContainer}>
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{
          clickable: true,
          bulletClass: css.bullet,
          bulletActiveClass: css.bulletActive,
        }}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        loop={true}
        className={css.swiper}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className={css.slide}>
            <div className={css.imageContainer}>
              <Image
                src={slide.image}
                alt={"logo"}
                fill
                className={css.image}
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
