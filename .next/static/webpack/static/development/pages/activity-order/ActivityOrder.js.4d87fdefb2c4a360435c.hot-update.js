webpackHotUpdate("static/development/pages/activity-order/ActivityOrder.js",{

/***/ "./components/ActivityOrder/ActivityOrderComponent.js":
/*!************************************************************!*\
  !*** ./components/ActivityOrder/ActivityOrderComponent.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_ActivityOrder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/ActivityOrder */ "./actions/ActivityOrder.js");
/* harmony import */ var _ActivityOrder_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ActivityOrder.scss */ "./components/ActivityOrder/ActivityOrder.scss");
/* harmony import */ var _ActivityOrder_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ActivityOrder_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/pilot/JS/with-redux-thunk-app/components/ActivityOrder/ActivityOrderComponent.js";






var ActivityOrder = function ActivityOrder(props) {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    props.fetchActivityOrder();
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "layout-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container-fluid flex-grow-1 container-p-y",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "activity-order-code",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    className: "table table-striped",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "col",
    style: {
      width: '70%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Ho\u1EA1t \u0111\u1ED9ng"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "col",
    style: {
      width: '30%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Th\u1EDDi gian"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }))))));
};

var mapDispatchToProps = function mapDispatchToProps(dipatch) {
  return {
    fetchActivityOrder: function fetchActivityOrder() {
      dipatch(Object(_actions_ActivityOrder__WEBPACK_IMPORTED_MODULE_2__["fetch_activity_order"])());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(null, mapDispatchToProps)(ActivityOrder));

/***/ })

})
//# sourceMappingURL=ActivityOrder.js.4d87fdefb2c4a360435c.hot-update.js.map