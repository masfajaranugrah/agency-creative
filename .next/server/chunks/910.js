"use strict";
exports.id = 910;
exports.ids = [910];
exports.modules = {

/***/ 4910:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ home_two_HomeTwoModal)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "gsap"
var external_gsap_ = __webpack_require__(4287);
var external_gsap_default = /*#__PURE__*/__webpack_require__.n(external_gsap_);
// EXTERNAL MODULE: external "gsap/dist/ScrollTrigger"
var ScrollTrigger_ = __webpack_require__(4965);
;// CONCATENATED MODULE: ./public/images/modal-bg.png
/* harmony default export */ const modal_bg = ({"src":"/_next/static/media/modal-bg.a29d8d6d.png","height":775,"width":1920,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAD1BMVEW5ubmNjY2Hh4eZmZmYmJjIz8i4AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAE0lEQVR4nGNggANmJiZGFiYEHwAA2AAPHZ/VjwAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":3});
;// CONCATENATED MODULE: ./public/images/video-frame-two.png
/* harmony default export */ const video_frame_two = ({"src":"/_next/static/media/video-frame-two.05d5737c.png","height":189,"width":190,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAACVBMVEX///////////+OSuX+AAAAA3RSTlMhARDHVcksAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nH2LoQ0AMAyAgP+PXlpROQUCMIIk1MFS+cnFzkw+CCgAOSY6ysgAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});
// EXTERNAL MODULE: ./src/components/youtube/YoutubeEmbed.tsx
var YoutubeEmbed = __webpack_require__(8988);
;// CONCATENATED MODULE: ./src/components/containers/home-two/HomeTwoModal.tsx








external_gsap_default().registerPlugin(ScrollTrigger_.ScrollTrigger);
const HomeTwoModal = ()=>{
    const [videoActive, setVideoActive] = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        const device_width = window.innerWidth;
        if (document.querySelectorAll(".modal-bg").length > 0 && device_width > 576) {
            const tl = external_gsap_default().timeline({
                scrollTrigger: {
                    trigger: ".modal-bg",
                    start: "center center",
                    end: "+=100%",
                    scrub: true,
                    pin: false
                }
            });
            tl.to(".modal-bg", {
                opacity: 0,
                scale: 1,
                y: "50%",
                duration: 2
            });
        }
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "video-modal",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                        src: modal_bg,
                        alt: "Image",
                        className: "modal-bg"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                        className: "video-frame video-btn",
                        onClick: ()=>setVideoActive(true),
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                src: video_frame_two,
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
/* harmony default export */ const home_two_HomeTwoModal = (HomeTwoModal);


/***/ })

};
;