import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import star from "public/images/star.svg";
import YoutubeEmbed from "@/components/youtube/YoutubeEmbed";

gsap.registerPlugin(ScrollTrigger);
const HomeOneBanner = () => {
  const [videoActive, setVideoActive] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const device_width = window.innerWidth;

      if (
        document.querySelectorAll(".g-ban-one").length > 0 &&
        device_width > 576
      ) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".banner",
            start: "center center",
            end: "+=100%",
            scrub: true,
            pin: false,
          },
        });

        tl.set(".g-ban-one", {
          y: "-10%",
        });

        tl.to(".g-ban-one", {
          opacity: 0,
          scale: 2,
          y: "100%",
          zIndex: -1,
          duration: 2,
        });
      }
    }
  }, []);

  return (
    <>
      <section className="banner">
        <div className="container position-relative z-1">
          <div className="row">
            <div className="col-12">
              <div className="banner__content">
                <h1 className="text-uppercase text-start fw-9 mb-0 title-anim">
                  We are
                  <span className="text-stroke"> Production</span>
                  <span className="interval">
                    <i className="icon-arrow-top-right"></i> House
                  </span>
                </h1>
                <div className="banner__content-inner">
                  <p>
                    We are a full-service website design, development and
                    digital marketing company specializing in SEO, content
                    marketing that grows brands.
                  </p>
                  <div className="cta section__content-cta">
                    <div className="single">
                      <h2 className="fw-7">12+</h2>
                      <p className="fw-5">years of experience</p>
                    </div>
                    <div className="single">
                      <h2 className="fw-7">25k</h2>
                      <p className="fw-5">completed projects</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* VIDEO background */}
        <video
          className="video-bg position-absolute top-0 start-0 w-100 h-100 object-fit-cover z-n1"
          src="/images/banner/dayana.mp4"
          autoPlay
          loop
          muted
          playsInline
        />


        <div className="video-overlay position-absolute top-0 start-0 w-100 h-100 z-0"></div>


        <Image src={star} alt="Image" className="star z-1"  width={50} height={50} />
        <div className="banner-left-text banner-social-text d-none d-md-flex">
          <Link href="mailto:info@xpovio.com" className="text-white">mail : cs@devdream.my.id</Link>
          <Link href="tel:99-2158-003-6980" className="text-white">Call : +00 000-0000-0000</Link>
        </div>
        <div className="banner-right-text banner-social-text d-none d-md-flex z-50 text-white">
          <Link href="https://www.instagram.com/" target="_blank" className="text-white">
            instagram
          </Link>
          <Link href="https://www.pinterest.com/" target="_blank" className="text-white">
            Linkedin
          </Link>
          <Link href="https://www.facebook.com/" target="_blank" className="text-white">
            facebook
          </Link>
        </div>
        
        <div className="lines d-none d-lg-flex">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </section>
      <div
        className={(videoActive ? " video-zoom-in" : " ") + " video-backdrop"}
        onClick={() => setVideoActive(false)}
      >
        <div className="video-inner">
          <div
            className="video-container"
            onClick={(e: any) => e.stopPropagation()}
          >
            {videoActive && <YoutubeEmbed embedId="fSv6UgCkuTU" />}
            <button
              aria-label="close video popup"
              className="close-video-popup"
              onClick={() => setVideoActive(false)}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeOneBanner;
