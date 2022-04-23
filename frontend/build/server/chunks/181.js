"use strict";
exports.id = 181;
exports.ids = [181];
exports.modules = {

/***/ 5704:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9816);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5567);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9915);
/* harmony import */ var _game_GameInterface__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6988);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_4__]);
js_cookie__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











const MainNftCard = props => {
  const blockchain = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(state => state.blockchain);
  const {
    account,
    auth,
    nftContract
  } = blockchain;
  const {
    0: mainNFT,
    1: setMainNFT
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const LS_KEY = "login-with-metamask:auth";
  const baseUri = "http://127.0.0.1:8080/ipfs";
  const {
    0: currentImage,
    1: setCurrentImage
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const {
    0: accessToken,
    1: setAccessToken
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""); // 페이지 진입 시 대표 NFT 받아오기

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(async () => {
    if (!(account && auth)) return;
    console.log(123);
    const mainNFT = await _game_GameInterface__WEBPACK_IMPORTED_MODULE_5__/* ["default"].getMyNFT */ .Z.getMyNFT(account);
    setMainNFT(mainNFT);
    console.log(mainNFT);
  }, [account, auth]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(async () => {
    if (!mainNFT) return;
    const getToken = js_cookie__WEBPACK_IMPORTED_MODULE_4__["default"].get(LS_KEY);
    const parsedToken = getToken && JSON.parse(getToken).accessToken;
    setAccessToken(parsedToken);
    console.log(getToken);
    console.log(parsedToken);
    console.log(accessToken);
    if (!parsedToken) return;
    const {
      payload: {
        id
      }
    } = jwt_decode__WEBPACK_IMPORTED_MODULE_3___default()(parsedToken);
    await nftContract.methods.getMyToken(account).call({
      from: account
    }).then(async tokenData => {
      console.log("getMyToken", tokenData);
      if (!tokenData) return;

      for (const info of tokenData) {
        console.log(info);
        console.log(info.id);

        if (info.id == mainNFT) {
          const response = await axios__WEBPACK_IMPORTED_MODULE_2___default().get(`${baseUri}${info.uri.slice(6)}/${info.id}.json`);
          console.log(`${baseUri}${response.data.image.slice(6)}`);
          setCurrentImage(`${baseUri}${response.data.image.slice(6)}`);
          return;
        }
      }
    });
  }, [mainNFT]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("img", {
      src: currentImage,
      className: "jsx-2335478933" + " " + "main-nft-img"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
      id: "2335478933",
      children: [".main-nft-img.jsx-2335478933{width:160px;}"]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainNftCard);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2531:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ game_GameItem)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/ItemImage.jsx




const ItemImage = props => {
  return /*#__PURE__*/jsx_runtime_.jsx(react_.Img, {
    src: `../images/item_${props.itemId}.png`,
    w: "100%",
    h: "100%"
  });
};

/* harmony default export */ const components_ItemImage = (ItemImage);
// EXTERNAL MODULE: ./components/game/GameInterface.jsx
var GameInterface = __webpack_require__(6988);
;// CONCATENATED MODULE: ./components/game/GameItem.jsx








const GameItem = ({
  item,
  gameTitle,
  getItemEffect,
  resultBonus,
  extraPoints,
  isPlaying,
  updateChance
}) => {
  const blockchain = (0,external_react_redux_.useSelector)(state => state.blockchain);
  const {
    account
  } = blockchain; // 내 소유 아이템 목록

  const {
    0: myItemQuantity,
    1: setMyItemQuantity
  } = (0,external_react_.useState)(0); // 아이템 사용하기

  const usingItem = async () => {
    if (myItemQuantity == 0) return; // 아이템 효과

    const recivedItemEffect = await GameInterface/* default.getItemEffect */.Z.getItemEffect(account, item.itemName, gameTitle);
    console.log(recivedItemEffect);

    if (recivedItemEffect) {
      // 아이템 사용
      await GameInterface/* default.usingItem */.Z.usingItem(account, item.itemName); // 사용 후 갱신된 수량

      const recivedQuantity = await GameInterface/* default.getMyItemQuantity */.Z.getMyItemQuantity(account, item.itemName); // 사용 아이템이 횟수추가면 횟수추가하고 횟수업데이트

      if (recivedItemEffect.lifeBonus) {
        const updatedChance = await GameInterface/* default.getMyChance */.Z.getMyChance(account, gameTitle);
        updateChance(updatedChance);
      } else {
        getItemEffect(recivedItemEffect);
      }

      setMyItemQuantity(recivedQuantity);
      alert("아이템이 적용되었습니다");
    } else {
      alert("아이템 사용에 실패하였습니다");
    }
  };

  (0,external_react_.useEffect)(async () => {
    const recivedQuantity = await GameInterface/* default.getMyItemQuantity */.Z.getMyItemQuantity(account, item.itemName);
    setMyItemQuantity(recivedQuantity);
  }, [account]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Button, {
    onClick: usingItem,
    colorScheme: "blue",
    width: "70px",
    height: "70px",
    margin: "10px 5px 0px",
    padding: "0",
    display: item.itemId == 7 && gameTitle != "테트리스" ? "none" : "block",
    position: "relative",
    disabled: // 아이템 사용 제한 추가
    // (가진 수량이 0개면, 아이템번호 4~7번은 게임중이 아니면,)
    // (4~7번 아이템은 한 게임당 두번이상 사용 불가)
    myItemQuantity == 0 || item.itemId >= 4 && !isPlaying || item.itemId >= 4 && item.itemId <= 6 && resultBonus || item.itemId == 7 && extraPoints,
    children: [/*#__PURE__*/jsx_runtime_.jsx(components_ItemImage, {
      itemId: item.itemId
    }), /*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
      position: "absolute",
      right: "2px",
      top: "0",
      children: myItemQuantity
    })]
  });
};

/* harmony default export */ const game_GameItem = (GameItem);

/***/ }),

/***/ 8006:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _GameInterface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6988);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);






const GameSelectbar = () => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
    m: "0 10px 10px",
    justifyContent: "space-evenly",
    children: _GameInterface__WEBPACK_IMPORTED_MODULE_2__/* ["default"].gameList.map */ .Z.gameList.map((game, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
      href: `/game/${game.gameUrl}`,
      m: "10px 5px",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("a", {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
          children: game.gameTitle
        })
      })
    }, index))
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameSelectbar);

/***/ }),

/***/ 3697:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MainNftCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5704);
/* harmony import */ var _MissionCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5976);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_MainNftCard__WEBPACK_IMPORTED_MODULE_2__]);
_MainNftCard__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const InGameProfile = ({
  hasMission,
  filledValue
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Box, {
    mt: "50px",
    w: "160px",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_MainNftCard__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}), hasMission && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
      className: "mission-box",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_MissionCard__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        filledValue: filledValue,
        hasMission: hasMission
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InGameProfile);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5976:
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






const MissionCard = ({
  hasMission,
  filledValue
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: hasMission && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Flex, {
      direction: "column",
      textAlign: "center",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Box, {
        children: "\uBC0B\uC200"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Box, {
        children: hasMission.DailyMission.missionDetails
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Box, {
        children: hasMission.attainment ? "완료하셨읍니다" : `${filledValue}/${hasMission.DailyMission.targetValue}`
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MissionCard);

/***/ })

};
;