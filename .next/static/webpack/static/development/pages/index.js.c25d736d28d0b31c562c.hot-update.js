webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Prices.js":
/*!******************************!*\
  !*** ./components/Prices.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/AshleyAustin/Coding/bitzprice/components/Prices.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nvar Prices = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Prices, _React$Component);\n\n  var _super = _createSuper(Prices);\n\n  function Prices() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Prices);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"state\", {\n      currency: 'USD'\n    });\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Prices, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      console.log(this.por);\n      var list = [];\n\n      if (this.state.currency === 'USD') {\n        list.push(__jsx(\"li\", {\n          className: \"list-group-item\",\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 10,\n            columnNumber: 23\n          }\n        }, \"Bitcoin rate for \", this.props.bpi.bpi.USD.description, \" :\", __jsx(\"span\", {\n          className: \"badge badge-primary\",\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 12,\n            columnNumber: 25\n          }\n        }, this.props.bpi.bpi.USD.code), __jsx(\"strong\", {\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 15,\n            columnNumber: 17\n          }\n        }, this.props.bpi.bpi.USD.rate)));\n      } else if (this.state.currency === 'GBP') {\n        list.push(__jsx(\"li\", {\n          className: \"list-group-item\",\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 19,\n            columnNumber: 23\n          }\n        }, \"Bitcoin rate for \", this.props.bpi.bpi.GBP.description, \" :\", __jsx(\"span\", {\n          className: \"badge badge-primary\",\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 21,\n            columnNumber: 25\n          }\n        }, this.props.bpi.bpi.GBP.code), __jsx(\"strong\", {\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 24,\n            columnNumber: 17\n          }\n        }, this.props.bpi.bpi.USD.rate)));\n      } else if (this.state.currecy === 'EUR') {\n        list.push(__jsx(\"li\", {\n          className: \"list-group-item\",\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 28,\n            columnNumber: 23\n          }\n        }, \"Bitcoin rate for \", this.props.bpi.bpi.EUR.description, \" :\", __jsx(\"span\", {\n          className: \"badge badge-primary\",\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 30,\n            columnNumber: 25\n          }\n        }, this.props.bpi.bpi.EUR.code), __jsx(\"strong\", {\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 33,\n            columnNumber: 17\n          }\n        }, this.props.bpi.bpi.EUR.rate)));\n      }\n\n      return __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 13\n        }\n      }, __jsx(\"ul\", {\n        className: \"list-group\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 17\n        }\n      }, list), __jsx(\"br\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 17\n        }\n      }), __jsx(\"select\", {\n        onChange: function onChange(e) {\n          return _this2.setState({\n            currency: e.target.value\n          });\n        },\n        className: \"form-control\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 17\n        }\n      }, __jsx(\"option\", {\n        value: \"USD\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 21\n        }\n      }, \"USD\"), __jsx(\"option\", {\n        value: \"GBP\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 21\n        }\n      }, \"GBP\"), __jsx(\"option\", {\n        value: \"EUR\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 21\n        }\n      }, \"EUR\")));\n    }\n  }]);\n\n  return Prices;\n}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Prices);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1ByaWNlcy5qcz9iZTJkIl0sIm5hbWVzIjpbIlByaWNlcyIsImN1cnJlbmN5IiwiY29uc29sZSIsImxvZyIsInBvciIsImxpc3QiLCJzdGF0ZSIsInB1c2giLCJwcm9wcyIsImJwaSIsIlVTRCIsImRlc2NyaXB0aW9uIiwiY29kZSIsInJhdGUiLCJHQlAiLCJjdXJyZWN5IiwiRVVSIiwiZSIsInNldFN0YXRlIiwidGFyZ2V0IiwidmFsdWUiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUFNQSxNOzs7Ozs7Ozs7Ozs7Ozs7O2dOQUNNO0FBQ0pDLGNBQVEsRUFBRTtBQUROLEs7Ozs7Ozs7NkJBSUM7QUFBQTs7QUFDTEMsYUFBTyxDQUFDQyxHQUFSLENBQVksS0FBS0MsR0FBakI7QUFDQSxVQUFJQyxJQUFJLEdBQUcsRUFBWDs7QUFDQSxVQUFJLEtBQUtDLEtBQUwsQ0FBV0wsUUFBWCxLQUF3QixLQUE1QixFQUFtQztBQUMvQkksWUFBSSxDQUFDRSxJQUFMLENBQVU7QUFBSSxtQkFBUyxFQUFDLGlCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0NBQ1ksS0FBS0MsS0FBTCxDQUFXQyxHQUFYLENBQWVBLEdBQWYsQ0FBbUJDLEdBQW5CLENBQXVCQyxXQURuQyxRQUVFO0FBQU0sbUJBQVMsRUFBQyxxQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNILEtBQUtILEtBQUwsQ0FBV0MsR0FBWCxDQUFlQSxHQUFmLENBQW1CQyxHQUFuQixDQUF1QkUsSUFEcEIsQ0FGRixFQUtOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUyxLQUFLSixLQUFMLENBQVdDLEdBQVgsQ0FBZUEsR0FBZixDQUFtQkMsR0FBbkIsQ0FBdUJHLElBQWhDLENBTE0sQ0FBVjtBQU9ILE9BUkQsTUFTSyxJQUFJLEtBQUtQLEtBQUwsQ0FBV0wsUUFBWCxLQUF3QixLQUE1QixFQUFtQztBQUNwQ0ksWUFBSSxDQUFDRSxJQUFMLENBQVU7QUFBSSxtQkFBUyxFQUFDLGlCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0NBQ1ksS0FBS0MsS0FBTCxDQUFXQyxHQUFYLENBQWVBLEdBQWYsQ0FBbUJLLEdBQW5CLENBQXVCSCxXQURuQyxRQUVFO0FBQU0sbUJBQVMsRUFBQyxxQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNILEtBQUtILEtBQUwsQ0FBV0MsR0FBWCxDQUFlQSxHQUFmLENBQW1CSyxHQUFuQixDQUF1QkYsSUFEcEIsQ0FGRixFQUtOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUyxLQUFLSixLQUFMLENBQVdDLEdBQVgsQ0FBZUEsR0FBZixDQUFtQkMsR0FBbkIsQ0FBdUJHLElBQWhDLENBTE0sQ0FBVjtBQU9ILE9BUkksTUFTQSxJQUFJLEtBQUtQLEtBQUwsQ0FBV1MsT0FBWCxLQUF1QixLQUEzQixFQUFrQztBQUNuQ1YsWUFBSSxDQUFDRSxJQUFMLENBQVU7QUFBSSxtQkFBUyxFQUFDLGlCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0NBQ1ksS0FBS0MsS0FBTCxDQUFXQyxHQUFYLENBQWVBLEdBQWYsQ0FBbUJPLEdBQW5CLENBQXVCTCxXQURuQyxRQUVFO0FBQU0sbUJBQVMsRUFBQyxxQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNILEtBQUtILEtBQUwsQ0FBV0MsR0FBWCxDQUFlQSxHQUFmLENBQW1CTyxHQUFuQixDQUF1QkosSUFEcEIsQ0FGRixFQUtOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUyxLQUFLSixLQUFMLENBQVdDLEdBQVgsQ0FBZUEsR0FBZixDQUFtQk8sR0FBbkIsQ0FBdUJILElBQWhDLENBTE0sQ0FBVjtBQU9IOztBQUVELGFBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUksaUJBQVMsRUFBQyxZQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDS1IsSUFETCxDQURKLEVBSUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUpKLEVBS0k7QUFDSSxnQkFBUSxFQUFFLGtCQUFBWSxDQUFDO0FBQUEsaUJBQUksTUFBSSxDQUFDQyxRQUFMLENBQWM7QUFBRWpCLG9CQUFRLEVBQUVnQixDQUFDLENBQUNFLE1BQUYsQ0FBU0M7QUFBckIsV0FBZCxDQUFKO0FBQUEsU0FEZjtBQUVJLGlCQUFTLEVBQUMsY0FGZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBR0k7QUFBUSxhQUFLLEVBQUMsS0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEosRUFJSTtBQUFRLGFBQUssRUFBQyxLQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKSixFQUtJO0FBQVEsYUFBSyxFQUFDLEtBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxKLENBTEosQ0FESjtBQWVIOzs7O0VBbkRnQkMsNENBQUssQ0FBQ0MsUzs7QUFzRFp0QixxRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvUHJpY2VzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgUHJpY2VzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgY3VycmVuY3k6ICdVU0QnXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnBvcilcbiAgICAgICAgbGV0IGxpc3QgPSBbXTtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuY3VycmVuY3kgPT09ICdVU0QnKSB7XG4gICAgICAgICAgICBsaXN0LnB1c2goPGxpIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbVwiPlxuICAgICAgICAgICAgICAgIEJpdGNvaW4gcmF0ZSBmb3Ige3RoaXMucHJvcHMuYnBpLmJwaS5VU0QuZGVzY3JpcHRpb259IDpcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlIGJhZGdlLXByaW1hcnlcIj5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuYnBpLmJwaS5VU0QuY29kZX1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHN0cm9uZz57dGhpcy5wcm9wcy5icGkuYnBpLlVTRC5yYXRlfTwvc3Ryb25nPlxuICAgICAgICAgICAgPC9saT4pXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5zdGF0ZS5jdXJyZW5jeSA9PT0gJ0dCUCcpIHtcbiAgICAgICAgICAgIGxpc3QucHVzaCg8bGkgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgQml0Y29pbiByYXRlIGZvciB7dGhpcy5wcm9wcy5icGkuYnBpLkdCUC5kZXNjcmlwdGlvbn0gOlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2UtcHJpbWFyeVwiPlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5icGkuYnBpLkdCUC5jb2RlfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3Ryb25nPnt0aGlzLnByb3BzLmJwaS5icGkuVVNELnJhdGV9PC9zdHJvbmc+XG4gICAgICAgICAgICA8L2xpPilcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLnN0YXRlLmN1cnJlY3kgPT09ICdFVVInKSB7XG4gICAgICAgICAgICBsaXN0LnB1c2goPGxpIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbVwiPlxuICAgICAgICAgICAgICAgIEJpdGNvaW4gcmF0ZSBmb3Ige3RoaXMucHJvcHMuYnBpLmJwaS5FVVIuZGVzY3JpcHRpb259IDpcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlIGJhZGdlLXByaW1hcnlcIj5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuYnBpLmJwaS5FVVIuY29kZX1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHN0cm9uZz57dGhpcy5wcm9wcy5icGkuYnBpLkVVUi5yYXRlfTwvc3Ryb25nPlxuICAgICAgICAgICAgPC9saT4pXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICB7bGlzdH1cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdGhpcy5zZXRTdGF0ZSh7IGN1cnJlbmN5OiBlLnRhcmdldC52YWx1ZSB9KX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCI+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJVU0RcIj5VU0Q8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkdCUFwiPkdCUDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiRVVSXCI+RVVSPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJpY2VzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Prices.js\n");

/***/ })

})