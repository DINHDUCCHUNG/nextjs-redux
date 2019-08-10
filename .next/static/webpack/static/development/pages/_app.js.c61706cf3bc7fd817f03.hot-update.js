webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./reducers/activityReducer.js":
/*!*************************************!*\
  !*** ./reducers/activityReducer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var initState = [];

var Activity = function Activity() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'FETCH_ACTIVITY':
      return initStatel;

    case 'FETCH_ACTIVITY_ACTIVITY_SUCCESS':
      return action.data;

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Activity);

/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");
/* harmony import */ var _activityOrderReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./activityOrderReducer */ "./reducers/activityOrderReducer.js");
/* harmony import */ var _activityReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./activityReducer */ "./reducers/activityReducer.js");



var appStore = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  activityOrder: _activityOrderReducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  activity: _activityReducer__WEBPACK_IMPORTED_MODULE_2__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (appStore);

/***/ })

})
//# sourceMappingURL=_app.js.c61706cf3bc7fd817f03.hot-update.js.map