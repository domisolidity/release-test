"use strict";
exports.id = 321;
exports.ids = [321];
exports.modules = {

/***/ 996:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Pages)
/* harmony export */ });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Footer_Footer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6964);
/* harmony import */ var _Navbars_FullScreenNavbar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6005);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3446);
/* harmony import */ var _theme_theme_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6356);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Navbars_FullScreenNavbar_js__WEBPACK_IMPORTED_MODULE_2__, _routes__WEBPACK_IMPORTED_MODULE_4__]);
([_Navbars_FullScreenNavbar_js__WEBPACK_IMPORTED_MODULE_2__, _routes__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// chakra imports

 // core components







function Pages({
  children
}) {
  console.log("FullScreen"); // const { ...rest } = props;
  // ref for the wrapper div

  const wrapper = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.createRef)();
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    document.body.style.overflow = "unset"; // Specify how to clean up after this effect:

    return function cleanup() {};
  });

  const getActiveRoute = routes => {
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
        //   window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1
        // ) {
        //   return routes[i].name;
        // }
      }
    }

    return activeRoute;
  };

  const getActiveNavbar = routes => {
    let activeNavbar = false;

    for (let i = 0; i < routes.length; i++) {
      if (routes[i].category) {
        let categoryActiveNavbar = getActiveNavbar(routes[i].views);

        if (categoryActiveNavbar !== activeNavbar) {
          return categoryActiveNavbar;
        }
      } else {// if (
        //   window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1
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
  //     if (prop.layout === "/FullScreen") {
  //       console.log(prop)
  //       // return (
  //       //   <NextLink href={`${prop.path}`} key={key} passHref>
  //       //     <Link>
  //       //       <a> sdds</a>
  //       //     </Link>
  //       //   </NextLink>
  //       // )
  //       // router.push(`${prop.path}`)
  //       // return (<></>
  //       //   // router.push(`${prop.path}`)
  //       //   //<Link href={`${prop.layout + prop.path}`} ></Link>
  //       //   // <Route
  //       //   //   path={prop.layout + prop.path}
  //       //   //   component={prop.component}
  //       //   //   key={key}
  //       //   // />
  //       //   // <NextLink href={`${prop.layout + prop.path}`} passHref>
  //       //   // </NextLink>
  //       // );
  //     } else {
  //       return null;
  //     }
  //   });
  // };


  const navRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.ChakraProvider, {
    theme: _theme_theme_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
    resetCss: false,
    w: "100%",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Box, {
      ref: navRef,
      w: "100%",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Portal, {
        containerRef: navRef,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_Navbars_FullScreenNavbar_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
          secondary: getActiveNavbar(_routes__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z),
          logoText: "DOREMI GAMES"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Box, {
        w: "100%",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Box, {
          ref: wrapper,
          w: "100%",
          children: children
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Box, {
        px: "24px",
        mx: "auto",
        width: "1044px",
        maxW: "100%",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_Footer_Footer_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {})
      })]
    })
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6005:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ FullScreenNavbar)
/* harmony export */ });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Icons_Icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1914);
/* harmony import */ var _Sidebar_SidebarResponsive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8205);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3446);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1664);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_routes__WEBPACK_IMPORTED_MODULE_3__]);
_routes__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
const _excluded = ["logo", "logoText", "secondary"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// Chakra imports








function FullScreenNavbar(props) {
  const contractAddress = "컨트랙트주소";
  const {
    0: open,
    1: setOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const {
    logo,
    logoText,
    secondary
  } = props,
        rest = _objectWithoutProperties(props, _excluded); // verifies if routeName is the one active (in browser input)


  const activeRoute = routeName => {
    return window.location.href.indexOf(routeName) > -1 ? true : false;
  }; // Chakra color mode


  let navbarIcon = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.useColorModeValue)("gray.700", "gray.200");
  let mainText = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.useColorModeValue)("gray.700", "gray.200");
  let navbarBg = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.useColorModeValue)("linear-gradient(112.83deg, rgba(255, 255, 255, 0.82) 0%, rgba(255, 255, 255, 0.8) 110.84%)", "linear-gradient(112.83deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0) 110.84%)");
  let navbarBorder = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.useColorModeValue)("1.5px solid #FFFFFF", "1.5px solid rgba(255, 255, 255, 0.31)");
  let navbarShadow = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.useColorModeValue)("0px 7px 23px rgba(0, 0, 0, 0.05)", "none");
  let navbarFilter = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.useColorModeValue)("none", "drop-shadow(0px 7px 23px rgba(0, 0, 0, 0.05))");
  let navbarBackdrop = "blur(21px)";
  let bgButton = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.useColorModeValue)("linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)", "gray.800");
  let navbarPosition = "fixed";
  let colorButton = "white";

  if (props.secondary === true) {
    navbarIcon = "white";
    navbarBg = "none";
    navbarBorder = "none";
    navbarShadow = "initial";
    navbarFilter = "initial";
    navbarBackdrop = "none";
    bgButton = "white";
    colorButton = "gray.700";
    mainText = "white";
    navbarPosition = "absolute";
  }

  var brand = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Link, {
    href: `${"http://localhost:3000"}`,
    target: "_blank",
    display: "flex",
    lineHeight: "100%",
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
    color: mainText,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_Icons_Icons__WEBPACK_IMPORTED_MODULE_1__/* .TimLogo */ .Cw, {
      w: "32px",
      h: "32px",
      me: "10px"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Text, {
      fontSize: "sm",
      mt: "3px",
      children: logoText
    })]
  });

  var linksAuth = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.HStack, {
    display: {
      sm: "none",
      lg: "flex"
    },
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(next_link__WEBPACK_IMPORTED_MODULE_5__["default"], {
      href: "/home",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Button, {
        fontSize: "sm",
        ms: "0px" //me="0px"
        ,
        px: "0px",
        me: {
          sm: "2px",
          md: "16px"
        },
        color: navbarIcon,
        variant: "transparent-with-icon",
        leftIcon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_Icons_Icons__WEBPACK_IMPORTED_MODULE_1__/* .HomeIcon */ .tv, {
          color: navbarIcon,
          w: "12px",
          h: "12px",
          me: "0px"
        }),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Text, {
          children: "Home"
        })
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(next_link__WEBPACK_IMPORTED_MODULE_5__["default"], {
      href: "/mypage",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Button, {
        fontSize: "sm",
        ms: "0px" //me="0px"
        ,
        px: "0px",
        me: {
          sm: "2px",
          md: "16px"
        },
        color: navbarIcon,
        variant: "transparent-with-icon",
        leftIcon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_Icons_Icons__WEBPACK_IMPORTED_MODULE_1__/* .PersonIcon */ .Tk, {
          color: navbarIcon,
          w: "12px",
          h: "12px",
          me: "0px"
        }),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Text, {
          children: "My Page"
        })
      })
    })]
  });

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Flex, {
    position: navbarPosition,
    top: "16px",
    left: "50%",
    transform: "translate(-50%, 0px)",
    background: navbarBg,
    border: navbarBorder,
    boxShadow: navbarShadow,
    filter: navbarFilter,
    backdropFilter: navbarBackdrop,
    borderRadius: "15px",
    px: "16px",
    py: "22px",
    mx: "auto",
    width: "1044px",
    maxW: "90%",
    alignItems: "center",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Flex, {
      w: "100%",
      justifyContent: {
        sm: "start",
        lg: "space-between"
      },
      children: [brand, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Box, {
        ms: {
          base: "auto",
          lg: "0px"
        },
        display: {
          base: "flex",
          lg: "none"
        },
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_Sidebar_SidebarResponsive__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, _objectSpread({
          logoText: props.logoText,
          secondary: props.secondary,
          routes: _routes__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z // logo={logo}

        }, rest))
      }), linksAuth, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Link, {
        href: `https://etherscan.io/address/${contractAddress}`,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Button, {
          bg: bgButton,
          color: colorButton,
          fontSize: "xs",
          variant: "no-hover",
          borderRadius: "35px",
          px: "30px",
          display: {
            sm: "none",
            lg: "flex"
          },
          children: "CONTRACT ADDRESS"
        })
      })]
    })
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;