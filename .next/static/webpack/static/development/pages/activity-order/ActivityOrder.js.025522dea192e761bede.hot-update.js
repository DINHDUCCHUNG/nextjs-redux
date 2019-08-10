webpackHotUpdate("static/development/pages/activity-order/ActivityOrder.js",{

/***/ "./actions/ActivityOrder.js":
/*!**********************************!*\
  !*** ./actions/ActivityOrder.js ***!
  \**********************************/
/*! exports provided: fetch_activity_order */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetch_activity_order", function() { return fetch_activity_order; });
var fetch_activity_order = function fetch_activity_order() {
  return {
    type: 'FETCH_ACTIVITY_ORDER',
    payload: {
      query: "\n        {\n          activityOrder(orderId: 121){\n            className\n            message\n            createdAt\n            id\n            photoUrlsJson\n          }\n        }\n      "
    }
  };
};

/***/ })

})
//# sourceMappingURL=ActivityOrder.js.025522dea192e761bede.hot-update.js.map