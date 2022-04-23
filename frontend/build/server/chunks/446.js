"use strict";
exports.id = 446;
exports.ids = [446];
exports.modules = {

/***/ 1401:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
const _excluded = ["variant", "children"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




function Card(props) {
  const {
    variant,
    children
  } = props,
        rest = _objectWithoutProperties(props, _excluded);

  const styles = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.useStyleConfig)("Card", {
    variant
  }); // Pass the computed styles into the `__css` prop

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Box, _objectSpread(_objectSpread({
    __css: styles
  }, rest), {}, {
    children: children
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);

/***/ }),

/***/ 3447:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
const _excluded = ["variant", "children"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




function CardBody(props) {
  const {
    variant,
    children
  } = props,
        rest = _objectWithoutProperties(props, _excluded);

  const styles = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.useStyleConfig)("CardBody", {
    variant
  }); // Pass the computed styles into the `__css` prop

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Box, _objectSpread(_objectSpread({
    __css: styles
  }, rest), {}, {
    children: children
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CardBody);

/***/ }),

/***/ 4231:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Configurator)
/* harmony export */ });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Separator_Separator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8119);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
const _excluded = ["secondary", "isOpen", "onClose", "fixed"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// Chakra Imports


 // import { FaTwitter, FaFacebook } from "react-icons/fa";``




function Configurator(props) {
  const {
    secondary,
    isOpen,
    onClose,
    fixed
  } = props,
        rest = _objectWithoutProperties(props, _excluded);

  const {
    0: switched,
    1: setSwitched
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(props.isChecked);
  const {
    colorMode,
    toggleColorMode
  } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.useColorMode)(); // Chakra Color Mode

  let fixedDisplay = "flex";

  if (props.secondary) {
    fixedDisplay = "none";
  }

  let bgButton = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.useColorModeValue)("linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)", "white");
  let colorButton = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.useColorModeValue)("white", "gray.700");
  const secondaryButtonBg = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.useColorModeValue)("white", "transparent");
  const secondaryButtonBorder = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.useColorModeValue)("gray.700", "white");
  const secondaryButtonColor = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.useColorModeValue)("gray.700", "white");
  const settingsRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Drawer, {
      isOpen: props.isOpen,
      onClose: props.onClose,
      placement: "right",
      finalFocusRef: settingsRef,
      blockScrollOnMount: false,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.DrawerContent, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.DrawerHeader, {
          pt: "24px",
          px: "24px",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.DrawerCloseButton, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Text, {
            fontSize: "xl",
            fontWeight: "bold",
            mt: "16px",
            children: "Doremi Games settings"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Text, {
            fontSize: "md",
            mb: "16px",
            children: "See your page's options."
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components_Separator_Separator__WEBPACK_IMPORTED_MODULE_1__/* .Separator */ .Z, {})]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.DrawerBody, {
          w: "340px",
          ps: "24px",
          pe: "40px",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Flex, {
            flexDirection: "column",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Box, {
              mb: 8,
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Text, {
                fontSize: "md",
                fontWeight: "600",
                children: "Side navigation Type"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Text, {
                fontSize: "sm",
                mb: "16px",
                children: "There are 2 different background types."
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Flex, {
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Button, {
                  w: "50%",
                  p: "8px 32px",
                  me: "8px",
                  colorScheme: "teal",
                  borderColor: "teal.300",
                  color: "teal.300",
                  variant: "outline",
                  fontSize: "xs",
                  onClick: props.onTransparent,
                  children: "Transparent"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Button, {
                  type: "submit",
                  bg: "teal.300",
                  w: "50%",
                  p: "8px 32px",
                  mb: 5,
                  _hover: "teal.300",
                  color: "white",
                  fontSize: "xs",
                  onClick: props.onOpaque,
                  children: "Opaque"
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Box, {
              display: fixedDisplay,
              justifyContent: "space-between",
              mb: "16px",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Text, {
                fontSize: "md",
                fontWeight: "600",
                mb: "4px",
                children: "Top Navbar Fixed"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Switch, {
                colorScheme: "teal",
                isChecked: switched,
                onChange: event => {
                  if (switched === true) {
                    props.onSwitch(false);
                    setSwitched(false);
                  } else {
                    props.onSwitch(true);
                    setSwitched(true);
                  }
                }
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Flex, {
              justifyContent: "space-between",
              alignItems: "center",
              mb: "24px",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Text, {
                fontSize: "md",
                fontWeight: "600",
                mb: "4px",
                children: "Dark Mode"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Switch, {
                colorScheme: "teal",
                onChange: toggleColorMode
              })]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components_Separator_Separator__WEBPACK_IMPORTED_MODULE_1__/* .Separator */ .Z, {})]
          })
        })]
      })
    })
  });
}

/***/ }),

/***/ 4436:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ FixedPlugin)
/* harmony export */ });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Icons_Icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1914);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
const _excluded = ["secondary", "onChange", "onSwitch", "fixed"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// Chakra Imports
 // Custom Icons





function FixedPlugin(props) {
  const {
    secondary,
    onChange,
    onSwitch,
    fixed
  } = props,
        rest = _objectWithoutProperties(props, _excluded); // Chakra Color Mode


  let navbarIcon = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.useColorModeValue)("gray.500", "gray.200");
  let bgButton = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.useColorModeValue)("white", "gray.600");
  let fixedDisplay = "flex";

  if (props.secondary) {
    fixedDisplay = "none";
  }

  const settingsRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Button, {
      h: "52px",
      w: "52px",
      onClick: props.onOpen,
      bg: bgButton,
      position: "fixed",
      variant: "no-hover",
      right: "35px",
      bottom: "30px",
      borderRadius: "50px",
      boxShadow: "0 2px 12px 0 rgb(0 0 0 / 16%)",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components_Icons_Icons__WEBPACK_IMPORTED_MODULE_1__/* .SettingsIcon */ .ew, {
        cursor: "pointer",
        ref: settingsRef,
        color: navbarIcon,
        w: "20px",
        h: "20px"
      })
    })
  });
}

/***/ }),

/***/ 6964:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);



function Footer() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Flex, {
    flexDirection: {
      base: "column",
      xl: "row"
    },
    alignItems: {
      base: "center",
      xl: "start"
    },
    justifyContent: "space-between",
    px: "30px",
    pb: "20px",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Text, {
      color: "gray.400",
      textAlign: {
        base: "center",
        xl: "start"
      },
      mb: {
        base: "20px",
        xl: "0px"
      },
      children: ["\xA9 ", 1900 + new Date().getYear(), ",", " ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Text, {
        as: "span",
        children: "Made by ❤️"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Link, {
        color: "teal.400",
        href: "https://github.com/domisolidity/NFT_GAME",
        target: "_blank",
        children: " Doremi Games"
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.List, {
      display: "flex",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.ListItem, {
        me: {
          base: "20px",
          md: "44px"
        },
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Link, {
          color: "gray.400",
          href: "https://github.com/domisolidity/NFT_GAME",
          children: "Doremifa Solidity"
        })
      })
    })]
  });
}

/***/ }),

/***/ 3194:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Home_ClaimInfoCard)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "@chakra-ui/icons"
var icons_ = __webpack_require__(4513);
// EXTERNAL MODULE: ./hooks/currentTime.js
var currentTime = __webpack_require__(7936);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Home/ClaimHistory.jsx









const ClaimHistory = props => {
  const blockchain = (0,external_react_redux_.useSelector)(data => data.blockchain);
  const {
    account
  } = blockchain;
  const claimHistory = props.history;
  const getClaimHistory = props.updateHistory;

  const updateHistory = () => {
    getClaimHistory();
  };

  (0,external_react_.useEffect)(async () => {
    if (!account || !claimHistory) return;
    console.log(claimHistory);
    console.log(claimHistory == []);
  }, [account, claimHistory]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Box, {
    m: "0 auto",
    children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
      bg: "#10495F",
      p: "3",
      mb: "5",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Text, {
        fontSize: "20",
        children: ["Claim History", " ", /*#__PURE__*/jsx_runtime_.jsx("span", {
          style: {
            marginLeft: 10
          },
          children: /*#__PURE__*/jsx_runtime_.jsx(react_.Button, {
            variant: "ghost",
            onClick: updateHistory,
            children: /*#__PURE__*/jsx_runtime_.jsx(icons_.RepeatIcon, {})
          })
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(react_.TableContainer, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Table, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Thead, {
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Tr, {
            children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Th, {
              children: "Reward Type"
            }), /*#__PURE__*/jsx_runtime_.jsx(react_.Th, {
              children: "Reward Amount"
            }), /*#__PURE__*/jsx_runtime_.jsx(react_.Th, {
              children: "Time"
            }), /*#__PURE__*/jsx_runtime_.jsx(react_.Th, {
              children: "detail"
            })]
          })
        }), claimHistory ? claimHistory.map((history, i) => {
          return /*#__PURE__*/jsx_runtime_.jsx(react_.Tbody, {
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Tr, {
              children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Td, {
                children: history.value.rewardType
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Td, {
                children: [" + ", history.value.amount]
              }), /*#__PURE__*/jsx_runtime_.jsx(react_.Td, {
                children: (0,currentTime/* todayTimeFormal */.f)(Number(history.value.time))
              }), /*#__PURE__*/jsx_runtime_.jsx(react_.Td, {
                children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                  href: `https://rinkeby.etherscan.io/tx/${history.tx}`,
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    style: {
                      color: "#8eb8e0"
                    },
                    children: "view etherscan"
                  })
                })
              })]
            })
          }, i);
        }) : null]
      })
    }), claimHistory && claimHistory.length == 0 && /*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
      align: "center",
      mt: "5",
      children: "no data"
    })]
  });
};

/* harmony default export */ const Home_ClaimHistory = (ClaimHistory);
;// CONCATENATED MODULE: ./components/Home/MissionClaimCard.jsx








const MissionClaimCard = props => {
  const rewardAmount = props.reward;
  const updateReward = props.updateReward;
  const blockchain = (0,external_react_redux_.useSelector)(state => state.blockchain);
  const {
    account,
    claim20_Contract
  } = blockchain;
  const {
    0: loading,
    1: setLoading
  } = (0,external_react_.useState)(false); // const test = async () => {
  //   await gameTokenContract.methods
  //     .allowance(claim20_Contract._address, account)
  //     .call()
  //     .then((res) => {
  //       console.log(res);
  //     });
  // };
  // const test1 = async () => {
  //   await gameTokenContract.methods
  //     .balanceOf(claim20_Contract._address)
  //     .call()
  //     .then((res) => {
  //       console.log(res);
  //     });
  // };

  const claimReward = async () => {
    try {
      setLoading(true);
      await claim20_Contract.methods.claim_mission(account, rewardAmount, Date.now()).send({
        from: account
      }).then(async res => {
        console.log(res);

        if (res.status) {
          await external_axios_default().post("/api/users/deleteMission", {
            account: account
          }).then(res => {
            console.log(res);
          });
        }

        setLoading(false);
      });
      await updateReward();
    } catch (error) {
      setLoading(false);
    }
  };

  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Flex, {
      w: "20vw",
      border: "solid 2px #007983",
      borderRadius: 10,
      p: 5,
      direction: "column",
      align: "center",
      m: "15px auto",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Flex, {
        children: ["(\uC544\uC774\uCF58 + )", /*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
          color: "#87d57e",
          children: " Mission reward"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Flex, {
        direction: "column",
        children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
          children: "\uD074\uB808\uC784 \uAC00\uB2A5 \uC218\uB7C9"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Box, {
          children: ["\uC544\uC774\uCF58", rewardAmount]
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(react_.Button, {
        bgGradient: "linear(to-r, #007983, #87D57E)",
        isLoading: loading ? 1 : null,
        loadingText: "claiming..",
        onClick: claimReward,
        borderRadius: 5,
        mt: "5",
        children: "Claim"
      })]
    })
  });
};

/* harmony default export */ const Home_MissionClaimCard = (MissionClaimCard);
;// CONCATENATED MODULE: ./components/Home/RankingClaimCard.jsx








const RankingClaimCard = props => {
  const claimInfo = props.claimInfo;
  const rewardAmount = props.reward;
  const updateReward = props.updateReward;
  const blockchain = (0,external_react_redux_.useSelector)(state => state.blockchain);
  const {
    account,
    claim20_Contract
  } = blockchain;
  const {
    0: loading,
    1: setLoading
  } = (0,external_react_.useState)(false); // 랭킹 클레임

  const claimRank = async () => {
    try {
      console.log("클레임");

      if (claimInfo.length == 0) {
        alert("보상 받을 리워드가 없습니다.");
        return;
      }

      for (let i = 0; i < claimInfo.length; i++) {
        if (claimInfo[i].isApproved == false || claimInfo[i].isRewarded == true) {
          alert("이미 보상 받았거나 아직 승인 받지 않았습니다.");
        }
      }

      console.log(claimInfo);
      setLoading(true);
      await claim20_Contract.methods.claim_rank(claimInfo, Date.now()).send({
        from: account
      }).then(async res => {
        console.log(res);

        if (res.status) {
          alert("클레임 성공");
          await external_axios_default().post("/api/users/rewarded", {
            rank: claimInfo
          }).then(res => {
            console.log(res);
          });
        }

        setLoading(false);
      });
      await updateReward();
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Flex, {
      w: "20vw",
      border: "solid 2px #007983",
      borderRadius: 10,
      p: 5,
      direction: "column",
      align: "center",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Flex, {
        children: ["(\uC544\uC774\uCF58 + )", /*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
          color: "#87d57e",
          children: " Ranking reward"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Flex, {
        direction: "column",
        children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
          children: "\uD074\uB808\uC784 \uAC00\uB2A5 \uC218\uB7C9"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Box, {
          children: ["\uC544\uC774\uCF58", rewardAmount]
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(react_.Button, {
        bgGradient: "linear(to-r, #007983, #87D57E)",
        isLoading: loading ? 1 : null,
        loadingText: "claiming..",
        onClick: claimRank,
        borderRadius: 5,
        mt: "5",
        children: "Claim"
      })]
    })
  });
};

/* harmony default export */ const Home_RankingClaimCard = (RankingClaimCard);
;// CONCATENATED MODULE: ./components/Home/ClaimInfoCard.jsx











const ClaimInfoCard = props => {
  const blockchain = (0,external_react_redux_.useSelector)(state => state.blockchain);
  const {
    account,
    claim20_Contract
  } = blockchain;
  const {
    0: rewardAmount_rank,
    1: setRewardAmount_rank
  } = (0,external_react_.useState)(0);
  const {
    0: rewardAmount_mission,
    1: setRewardAmount_mission
  } = (0,external_react_.useState)(0);
  const {
    0: claimableRank,
    1: setClaimableRank
  } = (0,external_react_.useState)([]);
  const {
    0: claimableMission,
    1: setClaimableMission
  } = (0,external_react_.useState)([]);
  const {
    0: claimHistory,
    1: setClaimHistory
  } = (0,external_react_.useState)(); // 보상 수량 조회

  const getRewardAmount = async () => {
    await external_axios_default().post("/api/users/claimable-rank", {
      data: account
    }).then(rank => {
      console.log(rank);
      let rewardData = [];
      let rankRewardAmount = 0;

      for (let i = 0; i < rank.data.length; i++) {
        console.log(rank.data.ranking);

        if (rank.data[i].ranking == 1) {
          rankRewardAmount += 50;
        } else if (rank.data[i].ranking == 2) {
          rankRewardAmount += 30;
        } else if (rank.data[i].ranking == 3) {
          rankRewardAmount += 10;
        }

        rewardData.push(Object.values(rank.data[i]));
      }

      setRewardAmount_rank(rankRewardAmount);
      setClaimableRank(rewardData);
    });
    await external_axios_default().post("/api/users/claimable-mission", {
      data: account
    }).then(mission => {
      console.log(mission);
      let missionRewardData = [];

      for (let i = 0; i < mission.data.length; i++) {
        missionRewardData.push(Object.values(mission.data[i]));
      }

      setRewardAmount_mission(mission.data.length);
      setClaimableMission(missionRewardData);
      props.onUpdate();
    });
  }; // 클레임 히스토리 조회


  const getClaimHistory = async () => {
    await claim20_Contract.getPastEvents("ClaimEvent", {
      filter: {
        account: account
      },
      fromBlock: 0,
      toBlock: "latest"
    }).then(res => {
      console.log(res);
      let returnValuesArr = [];

      for (const history of res) {
        returnValuesArr.push({
          value: history.returnValues,
          tx: history.transactionHash
        });
      }

      setClaimHistory(returnValuesArr);
    }).catch(console.error);
  };

  (0,external_react_.useEffect)(async () => {
    if (!account) return;
    await getRewardAmount();
    await getClaimHistory();
    console.log(account);
    console.log(claim20_Contract);
    return () => {
      setRewardAmount_mission(0);
      setRewardAmount_rank(0);
    };
  }, [account]);
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Grid, {
      templateColumns: "repeat(4, 1fr)",
      mt: "10",
      gap: 5,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.GridItem, {
        colSpan: 1,
        children: [/*#__PURE__*/jsx_runtime_.jsx(Home_RankingClaimCard, {
          claimInfo: claimableRank,
          reward: rewardAmount_rank,
          updateReward: getRewardAmount
        }), /*#__PURE__*/jsx_runtime_.jsx(Home_MissionClaimCard, {
          claimInfo: claimableMission,
          reward: rewardAmount_mission,
          updateReward: getRewardAmount
        }), /*#__PURE__*/jsx_runtime_.jsx(Home_MissionClaimCard, {
          claimInfo: claimableMission,
          reward: rewardAmount_mission,
          updateReward: getRewardAmount
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(react_.GridItem, {
        bg: "whiteAlpha.200",
        colSpan: 3,
        children: /*#__PURE__*/jsx_runtime_.jsx(Home_ClaimHistory, {
          history: claimHistory,
          updateHistory: getClaimHistory
        })
      })]
    })
  });
};

/* harmony default export */ const Home_ClaimInfoCard = (ClaimInfoCard);

/***/ }),

/***/ 259:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Card_Card_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1401);
/* harmony import */ var _Card_CardBody_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3447);
/* harmony import */ var _Icons_IconBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3569);
/* harmony import */ var _Separator_Separator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8119);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
// Chakra imports
 // Custom components








const MiniStatus = ({
  title,
  amount,
  unit,
  icon
}) => {
  const iconTeal = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.useColorModeValue)("teal.300", "teal.300");
  const textColor = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.useColorModeValue)("gray.700", "white");
  const unitColor = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.useColorModeValue)("teal.300", "teal.300");
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_Card_Card_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    minH: "83px",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Flex, {
        flexDirection: "row",
        align: "center",
        justify: "center",
        w: "100%",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Stat, {
          me: "auto",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.StatLabel, {
            fontSize: "sm",
            color: "gray.400",
            fontWeight: "bold",
            pb: ".1rem",
            children: title
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Flex, {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.StatNumber, {
              fontSize: "lg",
              color: textColor,
              children: amount
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.StatHelpText, {
              alignSelf: "flex-end",
              justifySelf: "flex-end",
              ml: "8px" // color={percentage > 0 ? "green.400" : "red.400"}
              ,
              color: unitColor,
              fontWeight: "bold",
              ps: "3px",
              fontSize: "md",
              children: unit ? unit : null
            })]
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_Icons_IconBox__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
          as: "box",
          h: "45px",
          w: "45px",
          bg: iconTeal,
          children: icon
        })]
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MiniStatus);

/***/ }),

/***/ 3569:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ IconBox)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
const _excluded = ["children"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




function IconBox(props) {
  const {
    children
  } = props,
        rest = _objectWithoutProperties(props, _excluded);

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, _objectSpread(_objectSpread({
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "12px"
  }, rest), {}, {
    children: children
  }));
}

/***/ }),

/***/ 1914:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w7": () => (/* binding */ CartIcon),
/* harmony export */   "Cw": () => (/* binding */ TimLogo),
/* harmony export */   "$l": () => (/* binding */ DocumentIcon),
/* harmony export */   "n9": () => (/* binding */ GlobeIcon),
/* harmony export */   "tv": () => (/* binding */ HomeIcon),
/* harmony export */   "Tk": () => (/* binding */ PersonIcon),
/* harmony export */   "WC": () => (/* binding */ RocketIcon),
/* harmony export */   "ew": () => (/* binding */ SettingsIcon),
/* harmony export */   "RO": () => (/* binding */ StatsIcon),
/* harmony export */   "o": () => (/* binding */ WalletIcon)
/* harmony export */ });
/* unused harmony exports ClockIcon, CreditIcon, DashboardLogo, DashboardLogoWhite, HelpIcon, ProfileIcon, SupportIcon */
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4513);
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);



const CartIcon = (0,_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_0__.createIcon)({
  displayName: "CartIcon",
  viewBox: "0 0 24 24",
  path: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
    fill: "currentColor",
    d: "M7.984 19.937a1.406 1.406 0 100-2.812 1.406 1.406 0 000 2.812zM17.828 19.937a1.406 1.406 0 100-2.812 1.406 1.406 0 000 2.812zM20.324 5.558a1.051 1.051 0 00-.815-.386H6.134l-.27-1.528a.703.703 0 00-.692-.581H2.359a.703.703 0 000 1.406h2.223L6.59 15.841a.703.703 0 00.692.581h11.25a.703.703 0 100-1.406H7.871l-.248-1.406h10.62a1.057 1.057 0 001.035-.848l1.266-6.328a1.055 1.055 0 00-.22-.876z"
  })
});
const ClockIcon = (0,_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_0__.createIcon)({
  displayName: "ClockIcon",
  viewBox: "0 0 24 24",
  path: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("g", {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("g", {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("rect", {
        fill: "none",
        height: "24",
        width: "24"
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("g", {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("g", {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("g", {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
            fill: "currentColor",
            d: "M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10S17.5,2,12,2z M16.2,16.2L11,13V7h1.5v5.2l4.5,2.7L16.2,16.2z"
          })
        })
      })
    })]
  })
});
const TimLogo = (0,_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_0__.createIcon)({
  displayName: "Doremi Games",
  viewBox: "0 0 100 100",
  path: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("g", {
    transform: "translate(0.000000,96.000000) scale(0.100000,-0.100000)",
    fill: "currentColor",
    stroke: "none",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      d: "M440 947 c0 -8 -44 -37 -97 -64 -131 -67 -167 -87 -173 -94 -5 -6\r\n-51 -31 -87 -48 -41 -19 -45 -40 -41 -279 l3 -226 85 -52 c47 -29 90 -57 97\r\n-63 7 -6 15 -11 19 -11 3 0 40 -20 81 -45 40 -25 80 -45 88 -45 7 0 17 -4 20\r\n-10 8 -13 50 -13 73 -1 9 5 37 19 62 31 49 23 82 42 90 51 3 3 13 8 22 12 10\r\n3 62 35 116 71 l98 64 3 227 c2 193 0 230 -14 251 -8 13 -21 24 -27 24 -6 0\r\n-19 6 -27 14 -17 15 -107 65 -243 134 -49 25 -88 51 -88 58 0 9 -11 14 -30 14\r\n-19 0 -30 -5 -30 -13z m57 -84 c12 -31 84 -147 119 -189 18 -23 30 -44 27 -48\r\n-4 -3 -30 -6 -60 -6 -46 0 -53 -3 -53 -20 0 -22 26 -31 79 -27 37 2 50 -13 28\r\n-34 -19 -20 -111 -177 -133 -227 -23 -54 -45 -54 -68 1 -22 49 -114 206 -133\r\n226 -22 21 -9 36 28 34 53 -4 79 5 79 27 0 17 -7 20 -53 20 -30 0 -56 3 -60 6\r\n-3 4 9 25 27 48 35 42 107 158 119 189 3 9 16 17 27 17 11 0 24 -8 27 -17z\r\nm-117 -22 c0 -5 -19 -35 -42 -68 -55 -75 -66 -93 -78 -120 -12 -29 -21 -29\r\n-68 0 -20 13 -45 26 -54 30 -29 11 -21 23 34 51 29 15 85 47 123 71 73 46 85\r\n51 85 36z m210 -1 c0 -5 4 -10 9 -10 6 0 29 -13 53 -29 24 -16 71 -43 106 -61\r\n65 -34 74 -46 45 -57 -10 -4 -35 -17 -55 -30 -21 -13 -42 -23 -47 -23 -5 0\r\n-18 18 -29 39 -12 22 -41 67 -66 101 -49 67 -54 80 -31 80 8 0 15 -4 15 -10z\r\nm-427 -220 c51 -33 56 -45 29 -81 -17 -24 -75 -139 -86 -172 -15 -46 -22 3\r\n-19 135 1 79 2 144 3 146 1 9 32 -3 73 -28z m691 -110 c1 -74 0 -141 -2 -149\r\n-3 -7 -24 24 -46 70 -23 46 -49 95 -59 109 -9 13 -17 30 -17 37 0 16 90 74\r\n108 70 11 -1 14 -33 16 -137z m-564 -37 c38 -74 91 -165 100 -173 3 -3 13 -17\r\n22 -32 22 -33 9 -40 -53 -26 -24 5 -91 12 -149 16 -118 8 -121 11 -76 77 13\r\n19 42 72 65 119 23 48 45 86 49 86 4 0 23 -30 42 -67z m451 -19 c23 -47 52\r\n-100 65 -119 45 -66 42 -69 -76 -77 -58 -4 -125 -11 -149 -16 -62 -14 -75 -7\r\n-53 26 9 15 19 29 22 32 9 8 61 98 100 172 19 37 38 68 42 68 4 0 26 -38 49\r\n-86z m-309 -263 c5 -4 10 -35 13 -69 6 -75 0 -77 -76 -26 -30 20 -78 47 -106\r\n60 -85 39 -71 51 55 46 59 -2 110 -7 114 -11z m298 4 c0 -8 -24 -26 -52 -40\r\n-65 -32 -83 -42 -129 -77 -48 -36 -60 -26 -54 47 3 33 8 62 13 67 4 4 48 9 97\r\n11 50 1 98 4 108 5 9 1 17 -5 17 -13z"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      d: "M450 620 c-12 -7 -12 -13 -4 -27 6 -10 17 -18 24 -18 7 0 18 8 24 18\r\n8 14 8 20 -4 27 -8 5 -17 10 -20 10 -3 0 -12 -5 -20 -10z"
    })]
  })
});
const CreditIcon = (0,_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_0__.createIcon)({
  displayName: "CreditIcon",
  viewBox: "0 0 24 24",
  path: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
    fill: "currentColor",
    d: "M1.406 17.023a2.461 2.461 0 002.461 2.46h14.766a2.461 2.461 0 002.46-2.46v-6.768H1.407v6.768zm2.9-3.34a1.318 1.318 0 011.319-1.318h2.11a1.318 1.318 0 011.318 1.318v.879a1.318 1.318 0 01-1.319 1.318H5.625a1.318 1.318 0 01-1.318-1.318v-.879zM18.633 4.014H3.867a2.46 2.46 0 00-2.46 2.461v1.143h19.687V6.475a2.46 2.46 0 00-2.461-2.46z"
  })
});
const DashboardLogo = (0,_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_0__.createIcon)({
  displayName: "DashboardLogo",
  viewBox: "0 0 1000 257",
  path: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("g", {
    width: "998",
    height: "257",
    viewBox: "0 0 998 257",
    fill: "none",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("g", {
      clipPath: "url(#clip0)",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
        d: "M388.5 115.302C406.112 115.302 413.966 126.726 416.584 136.96L441.336 127.916C436.576 109.352 419.44 89.836 388.262 89.836C354.942 89.836 329 115.54 329 151.24C329 186.464 354.942 212.882 388.976 212.882C419.44 212.882 436.814 193.128 442.288 175.04L418.012 166.234C415.394 175.04 407.064 187.654 388.976 187.654C371.602 187.654 356.608 174.564 356.608 151.24C356.608 127.916 371.602 115.302 388.5 115.302Z",
        fill: "currentColor"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
        d: "M484.894 141.244C485.37 126.488 493.7 115.064 508.932 115.064C526.306 115.064 532.732 126.488 532.732 140.768V209.312H560.34V136.008C560.34 110.542 546.536 90.074 517.976 90.074C505.838 90.074 492.748 94.358 484.894 104.592V37H457.286V209.312H484.894V141.244Z",
        fill: "currentColor"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
        d: "M577.29 177.896C577.29 196.222 592.284 212.882 616.56 212.882C635.362 212.882 646.786 203.362 652.26 194.556C652.26 203.838 653.212 208.598 653.45 209.312H679.154C678.916 208.122 677.726 201.22 677.726 190.748V133.152C677.726 110.066 664.16 89.836 628.46 89.836C599.9 89.836 581.812 107.686 579.67 127.678L604.898 133.39C606.088 121.728 614.18 112.446 628.698 112.446C643.93 112.446 650.594 120.3 650.594 130.058C650.594 134.104 648.69 137.436 642.026 138.388L612.276 142.91C592.522 145.766 577.29 157.19 577.29 177.896ZM621.796 191.224C610.848 191.224 604.898 184.084 604.898 176.23C604.898 166.71 611.8 161.95 620.368 160.522L650.594 156V161.236C650.594 183.846 637.266 191.224 621.796 191.224Z",
        fill: "currentColor"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
        d: "M810.108 93.406H773.456L728.95 140.292V37H701.58V209.312H728.95V176.944L743.23 161.95L777.264 209.312H811.06L762.508 142.434L810.108 93.406Z",
        fill: "currentColor"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
        d: "M889.349 92.692C888.159 92.454 885.303 91.978 881.971 91.978C866.739 91.978 853.887 99.356 848.413 111.97V93.406H821.519V209.312H849.127V154.096C849.127 132.438 858.885 120.062 880.305 120.062C883.161 120.062 886.255 120.3 889.349 120.776V92.692Z",
        fill: "currentColor"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
        d: "M895.968 177.896C895.968 196.222 910.962 212.882 935.238 212.882C954.04 212.882 965.464 203.362 970.938 194.556C970.938 203.838 971.89 208.598 972.128 209.312H997.832C997.594 208.122 996.404 201.22 996.404 190.748V133.152C996.404 110.066 982.838 89.836 947.138 89.836C918.578 89.836 900.49 107.686 898.348 127.678L923.576 133.39C924.766 121.728 932.858 112.446 947.376 112.446C962.608 112.446 969.272 120.3 969.272 130.058C969.272 134.104 967.368 137.436 960.704 138.388L930.954 142.91C911.2 145.766 895.968 157.19 895.968 177.896ZM940.474 191.224C929.526 191.224 923.576 184.084 923.576 176.23C923.576 166.71 930.478 161.95 939.046 160.522L969.272 156V161.236C969.272 183.846 955.944 191.224 940.474 191.224Z",
        fill: "currentColor"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("rect", {
        width: "257",
        height: "257",
        rx: "128.5",
        fill: "#4FD1C5"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
        d: "M69.5584 133.985L157.15 46.9959C158.787 45.3708 161.42 47.3484 160.315 49.3729L127.714 109.125C126.987 110.457 127.951 112.083 129.47 112.083H185.809C187.624 112.083 188.501 114.306 187.174 115.545L88.4456 207.687C86.6753 209.339 84.0405 207.011 85.4617 205.051L132.197 140.578C133.156 139.256 132.211 137.404 130.578 137.404H70.9677C69.1826 137.404 68.2917 135.243 69.5584 133.985Z",
        fill: "white"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("defs", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("linearGradient", {
        id: "paint0_linear",
        x1: "128.5",
        y1: "0",
        x2: "128.5",
        y2: "257",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("stop", {
          stopColor: "#7BCBD4"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("stop", {
          offset: "1",
          stopColor: "#29C6B7"
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("clipPath", {
        id: "clip0",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("rect", {
          width: "997.832",
          height: "257",
          fill: "white"
        })
      })]
    })]
  })
});
const DashboardLogoWhite = (0,_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_0__.createIcon)({
  displayName: "DashboardLogo",
  viewBox: "0 0 163.5 42",
  path: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("g", {
    fill: "none",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      d: "M63.452 19.292c2.877 0 4.16 1.911 4.587 3.623l4.043-1.513c-.777-3.106-3.576-6.371-8.668-6.371-5.443 0-9.68 4.3-9.68 10.274 0 5.893 4.237 10.313 9.796 10.313 4.976 0 7.813-3.305 8.707-6.331l-3.965-1.473c-.427 1.473-1.788 3.583-4.742 3.583-2.837 0-5.286-2.19-5.286-6.092 0-3.903 2.449-6.013 5.208-6.013zM79.196 23.632c.078-2.469 1.438-4.38 3.926-4.38 2.838 0 3.887 1.911 3.887 4.3v11.47h4.51V22.755c0-4.26-2.255-7.685-6.92-7.685-1.982 0-4.12.716-5.403 2.429V6.19h-4.509v28.831h4.51V23.632zM94.287 29.765c0 3.066 2.449 5.853 6.414 5.853 3.071 0 4.936-1.592 5.83-3.066 0 1.553.156 2.35.195 2.47h4.198c-.039-.2-.233-1.355-.233-3.107v-9.637c0-3.862-2.216-7.247-8.047-7.247-4.664 0-7.619 2.986-7.968 6.332l4.12.955c.194-1.951 1.516-3.504 3.887-3.504 2.488 0 3.576 1.314 3.576 2.947 0 .677-.311 1.234-1.399 1.393l-4.859.757c-3.226.478-5.714 2.39-5.714 5.854zm7.269 2.23c-1.788 0-2.76-1.195-2.76-2.509 0-1.593 1.127-2.39 2.527-2.628l4.936-.757v.876c0 3.783-2.176 5.018-4.703 5.018zM132.312 15.628h-5.986l-7.269 7.845V6.191h-4.47v28.83h4.47v-5.416l2.332-2.508 5.559 7.924h5.52l-7.93-11.19 7.774-8.203zM145.254 15.509a6.3 6.3 0 00-1.205-.12c-2.487 0-4.587 1.235-5.481 3.345v-3.106h-4.392v19.393h4.509v-9.238c0-3.624 1.594-5.695 5.092-5.695.467 0 .972.04 1.477.12v-4.7zM146.335 29.765c0 3.066 2.449 5.853 6.414 5.853 3.071 0 4.937-1.592 5.831-3.066 0 1.553.156 2.35.194 2.47h4.199c-.039-.2-.234-1.355-.234-3.107v-9.637c0-3.862-2.215-7.247-8.046-7.247-4.665 0-7.619 2.986-7.969 6.332l4.121.955c.194-1.951 1.516-3.504 3.887-3.504 2.488 0 3.576 1.314 3.576 2.947 0 .677-.311 1.234-1.399 1.393l-4.859.757c-3.227.478-5.715 2.39-5.715 5.854zm7.269 2.23c-1.788 0-2.759-1.195-2.759-2.509 0-1.593 1.127-2.39 2.526-2.628l4.937-.757v.876c0 3.783-2.177 5.018-4.704 5.018zM41.975 21.5C41.975 9.626 32.578 0 20.987 0 9.398 0 0 9.626 0 21.5S9.396 43 20.988 43c11.59 0 20.987-9.626 20.987-21.5z",
      fill: "#fff"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      d: "M11.36 22.418L25.668 7.863c.267-.272.697.06.517.398l-5.325 9.997c-.119.223.039.495.287.495h9.202c.296 0 .44.372.223.58L14.446 34.748c-.29.277-.72-.113-.488-.44l7.633-10.788c.157-.221.003-.531-.264-.531H11.59c-.292 0-.437-.362-.23-.572z",
      fill: "#3BCBBE"
    })]
  })
});
const DocumentIcon = (0,_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_0__.createIcon)({
  displayName: "DocumentIcon",
  viewBox: "0 0 24 24",
  path: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("g", {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      fill: "currentColor",
      d: "M18.809 10.344h-6.153a2.11 2.11 0 01-2.11-2.11V2.083a.176.176 0 00-.175-.176H6.328A2.812 2.812 0 003.516 4.72v14.063a2.812 2.812 0 002.812 2.812h9.844a2.812 2.812 0 002.812-2.813V10.52a.176.176 0 00-.175-.176z"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      fill: "currentColor",
      d: "M18.423 8.789l-6.32-6.32a.088.088 0 00-.15.062v5.705a.703.703 0 00.703.703h5.705a.088.088 0 00.062-.15z"
    })]
  })
});
const GlobeIcon = (0,_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_0__.createIcon)({
  displayName: "GlobeIcon",
  viewBox: "0 0 24 24",
  path: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("g", {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      stroke: "currentColor",
      fill: "transparent",
      d: "M11.25 2.109a9.14 9.14 0 100 18.281 9.14 9.14 0 000-18.281z",
      strokeWidth: ".75",
      strokeMiterlimit: "10"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      stroke: "currentColor",
      fill: "transparent",
      d: "M11.25 2.109C8.698 2.109 6.3 6.2 6.3 11.249c0 5.048 2.4 9.14 4.951 9.14 2.552 0 4.951-4.092 4.951-9.14 0-5.048-2.399-9.14-4.95-9.14z",
      strokeWidth: ".75",
      strokeMiterlimit: "10"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      stroke: "currentColor",
      fill: "transparent",
      d: "M5.156 5.156C6.836 6.349 8.952 7.06 11.25 7.06c2.298 0 4.414-.711 6.094-1.904"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      stroke: "currentColor",
      fill: "transparent",
      d: "M5.156 5.156C6.836 6.349 8.952 7.06 11.25 7.06c2.298 0 4.414-.711 6.094-1.904M17.344 17.344c-1.68-1.193-3.796-1.904-6.094-1.904-2.298 0-4.413.711-6.094 1.904",
      strokeWidth: ".75",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      stroke: "currentColor",
      fill: "transparent",
      d: "M11.25 2.109v18.28M20.39 11.249H2.11",
      strokeWidth: ".75",
      strokeMiterlimit: "10"
    })]
  })
});
const HelpIcon = (0,_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_0__.createIcon)({
  displayName: "HelpIcon",
  viewBox: "0 0 24 24",
  path: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
    fill: "currentColor",
    d: "M11.25 0C5.04 0 0 5.04 0 11.25S5.04 22.5 11.25 22.5 22.5 17.46 22.5 11.25 17.46 0 11.25 0zm-.352 17.813a1.172 1.172 0 110-2.344 1.172 1.172 0 010 2.344zm1.96-5.977c-.95.637-1.08 1.222-1.08 1.758a.82.82 0 11-1.641 0c0-1.284.59-2.305 1.806-3.121 1.13-.758 1.768-1.239 1.768-2.295 0-.718-.41-1.264-1.26-1.668-.199-.095-.644-.187-1.191-.18-.687.008-1.22.172-1.63.503-.775.623-.84 1.302-.84 1.312a.821.821 0 11-1.642-.08c.007-.142.106-1.425 1.452-2.507.698-.562 1.585-.854 2.636-.866.745-.01 1.444.117 1.918.34 1.418.672 2.198 1.79 2.198 3.146 0 1.982-1.325 2.872-2.494 3.658z"
  })
});
const HomeIcon = (0,_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_0__.createIcon)({
  displayName: "HomeIcon",
  viewBox: "0 0 24 24",
  path: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("g", {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      fill: "currentColor",
      d: "M11.494 4.951a.351.351 0 00-.486 0l-8.09 7.729a.352.352 0 00-.109.254v7.254a1.406 1.406 0 001.405 1.406h4.223a.703.703 0 00.704-.703v-5.976a.351.351 0 01.351-.352h3.516a.351.351 0 01.351.352v5.976a.703.703 0 00.704.703h4.22a1.407 1.407 0 001.407-1.406v-7.254a.35.35 0 00-.108-.254L11.494 4.95z"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      fill: "currentColor",
      d: "M21.574 11.23l-3.287-3.144V3.314a.703.703 0 00-.703-.703h-2.11a.703.703 0 00-.703.703V4.72l-2.545-2.434c-.239-.24-.593-.378-.976-.378-.38 0-.734.138-.972.379L.93 11.23a.717.717 0 00-.058.983.703.703 0 001.018.046l9.119-8.713a.352.352 0 01.486 0l9.12 8.713a.703.703 0 00.992-.019c.27-.28.248-.74-.033-1.01z"
    })]
  })
});
const PersonIcon = (0,_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_0__.createIcon)({
  displayName: "PersonIcon",
  viewBox: "0 0 24 24",
  path: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
    fill: "currentColor",
    d: "M14.618 3.338c-.855-.924-2.05-1.432-3.368-1.432-1.325 0-2.524.505-3.375 1.423-.86.928-1.28 2.188-1.181 3.55.195 2.686 2.239 4.87 4.556 4.87s4.358-2.184 4.556-4.87c.1-1.349-.322-2.607-1.188-3.541zM18.984 21.592H3.515a1.363 1.363 0 01-1.063-.489 1.552 1.552 0 01-.316-1.279c.371-2.058 1.529-3.786 3.348-5 1.616-1.076 3.664-1.67 5.766-1.67s4.15.594 5.765 1.67c1.82 1.214 2.977 2.942 3.348 5 .085.471-.03.937-.315 1.279a1.362 1.362 0 01-1.064.49z"
  })
});
const ProfileIcon = (0,_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_0__.createIcon)({
  displayName: "ProfileIcon",
  viewBox: "0 0 24 24",
  path: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("g", {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      d: "M0 0h24v24H0V0z",
      fill: "transparent"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      fill: "currentColor",
      d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v1c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-1c0-2.66-5.33-4-8-4z"
    })]
  })
});
const RocketIcon = (0,_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_0__.createIcon)({
  displayName: "RocketIcon",
  viewBox: "0 0 24 24",
  path: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("g", {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      fill: "currentColor",
      d: "M20.99 2.182a.209.209 0 00-.156-.16c-2.574-.63-8.521 1.613-11.743 4.833a13.93 13.93 0 00-1.566 1.85c-.994-.087-1.987-.014-2.834.355-2.39 1.052-3.085 3.796-3.279 4.976a.424.424 0 00.464.492l3.837-.423c.002.29.02.578.052.866.02.2.108.386.25.527l1.486 1.482a.86.86 0 00.528.25c.286.033.573.05.86.053l-.42 3.832a.424.424 0 00.492.464c1.178-.19 3.927-.885 4.972-3.274.37-.847.445-1.836.36-2.824a13.96 13.96 0 001.855-1.567c3.232-3.216 5.462-9.03 4.842-11.732zm-8.067 7.896a2.11 2.11 0 112.983-2.984 2.11 2.11 0 01-2.983 2.984z"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      fill: "currentColor",
      d: "M7.4 18.054c-.24.241-.627.335-1.092.416-1.044.178-1.967-.725-1.779-1.78.072-.401.283-.962.415-1.094a.192.192 0 00-.16-.328 2.636 2.636 0 00-1.544.753c-1.033 1.034-1.13 4.87-1.13 4.87s3.838-.097 4.872-1.13c.417-.417.682-.961.752-1.546.017-.184-.207-.293-.334-.16z"
    })]
  })
});
const SettingsIcon = (0,_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_0__.createIcon)({
  displayName: "SettingsIcon",
  viewBox: "0 0 24 24",
  // path can also be an array of elements, if you have multiple paths, lines, shapes, etc.
  path: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("g", {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      d: "M0,0h24v24H0V0z",
      fill: "none"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      fill: "currentColor",
      d: "M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"
    })]
  })
});
const SupportIcon = (0,_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_0__.createIcon)({
  // Doesn't display the full icon without w and h being specified
  displayName: "BuildIcon",
  viewBox: "0 0 24 24",
  path: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
    fill: "currentColor",
    d: "M20.885 5.547a.703.703 0 00-1.122-.176l-2.7 2.702a.708.708 0 01-.995 0l-1.167-1.169a.702.702 0 010-.994l2.689-2.69a.704.704 0 00-.21-1.138c-2.031-.908-4.566-.435-6.164 1.152-1.358 1.348-1.763 3.455-1.11 5.78a.698.698 0 01-.197.703L2.593 16.4a2.82 2.82 0 103.981 3.983l6.754-7.332a.699.699 0 01.693-.2 7.885 7.885 0 002.03.279c1.469 0 2.757-.475 3.686-1.39 1.72-1.695 1.983-4.57 1.148-6.192zM4.623 19.901a1.407 1.407 0 11-.305-2.797 1.407 1.407 0 01.305 2.797z"
  })
});
const StatsIcon = (0,_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_0__.createIcon)({
  displayName: "StatsIcon",
  viewBox: "0 0 24 24",
  path: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
    fill: "currentColor",
    d: "M4.57 22.297H3.164a1.055 1.055 0 01-1.055-1.054v-6.328a1.055 1.055 0 011.055-1.055H4.57a1.055 1.055 0 011.055 1.055v6.328a1.055 1.055 0 01-1.055 1.054zM14.414 22.296h-1.406a1.055 1.055 0 01-1.055-1.055V10.695a1.055 1.055 0 011.055-1.055h1.406a1.055 1.055 0 011.055 1.055V21.24a1.055 1.055 0 01-1.055 1.055zM19.336 22.297H17.93a1.055 1.055 0 01-1.055-1.055V5.773A1.055 1.055 0 0117.93 4.72h1.406a1.055 1.055 0 011.055 1.054v15.47a1.055 1.055 0 01-1.055 1.054zM9.492 22.297H8.086a1.055 1.055 0 01-1.055-1.055V2.257a1.055 1.055 0 011.055-1.054h1.406a1.055 1.055 0 011.055 1.054v18.985a1.055 1.055 0 01-1.055 1.055z"
  })
});
const WalletIcon = (0,_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_0__.createIcon)({
  displayName: "WalletIcon",
  viewBox: "0 0 24 24",
  path: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("g", {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      fill: "currentColor",
      d: "M4.447 4.818h14.062c.164 0 .328.01.491.031a2.9 2.9 0 00-3.406-2.441L4.03 4.382h-.013a2.9 2.9 0 00-1.805 1.149 3.848 3.848 0 012.236-.713zM18.51 5.875H4.446a2.816 2.816 0 00-2.813 2.812v8.438a2.816 2.816 0 002.813 2.812h14.062a2.815 2.815 0 002.813-2.812V8.687a2.815 2.815 0 00-2.813-2.812zm-2.088 8.437a1.406 1.406 0 110-2.811 1.406 1.406 0 010 2.811z"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      fill: "currentColor",
      d: "M1.656 11.651V7.28c0-.952.528-2.549 2.358-2.895 1.553-.291 3.091-.291 3.091-.291s1.011.703.176.703-.813 1.077 0 1.077 0 1.032 0 1.032L4.007 10.62l-2.35 1.032z"
    })]
  })
});

/***/ }),

/***/ 2109:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SideBarScreen)
/* harmony export */ });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Configurator_Configurator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4231);
/* harmony import */ var _Footer_Footer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6964);
/* harmony import */ var _Navbars_Navbar_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9220);
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5229);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3446);
/* harmony import */ var _theme_theme_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6356);
/* harmony import */ var _FixedPlugin_FixedPlugin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4436);
/* harmony import */ var _MainPanel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2144);
/* harmony import */ var _PanelContainer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8766);
/* harmony import */ var _PanelContent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9958);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Navbars_Navbar_js__WEBPACK_IMPORTED_MODULE_3__, _routes__WEBPACK_IMPORTED_MODULE_6__]);
([_Navbars_Navbar_js__WEBPACK_IMPORTED_MODULE_3__, _routes__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// Chakra imports


 // Layout components



 // import { Redirect, Route, Switch } from "react-router-dom";

 // Custom Chakra theme


 // Custom components







function SideBarScreen({
  children
}) {
  console.log(children);
  console.log(222);
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_12__.useRouter)();
  console.log(router); // const { ...rest } = props;

  const {
    isOpen,
    onOpen,
    onClose
  } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.useDisclosure)();
  const {
    0: sidebarVariant,
    1: setSidebarVariant
  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)("transparent");
  const {
    0: fixed,
    1: setFixed
  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false); // functions for changing the states from components

  const getRoute = () => {
    return router.pathname !== "/admin/full-screen-maps";
  };

  const getActiveRoute = routes => {
    console.log(routes);
    console.log(router);
    let activeRoute = "Default Brand Text";

    for (let i = 0; i < routes.length; i++) {
      if (routes[i].collapse) {
        let collapseActiveRoute = getActiveRoute(routes[i].views);

        if (collapseActiveRoute !== activeRoute) {
          return collapseActiveRoute;
        }
      } else if (routes[i].category) {
        let categoryActiveRoute = getActiveRoute(routes[i].views);

        if (categoryActiveRoute !== activeRoute) {
          return categoryActiveRoute;
        }
      } else {// if (
        //   router.location.href.indexOf(routes[i].layout + routes[i].path) !== -1
        // ) {
        //   return routes[i].name;
        // }
      }
    }

    return activeRoute;
  }; // This changes navbar state(fixed or not)


  const getActiveNavbar = routes => {
    let activeNavbar = false;

    for (let i = 0; i < routes.length; i++) {
      if (routes[i].category) {
        let categoryActiveNavbar = getActiveNavbar(routes[i].views);

        if (categoryActiveNavbar !== activeNavbar) {
          return categoryActiveNavbar;
        }
      } else {// if (
        //   router.location.href.indexOf(routes[i].layout + routes[i].path) !== -1
        // ) {
        //   if (routes[i].secondaryNavbar) {
        //     return routes[i].secondaryNavbar;
        //   }
        // }
      }
    }

    return activeNavbar;
  }; // const getRoutes = (routes) => {
  //   return routes.map((prop, key) => {
  //     if (prop.collapse) {
  //       return getRoutes(prop.views);
  //     }
  //     if (prop.category === "account") {
  //       return getRoutes(prop.views);
  //     }
  //     if (prop.layout === "/admin") {
  //       return (
  //         <Route
  //           path={prop.layout + prop.path}
  //           component={prop.component}
  //           key={key}
  //         />
  //       );
  //     } else {
  //       return null;
  //     }
  //   });
  // };
  // Chakra Color Mode


  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.ChakraProvider, {
    theme: _theme_theme_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,
    resetCss: false,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Sidebar__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
      routes: _routes__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
      logoText: "Doremi Games",
      display: "none",
      sidebarVariant: sidebarVariant // {...rest}

    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_MainPanel__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
      w: {
        base: "100%",
        xl: "calc(100% - 275px)"
      },
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Portal, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Navbars_Navbar_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
          onOpen: onOpen,
          logoText: "Doremi Games",
          brandText: getActiveRoute(_routes__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z),
          secondary: getActiveNavbar(_routes__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z),
          fixed: fixed // {...rest}

        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_PanelContent__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_PanelContainer__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
          children: children
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Footer_Footer_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Portal, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_FixedPlugin_FixedPlugin__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
          secondary: getActiveNavbar(_routes__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z),
          fixed: fixed,
          onOpen: onOpen
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Configurator_Configurator__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        secondary: getActiveNavbar(_routes__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z),
        isOpen: isOpen,
        onClose: onClose,
        isChecked: fixed,
        onSwitch: value => {
          setFixed(value);
        },
        onOpaque: () => setSidebarVariant("opaque"),
        onTransparent: () => setSidebarVariant("transparent")
      })]
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2144:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
const _excluded = ["variant", "children"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




function MainPanel(props) {
  const {
    variant,
    children
  } = props,
        rest = _objectWithoutProperties(props, _excluded);

  const styles = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.useStyleConfig)("MainPanel", {
    variant
  }); // Pass the computed styles into the `__css` prop

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Box, _objectSpread(_objectSpread({
    __css: styles
  }, rest), {}, {
    children: children
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainPanel);

/***/ }),

/***/ 8766:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
const _excluded = ["variant", "children"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




function PanelContainer(props) {
  const {
    variant,
    children
  } = props,
        rest = _objectWithoutProperties(props, _excluded);

  const styles = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.useStyleConfig)("PanelContainer", {
    variant
  }); // Pass the computed styles into the `__css` prop

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Box, _objectSpread(_objectSpread({
    __css: styles
  }, rest), {}, {
    children: children
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PanelContainer);

/***/ }),

/***/ 9958:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
const _excluded = ["variant", "children"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




function PanelContent(props) {
  const {
    variant,
    children
  } = props,
        rest = _objectWithoutProperties(props, _excluded);

  const styles = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.useStyleConfig)("PanelContent", {
    variant
  }); // Pass the computed styles into the `__css` prop

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Box, _objectSpread(_objectSpread({
    __css: styles
  }, rest), {}, {
    children: children
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PanelContent);

/***/ }),

/***/ 2877:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




const SubMenuList = ({
  subMenu,
  getSelectedSubMenu
}) => {
  // const [selectedSubMenu, setSelectedSubMenu] = useState("ITEM");
  // const getSelectedSubMenu = (e) => {
  //   setSelectedSubMenu(e.target.value);
  // };
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Flex, {
    shadow: "md",
    w: "100%",
    alignItems: "center",
    justifyContent: "center",
    mx: 2,
    borderWidth: 0,
    overflowX: "auto",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Tabs, {
      defaultIndex: 0,
      borderBottomColor: "transparent",
      colorScheme: "teal",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.TabList, {
        children: subMenu && subMenu.map((list, i) => {
          return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Tab, {
            w: "6rem",
            py: 4,
            m: 0,
            _focus: {
              boxShadow: "none"
            },
            value: list,
            onClick: getSelectedSubMenu,
            children: list
          }, i);
        })
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SubMenuList);

/***/ }),

/***/ 8433:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4513);
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _redux_blockchain_blockchainActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(256);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_redux_blockchain_blockchainActions__WEBPACK_IMPORTED_MODULE_5__]);
_redux_blockchain_blockchainActions__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




 //import { severLogout } from "../redux/actions/userLogActions";





const AccountModal = ({
  onClose
}) => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
  const blockchain = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(state => state.blockchain);
  const txtColor = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("orange.400", "orange.400"); // const userLog = useSelector((state) => state.userLog);
  // const metamask = useSelector((state) => state.metamask);
  // console.log(userLog);
  // console.log(metamask);
  // const { account } = metamask;

  const {
    account
  } = blockchain; // const { auth } = userLog;
  // const [scan, setScan] = useState("");

  const getDisConnectWallet = () => {
    dispatch((0,_redux_blockchain_blockchainActions__WEBPACK_IMPORTED_MODULE_5__/* .disconnectWallet */ .co)());
    onClose();
  };

  const getServerLogout = () => {
    dispatch(severLogout());
  };

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    if (!account) return; // setScan(account);
  }, [account]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
    flexDirection: "column",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
      borderRadius: "22px",
      h: "44px",
      p: "0 22px",
      m: 1,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
        href: `https://bscscan.com/address/${account}`,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("a", {
          target: "_blank",
          children: [account && account.slice(0, 6) + "..." + account.slice(-4), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_0__.ExternalLinkIcon, {
            color: txtColor,
            ml: 2
          })]
        })
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
      borderRadius: "22px",
      h: "44px",
      p: "0 22px",
      m: 1,
      onClick: getDisConnectWallet,
      children: "Log out"
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AccountModal);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4246:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);





const Accountbar = ({
  onOpen
}) => {
  const blockchain = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.blockchain);
  const {
    account
  } = blockchain;
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!account) return;
  }, [account]);
  const txtColor = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.useColorModeValue)("#f47820 ", "orange.500");
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Flex, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Button, {
      borderRadius: "22px",
      h: "44px",
      p: "0 22px",
      color: txtColor,
      onClick: onOpen,
      fontSize: "14px",
      boxShadow: "0 2px 10px rgb(0 0 0 / 15%)",
      children: account ? account.slice(0, 6) + "..." + account.slice(-4) : null
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Accountbar);

/***/ }),

/***/ 9870:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);



const ConnectWallet = ({
  onOpen
}) => {
  const txtColor = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.useColorModeValue)("#f47820 ", "orange.500");
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Button, {
    borderRadius: "22px",
    h: "44px",
    p: "0 22px",
    color: txtColor,
    onClick: onOpen,
    fontSize: "14px",
    boxShadow: "0 2px 10px rgb(0 0 0 / 15%)",
    children: "Connect To A Wallet"
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConnectWallet);

/***/ }),

/***/ 1145:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redux_blockchain_blockchainActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(256);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8519);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _metamask_onboarding__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9652);
/* harmony import */ var _metamask_onboarding__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_metamask_onboarding__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_redux_blockchain_blockchainActions__WEBPACK_IMPORTED_MODULE_2__]);
_redux_blockchain_blockchainActions__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// import { useEffect } from "react";





 // import { metamaskLogin } from "../redux/actions/metamaskActions";




const WalletList = ({
  onClose
}) => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(); // const userLog = useSelector((state) => state.userLog);
  // const metamask = useSelector((state) => state.metamask);
  // const { auth } = userLog;
  // const { account } = metamask;

  const getConnectWallet = () => {
    dispatch((0,_redux_blockchain_blockchainActions__WEBPACK_IMPORTED_MODULE_2__/* .connectWallet */ .UP)());
    onClose();
  };

  let onboarding = new (_metamask_onboarding__WEBPACK_IMPORTED_MODULE_4___default())(); // let web3 = new Web3(window.ethereum);
  // useEffect(() => {
  //   if (!account) return;
  //   console.log(account);
  //   console.log(metamask);
  // }, [account]);
  // const isMetaMaskConnected = () => account && account.length > 0;
  // console.log(isMetaMaskConnected());
  // const getMetamaskWallet = async () => {
  //   if (!MetaMaskOnboarding.isMetaMaskInstalled()) {
  //     //dispatch(alertMsg("메타마스크가 설치되어 있지 않습니다.)); //=> 알림창
  //     alert("메타마스크가 설치되어 있지 않습니다. 설치 페이지로 이동합니다.");
  //     onboarding.startOnboarding(); // => 다운로드 페이지 새창열기
  //     onOpen();
  //   } else if (account && auth) {
  //     if (onboarding) {
  //       onboarding.stopOnboarding();
  //     }
  //     onOpen();
  //   } else {
  //     //메타마스크 로그인 시작
  //     console.log(111);
  //     // dispatch(metamaskLogin());
  //   }
  // };

  const txtColor = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.useColorModeValue)("#f47820 ", "orange.500");
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Flex, {
    flexDirection: "column",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Button, {
      borderRadius: "22px",
      h: "44px",
      p: "0 22px",
      color: txtColor,
      onClick: getConnectWallet,
      m: 1,
      children: ["Metamask", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Image, {
        src: "/metamask.png",
        h: "28px",
        w: "28px",
        ml: 4
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Button, {
      borderRadius: "22px",
      h: "44px",
      p: "0 22px",
      color: txtColor,
      m: 1,
      children: ["Binance Chain Wallet", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Image, {
        src: "/bsc.png",
        h: "28px",
        w: "28px",
        ml: 4
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WalletList);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9220:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Navbar)
/* harmony export */ });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _NavbarLinks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7103);
/* harmony import */ var _ConnectWallet_ConnectWallet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9870);
/* harmony import */ var _ConnectWallet_WalletList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1145);
/* harmony import */ var _Separator_Separator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8119);
/* harmony import */ var _Accountbar_Accountbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4246);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Accountbar_AccountModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8433);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_NavbarLinks__WEBPACK_IMPORTED_MODULE_2__, _ConnectWallet_WalletList__WEBPACK_IMPORTED_MODULE_4__, _Accountbar_AccountModal__WEBPACK_IMPORTED_MODULE_8__]);
([_NavbarLinks__WEBPACK_IMPORTED_MODULE_2__, _ConnectWallet_WalletList__WEBPACK_IMPORTED_MODULE_4__, _Accountbar_AccountModal__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
const _excluded = ["variant", "children", "fixed", "secondary", "brandText"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// Chakra Imports













function Navbar(props) {
  const blockchain = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(state => state.blockchain);
  const {
    auth
  } = blockchain;
  const {
    0: scrolled,
    1: setScrolled
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);

  const {
    variant,
    children,
    fixed,
    secondary,
    brandText
  } = props,
        rest = _objectWithoutProperties(props, _excluded); // Here are all the props that may change depending on navbar's type or state.(secondary, variant, scrolled)


  let mainText = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.useColorModeValue)("gray.700", "gray.200");
  let secondaryText = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.useColorModeValue)("gray.400", "gray.200");
  let navbarPosition = "absolute";
  let navbarFilter = "none";
  let navbarBackdrop = "blur(21px)";
  let navbarShadow = "none";
  let navbarBg = "none";
  let navbarBorder = "transparent";
  let secondaryMargin = "0px";
  let paddingX = "15px";
  if (props.fixed === true) if (scrolled === true) {
    navbarPosition = "fixed";
    navbarShadow = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.useColorModeValue)("0px 7px 23px rgba(0, 0, 0, 0.05)", "none");
    navbarBg = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.useColorModeValue)("linear-gradient(112.83deg, rgba(255, 255, 255, 0.82) 0%, rgba(255, 255, 255, 0.8) 110.84%)", "linear-gradient(112.83deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0) 110.84%)");
    navbarBorder = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.useColorModeValue)("#FFFFFF", "rgba(255, 255, 255, 0.31)");
    navbarFilter = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.useColorModeValue)("none", "drop-shadow(0px 7px 23px rgba(0, 0, 0, 0.05))");
  }

  if (props.secondary) {
    navbarBackdrop = "none";
    navbarPosition = "absolute";
    mainText = "white";
    secondaryText = "white";
    secondaryMargin = "22px";
    paddingX = "30px";
  }

  const changeNavbar = () => {
    if (window.scrollY > 1) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  window.addEventListener("scroll", changeNavbar);
  const {
    isOpen,
    onOpen,
    onClose
  } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.useDisclosure)();

  const ConnectWalletBtn = () => {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_ConnectWallet_ConnectWallet__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        onOpen: onOpen
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Modal, {
        isOpen: isOpen,
        onClose: onClose,
        isCentered: true,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.ModalOverlay, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.ModalContent, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.ModalHeader, {
            children: "Connect To A Wallet"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Separator_Separator__WEBPACK_IMPORTED_MODULE_5__/* .Separator */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.ModalCloseButton, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.ModalBody, {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_ConnectWallet_WalletList__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
              onClose: onClose
            })
          })]
        })]
      })]
    });
  };

  const AccountbarBtn = () => {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Accountbar_Accountbar__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        onOpen: onOpen
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Modal, {
        isOpen: isOpen,
        onClose: onClose,
        isCentered: true,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.ModalOverlay, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.ModalContent, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.ModalHeader, {
            children: "Account"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Separator_Separator__WEBPACK_IMPORTED_MODULE_5__/* .Separator */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.ModalCloseButton, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.ModalBody, {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Accountbar_AccountModal__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
              onClose: onClose
            })
          })]
        })]
      })]
    });
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Flex, {
    position: navbarPosition,
    boxShadow: navbarShadow,
    bg: navbarBg,
    borderColor: navbarBorder,
    filter: navbarFilter,
    backdropFilter: navbarBackdrop,
    borderWidth: "1.5px",
    borderStyle: "solid",
    transitionDelay: "0s, 0s, 0s, 0s",
    transitionDuration: " 0.25s, 0.25s, 0.25s, 0s",
    "transition-property": "box-shadow, background-color, filter, border",
    transitionTimingFunction: "linear, linear, linear, linear",
    alignItems: {
      xl: "center"
    },
    borderRadius: "16px",
    display: "flex",
    minH: "75px",
    justifyContent: {
      xl: "center"
    },
    lineHeight: "25.6px",
    mx: "auto",
    mt: secondaryMargin,
    pb: "8px",
    right: "30px",
    px: {
      sm: paddingX,
      md: "30px"
    },
    ps: {
      xl: "12px"
    },
    pt: "8px",
    top: "18px",
    w: {
      sm: "calc(100vw - 30px)",
      xl: "calc(100vw - 75px - 275px)"
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Flex, {
      w: "100%",
      flexDirection: {
        sm: "column",
        md: "row"
      },
      alignItems: {
        xl: "center"
      },
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Box, {
        ms: "auto",
        w: {
          sm: "100%",
          md: "unset"
        },
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_NavbarLinks__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
          onOpen: props.onOpen,
          logoText: props.logoText,
          secondary: props.secondary,
          fixed: props.fixed
        })
      }), !auth ? ConnectWalletBtn() : AccountbarBtn()]
    })
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7103:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ HeaderLinks)
/* harmony export */ });
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4513);
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Icons_Icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1914);
/* harmony import */ var _Sidebar_SidebarResponsive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8205);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3446);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_routes__WEBPACK_IMPORTED_MODULE_5__]);
_routes__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
const _excluded = ["variant", "children", "fixed", "secondary", "onOpen"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// Chakra Icons
 // Chakra Imports

 // Custom Icons

 // Custom Components


 // import { NavLink } from "react-router-dom";




function HeaderLinks(props) {
  const {
    variant,
    children,
    fixed,
    secondary,
    onOpen
  } = props,
        rest = _objectWithoutProperties(props, _excluded); // Chakra Color Mode


  let mainTeal = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("teal.300", "teal.300");
  let inputBg = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("white", "gray.800");
  let mainText = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("gray.700", "gray.200");
  let navbarIcon = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("gray.500", "gray.200");
  let searchIcon = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("gray.700", "gray.200");

  if (secondary) {
    navbarIcon = "white";
    mainText = "white";
  }

  const settingsRef = react__WEBPACK_IMPORTED_MODULE_4___default().useRef();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
    pe: {
      sm: "0px",
      md: "16px"
    },
    w: {
      sm: "100%",
      md: "auto"
    },
    alignItems: "center",
    flexDirection: "row",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.InputGroup, {
      cursor: "pointer",
      bg: inputBg,
      borderRadius: "15px",
      w: {
        sm: "128px",
        md: "200px"
      },
      me: {
        sm: "auto",
        md: "20px"
      },
      _focus: {
        borderColor: {
          mainTeal
        }
      },
      _active: {
        borderColor: {
          mainTeal
        }
      },
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.InputLeftElement, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.IconButton, {
          bg: "inherit",
          borderRadius: "inherit",
          _hover: "none",
          _active: {
            bg: "inherit",
            transform: "none",
            borderColor: "transparent"
          },
          _focus: {
            boxShadow: "none"
          },
          icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_0__.SearchIcon, {
            color: searchIcon,
            w: "15px",
            h: "15px"
          })
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Input, {
        fontSize: "xs",
        py: "11px",
        color: mainText,
        placeholder: "Type here...",
        borderRadius: "inherit"
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_Sidebar_SidebarResponsive__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, _objectSpread({
      logoText: props.logoText,
      secondary: props.secondary,
      routes: _routes__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z // logo={logo}

    }, rest)), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_Icons_Icons__WEBPACK_IMPORTED_MODULE_2__/* .SettingsIcon */ .ew, {
      cursor: "pointer",
      ms: {
        base: "16px",
        xl: "0px"
      },
      me: "16px",
      ref: settingsRef,
      onClick: props.onOpen,
      color: navbarIcon,
      w: "18px",
      h: "18px"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Menu, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.MenuButton, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_0__.BellIcon, {
          color: navbarIcon,
          w: "18px",
          h: "18px"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.MenuList, {
        p: "16px 8px",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
          flexDirection: "column"
        })
      })]
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8119:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Separator)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
const _excluded = ["variant", "children"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




function Separator(props) {
  const {
    variant,
    children
  } = props,
        rest = _objectWithoutProperties(props, _excluded);

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, _objectSpread(_objectSpread({
    h: "1px",
    w: "100%",
    bg: "linear-gradient(90deg, rgba(224, 225, 226, 0) 0%, #E0E1E2 49.52%, rgba(224, 225, 226, 0) 100%)"
  }, rest), {}, {
    children: children
  }));
}

/***/ }),

/***/ 3392:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ SidebarBottom)
/* harmony export */ });
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4513);
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Icons_IconBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3569);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _game_GameInterface__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6988);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
const _excluded = ["children"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }











function SidebarBottom(props) {
  // Pass the computed styles into the `__css` prop
  const {
    children
  } = props,
        rest = _objectWithoutProperties(props, _excluded);

  const blockchain = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(state => state.blockchain);
  const {
    account,
    auth,
    nftContract,
    stakingContract
  } = blockchain;
  const baseUri = "http://127.0.0.1:8080/ipfs";
  const {
    0: mainNFT,
    1: setMainNFT
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
  const {
    0: dailyMission,
    1: setDailyMission
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(async () => {
    if (!(account && auth)) return;
    const stakingData = await stakingContract.methods.getStakingData().call({
      from: account
    });
    if (stakingData.tokenId == 0) return;
    const directoryUri = await nftContract.methods.tokenURI(stakingData.tokenId).call();
    const response = await axios__WEBPACK_IMPORTED_MODULE_5___default().get(`${baseUri}${directoryUri.slice(6)}/${stakingData.tokenId}.json`);
    setMainNFT(response.data);
  }, [account, auth]);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(async () => {
    if (!(account && auth && mainNFT)) return; // 대표 NFT가 있으면 일일미션정보 받아오기

    let receivedMissions = await _game_GameInterface__WEBPACK_IMPORTED_MODULE_6__/* ["default"].getMission */ .Z.getMission(account); // 일일미션이 없으면 새로 받기

    if (receivedMissions.length == 0) {
      await _game_GameInterface__WEBPACK_IMPORTED_MODULE_6__/* ["default"].missionReg */ .Z.missionReg(account, mainNFT);
      receivedMissions = await _game_GameInterface__WEBPACK_IMPORTED_MODULE_6__/* ["default"].getMission */ .Z.getMission(account);
    }

    setDailyMission(receivedMissions);
  }, [mainNFT]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
    borderRadius: "15px",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    boxSize: "border-box",
    p: "16px",
    w: "100%",
    backgroundColor: `var(--chakra-colors-${mainNFT.grade}-700)`,
    children: mainNFT ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Img, {
        src: `${baseUri}${mainNFT.image.slice(6)}`
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
        fontSize: "sm",
        color: "white",
        fontWeight: "bold",
        children: "\uC624\uB298\uC758 \uBBF8\uC158"
      }), dailyMission.length != 0 && dailyMission.map((mission, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
        gap: "5px",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
          children: mission.DailyMission.game_title
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
          children: mission.attainment ? "완료!" : "안완료!"
        })]
      }))]
    }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
      children: "\uC120\uD0DD\uBC14\uB78C"
    })
  });
}

/***/ }),

/***/ 8205:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4513);
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Icons_IconBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3569);
/* harmony import */ var _components_Icons_Icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1914);
/* harmony import */ var _components_Separator_Separator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8119);
/* harmony import */ var _SidebarBottom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3392);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4661);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);
const _excluded = ["logoText", "routes"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/*eslint-disable*/
 // chakra imports












function SidebarResponsive(props) {
  // to check for active links and opened collapses
  // let location = useLocation();
  // this is for the rest of the collapses
  const [state, setState] = react__WEBPACK_IMPORTED_MODULE_6___default().useState({});
  const mainPanel = react__WEBPACK_IMPORTED_MODULE_6___default().useRef(); // verifies if routeName is the one active (in browser input)

  const activeRoute = routeName => {
    return location.pathname === routeName ? "active" : "";
  };

  const createLinks = routes => {
    // Chakra Color Mode
    const activeBg = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("white", "gray.700");
    const inactiveBg = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("white", "gray.700");
    const activeColor = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("gray.700", "white");
    const inactiveColor = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("gray.400", "gray.400");
    return routes.map((prop, key) => {
      if (prop.redirect) {
        return null;
      }

      if (prop.category) {
        var st = {};
        st[prop["state"]] = !state[prop.state];
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
            color: activeColor,
            fontWeight: "bold",
            mb: {
              xl: "12px"
            },
            mx: "auto",
            ps: {
              sm: "10px",
              xl: "16px"
            },
            py: "12px",
            children: prop.name
          }), createLinks(prop.views)]
        }, prop.name);
      }

      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.NavLink, {
        to: prop.layout + prop.path,
        children: activeRoute(prop.layout + prop.path) === "active" ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
          boxSize: "initial",
          justifyContent: "flex-start",
          alignItems: "center",
          bg: activeBg,
          mb: {
            xl: "12px"
          },
          mx: {
            xl: "auto"
          },
          ps: {
            sm: "10px",
            xl: "16px"
          },
          py: "12px",
          borderRadius: "15px",
          _hover: "none",
          w: "100%",
          _active: {
            bg: "inherit",
            transform: "none",
            borderColor: "transparent"
          },
          _focus: {
            boxShadow: "none"
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
            children: [typeof prop.icon === "string" ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(Icon, {
              children: prop.icon
            }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_components_Icons_IconBox__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
              bg: "teal.300",
              color: "white",
              h: "30px",
              w: "30px",
              me: "12px",
              children: prop.icon
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
              color: activeColor,
              my: "auto",
              fontSize: "sm",
              children: prop.name
            })]
          })
        }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
          boxSize: "initial",
          justifyContent: "flex-start",
          alignItems: "center",
          bg: "transparent",
          mb: {
            xl: "12px"
          },
          mx: {
            xl: "auto"
          },
          py: "12px",
          ps: {
            sm: "10px",
            xl: "16px"
          },
          borderRadius: "15px",
          _hover: "none",
          w: "100%",
          _active: {
            bg: "inherit",
            transform: "none",
            borderColor: "transparent"
          },
          _focus: {
            boxShadow: "none"
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
            children: [typeof prop.icon === "string" ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(Icon, {
              children: prop.icon
            }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_components_Icons_IconBox__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
              bg: inactiveBg,
              color: "teal.300",
              h: "30px",
              w: "30px",
              me: "12px",
              children: prop.icon
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
              color: inactiveColor,
              my: "auto",
              fontSize: "sm",
              children: prop.name
            })]
          })
        })
      }, prop.name);
    });
  };

  const {
    logoText,
    routes
  } = props,
        rest = _objectWithoutProperties(props, _excluded);

  var links = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
    children: createLinks(routes)
  }); //  BRAND
  //  Chakra Color Mode


  let hamburgerColor = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("gray.500", "gray.200");

  if (props.secondary === true) {
    hamburgerColor = "white";
  }

  var brand = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
    pt: "35px",
    mb: "8px",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
      href: `${process.env.PUBLIC_URL}/#/`,
      target: "_blank",
      display: "flex",
      lineHeight: "100%",
      mb: "30px",
      fontWeight: "bold",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "11px",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_components_Icons_Icons__WEBPACK_IMPORTED_MODULE_3__/* .TimLogo */ .Cw, {
        w: "32px",
        h: "32px",
        me: "10px"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
        fontSize: "sm",
        mt: "3px",
        children: logoText
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_components_Separator_Separator__WEBPACK_IMPORTED_MODULE_4__/* .Separator */ .Z, {})]
  }); // SIDEBAR


  const {
    isOpen,
    onOpen,
    onClose
  } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useDisclosure)();
  const btnRef = react__WEBPACK_IMPORTED_MODULE_6___default().useRef(); // Color variables

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
    display: {
      sm: "flex",
      xl: "none"
    },
    ref: mainPanel,
    alignItems: "center",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_0__.HamburgerIcon, {
      color: hamburgerColor,
      w: "18px",
      h: "18px",
      ref: btnRef,
      colorScheme: "teal",
      onClick: onOpen
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Drawer, {
      isOpen: isOpen,
      onClose: onClose,
      placement: "left",
      finalFocusRef: btnRef,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.DrawerOverlay, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.DrawerContent, {
        w: "250px",
        maxW: "250px",
        ms: {
          sm: "16px"
        },
        my: {
          sm: "16px"
        },
        borderRadius: "16px",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.DrawerCloseButton, {
          _focus: {
            boxShadow: "none"
          },
          _hover: {
            boxShadow: "none"
          }
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.DrawerBody, {
          maxW: "250px",
          px: "1rem",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
            maxW: "100%",
            h: "100vh",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
              children: brand
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
              direction: "column",
              mb: "40px",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                children: links
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_SidebarBottom__WEBPACK_IMPORTED_MODULE_5__/* .SidebarBottom */ .y, {})]
          })
        })]
      })]
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SidebarResponsive);

/***/ }),

/***/ 5229:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Sidebar)
});

// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/Icons/IconBox.js
var IconBox = __webpack_require__(3569);
// EXTERNAL MODULE: ./components/Icons/Icons.js
var Icons = __webpack_require__(1914);
// EXTERNAL MODULE: ./components/Separator/Separator.js
var Separator = __webpack_require__(8119);
// EXTERNAL MODULE: ./components/Sidebar/SidebarBottom.js
var SidebarBottom = __webpack_require__(3392);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Sidebar/SidebarContent.js
/*eslint-disable*/
// chakra imports





 // import {
//   NavLink,
//   useLocation
// } from "react-router-dom";


 // this function creates the links and collapses that appear in the sidebar (left menu)





const SidebarContent = ({
  logoText,
  routes
}) => {
  console.log({
    logoText,
    routes
  }); // to check for active links and opened collapses
  // let location = useLocation();
  // this is for the rest of the collapses

  const {
    0: state,
    1: setState
  } = (0,external_react_.useState)({});
  const router = (0,router_.useRouter)();
  console.log(router); // verifies if routeName is the one active (in browser input)

  const activeRoute = routeName => {
    return router.pathname === routeName ? "active" : "";
  };

  const createLinks = routes => {
    // Chakra Color Mode
    const activeBg = (0,react_.useColorModeValue)("white", "gray.700");
    const inactiveBg = (0,react_.useColorModeValue)("white", "gray.700");
    const activeColor = (0,react_.useColorModeValue)("gray.700", "white");
    const inactiveColor = (0,react_.useColorModeValue)("gray.400", "gray.400");
    return routes.map((prop, key) => {
      if (prop.redirect) {
        return null;
      } // if (prop.name && prop.subName) {
      //   return (
      //     <div key={prop.name}>
      //       {createLinks(prop.subName)}
      //     </div>
      //   )
      // }


      if (prop.category) {
        var st = {};
        st[prop["state"]] = !state[prop.state];
        return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
            color: activeColor,
            fontWeight: "bold",
            mb: {
              xl: "12px"
            },
            mx: "auto",
            ps: {
              sm: "10px",
              xl: "16px"
            },
            py: "12px",
            children: prop.name
          }), createLinks(prop.views)]
        }, prop.name);
      }

      return (
        /*#__PURE__*/
        // <NextLink href={`${prop.layout + prop.path}`} key={prop.name} passHref>
        jsx_runtime_.jsx(next_link["default"], {
          href: `${prop.path}`,
          passHref: true,
          children: /*#__PURE__*/jsx_runtime_.jsx(react_.Link, {
            children: activeRoute(prop.layout + prop.path) === "active" ? /*#__PURE__*/jsx_runtime_.jsx(react_.Button, {
              boxSize: "initial",
              justifyContent: "flex-start",
              alignItems: "center",
              bg: activeBg,
              mb: {
                xl: "12px"
              },
              mx: {
                xl: "auto"
              },
              ps: {
                sm: "10px",
                xl: "16px"
              },
              py: "12px",
              borderRadius: "15px",
              _hover: "none",
              w: "100%",
              _active: {
                bg: "inherit",
                transform: "none",
                borderColor: "transparent"
              },
              _focus: {
                boxShadow: "none"
              },
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Flex, {
                children: [typeof prop.icon === "string" ? /*#__PURE__*/jsx_runtime_.jsx(Icon, {
                  children: prop.icon
                }) : /*#__PURE__*/jsx_runtime_.jsx(IconBox/* default */.Z, {
                  bg: "teal.300",
                  color: "white",
                  h: "30px",
                  w: "30px",
                  me: "12px",
                  children: prop.icon
                }), /*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
                  color: activeColor,
                  my: "auto",
                  fontSize: "sm",
                  children: prop.name
                })]
              })
            }) : /*#__PURE__*/jsx_runtime_.jsx(react_.Button, {
              boxSize: "initial",
              justifyContent: "flex-start",
              alignItems: "center",
              bg: "transparent",
              mb: {
                xl: "12px"
              },
              mx: {
                xl: "auto"
              },
              py: "12px",
              ps: {
                sm: "10px",
                xl: "16px"
              },
              borderRadius: "15px",
              _hover: "none",
              w: "100%",
              _active: {
                bg: "inherit",
                transform: "none",
                borderColor: "transparent"
              },
              _focus: {
                boxShadow: "none"
              },
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Flex, {
                children: [typeof prop.icon === "string" ? /*#__PURE__*/jsx_runtime_.jsx(Icon, {
                  children: prop.icon
                }) : /*#__PURE__*/jsx_runtime_.jsx(IconBox/* default */.Z, {
                  bg: inactiveBg,
                  color: "teal.300",
                  h: "30px",
                  w: "30px",
                  me: "12px",
                  children: prop.icon
                }), /*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
                  color: inactiveColor,
                  my: "auto",
                  fontSize: "sm",
                  children: prop.name
                })]
              })
            })
          })
        }, prop.name)
      );
    });
  };

  const links = /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: createLinks(routes)
  });

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Box, {
      pt: "25px",
      mb: "12px",
      children: [/*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
        href: `${"http://localhost:3000"}/`,
        passHref: true,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Link, {
          target: "_blank",
          display: "flex",
          lineHeight: "100%",
          mb: "30px",
          fontWeight: "bold",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "11px",
          children: [/*#__PURE__*/jsx_runtime_.jsx(Icons/* TimLogo */.Cw, {
            w: "20px",
            h: "20px",
            me: "10px"
          }), /*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
            fontSize: "sm",
            mt: "3px",
            children: logoText
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(Separator/* Separator */.Z, {})]
    }), /*#__PURE__*/jsx_runtime_.jsx(react_.Stack, {
      direction: "column",
      mb: "40px",
      children: /*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
        children: links
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(SidebarBottom/* SidebarBottom */.y, {})]
  });
};

/* harmony default export */ const Sidebar_SidebarContent = (SidebarContent);
;// CONCATENATED MODULE: ./components/Sidebar/index.js
/*eslint-disable*/
// chakra imports


 // FUNCTIONS



function Sidebar(props) {
  // to check for active links and opened collapses
  const mainPanel = (0,external_react_.useRef)();
  let variantChange = "0.2s linear";
  const {
    logoText,
    routes,
    sidebarVariant
  } = props; //  BRAND
  //  Chakra Color Mode

  let sidebarBg = "none";
  let sidebarRadius = "0px";
  let sidebarMargins = "0px";

  if (sidebarVariant === "opaque") {
    sidebarBg = (0,react_.useColorModeValue)("white", "gray.700");
    sidebarRadius = "16px";
    sidebarMargins = "16px 0px 16px 16px";
  } // SIDEBAR


  return /*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
    ref: mainPanel,
    children: /*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
      display: {
        sm: "none",
        xl: "block"
      },
      position: "fixed",
      children: /*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
        bg: sidebarBg,
        transition: variantChange,
        w: "260px",
        maxW: "260px",
        ms: {
          sm: "16px"
        },
        my: {
          sm: "16px"
        },
        h: "calc(100vh - 32px)",
        ps: "20px",
        pe: "20px",
        m: sidebarMargins,
        borderRadius: sidebarRadius,
        children: /*#__PURE__*/jsx_runtime_.jsx(Sidebar_SidebarContent, {
          routes: routes,
          logoText: logoText,
          display: "none",
          sidebarVariant: sidebarVariant
        })
      })
    })
  });
}

/* harmony default export */ const components_Sidebar = (Sidebar);

/***/ }),

/***/ 6988:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const gameList = [{
  gameId: 1,
  gameTitle: "블록쌓기",
  gameUrl: "stacking-blocks",
  description: "스르륵 움직이는 블록을 단단히 고정된 블록에 정확한 순간에 착 놓아서 쑥쑥 높게 쌓아올리는 게임"
}, {
  gameId: 2,
  gameTitle: "테트리스",
  gameUrl: "tetris",
  description: "긴 거 필요할 때 꼭 안 나오는 그 게임"
}, {
  gameId: 3,
  gameTitle: "보물찾기",
  gameUrl: "treasure",
  description: "운으로 승부하는 운빨 존망겜"
}];

const getGameList = async () => {
  const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`/api/games/game-list`);
  const receivedGameList = response.data;
  if (gameList.length == receivedGameList.length) return;

  for (let i = gameList.length; i < receivedGameList.length; i++) {
    gameList.push(receivedGameList[i]);
  }
};
/* 첫참여 시 참여자 행 초기화 */


const setParticipant = async (account, gameTitle) => {
  console.log("참여자 초기화");
  if (!(account && gameTitle)) return;
  const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`/api/games/set-participant`, {
    account: account,
    gameTitle: gameTitle
  }).catch(err => console.log(err));

  if (response) {
    console.log("참여자 초기화 됨");
  } else {
    console.log("이미 참여자 초기화 되어있음");
  }

  return;
};
/* 첫 참여 시 대표 NFT에 맞게 횟수 초기화 */


const initChance = async (account, gameTitle, mainNFT) => {
  console.log("횟수 초기화");
  if (!(account && gameTitle)) return;
  const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`/api/games/init-chance`, {
    account: account,
    gameTitle: gameTitle,
    mainNFT: mainNFT
  }).catch(err => console.log(err));

  if (response) {
    console.log("참여자 초기화 됨");
  } else {
    console.log("이미 참여자 초기화 되어있음");
  }

  return;
};
/* 남은 기회 가져오기 */


const getMyChance = async (account, gameTitle) => {
  console.log("횟수 불러오기");
  if (!(account && gameTitle)) return;
  const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`/api/games/my-count`, {
    account: account,
    gameTitle: gameTitle
  }).catch(err => console.log(err));
  return response.data.gameCount;
};
/* 최고기록 가져오기 */


const getMyBestScore = async (account, gameTitle) => {
  if (!(account && gameTitle)) return;
  const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`/api/games/my-best-score`, {
    account: account,
    gameTitle: gameTitle
  }).catch(err => console.log(err));
  return response.data.gameScore;
};
/* 아이템 목록 가져오기 */


const getGameItems = async () => {
  const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`/api/items/game-items`);
  return response.data;
};
/* 내 아이템 개수 불러오기 */


const getMyItemQuantity = async (account, itemName) => {
  const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`/api/items/game-items/my-items-quantity`, {
    account: account,
    itemName: itemName
  });
  return response.data.count;
};
/* 아이템 사용하기 */


const usingItem = async (account, itemName) => {
  const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`/api/items/game-items/using-item`, {
    account: account,
    itemName: itemName
  }).catch(err => console.log(err));

  if (response) {
    console.log("아이템 사용함");
    return true;
  } else {
    console.log("아이템이 없음");
    return false;
  }
};
/* 아이템 효과 받아오기 */


const getItemEffect = async (account, itemName, gameTitle) => {
  const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`/api/items/game-items/get-item-effect`, {
    account: account,
    itemName: itemName,
    gameTitle: gameTitle
  }).catch(err => console.log(err));

  if (response.data) {
    return response.data;
  } else {
    console.log("아이템효과 받아오기 실패");
    return response.data;
  }
};
/* 게임 기회 차감하기 */


const minusGameCount = async (account, gameTitle) => {
  if (!(account && gameTitle)) return;
  const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`/api/games/minus-count`, {
    account: account,
    gameTitle: gameTitle
  }).catch(err => console.log(err));

  if (response) {
    console.log("게임 기회 차감됨");
  } else {
    console.log("게임 기회가 이미 0임");
  }

  return response;
};
/* 점수 등록(전송) */


const sendScore = async (account, gameTitle, score, itemEffect) => {
  if (!(account && gameTitle && score > 0)) return;
  const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`/api/games/send-score`, {
    account: account,
    gameTitle: gameTitle,
    score: parseInt(score),
    itemEffect: itemEffect
  }).catch(err => console.log(err));
  return response;
};
/* 대표 NFT 받아오기 */


const getMyNFT = async account => {
  if (!account) return;
  const mainNFT = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`/api/users/profile/my-token-id`, {
    account: account
  });
  const tokenId = mainNFT.data.mainNft;
  return tokenId;
};
/* 일일미션 받기 */


const missionReg = async (account, tokenId) => {
  if (!(account && tokenId)) return;
  const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`/api/games/mission-reg`, {
    account: account,
    tokenId: tokenId
  }).catch(err => console.log(err));
  console.log(response.data.length);
  return response.data;
};
/* 일일미션 불러오기 */


const getMission = async (account, gameTitle) => {
  if (!account) return;

  if (gameTitle) {
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`/api/games/my-mission`, {
      account: account,
      gameTitle: gameTitle
    }).catch(err => console.log(err));
    return response.data;
  } else {
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`/api/games/my-mission`, {
      account: account
    }).catch(err => console.log(err));
    return response.data;
  }
};
/* 미션현황 갱신 */


const updateMission = async (account, missionId) => {
  console.log("인터페이스:미션현황 갱신");
  if (!(account && missionId)) return;
  const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`/api/games/update-mission`, {
    account: account,
    missionId: missionId
  }).catch(err => console.log(err));
  console.log(response);
  return;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  getGameList,
  gameList,
  setParticipant,
  initChance,
  getMyChance,
  getMyBestScore,
  getGameItems,
  usingItem,
  getItemEffect,
  getMyItemQuantity,
  minusGameCount,
  sendScore,
  getMyNFT,
  missionReg,
  getMission,
  updateMission
});

/***/ }),

/***/ 3446:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1721);
/* harmony import */ var _Icons_Icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1914);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pages_home__WEBPACK_IMPORTED_MODULE_0__]);
_pages_home__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// import
 // import Mypage from "./mypage/index";



var dashRoutes = [{
  path: "/home",
  name: "Home",
  icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_Icons_Icons__WEBPACK_IMPORTED_MODULE_1__/* .HomeIcon */ .tv, {
    color: "inherit"
  }),
  component: _pages_home__WEBPACK_IMPORTED_MODULE_0__["default"],
  layout: "/Home",
  subName: false
}, {
  path: "/rank",
  name: "Rank",
  icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_Icons_Icons__WEBPACK_IMPORTED_MODULE_1__/* .StatsIcon */ .RO, {
    color: "inherit"
  }),
  component: _pages_home__WEBPACK_IMPORTED_MODULE_0__["default"],
  layout: "/SideBarScreen"
}, {
  path: "/game",
  name: "Game",
  icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_Icons_Icons__WEBPACK_IMPORTED_MODULE_1__/* .RocketIcon */ .WC, {
    color: "inherit"
  }),
  component: _pages_home__WEBPACK_IMPORTED_MODULE_0__["default"],
  layout: "/SideBarScreen",
  subName: false
}, {
  path: "/market",
  name: "Market",
  icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_Icons_Icons__WEBPACK_IMPORTED_MODULE_1__/* .CartIcon */ .w7, {
    color: "inherit"
  }),
  component: _pages_home__WEBPACK_IMPORTED_MODULE_0__["default"],
  layout: "/SideBarScreen",
  subName: false
}, {
  path: "/nft",
  name: "NFT",
  icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_Icons_Icons__WEBPACK_IMPORTED_MODULE_1__/* .WalletIcon */ .o, {
    color: "inherit"
  }),
  component: _pages_home__WEBPACK_IMPORTED_MODULE_0__["default"],
  layout: "/SideBarScreen",
  subName: false
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dashRoutes);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7936:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ todayTimeFormal)
/* harmony export */ });
const todayTimeFormal = timestamp => {
  //현재 년/월/일/시간
  let now = new Date(timestamp);
  let todayYear = now.getFullYear();
  let todayMonth = now.getMonth() + 1 > 9 ? now.getMonth() + 1 : '0' + (now.getMonth() + 1);
  let todayDate = now.getDate() > 9 ? now.getDate() : '0' + now.getDate();
  let hours = now.getHours() > 9 ? now.getHours() : '0' + now.getHours();
  let minutes = now.getMinutes() > 9 ? now.getMinutes() : '0' + now.getMinutes();
  return todayYear + '-' + todayMonth + '-' + todayDate + ' ' + hours + ':' + minutes;
}; // console.log(new Date())
// console.log(new Date(Date.now()))
// console.log(Date.now())
// console.log(todayTimeFormal(1649158292117))

/***/ }),

/***/ 1721:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Icons_Icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1914);
/* harmony import */ var _components_Home_MiniStatus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(259);
/* harmony import */ var _components_Layout_Frame_SideBarScreen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2109);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Menu_SubMenuList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2877);
/* harmony import */ var _components_Home_ClaimInfoCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3194);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Layout_Frame_SideBarScreen__WEBPACK_IMPORTED_MODULE_3__]);
_components_Layout_Frame_SideBarScreen__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// Chakra imports
 // Custom icons










function Home() {
  const iconBoxInside = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.useColorModeValue)("white", "white");
  const blockchain = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(state => state.blockchain);
  const {
    web3,
    account,
    gameTokenContract
  } = blockchain;
  const {
    0: ethBalance,
    1: setEthBalance
  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)();
  const {
    0: tokenBalance,
    1: setTokenBalance
  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)();
  const {
    0: selectedSubMenu,
    1: setSelectedSubMenu
  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)("ITEM");
  const {
    0: updateTrigger,
    1: setUpdateTrigger
  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)();
  console.log(gameTokenContract); //잔액

  const getEthBalance = async () => {
    let balance;
    await web3.eth.getBalance(account.toString()).then(balanceInWei => {
      balance = web3.utils.fromWei(balanceInWei);
      setEthBalance(balance.slice(0, 5));
    });
  };

  const getTokenBalance = async () => {
    let balance;
    await gameTokenContract.methods.balanceOf(account).call({
      from: account
    }).then(tokenBalance => {
      console.log(tokenBalance);
      balance = web3.utils.fromWei(tokenBalance);
      setTokenBalance(balance.slice(0, 5));
    }).catch(console.error());
  };

  const getSelectedSubMenu = e => {
    setSelectedSubMenu(e.target.value);
  };

  const updateToken = () => {
    setUpdateTrigger(!updateTrigger);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(async () => {
    if (!account) return false;
    await getEthBalance();
    await getTokenBalance();
  }, [account, updateTrigger]);
  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(() => {
    returnMenu(selectedSubMenu);
  }, [selectedSubMenu]);

  const returnMenu = display => {
    switch (display) {
      case "INVENTORY":
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
          children: "INVENTORY"
        });

      case "CLAIM":
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_components_Home_ClaimInfoCard__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
          onUpdate: updateToken
        });

      case "STAKING":
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
          children: "STAKING"
        });

      case "PROFILE":
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
          children: "PROFILE"
        });

      default:
        break;
    }
  };

  const menuList = ["INVENTORY", "CLAIM", "STAKING", "PROFILE"];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Flex, {
    flexDirection: "column",
    pt: {
      base: "120px",
      md: "75px"
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.SimpleGrid, {
      columns: {
        sm: 1,
        md: 2,
        xl: 4
      },
      spacing: "24px",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_components_Home_MiniStatus__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        title: "Etherium",
        amount: ethBalance ? ethBalance : "---",
        unit: "ETH",
        icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_components_Icons_Icons__WEBPACK_IMPORTED_MODULE_1__/* .WalletIcon */ .o, {
          h: "24px",
          w: "24px",
          color: iconBoxInside
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_components_Home_MiniStatus__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        title: "Doremi Token",
        amount: tokenBalance ? tokenBalance : "---",
        unit: "DGT",
        icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_components_Icons_Icons__WEBPACK_IMPORTED_MODULE_1__/* .GlobeIcon */ .n9, {
          h: "24px",
          w: "24px",
          color: iconBoxInside
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_components_Home_MiniStatus__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        title: "Total NFT",
        amount: "1,000,000",
        unit: "NFTs",
        icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_components_Icons_Icons__WEBPACK_IMPORTED_MODULE_1__/* .DocumentIcon */ .$l, {
          h: "24px",
          w: "24px",
          color: iconBoxInside
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_components_Home_MiniStatus__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        title: "Total Items",
        amount: "13",
        unit: "Items",
        icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_components_Icons_Icons__WEBPACK_IMPORTED_MODULE_1__/* .CartIcon */ .w7, {
          h: "24px",
          w: "24px",
          color: iconBoxInside
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Box, {
      mt: 10,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_components_Menu_SubMenuList__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        subMenu: menuList,
        getSelectedSubMenu: getSelectedSubMenu
      }), returnMenu(selectedSubMenu)]
    })]
  });
} // getLayout property

Home.getLayout = function getLayout(page) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_components_Layout_Frame_SideBarScreen__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    children: page
  });
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 256:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UP": () => (/* binding */ connectWallet),
/* harmony export */   "co": () => (/* binding */ disconnectWallet)
/* harmony export */ });
/* unused harmony exports authenticate, reconnect, updateAccount */
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8519);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contracts_artifacts_NftContract_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6339);
/* harmony import */ var _contracts_artifacts_NftDealContract_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9046);
/* harmony import */ var _contracts_artifacts_GameToken_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4332);
/* harmony import */ var _contracts_artifacts_Claim_20_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9221);
/* harmony import */ var _contracts_artifacts_AuctionCreator_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2050);
/* harmony import */ var _contracts_artifacts_Staking_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4511);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5567);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _data_dataActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7899);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9915);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_9__]);
js_cookie__WEBPACK_IMPORTED_MODULE_9__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// constants









 // ================================================================
// import
// ================================================================

const baseUrl = "http://localhost:5000";
const LS_KEY = "login-with-metamask:auth";

const connectRequest = () => {
  return {
    type: "CONNECTION_REQUEST"
  };
};

const connectSuccess = payload => {
  return {
    type: "CONNECTION_SUCCESS",
    payload: payload
  };
};

const connectFailed = payload => {
  return {
    type: "CONNECTION_FAILED",
    payload: payload
  };
};

const updateAccountRequest = payload => {
  return {
    type: "UPDATE_ACCOUNT",
    payload: payload
  };
};

const authenticate = () => {
  const accessToken = js_cookie__WEBPACK_IMPORTED_MODULE_9__["default"].get(LS_KEY);
  const auth = accessToken && JSON.parse(accessToken).accessToken;
  console.log(" 🛠 authenticate 🛠");
  console.log(accessToken);
  console.log(auth); //토큰이 있을때 if문 실행

  if (auth) {
    console.log(" 🛠 auth 🛠");
    const {
      payload: {
        id
      }
    } = jwt_decode__WEBPACK_IMPORTED_MODULE_7___default()(auth);
    const isAuth = fetch(`${baseUrl}/users/${id}`, {
      headers: {
        Authorization: `Bearer ${auth}`
      }
    }).then(response => {
      console.log("🛠 response 🛠", response);
      response.json().ok;
    }).catch(err => console.log(err));
    console.log("🛠 isAuth1 🛠", isAuth);

    if (isAuth) {
      console.log(" 🛠 isAuth2 🛠", isAuth);
      return {
        type: "AUTH",
        payload: true
      };
    }
  } //토큰인 없을 때


  return {
    type: "AUTH",
    payload: false
  };
};
const reconnect = () => {
  console.log(" 🛠 reconnect 🛠");
  return async dispatch => {
    dispatch(connectRequest());
    let web3 = new Web3(window.ethereum);

    try {
      const accounts = await window.ethereum.request({
        method: "eth_accounts"
      });
      console.log(" 🛠 accounts 🛠", accounts);
      const networkId = await window.ethereum.request({
        method: "net_version"
      });
      console.log(" 🛠 networkId 🛠 ", networkId);
      /*
        option 1 : 로컬 환경
      */
      // const nft_Network = await NftContract.networks[networkId];
      // const nftDeal_NetworkData = await NftDealContract.networks[networkId];
      // const auctionCreator_NetworkData = await AuctionCreatorContract.networks[networkId];
      // const gameToken_NetworkData = await GameTokenContract.networks[networkId];
      // const claim20_NetworkData = await Claim20_Contract.networks[networkId];
      // const stakingNetworkData = await Staking.networks[networkId];
      // const nftContract = new web3.eth.Contract(NftContract.abi, nft_Network.address);
      // const nftDealContract = new web3.eth.Contract(NftDealContract.abi, nftDeal_NetworkData.address);
      // const auctionCreatorContract = new web3.eth.Contract(
      //   AuctionCreatorContract.abi,
      //   auctionCreator_NetworkData.address
      // );
      // const gameTokenContract = new web3.eth.Contract(GameTokenContract.abi, gameToken_NetworkData.address);
      // const claim20_Contract = new web3.eth.Contract(Claim20_Contract.abi, claim20_NetworkData.address);
      // const stakingContract = new web3.eth.Contract(Staking.abi, stakingNetworkData.address);

      /*
        option 2: 배포 환경
      */

      const nftContract = new web3.eth.Contract(NftContract.abi, "0xDA0709De3fc175A799ECFb1EebB5A6Ba2Ee2f7F7");
      const nftDealContract = new web3.eth.Contract(NftDealContract.abi, "0x7A54B673d90814039aaDA3bE48e86Ff74298aB62");
      const auctionCreatorContract = new web3.eth.Contract(AuctionCreatorContract.abi, "0x8C9011A92264884175E04Be45583fF4cD6CB5513");
      const gameTokenContract = new web3.eth.Contract(GameTokenContract.abi, "0xf31E19f22547C6dFC7C344B9cBB0236F7d05EEB9");
      const claim20_Contract = new web3.eth.Contract(Claim20_Contract.abi, "0x5a61Ea9e4ba77C26483Cea8Ca73979BC10b5307f");
      const stakingContract = new web3.eth.Contract(Staking.abi, "0x357d60591Acf907Ba49D348459E37ada86e6cf23");
      dispatch(connectSuccess({
        account: accounts.toString(),
        networkId: networkId,
        nftContract: nftContract,
        nftDealContract: nftDealContract,
        gameTokenContract: gameTokenContract,
        auctionCreatorContract: auctionCreatorContract,
        claim20_Contract: claim20_Contract,
        stakingContract: stakingContract,
        web3: web3
      }));
      dispatch(authenticate());
      await nftDealContract.events.submitSell().on("data", async e => {
        console.log("이벤트", e.returnValues);
      }); // Add listeners start

      window.ethereum.on("accountsChanged", accounts => {
        dispatch(updateAccount(accounts));
      });
      window.ethereum.on("chainChanged", () => {
        window.location.reload();
      }); // Add listeners end
    } catch (err) {
      console.log(err);
      dispatch(connectFailed("Something went wrong."));
    }
  };
};
const updateAccount = account => {
  return async dispatch => {
    dispatch(updateAccountRequest({
      account: account
    }));
    dispatch((0,_data_dataActions__WEBPACK_IMPORTED_MODULE_8__/* .fetchData */ .rQ)(account));
    console.log("같은 네트워크에서 계정만 교체");

    if (account) {
      console.log(account);
      fetch(`${baseUrl}/users?publicAddress=${account}`).then(response => response.json()).then(users => users.length ? users[0] : dispatch(disconnectWallet())).catch(err => {
        console.log(err); // dispatch(disconnectWallet())
      });
    }
  };
};
const connectWallet = () => {
  console.log(" 🛠 connectWallet 🛠");
  return async dispatch => {
    dispatch(connectRequest());

    if (window.ethereum) {
      dispatch(authenticate());
      let web3 = new (web3__WEBPACK_IMPORTED_MODULE_0___default())(window.ethereum);

      try {
        const accounts = await window.ethereum.request({
          method: "eth_accounts"
        });
        console.log(accounts);
        const networkId = await window.ethereum.request({
          method: "net_version"
        });
        console.log("networkId : ", networkId);

        if (networkId == 5777 || 3 || 0) {
          console.log("if 통과", networkId);
          /*
          option 1 : 로컬 환경
          */
          // const nft_Network = await NftContract.networks[networkId];
          // const nftDeal_NetworkData = await NftDealContract.networks[networkId];
          // const auctionCreator_NetworkData = await AuctionCreatorContract.networks[networkId];
          // const gameToken_NetworkData = await GameTokenContract.networks[networkId];
          // const claim20_NetworkData = await Claim20_Contract.networks[networkId];
          // const stakingNetworkData = await Staking.networks[networkId];
          // const nftContract = new web3.eth.Contract(NftContract.abi, nft_Network.address);
          // const nftDealContract = new web3.eth.Contract(NftDealContract.abi, nftDeal_NetworkData.address);
          // const auctionCreatorContract = new web3.eth.Contract(
          //   AuctionCreatorContract.abi,
          //   auctionCreator_NetworkData.address
          // );
          // const gameTokenContract = new web3.eth.Contract(GameTokenContract.abi, gameToken_NetworkData.address);
          // const claim20_Contract = new web3.eth.Contract(Claim20_Contract.abi, claim20_NetworkData.address);
          // const stakingContract = new web3.eth.Contract(Staking.abi, stakingNetworkData.address);

          /*
          option 2: 배포 환경
          */

          const nftContract = new web3.eth.Contract(_contracts_artifacts_NftContract_json__WEBPACK_IMPORTED_MODULE_1__/* .abi */ .Mt, "0xDA0709De3fc175A799ECFb1EebB5A6Ba2Ee2f7F7");
          const nftDealContract = new web3.eth.Contract(_contracts_artifacts_NftDealContract_json__WEBPACK_IMPORTED_MODULE_2__/* .abi */ .Mt, "0x7A54B673d90814039aaDA3bE48e86Ff74298aB62");
          const auctionCreatorContract = new web3.eth.Contract(_contracts_artifacts_AuctionCreator_json__WEBPACK_IMPORTED_MODULE_5__/* .abi */ .Mt, "0x8C9011A92264884175E04Be45583fF4cD6CB5513");
          const gameTokenContract = new web3.eth.Contract(_contracts_artifacts_GameToken_json__WEBPACK_IMPORTED_MODULE_3__/* .abi */ .Mt, "0xf31E19f22547C6dFC7C344B9cBB0236F7d05EEB9");
          const claim20_Contract = new web3.eth.Contract(_contracts_artifacts_Claim_20_json__WEBPACK_IMPORTED_MODULE_4__/* .abi */ .Mt, "0x5a61Ea9e4ba77C26483Cea8Ca73979BC10b5307f");
          const stakingContract = new web3.eth.Contract(_contracts_artifacts_Staking_json__WEBPACK_IMPORTED_MODULE_6__/* .abi */ .Mt, "0x357d60591Acf907Ba49D348459E37ada86e6cf23");
          const coinbase = await web3.eth.getCoinbase(); //계정

          if (!coinbase) {
            dispatch(connectFailed("메타마스크 로그인이 필요합니다."));
            return;
          }

          const publicAddress = coinbase.toLowerCase();
          dispatch(connectRequest());

          const handleAuthenticate = async ({
            publicAddress,
            signature
          }) => fetch(`${baseUrl}/auth`, {
            body: JSON.stringify({
              publicAddress,
              signature
            }),
            headers: {
              "Content-Type": "application/json"
            },
            method: "POST"
          }).then(response => response.json());

          const handleSignMessage = async ({
            publicAddress,
            nonce
          }) => {
            try {
              const signature = await web3.eth.personal.sign(`I am signing my one-time nonce: ${nonce}`, publicAddress, "" // MetaMask will ignore the password argument here
              );
              return {
                publicAddress,
                signature
              };
            } catch (err) {
              throw new Error("You need to sign the message to be able to log in.");
            }
          };

          const handleSignup = publicAddress => fetch(`${baseUrl}/users`, {
            body: JSON.stringify({
              publicAddress
            }),
            headers: {
              "Content-Type": "application/json"
            },
            method: "POST"
          }).then(response => response.json());

          const handleLoggedIn = auth => {
            const one_hour = new Date(new Date().getTime() + 3600 * 1000); // sign token for 1 hour

            js_cookie__WEBPACK_IMPORTED_MODULE_9__["default"].set(LS_KEY, JSON.stringify(auth), {
              expires: one_hour
            });
            dispatch(authenticate());
          }; // Look if user with current publicAddress is already present on backend


          fetch(`${baseUrl}/users?publicAddress=${publicAddress}`).then(response => response.json()) // If yes, retrieve it. If no, create it.
          .then(users => users.length ? users[0] : handleSignup(publicAddress)) // Popup MetaMask confirmation modal to sign message
          .then(handleSignMessage) // Send signature to backend on the /auth route
          .then(handleAuthenticate) // Pass accessToken back to parent component (to save it in localStorage)
          .then(auth => handleLoggedIn(auth)).catch(err => {
            console.log(err); // setLoading(false);
          });
          dispatch(connectSuccess({
            account: accounts.toString(),
            networkId: networkId,
            nftContract: nftContract,
            nftDealContract: nftDealContract,
            gameTokenContract: gameTokenContract,
            auctionCreatorContract: auctionCreatorContract,
            claim20_Contract: claim20_Contract,
            stakingContract: stakingContract,
            web3: web3
          }));
          await nftDealContract.events.submitSell().on("data", async e => {
            console.log("이벤트", e.returnValues);
          }); // Add listeners start

          window.ethereum.on("accountsChanged", accounts => {
            dispatch(updateAccount(accounts));
          });
          window.ethereum.on("chainChanged", () => {
            window.location.reload();
          }); // dispatch(getMyNft(accounts[0]));
          // Add listeners end
        } else {}
      } catch (err) {
        console.log(err);
        dispatch(connectFailed("Something went wrong."));
      }
    } else {
      dispatch(connectFailed("Install Metamask."));
    }
  };
};
const disconnectWallet = () => {
  return async dispatch => {
    js_cookie__WEBPACK_IMPORTED_MODULE_9__["default"].remove(LS_KEY);
    dispatch(authenticate());
    dispatch(connectFailed("로그아웃"));
  };
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7899:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "rQ": () => (/* binding */ fetchData),
/* harmony export */   "tA": () => (/* binding */ addAuctionList)
/* harmony export */ });
/* unused harmony export getSaleNft */
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5416);
// log


const fetchDataRequest = () => {
  return {
    type: "CHECK_DATA_REQUEST"
  };
};

const fetchDataSuccess = payload => {
  return {
    type: "CHECK_DATA_SUCCESS",
    payload: payload
  };
};

const fetchDataFailed = payload => {
  return {
    type: "CHECK_DATA_FAILED",
    payload: payload
  };
};

const addAuctioningList = payload => {
  return {
    type: "ADD_AUCTION",
    payload: payload
  };
};

const fetchData = account => {
  return async dispatch => {
    dispatch(fetchDataRequest());

    try {
      console.log(account);
      let myNft = await _store__WEBPACK_IMPORTED_MODULE_0__/* ["default"].getState */ .Z.getState().blockchain.nftContract.methods.getMyToken().call({
        from: account.toString()
      });
      console.log(myNft.uri);
      console.log(myNft.id);
      dispatch(fetchDataSuccess({
        myNftId: myNft.id,
        myNftUri: myNft.uri.slice(6)
      }));
    } catch (err) {
      console.log(err);
      dispatch(fetchDataFailed("Could not load data from contract."));
    }
  };
};
const addAuctionList = (id, grade, attributes, name, image, description) => {
  return dispatch => {
    try {
      const auctionNftInfo = {
        id: id,
        grade: grade,
        attributes: attributes,
        name: name,
        image: image,
        description: description
      };
      console.log(id);
      console.log(image);
      console.log(description);
      console.log(auctionNftInfo);
      dispatch(addAuctioningList({
        kdkd: id,
        auctionList: auctionNftInfo
      }));
    } catch (error) {
      console.error(error);
    }
  };
};
const onSaleNfts = (/* unused pure expression or super */ null && ([]));
const getSaleNft = (data, tokenId, price) => {
  return dispatch => {
    try {
      console.log("getSaleNft-dataActions");
      console.log(data);
      let nftInfo = {
        tokenId: tokenId,
        price: price,
        name: data.name,
        description: data.description,
        img: data.img
      };
      onSaleNfts.push(nftInfo);
      console.log("getSaleNft-finished");
      dispatch(fetchDataSuccess({
        onSaleNfts: onSaleNfts
      }));
    } catch (error) {
      console.log(error);
    }
  };
};

/***/ }),

/***/ 2050:
/***/ ((module) => {

module.exports = JSON.parse('{"Mt":[{"inputs":[{"internalType":"address","name":"_nftDealContract","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"auctionNfts","outputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint8","name":"tokenId","type":"uint8"},{"internalType":"uint256","name":"endBlockNum","type":"uint256"},{"internalType":"uint256","name":"endTime","type":"uint256"},{"internalType":"contract Auction","name":"auctionContract","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"auctionToId","outputs":[{"internalType":"contract Auction","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"nftDealContract","outputs":[{"internalType":"contract NftDealContract","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint8","name":"_tokenId","type":"uint8"},{"internalType":"address","name":"_nftContractAddres","type":"address"},{"internalType":"uint256","name":"_startBid","type":"uint256"},{"internalType":"uint256","name":"_startTime","type":"uint256"},{"internalType":"uint256","name":"_endTime","type":"uint256"}],"name":"createAuction","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"getAuctionAddress","outputs":[{"internalType":"contract Auction","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"getAuctioningNft","outputs":[{"components":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint8","name":"tokenId","type":"uint8"},{"internalType":"uint256","name":"endBlockNum","type":"uint256"},{"internalType":"uint256","name":"endTime","type":"uint256"},{"internalType":"contract Auction","name":"auctionContract","type":"address"}],"internalType":"struct AuctionCreator.AuctionNft[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"getCurrentBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true}]}');

/***/ }),

/***/ 9221:
/***/ ((module) => {

module.exports = JSON.parse('{"Mt":[{"inputs":[{"internalType":"contract GameToken","name":"_token","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"rewardType","type":"string"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"}],"name":"ClaimEvent","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"admin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"gametoken","outputs":[{"internalType":"contract GameToken","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint8","name":"count","type":"uint8"},{"internalType":"bool","name":"isApproved","type":"bool"},{"internalType":"bool","name":"isRewarded","type":"bool"}],"internalType":"struct Claim_20.DailyAchiever[]","name":"result","type":"tuple[]"}],"name":"approveClaim_mission","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_currentTime","type":"uint256"}],"name":"claim_mission","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint8","name":"ranking","type":"uint8"},{"internalType":"string","name":"gameTitle","type":"string"},{"internalType":"bool","name":"isApproved","type":"bool"},{"internalType":"bool","name":"isRewarded","type":"bool"}],"internalType":"struct Claim_20.WeeklyRank[]","name":"result","type":"tuple[]"}],"name":"approveClaim_rank","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint8","name":"ranking","type":"uint8"},{"internalType":"string","name":"gameTitle","type":"string"},{"internalType":"bool","name":"isApproved","type":"bool"},{"internalType":"bool","name":"isRewarded","type":"bool"}],"internalType":"struct Claim_20.WeeklyRank[]","name":"result","type":"tuple[]"},{"internalType":"uint256","name":"currentTime","type":"uint256"}],"name":"claim_rank","outputs":[],"stateMutability":"nonpayable","type":"function"}]}');

/***/ }),

/***/ 4332:
/***/ ((module) => {

module.exports = JSON.parse('{"Mt":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"test_getBlance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"getMsgSender","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"_approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"test_approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]}');

/***/ }),

/***/ 6339:
/***/ ((module) => {

module.exports = JSON.parse('{"Mt":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"},{"indexed":false,"internalType":"string","name":"historyType","type":"string"}],"name":"NftHistory","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"myNfts","outputs":[{"internalType":"uint16","name":"id","type":"uint16"},{"internalType":"string","name":"uri","type":"string"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"remainedGreen","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"remainedPurple","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"remainedRed","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"tokenIds_green","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"tokenIds_purple","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"tokenIds_red","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint16","name":"_tokenId","type":"uint16"},{"internalType":"uint256","name":"_idx","type":"uint256"}],"name":"handOver","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_tokenOwner","type":"address"}],"name":"getMyToken","outputs":[{"components":[{"internalType":"uint16","name":"id","type":"uint16"},{"internalType":"string","name":"uri","type":"string"}],"internalType":"struct NftContract.RenderToken[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"_tokenOwner","type":"address"}],"name":"haveTokenBool","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"remainNfts","outputs":[{"internalType":"uint16","name":"","type":"uint16"},{"internalType":"uint16","name":"","type":"uint16"},{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"string","name":"_tokenURI","type":"string"},{"internalType":"uint256","name":"_grade","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_timestamp","type":"uint256"}],"name":"create","outputs":[{"components":[{"internalType":"uint16","name":"id","type":"uint16"},{"internalType":"string","name":"uri","type":"string"}],"internalType":"struct NftContract.RenderToken[]","name":"","type":"tuple[]"}],"stateMutability":"payable","type":"function","payable":true},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"time","type":"uint256"},{"internalType":"string","name":"historyType","type":"string"}],"name":"nftEventTrigger","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"}],"name":"getMyLastNft","outputs":[{"components":[{"internalType":"uint16","name":"id","type":"uint16"},{"internalType":"string","name":"uri","type":"string"}],"internalType":"struct NftContract.RenderToken","name":"","type":"tuple"}],"stateMutability":"view","type":"function","constant":true}]}');

/***/ }),

/***/ 9046:
/***/ ((module) => {

module.exports = JSON.parse('{"Mt":[{"inputs":[{"internalType":"address","name":"_nftContractAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"},{"indexed":false,"internalType":"string","name":"historyType","type":"string"}],"name":"NftHistory","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"price","type":"uint256"},{"indexed":false,"internalType":"address","name":"tokenOwner","type":"address"},{"indexed":false,"internalType":"string","name":"tokenUri","type":"string"}],"name":"submitSell","type":"event"},{"inputs":[],"name":"nftContractAddress","outputs":[{"internalType":"contract NftContract","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"nftPrices","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"onSaleNftArray","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"uint256","name":"_price","type":"uint256"}],"name":"sellNft","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"cancelSell","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"uint256","name":"_timestamp","type":"uint256"}],"name":"buyNft","outputs":[],"stateMutability":"payable","type":"function","payable":true},{"inputs":[],"name":"getOnSaleNftArrayLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"onSale","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"getOnSaleNftArray","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"getNftTokenPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true}]}');

/***/ }),

/***/ 4511:
/***/ ((module) => {

module.exports = JSON.parse('{"Mt":[{"inputs":[{"internalType":"contract GameToken","name":"_gametoken","type":"address"},{"internalType":"contract NftContract","name":"_nfttoken","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"}],"name":"nftStakeEvent","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"}],"name":"tokenStakeEvent","type":"event"},{"inputs":[],"name":"gametoken","outputs":[{"internalType":"contract GameToken","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"nfttoken","outputs":[{"internalType":"contract NftContract","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"name":"onERC721Received","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"stakingData","outputs":[{"internalType":"address","name":"ownerAddress","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"startTime","type":"uint256"},{"internalType":"uint256","name":"endTime","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"setEndTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"nftStake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"exit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"calcReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"getStakingData","outputs":[{"components":[{"internalType":"address","name":"ownerAddress","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"startTime","type":"uint256"},{"internalType":"uint256","name":"endTime","type":"uint256"}],"internalType":"struct Staking.StakingData","name":"","type":"tuple"}],"stateMutability":"view","type":"function","constant":true}]}');

/***/ })

};
;