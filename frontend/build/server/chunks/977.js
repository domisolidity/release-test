"use strict";
exports.id = 977;
exports.ids = [977];
exports.modules = {

/***/ 5416:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ store)
});

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__(6695);
// EXTERNAL MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_ = __webpack_require__(5648);
// EXTERNAL MODULE: external "redux-thunk"
var external_redux_thunk_ = __webpack_require__(8417);
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_);
// EXTERNAL MODULE: external "redux-devtools-extension"
var external_redux_devtools_extension_ = __webpack_require__(173);
;// CONCATENATED MODULE: ./redux/blockchain/blockchainReducer.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const initialState = {
  loading: false,
  account: null,
  networkId: null,
  nftContract: null,
  nftDealContract: null,
  gameTokenContract: null,
  auctionCreatorContract: null,
  claim20_Contract: null,
  web3: null,
  errorMsg: "",
  auth: false
};

const blockchainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CONNECTION_REQUEST":
      return _objectSpread(_objectSpread({}, initialState), {}, {
        loading: true
      });

    case "CONNECTION_SUCCESS":
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        account: action.payload.account.toString(),
        networkId: action.payload.networkId,
        nftContract: action.payload.nftContract,
        nftDealContract: action.payload.nftDealContract,
        gameTokenContract: action.payload.gameTokenContract,
        auctionCreatorContract: action.payload.auctionCreatorContract,
        claim20_Contract: action.payload.claim20_Contract,
        stakingContract: action.payload.stakingContract,
        web3: action.payload.web3,
        errorMsg: ""
      });

    case "CONNECTION_FAILED":
      return _objectSpread(_objectSpread({}, initialState), {}, {
        loading: false,
        errorMsg: action.payload
      });

    case "UPDATE_ACCOUNT":
      return _objectSpread(_objectSpread({}, state), {}, {
        account: action.payload.account.toString()
      });

    case "AUTH":
      return _objectSpread(_objectSpread({}, state), {}, {
        auth: action.payload
      });

    default:
      return state;
  }
};

/* harmony default export */ const blockchain_blockchainReducer = (blockchainReducer);
;// CONCATENATED MODULE: ./redux/data/dataReducer.js
function dataReducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function dataReducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { dataReducer_ownKeys(Object(source), true).forEach(function (key) { dataReducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { dataReducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function dataReducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const dataReducer_initialState = {
  loading: false,
  myNftId: null,
  myNftUri: null,
  myNfts: null,
  onSaleNfts: null,
  auctionList: null,
  kdkd: null,
  error: false,
  errorMsg: ""
};

const dataReducer = (state = dataReducer_initialState, action) => {
  switch (action.type) {
    case "CHECK_DATA_REQUEST":
      return dataReducer_objectSpread(dataReducer_objectSpread({}, dataReducer_initialState), {}, {
        loading: true
      });

    case "CHECK_DATA_SUCCESS":
      return dataReducer_objectSpread(dataReducer_objectSpread({}, dataReducer_initialState), {}, {
        loading: false,
        myNftId: action.payload.myNftId,
        myNftUri: action.payload.myNftUri,
        myNfts: action.payload.myNfts,
        onSaleNfts: action.payload.onSaleNfts
      });

    case "CHECK_DATA_FAILED":
      return dataReducer_objectSpread(dataReducer_objectSpread({}, dataReducer_initialState), {}, {
        loading: false,
        error: true,
        errorMsg: action.payload
      });

    case "SUCCESS_SUBMIT_SALE":
      return dataReducer_objectSpread(dataReducer_objectSpread({}, dataReducer_initialState), {}, {
        onSaleNfts: action.payload.onSaleNfts
      });

    case "ADD_AUCTION":
      console.log(action.payload);
      return dataReducer_objectSpread(dataReducer_objectSpread({}, dataReducer_initialState), {}, {
        kdkd: action.payload.kdkd,
        auctionList: action.payload.auctionList
      });

    default:
      return state;
  }
};

/* harmony default export */ const data_dataReducer = (dataReducer);
;// CONCATENATED MODULE: ./redux/store.js






const rootReducer = (0,external_redux_.combineReducers)({
  blockchain: blockchain_blockchainReducer,
  data: data_dataReducer
});
const middleware = [(external_redux_thunk_default())];
const composeEnhancers =  true ? (0,external_redux_.compose)((0,external_redux_.applyMiddleware)(...middleware)) : 0;

const configureStore = () => {
  const store = (0,external_redux_.createStore)(rootReducer, composeEnhancers);
  return store;
};

const wrapper = (0,external_next_redux_wrapper_.createWrapper)(configureStore, {
  debug: false
});
/* harmony default export */ const store = (wrapper);

/***/ }),

/***/ 6356:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ theme)
});

// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: external "@chakra-ui/theme-tools"
var theme_tools_ = __webpack_require__(429);
;// CONCATENATED MODULE: ./theme/styles.js

const globalStyles = {
  colors: {
    gray: {
      700: "#1f2733"
    }
  },
  styles: {
    global: props => ({
      body: {
        bg: (0,theme_tools_.mode)("gray.50", "gray.800")(props),
        fontFamily: 'Helvetica, sans-serif'
      },
      html: {
        fontFamily: 'Helvetica, sans-serif'
      }
    })
  }
};
;// CONCATENATED MODULE: ./theme/foundations/fonts.js
const font = {
  body: 'Roboto'
};
;// CONCATENATED MODULE: ./theme/foundations/breakpoints.js
// 1. Import the utilities
 // 2. Update the breakpoints as key-value pairs

const breakpoints = (0,theme_tools_.createBreakpoints)({
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px"
});
;// CONCATENATED MODULE: ./theme/components/button.js
const buttonStyles = {
  components: {
    Button: {
      variants: {
        "no-hover": {
          _hover: {
            boxShadow: "none"
          }
        },
        "transparent-with-icon": {
          bg: "transparent",
          fontWeight: "bold",
          borderRadius: "inherit",
          cursor: "pointer",
          _hover: "none",
          _active: {
            bg: "transparent",
            transform: "none",
            borderColor: "transparent"
          },
          _focus: {
            boxShadow: "none"
          },
          _hover: {
            boxShadow: "none"
          }
        }
      },
      baseStyle: {
        borderRadius: "15px",
        _focus: {
          boxShadow: "none"
        }
      }
    }
  }
};
;// CONCATENATED MODULE: ./theme/components/badge.js

const badgeStyles = {
  components: {
    Badge: {
      sizes: {
        md: {
          width: "65px",
          height: "25px"
        }
      },
      baseStyle: {
        textTransform: "capitalize"
      }
    }
  }
};
;// CONCATENATED MODULE: ./theme/components/link.js
const linkStyles = {
  components: {
    Link: {
      // 3. We can add a new visual variant
      decoration: "none",
      baseStyle: {
        _hover: {
          textDecoration: "none"
        },
        _focus: {
          boxShadow: "none"
        }
      }
    }
  }
};
;// CONCATENATED MODULE: ./theme/components/drawer.js
const drawerStyles = {
  components: {
    Drawer: {
      // 3. We can add a new visual variant
      variants: {
        "with-shadow": {
          placement: "right",
          boxShadow: "0 0 2px 2px #efdfde",
          bgColor: "red"
        }
      }
    }
  }
};
;// CONCATENATED MODULE: ./theme/additions/card/Card.js
const Card = {
  baseStyle: {
    p: "22px",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    position: "relative",
    minWidth: "0px",
    wordWrap: "break-word",
    backgroundClip: "border-box"
  },
  variants: {
    panel: props => ({
      bg: props.colorMode === "dark" ? "gray.700" : "white",
      width: "100%",
      boxShadow: "0px 3.5px 5.5px rgba(0, 0, 0, 0.02)",
      borderRadius: "15px"
    })
  },
  defaultProps: {
    variant: "panel"
  }
};
const CardComponent = {
  components: {
    Card
  }
};
;// CONCATENATED MODULE: ./theme/additions/card/CardBody.js
const CardBody = {
  baseStyle: {
    display: "flex",
    width: "100%"
  }
};
const CardBodyComponent = {
  components: {
    CardBody
  }
};
;// CONCATENATED MODULE: ./theme/additions/card/CardHeader.js
const CardHeader = {
  baseStyle: {
    display: "flex",
    width: "100%"
  }
};
const CardHeaderComponent = {
  components: {
    CardHeader
  }
};
;// CONCATENATED MODULE: ./theme/additions/layout/MainPanel.js
const MainPanel = {
  baseStyle: {
    float: "right",
    maxWidth: "100%",
    overflow: "auto",
    position: "relative",
    maxHeight: "100%",
    transition: "all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)",
    transitionDuration: ".2s, .2s, .35s",
    transitionProperty: "top, bottom, width",
    transitionTimingFunction: "linear, linear, ease"
  },
  variants: {
    main: props => ({
      float: "right"
    }),
    rtl: props => ({
      float: "left"
    })
  },
  defaultProps: {
    variant: "main"
  }
};
const MainPanelComponent = {
  components: {
    MainPanel
  }
};
;// CONCATENATED MODULE: ./theme/additions/layout/PanelContent.js
const PanelContent = {
  baseStyle: {
    ms: "auto",
    me: "auto",
    ps: "15px",
    pe: "15px"
  }
};
const PanelContentComponent = {
  components: {
    PanelContent
  }
};
;// CONCATENATED MODULE: ./theme/additions/layout/PanelContainer.js
const PanelContainer = {
  baseStyle: {
    p: "30px 15px",
    minHeight: "calc(100vh - 123px)"
  }
};
const PanelContainerComponent = {
  components: {
    PanelContainer
  }
};
;// CONCATENATED MODULE: ./theme/theme.js













 // import { mode } from "@chakra-ui/theme-tools";

/* harmony default export */ const theme = ((0,react_.extendTheme)({
  breakpoints: breakpoints
}, // Breakpoints
globalStyles, font, // Global styles
buttonStyles, // Button styles
badgeStyles, // Badge styles
linkStyles, // Link styles
drawerStyles, // Sidebar variant for Chakra's drawer
CardComponent, // Card component
CardBodyComponent, // Card Body component
CardHeaderComponent, // Card Header component
MainPanelComponent, // Main Panel component
PanelContentComponent, // Panel Content component
PanelContainerComponent // Panel Container component
));

/***/ })

};
;