"use strict";
exports.id = 933;
exports.ids = [933];
exports.modules = {

/***/ 5933:
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






const Countdown = props => {
  const endTime = props.remain;
  const remainTime = endTime - Date.now();
  const {
    0: remainingTime,
    1: setRemainingTime
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("00:00:00");
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (remainTime <= 0) return;
    const intervalId = setInterval(() => {
      if (remainTime < 1000) {
        console.log(remainTime);
        props.setEnd(true);
        return;
      }

      updateRemainingTime();
    }, 1000);
    return () => clearInterval(intervalId);
  }, [remainingTime]);

  function updateRemainingTime() {
    const date = new Date(remainTime);
    const remainSec = ("0" + date.getSeconds()).slice(-2);
    const remainMin = ("0" + date.getMinutes()).slice(-2);
    const remainHour = Math.floor(remainTime / 1000 / 60 / 60);
    const countdown = `${remainHour}:${remainMin}:${remainSec}`;
    setRemainingTime(countdown);
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    style: {
      marginTop: 20
    },
    className: "jsx-2228034785",
    children: [remainTime < 1000 ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
      className: "jsx-2228034785" + " " + "endAuction",
      children: "\uACBD\uB9E4 \uC885\uB8CC"
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "jsx-2228034785",
      children: ["\uB0A8\uC740 \uC2DC\uAC04 ", remainingTime]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
      id: "2228034785",
      children: ["div.jsx-2228034785{text-align:center;color:#df973a;font-weight:700;}", ".endAuction.jsx-2228034785{font-size:20px;color:#999494;}"]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Countdown);

/***/ })

};
;