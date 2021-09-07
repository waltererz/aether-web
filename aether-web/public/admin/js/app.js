(self["webpackChunk"] = self["webpackChunk"] || []).push([["/admin/js/app"],{

/***/ "./resources/js/admin.jsx":
/*!********************************!*\
  !*** ./resources/js/admin.jsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _system_Admin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./system/Admin */ "./resources/js/system/Admin.jsx");
/* harmony import */ var _redux_reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./redux/reducers */ "./resources/js/redux/reducers/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");








var store = (0,redux__WEBPACK_IMPORTED_MODULE_6__.createStore)(_redux_reducers__WEBPACK_IMPORTED_MODULE_4__["default"]);
react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {
  store: store,
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.BrowserRouter, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Switch, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, {
        path: "*",
        component: _system_Admin__WEBPACK_IMPORTED_MODULE_3__["default"]
      })
    })
  })
}), document.getElementById('app'));

/***/ }),

/***/ "./resources/js/components/Paper.jsx":
/*!*******************************************!*\
  !*** ./resources/js/components/Paper.jsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Paper)
/* harmony export */ });
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/Paper/Paper.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


function Paper(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1__["default"], {
    elevation: 0,
    sx: {
      padding: '15px',
      borderRadius: {
        xs: '0px',
        sm: '5px'
      },
      backgroundColor: '#ffffff'
    },
    children: children
  });
}

/***/ }),

/***/ "./resources/js/config/app.js":
/*!************************************!*\
  !*** ./resources/js/config/app.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var _config = {
  name: window._aether.name,
  // 어플리케이션 이름
  client: window._aether.client,
  // 클라이언트 IP주소
  agent: window._aether.agent,
  // 클라이언트 에이전트 이름
  auth: window._aether.auth,
  // 현재 로그인된 사용자 UUID
  domain: window._aether.domain,
  // 세션 도메인
  is_mobile: window._aether.is_mobile,
  // 모바일기기 접속 유무
  url: {
    app: window._aether.baseUrl,
    backend: 'http://back.erzsphilos.com',
    // 백엔드 서버 URL
    api: 'http://back.erzsphilos.com/api' // API 서버 URL

  },
  user: {}
};

if ('user' in window._aether) {
  _config.user = {
    email: window._aether.user.email,
    name: window._aether.user.name,
    nickname: window._aether.user.nickname,
    group: window._aether.user.group,
    image: window._aether.user.image
  };
}

Object.freeze(_config);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_config);

/***/ }),

/***/ "./resources/js/config/index.js":
/*!**************************************!*\
  !*** ./resources/js/config/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function config(path) {
  if (typeof path != 'string' || path.length < 1) {
    return '';
  }

  var pathArray = path.split('.');
  var configFile = pathArray.shift();
  var currentPointer = null;

  try {
    currentPointer = __webpack_require__("./resources/js/config sync recursive ^\\.\\/.*$")("./" + configFile)["default"];
  } catch (_unused) {
    console.log('config 파일을 불러오는데 오류가 발생했습니다. [config/' + configFile + '.js]');
  }

  if (!currentPointer) {
    return '';
  }

  for (var i = 0; i < pathArray.length; i++) {
    if (pathArray[i] in currentPointer) {
      currentPointer = currentPointer[pathArray[i]];
    } else {
      console.log(configFile + ' 설정파일에 ' + pathArray[i] + ' 설정값이 존재하지 않습니다. [' + configFile + '.' + pathArray.toString().replace(',', '.') + ']');
      return '';
    }
  }

  return currentPointer;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (config);

/***/ }),

/***/ "./resources/js/config/templete.js":
/*!*****************************************!*\
  !*** ./resources/js/config/templete.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var _config = {
  palette: {
    primary: {
      main: '#5900d4'
    },
    secondary: {
      main: '#e30075'
    },
    kakao: {
      main: '#fee500'
    },
    naver: {
      main: '#03c75a'
    },
    google: {
      main: '#ea4335'
    },
    facebook: {
      main: '#1877f2'
    },
    bgColor: {
      main: '#f5f5f5'
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 1024,
      md: 1160,
      lg: 1366,
      xl: 1440
    }
  },
  width: {
    primary: {
      desktop: '1024px',
      mobile: '1024px'
    },
    secondary: {
      desktop: '300px',
      mobile: '300px'
    },
    drawer: {
      desktop: '280px',
      mobile: '280px'
    }
  },
  height: {
    headerFixed: {
      desktop: '64px',
      mobile: '48px'
    },
    headerNavigation: {
      desktop: '50px',
      mobile: '50px'
    },
    bottomNavigation: {
      mobile: '50px'
    }
  },
  margin: {
    "default": {
      desktop: '20px',
      mobile: '10px'
    }
  },
  zIndex: {
    drawer: 900,
    header: 1190,
    headerNavigation: 1180,
    bottomNavigation: 1190
  },
  border: {
    1: '1px solid #eeeeee'
  },
  borderRadius: {
    1: '4px',
    2: '6px'
  },
  boxShadow: {
    1: '0 1px 4px 0 rgba(0, 0, 0, 0.15)',
    2: '0 2px 5px 1px rgba(0, 0, 0, 0.30)'
  },
  gradient: {
    primary: 'linear-gradient(90deg, rgba(89,0,212,1) 0%, rgba(227,0,117,1) 100%)',
    primary_0d: 'linear-gradient(0deg, rgba(78,0,190,1) 0%, rgba(89,0,212,1) 30%, rgba(89,0,212,1) 60%, rgba(78,0,190,1) 100%)'
  },
  fontFamily: {
    0: 'sans-serif',
    1: 'Noto Sans KR',
    2: 'Nanum Gothic'
  }
};
Object.freeze(_config);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_config);

/***/ }),

/***/ "./resources/js/pages/Admin.jsx":
/*!**************************************!*\
  !*** ./resources/js/pages/Admin.jsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Admin)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/actions/app */ "./resources/js/redux/actions/app.js");
/* harmony import */ var _components_Paper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Paper */ "./resources/js/components/Paper.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





function Admin() {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    /**
     * 페이지 타이틀을 설정합니다.
     * (주의) 라라벨에서 지정했던 내용들을 그대로 준수해야 합니다.
     */
    dispatch((0,_redux_actions_app__WEBPACK_IMPORTED_MODULE_2__.setTitle)('관리페이지'));
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_Paper__WEBPACK_IMPORTED_MODULE_3__["default"], {
    children: "\uAD00\uB9AC\uC790\uB97C \uC704\uD55C \uD398\uC774\uC9C0"
  });
}

/***/ }),

/***/ "./resources/js/redux/actions/app.js":
/*!*******************************************!*\
  !*** ./resources/js/redux/actions/app.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setTab": () => (/* binding */ setTab),
/* harmony export */   "setTitle": () => (/* binding */ setTitle),
/* harmony export */   "setHeaderIcons": () => (/* binding */ setHeaderIcons),
/* harmony export */   "setMobileDrawerOpen": () => (/* binding */ setMobileDrawerOpen),
/* harmony export */   "setComplete": () => (/* binding */ setComplete),
/* harmony export */   "setAuth": () => (/* binding */ setAuth),
/* harmony export */   "setURI": () => (/* binding */ setURI)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./resources/js/redux/constants.js");

var setTab = function setTab(tab) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["default"].app.tab,
    state: tab
  };
};
var setTitle = function setTitle(title) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["default"].app.title,
    state: title
  };
};
var setHeaderIcons = function setHeaderIcons(headerIcons) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["default"].app.headerIcons,
    state: headerIcons
  };
};
var setMobileDrawerOpen = function setMobileDrawerOpen(open) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["default"].app.mobileDrawerOpen,
    state: open
  };
};
var setComplete = function setComplete(complete) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["default"].app.complete,
    state: complete
  };
};
var setAuth = function setAuth(auth) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["default"].app.auth,
    state: auth
  };
};
var setURI = function setURI(uri) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["default"].app.uri,
    state: uri
  };
};

/***/ }),

/***/ "./resources/js/redux/constants.js":
/*!*****************************************!*\
  !*** ./resources/js/redux/constants.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var reduxConstants = {
  app: {
    auth: 'AP_AUTHORIZATION',
    complete: 'APP_COMPLETE',
    title: 'APP_DOCUMENT_TITLE',
    tab: 'APP_TAB',
    uri: 'APP_URI',
    headerIcons: 'APP_HEADER_ICONS',
    mobileDrawerOpen: 'APP_MOBILE_DRAWER'
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reduxConstants);

/***/ }),

/***/ "./resources/js/redux/reducers/app.js":
/*!********************************************!*\
  !*** ./resources/js/redux/reducers/app.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./resources/js/redux/constants.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var initialStates = {
  auth: false,
  complete: false,
  title: null,
  tab: null,
  headerIcons: null,
  mobileDrawerOpen: false,
  uri: '/'
};

function app() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialStates;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _constants__WEBPACK_IMPORTED_MODULE_0__["default"].app.tab:
      return _objectSpread(_objectSpread({}, state), {}, {
        tab: action.state
      });
      break;

    case _constants__WEBPACK_IMPORTED_MODULE_0__["default"].app.title:
      return _objectSpread(_objectSpread({}, state), {}, {
        title: action.state
      });
      break;

    case _constants__WEBPACK_IMPORTED_MODULE_0__["default"].app.headerIcons:
      return _objectSpread(_objectSpread({}, state), {}, {
        headerIcons: action.state
      });
      break;

    case _constants__WEBPACK_IMPORTED_MODULE_0__["default"].app.mobileDrawerOpen:
      return _objectSpread(_objectSpread({}, state), {}, {
        mobileDrawerOpen: action.state
      });
      break;

    case _constants__WEBPACK_IMPORTED_MODULE_0__["default"].app.complete:
      return _objectSpread(_objectSpread({}, state), {}, {
        complete: action.state
      });
      break;

    case _constants__WEBPACK_IMPORTED_MODULE_0__["default"].app.auth:
      return _objectSpread(_objectSpread({}, state), {}, {
        auth: action.state
      });
      break;

    case _constants__WEBPACK_IMPORTED_MODULE_0__["default"].app.uri:
      return _objectSpread(_objectSpread({}, state), {}, {
        uri: action.state
      });
      break;
  }

  return state;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (app);

/***/ }),

/***/ "./resources/js/redux/reducers/index.js":
/*!**********************************************!*\
  !*** ./resources/js/redux/reducers/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "./resources/js/redux/reducers/app.js");


var Reducers = (0,redux__WEBPACK_IMPORTED_MODULE_1__.combineReducers)({
  app: _app__WEBPACK_IMPORTED_MODULE_0__["default"]
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Reducers);

/***/ }),

/***/ "./resources/js/system/Admin.jsx":
/*!***************************************!*\
  !*** ./resources/js/system/Admin.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/styles/styled.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/system/esm/ThemeProvider/ThemeProvider.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/createTheme.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./resources/js/system/Header.jsx");
/* harmony import */ var _MobileDrawer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MobileDrawer */ "./resources/js/system/MobileDrawer.jsx");
/* harmony import */ var _MobileNavigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MobileNavigation */ "./resources/js/system/MobileNavigation.jsx");
/* harmony import */ var _pages_Admin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/Admin */ "./resources/js/pages/Admin.jsx");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ "./resources/js/config/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












var Container = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["default"])('div')(function (_ref) {
  var _ref2;

  var theme = _ref.theme;
  return _ref2 = {}, _defineProperty(_ref2, theme.breakpoints.up('xs'), {
    marginTop: (0,_config__WEBPACK_IMPORTED_MODULE_5__["default"])('templete.height.headerFixed.mobile')
  }), _defineProperty(_ref2, theme.breakpoints.up('md'), {
    marginTop: (0,_config__WEBPACK_IMPORTED_MODULE_5__["default"])('templete.height.headerFixed.desktop')
  }), _ref2;
});
function App() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["default"], {
    theme: (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__["default"])({
      palette: (0,_config__WEBPACK_IMPORTED_MODULE_5__["default"])('templete.palette'),
      breakpoints: (0,_config__WEBPACK_IMPORTED_MODULE_5__["default"])('templete.breakpoints')
    }),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_MobileDrawer__WEBPACK_IMPORTED_MODULE_2__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(Container, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Switch, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
          exact: true,
          path: "/__admin",
          component: _pages_Admin__WEBPACK_IMPORTED_MODULE_4__["default"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
          path: "*",
          render: function render(_ref3) {
            var match = _ref3.match;
            window.location.href = match.url;
          }
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_MobileNavigation__WEBPACK_IMPORTED_MODULE_3__["default"], {})]
  });
}

/***/ }),

/***/ "./resources/js/system/Header.jsx":
/*!****************************************!*\
  !*** ./resources/js/system/Header.jsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/styles/styled.js");
/* harmony import */ var _material_ui_core_useScrollTrigger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/useScrollTrigger */ "./node_modules/@material-ui/core/useScrollTrigger/useScrollTrigger.js");
/* harmony import */ var _header_HeaderFixed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/HeaderFixed */ "./resources/js/system/header/HeaderFixed.jsx");
/* harmony import */ var _header_HeaderNavigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/HeaderNavigation */ "./resources/js/system/header/HeaderNavigation.jsx");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./resources/js/config/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var Container = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["default"])('div')(function (_ref) {
  var _invisible;

  var theme = _ref.theme;
  return {
    position: 'fixed',
    width: '100%',
    top: 0,
    zIndex: (0,_config__WEBPACK_IMPORTED_MODULE_3__["default"])('templete.zIndex.header'),
    transition: 'transform 500ms cubic-bezier(0, 0, 0.2, 1) 0ms, box-shadow 600ms cubic-bezier(0, 0, 0.2, 1) 0ms',
    '&.invisible': (_invisible = {}, _defineProperty(_invisible, theme.breakpoints.up('xs'), {
      transform: 'translateY(-' + (0,_config__WEBPACK_IMPORTED_MODULE_3__["default"])('templete.height.headerFixed.mobile') + ')'
    }), _defineProperty(_invisible, theme.breakpoints.up('md'), {
      transform: 'translateY(-' + (0,_config__WEBPACK_IMPORTED_MODULE_3__["default"])('templete.height.headerFixed.desktop') + ')'
    }), _invisible),
    '&.shadow': {
      boxShadow: (0,_config__WEBPACK_IMPORTED_MODULE_3__["default"])('templete.boxShadow.2')
    }
  };
});
function Header() {
  var refHeader = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var scrollTrigger = (0,_material_ui_core_useScrollTrigger__WEBPACK_IMPORTED_MODULE_6__["default"])();
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 0) {
        refHeader.current.classList.add('shadow');
      } else {
        refHeader.current.classList.remove('shadow');
      }
    });
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(Container, {
    ref: refHeader,
    className: scrollTrigger ? 'invisible' : '',
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_header_HeaderFixed__WEBPACK_IMPORTED_MODULE_1__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_header_HeaderNavigation__WEBPACK_IMPORTED_MODULE_2__["default"], {})]
  });
}

/***/ }),

/***/ "./resources/js/system/MobileDrawer.jsx":
/*!**********************************************!*\
  !*** ./resources/js/system/MobileDrawer.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MobileDrawer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/styles/styled.js");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Drawer */ "./node_modules/@material-ui/core/Drawer/Drawer.js");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/Avatar/Avatar.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/List/List.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/ListItem/ListItem.js");
/* harmony import */ var _material_ui_core_ListItemButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/ListItemButton */ "./node_modules/@material-ui/core/ListItemButton/ListItemButton.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/ListItemText/ListItemText.js");
/* harmony import */ var _material_ui_icons_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/KeyboardArrowDown */ "./node_modules/@material-ui/icons/KeyboardArrowDown.js");
/* harmony import */ var _material_ui_icons_PersonRounded__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/PersonRounded */ "./node_modules/@material-ui/icons/PersonRounded.js");
/* harmony import */ var _redux_actions_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/actions/app */ "./resources/js/redux/actions/app.js");
/* harmony import */ var _menuLinks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menuLinks */ "./resources/js/system/menuLinks.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ "./resources/js/config/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


















var UserInfoContainer = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["default"])('div')({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  alignItems: 'center',
  padding: '10px',
  marginBottom: '20px'
});
var AvatarContainer = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["default"])('div')({
  '& .MuiAvatar-root': {
    width: '56px',
    height: '56px'
  },
  '& svg': {
    width: '32px',
    height: '32px'
  },
  '& img': {
    width: '56px',
    height: '56px'
  }
});
var UserNameContainer = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["default"])('div')({
  flexGrow: 1,
  fontSize: '1.2em',
  textAlign: 'center',
  '& a': {
    color: '#dddddd'
  }
});
var SubMenuContainer = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["default"])('div')({
  marginLeft: '40px'
});
function MobileDrawer() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState({}),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      mobileDrawerSubMenuOpen = _React$useState2[0],
      setMobileDrawerSubMenuOpen = _React$useState2[1];

  var open = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.app.mobileDrawerOpen;
  });
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();

  var toggleMobileDrawer = function toggleMobileDrawer() {
    dispatch((0,_redux_actions_app__WEBPACK_IMPORTED_MODULE_2__.setMobileDrawerOpen)(!open));
  };

  var fetchDrawerMenuLinks = function fetchDrawerMenuLinks() {
    return _menuLinks__WEBPACK_IMPORTED_MODULE_3__["default"].map(function (link) {
      if (!(link.slug in mobileDrawerSubMenuOpen)) {
        setMobileDrawerSubMenuOpen(_objectSpread(_objectSpread({}, mobileDrawerSubMenuOpen), {}, _defineProperty({}, link.slug, false)));
      }

      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
        dense: true,
        disablePadding: true,
        className: 'children' in link && mobileDrawerSubMenuOpen[link.slug] ? 'has-children' : '',
        sx: {
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'nowrap',
          alignItems: 'flex-start',
          marginBottom: '5px',
          '&.has-children': {
            marginBottom: '10px',
            '& .MuiListItemButton-root': {
              paddingBottom: '0px'
            }
          },
          '& a': {
            color: '#ffffff',
            textDecoration: 'none'
          }
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_material_ui_core_ListItemButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
          disableGutters: true,
          disableTouchRipple: true,
          children: ['children' in link && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_icons_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_9__["default"], {
            sx: {
              marginRight: '10px',
              transition: '0.2s',
              transform: mobileDrawerSubMenuOpen[link.slug] ? 'rotate(-180deg)' : 'rotate(0)'
            },
            onClick: function onClick() {
              setMobileDrawerSubMenuOpen(_objectSpread(_objectSpread({}, mobileDrawerSubMenuOpen), {}, _defineProperty({}, link.slug, !mobileDrawerSubMenuOpen[link.slug])));
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Link, {
            to: link.to,
            onClick: toggleMobileDrawer,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11__["default"], {
              primary: link.name,
              sx: {
                '& .MuiTypography-root': {
                  fontSize: '1.2em'
                }
              }
            })
          })]
        }), mobileDrawerSubMenuOpen[link.slug] && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(SubMenuContainer, {
          children: link.children.map(function (sublink) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core_ListItemButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
              disableGutters: true,
              disableTouchRipple: true,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Link, {
                to: sublink.to,
                onClick: toggleMobileDrawer,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11__["default"], {
                  primary: sublink.name,
                  sx: {
                    '& .MuiTypography-root': {
                      fontSize: '1em'
                    }
                  }
                })
              })
            }, "mobileDrawerSubLink-".concat(sublink.slug));
          })
        })]
      }, "mobileDrawerLink-".concat(link.slug));
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_12__["default"], {
    id: "mobile-drawer",
    anchor: "left",
    open: open,
    onClose: toggleMobileDrawer,
    transitionDuration: 300,
    sx: {
      '& .MuiPaper-root': {
        width: (0,_config__WEBPACK_IMPORTED_MODULE_4__["default"])('templete.width.drawer.mobile'),
        boxSizing: 'border-box',
        padding: '10px',
        backgroundColor: '#000000',
        color: '#ffffff',
        fontSize: '0.8rem'
      }
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(UserInfoContainer, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(AvatarContainer, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_13__["default"], {
          children: (0,_config__WEBPACK_IMPORTED_MODULE_4__["default"])('app.user.image') ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
            src: (0,_config__WEBPACK_IMPORTED_MODULE_4__["default"])('app.user.image')
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_icons_PersonRounded__WEBPACK_IMPORTED_MODULE_14__["default"], {})
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(UserNameContainer, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Link, {
          to: "/@".concat((0,_config__WEBPACK_IMPORTED_MODULE_4__["default"])('app.user.nickname')),
          onClick: toggleMobileDrawer,
          children: [(0,_config__WEBPACK_IMPORTED_MODULE_4__["default"])('app.user.name'), "\uB2D8 \uD658\uC601\uD569\uB2C8\uB2E4."]
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_15__["default"], {
        children: fetchDrawerMenuLinks()
      })
    })]
  });
}

/***/ }),

/***/ "./resources/js/system/MobileNavigation.jsx":
/*!**************************************************!*\
  !*** ./resources/js/system/MobileNavigation.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MobileNavigation)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/styles/styled.js");
/* harmony import */ var _material_ui_core_BottomNavigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/BottomNavigation */ "./node_modules/@material-ui/core/BottomNavigation/BottomNavigation.js");
/* harmony import */ var _material_ui_core_BottomNavigationAction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/BottomNavigationAction */ "./node_modules/@material-ui/core/BottomNavigationAction/BottomNavigationAction.js");
/* harmony import */ var _material_ui_icons_HomeRounded__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/HomeRounded */ "./node_modules/@material-ui/icons/HomeRounded.js");
/* harmony import */ var _material_ui_icons_PieChartRounded__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/PieChartRounded */ "./node_modules/@material-ui/icons/PieChartRounded.js");
/* harmony import */ var _material_ui_icons_AccountCircleRounded__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/AccountCircleRounded */ "./node_modules/@material-ui/icons/AccountCircleRounded.js");
/* harmony import */ var _material_ui_icons_SupervisedUserCircleRounded__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/SupervisedUserCircleRounded */ "./node_modules/@material-ui/icons/SupervisedUserCircleRounded.js");
/* harmony import */ var _material_ui_icons_TrendingUpRounded__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/TrendingUpRounded */ "./node_modules/@material-ui/icons/TrendingUpRounded.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./resources/js/config/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















var Container = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"])('div')(function (_ref) {
  var _ref2;

  var theme = _ref.theme;
  return _ref2 = {}, _defineProperty(_ref2, theme.breakpoints.up('xs'), {
    display: 'block'
  }), _defineProperty(_ref2, theme.breakpoints.up('md'), {
    display: 'none'
  }), _ref2;
});
function MobileNavigation() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(null),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      currentTab = _React$useState2[0],
      setCurrentTab = _React$useState2[1];

  var newTab = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.app.tab;
  });
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    if (currentTab != newTab) {
      setCurrentTab(newTab);
    }
  }, [newTab]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Container, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_material_ui_core_BottomNavigation__WEBPACK_IMPORTED_MODULE_5__["default"], {
      value: currentTab,
      sx: {
        height: (0,_config__WEBPACK_IMPORTED_MODULE_2__["default"])('templete.height.bottomNavigation.mobile'),
        display: 'flex',
        justifyContent: 'space-evenly',
        backgroundColor: '#ffffff',
        width: '100%',
        position: 'fixed',
        bottom: '0px',
        right: '0px',
        left: 'auto',
        zIndex: (0,_config__WEBPACK_IMPORTED_MODULE_2__["default"])('templete.zIndex.bottomNavigation'),
        borderTop: '1px solid #eaeaea',
        '& .MuiBottomNavigationAction-root': {
          padding: '0px',
          color: '#aaaaaa',
          '&.Mui-selected': {
            padding: '0px',
            color: '#000000'
          }
        }
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core_BottomNavigationAction__WEBPACK_IMPORTED_MODULE_6__["default"], {
        icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_icons_HomeRounded__WEBPACK_IMPORTED_MODULE_7__["default"], {}),
        value: "/",
        component: react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Link,
        to: "/"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core_BottomNavigationAction__WEBPACK_IMPORTED_MODULE_6__["default"], {
        icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_icons_PieChartRounded__WEBPACK_IMPORTED_MODULE_9__["default"], {}),
        value: "assets",
        component: react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Link,
        to: "/assets"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core_BottomNavigationAction__WEBPACK_IMPORTED_MODULE_6__["default"], {
        icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_icons_SupervisedUserCircleRounded__WEBPACK_IMPORTED_MODULE_10__["default"], {}),
        value: "advisors",
        component: react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Link,
        to: "/advisors"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core_BottomNavigationAction__WEBPACK_IMPORTED_MODULE_6__["default"], {
        icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_icons_TrendingUpRounded__WEBPACK_IMPORTED_MODULE_11__["default"], {}),
        value: "investments",
        component: react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Link,
        to: "/investments"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core_BottomNavigationAction__WEBPACK_IMPORTED_MODULE_6__["default"], {
        icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_icons_AccountCircleRounded__WEBPACK_IMPORTED_MODULE_12__["default"], {}),
        value: "@",
        component: react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Link,
        to: "/@".concat((0,_config__WEBPACK_IMPORTED_MODULE_2__["default"])('app.user.nickname'))
      })]
    })
  });
}

/***/ }),

/***/ "./resources/js/system/header/HeaderFixed.jsx":
/*!****************************************************!*\
  !*** ./resources/js/system/header/HeaderFixed.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HeaderFixed)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/styles/styled.js");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Link */ "./node_modules/@material-ui/core/Link/Link.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/AppBar/AppBar.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/Toolbar/Toolbar.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Menu */ "./node_modules/@material-ui/icons/Menu.js");
/* harmony import */ var _XHeaderIcons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./XHeaderIcons */ "./resources/js/system/header/XHeaderIcons.jsx");
/* harmony import */ var _redux_actions_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/actions/app */ "./resources/js/redux/actions/app.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config */ "./resources/js/config/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













var HeaderAppNameContainer = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["default"])('div')(function (_ref) {
  var _ref2;

  var theme = _ref.theme;
  return _ref2 = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap'
  }, _defineProperty(_ref2, theme.breakpoints.up('xs'), {
    fontSize: '1.2rem'
  }), _defineProperty(_ref2, theme.breakpoints.up('md'), {
    fontSize: '1.5rem'
  }), _defineProperty(_ref2, '& a', {
    display: 'block',
    color: '#ffffff',
    fontWeight: 'bold',
    textDecoration: 'none',
    userSelect: 'none',
    WebkitTapHighlightColor: 'transparent'
  }), _ref2;
});
var MobileMenuIconContainer = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["default"])('div')(function (_ref3) {
  var _ref4;

  var theme = _ref3.theme;
  return _ref4 = {
    cursor: 'pointer',
    userSelect: 'none',
    WebkitTapHighlightColor: 'transparent'
  }, _defineProperty(_ref4, theme.breakpoints.up('xs'), {
    display: 'flex',
    alignItems: 'center',
    marginRight: '15px'
  }), _defineProperty(_ref4, theme.breakpoints.up('md'), {
    display: 'none'
  }), _defineProperty(_ref4, '&:active', {
    transform: 'scale(0.9, 0.9)'
  }), _ref4;
});
var HeaderIconContainer = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["default"])('div')({
  display: 'flex'
});
function HeaderFixed() {
  var mobileDrawerOpen = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.app.mobileDrawerOpen;
  });
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();

  var toggleMobileDrawer = function toggleMobileDrawer() {
    dispatch((0,_redux_actions_app__WEBPACK_IMPORTED_MODULE_3__.setMobileDrawerOpen)(!mobileDrawerOpen));
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_7__["default"], {
    position: "static",
    sx: {
      transition: 'none',
      background: (0,_config__WEBPACK_IMPORTED_MODULE_4__["default"])('templete.gradient.primary'),
      boxShadow: 'none',
      zIndex: (0,_config__WEBPACK_IMPORTED_MODULE_4__["default"])('templete.zIndex.header'),
      height: {
        xs: (0,_config__WEBPACK_IMPORTED_MODULE_4__["default"])('templete.height.headerFixed.mobile'),
        md: (0,_config__WEBPACK_IMPORTED_MODULE_4__["default"])('templete.height.headerFixed.desktop')
      }
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_8__["default"], {
      disableGutters: true,
      sx: {
        display: 'flex',
        justifyContent: 'space-between',
        minHeight: {
          xs: (0,_config__WEBPACK_IMPORTED_MODULE_4__["default"])('templete.height.headerFixed.mobile'),
          md: (0,_config__WEBPACK_IMPORTED_MODULE_4__["default"])('templete.height.headerFixed.desktop')
        },
        height: {
          xs: (0,_config__WEBPACK_IMPORTED_MODULE_4__["default"])('templete.height.headerFixed.mobile'),
          md: (0,_config__WEBPACK_IMPORTED_MODULE_4__["default"])('templete.height.headerFixed.desktop')
        },
        paddingLeft: {
          xs: (0,_config__WEBPACK_IMPORTED_MODULE_4__["default"])('templete.margin.default.mobile'),
          md: (0,_config__WEBPACK_IMPORTED_MODULE_4__["default"])('templete.margin.default.desktop')
        },
        paddingRight: {
          xs: (0,_config__WEBPACK_IMPORTED_MODULE_4__["default"])('templete.margin.default.mobile'),
          md: (0,_config__WEBPACK_IMPORTED_MODULE_4__["default"])('templete.margin.default.desktop')
        }
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(HeaderAppNameContainer, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(MobileMenuIconContainer, {
          onClick: toggleMobileDrawer,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_9__["default"], {})
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_10__["default"], {
          href: "/",
          children: "Aether"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(HeaderIconContainer, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_XHeaderIcons__WEBPACK_IMPORTED_MODULE_2__["default"], {})
      })]
    })
  });
}

/***/ }),

/***/ "./resources/js/system/header/HeaderNavigation.jsx":
/*!*********************************************************!*\
  !*** ./resources/js/system/header/HeaderNavigation.jsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HeaderNavigation)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/styles/styled.js");
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/useMediaQuery */ "./node_modules/@material-ui/core/useMediaQuery/useMediaQuery.js");
/* harmony import */ var _material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Popper */ "./node_modules/@material-ui/core/Popper/Popper.js");
/* harmony import */ var _material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Grow */ "./node_modules/@material-ui/core/Grow/Grow.js");
/* harmony import */ var _menuLinks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../menuLinks */ "./resources/js/system/menuLinks.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config */ "./resources/js/config/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











var Container = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"])('div')(function (_ref) {
  var _ref2;

  var theme = _ref.theme;
  return _ref2 = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    boxSizing: 'border-box',
    background: (0,_config__WEBPACK_IMPORTED_MODULE_2__["default"])('templete.gradient.primary'),
    zIndex: (0,_config__WEBPACK_IMPORTED_MODULE_2__["default"])('templete.zIndex.headerNavigation')
  }, _defineProperty(_ref2, theme.breakpoints.up('xs'), {
    paddingLeft: (0,_config__WEBPACK_IMPORTED_MODULE_2__["default"])('templete.margin.default.mobile'),
    paddingRight: (0,_config__WEBPACK_IMPORTED_MODULE_2__["default"])('templete.margin.default.mobile'),
    height: (0,_config__WEBPACK_IMPORTED_MODULE_2__["default"])('templete.height.headerNavigation.mobile')
  }), _defineProperty(_ref2, theme.breakpoints.up('md'), {
    paddingLeft: (0,_config__WEBPACK_IMPORTED_MODULE_2__["default"])('templete.margin.default.desktop'),
    paddingRight: (0,_config__WEBPACK_IMPORTED_MODULE_2__["default"])('templete.margin.default.desktop'),
    height: (0,_config__WEBPACK_IMPORTED_MODULE_2__["default"])('templete.height.headerNavigation.desktop')
  }), _ref2;
});
var SubContainer = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"])('div')({
  display: 'flex',
  position: 'relative',
  flexDirection: 'row',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  boxSizing: 'border-box',
  '&::before, &::after': {
    content: '""',
    display: 'block',
    visibility: 'hidden',
    position: 'absolute',
    width: '50px',
    height: '100%',
    opacity: 0,
    transition: 'opacity 0.4s linear, visibility 0.4s linear'
  },
  '&::before': {
    background: 'linear-gradient(90deg, rgba(40, 40, 40, 1) 0%, rgba(40, 40, 40, 0.5) 50%, rgba(40, 40, 40, 0) 100%)',
    left: '0px'
  },
  '&::after': {
    background: 'linear-gradient(90deg, rgba(40, 40, 40, 0) 0%, rgba(40, 40, 40, 0.5) 50%, rgba(40, 40, 40, 1) 100%)',
    right: '0px'
  },
  '&.start': {
    '&::after': {
      visibility: 'visible',
      opacity: 1
    },
    '&::before': {
      visibility: 'hidden',
      opacity: 0
    }
  },
  '&.scrolling': {
    '&::before, &::after': {
      visibility: 'visible',
      opacity: 1
    }
  },
  '&.end': {
    '&::after': {
      visibility: 'hidden',
      opacity: 0
    },
    '&::before': {
      visibility: 'visible',
      opacity: 1
    }
  }
});
var HeaderNavListContainer = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"])('ul')({
  display: 'flex',
  listStyle: 'none',
  width: '100%',
  height: '100%',
  padding: '0px',
  margin: '0px',
  overflowX: 'auto',
  overflowY: 'hidden',
  whiteSpace: 'nowrap',
  scrollbarWidth: 'none',
  msOverflowStyle: 'none',
  '&::-webkit-scrollbar': {
    display: 'none'
  }
});
var HeaderNavItemContainer = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"])('div')({
  display: 'flex',
  alignItems: 'center'
});
var HeaderNavItem = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"])('li')(function (_ref3) {
  var _divA;

  var theme = _ref3.theme;
  return {
    display: 'inline-flex',
    '& > div > a': (_divA = {}, _defineProperty(_divA, theme.breakpoints.up('xs'), {
      padding: '0px 10px'
    }), _defineProperty(_divA, theme.breakpoints.up('md'), {
      padding: '0px 15px'
    }), _divA),
    '&:first-of-type': {
      '& > div > a': {
        paddingLeft: '0px'
      }
    },
    '&:last-of-type': {
      '& > div > a': {
        paddingRight: '0px'
      }
    }
  };
});
var HeaderNavItemText = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"])('div')(function (_ref4) {
  var _a;

  var theme = _ref4.theme;
  return {
    '& a': (_a = {
      display: 'block',
      color: '#ffffff',
      opacity: '0.6',
      textDecoration: 'none',
      transition: 'opacity 0.2s linear',
      fontFamily: (0,_config__WEBPACK_IMPORTED_MODULE_2__["default"])('templete.fontFamily.1'),
      webkitTapHighlightColor: 'transparent',
      userSelect: 'none'
    }, _defineProperty(_a, theme.breakpoints.up('xs'), {
      fontSize: '0.9em'
    }), _defineProperty(_a, theme.breakpoints.up('md'), {
      fontSize: '1em'
    }), _a),
    '&.selected > a': {
      opacity: '0.9'
    },
    '&.highlight > a': {
      opacity: '1'
    },
    '&.externel > a': {
      opacity: '0.4'
    }
  };
});
var SubNavigationContainer = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"])('div')({
  position: 'absolute'
});
var SubNavigationSubContainer = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"])('div')({
  marginTop: '7px',
  backgroundColor: '#ffffff',
  width: '250px',
  overflowX: 'hidden',
  boxShadow: '0 1px 5px 0px rgba(0, 0, 0, 0.2)',
  borderRadius: '2px'
});
var SubNavigationListContainer = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"])('ol')({
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'nowrap',
  listStyle: 'none',
  margin: '0px',
  padding: '10px 0px'
});
var SubNavigationItem = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"])('li')({
  display: 'block',
  width: '100%',
  boxSizing: 'border-box',
  '& a': {
    display: 'block',
    padding: '8px 20px',
    fontSize: '1em',
    backgroundColor: '#ffffff',
    color: '#000000',
    transition: 'none',
    opacity: '1',
    '&:hover': {
      backgroundColor: (0,_config__WEBPACK_IMPORTED_MODULE_2__["default"])('templete.palette.primary.main'),
      color: '#ffffff'
    }
  }
});
function HeaderNavigation() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState({}),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      subLinkBoxAnchor = _React$useState2[0],
      setSubLinkBoxAnchor = _React$useState2[1];

  var isDesktop = (0,_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_5__["default"])(function (theme) {
    return theme.breakpoints.up('md');
  });
  var ref = {
    container: react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),
    subContainer: react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),
    listBox: react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),
    items: react__WEBPACK_IMPORTED_MODULE_0__.useRef(null)
  };

  var toggleHeaderNavigationShadow = function toggleHeaderNavigationShadow() {
    var subContainer = ref.subContainer.current;
    var listBox = ref.listBox.current;
    var items = ref.items.current;
    var listBoxWidth = listBox.offsetWidth;
    var offsetScroll = listBox.scrollLeft;
    var itemsWidth = items.clientWidth;

    if (offsetScroll <= 0) {
      if (itemsWidth > listBoxWidth) {
        subContainer.classList.add('start');
        subContainer.classList.remove('end', 'scrolling');
      }
    } else if (offsetScroll >= itemsWidth - listBoxWidth - 10) {
      subContainer.classList.add('end');
      subContainer.classList.remove('start', 'scrolling');
    } else {
      subContainer.classList.add('scrolling');
      subContainer.classList.remove('start', 'end');
    }
  };

  var toggleHeaderNavigationLink = function toggleHeaderNavigationLink(event, itemArray) {
    if (event.type === 'mouseenter') {
      itemArray.map(function (itemBox) {
        var item = itemBox.querySelector('.item');

        if (item.dataset['key'] === event.target.dataset['key']) {
          item.classList.add('highlight');
        } else {
          item.classList.add('externel');
        }
      });
    } else if (event.type === 'mouseleave') {
      itemArray.map(function (itemBox) {
        var item = itemBox.querySelector('.item');
        item.classList.remove('highlight', 'externel');
      });
    }
  };

  var initHeaderNavigationLinks = function initHeaderNavigationLinks() {
    setSubLinkBoxAnchor({});
    Array.from(ref.items.current.children).map(function (item) {
      item.querySelector('.item').classList.remove('highlight', 'externel');
    });
  };

  var fetchHeaderNavigationSubLinks = function fetchHeaderNavigationSubLinks(links, slug) {
    if (_typeof(links) == 'object') {
      return links.map(function (link, index) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(SubNavigationItem, {
          component: "li",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Link, {
            to: link.to,
            onClick: initHeaderNavigationLinks,
            children: link.name
          })
        }, "headerNavigationLink-".concat(slug, "-sub-").concat(index));
      });
    }
  };

  var fetchHeaderNavigationLinks = function fetchHeaderNavigationLinks() {
    return _menuLinks__WEBPACK_IMPORTED_MODULE_1__["default"].map(function (link, index) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(HeaderNavItem, {
        "data-path": link.to,
        onMouseOver: 'children' in link && isDesktop ? function (event) {
          var currentTarget = event.currentTarget;
          setSubLinkBoxAnchor(_objectSpread(_objectSpread({}, subLinkBoxAnchor), {}, _defineProperty({}, link.slug, currentTarget)));
        } : null,
        onMouseOut: 'children' in link && isDesktop ? function () {
          setSubLinkBoxAnchor(_objectSpread(_objectSpread({}, subLinkBoxAnchor), {}, _defineProperty({}, link.slug, false)));
        } : null,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(HeaderNavItemText, {
          className: "item",
          "data-key": index,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Link, {
            id: "header-navigation-link-".concat(link.slug),
            to: link.to,
            onClick: initHeaderNavigationLinks,
            "data-slug": link.slug,
            "data-key": index,
            children: link.name
          }), 'children' in link ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_7__["default"], {
            anchorEl: subLinkBoxAnchor[link.slug],
            open: Boolean(subLinkBoxAnchor[link.slug]),
            role: undefined,
            placement: "bottom-start",
            transition: true,
            disablePortal: true,
            children: function children(_ref5) {
              var TransitionProps = _ref5.TransitionProps;
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_8__["default"], _objectSpread(_objectSpread({
                timeout: 0
              }, TransitionProps), {}, {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(SubNavigationContainer, {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(SubNavigationSubContainer, {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(SubNavigationListContainer, {
                      children: fetchHeaderNavigationSubLinks(link.children, link.slug)
                    })
                  })
                })
              }));
            }
          }) : null]
        })
      }, "headerNavigationLink-".concat(index));
    });
  };

  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    var listBox = ref.listBox.current;
    var itemArray = Array.from(ref.items.current.children);
    itemArray.map(function (itemBox) {
      itemBox.querySelector('.item').addEventListener('mouseenter', function (event) {
        toggleHeaderNavigationLink(event, itemArray);
      });
      itemBox.querySelector('.item').addEventListener('mouseleave', function (event) {
        toggleHeaderNavigationLink(event, itemArray);
      });
    });
    listBox.addEventListener('scroll', function () {
      toggleHeaderNavigationShadow();
    });
    toggleHeaderNavigationShadow();
  }, []);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    var currentPathArray = window.location.pathname.split('/');
    var links = Array.from(ref.items.current.children);
    links.map(function (link) {
      var linkPathArray = link.dataset['path'].split('/');

      for (var i = 1; i < linkPathArray.length; i++) {
        if (i in currentPathArray) {
          if (linkPathArray[i] == currentPathArray[i]) {
            link.querySelector('.item').classList.add('selected');
          } else {
            link.querySelector('.item').classList.remove('selected');
          }
        } else {
          break;
        }
      }
    });
  }, [window.location.pathname]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Container, {
    ref: ref.container,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(SubContainer, {
      ref: ref.subContainer,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(HeaderNavListContainer, {
        ref: ref.listBox,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(HeaderNavItemContainer, {
          ref: ref.items,
          children: fetchHeaderNavigationLinks()
        })
      })
    })
  });
}

/***/ }),

/***/ "./resources/js/system/header/XHeaderIcons.jsx":
/*!*****************************************************!*\
  !*** ./resources/js/system/header/XHeaderIcons.jsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ XHeaderIcons)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/styles/styled.js");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Link */ "./node_modules/@material-ui/core/Link/Link.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config */ "./resources/js/config/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var Container = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"])('div')(function (_ref) {
  var _ref2;

  var theme = _ref.theme;
  return _ref2 = {
    cursor: 'pointer',
    boxSizing: 'border-box',
    userSelect: 'none',
    WebkitTapHighlightColor: 'transparent'
  }, _defineProperty(_ref2, theme.breakpoints.up('xs'), {
    '&.icons-desktop': {
      display: 'none'
    },
    '&.icons-mobile': {
      display: 'inline-flex'
    }
  }), _defineProperty(_ref2, theme.breakpoints.up('md'), {
    '&.icons-desktop': {
      display: 'inline-flex'
    },
    '&.icons-mobile': {
      display: 'none'
    }
  }), _ref2;
});
var IconContainer = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"])('div')(function (_ref3) {
  var _ref4;

  var theme = _ref3.theme;
  return _ref4 = {
    boxSizing: 'border-box',
    background: 'none',
    '& a': {
      display: 'flex',
      textDecoration: 'none',
      color: '#ffffff',
      '&:active': {
        transform: 'scale(0.9, 0.9)'
      },
      '& .MuiSvgIcon-root': {
        fontSize: '1.5rem'
      }
    },
    '&:first-of-type': {
      marginLeft: '0px'
    },
    '&:last-of-type': {
      marginRight: '0px'
    }
  }, _defineProperty(_ref4, theme.breakpoints.up('xs'), {
    margin: '0px 8px'
  }), _defineProperty(_ref4, theme.breakpoints.up('md'), {
    margin: '0px 10px'
  }), _ref4;
});
function XHeaderIcons() {
  var headerIcons = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.app.headerIcons;
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [headerIcons && 'desktop' in headerIcons && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Container, {
      className: "icons-desktop",
      children: headerIcons.desktop.map(function (item, index) {
        if ('auth' in item) {
          if (item.auth === true && (0,_config__WEBPACK_IMPORTED_MODULE_2__["default"])('app.auth').length > 0 || item.auth === false && (0,_config__WEBPACK_IMPORTED_MODULE_2__["default"])('app.auth').length === 0) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(IconContainer, {
              children: 'standalone' in item && item.standalone === true ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_5__["default"], {
                href: item.path,
                children: item.icon
              }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Link, {
                to: item.path,
                children: item.icon
              })
            }, "desktop-icon-".concat(index));
          }
        } else {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(IconContainer, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Link, {
              to: item.path,
              children: item.icon
            })
          }, "desktop-icon-".concat(index));
        }
      })
    }), headerIcons && 'mobile' in headerIcons && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Container, {
      className: "icons-mobile",
      children: headerIcons.mobile.map(function (item, index) {
        if ('auth' in item) {
          if (item.auth === true && (0,_config__WEBPACK_IMPORTED_MODULE_2__["default"])('app.auth').length > 0 || item.auth === false && (0,_config__WEBPACK_IMPORTED_MODULE_2__["default"])('app.auth').length === 0) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(IconContainer, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Link, {
                to: item.path,
                children: item.icon
              })
            }, "mobile-icon-".concat(index));
          }
        } else {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(IconContainer, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Link, {
              to: item.path,
              children: item.icon
            })
          }, "mobile-icon-".concat(index));
        }
      })
    })]
  });
}

/***/ }),

/***/ "./resources/js/system/menuLinks.js":
/*!******************************************!*\
  !*** ./resources/js/system/menuLinks.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var _menuLinks = [{
  name: '종합자산관리',
  slug: 'asset',
  to: '/assets',
  children: [{
    name: '가계부',
    slug: 'moneybook',
    to: '/assets/moneybook'
  }]
}, {
  name: '투자자산관리',
  slug: 'investments',
  to: '/investments',
  children: [{
    name: '포트폴리오 관리',
    slug: 'portfolio',
    to: '/investments/portfolio'
  }]
}, {
  name: '투자어드바이저',
  slug: 'advisor',
  to: '/advisors',
  children: [{
    name: '전문가 검색',
    slug: 'searchadvisors',
    to: '/advisors/search'
  }]
}, {
  name: '관리자',
  slug: 'admin',
  to: '/__admin',
  children: [],
  group: 'admin,owner'
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_menuLinks);

/***/ }),

/***/ "./resources/js/config sync recursive ^\\.\\/.*$":
/*!********************************************!*\
  !*** ./resources/js/config/ sync ^\.\/.*$ ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./": "./resources/js/config/index.js",
	"./app": "./resources/js/config/app.js",
	"./app.js": "./resources/js/config/app.js",
	"./index": "./resources/js/config/index.js",
	"./index.js": "./resources/js/config/index.js",
	"./templete": "./resources/js/config/templete.js",
	"./templete.js": "./resources/js/config/templete.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./resources/js/config sync recursive ^\\.\\/.*$";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["js/extract/chunk.1","js/extract/chunk.a"], () => (__webpack_exec__("./resources/js/admin.jsx")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);