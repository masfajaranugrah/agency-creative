import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { InfiniteSlider } from "@/components/ui/infinite-slider";

const rowOne = [
  { src: "/dayana/Asset 144542212.png", alt: "Client Logo" },
  { src: "/dayana/Asset 294542212.png", alt: "Client Logo" },
  { src: "/dayana/Asset 164542212.png", alt: "Client Logo" },
  { src: "/dayana/Asset 154542212.png", alt: "Client Logo" },
  { src: "/dayana/Asset 404542212.png", alt: "Client Logo" },
  { src: "/dayana/Asset 204542212.png", alt: "Client Logo" },
  { src: "/dayana/Asset 364542212.png", alt: "Client Logo" },
  { src: "/dayana/Asset 24542212.png", alt: "Client Logo" },
];

const rowTwo = [
  { src: "/dayana/Asset 324542212.png", alt: "Client Logo" },
  { src: "/dayana/Asset 494542212.png", alt: "Client Logo" },
  { src: "/dayana/Asset 74542212.png", alt: "Client Logo" },
  { src: "/dayana/Asset 174542212.png", alt: "Client Logo" },
  { src: "/dayana/Asset 234542212.png", alt: "Client Logo" },
  { src: "/dayana/Asset 454542212.png", alt: "Client Logo" },
  { src: "/dayana/Asset 104542212.png", alt: "Client Logo" },
  { src: "/dayana/Asset 124542212.png", alt: "Client Logo" },
];

const rowThree = [
  { src: "/dayana/Asset 484542212.png", alt: "Client Logo" },
  { src: "/dayana/Asset 394542212.png", alt: "Client Logo" },
  { src: "/dayana/Asset 194542212.png", alt: "Client Logo" },
  { src: "/dayana/Asset 304542212.png", alt: "Client Logo" },
  { src: "/dayana/Asset 444542212.png", alt: "Client Logo" },
  { src: "/dayana/Asset 224542212.png", alt: "Client Logo" },
  { src: "/dayana/Asset 264542212.png", alt: "Client Logo" },
  { src: "/dayana/Asset 424542212.png", alt: "Client Logo" },
];

type LogoRowProps = {
  logos: { src: string; alt: string }[];
  reverse?: boolean;
  speed?: number;
};

const LogoRow = ({ logos, reverse = false, speed = 15 }: LogoRowProps) => {
  return (
    <div className="testimonial-logo-marquee__row">
      <InfiniteSlider gap={48} reverse={reverse} speed={speed}>
        {logos.map((logo) => (
          <img
            key={logo.src}
            src={logo.src}
            alt={logo.alt}
            className="testimonial-logo-marquee__logo"
            loading="lazy"
          />
        ))}
      </InfiniteSlider>
    </div>
  );
};

const HomeTestimonial = () => {
  return (
    <section className="section testimonial pt-0 position-relative">
      <div className="testimonial__text-slider-w">
        <Swiper
          slidesPerView="auto"
          spaceBetween={40}
          speed={5000}
          loop={true}
          centeredSlides={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            reverseDirection: false,
          }}
          className="testimonial__text-slider"
        >
          {Array.from({ length: 7 }).map((_, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial__text-slider-single">
                <h2 className="h1">
                  <Link href="client-feedback">
                    client&apos;s
                    <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                  </Link>
                </h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="container position-relative">
        <div className="row">
          <div className="col-12">
            <div className="testimonial-logo-marquee">
              <LogoRow logos={rowOne} reverse speed={15} />
              <LogoRow logos={rowTwo} speed={15} />
              <LogoRow logos={rowThree} reverse speed={15} />
            </div>
          </div>
        </div>
      </div>
      <div className="lines d-none d-lg-flex">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </section>
  );
};

export default HomeTestimonial;
