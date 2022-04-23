"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 8038:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: ./redux/store.js + 2 modules
var store = __webpack_require__(5416);
// EXTERNAL MODULE: ./theme/theme.js + 13 modules
var theme = __webpack_require__(6356);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Layout/Seo.jsx



function Seo({
  title
}) {
  return /*#__PURE__*/jsx_runtime_.jsx((head_default()), {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("title", {
      children: ["Doremi Games ", title.length == 0 ? null : "|", " ", title, " "]
    })
  });
}
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./pages/_app.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const MyApp = ({
  Component,
  pageProps
}) => {
  const router = (0,router_.useRouter)();

  function matchingTitle(title) {
    if (title.includes("game")) {
      return "game";
    } else if (title.includes("home")) {
      return "home";
    } else if (title.includes("rank")) {
      return "rank";
    } else if (title.includes("market")) {
      return "market";
    } else if (title.includes("nft")) {
      return "nft";
    } else if (title.includes("mypage")) {
      return "mypage";
    } else {
      return "";
    }
  }

  const getLayout = Component.getLayout || (page => page);

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.ChakraProvider, {
    theme: theme/* default */.Z,
    resetCss: false,
    children: [/*#__PURE__*/jsx_runtime_.jsx(Seo, {
      title: matchingTitle(router.pathname.slice(1, 10))
    }), getLayout( /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps)))]
  });
};

/* harmony default export */ const _app = (store/* default.withRedux */.Z.withRedux(MyApp));

/***/ }),

/***/ 8930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 429:
/***/ ((module) => {

module.exports = require("@chakra-ui/theme-tools");

/***/ }),

/***/ 5648:
/***/ ((module) => {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6695:
/***/ ((module) => {

module.exports = require("redux");

/***/ }),

/***/ 173:
/***/ ((module) => {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ 8417:
/***/ ((module) => {

module.exports = require("redux-thunk");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [977], () => (__webpack_exec__(8038)));
module.exports = __webpack_exports__;

})();