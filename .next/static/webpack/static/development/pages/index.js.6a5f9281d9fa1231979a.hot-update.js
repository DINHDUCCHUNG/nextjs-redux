webpackHotUpdate("static/development/pages/index.js",{

/***/ "./actions/Activity.js":
/*!*****************************!*\
  !*** ./actions/Activity.js ***!
  \*****************************/
/*! exports provided: fetch_activity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetch_activity", function() { return fetch_activity; });
var fetch_activity = function fetch_activity() {
  return {
    type: 'FETCH_ACTIVITY',
    payload: {
      query: "\n      {\n            activity(vendorId: 6, date: \"7/31/2019\") {\n              className\n              message\n              createdAt\n              id\n              photoUrlsJson\n            }\n          }\n      "
    }
  };
};

/***/ })

})
//# sourceMappingURL=index.js.6a5f9281d9fa1231979a.hot-update.js.map