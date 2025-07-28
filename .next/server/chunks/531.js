"use strict";
exports.id = 531;
exports.ids = [531];
exports.modules = {

/***/ 9531:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ layout_Layout)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "gsap"
var external_gsap_ = __webpack_require__(4287);
var external_gsap_default = /*#__PURE__*/__webpack_require__.n(external_gsap_);
// EXTERNAL MODULE: external "gsap/dist/ScrollTrigger"
var ScrollTrigger_ = __webpack_require__(4965);
// EXTERNAL MODULE: external "vanilla-tilt"
var external_vanilla_tilt_ = __webpack_require__(5177);
var external_vanilla_tilt_default = /*#__PURE__*/__webpack_require__.n(external_vanilla_tilt_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./public/images/logo.png
/* harmony default export */ const logo = ({"src":"/_next/static/media/logo.1d64c182.png","height":40,"width":126,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAHlBMVEX/////////+PT+/v7/////////////6d//y6L/6960beg+AAAACHRSTlMSd1kJH4iw+tjWCVcAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAhSURBVHicY+BkYmZgYGBgZuBgY2JlZGRkZWAHibAwsAAAA8IAQ9sTa64AAAAASUVORK5CYII=","blurWidth":8,"blurHeight":3});
;// CONCATENATED MODULE: ./public/images/logo-light.png
/* harmony default export */ const logo_light = ({"src":"/_next/static/media/logo-light.ac117c2f.png","height":40,"width":126,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAIVBMVEUAAAAAAAAAAAAAAAAAAAAnEgUAAAAfDgUCAQAFAgCFPBN6vLd3AAAACnRSTlMSCXeIH/1bWrBWuPqe5AAAAAlwSFlzAAALEwAACxMBAJqcGAAAACBJREFUeJwFwYcNACAMACC6ovX/gwVzAsK7W5lZZtH6AwQvAExOg0HwAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":3});
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/layout/header/Offcanvas.tsx



const Offcanvas = ({ openNav, setOpenNav })=>{
    const [openSubMenu, setOpenSubMenu] = (0,external_react_.useState)(null);
    const [openNestedMenu, setOpenNestedMenu] = (0,external_react_.useState)(null);
    const handleSubmenu = (submenu)=>{
        if (submenu === openSubMenu) {
            setOpenSubMenu(null);
        } else {
            setOpenSubMenu(submenu);
        }
    };
    const handleNestedmenu = (nestmenu)=>{
        if (nestmenu === openNestedMenu) {
            setOpenNestedMenu(null);
        } else {
            setOpenNestedMenu(nestmenu);
        }
    };
    const isNestedMenuOpen = (nestmenu)=>{
        return nestmenu === openNestedMenu ? " nav__dropdown-active" : " ";
    };
    const isNestedMenuButton = (nestmenu)=>{
        return nestmenu === openNestedMenu ? " navbar__item-active" : " ";
    };
    const isSubMenuOpen = (submenu)=>{
        return submenu === openSubMenu ? " nav__dropdown-active" : " ";
    };
    const isSubMenuButton = (submenu)=>{
        return submenu === openSubMenu ? " navbar__item-active" : " ";
    };
    // window resize
    (0,external_react_.useEffect)(()=>{
        const handleResizeHeader = ()=>{
            setOpenNav(false);
            setOpenSubMenu(null);
        };
        window.addEventListener("resize", handleResizeHeader);
        return ()=>{
            window.removeEventListener("resize", handleResizeHeader);
        };
    }, []);
    const closeNav = ()=>{
        setOpenNav(false);
        setOpenSubMenu(null);
    };
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "offcanvas-nav",
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "offcanvas-menu" + (openNav ? " show-offcanvas-menu" : " "),
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("nav", {
                className: "offcanvas-menu__wrapper",
                "data-lenis-prevent": true,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "offcanvas-menu__header nav-fade",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "logo",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                    href: "/",
                                    className: "gradient-text text-decoration-none",
                                    "aria-label": "go to home",
                                    children: [
                                        "dev",
                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            children: "Dream"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("button", {
                                "aria-label": "close offcanvas menu",
                                className: "close-offcanvas-menu",
                                onClick: closeNav,
                                children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                    className: "fa-light fa-xmark-large"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "offcanvas-menu__list",
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "navbar__menu",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                        className: "navbar__item navbar__item--has-children nav-fade",
                                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                            href: "about-us",
                                            children: "Home"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                        className: "navbar__item nav-fade",
                                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                            href: "about-us",
                                            children: "About Us"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                        className: "navbar__item navbar__item--has-children nav-fade",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                "aria-label": "dropdown menu",
                                                className: `navbar__dropdown-label ${isSubMenuButton("services")}`,
                                                onClick: ()=>handleSubmenu("services"),
                                                children: "Services"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                                className: `navbar__sub-menu ${isSubMenuOpen("services")}`,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                            href: "our-services",
                                                            children: "Our Services"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                            href: "service-single",
                                                            children: "Service Details"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                        className: "navbar__item navbar__item--has-children nav-fade",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                "aria-label": "dropdown menu",
                                                className: `navbar__dropdown-label ${isSubMenuButton("projects")}`,
                                                onClick: ()=>handleSubmenu("projects"),
                                                children: "Projects"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                                className: `navbar__sub-menu ${isSubMenuOpen("projects")}`,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                            href: "our-projects",
                                                            children: "Our Projects"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                            href: "project-single",
                                                            children: "Project Details"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                        className: "navbar__item navbar__item--has-children nav-fade",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                "aria-label": "dropdown menu",
                                                className: `navbar__dropdown-label ${isSubMenuButton("pages")}`,
                                                onClick: ()=>handleSubmenu("pages"),
                                                children: "Pages"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                                className: `navbar__sub-menu ${isSubMenuOpen("pages")}`,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                            href: "faq",
                                                            children: "FAQ"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                            href: "404",
                                                            children: "Error"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                            href: "our-story",
                                                            children: "Our Story"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                            href: "portfolio",
                                                            children: "Portfolio"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                        className: "navbar__item navbar__item--has-children",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                                "aria-label": "dropdown menu",
                                                                className: `navbar__dropdown-label navbar__dropdown-label-sub ${isNestedMenuButton("team")}`,
                                                                onClick: ()=>handleNestedmenu("team"),
                                                                children: "Team"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                                                className: `navbar__sub-menu navbar__sub-menu__nested ${isNestedMenuOpen("team")}`,
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                            href: "our-teams",
                                                                            children: "Our Teams"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                            href: "team-single",
                                                                            children: "Team Details"
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                            href: "client-feedback",
                                                            children: "Testimonials"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                            href: "contact-us",
                                                            children: "Contact Us"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                        className: "navbar__item navbar__item--has-children nav-fade",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                "aria-label": "dropdown menu",
                                                className: `navbar__dropdown-label navbar__dropdown-label-sub ${isSubMenuButton("blog")}`,
                                                onClick: ()=>handleSubmenu("blog"),
                                                children: "Blog"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                                className: `navbar__sub-menu ${isSubMenuOpen("blog")}`,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                            href: "blog",
                                                            children: "Blog"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                            href: "blog-single",
                                                            children: "Blog Details"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "offcanvas-menu__options nav-fade",
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "offcanvas__mobile-options d-flex",
                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                href: "contact-us",
                                className: "btn btn--secondary",
                                children: "Let's Talk"
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "offcanvas-menu__social social nav-fade",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                href: "https://www.facebook.com/",
                                target: "_blank",
                                "aria-label": "share us on facebook",
                                children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                    className: "fa-brands fa-facebook-f"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                href: "https://www.twitter.com/",
                                target: "_blank",
                                "aria-label": "share us on twitter",
                                children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                    className: "fa-brands fa-twitter"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                href: "https://www.pinterest.com/",
                                target: "_blank",
                                "aria-label": "share us on pinterest",
                                children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                    className: "fa-brands fa-linkedin-in"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                href: "https://www.instagram.com/",
                                target: "_blank",
                                "aria-label": "share us on instagram",
                                children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                    className: "fa-brands fa-instagram"
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const header_Offcanvas = (Offcanvas);

;// CONCATENATED MODULE: ./src/components/layout/header/Header.tsx






const Header = ({ openNav, handleNav, setOpenNav })=>{
    const [scrolled, setScrolled] = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        const handleScroll = ()=>{
            const scrollPosition = window.scrollY;
            if (scrollPosition > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return ()=>{
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    const defaultClasses = "primary-navbar secondary--navbar";
    const combinedClasses = `${scrolled ? " navbar-active" : " "} ${defaultClasses}`;
    let logoSrc = logo;
    const router = (0,router_.useRouter)();
    if (router.pathname === "/index-light") {
        logoSrc = logo_light;
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("header", {
                className: "header",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: combinedClasses,
                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "row",
                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-12",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("nav", {
                                    className: "navbar p-0",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "navbar__logo",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                                href: "/",
                                                className: "gradient-text text-decoration-none",
                                                "aria-label": "go to home",
                                                children: [
                                                    "dev",
                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                        children: "Dream"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "navbar__options",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                className: "open-offcanvas-nav d-flex",
                                                "aria-label": "toggle mobile menu",
                                                title: "open offcanvas menu",
                                                onClick: handleNav
                                            })
                                        })
                                    ]
                                })
                            })
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx(header_Offcanvas, {
                openNav: openNav,
                setOpenNav: setOpenNav
            })
        ]
    });
};
/* harmony default export */ const header_Header = (Header);

;// CONCATENATED MODULE: ./src/components/layout/header/HeaderTwo.tsx







const HeaderTwo = ({ openNav, handleNav, setOpenNav })=>{
    const [scrolled, setScrolled] = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        const handleScroll = ()=>{
            const scrollPosition = window.scrollY;
            if (scrollPosition > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return ()=>{
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    const defaultClasses = "primary-navbar cmn-nav";
    const combinedClasses = `${scrolled ? " navbar-active" : " "} ${defaultClasses}`;
    let logoSrc = logo;
    const router = (0,router_.useRouter)();
    if (router.pathname === "/index-two-light") {
        logoSrc = logo_light;
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("header", {
                className: "header",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: combinedClasses,
                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "row",
                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-12",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("nav", {
                                    className: "navbar p-0",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "navbar__logo",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                                href: "/",
                                                className: "gradient-text text-decoration-none",
                                                "aria-label": "go to home",
                                                children: [
                                                    "dev",
                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                        children: "Dream"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "navbar__menu",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                        className: "navbar__item navbar__item--has-children nav-fade",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                            href: "/",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                                "aria-label": "dropdown menu",
                                                                children: "Home"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                        className: "navbar__item navbar__item--has-children nav-fade",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                            href: "about-us",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                                "aria-label": "dropdown menu",
                                                                children: "About Us"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                        className: "navbar__item navbar__item--has-children nav-fade",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                            href: "our-services",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                                "aria-label": "dropdown menu",
                                                                children: "Services"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                        className: "navbar__item navbar__item--has-children nav-fade",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                            href: "our-projects",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                                "aria-label": "dropdown menu",
                                                                children: "Project"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                        className: "navbar__item navbar__item--has-children nav-fade",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                                "aria-label": "dropdown menu",
                                                                className: "navbar__dropdown-label",
                                                                children: "Pages"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                                                className: "navbar__sub-menu",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                            href: "faq",
                                                                            children: "FAQ"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                            href: "404",
                                                                            children: "Error"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                            href: "our-story",
                                                                            children: "Our Story"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                            href: "portfolio",
                                                                            children: "Portfolio"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                                        className: "navbar__item navbar__item--has-children",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                                                "aria-label": "dropdown menu",
                                                                                className: "navbar__dropdown-label navbar__dropdown-label-sub",
                                                                                children: "Team"
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                                                                className: "navbar__sub-menu navbar__sub-menu__nested",
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                                            href: "our-teams",
                                                                                            children: "Our Teams"
                                                                                        })
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                                            href: "team-single",
                                                                                            children: "Team Details"
                                                                                        })
                                                                                    })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                            href: "client-feedback",
                                                                            children: "Testimonials"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                            href: "contact-us",
                                                                            children: "Contact Us"
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                        className: "navbar__item navbar__item--has-children nav-fade",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                                "aria-label": "dropdown menu",
                                                                className: "navbar__dropdown-label",
                                                                children: "Blog"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                                                className: "navbar__sub-menu",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                            href: "blog",
                                                                            children: "Blog"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                            href: "blog-single",
                                                                            children: "Blog Details"
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "navbar__options",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "navbar__mobile-options d-none d-sm-flex",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                        href: "contact-us",
                                                        className: "btn btn--secondary",
                                                        children: "Let's Talk"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                    className: "open-mobile-menu d-flex d-xl-none",
                                                    "aria-label": "toggle mobile menu",
                                                    onClick: handleNav,
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                        className: "fa-light fa-bars-staggered"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx(header_Offcanvas, {
                openNav: openNav,
                setOpenNav: setOpenNav
            })
        ]
    });
};
/* harmony default export */ const header_HeaderTwo = (HeaderTwo);

// EXTERNAL MODULE: external "chroma-js"
var external_chroma_js_ = __webpack_require__(6303);
var external_chroma_js_default = /*#__PURE__*/__webpack_require__.n(external_chroma_js_);
;// CONCATENATED MODULE: ./src/components/layout/footer/Footer.tsx









external_gsap_default().registerPlugin(ScrollTrigger_.ScrollTrigger);
const Footer = ()=>{
    const currentYear = new Date().getFullYear();
    const animatedTextRef = (0,external_react_.useRef)(null);
    const [animatedTextContent, setAnimatedTextContent] = (0,external_react_.useState)("");
    (0,external_react_.useEffect)(()=>{
        const animatedChars = document.querySelectorAll(".animated-char");
        if (animatedChars.length > 0) {
            const folksBD = external_gsap_default().timeline({
                repeat: -1,
                delay: 0.5,
                scrollTrigger: {
                    trigger: ".animated-text",
                    start: "bottom 100%-=50px"
                }
            });
            const folksGradient = external_chroma_js_default().scale([
                "#ff7425",
                "#ffffff"
            ]);
            animatedChars.forEach((charElement, index)=>{
                const delay = index * 0.04;
                folksBD.to(charElement, {
                    duration: 0.5,
                    scaleY: 0.6,
                    ease: "power3.out",
                    transformOrigin: "center bottom"
                }, delay);
                folksBD.to(charElement, {
                    yPercent: -20,
                    ease: "elastic",
                    duration: 0.8
                }, delay + 0.5);
                folksBD.to(charElement, {
                    scaleY: 1,
                    ease: "elastic.out(2.5, 0.2)",
                    duration: 1.5
                }, delay + 0.5);
                folksBD.to(charElement, {
                    color: ()=>{
                        return folksGradient(index / animatedChars.length).hex();
                    },
                    ease: "power2.out",
                    duration: 0.3
                }, delay + 0.5);
                folksBD.to(charElement, {
                    yPercent: 0,
                    ease: "back",
                    duration: 0.8
                }, delay + 0.7);
                folksBD.to(charElement, {
                    color: "#ffffff",
                    duration: 1.4
                }, delay + 0.9);
            });
        }
    }, [
        animatedTextContent
    ]);
    (0,external_react_.useEffect)(()=>{
        const animatedText = animatedTextRef.current;
        const textContent = animatedTextRef.current?.textContent;
        if (textContent) {
            setAnimatedTextContent(textContent);
            animatedText.innerHTML = "";
        }
    }, []);
    let logoSrc = logo;
    const router = (0,router_.useRouter)();
    if (router.pathname === "/index-four-light") {
        logoSrc = logo_light;
    }
    if (router.pathname === "/index-five-light") {
        logoSrc = logo_light;
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("footer", {
        className: "section footer-four pb-0",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "row",
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-12",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "footer-four__content",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "intro text-center",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                            className: "light-title text-uppercase title-anim",
                                            children: "Let's make some magic ✨ happen and show the world what your brand is all about!"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "row justify-content-center cta-t section__content-cta",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "col-12 col-md-8",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                                        href: "contact-us",
                                                        children: [
                                                            "Let's Talk",
                                                            /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                className: "fa-regular fa-comment-dots"
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                    children: "Let's make your brand the talk of the town"
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "row align-items-center copy-t gaper section__content-cta",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-12 col-lg-6",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                    className: "justify-content-center justify-content-lg-start",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                href: "https://www.linkedin.com/",
                                                target: "_blank",
                                                children: "Linkedin"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                href: "https://www.twitter.com/",
                                                target: "_blank",
                                                children: "Twitter"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                href: "https://www.facebook.com/",
                                                target: "_blank",
                                                children: "Facebook"
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-12 col-lg-6",
                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "text-center text-lg-end",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                        className: "fs-3",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                            href: "mailto:cs@devdream.my.id",
                                            className: "folks-text animated-text",
                                            ref: animatedTextRef,
                                            "aria-label": "Kirim email ke cs@devdream.my.id",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    className: "sr-only",
                                                    children: "cs@devdream.my.id"
                                                }),
                                                animatedTextContent.split("").map((char, index)=>/*#__PURE__*/ jsx_runtime.jsx("span", {
                                                        "aria-hidden": "true",
                                                        className: "animated-char",
                                                        children: char
                                                    }, index))
                                            ]
                                        })
                                    })
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "footer-three__copyright mt-0",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "row",
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-12",
                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "footer__copyright",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "row align-items-center gaper",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "col-12 col-lg-8",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "footer__copyright-text text-center text-lg-start",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                    children: [
                                                        "Copyright \xa9",
                                                        " ",
                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            id: "copyYear",
                                                            children: currentYear
                                                        }),
                                                        " dev dream by",
                                                        " ",
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                                            href: "https://devdream.my.id",
                                                            target: "_blank",
                                                            children: [
                                                                "fajar anugrah",
                                                                " "
                                                            ]
                                                        }),
                                                        ". All Rights Reserved"
                                                    ]
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "col-12 col-lg-4",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "text-center text-lg-end",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "logo",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                                        href: "/",
                                                        className: "gradient-text text-decoration-none",
                                                        "aria-label": "go to home",
                                                        children: [
                                                            "dev",
                                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                children: "Dream"
                                                            })
                                                        ]
                                                    })
                                                })
                                            })
                                        })
                                    ]
                                })
                            })
                        })
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const footer_Footer = (Footer);

;// CONCATENATED MODULE: ./src/components/layout/VideoModal.tsx


const VideoModal = ()=>{
    const [vid, setVid] = (0,external_react_.useState)(true);
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "vid-m" + (vid ? " vid-a" : " "),
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "vid-c",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("button", {
                    "aria-label": "close video popup",
                    className: "close-v",
                    onClick: ()=>setVid(false),
                    children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                        className: "fa-light fa-xmark-large"
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx("video", {
                    autoPlay: true,
                    loop: true,
                    muted: true,
                    controls: true,
                    children: /*#__PURE__*/ jsx_runtime.jsx("source", {
                        src: "/images/popup-video.mp4",
                        type: "video/mp4"
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx("h5", {
                    children: "Hello"
                })
            ]
        })
    });
};
/* harmony default export */ const layout_VideoModal = (VideoModal);

;// CONCATENATED MODULE: ./src/components/layout/ScrollProgressBtn.tsx


const ScrollProgressBtn = ()=>{
    const [scrollProgress, setScrollProgress] = (0,external_react_.useState)(0);
    const [isActive, setIsActive] = (0,external_react_.useState)(false);
    const scrollRef = (0,external_react_.useRef)(null);
    const handleScroll = ()=>{
        const totalHeight = document.body.scrollHeight - window.innerHeight;
        const progress = window.scrollY / totalHeight * 100;
        setScrollProgress(progress);
        setIsActive(window.scrollY > 50);
    };
    const handleProgressClick = ()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    (0,external_react_.useEffect)(()=>{
        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return ()=>{
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
        ref: scrollRef,
        className: `progress-wrap ${isActive ? "active-progress" : ""}`,
        onClick: handleProgressClick,
        title: "Go To Top",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("span", {}),
            /*#__PURE__*/ jsx_runtime.jsx("svg", {
                className: "progress-circle svg-content",
                width: "100%",
                height: "100%",
                viewBox: "-1 -1 102 102",
                children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                    d: "M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98",
                    stroke: "#3887FE",
                    strokeWidth: "4",
                    fill: "none",
                    style: {
                        strokeDasharray: "308.66px",
                        strokeDashoffset: `${308.66 - scrollProgress * 3.0866}px`
                    }
                })
            })
        ]
    });
};
/* harmony default export */ const layout_ScrollProgressBtn = (ScrollProgressBtn);

;// CONCATENATED MODULE: ./src/components/layout/CustomCursor.tsx


const CustomCursor = ()=>{
    const [cursorPosition, setCursorPosition] = (0,external_react_.useState)({
        x: 0,
        y: 0
    });
    const [isCursorHovering, setIsCursorHovering] = (0,external_react_.useState)(false);
    const [isCursorBig, setIsCursorBig] = (0,external_react_.useState)(false);
    const handleMouseMove = (e)=>{
        setCursorPosition({
            x: e.clientX,
            y: e.clientY
        });
    };
    const handleCursorHover = ()=>{
        setIsCursorHovering(true);
    };
    const handleCursorLeave = ()=>{
        setIsCursorHovering(false);
    };
    const handleMouseEnterTitle = ()=>{
        setIsCursorBig(true);
    };
    const handleMouseLeaveTitle = ()=>{
        setIsCursorBig(false);
    };
    (0,external_react_.useEffect)(()=>{
        window.addEventListener("mousemove", handleMouseMove);
        const titleElements = document.querySelectorAll("h1, p, h2, h3, h4, h5, h6");
        const clickableElements = document.querySelectorAll("a, button");
        titleElements.forEach((titleElement)=>{
            titleElement.addEventListener("mouseover", handleMouseEnterTitle);
            titleElement.addEventListener("mouseout", handleMouseLeaveTitle);
        });
        clickableElements.forEach((clickableElement)=>{
            clickableElement.addEventListener("mouseenter", handleCursorHover);
            clickableElement.addEventListener("mouseleave", handleCursorLeave);
        });
        return ()=>{
            window.removeEventListener("mousemove", handleMouseMove);
            titleElements.forEach((titleElement)=>{
                titleElement.removeEventListener("mouseover", handleMouseEnterTitle);
                titleElement.removeEventListener("mouseout", handleMouseLeaveTitle);
            });
            clickableElements.forEach((clickableElement)=>{
                clickableElement.removeEventListener("mouseenter", handleCursorHover);
                clickableElement.removeEventListener("mouseleave", handleCursorLeave);
            });
        };
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: `mouseCursor cursor-outer ${isCursorHovering ? "cursor-hover" : ""} ${isCursorBig ? "cursor-big" : ""}`,
                style: {
                    transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`
                }
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: `mouseCursor cursor-inner ${isCursorHovering ? "cursor-hover" : ""} ${isCursorBig ? "cursor-big" : ""}`,
                style: {
                    transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`
                },
                children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                    children: "Drag"
                })
            })
        ]
    });
};
/* harmony default export */ const layout_CustomCursor = (CustomCursor);

// EXTERNAL MODULE: external "split-type"
var external_split_type_ = __webpack_require__(7803);
var external_split_type_default = /*#__PURE__*/__webpack_require__.n(external_split_type_);
;// CONCATENATED MODULE: ./src/components/layout/Layout.tsx














const Layout = ({ children, header, footer, handleMouseEnterTitle, handleMouseLeaveTitle, video })=>{
    // tilt effect
    (0,external_react_.useEffect)(()=>{
        const tiltElements = document.querySelectorAll(".topy-tilt");
        tiltElements.forEach((element)=>{
            const tiltElement = element;
            external_vanilla_tilt_default().init(tiltElement, {
                max: 5,
                speed: 3000
            });
        });
    }, []);
    // navbar
    const [openNav, setOpenNav] = (0,external_react_.useState)(false);
    const handleNav = ()=>{
        setOpenNav(!openNav);
    };
    const router = (0,router_.useRouter)();
    const classMappings = {
        "/index-light": "home-light",
        "/index-two-light": "home-two-light",
        "/index-three-light": "home-three-light",
        "/index-four-light": "home-four-light",
        "/index-five-light": "home-five-light"
    };
    const classNameForCurrentPath = classMappings[router.pathname] || "";
    let additionalClasses = " ";
    const combinedClasses = `${additionalClasses} my-app`;
    const combinedClassName = `${combinedClasses}${openNav ? " body-active" : ""} ${classNameForCurrentPath}`;
    // fade animation
    (0,external_react_.useEffect)(()=>{
        const fadeWrapperRefs = document.querySelectorAll(".fade-wrapper");
        fadeWrapperRefs.forEach((fadeWrapperRef)=>{
            const fadeItems = fadeWrapperRef.querySelectorAll(".fade-top");
            fadeItems.forEach((element, index)=>{
                const delay = index * 0.15;
                external_gsap_default().set(element, {
                    opacity: 0,
                    y: 100
                });
                ScrollTrigger_.ScrollTrigger.create({
                    trigger: element,
                    start: "top 100%",
                    end: "bottom 20%",
                    scrub: 0.5,
                    onEnter: ()=>{
                        external_gsap_default().to(element, {
                            opacity: 1,
                            y: 0,
                            duration: 1,
                            delay: delay
                        });
                    },
                    once: true
                });
            });
        });
    }, []);
    // appear down
    (0,external_react_.useEffect)(()=>{
        const appearDownSections = document.querySelectorAll(".appear-down");
        appearDownSections.forEach((section)=>{
            external_gsap_default().fromTo(section, {
                scale: 0.8,
                opacity: 0
            }, {
                scale: 1,
                opacity: 1,
                duration: 1.5,
                scrollTrigger: {
                    trigger: section,
                    scrub: 1,
                    start: "top bottom",
                    end: "bottom center",
                    markers: false
                }
            });
        });
    }, []);
    // split text animation
    (0,external_react_.useEffect)(()=>{
        const myText = new (external_split_type_default())(".title-anim");
        const titleAnims = document.querySelectorAll(".title-anim");
        titleAnims.forEach((titleAnim)=>{
            const charElements = titleAnim.querySelectorAll(".char");
            charElements.forEach((char, index)=>{
                const tl2 = external_gsap_default().timeline({
                    scrollTrigger: {
                        trigger: char,
                        start: "top 90%",
                        end: "bottom 60%",
                        scrub: false,
                        markers: false,
                        toggleActions: "play none none none"
                    }
                });
                const charDelay = index * 0.03;
                tl2.from(char, {
                    duration: 0.8,
                    x: 70,
                    delay: charDelay,
                    autoAlpha: 0
                });
            });
        });
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        httpEquiv: "X-UA-Compatible",
                        content: "ie=edge"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1.0"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        rel: "shortcut icon",
                        href: "/images/favicon.png",
                        type: "image/x-icon"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("title", {
                        children: "Dev Dream |  Creative Portfolio"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "keywords",
                        content: "creative, agency, portfolio"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "description",
                        content: "Digital Agency Creative Portfolio Template"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: combinedClassName,
                children: [
                    header === 1 && /*#__PURE__*/ jsx_runtime.jsx(header_Header, {
                        openNav: openNav,
                        handleNav: handleNav,
                        setOpenNav: setOpenNav
                    }),
                    header === 2 && /*#__PURE__*/ jsx_runtime.jsx(header_HeaderTwo, {
                        openNav: openNav,
                        handleNav: handleNav,
                        setOpenNav: setOpenNav
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("main", {
                        children: children
                    }),
                    footer === 1 && /*#__PURE__*/ jsx_runtime.jsx(footer_Footer, {}),
                    video ? /*#__PURE__*/ jsx_runtime.jsx(layout_VideoModal, {}) : null,
                    /*#__PURE__*/ jsx_runtime.jsx(layout_ScrollProgressBtn, {}),
                    /*#__PURE__*/ jsx_runtime.jsx(layout_CustomCursor, {
                        onTitleMouseEnter: handleMouseEnterTitle,
                        onTitleMouseLeave: handleMouseLeaveTitle
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const layout_Layout = (Layout);


/***/ })

};
;