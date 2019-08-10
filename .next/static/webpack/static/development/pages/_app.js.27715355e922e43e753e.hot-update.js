webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./middlewares/graphql-middleware.js":
/*!*******************************************!*\
  !*** ./middlewares/graphql-middleware.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);


var graphql_middleware = function graphql_middleware(url) {
  return function (store) {
    return function (next) {
      return function (action) {
        if (typeof action.payload === 'object' && action.payload.query) {
          // allow call normal action
          next(action);
          var headers = {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          };
          if (localStorage.token) headers['token'] = localStorage.token;
          fetch("".concat(url, "/graphql"), {
            method: 'POST',
            headers: headers,
            body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()({
              query: action.payload.query,
              variables: {
                devteam: "development" === 'development'
              }
            })
          }).then(function (r) {
            return r.json();
          }).then(function (data) {
            var result = data.data;

            for (var key in result) {
              if (result.hasOwnProperty(key)) {
                if (result[key].success === false) {
                  alert(result[key].messages);
                  store.dispatch({
                    type: [action.type, key.split(/(?=[A-Z])/).join('_').toUpperCase(), 'FAIL'].join('_'),
                    messages: result[key].messages,
                    old_action: action
                  });
                } else store.dispatch({
                  type: [action.type, key.split(/(?=[A-Z])/).join('_').toUpperCase(), 'SUCCESS'].join('_'),
                  messages: result[key].messages,
                  data: result[key],
                  old_action: action
                });
              }
            }
          })["catch"](function (error) {
            console.error(error);
            store.dispatch({
              type: action.type + '_FAIL',
              old_action: action
            });
          });
        } else {
          next(action);
        }
      };
    };
  };
};

/* harmony default export */ __webpack_exports__["default"] = (graphql_middleware);

/***/ })

})
//# sourceMappingURL=_app.js.27715355e922e43e753e.hot-update.js.map