import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import one from "public/images/portfolio/port1.png";
import two from "public/images/portfolio/port2.png";
import three from "public/images/portfolio/port3.png";
import four from "public/images/portfolio/port4.png";


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
                  Creative House
                  <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                </Link>
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="portfolio__text-slider-single">
              <h1 className="h1 str">
                <Link href="/portfolio">
                  Creative House
                  <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                </Link>
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="portfolio__text-slider-single">
              <h1 className="h1">
                <Link href="/portfolio">
                  Creative House
                  <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                </Link>
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="portfolio__text-slider-single">
              <h1 className="h1 str">
                <Link href="/portfolio">
                  Creative House
                  <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                </Link>
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="portfolio__text-slider-single">
              <h1 className="h1">
                <Link href="/portfolio">
                  Creative House
                  <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                </Link>
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="portfolio__text-slider-single">
              <h1 className="h1 str">
                <Link href="/portfolio">
                  Creative House
                  <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                </Link>
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="portfolio__text-slider-single">
              <h1 className="h1">
                <Link href="/portfolio">
                  Creative House
                  <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
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
              <Link href="/service-single" aria-label="Buka detail portofolio Digital Marketing">
                <Image src={one} alt="Ilustrasi Digital Marketing" />
              </Link>

              <div className="portfolio__single-content">
                {/* Ikon sebagai link dengan label aksesibel */}
                <Link href="/service-single" className="arr" aria-label="Lihat detail Digital Marketing">
                  <i className="fa-sharp fa-solid fa-arrow-up-right text-black" aria-hidden="true"></i>
                </Link>

                {/* Judul sebagai link */}
                <h2>
                  <Link href="/service-single" className="text-black">PLN</Link>
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
                  <i className="fa-sharp fa-solid fa-arrow-up-right text-black" aria-hidden="true"></i>
                </Link>
                <h2>
                  <Link href="/portfolio" className="text-black">PHILIA</Link>
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
                  <i className="fa-sharp fa-solid fa-arrow-up-right text-black" aria-hidden="true"></i>
                </Link>
                <h2>
                  <Link href="/portfolio" className="text-black">AKSARA</Link>
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
                  <i className="fa-sharp fa-solid fa-arrow-up-right text-black" aria-hidden="true"></i>
                </Link>
                <h2>
                  <Link href="/portfolio" className="text-black">INKA</Link>

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
