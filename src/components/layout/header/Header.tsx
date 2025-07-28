import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

import Offcanvas from "./Offcanvas";

interface HeaderProps {
  openNav: boolean;
  setOpenNav: (value: boolean) => void;
  handleNav: () => void;
}

const Header = ({ openNav, handleNav, setOpenNav }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const defaultClasses = "primary-navbar secondary--navbar";
 

  return (
    <>
      <header className="header">
        <div
          className={`fixed w-full z-50 top-0  transition-navbar ${scrolled ? "navbar-scrolled" : "navbar-transparent"
            } ${defaultClasses}`}
        >
          <div className="container">
            <div className="row">
              <div className="col-12">
                <nav className="navbar p-0">
                  <div className="navbar__logo">
                    <Link
                      href="/"
                      className="gradient-text text-decoration-none"
                      aria-label="go to home"
                    >
                      <Image
                        src="/images/logo.png"
                        alt="Logo"
                        width={150}
                        height={50}
                        priority
                        className="object-contain"
                      />

                    </Link>
                  </div>
                  <div className="navbar__options">
                    <button
                      className="open-offcanvas-nav d-flex"
                      aria-label="toggle mobile menu"
                      title="open offcanvas menu"
                      onClick={handleNav}
                    ></button>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Offcanvas openNav={openNav} setOpenNav={setOpenNav} />
    </>
  );
};

export default Header;
