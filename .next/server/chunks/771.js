"use strict";
exports.id = 771;
exports.ids = [771];
exports.modules = {

/***/ 9771:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ project_WorkStepsProject)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/components/youtube/YoutubeEmbed.tsx
var YoutubeEmbed = __webpack_require__(8988);
;// CONCATENATED MODULE: ./public/images/video-frame.png
/* harmony default export */ const video_frame = ({"src":"/_next/static/media/video-frame.7e9b5e1a.png","height":189,"width":190,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAACVBMVEVFRUUwMDBFRUXIsT8hAAAAA3RSTlMhARDHVcksAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nH2LoQ0AMAyAgP+PXlpROQUCMIIk1MFS+cnFzkw+CCgAOSY6ysgAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./src/components/containers/project/WorkStepsProject.tsx





const WorkStepsProject = ()=>{
    const [hover, setHover] = (0,external_react_.useState)(1);
    const [videoActive, setVideoActive] = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        const handleMouseMove = (event)=>{
            if (false) {}
        };
        window.addEventListener("mousemove", handleMouseMove);
        return ()=>{
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                className: "section work-steps work-alt fade-wrapper",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "container",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "row",
                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "col-12",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "section__header--secondary",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "row gaper align-items-center",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "col-12 col-lg-5 col-xxl-5",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "section__header text-center text-lg-start mb-0",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                                className: "sub-title",
                                                                children: [
                                                                    "working steps",
                                                                    /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                        className: "fa-solid fa-arrow-right"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                                                className: "title title-anim",
                                                                children: "Our Work Process"
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "col-12 col-lg-7 col-xxl-5 offset-xxl-2",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "text-center text-lg-start",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                            children: "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation on the runway heading towards"
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "row",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "col-12 col-sm-6 col-xl-3",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "work-steps__single fade-top" + (hover === 0 ? " work-steps__single-active" : " "),
                                            onMouseEnter: ()=>setHover(0),
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                    children: [
                                                        "25",
                                                        /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                                                        "%"
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                                    children: "Discover & Strategy."
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "work-thumb-hover d-none d-md-block",
                                                    style: {
                                                        backgroundImage: "url('/images/work/thumb-one.png')"
                                                    }
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "col-12 col-sm-6 col-xl-3",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "work-steps__single fade-top work-two" + (hover === 1 ? " work-steps__single-active" : " "),
                                            onMouseEnter: ()=>setHover(1),
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                    children: [
                                                        "50",
                                                        /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                                                        "%"
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                                    children: "Wireframes & User-flows"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "work-thumb-hover d-none d-md-block",
                                                    style: {
                                                        backgroundImage: "url('/images/work/thumb-one.png')"
                                                    }
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "col-12 col-sm-6 col-xl-3",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "work-steps__single fade-top work-three" + (hover === 2 ? " work-steps__single-active" : " "),
                                            onMouseEnter: ()=>setHover(2),
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                    children: [
                                                        "75",
                                                        /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                                                        "%"
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                                    children: "Hi-Fidelity design"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "work-thumb-hover d-none d-md-block",
                                                    style: {
                                                        backgroundImage: "url('/images/work/thumb-one.png')"
                                                    }
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "col-12 col-sm-6 col-xl-3",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "work-steps__single fade-top work-four" + (hover === 3 ? " work-steps__single-active" : " "),
                                            onMouseEnter: ()=>setHover(3),
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                    children: [
                                                        "100",
                                                        /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                                                        "%"
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                                    children: "Development Phase"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "work-thumb-hover d-none d-md-block",
                                                    style: {
                                                        backgroundImage: "url('/images/work/thumb-one.png')"
                                                    }
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                        className: "video-frame video-btn d-none d-md-flex",
                        onClick: ()=>setVideoActive(true),
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                src: video_frame,
                                alt: "Image"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("i", {
                                className: "fa-sharp fa-solid fa-play"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: (videoActive ? " video-zoom-in" : " ") + " video-backdrop",
                onClick: ()=>setVideoActive(false),
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "video-inner",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "video-container",
                        onClick: (e)=>e.stopPropagation(),
                        children: [
                            videoActive && /*#__PURE__*/ jsx_runtime.jsx(YoutubeEmbed/* default */.Z, {
                                embedId: "fSv6UgCkuTU"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("button", {
                                "aria-label": "close video popup",
                                className: "close-video-popup",
                                onClick: ()=>setVideoActive(false),
                                children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                    className: "fa-solid fa-xmark"
                                })
                            })
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const project_WorkStepsProject = (WorkStepsProject);


/***/ }),

/***/ 8988:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const YoutubeEmbed = ({ embedId })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("iframe", {
            width: "200",
            height: "100",
            src: `https://www.youtube.com/embed/${embedId}`,
            "data-allow": "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
            allowFullScreen: true,
            title: "Embedded youtube",
            className: "video"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (YoutubeEmbed);


/***/ })

};
;