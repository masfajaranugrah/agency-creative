import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import dayana from "public/images/dayana.png";

const HomeTestimonialThree = () => {
  return (
    <section className="section testimonial testimonial-three position-relative">
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
          <SwiperSlide>
            <div className="testimonial__text-slider-single">
              <h2 className="h1">
                <Link href="client-feedback">
                  client&apos;s
                  <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                </Link>
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial__text-slider-single">
              <h2 className="h1">
                <Link href="client-feedback">
                  client&apos;s
                  <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                </Link>
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial__text-slider-single">
              <h2 className="h1">
                <Link href="client-feedback">
                  client&apos;s
                  <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                </Link>
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial__text-slider-single">
              <h2 className="h1">
                <Link href="client-feedback">
                  client&apos;s
                  <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                </Link>
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial__text-slider-single">
              <h2 className="h1">
                <Link href="client-feedback">
                  client&apos;s
                  <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                </Link>
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial__text-slider-single">
              <h2 className="h1">
                <Link href="client-feedback">
                  client&apos;s
                  <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                </Link>
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial__text-slider-single">
              <h2 className="h1">
                <Link href="client-feedback">
                  client&apos;s
                  <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                </Link>
              </h2>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="container position-relative">
        <div className="row">
          <div className="col-12">
            <div className="testimonial-static">
              <Image src={dayana} alt="Dayana Studios" />
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

export default HomeTestimonialThree;
