"use strict";
exports.id = 80;
exports.ids = [80];
exports.modules = {

/***/ 3660:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9816);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);









const MissionReword = () => {
  const blockchain = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(state => state.blockchain);
  const {
    account,
    gameTokenContract,
    claim20_Contract
  } = blockchain;
  const {
    0: dataList,
    1: setDataList
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const {
    0: selectedMissionData,
    1: setSelectedMissionData
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const {
    0: isData,
    1: setIsData
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: nextStep,
    1: setNextStep
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: lastStep,
    1: setLastStep
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: totalAllowance,
    1: setTotalAllowance
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const {
    0: checkedItems,
    1: setCheckedItems
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const allChecked = checkedItems.every(Boolean);
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked;
  const owner = "0xbe005997cc214577c575cab11d0430777145a7dd";

  const importMissionAchiever = async () => {
    await axios__WEBPACK_IMPORTED_MODULE_2___default().get("/api/games/mission-achiever").then(async db => {
      console.log(db.data);
      let result = [];

      for (let i = 0; i < db.data.length; i++) {
        result.push(Object.values(db.data[i]));
      }

      console.log(result);
      setDataList(result);
      setIsData(true);
    }).catch(console.error());
  }; //데이터 선택


  const selectRankData = async () => {
    if (checkedItems.length == 0) {
      alert("아무것도 선택되지 않았습니다. 클레임 허용할 계정을 체크해주세요");
      return;
    }

    let selectedData = [];
    console.log(checkedItems);
    console.log(dataList);
    let totalCount = 0;

    for (let i = 0; i < checkedItems.length; i++) {
      if (checkedItems[i] == true) {
        selectedData.push(dataList[i]);
        totalCount += dataList[i][1];
      }
    }

    console.log(selectedData);
    console.log(typeof totalCount);
    setTotalAllowance(totalCount);
    setSelectedMissionData(selectedData);
    setIsData(false);
    setNextStep(true);
  };

  const approveMissionClaim = async () => {
    try {
      if (account != owner) {
        alert("관리자 권한이 없는 계정입니다.");
        return;
      }

      console.log(claim20_Contract._address);
      setLoading(true);
      await gameTokenContract.methods.transfer(claim20_Contract._address, totalAllowance).send({
        from: account
      }).then(res => {
        console.log(res);
        alert("다음은 미션 보상자별 인출 허용량 지정에 대한 서명입니다.");
      });
      await claim20_Contract.methods.approveClaim_mission(selectedMissionData).send({
        from: account
      }).then(async res => {
        console.log(res);

        if (res.status) {
          await axios__WEBPACK_IMPORTED_MODULE_2___default().post("/api/games/mission/approved", {
            mission: selectedMissionData
          }).then(() => {
            setLoading(false);
            alert("승인 작업 완료");
            setNextStep(false);
            setLastStep(true);
          });
        }
      });
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const previousStep = () => {
    if (isData) {
      setIsData(false);
    } else {
      setNextStep(false);
      setIsData(true);
    }
  };

  const initStep = () => {
    setNextStep(false);
    setIsData(false);
    setLastStep(false);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!account) return;
  }, [account]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {
    w: "70vw",
    bg: "blackAlpha.400",
    margin: "0 auto",
    padding: "10",
    border: "2px solid gray",
    borderRadius: "10",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {
      justify: "space-between",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Heading, {
          display: "inline",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Image, {
            src: "/images/icons/noteIcon.png",
            display: "inline",
            boxSize: "35",
            mr: "4"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("span", {
            className: "jsx-95679174",
            children: "Managing Mission Reward"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {
          ml: "20",
          mt: "5",
          children: [" ", "\uC8FC\uAC04 \uB7AD\uD0B9 \uC815\uBCF4\uB97C \uD655\uC778\uD558\uACE0 \uB7AD\uD0B9 \uC815\uBCF4\uC5D0 \uB530\uB77C \uD074\uB808\uC784 \uD5C8\uC6A9\uC5EC\uBD80\uB97C \uAD00\uB9AC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."]
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
        href: "/admin",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("a", {
          className: "jsx-95679174",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {
            bg: "whiteAlpha.300",
            children: " \uAD00\uB9AC\uC790 \uD648\uC73C\uB85C"
          })
        })
      })]
    }), isData ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.TableContainer, {
      align: "center",
      mt: "10",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {
        fontSize: "30",
        children: " step 2 "
      }), " \uACC4\uC815 \uC120\uD0DD", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Table, {
        border: "1px solid gray",
        mt: "5",
        w: "80%",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.TableCaption, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {
            bg: "#414fa28f",
            onClick: previousStep,
            mr: "2",
            children: "\uB4A4\uB85C \uAC00\uAE30"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {
            bg: "#414fa28f",
            onClick: selectRankData,
            children: "\uC120\uD0DD \uC644\uB8CC"
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Thead, {
          bg: "whiteAlpha.200",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Tr, {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Th, {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Checkbox, {
                colorScheme: "green",
                isChecked: allChecked,
                isIndeterminate: isIndeterminate,
                onChange: e => {
                  let checkedTarget = [];

                  for (let i = 0; i < dataList.length; i++) {
                    checkedTarget.push(e.target.checked);
                  }

                  setCheckedItems(checkedTarget);
                }
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Th, {
              children: "\uACC4\uC815 \uC8FC\uC18C"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Th, {
              children: "\uBBF8\uC158 \uB2EC\uC131 \uD69F\uC218"
            })]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Tbody, {
          children: dataList && dataList.map((list, index) => {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Tr, {
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Td, {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Checkbox, {
                  colorScheme: "green",
                  isChecked: checkedItems[index],
                  onChange: e => {
                    let checkedTarget2 = [];
                    console.log(e.target.checked, "<<<");

                    for (let i = 0; i < dataList.length; i++) {
                      if (i == index) {
                        checkedTarget2.push(e.target.checked);
                        continue;
                      }

                      checkedTarget2.push(checkedItems[i]);
                    }

                    setCheckedItems(checkedTarget2);
                  }
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Td, {
                children: list[0]
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Td, {
                children: list[1]
              })]
            }, index);
          })
        })]
      })]
    }) : nextStep ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.TableContainer, {
      align: "center",
      mt: "10",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {
        fontSize: "30",
        children: "step 3"
      }), " \uD074\uB808\uC784 \uD5C8\uC6A9", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Table, {
        border: "1px solid gray",
        mt: "5",
        w: "80%",
        variant: "striped",
        colorScheme: "#2C264C",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.TableCaption, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {
            mt: "50",
            mb: "5",
            fontSize: "20",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("span", {
              className: "jsx-95679174",
              children: [" Total Allowance : ", totalAllowance, " DGT "]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {
            bg: "#414fa28f",
            onClick: previousStep,
            mr: "2",
            children: "\uB4A4\uB85C \uAC00\uAE30"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {
            isLoading: loading ? 1 : null,
            loadingText: "approving...",
            bg: "#414fa28f",
            onClick: approveMissionClaim,
            children: "\uD074\uB808\uC784 \uD5C8\uC6A9"
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Thead, {
          bg: "whiteAlpha.200",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Tr, {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Th, {
              children: "\uACC4\uC815 \uC8FC\uC18C"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Th, {
              children: "\uBBF8\uC158 \uB2EC\uC131 \uD69F\uC218"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Th, {
              children: "\uD5C8\uC6A9\uB7C9"
            })]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Tbody, {
          children: selectedMissionData && selectedMissionData.map((list, index) => {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Tr, {
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Td, {
                children: list[0]
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Td, {
                children: list[1]
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Td, {
                children: list[1]
              })]
            }, index);
          })
        })]
      })]
    }) : lastStep ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {
      align: "center",
      mt: "10",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {
        fontSize: "30",
        children: "step 4"
      }), " \uC644\uB8CC", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {
        mt: "5",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {
          mt: "5",
          children: "\uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4."
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {
          onClick: initStep,
          children: "\uCD94\uAC00 \uC124\uC815\uD558\uAE30"
        })]
      })]
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {
      align: "center",
      mt: "10",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {
        fontSize: "30",
        children: "step 1"
      }), " \uBBF8\uC158 \uBCF4\uC0C1\uC790 \uBAA9\uB85D", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {
        mt: "5",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {
          bg: "#414fa28f",
          onClick: importMissionAchiever,
          mr: "2",
          children: "\uBCF4\uC0C1\uC790 \uBAA9\uB85D \uBD88\uB7EC\uC624\uAE30"
        })
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
      id: "95679174",
      children: ["span.jsx-95679174{background:linear-gradient(#f1f1f1 23%,#818181 100%);background-clip:text;-webkit-background-clip:text;color:transparent;font-weight:900;}"]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MissionReword);

/***/ })

};
;