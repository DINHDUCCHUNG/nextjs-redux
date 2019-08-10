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
      return initState;

    case 'FETCH_ACTIVITY_ACTIVITY_SUCCESS':
      return action.data;

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Activity);

/***/ })

})
//# sourceMappingURL=_app.js.731b049cfde0403592c1.hot-update.js.map