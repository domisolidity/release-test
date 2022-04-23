"use strict";
(() => {
var exports = {};
exports.id = 361;
exports.ids = [361,229];
exports.modules = {

/***/ 6421:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ rank_CurrentRanking)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: ./components/Card/Card.js
var Card_Card = __webpack_require__(1401);
// EXTERNAL MODULE: ./components/Card/CardBody.js
var Card_CardBody = __webpack_require__(3447);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Card/CardHeader.js
const _excluded = ["variant", "children"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




function CardHeader_CardHeader(props) {
  const {
    variant,
    children
  } = props,
        rest = _objectWithoutProperties(props, _excluded);

  const styles = (0,react_.useStyleConfig)("CardHeader", {
    variant
  }); // Pass the computed styles into the `__css` prop

  return /*#__PURE__*/jsx_runtime_.jsx(react_.Box, _objectSpread(_objectSpread({
    __css: styles
  }, rest), {}, {
    children: children
  }));
}

/* harmony default export */ const Card_CardHeader = (CardHeader_CardHeader);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/Tables/TablesTableRow.js






function TablesTableRow_TablesTableRow(props) {
  const {
    logo,
    player,
    score,
    date,
    ranking
  } = props;
  console.log(ranking);
  const textColor = (0,react_.useColorModeValue)("gray.700", "white");
  const bgStatus = (0,react_.useColorModeValue)("gray.400", "#1a202c");
  const colorStatus = (0,react_.useColorModeValue)("white", "gray.400");
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Tr, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Td, {
      pl: "0px",
      children: /*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
        fontSize: "md",
        color: textColor,
        fontWeight: "bold",
        children: ranking
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(react_.Td, {
      pl: "0px",
      children: /*#__PURE__*/jsx_runtime_.jsx(react_.Avatar, {
        src: logo,
        w: "50px",
        borderRadius: "12px",
        me: "18px"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(react_.Td, {
      children: /*#__PURE__*/jsx_runtime_.jsx(react_.Flex, {
        direction: "column",
        children: /*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
          fontSize: "md",
          color: textColor,
          fontWeight: "bold",
          children: player
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(react_.Td, {
      children: /*#__PURE__*/jsx_runtime_.jsx(react_.Badge // bg={status === "Online" ? "green.400" : bgStatus}
      // color={status === "Online" ? "white" : colorStatus}
      , {
        fontSize: "16px",
        p: "3px 10px",
        borderRadius: "8px",
        children: score
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(react_.Td, {
      children: /*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
        fontSize: "md",
        color: textColor,
        fontWeight: "bold",
        pb: ".5rem",
        children: date
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(react_.Td, {})]
  });
}

/* harmony default export */ const Tables_TablesTableRow = (TablesTableRow_TablesTableRow);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
;// CONCATENATED MODULE: ./components/rank/RankingTable.jsx
// Chakra imports
 // Custom components









const RankingTable = ({
  currentRankData,
  selectedGameTitle
}) => {
  console.log(currentRankData);
  const textColor = useColorModeValue("gray.700", "white");
  return /*#__PURE__*/_jsxs(Card, {
    overflowX: {
      sm: "scroll",
      xl: "hidden"
    },
    children: [/*#__PURE__*/_jsx(CardHeader, {
      p: "6px 0px 22px 0px",
      children: /*#__PURE__*/_jsx(Text, {
        fontSize: "xl",
        color: textColor,
        fontWeight: "bold",
        children: selectedGameTitle
      })
    }), /*#__PURE__*/_jsx(CardBody, {
      children: /*#__PURE__*/_jsxs(Table, {
        variant: "simple",
        color: textColor,
        children: [/*#__PURE__*/_jsx(Thead, {
          children: /*#__PURE__*/_jsx(Tr, {
            my: ".8rem",
            pl: "0px",
            color: "gray.400",
            children: ["Rnaking", "player", "score", "updated at", ""].map((caption, idx) => {
              return /*#__PURE__*/_jsx(Th, {
                color: "gray.400",
                ps: idx === 0 ? "0px" : null,
                children: caption
              }, idx);
            })
          })
        }), /*#__PURE__*/_jsx(Tbody, {
          children: currentRankData.map(row => {
            return /*#__PURE__*/_jsx(TablesTableRow, {
              name: row.name,
              logo: row.logo,
              email: row.email,
              subdomain: row.subdomain,
              domain: row.domain,
              status: row.status,
              date: row.date
            }, `${row.email}-${row.name}`);
          })
        })]
      })
    })]
  });
};

/* harmony default export */ const rank_RankingTable = ((/* unused pure expression or super */ null && (RankingTable)));
;// CONCATENATED MODULE: ./components/rank/CurrentRanking.jsx
 // Chakra imports

 // Custom components











const CurrentRanking = ({
  currentRankData,
  captions,
  title
}) => {
  const textColor = (0,react_.useColorModeValue)("gray.700", "white");
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Card_Card/* default */.Z, {
      overflowX: {
        sm: "scroll",
        xl: "hidden"
      },
      mt: 10,
      children: [/*#__PURE__*/jsx_runtime_.jsx(Card_CardHeader, {
        p: "6px 0px 22px 0px",
        children: /*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
          fontSize: "xl",
          color: textColor,
          fontWeight: "bold",
          children: title
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(Card_CardBody/* default */.Z, {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Table, {
          variant: "simple",
          color: textColor,
          children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Thead, {
            children: /*#__PURE__*/jsx_runtime_.jsx(react_.Tr, {
              my: ".9rem",
              pl: "0px",
              color: "gray.400",
              children: captions.map((caption, idx) => {
                return /*#__PURE__*/jsx_runtime_.jsx(react_.Th, {
                  color: "gray.400",
                  ps: idx === 0 ? "0px" : null,
                  children: caption
                }, idx);
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(react_.Tbody, {
            children: currentRankData.map((user, i) => {
              const tempUpdatedAt = new Date(user.updatedAt);
              const tempMonth = tempUpdatedAt.getMonth() + 1;
              const tempDate = tempUpdatedAt.getDate();
              const tempHours = tempUpdatedAt.getHours();
              const tempMinutes = tempUpdatedAt.getMinutes();
              const tempSeconds = tempUpdatedAt.getSeconds();
              const updatedAt = `${tempMonth}/${tempDate} ${tempHours}:${tempMinutes}:${tempSeconds}`;
              const ranking = i + 1;
              return /*#__PURE__*/jsx_runtime_.jsx(Tables_TablesTableRow, {
                ranking: ranking,
                logo: user.logo,
                domain: user.domain,
                player: user.user_address,
                score: user.gameScore,
                date: user.updatedAt ? updatedAt : null
              }, i);
            })
          })]
        })
      })]
    })
  });
};

/* harmony default export */ const rank_CurrentRanking = (CurrentRanking);

/***/ }),

/***/ 8704:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);







const PastRanking = ({
  pastRankData
}) => {
  console.log(pastRankData);
  const accordian = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const blockchain = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.blockchain);
  const {
    account,
    auth
  } = blockchain;
  const {
    0: processedRankData,
    1: setProcessedRankData
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const {
    0: pastWeeks,
    1: setPastWeeks
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]); // 역대 순위들 주별로 나누는 작업

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (pastRankData.length == 0) return;
    const tempRankData = [];
    let week = 1;
    const latestWeek = pastRankData[pastRankData.length - 1].weeks;

    for (let i = 0; i < latestWeek; i++) {
      const tempArray = []; // 특정 게임의 역대 순위 개수만큼 반복

      pastRankData.forEach(data => {
        if (data.weeks == week) {
          tempArray.push(data);
        }
      }); // 순위별 오름차순 정렬

      tempArray.sort((a, b) => a.ranking - b.ranking);
      tempRankData.push(tempArray);
      week++;
    } // 최신 주를 위로 출력하기 위해 배열 뒤집기


    tempRankData.reverse();
    setProcessedRankData(tempRankData);
  }, [pastRankData]); // 한 주에 대한 컴포넌트

  const PastWeek = ({
    weeks
  }) => {
    {
      console.log(weeks);
    }
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Accordion, {
        allowMultiple: true,
        ref: accordian,
        children: pastWeeks.map((data, i) => {
          return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.AccordionItem, {
            ref: accordian,
            children: ({
              isExpanded
            }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
              children: [console.log(accordian), console.log(`${i}번`, isExpanded), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h2", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.AccordionButton, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                    flex: "1",
                    textAlign: "left",
                    children: [data[i].weeks, " \uC8FC\uCC28"]
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(AccordionIcon, {})]
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(AccordionPanel, {
                pb: 4,
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(CurrentRanking, {
                  title: `${data[i].game_title} ${data[i].weeks} 주`,
                  currentRankData: data,
                  captions: ["Rnaking", "profile", "player", "score", `${data[i].updatedAt ? "updated at" : ""}`, ""]
                })
              })]
            })
          }, i);
        })
      })
    }) // <Flex
    //   className="past-ranking-box"
    //   flexDirection={"column"}
    //   marginBottom="10px"
    //   backgroundColor="rgb(118 118 118 / 40%)"
    //   borderRadius="10px"
    //   transitionDuration="0.3s"
    //   _hover={{
    //     boxShadow:
    //       "0px 0px 10px 2px #5ce3f2,0px 0px 10px 2px #5ce3f2,0px 0px 10px 2px #5ce3f2, inset 0px 0px 10px 2px #5ce3f2,  inset 0px 0px 10px 2px #5ce3f2, inset 0px 0px 10px 2px #5ce3f2",
    //   }}
    // >
    //   <Text>{weeks[0].weeks}주차</Text>
    //   {weeks.map((rankData) => (
    //     <div
    //       className={
    //         auth && rankData.user_address == account
    //           ? "past-ranking-table my-record"
    //           : "past-ranking-table"
    //       }
    //       key={rankData.rankingId}
    //     >
    //       <div>{rankData.ranking}위</div>
    //       <div>{rankData.gameScore}점</div>
    //       <div>
    //         {rankData.user_address.substr(0, 5)}...
    //         {rankData.user_address.substr(
    //           rankData.user_address.length - 4,
    //           4
    //         )}
    //       </div>
    //     </div>
    //   ))}
    //   <style jsx>{`
    //     .past-ranking-table {
    //       width: 100%;
    //       display: flex;
    //       justify-content: space-evenly;
    //     }
    //     .past-ranking-table div:nth-child(1) {
    //       min-width: 33px;
    //       text-align: right;
    //     }
    //     .past-ranking-table div:nth-child(2) {
    //       min-width: 100px;
    //       text-align: right;
    //     }
    //     .past-ranking-table div:nth-child(3) {
    //       min-width: 140px;
    //     }
    //     .my-record {
    //       color: yellow;
    //       text-shadow: 0 0 10px white, 0 0 10px white, 0 0 10px white,
    //         0 0 10px white, 0 0 10px white;
    //     }
    //   `}</style>
    // </Flex>
    ;
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
    flexDirection: "column",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Accordion, {
      allowMultiple: true,
      ref: accordian,
      children: processedRankData.length > 0 && processedRankData.map((weeks, index) => {
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(PastWeek, {
          weeks: weeks
        }, index);
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PastRanking);

/***/ }),

/***/ 8136:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




const RankSelectbar = ({
  gameList,
  getSelectedGameTitle
}) => {
  // const bgColor = useColorModeValue("#F8F9FA", "gray.800");
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const buttons = document.querySelectorAll(".rank-menu-button");
    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        // 이전에 active 된 메뉴 삭제
        buttons.forEach(btn => {
          btn.classList.remove("active");
        }); // 지금 클릭한 메뉴 active

        btn.classList.add("active");
      });
    });
  }, []); // 선택한 게임명을 부모함수로 넘기기

  const selectGame = e => {
    getSelectedGameTitle(e.target.name); // const body = window.document.body;
    // body.classList.add("overflow-hidden");
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
    m: "0 10px",
    flexDirection: "row",
    children: gameList.map(game => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
      w: "100px",
      h: "100px",
      name: game.gameTitle,
      onClick: selectGame,
      m: "0 10px" // bgColor={bgColor}
      ,
      children: game.gameTitle
    }, game.gameId))
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RankSelectbar);

/***/ }),

/***/ 1407:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_game_GameInterface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6988);
/* harmony import */ var _components_rank_RankSelectbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8136);
/* harmony import */ var _components_rank_CurrentRanking__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6421);
/* harmony import */ var _components_rank_PastRanking__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8704);
/* harmony import */ var _components_Layout_Frame_SideBarScreen__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2109);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Layout_Frame_SideBarScreen__WEBPACK_IMPORTED_MODULE_7__]);
_components_Layout_Frame_SideBarScreen__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











const Rank = ({
  gameList
}) => {
  const {
    0: selectedGameTitle,
    1: setSelectedGameTitle
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("블록쌓기");
  const {
    0: currentRankData,
    1: setCurrentRankData
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const {
    0: pastRankData,
    1: setPastRankData
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]); // 선택한 게임 useState에 담기

  const getSelectedGameTitle = async selectedGame => {
    setSelectedGameTitle(selectedGame);
  }; // 이번 주 순위정보 받아오기


  const getCurrentRankData = async () => {
    await axios__WEBPACK_IMPORTED_MODULE_2___default().post(`/api/ranks/current-ranking`, {
      gameTitle: selectedGameTitle
    }).then(res => {
      setCurrentRankData(res.data);
    });
  }; // 역대 순위정보 받아오기


  const getPastRankData = async () => {
    await axios__WEBPACK_IMPORTED_MODULE_2___default().post(`/api/ranks/past-ranking`, {
      gameTitle: selectedGameTitle
    }).then(res => {
      setPastRankData(res.data);
    });
  }; // 게임이 선택되면 해당 게임 현재순위, 역대순위 받아다 useState에 담아주기


  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!selectedGameTitle) return;
    getCurrentRankData(); // 현재순위 받아와

    getPastRankData(); // 과거순위 받아와
  }, [selectedGameTitle]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
    flexDirection: "column",
    maxWidth: "1000px",
    margin: "0 auto",
    alignItems: "center",
    justifyContent: "center",
    pt: {
      base: "120px",
      md: "75px"
    },
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_components_rank_RankSelectbar__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
      gameList: gameList,
      getSelectedGameTitle: getSelectedGameTitle
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_components_rank_CurrentRanking__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
      title: selectedGameTitle,
      currentRankData: currentRankData,
      captions: ["Rnaking", "profile", "player", "score", "updated at", ""]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_components_rank_PastRanking__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
      pastRankData: pastRankData
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Rank);
async function getStaticProps() {
  // 게임리스트 받아오기
  const gameList = _components_game_GameInterface__WEBPACK_IMPORTED_MODULE_3__/* ["default"].gameList */ .Z.gameList;
  return {
    props: {
      gameList: gameList
    }
  };
} // getLayout property

Rank.getLayout = function getLayout(page) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_components_Layout_Frame_SideBarScreen__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
    children: page
  });
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4513:
/***/ ((module) => {

module.exports = require("@chakra-ui/icons");

/***/ }),

/***/ 8930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 429:
/***/ ((module) => {

module.exports = require("@chakra-ui/theme-tools");

/***/ }),

/***/ 9652:
/***/ ((module) => {

module.exports = require("@metamask/onboarding");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 5567:
/***/ ((module) => {

module.exports = require("jwt-decode");

/***/ }),

/***/ 5648:
/***/ ((module) => {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 4661:
/***/ ((module) => {

module.exports = require("react-router-dom");

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

/***/ }),

/***/ 8519:
/***/ ((module) => {

module.exports = require("web3");

/***/ }),

/***/ 9915:
/***/ ((module) => {

module.exports = import("js-cookie");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [400,664,977,446], () => (__webpack_exec__(1407)));
module.exports = __webpack_exports__;

})();