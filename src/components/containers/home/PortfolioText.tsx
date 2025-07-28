import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import one from "public/images/portfolio/one.png";
import two from "public/images/portfolio/two.png";
import three from "public/images/portfolio/three.png";
import four from "public/images/portfolio/four.png";
import five from "public/images/portfolio/five.png";
import six from "public/images/portfolio/six.png";
import seven from "public/images/portfolio/seven.png";
import dot from "public/images/portfolio/dot.png";

const PortfolioText = () => {
  const [hover, setHover] = useState(0);
  return (
    <section className="section portfolio pb-0 fade-wrapper position-relative">
      <div className="portfolio__text-slider-w">
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
          className="portfolio__text-slider"
        >
          <SwiperSlide>
            <div className="portfolio__text-slider-single">
              <h1 className="h1">
                <Link href="/portfolio">
                  digital portfolio
    className="arr" aria-label="Lihat seluruh proyek"               <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                </Link>
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="portfolio__text-slider-single">
              <h1 className="h1 str">
                <Link href="/portfolio">
                  digital portfolio
    className="arr" aria-label="Lihat seluruh proyek"               <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                </Link>
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="portfolio__text-slider-single">
              <h1 className="h1">
                <Link href="/portfolio">
                  digital portfolio
    className="arr" aria-label="Lihat seluruh proyek"               <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                </Link>
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="portfolio__text-slider-single">
              <h1 className="h1 str">
                <Link href="/portfolio">
                  digital portfolio
    className="arr" aria-label="Lihat seluruh proyek"               <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                </Link>
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="portfolio__text-slider-single">
              <h1 className="h1">
                <Link href="/portfolio">
                  digital portfolio
    className="arr" aria-label="Lihat seluruh proyek"               <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                </Link>
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="portfolio__text-slider-single">
              <h1 className="h1 str">
                <Link href="/portfolio">
                  digital portfolio
    className="arr" aria-label="Lihat seluruh proyek"               <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                </Link>
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="portfolio__text-slider-single">
              <h1 className="h1">
                <Link href="/portfolio">
                  digital portfolio
    className="arr" aria-label="Lihat seluruh proyek"               <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                </Link>
              </h1>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="container-fluid">
        <div className="row gaper">
          <div className="col-12 col-sm-6 col-xl-3">
            <div
              className={
                "portfolio__single topy-tilt fade-top" +
                (hover === 0 ? " portfolio__single-active" : "")
              }
              onMouseEnter={() => setHover(0)}
            >
               <Link href="/portfolio" aria-label="Buka detail portofolio Digital Marketing">
                <Image src={one} alt="Ilustrasi Digital Marketing" />
              </Link>

              <div className="portfolio__single-content">
                {/* Ikon sebagai link dengan label aksesibel */}
                <Link href="/portfolio" className="arr"  aria-label="Lihat detail Digital Marketing">
                  <i className="fa-sharp fa-solid fa-arrow-up-right" aria-hidden="true" ></i>
                </Link>

                {/* Judul sebagai link */}
                <h2>
                  <Link href="/portfolio">Digital Marketing</Link>
                </h2>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-xl-3">
            <div
              className={
                "portfolio__single topy-tilt fade-top" +
                (hover === 1 ? " portfolio__single-active" : " ")
              }
              onMouseEnter={() => setHover(1)}
            >
              <Link href="/portfolio">
                <Image src={two} alt="Preview desain Digital Marketing 1" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="/portfolio" className="arr" aria-label="Lihat seluruh proyek">
                  <i className="fa-sharp fa-solid fa-arrow-up-right" aria-hidden="true"></i>
                </Link>
                <h2>
                  <Link href="/portfolio">Digital Marketing</Link>
                </h2>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-3">
            <div
              className={
                "portfolio__single topy-tilt fade-top" +
                (hover === 2 ? " portfolio__single-active" : " ")
              }
              onMouseEnter={() => setHover(2)}
            >
              <Link href="/portfolio">
                <Image src={three} alt="Preview desain Digital Marketing 1" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="/portfolio" className="arr" aria-label="Lihat seluruh proyek">
                  <i className="fa-sharp fa-solid fa-arrow-up-right" aria-hidden="true"></i>
                </Link>
                <h2>
                  <Link href="/portfolio">Digital Marketing</Link>
                </h2>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-3">
            <div
              className={
                "portfolio__single topy-tilt fade-top" +
                (hover === 3 ? " portfolio__single-active" : " ")
              }
              onMouseEnter={() => setHover(3)}
            >
              <Link href="/portfolio">
                <Image src={four} alt="Preview desain Digital Marketing 1" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="/portfolio" className="arr" aria-label="Lihat seluruh proyek">
                  <i className="fa-sharp fa-solid fa-arrow-up-right" aria-hidden="true"></i>
                </Link>
                <h2>
                  <Link href="/portfolio">Digital Marketing</Link>
                </h2>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-3">
            <div
              className={
                "portfolio__single topy-tilt fade-top" +
                (hover === 4 ? " portfolio__single-active" : " ")
              }
              onMouseEnter={() => setHover(4)}
            >
              <Link href="/portfolio">
                <Image src={five} alt="Preview desain Digital Marketing 1" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="/portfolio" className="arr" aria-label="Lihat seluruh proyek">
                  <i className="fa-sharp fa-solid fa-arrow-up-right" aria-hidden="true"></i>
                </Link>
                <h2>
                  <Link href="/portfolio">Digital Marketing</Link>
                </h2>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-3">
            <div
              className={
                "portfolio__single topy-tilt fade-top" +
                (hover === 5 ? " portfolio__single-active" : " ")
              }
              onMouseEnter={() => setHover(5)}
            >
              <Link href="/portfolio">
                <Image src={six} alt="Preview desain Digital Marketing 1" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="/portfolio" className="arr" aria-label="Lihat seluruh proyek">
                  <i className="fa-sharp fa-solid fa-arrow-up-right" aria-hidden="true"></i>
                </Link>
                <h2>
                  <Link href="/portfolio">Digital Marketing</Link>
                </h2>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-3">
            <div className="portfolio__single-alt-wrapper fade-top">
              <div className="portfolio__single-alt topy-tilt">
                <h2>
                  <Link href="/portfolio">view all work</Link>
                </h2>
                <Link href="/portfolio" className="arr" aria-label="Lihat seluruh proyek"  >
                  <i className="fa-sharp fa-solid fa-arrow-up-right" aria-hidden="true"></i>
                </Link>
                <Image src={dot} alt="Image" className="dot-one" />
                <Image src={dot} alt="Image" className="dot-two" />
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-3">
            <div
              className={
                "portfolio__single topy-tilt fade-top" +
                (hover === 6 ? " portfolio__single-active" : " ")
              }
              onMouseEnter={() => setHover(6)}
            >
              <Link href="/portfolio">
                <Image src={seven} alt="Preview desain Digital Marketing 1" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="/portfolio" className="arr" aria-label="Lihat seluruh proyek">
                  <i className="fa-sharp fa-solid fa-arrow-up-right" aria-hidden="true"></i>
                </Link>
                <h2>
                  <Link href="/portfolio">Digital Marketing</Link>
                </h2>
              </div>
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

export default PortfolioText;
