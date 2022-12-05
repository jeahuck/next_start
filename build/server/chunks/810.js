"use strict";
exports.id = 810;
exports.ids = [810];
exports.modules = {

/***/ 4810:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/footer.js

function Footer() {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("footer", {
            className: " body-font",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "flex title-font font-medium items-center md:justify-start justify-center text-gray-900",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "ml-3 text-xl",
                                children: "포트폴리오"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            className: "text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4",
                            children: [
                                "\xa9 2020 Tailblocks —",
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "https://twitter.com/knyttneve",
                                    rel: "noopener noreferrer",
                                    className: "text-gray-600 ml-1",
                                    target: "_blank",
                                    children: "@knyttneve"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                            className: "inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "text-gray-500",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                        fill: "currentColor",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: "2",
                                        className: "w-5 h-5",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            d: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "ml-3 text-gray-500",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                        fill: "currentColor",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: "2",
                                        className: "w-5 h-5",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            d: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "ml-3 text-gray-500",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: "2",
                                        className: "w-5 h-5",
                                        viewBox: "0 0 24 24",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                                width: "20",
                                                height: "20",
                                                x: "2",
                                                y: "2",
                                                rx: "5",
                                                ry: "5"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                d: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "ml-3 text-gray-500",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                        fill: "currentColor",
                                        stroke: "currentColor",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: "0",
                                        className: "w-5 h-5",
                                        viewBox: "0 0 24 24",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                stroke: "none",
                                                d: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                                                cx: "4",
                                                cy: "4",
                                                r: "2",
                                                stroke: "none"
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        })
    });
}

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next-themes"
var external_next_themes_ = __webpack_require__(1162);
;// CONCATENATED MODULE: ./components/dark-mode-toggle-button.js


/* harmony default export */ const dark_mode_toggle_button = (()=>{
    const { theme , setTheme  } = (0,external_next_themes_.useTheme)();
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
            className: " inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-50 hover:text-orange-500 dark:bg-slate-600 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-yellow-300 rounded text-base mt-4 md:mt-0",
            type: "button",
            onClick: ()=>theme === "light" ? setTheme("dark") : setTheme("light"),
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    strokeWidth: "1.5",
                    stroke: "currentColor",
                    className: "visible dark:invisible dark:h-0 dark:w-0 h-5 w-5",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    strokeWidth: "1.5",
                    stroke: "currentColor",
                    className: "visible dark:visible dark:h-5 dark:w-5 h-0 w-0",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                    })
                })
            ]
        })
    });
});

;// CONCATENATED MODULE: ./components/header.js



function Header() {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("header", {
            className: "text-gray-600 body-font",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                        className: "flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "none",
                                stroke: "currentColor",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "2",
                                className: "w-10 h-10 text-white p-2 bg-indigo-500 rounded-full",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                    d: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "ml-3 text-xl",
                                children: "포트폴리오"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                        className: "md:ml-auto flex flex-wrap items-center text-base justify-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "mr-5 hover:text-gray-900",
                                children: "홈"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/projects",
                                className: "mr-5 hover:text-gray-900",
                                children: "프로젝트"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "mr-5 hover:text-gray-900",
                                children: "연락하기"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(dark_mode_toggle_button, {})
                ]
            })
        })
    });
}

;// CONCATENATED MODULE: ./components/layout.js



function Layout({ children  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "bg-primary",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
        ]
    });
}


/***/ })

};
;