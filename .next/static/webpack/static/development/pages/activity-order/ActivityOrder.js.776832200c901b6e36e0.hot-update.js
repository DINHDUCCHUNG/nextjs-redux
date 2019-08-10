webpackHotUpdate("static/development/pages/activity-order/ActivityOrder.js",{

/***/ "./components/ActivityOrder/ActivityOrderComponent.js":
/*!************************************************************!*\
  !*** ./components/ActivityOrder/ActivityOrderComponent.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_ActivityOrder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/ActivityOrder */ "./actions/ActivityOrder.js");
/* harmony import */ var _ActivityOrder_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ActivityOrder.scss */ "./components/ActivityOrder/ActivityOrder.scss");
/* harmony import */ var _ActivityOrder_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ActivityOrder_scss__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "/home/pilot/JS/with-redux-thunk-app/components/ActivityOrder/ActivityOrderComponent.js";






var ActivityOrder = function ActivityOrder(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    activityOrderCode: []
  }),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    props.fetchActivityOrder();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    setState(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
      activityOrderCode: props.activityOrderCode
    }));
  }, [props.activityOrderCode]);
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "layout-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "container-fluid flex-grow-1 container-p-y",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "activity-order-code",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("table", {
    className: "table table-striped",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("thead", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("th", {
    scope: "col",
    style: {
      width: '70%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Ho\u1EA1t \u0111\u1ED9ng"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("th", {
    scope: "col",
    style: {
      width: '30%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Th\u1EDDi gian"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("tbody", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, state.activityOrderCode.map(function (act, index) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("tr", {
      key: act.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      dangerouslySetInnerHTML: {
        __html: act.message
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, moment(act.createdAt).format('hh:mm [ngày] LL')));
  })))))));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    activityOrderCode: state.activityOrder
  };
};

var mapDispatchToProps = function mapDispatchToProps(dipatch) {
  return {
    fetchActivityOrder: function fetchActivityOrder() {
      dipatch(Object(_actions_ActivityOrder__WEBPACK_IMPORTED_MODULE_4__["fetch_activity_order"])());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(ActivityOrder));

/***/ })

})
//# sourceMappingURL=ActivityOrder.js.776832200c901b6e36e0.hot-update.js.map