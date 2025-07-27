import React,{useRef, useState, useEffect} from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import logo from "public/images/logo.png";
import logoLight from "public/images/logo-light.png";
import chroma from "chroma-js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
const currentYear = new Date().getFullYear();

  const animatedTextRef = useRef<any>(null);
  const [animatedTextContent, setAnimatedTextContent] = useState("");

  useEffect(() => {
    const animatedChars = document.querySelectorAll(".animated-char");

    if (animatedChars.length > 0) {
      const folksBD = gsap.timeline({
        repeat: -1,
        delay: 0.5,
        scrollTrigger: {
          trigger: ".animated-text",
          start: "bottom 100%-=50px",
        },
      });

      const folksGradient = chroma.scale(["#ff7425", "#ffffff"]);

      animatedChars.forEach((charElement, index) => {
        const delay = index * 0.04;

        folksBD.to(
          charElement,
          {
            duration: 0.5,
            scaleY: 0.6,
            ease: "power3.out",
            transformOrigin: "center bottom",
          },
          delay
        );

        folksBD.to(
          charElement,
          {
            yPercent: -20,
            ease: "elastic",
            duration: 0.8,
          },
          delay + 0.5
        );

        folksBD.to(
          charElement,
          {
            scaleY: 1,
            ease: "elastic.out(2.5, 0.2)",
            duration: 1.5,
          },
          delay + 0.5
        );

        folksBD.to(
          charElement,
          {
            color: () => {
              return folksGradient(index / animatedChars.length).hex();
            },
            ease: "power2.out",
            duration: 0.3,
          },
          delay + 0.5
        );

        folksBD.to(
          charElement,
          {
            yPercent: 0,
            ease: "back",
            duration: 0.8,
          },
          delay + 0.7
        );

        folksBD.to(
          charElement,
          {
            color: "#ffffff",
            duration: 1.4,
          },
          delay + 0.9
        );
      });
    }
  }, [animatedTextContent]);

  useEffect(() => {
    const animatedText = animatedTextRef.current;
    const textContent = animatedTextRef.current?.textContent;
    if (textContent) {
      setAnimatedTextContent(textContent);
      animatedText.innerHTML = "";
    }
  }, []);



 
  let logoSrc = logo;
  
  const router = useRouter();
  if (router.pathname === "/index-four-light") {
    logoSrc = logoLight;
  }

  if (router.pathname === "/index-five-light") {
    logoSrc = logoLight;
  }

  
  return (
    <footer className="section footer-four pb-0">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="footer-four__content">
              <div className="intro text-center">
                <h2 className="light-title text-uppercase title-anim">
                  Let&apos;s make some magic ✨ happen and show the world what
                  your brand is all about!
                </h2>
              </div>
              <div className="row justify-content-center cta-t section__content-cta">
                <div className="col-12 col-md-8">
                  <h3>
                    <Link href="contact-us">
                      Let&apos;s Talk
                      <i className="fa-regular fa-comment-dots"></i>
                    </Link>
                  </h3>
                  <p>Let&apos;s make your brand the talk of the town</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row align-items-center copy-t gaper section__content-cta">
          <div className="col-12 col-lg-6">
            <ul className="justify-content-center justify-content-lg-start">
              <li>
                <Link href="https://www.linkedin.com/" target="_blank">
                  Linkedin
                </Link>
              </li>
              <li>
                <Link href="https://www.twitter.com/" target="_blank">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="https://www.facebook.com/" target="_blank">
                  Facebook
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-12 col-lg-6">
            <div className="text-center text-lg-end">
             <h2 className="fs-3">
                  <Link
                    href="mailto:cs@devdream.my.id"
                    className="folks-text animated-text"
                    ref={animatedTextRef}
                  >
                    cs@devdream.my.id
                    {animatedTextContent.split("").map((char, index) => (
                      <span
                        aria-hidden="true"
                        className="animated-char"
                        key={index}
                      >
                        {char}
                      </span>
                    ))}
                  </Link>
                </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-three__copyright mt-0">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="footer__copyright">
                <div className="row align-items-center gaper">
                  <div className="col-12 col-lg-8">
                    <div className="footer__copyright-text text-center text-lg-start">
                      <p>
                        Copyright &copy;{" "}
                        <span id="copyYear">{currentYear}</span> dev dream by{" "}
                        <Link
                          href="https://devdream.my.id"
                          target="_blank"
                        >
                          fajar anugrah{" "}
                        </Link>
                        . All Rights Reserved
                      </p>
                    </div>
                  </div>
                  <div className="col-12 col-lg-4">
                    <div className="text-center text-lg-end">
                    <div className="logo">
                    <a href="/" className="gradient-text text-decoration-none" aria-label="go to home">
                      dev<span>Dream</span>
                    </a>
                  </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
