webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/PostList.js":
/*!********************************!*\
  !*** ./components/PostList.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../api */ "./api/index.js");
/* harmony import */ var _sleepy_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../sleepy.config */ "./sleepy.config.js");
/* harmony import */ var _sleepy_config__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_sleepy_config__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils */ "./utils/index.js");
/* harmony import */ var _components_PostLoad__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/PostLoad */ "./components/PostLoad.js");






var _jsxFileName = "/Users/zhaohaiwei/Desktop/sleepy/components/PostList.js";







var _default =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(_default, _React$Component);

  function _default(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, _default);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(_default).call(this, props));
    _this.state = {
      loadState: false,
      loadEnd: false,
      page: 1,
      loadText: "加载更多",
      posts: []
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      _api__WEBPACK_IMPORTED_MODULE_8__["default"].byPage({
        page: this.state.page
      }).then(function (data) {
        _this2.setState(function () {
          return {
            posts: data
          };
        });
      });
    }
  }, {
    key: "loadMore",
    value: function loadMore() {
      var _this3 = this;

      if (this.state.loadState) {
        return;
      }

      this.setState(function () {
        return {
          loadState: true,
          loadText: "加载中..."
        };
      });
      _api__WEBPACK_IMPORTED_MODULE_8__["default"].byPage({
        page: this.state.page + 1
      }).then(function (data) {
        _this3.setState(function (prevState) {
          return {
            loadState: false,
            loadText: "加载更多",
            loadEnd: data.length < _sleepy_config__WEBPACK_IMPORTED_MODULE_9__["post"].pageSize,
            page: prevState.page,
            posts: [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(prevState.posts), Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(data))
          };
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          posts = _this$state.posts,
          loadText = _this$state.loadText,
          loadEnd = _this$state.loadEnd;

      if (!posts.length) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "post-list",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_PostLoad__WEBPACK_IMPORTED_MODULE_11__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          },
          __self: this
        }));
      }

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "post-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, posts.map(function (item) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          key: item.id,
          className: "post-item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
          href: "post?id=".concat(item.id),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "poster",
          style: {
            backgroundImage: "url(".concat(item.poster || _sleepy_config__WEBPACK_IMPORTED_MODULE_9__["images"].poster || "/static/poster.png", ")")
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          },
          __self: this
        }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "content",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
          href: "post?id=".concat(item.id),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
          className: "title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          },
          __self: this
        }, item.title)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "excerpt",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87
          },
          __self: this
        }, item.excerpt)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "time",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          },
          __self: this
        }, Object(_utils__WEBPACK_IMPORTED_MODULE_10__["relative"])(item.created_at)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "tags",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          },
          __self: this
        }, item.tags.map(function (tag) {
          return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
            className: "tag",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 91
            },
            __self: this
          }, "#", tag);
        })));
      }), loadEnd ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "loadEnd",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, "\u52A0\u8F7D\u5B8C\u6BD5") : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "loadMore",
        onClick: this.loadMore.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, loadText));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.a96986e360899ae53919.hot-update.js.map