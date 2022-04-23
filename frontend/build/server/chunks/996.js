"use strict";
exports.id = 996;
exports.ids = [996];
exports.modules = {

/***/ 453:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9816);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);







const BlankComponent = ({
  receivedText
}) => {
  const neonEffect = () => {
    const styleBox = document.querySelector(".blank-box");

    function setRandomAnimationDuration() {
      styleBox.style.animationDuration = Math.floor(Math.random() * 3 + 1) + "s";
    }

    styleBox.addEventListener("animationiteration", setRandomAnimationDuration);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (receivedText) {
      neonEffect();
    }
  }, [receivedText]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
      className: "jsx-2999052750" + " " + "blank-box",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
        className: "jsx-2999052750" + " " + "blank-text",
        children: receivedText
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
      id: "2999052750",
      children: [".blank-box.jsx-2999052750{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;width:100%;font-size:30px;color:transparent;text-shadow:0 0 20px #d1d2d0;-webkit-animation:buzz-jsx-2999052750 1s infinite alternate;animation:buzz-jsx-2999052750 1s infinite alternate;-webkit-text-stroke-width:0.2px;-webkit-text-stroke-color:white;}", ".blank-text.jsx-2999052750{background-image:linear-gradient( 90deg, red, orange, yellow, lawngreen, blue, navy, purple );-webkit-background-clip:text;}", "@-webkit-keyframes buzz{70%.jsx-2999052750{opacity:0.8;}}", "@-webkit-keyframes buzz-jsx-2999052750{70%{opacity:0.8;}}", "@keyframes buzz-jsx-2999052750{70%{opacity:0.8;}}", "@-webkit-keyframes blink{40%.jsx-2999052750{opacity:1;}42%.jsx-2999052750{opacity:0.8;}43%.jsx-2999052750{opacity:1;}45%.jsx-2999052750{opacity:0.2;}46%.jsx-2999052750{opacity:1;}}", "@-webkit-keyframes blink-jsx-2999052750{40%{opacity:1;}42%{opacity:0.8;}43%{opacity:1;}45%{opacity:0.2;}46%{opacity:1;}}", "@keyframes blink-jsx-2999052750{40%{opacity:1;}42%{opacity:0.8;}43%{opacity:1;}45%{opacity:0.2;}46%{opacity:1;}}"]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlankComponent);

/***/ })

};
;