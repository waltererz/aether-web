(self["webpackChunk"] = self["webpackChunk"] || []).push([["/js/app"],{

/***/ "./resources/js/components/Elements.jsx":
/*!**********************************************!*\
  !*** ./resources/js/components/Elements.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GrowBox": () => (/* binding */ GrowBox),
/* harmony export */   "FloatingBox": () => (/* binding */ FloatingBox)
/* harmony export */ });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/styles/styled.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ "./resources/js/config/index.js");


var GrowBox = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.default)('div')({
  flexGrow: 1
});
var FloatingBox = {
  Container: (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.default)('div')({
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    marginTop: '40px',
    backgroundColor: '#ffffff',
    boxShadow: (0,_config__WEBPACK_IMPORTED_MODULE_0__.default)('templete.boxShadow.1'),
    borderRadius: (0,_config__WEBPACK_IMPORTED_MODULE_0__.default)('templete.borderRadius.2'),
    border: '0px'
  }),
  Header: {
    Container: (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.default)('div')({
      background: (0,_config__WEBPACK_IMPORTED_MODULE_0__.default)('templete.gradient.primary_0d'),
      border: '0px',
      borderRadius: (0,_config__WEBPACK_IMPORTED_MODULE_0__.default)('templete.borderRadius.2'),
      margin: '-20px 20px 10px 20px',
      boxShadow: '0 1px 4px 0 rgba(73, 70, 128, 0.3)',
      padding: '13px',
      boxSizing: 'border-box'
    }),
    Primary: (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.default)('h4')({
      margin: '0px',
      padding: '0px 10px 5px 10px',
      boxSizing: 'border-box',
      color: 'rgba(255, 255, 255, 0.8)',
      fontSize: '1.2em'
    }),
    Secondary: (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.default)('div')({
      margin: '0px',
      padding: '0px 10px',
      boxSizing: 'border-box',
      color: 'rgba(255, 255, 255, 0.5)',
      fontSize: '0.8em'
    })
  },
  Body: (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.default)('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    boxSizing: 'border-box',
    fontSize: '0.9em'
  }),
  Divider: (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.default)('div')({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    width: '100%',
    margin: '20px 10px',
    boxSizing: 'border-box',
    '&:before, &:after': {
      content: '""',
      width: '100%',
      borderTop: '1px solid #efefef'
    }
  }),
  DividerText: (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.default)('div')({
    width: '100px',
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'rgba(73, 70, 128, 0.3)'
  })
};

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
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1__.default, {
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

/***/ "./resources/js/components/SingleBox.jsx":
/*!***********************************************!*\
  !*** ./resources/js/components/SingleBox.jsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/styles/styled.js");

var SingleBox = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.default)('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0 10px',
  height: '100vh'
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SingleBox);

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
  url: {
    app: window._aether.baseUrl,
    backend: 'http://back.erzsphilos.com',
    // 백엔드 서버 URL
    api: 'http://back.erzsphilos.com/api' // API 서버 URL

  },
  route: {
    "default": 1,
    home: 2,
    asset: 3,
    investment: 4,
    advisor: 5,
    developer: 6,
    user: 7
  }
};
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
    console.log('config 파일을 불러오는데 오류가 발생했습니다. [' + configFile + ']');
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
      desktop: '320px',
      mobile: '320px'
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
    1: 'Noto Sans KR'
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_config);

/***/ }),

/***/ "./resources/js/index.jsx":
/*!********************************!*\
  !*** ./resources/js/index.jsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _system_App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./system/App */ "./resources/js/system/App.jsx");
/* harmony import */ var _redux_reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./redux/reducers */ "./resources/js/redux/reducers/index.js");
/* harmony import */ var _standalones__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./standalones */ "./resources/js/standalones/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");










var store = (0,redux__WEBPACK_IMPORTED_MODULE_7__.createStore)(_redux_reducers__WEBPACK_IMPORTED_MODULE_4__.default);
react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {
    store: store,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.BrowserRouter, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Switch, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
          exact: true,
          path: "/user/signin",
          component: _standalones__WEBPACK_IMPORTED_MODULE_5__.SignIn
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
          exact: true,
          path: "/user/signup",
          component: _standalones__WEBPACK_IMPORTED_MODULE_5__.SignUp
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
          exact: true,
          path: "/user/signout",
          component: _standalones__WEBPACK_IMPORTED_MODULE_5__.SignOut
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
          path: "*",
          component: _system_App__WEBPACK_IMPORTED_MODULE_3__.default
        })]
      })
    })
  })
}), document.getElementById('app'));

/***/ }),

/***/ "./resources/js/pages/Advisor.jsx":
/*!****************************************!*\
  !*** ./resources/js/pages/Advisor.jsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Advisor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_icons_AccountCircleRounded__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/AccountCircleRounded */ "./node_modules/@material-ui/icons/AccountCircleRounded.js");
/* harmony import */ var _material_ui_icons_PersonSearchRounded__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/PersonSearchRounded */ "./node_modules/@material-ui/icons/PersonSearchRounded.js");
/* harmony import */ var _system_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../system/Container */ "./resources/js/system/Container.jsx");
/* harmony import */ var _advisor_RightSide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./advisor/RightSide */ "./resources/js/pages/advisor/RightSide.jsx");
/* harmony import */ var _services_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/common */ "./resources/js/services/common.js");
/* harmony import */ var _advisor_pages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./advisor/pages */ "./resources/js/pages/advisor/pages/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");








function Advisor() {
  _services_common__WEBPACK_IMPORTED_MODULE_3__.init({
    headerIcons: {
      desktop: [{
        path: '/user',
        icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_icons_AccountCircleRounded__WEBPACK_IMPORTED_MODULE_6__.default, {}),
        auth: true
      }],
      mobile: [{
        path: '/advisors/search',
        icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_icons_PersonSearchRounded__WEBPACK_IMPORTED_MODULE_7__.default, {})
      }, {
        path: '/user',
        icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_icons_AccountCircleRounded__WEBPACK_IMPORTED_MODULE_6__.default, {}),
        auth: true
      }]
    }
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_system_Container__WEBPACK_IMPORTED_MODULE_1__.default, {
    pages: [{
      path: '/advisors',
      component: _advisor_pages__WEBPACK_IMPORTED_MODULE_4__.Home,
      exact: true
    }, {
      path: '/advisors/search',
      component: _advisor_pages__WEBPACK_IMPORTED_MODULE_4__.Search,
      exact: true
    }],
    secondary: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_advisor_RightSide__WEBPACK_IMPORTED_MODULE_2__.default, {}),
    submenus: [{
      path: '/advisors/search',
      text: '투자어드바이저 검색',
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_icons_PersonSearchRounded__WEBPACK_IMPORTED_MODULE_7__.default, {})
    }]
  });
}

/***/ }),

/***/ "./resources/js/pages/Asset.jsx":
/*!**************************************!*\
  !*** ./resources/js/pages/Asset.jsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Asset)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_icons_AccountCircleRounded__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/AccountCircleRounded */ "./node_modules/@material-ui/icons/AccountCircleRounded.js");
/* harmony import */ var _material_ui_icons_AccountBalanceWalletRounded__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/AccountBalanceWalletRounded */ "./node_modules/@material-ui/icons/AccountBalanceWalletRounded.js");
/* harmony import */ var _material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Dashboard */ "./node_modules/@material-ui/icons/Dashboard.js");
/* harmony import */ var _system_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../system/Container */ "./resources/js/system/Container.jsx");
/* harmony import */ var _asset_RightSide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./asset/RightSide */ "./resources/js/pages/asset/RightSide.jsx");
/* harmony import */ var _asset_pages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./asset/pages */ "./resources/js/pages/asset/pages/index.js");
/* harmony import */ var _services_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/common */ "./resources/js/services/common.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");









function Asset() {
  _services_common__WEBPACK_IMPORTED_MODULE_4__.init({
    headerIcons: {
      desktop: [{
        path: '/user',
        icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_icons_AccountCircleRounded__WEBPACK_IMPORTED_MODULE_6__.default, {}),
        auth: true
      }],
      mobile: [{
        path: '/assets/moneybook',
        icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_icons_AccountBalanceWalletRounded__WEBPACK_IMPORTED_MODULE_7__.default, {})
      }]
    }
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_system_Container__WEBPACK_IMPORTED_MODULE_1__.default, {
    pages: [{
      path: '/assets',
      component: _asset_pages__WEBPACK_IMPORTED_MODULE_3__.Home,
      exact: true
    }, {
      path: '/assets/moneybook',
      component: _asset_pages__WEBPACK_IMPORTED_MODULE_3__.Moneybook,
      exact: true
    }],
    secondary: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_asset_RightSide__WEBPACK_IMPORTED_MODULE_2__.default, {}),
    submenus: [{
      path: '/assets',
      text: '자산관리 대시보드',
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_8__.default, {})
    }, {
      path: '/assets/moneybook',
      text: '가계부',
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_icons_AccountBalanceWalletRounded__WEBPACK_IMPORTED_MODULE_7__.default, {})
    }]
  });
}

/***/ }),

/***/ "./resources/js/pages/Developer.jsx":
/*!******************************************!*\
  !*** ./resources/js/pages/Developer.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Developer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_icons_AccountCircleRounded__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/AccountCircleRounded */ "./node_modules/@material-ui/icons/AccountCircleRounded.js");
/* harmony import */ var _material_ui_icons_ForumRounded__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/ForumRounded */ "./node_modules/@material-ui/icons/ForumRounded.js");
/* harmony import */ var _system_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../system/Container */ "./resources/js/system/Container.jsx");
/* harmony import */ var _developer_RightSide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./developer/RightSide */ "./resources/js/pages/developer/RightSide.jsx");
/* harmony import */ var _developer_pages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./developer/pages */ "./resources/js/pages/developer/pages/index.js");
/* harmony import */ var _services_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/common */ "./resources/js/services/common.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");








function Developer() {
  _services_common__WEBPACK_IMPORTED_MODULE_4__.init({
    headerIcons: {
      desktop: [{
        path: '/user',
        icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_icons_AccountCircleRounded__WEBPACK_IMPORTED_MODULE_6__.default, {}),
        auth: true
      }],
      mobile: [{
        path: '/developer/forum',
        icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_icons_ForumRounded__WEBPACK_IMPORTED_MODULE_7__.default, {})
      }]
    }
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_system_Container__WEBPACK_IMPORTED_MODULE_1__.default, {
    pages: [{
      path: '/developer',
      component: _developer_pages__WEBPACK_IMPORTED_MODULE_3__.Home,
      exact: true
    }, {
      path: '/developer/forum',
      component: _developer_pages__WEBPACK_IMPORTED_MODULE_3__.Forum,
      exact: true
    }],
    secondary: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_developer_RightSide__WEBPACK_IMPORTED_MODULE_2__.default, {}),
    submenus: [{
      path: '/developer/forum',
      text: '개발자게시판',
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_icons_ForumRounded__WEBPACK_IMPORTED_MODULE_7__.default, {})
    }]
  });
}

/***/ }),

/***/ "./resources/js/pages/Home.jsx":
/*!*************************************!*\
  !*** ./resources/js/pages/Home.jsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_icons_FolderSpecial__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/FolderSpecial */ "./node_modules/@material-ui/icons/FolderSpecial.js");
/* harmony import */ var _material_ui_icons_LocalActivity__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/LocalActivity */ "./node_modules/@material-ui/icons/LocalActivity.js");
/* harmony import */ var _material_ui_icons_QuestionAnswer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/QuestionAnswer */ "./node_modules/@material-ui/icons/QuestionAnswer.js");
/* harmony import */ var _material_ui_icons_SettingsRounded__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/SettingsRounded */ "./node_modules/@material-ui/icons/SettingsRounded.js");
/* harmony import */ var _material_ui_icons_AccountCircleRounded__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/AccountCircleRounded */ "./node_modules/@material-ui/icons/AccountCircleRounded.js");
/* harmony import */ var _system_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../system/Container */ "./resources/js/system/Container.jsx");
/* harmony import */ var _home_RightSide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/RightSide */ "./resources/js/pages/home/RightSide.jsx");
/* harmony import */ var _home_pages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/pages */ "./resources/js/pages/home/pages/index.js");
/* harmony import */ var _services_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/common */ "./resources/js/services/common.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");











function Home() {
  _services_common__WEBPACK_IMPORTED_MODULE_4__.init({
    headerIcons: {
      desktop: [{
        path: '/user/signin',
        icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_icons_AccountCircleRounded__WEBPACK_IMPORTED_MODULE_6__.default, {}),
        auth: false,
        standalone: true
      }, {
        path: '/user',
        icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_icons_AccountCircleRounded__WEBPACK_IMPORTED_MODULE_6__.default, {}),
        auth: true
      }, {
        path: '/app/setting',
        icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_icons_SettingsRounded__WEBPACK_IMPORTED_MODULE_7__.default, {})
      }],
      mobile: [{
        path: '/app/setting',
        icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_icons_SettingsRounded__WEBPACK_IMPORTED_MODULE_7__.default, {})
      }]
    }
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_system_Container__WEBPACK_IMPORTED_MODULE_1__.default, {
    pages: [{
      path: '/',
      component: _home_pages__WEBPACK_IMPORTED_MODULE_3__.Home,
      exact: true
    }],
    secondary: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_home_RightSide__WEBPACK_IMPORTED_MODULE_2__.default, {}),
    submenus: [{
      path: '#',
      text: '즐겨찾기',
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_icons_FolderSpecial__WEBPACK_IMPORTED_MODULE_8__.default, {})
    }, {
      path: '#',
      text: '저장됨',
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_icons_LocalActivity__WEBPACK_IMPORTED_MODULE_9__.default, {})
    }, {
      path: '#',
      text: '다이렉트메시지',
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_icons_QuestionAnswer__WEBPACK_IMPORTED_MODULE_10__.default, {})
    }]
  });
}

/***/ }),

/***/ "./resources/js/pages/Investment.jsx":
/*!*******************************************!*\
  !*** ./resources/js/pages/Investment.jsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Investment)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_icons_AccountCircleRounded__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/AccountCircleRounded */ "./node_modules/@material-ui/icons/AccountCircleRounded.js");
/* harmony import */ var _material_ui_icons_PieChartRounded__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/PieChartRounded */ "./node_modules/@material-ui/icons/PieChartRounded.js");
/* harmony import */ var _material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Dashboard */ "./node_modules/@material-ui/icons/Dashboard.js");
/* harmony import */ var _system_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../system/Container */ "./resources/js/system/Container.jsx");
/* harmony import */ var _investment_RightSide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./investment/RightSide */ "./resources/js/pages/investment/RightSide.jsx");
/* harmony import */ var _investment_pages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./investment/pages */ "./resources/js/pages/investment/pages/index.js");
/* harmony import */ var _services_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/common */ "./resources/js/services/common.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");










function Investment() {
  _services_common__WEBPACK_IMPORTED_MODULE_4__.init({
    headerIcons: {
      desktop: [{
        path: '/user',
        icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_icons_AccountCircleRounded__WEBPACK_IMPORTED_MODULE_6__.default, {}),
        auth: true
      }],
      mobile: [{
        path: '/investment/portfolio',
        icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_icons_PieChartRounded__WEBPACK_IMPORTED_MODULE_7__.default, {})
      }]
    }
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_system_Container__WEBPACK_IMPORTED_MODULE_1__.default, {
    pages: [{
      path: '/investment',
      component: _investment_pages__WEBPACK_IMPORTED_MODULE_3__.Home,
      exact: true
    }, {
      path: '/investment/portfolio',
      component: _investment_pages__WEBPACK_IMPORTED_MODULE_3__.Portfolio,
      exact: true
    }],
    secondary: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_investment_RightSide__WEBPACK_IMPORTED_MODULE_2__.default, {}),
    submenus: [{
      path: '/investment',
      text: '투자자산 대시보드',
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_8__.default, {})
    }, {
      path: '/investment/portfolio',
      text: '포트폴리오관리',
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_icons_PieChartRounded__WEBPACK_IMPORTED_MODULE_7__.default, {})
    }]
  });
}

/***/ }),

/***/ "./resources/js/pages/User.jsx":
/*!*************************************!*\
  !*** ./resources/js/pages/User.jsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ User)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_icons_SettingsRounded__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/SettingsRounded */ "./node_modules/@material-ui/icons/SettingsRounded.js");
/* harmony import */ var _system_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../system/Container */ "./resources/js/system/Container.jsx");
/* harmony import */ var _user_RightSide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user/RightSide */ "./resources/js/pages/user/RightSide.jsx");
/* harmony import */ var _user_pages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user/pages */ "./resources/js/pages/user/pages/index.js");
/* harmony import */ var _services_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/common */ "./resources/js/services/common.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");







function User() {
  _services_common__WEBPACK_IMPORTED_MODULE_4__.init({
    headerIcons: {
      desktop: [{
        path: '/app/setting',
        icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_icons_SettingsRounded__WEBPACK_IMPORTED_MODULE_6__.default, {})
      }],
      mobile: [{
        path: '/app/setting',
        icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_icons_SettingsRounded__WEBPACK_IMPORTED_MODULE_6__.default, {})
      }]
    }
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_system_Container__WEBPACK_IMPORTED_MODULE_1__.default, {
    pages: [{
      path: '/user',
      component: _user_pages__WEBPACK_IMPORTED_MODULE_3__.Home,
      exact: true
    }],
    secondary: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_user_RightSide__WEBPACK_IMPORTED_MODULE_2__.default, {}),
    submenus: []
  });
}

/***/ }),

/***/ "./resources/js/pages/advisor/RightSide.jsx":
/*!**************************************************!*\
  !*** ./resources/js/pages/advisor/RightSide.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RightSide)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_Paper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Paper */ "./resources/js/components/Paper.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



function RightSide() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_Paper__WEBPACK_IMPORTED_MODULE_1__.default, {
    children: "\uC624\uB978\uCABD"
  });
}

/***/ }),

/***/ "./resources/js/pages/advisor/pages/Home.jsx":
/*!***************************************************!*\
  !*** ./resources/js/pages/advisor/pages/Home.jsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_Paper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/Paper */ "./resources/js/components/Paper.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



function Home() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_Paper__WEBPACK_IMPORTED_MODULE_1__.default, {
    children: "\uC790\uC2E0\uC758 \uD22C\uC790\uC131\uD5A5\uACFC \uBE44\uC2B7\uD55C \uC804\uBB38\uAC00\uC640 \uD568\uAED8 \uD22C\uC790\uD558\uAE30"
  });
}

/***/ }),

/***/ "./resources/js/pages/advisor/pages/Search.jsx":
/*!*****************************************************!*\
  !*** ./resources/js/pages/advisor/pages/Search.jsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Search)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! universal-cookie */ "./node_modules/universal-cookie/es6/index.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/withStyles/withStyles.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/styles/styled.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/Box/Box.js");
/* harmony import */ var _material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/FormGroup */ "./node_modules/@material-ui/core/FormGroup/FormGroup.js");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "./node_modules/@material-ui/core/FormControlLabel/FormControlLabel.js");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "./node_modules/@material-ui/core/Checkbox/Checkbox.js");
/* harmony import */ var _material_ui_core_Accordion__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Accordion */ "./node_modules/@material-ui/core/Accordion/Accordion.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/Button.js");
/* harmony import */ var _material_ui_core_Rating__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Rating */ "./node_modules/@material-ui/core/Rating/Rating.js");
/* harmony import */ var _material_ui_core_Skeleton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Skeleton */ "./node_modules/@material-ui/core/Skeleton/Skeleton.js");
/* harmony import */ var _material_ui_core_AccordionSummary__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/AccordionSummary */ "./node_modules/@material-ui/core/AccordionSummary/AccordionSummary.js");
/* harmony import */ var _material_ui_core_AccordionDetails__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/AccordionDetails */ "./node_modules/@material-ui/core/AccordionDetails/AccordionDetails.js");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ "./node_modules/@material-ui/icons/ExpandMore.js");
/* harmony import */ var _components_Paper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/Paper */ "./resources/js/components/Paper.jsx");
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/api */ "./resources/js/services/api.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../config */ "./resources/js/config/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






















var ItemContainer = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.default)('div')(function (_ref) {
  var _ref2;

  var theme = _ref.theme;
  return _ref2 = {
    display: 'flex',
    marginTop: '10px',
    boxSizing: 'border-box',
    border: (0,_config__WEBPACK_IMPORTED_MODULE_4__.default)('templete.border.1'),
    borderRadius: (0,_config__WEBPACK_IMPORTED_MODULE_4__.default)('templete.borderRadius.1'),
    backgroundColor: '#ffffff'
  }, _defineProperty(_ref2, theme.breakpoints.up('xs'), {
    flexDirection: 'column',
    padding: '10px',
    fontSize: '0.8rem'
  }), _defineProperty(_ref2, theme.breakpoints.up('md'), {
    flexDirection: 'row',
    padding: '20px',
    fontSize: '0.9rem'
  }), _ref2;
});
var AdvisorImage = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.default)('div')(function (_ref3) {
  var _img;

  var theme = _ref3.theme;
  return {
    flexGrow: 0,
    '& img': (_img = {
      borderRadius: '50%'
    }, _defineProperty(_img, theme.breakpoints.up('xs'), {
      width: '60px',
      height: '60px'
    }), _defineProperty(_img, theme.breakpoints.up('md'), {
      width: '68px',
      height: '68px'
    }), _img)
  };
});
var AdvisorInformation = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.default)('div')(function (_ref4) {
  var _ref5;

  var theme = _ref4.theme;
  return _ref5 = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexGrow: 1
  }, _defineProperty(_ref5, theme.breakpoints.up('xs'), {
    paddingLeft: '10px'
  }), _defineProperty(_ref5, theme.breakpoints.up('md'), {
    paddingLeft: '15px'
  }), _ref5;
});
var AdvisorName = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.default)('div')({
  fontSize: '1.3em',
  fontWeight: 'bold'
});
var AdvisorJob = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.default)('div')(function (_ref6) {
  var _ref7;

  var theme = _ref6.theme;
  return _ref7 = {
    fontSize: '0.8em',
    color: '#888888'
  }, _defineProperty(_ref7, theme.breakpoints.up('xs'), {
    paddingBottom: '3px'
  }), _defineProperty(_ref7, theme.breakpoints.up('md'), {
    paddingBottom: '5px'
  }), _ref7;
});
var AdvisorTheme = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.default)('div')({
  fontSize: '0.75em'
});
var AdvisorActivity = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.default)('div')({
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 0
});
var AdvisorRating = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.default)('div')(function (_ref8) {
  var _span;

  var theme = _ref8.theme;
  return {
    '& > span': (_span = {}, _defineProperty(_span, theme.breakpoints.up('xs'), {
      fontSize: '1.1em'
    }), _defineProperty(_span, theme.breakpoints.up('md'), {
      fontSize: '1.3em'
    }), _span)
  };
});
var AdvisorArticleCount = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.default)('div')(function (_ref9) {
  var _ref10;

  var theme = _ref9.theme;
  return _ref10 = {
    textAlign: 'right',
    color: '#aaaaaa'
  }, _defineProperty(_ref10, theme.breakpoints.up('xs'), {
    fontSize: '0.8em'
  }), _defineProperty(_ref10, theme.breakpoints.up('md'), {
    fontSize: '0.9em'
  }), _ref10;
});
var AdvisorDescription = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.default)('div')({
  width: '100%',
  marginTop: '10px',
  fontSize: '0.9em'
});
var FlexRowBox = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.default)('div')({
  display: 'flex',
  flexDirection: 'row'
});
var GrowBox = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.default)('div')({
  flexGrow: 1
});
var NotGrowBox = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.default)('div')({
  flexGrow: 0
});
var SubscriptionContainer = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.default)('div')(function (_ref11) {
  var _ref12;

  var theme = _ref11.theme;
  return _ref12 = {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignContent: 'center',
    justifyContent: 'center',
    boxSizing: 'border-box',
    borderStyle: 'solid',
    borderColor: '#eeeeee',
    textAlign: 'center'
  }, _defineProperty(_ref12, theme.breakpoints.up('xs'), {
    width: '100%',
    margin: '20px 0px 0px 0px',
    padding: '20px 0px 0px 0px',
    borderWidth: '1px 0px 0px 0px'
  }), _defineProperty(_ref12, theme.breakpoints.up('md'), {
    width: '170px',
    height: '100%',
    margin: '0px 0px 0px 20px',
    padding: '0px 0px 0px 20px',
    borderWidth: '0px 0px 0px 1px'
  }), _ref12;
});
var SubscriptionPrice = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.default)('div')(function (_ref13) {
  var _ref14;

  var theme = _ref13.theme;
  return _ref14 = {
    fontFamily: (0,_config__WEBPACK_IMPORTED_MODULE_4__.default)('templete.fontFamily.1'),
    color: (0,_config__WEBPACK_IMPORTED_MODULE_4__.default)('templete.palette.secondary.main'),
    fontWeight: 'bold'
  }, _defineProperty(_ref14, theme.breakpoints.up('xs'), {
    fontSize: '1.2em',
    marginBottom: '15px'
  }), _defineProperty(_ref14, theme.breakpoints.up('md'), {
    marginBottom: '0px'
  }), _ref14;
});
function Search() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      complete = _React$useState2[0],
      setComplete = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1__.useState({}),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      filters = _React$useState4[0],
      setFilters = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_1__.useState({}),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      currentFilters = _React$useState6[0],
      setCurrentFilters = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_1__.useState(null),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      themes = _React$useState8[0],
      setThemes = _React$useState8[1];

  var _React$useState9 = react__WEBPACK_IMPORTED_MODULE_1__.useState(null),
      _React$useState10 = _slicedToArray(_React$useState9, 2),
      advisors = _React$useState10[0],
      setAdvisors = _React$useState10[1];

  var _React$useState11 = react__WEBPACK_IMPORTED_MODULE_1__.useState(1),
      _React$useState12 = _slicedToArray(_React$useState11, 2),
      page = _React$useState12[0],
      setPage = _React$useState12[1];

  var getAdvisors = /*#__PURE__*/function () {
    var _ref15 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      var updated,
          cookie,
          access_token,
          _args = arguments;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              updated = _args.length > 0 && _args[0] !== undefined ? _args[0] : false;

              if (!(updated && !complete || !updated && advisors && advisors.current_page != page || !advisors)) {
                _context.next = 6;
                break;
              }

              cookie = new universal_cookie__WEBPACK_IMPORTED_MODULE_7__.default();
              access_token = cookie.get('personal_access_token');
              _context.next = 6;
              return _services_api__WEBPACK_IMPORTED_MODULE_3__.post('advisors/index', {
                page: page,
                pagination: true,
                filtering: currentFilters,
                filters: filters
              }, access_token).then(function (response) {
                if (response.data) {
                  setComplete(true);
                  setAdvisors(response.data);
                } else {
                  alert('서버통신 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
                }
              });

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getAdvisors() {
      return _ref15.apply(this, arguments);
    };
  }();

  var getThemes = /*#__PURE__*/function () {
    var _ref16 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
      var cookie, access_token;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              cookie = new universal_cookie__WEBPACK_IMPORTED_MODULE_7__.default();
              access_token = cookie.get('personal_access_token');
              _context2.next = 4;
              return _services_api__WEBPACK_IMPORTED_MODULE_3__.post('investment/themes/index', {}, access_token).then(function (response) {
                if (response.data) {
                  var theme_filters = {};
                  response.data.map(function (theme) {
                    theme_filters[theme.slug] = false;
                  });
                  setThemes(response.data);
                  setFilters(_objectSpread(_objectSpread({}, filters), {}, {
                    theme: theme_filters
                  }));
                } else {
                  alert('서버통신 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
                }
              });

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function getThemes() {
      return _ref16.apply(this, arguments);
    };
  }();

  var changeTheme = function changeTheme(event) {
    var filtering = false;

    if ('theme' in filters) {
      for (var _i2 = 0, _Object$entries = Object.entries(filters.theme); _i2 < _Object$entries.length; _i2++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i2], 2),
            key = _Object$entries$_i[0],
            value = _Object$entries$_i[1];

        if (event.target.checked) {
          filtering = true;
          break;
        } else {
          if (key != event.target.name && value) {
            filtering = true;
          }
        }
      }
    }

    setComplete(false);
    setCurrentFilters(_objectSpread(_objectSpread({}, currentFilters), {}, {
      theme: filtering
    }));
    setFilters(_objectSpread(_objectSpread({}, filters), {}, {
      theme: _objectSpread(_objectSpread({}, filters.theme), {}, _defineProperty({}, event.target.name, event.target.checked))
    }));
  };

  var fetchThemeFilters = function fetchThemeFilters() {
    if ('theme' in filters) {
      var Checkbox = (0,_material_ui_styles__WEBPACK_IMPORTED_MODULE_8__.default)({
        root: {
          color: (0,_config__WEBPACK_IMPORTED_MODULE_4__.default)('templete.palette.secondary.main')
        }
      })(function (props) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_9__.default, _objectSpread({
          color: "default"
        }, props));
      });

      if (themes) {
        return themes.map(function (theme, index) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_10__.default, {
            control: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Checkbox, {
              checked: filters.theme[theme.slug],
              onChange: changeTheme,
              name: theme.slug,
              id: "theme_filter_".concat(theme.slug)
            }),
            label: theme.name,
            className: "checkbox-item",
            sx: {
              flexShrink: 0,
              '& span': {
                fontSize: '0.9em'
              }
            }
          }, "theme_filter_".concat(index));
        });
      }
    }
  };

  var Item = function Item(_ref17) {
    var skeleton = _ref17.skeleton,
        advisor = _ref17.advisor;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(ItemContainer, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(GrowBox, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(FlexRowBox, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(AdvisorImage, {
            children: skeleton ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core_Skeleton__WEBPACK_IMPORTED_MODULE_11__.default, {
              variant: "circular",
              width: 68,
              height: 68
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
              alt: "Walter London City",
              src: "https://secure.gravatar.com/avatar/ad6464c0b0336b626439748ce56f0f3d?s=109&d=mm&r=g",
              loading: "lazy"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(AdvisorInformation, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(GrowBox, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(AdvisorName, {
                children: skeleton ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core_Skeleton__WEBPACK_IMPORTED_MODULE_11__.default, {
                  height: 30,
                  width: "20%"
                }) : "".concat(advisor.user.lastname, " ").concat(advisor.user.firstname)
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(AdvisorJob, {
                sx: {},
                children: skeleton ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core_Skeleton__WEBPACK_IMPORTED_MODULE_11__.default, {
                  height: 20,
                  width: "50%"
                }) : '경제적자유를 꿈꾸는 개미투자자'
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(AdvisorTheme, {
                children: skeleton ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core_Skeleton__WEBPACK_IMPORTED_MODULE_11__.default, {
                  height: 15,
                  width: "50%"
                }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("b", {
                    children: "\uD22C\uC790\uC131\uD5A5:"
                  }), " ", advisor.theme.name]
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(AdvisorActivity, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(AdvisorRating, {
                children: skeleton ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core_Skeleton__WEBPACK_IMPORTED_MODULE_11__.default, {
                  height: 20,
                  width: 94
                }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core_Rating__WEBPACK_IMPORTED_MODULE_12__.default, {
                  value: 5.0,
                  readOnly: true
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(AdvisorArticleCount, {
                children: skeleton ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core_Skeleton__WEBPACK_IMPORTED_MODULE_11__.default, {
                  height: 20,
                  width: 94
                }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
                  children: [advisor.articles, " Article(s)"]
                })
              })]
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(FlexRowBox, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(AdvisorDescription, {
            children: skeleton ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core_Skeleton__WEBPACK_IMPORTED_MODULE_11__.default, {
              height: 20,
              width: "100%"
            }) : '투자어드바이저 설명글'
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(NotGrowBox, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(SubscriptionContainer, {
          children: skeleton ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core_Skeleton__WEBPACK_IMPORTED_MODULE_11__.default, {
            height: 100,
            width: 150
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13__.default, {
              disableElevation: true,
              variant: "contained",
              color: "secondary",
              sx: {
                marginBottom: '15px',
                width: {
                  md: '100%'
                },
                minWidth: {
                  xs: '150px'
                }
              },
              children: "\uAD6C\uB3C5\uD558\uAE30"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(SubscriptionPrice, {
              children: "\uBB34\uB8CC"
            })]
          })
        })
      })]
    });
  };

  var fetchAdvisorList = function fetchAdvisorList() {
    return advisors.data.map(function (advisor, index) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Item, {
        advisor: advisor
      }, "advisor-".concat(advisor.user.firstname, "-").concat(index));
    });
  };

  var fetchSkeletonBox = function fetchSkeletonBox() {
    return [1, 2, 3, 4, 5].map(function (skeleton, index) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Item, {
        skeleton: true
      }, "advisor-item-skeleton-".concat(index));
    });
  };

  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(function () {
    getAdvisors(true);
  }, [currentFilters]);
  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(function () {
    getThemes();
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components_Paper__WEBPACK_IMPORTED_MODULE_2__.default, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_material_ui_core_Accordion__WEBPACK_IMPORTED_MODULE_14__.default, {
      className: "filter-box",
      id: "search-filters",
      sx: {
        boxShadow: 'none',
        borderRadius: (0,_config__WEBPACK_IMPORTED_MODULE_4__.default)('templete.borderRadius.1'),
        border: (0,_config__WEBPACK_IMPORTED_MODULE_4__.default)('templete.border.1'),
        backgroundColor: '#ffffff'
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core_AccordionSummary__WEBPACK_IMPORTED_MODULE_15__.default, {
        className: "title",
        expandIcon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_16__.default, {}),
        sx: {
          fontWeight: 'bold',
          fontFamily: (0,_config__WEBPACK_IMPORTED_MODULE_4__.default)('templete.fontFamily.1')
        },
        children: "\uAC80\uC0C9\uD544\uD130"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_material_ui_core_AccordionDetails__WEBPACK_IMPORTED_MODULE_17__.default, {
        className: "filters",
        sx: {
          display: 'flex',
          flexDirection: 'column'
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_18__.default, {
          className: "subject",
          sx: {
            display: 'block',
            paddingBottom: '5px',
            width: '100%',
            fontWeight: 'bold',
            fontSize: '0.9em'
          },
          children: "\uD22C\uC790\uC131\uD5A5"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_19__.default, {
          row: true,
          className: "filter",
          sx: {
            display: 'flex',
            flexWrap: {
              xs: 'nowrap',
              md: 'wrap'
            },
            overflowX: {
              xs: 'scroll',
              md: 'unset'
            }
          },
          children: fetchThemeFilters()
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_18__.default, {
      children: !complete ? fetchSkeletonBox() : advisors && fetchAdvisorList()
    })]
  });
}

/***/ }),

/***/ "./resources/js/pages/advisor/pages/index.js":
/*!***************************************************!*\
  !*** ./resources/js/pages/advisor/pages/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Home": () => (/* reexport safe */ _Home__WEBPACK_IMPORTED_MODULE_0__.default),
/* harmony export */   "Search": () => (/* reexport safe */ _Search__WEBPACK_IMPORTED_MODULE_1__.default)
/* harmony export */ });
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home */ "./resources/js/pages/advisor/pages/Home.jsx");
/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Search */ "./resources/js/pages/advisor/pages/Search.jsx");




/***/ }),

/***/ "./resources/js/pages/asset/RightSide.jsx":
/*!************************************************!*\
  !*** ./resources/js/pages/asset/RightSide.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RightSide)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_Paper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Paper */ "./resources/js/components/Paper.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



function RightSide() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_Paper__WEBPACK_IMPORTED_MODULE_1__.default, {
    children: "\uC790\uC0B0\uAD00\uB9AC \uC624\uB978\uCABD"
  });
}

/***/ }),

/***/ "./resources/js/pages/asset/pages/Home.jsx":
/*!*************************************************!*\
  !*** ./resources/js/pages/asset/pages/Home.jsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_Paper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/Paper */ "./resources/js/components/Paper.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



function Home() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_Paper__WEBPACK_IMPORTED_MODULE_1__.default, {
    children: "\uC790\uC0B0\uAD00\uB9AC \uCCAB \uD398\uC774\uC9C0"
  });
}

/***/ }),

/***/ "./resources/js/pages/asset/pages/Moneybook.jsx":
/*!******************************************************!*\
  !*** ./resources/js/pages/asset/pages/Moneybook.jsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MoneyBook)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_Paper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/Paper */ "./resources/js/components/Paper.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



function MoneyBook() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_Paper__WEBPACK_IMPORTED_MODULE_1__.default, {
    children: "\uAC00\uACC4\uBD80 \uCCAB \uD398\uC774\uC9C0"
  });
}

/***/ }),

/***/ "./resources/js/pages/asset/pages/index.js":
/*!*************************************************!*\
  !*** ./resources/js/pages/asset/pages/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Home": () => (/* reexport safe */ _Home__WEBPACK_IMPORTED_MODULE_0__.default),
/* harmony export */   "Moneybook": () => (/* reexport safe */ _Moneybook__WEBPACK_IMPORTED_MODULE_1__.default)
/* harmony export */ });
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home */ "./resources/js/pages/asset/pages/Home.jsx");
/* harmony import */ var _Moneybook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Moneybook */ "./resources/js/pages/asset/pages/Moneybook.jsx");




/***/ }),

/***/ "./resources/js/pages/developer/RightSide.jsx":
/*!****************************************************!*\
  !*** ./resources/js/pages/developer/RightSide.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RightSide)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_Paper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Paper */ "./resources/js/components/Paper.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



function RightSide() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_Paper__WEBPACK_IMPORTED_MODULE_1__.default, {
    children: "\uAC1C\uBC1C\uC790\uAC8C\uC2DC\uD310 \uC624\uB978\uCABD"
  });
}

/***/ }),

/***/ "./resources/js/pages/developer/pages/Forum.jsx":
/*!******************************************************!*\
  !*** ./resources/js/pages/developer/pages/Forum.jsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Forum)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _ckeditor_ckeditor5_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ckeditor/ckeditor5-react */ "./node_modules/@ckeditor/ckeditor5-react/dist/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/Box/Box.js");
/* harmony import */ var _components_Paper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/Paper */ "./resources/js/components/Paper.jsx");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../config */ "./resources/js/config/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");








function Forum() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components_Paper__WEBPACK_IMPORTED_MODULE_3__.default, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6__.default, {
      sx: {
        fontSize: '1.2rem',
        fontWeight: 'bold',
        fontFamily: (0,_config__WEBPACK_IMPORTED_MODULE_4__.default)('templete.fontFamily.1'),
        marginBottom: '20px'
      },
      children: "\uD14C\uC2A4\uD2B8\uAC8C\uC2DC\uD310"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_ckeditor_ckeditor5_react__WEBPACK_IMPORTED_MODULE_1__.CKEditor, {
      editor: (_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_2___default()),
      data: "<p>Hello from CKEditor 5!</p>",
      onReady: function onReady(editor) {
        // You can store the "editor" and use when it is needed.
        console.log('Editor is ready to use!', editor);
      },
      onChange: function onChange(event, editor) {
        var data = editor.getData();
        console.log({
          event: event,
          editor: editor,
          data: data
        });
      },
      onBlur: function onBlur(event, editor) {
        console.log('Blur.', editor);
      },
      onFocus: function onFocus(event, editor) {
        console.log('Focus.', editor);
      }
    })]
  });
}

/***/ }),

/***/ "./resources/js/pages/developer/pages/Home.jsx":
/*!*****************************************************!*\
  !*** ./resources/js/pages/developer/pages/Home.jsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_Paper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/Paper */ "./resources/js/components/Paper.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



function Home() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_Paper__WEBPACK_IMPORTED_MODULE_1__.default, {
    children: "\uAC1C\uBC1C\uC790 \uCCAB \uD398\uC774\uC9C0"
  });
}

/***/ }),

/***/ "./resources/js/pages/developer/pages/index.js":
/*!*****************************************************!*\
  !*** ./resources/js/pages/developer/pages/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Home": () => (/* reexport safe */ _Home__WEBPACK_IMPORTED_MODULE_0__.default),
/* harmony export */   "Forum": () => (/* reexport safe */ _Forum__WEBPACK_IMPORTED_MODULE_1__.default)
/* harmony export */ });
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home */ "./resources/js/pages/developer/pages/Home.jsx");
/* harmony import */ var _Forum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Forum */ "./resources/js/pages/developer/pages/Forum.jsx");




/***/ }),

/***/ "./resources/js/pages/home/RightSide.jsx":
/*!***********************************************!*\
  !*** ./resources/js/pages/home/RightSide.jsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RightSide)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_Paper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Paper */ "./resources/js/components/Paper.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



function RightSide() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_Paper__WEBPACK_IMPORTED_MODULE_1__.default, {
    children: "\uC624\uB978\uCABD"
  });
}

/***/ }),

/***/ "./resources/js/pages/home/pages/Home.jsx":
/*!************************************************!*\
  !*** ./resources/js/pages/home/pages/Home.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_Paper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/Paper */ "./resources/js/components/Paper.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



function Home() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_Paper__WEBPACK_IMPORTED_MODULE_1__.default, {
    children: "\uCCAB \uD398\uC774\uC9C0"
  });
}

/***/ }),

/***/ "./resources/js/pages/home/pages/index.js":
/*!************************************************!*\
  !*** ./resources/js/pages/home/pages/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Home": () => (/* reexport safe */ _Home__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home */ "./resources/js/pages/home/pages/Home.jsx");



/***/ }),

/***/ "./resources/js/pages/index.js":
/*!*************************************!*\
  !*** ./resources/js/pages/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Home": () => (/* reexport safe */ _Home__WEBPACK_IMPORTED_MODULE_0__.default),
/* harmony export */   "User": () => (/* reexport safe */ _User__WEBPACK_IMPORTED_MODULE_1__.default),
/* harmony export */   "Asset": () => (/* reexport safe */ _Asset__WEBPACK_IMPORTED_MODULE_3__.default),
/* harmony export */   "Investment": () => (/* reexport safe */ _Investment__WEBPACK_IMPORTED_MODULE_4__.default),
/* harmony export */   "Advisor": () => (/* reexport safe */ _Advisor__WEBPACK_IMPORTED_MODULE_2__.default),
/* harmony export */   "Developer": () => (/* reexport safe */ _Developer__WEBPACK_IMPORTED_MODULE_5__.default)
/* harmony export */ });
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home */ "./resources/js/pages/Home.jsx");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./User */ "./resources/js/pages/User.jsx");
/* harmony import */ var _Advisor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Advisor */ "./resources/js/pages/Advisor.jsx");
/* harmony import */ var _Asset__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Asset */ "./resources/js/pages/Asset.jsx");
/* harmony import */ var _Investment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Investment */ "./resources/js/pages/Investment.jsx");
/* harmony import */ var _Developer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Developer */ "./resources/js/pages/Developer.jsx");








/***/ }),

/***/ "./resources/js/pages/investment/RightSide.jsx":
/*!*****************************************************!*\
  !*** ./resources/js/pages/investment/RightSide.jsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RightSide)
/* harmony export */ });
/* harmony import */ var _components_Paper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/Paper */ "./resources/js/components/Paper.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


function RightSide() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_Paper__WEBPACK_IMPORTED_MODULE_0__.default, {
    children: "\uD3EC\uD2B8\uD3F4\uB9AC\uC624 \uC624\uB978\uCABD \uCF58\uD150\uCE20"
  });
}

/***/ }),

/***/ "./resources/js/pages/investment/pages/Home.jsx":
/*!******************************************************!*\
  !*** ./resources/js/pages/investment/pages/Home.jsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _components_Paper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../components/Paper */ "./resources/js/components/Paper.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



function Home() {
  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useHistory)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_Paper__WEBPACK_IMPORTED_MODULE_0__.default, {
    children: "\uD22C\uC790 \uD398\uC774\uC9C0"
  });
}

/***/ }),

/***/ "./resources/js/pages/investment/pages/Portfolio.jsx":
/*!***********************************************************!*\
  !*** ./resources/js/pages/investment/pages/Portfolio.jsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Portfolio)
/* harmony export */ });
/* harmony import */ var _components_Paper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../components/Paper */ "./resources/js/components/Paper.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


function Portfolio() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_Paper__WEBPACK_IMPORTED_MODULE_0__.default, {
    children: "\uD3EC\uD2B8\uD3F4\uB9AC\uC624 \uCCAB \uD398\uC774\uC9C0"
  });
}

/***/ }),

/***/ "./resources/js/pages/investment/pages/index.js":
/*!******************************************************!*\
  !*** ./resources/js/pages/investment/pages/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Home": () => (/* reexport safe */ _Home__WEBPACK_IMPORTED_MODULE_0__.default),
/* harmony export */   "Portfolio": () => (/* reexport safe */ _Portfolio__WEBPACK_IMPORTED_MODULE_1__.default)
/* harmony export */ });
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home */ "./resources/js/pages/investment/pages/Home.jsx");
/* harmony import */ var _Portfolio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Portfolio */ "./resources/js/pages/investment/pages/Portfolio.jsx");




/***/ }),

/***/ "./resources/js/pages/user/RightSide.jsx":
/*!***********************************************!*\
  !*** ./resources/js/pages/user/RightSide.jsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RightSide)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_Paper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Paper */ "./resources/js/components/Paper.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



function RightSide() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_Paper__WEBPACK_IMPORTED_MODULE_1__.default, {
    children: "\uD68C\uC6D0\uC815\uBCF4 \uC624\uB978\uCABD"
  });
}

/***/ }),

/***/ "./resources/js/pages/user/pages/Home.jsx":
/*!************************************************!*\
  !*** ./resources/js/pages/user/pages/Home.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_Paper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/Paper */ "./resources/js/components/Paper.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



function Home() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_Paper__WEBPACK_IMPORTED_MODULE_1__.default, {
    children: "\uC0AC\uC6A9\uC790 \uCCAB \uD398\uC774\uC9C0"
  });
}

/***/ }),

/***/ "./resources/js/pages/user/pages/index.js":
/*!************************************************!*\
  !*** ./resources/js/pages/user/pages/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Home": () => (/* reexport safe */ _Home__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home */ "./resources/js/pages/user/pages/Home.jsx");



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
/* harmony export */   "setURI": () => (/* binding */ setURI),
/* harmony export */   "setMobileDrawerOpen": () => (/* binding */ setMobileDrawerOpen),
/* harmony export */   "setComplete": () => (/* binding */ setComplete)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./resources/js/redux/constants.js");

var setTab = function setTab(tab) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__.default.app.tab,
    state: tab
  };
};
var setTitle = function setTitle(title) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__.default.app.title,
    state: title
  };
};
var setHeaderIcons = function setHeaderIcons(headerIcons) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__.default.app.headerIcons,
    state: headerIcons
  };
};
var setURI = function setURI(uri) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__.default.app.uri,
    state: uri
  };
};
var setMobileDrawerOpen = function setMobileDrawerOpen(open) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__.default.app.mobileDrawerOpen,
    state: open
  };
};
var setComplete = function setComplete(complete) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__.default.app.complete,
    state: complete
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
  complete: false,
  title: null,
  tab: null,
  headerIcons: null,
  uri: '/',
  mobileDrawerOpen: false
};

function app() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialStates;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _constants__WEBPACK_IMPORTED_MODULE_0__.default.app.tab:
      return _objectSpread(_objectSpread({}, state), {}, {
        tab: action.state
      });
      break;

    case _constants__WEBPACK_IMPORTED_MODULE_0__.default.app.title:
      return _objectSpread(_objectSpread({}, state), {}, {
        title: action.state
      });
      break;

    case _constants__WEBPACK_IMPORTED_MODULE_0__.default.app.headerIcons:
      return _objectSpread(_objectSpread({}, state), {}, {
        headerIcons: action.state
      });
      break;

    case _constants__WEBPACK_IMPORTED_MODULE_0__.default.app.uri:
      return _objectSpread(_objectSpread({}, state), {}, {
        uri: action.state
      });
      break;

    case _constants__WEBPACK_IMPORTED_MODULE_0__.default.app.mobileDrawerOpen:
      return _objectSpread(_objectSpread({}, state), {}, {
        mobileDrawerOpen: action.state
      });
      break;

    case _constants__WEBPACK_IMPORTED_MODULE_0__.default.app.complete:
      return _objectSpread(_objectSpread({}, state), {}, {
        complete: action.state
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
  app: _app__WEBPACK_IMPORTED_MODULE_0__.default
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Reducers);

/***/ }),

/***/ "./resources/js/routes.js":
/*!********************************!*\
  !*** ./resources/js/routes.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var routes = {
  '/': {
    tabName: 'home',
    component: 'Home',
    title: '첫 페이지'
  },
  user: {
    tabName: 'user',
    component: 'User',
    title: '마이페이지',
    children: {
      signup: {
        title: '회원가입'
      },
      signin: {
        title: '회원로그인'
      },
      signout: {
        title: '로그아웃'
      }
    }
  },
  assets: {
    tabName: 'asset',
    component: 'Asset',
    title: '자산관리',
    children: {
      moneybook: {
        title: '가계부'
      }
    }
  },
  investment: {
    tabName: 'investment',
    component: 'Investment',
    title: '투자자산관리',
    children: {
      portfolio: {
        title: '포트폴리오',
        children: {
          create: {
            title: '포트폴리오 만들기'
          }
        }
      }
    }
  },
  advisors: {
    tabName: 'advisor',
    component: 'Advisor',
    title: '투자어드바이저',
    children: {
      search: {
        title: '투자어드바이저 검색'
      }
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (routes);

/***/ }),

/***/ "./resources/js/services/api.js":
/*!**************************************!*\
  !*** ./resources/js/services/api.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "post": () => (/* binding */ post)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./axios */ "./resources/js/services/axios.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var backend = (0,_axios__WEBPACK_IMPORTED_MODULE_1__.createInstance)('backend');
var api = (0,_axios__WEBPACK_IMPORTED_MODULE_1__.createInstance)();
var post = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3(path) {
    var params,
        token,
        _args3 = arguments;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            params = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : {};
            token = _args3.length > 2 && _args3[2] !== undefined ? _args3[2] : null;
            _context3.next = 4;
            return backend.get('sanctum/csrf-cookie').then( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
              var headers;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      headers = {};
                      headers['Content-Type'] = 'application/json';

                      if (token) {
                        headers['Authorization'] = 'Bearer ' + token;
                      }

                      _context2.next = 5;
                      return api.post(path, params, {
                        headers: headers
                      }).then( /*#__PURE__*/function () {
                        var _ref3 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(response) {
                          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
                            while (1) {
                              switch (_context.prev = _context.next) {
                                case 0:
                                  if (!response.data) {
                                    _context.next = 4;
                                    break;
                                  }

                                  return _context.abrupt("return", response);

                                case 4:
                                  return _context.abrupt("return", false);

                                case 5:
                                case "end":
                                  return _context.stop();
                              }
                            }
                          }, _callee);
                        }));

                        return function (_x2) {
                          return _ref3.apply(this, arguments);
                        };
                      }());

                    case 5:
                      return _context2.abrupt("return", _context2.sent);

                    case 6:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2);
            })));

          case 4:
            return _context3.abrupt("return", _context3.sent);

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function post(_x) {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./resources/js/services/axios.js":
/*!****************************************!*\
  !*** ./resources/js/services/axios.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createInstance": () => (/* binding */ createInstance)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./resources/js/config/index.js");


function createInstance() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'api';
  var custom_axios = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
    baseURL: (type == 'api' ? (0,_config__WEBPACK_IMPORTED_MODULE_1__.default)('app.url.api') : (0,_config__WEBPACK_IMPORTED_MODULE_1__.default)('app.url.backend')) + '/',
    withCredentials: true,
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN'
  });
  return custom_axios;
}

/***/ }),

/***/ "./resources/js/services/browser.js":
/*!******************************************!*\
  !*** ./resources/js/services/browser.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "scrollTop": () => (/* binding */ scrollTop),
/* harmony export */   "changeTitle": () => (/* binding */ changeTitle)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ "./resources/js/config/index.js");

var scrollTop = function scrollTop() {
  window.scrollTo(0, 0);
};
var changeTitle = function changeTitle(title) {
  if (typeof title == 'string' && title.length > 0) {
    document.title = title + ' | ' + (0,_config__WEBPACK_IMPORTED_MODULE_0__.default)('app.name');
  } else {
    document.title = (0,_config__WEBPACK_IMPORTED_MODULE_0__.default)('app.name');
  }
};

/***/ }),

/***/ "./resources/js/services/common.js":
/*!*****************************************!*\
  !*** ./resources/js/services/common.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "init": () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./browser */ "./resources/js/services/browser.js");
/* harmony import */ var _redux_actions_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/actions/app */ "./resources/js/redux/actions/app.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ "./resources/js/config/index.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../routes */ "./resources/js/routes.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }







function init() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var error = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.app.error;
  });
  var currentTab = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.app.tab;
  });
  var currentURI = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.app.uri;
  });
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (error !== null && _typeof(error) === 'object' && 'error' in error && 'callback' in error) {
      error.callback();
    }
  }, [error]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    // 현재 페이지의 메타데이터를 가져옴
    var metaData = getMetaData(); // 리덕스 컨테이너에 저장된 값과 현재 페이지의 메타데이터가 다른 경우 리덕스 컨테이너 및 웹브라우저 타이틀 업데이트

    if ((0,_config__WEBPACK_IMPORTED_MODULE_4__.default)('app.route')[metaData['tabName']] != currentTab) {
      // 메타데이터에 저장된 탭정보를 리덕스에 전달
      dispatch((0,_redux_actions_app__WEBPACK_IMPORTED_MODULE_3__.setTab)((0,_config__WEBPACK_IMPORTED_MODULE_4__.default)('app.route')[metaData['tabName']]));
    }
  }, [currentTab]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    // 현재 페이지의 메타데이터를 가져옴
    var metaData = getMetaData(); // 페이지 제목 변경

    _browser__WEBPACK_IMPORTED_MODULE_2__.changeTitle(metaData['title']); // 헤더에 추가되는 아이콘 리스트를 리덕스 컨테이너에 저장

    if ('headerIcons' in props) {
      dispatch((0,_redux_actions_app__WEBPACK_IMPORTED_MODULE_3__.setHeaderIcons)(props.headerIcons));
    } // 웹브라우저 스크롤를 최상단으로 이동시킴


    _browser__WEBPACK_IMPORTED_MODULE_2__.scrollTop();
  }, [currentURI]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    dispatch((0,_redux_actions_app__WEBPACK_IMPORTED_MODULE_3__.setURI)(window.location.pathname));
  });
}

var getMetaData = function getMetaData() {
  // 현재 디렉토리 경로를 배열로 저장
  var currentPathArray = window.location.pathname.split('/'); // 현재 디렉토리에 해당하는 탭 이름을 문자열로 저장

  var currentTabName = 'default'; // 현재 디렉토리에 해당하는 타이틀을 문자열로 저장

  var currentDocumentTitle = ''; // 현재 경로가 어떤 탭 이름과 일치하는지 확인

  for (var _i = 0, _Object$entries = Object.entries(_routes__WEBPACK_IMPORTED_MODULE_5__.default); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
        path = _Object$entries$_i[0],
        routeItem = _Object$entries$_i[1];

    if (path.replace('/', '') == currentPathArray[1]) {
      if ('tabName' in routeItem) {
        currentTabName = routeItem['tabName'];
      }

      if ('title' in routeItem) {
        currentDocumentTitle = routeItem['title'];
      }

      if ('children' in routeItem) {
        var depth = 2;
        var childItem = routeItem['children'];

        while (true) {
          if (currentPathArray[depth] in childItem) {
            childItem = childItem[currentPathArray[depth]];

            if ('tabName' in childItem) {
              currentTabName = childItem['tabName'];
            }

            if ('title' in childItem) {
              currentDocumentTitle = childItem['title'];
            }

            if ('children' in childItem) {
              childItem = childItem['children'];
              depth++;
            } else {
              break;
            }
          } else {
            break;
          }
        }
      }
    } else {// 지정되지 않은 경로로 접근했을 경우 어떻게 처리해야하는가?
    }
  }

  return {
    tabName: currentTabName,
    title: currentDocumentTitle
  };
};

/***/ }),

/***/ "./resources/js/standalones/SignIn.jsx":
/*!*********************************************!*\
  !*** ./resources/js/standalones/SignIn.jsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SignIn)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! universal-cookie */ "./node_modules/universal-cookie/es6/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/styles/styled.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/createTheme.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/node_modules/@material-ui/system/esm/ThemeProvider/ThemeProvider.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/withStyles/withStyles.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/Box/Box.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/TextField/TextField.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/Button.js");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "./node_modules/@material-ui/core/FormControlLabel/FormControlLabel.js");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "./node_modules/@material-ui/core/Checkbox/Checkbox.js");
/* harmony import */ var _material_ui_icons_Google__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/Google */ "./node_modules/@material-ui/icons/Google.js");
/* harmony import */ var _material_ui_icons_Facebook__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/Facebook */ "./node_modules/@material-ui/icons/Facebook.js");
/* harmony import */ var _material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/icons/ArrowBack */ "./node_modules/@material-ui/icons/ArrowBack.js");
/* harmony import */ var _components_SingleBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/SingleBox */ "./resources/js/components/SingleBox.jsx");
/* harmony import */ var _components_Elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Elements */ "./resources/js/components/Elements.jsx");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./resources/js/config/index.js");
/* harmony import */ var _services_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/common */ "./resources/js/services/common.js");
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/api */ "./resources/js/services/api.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






















var SocialContainer = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.default)('div')({
  width: '300px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center'
});
var SocialServiceButton = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.default)('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '60px',
  height: '60px',
  marginRight: '20px',
  border: '3px solid rgba(73, 70, 128, 0.1)',
  borderRadius: '50%',
  boxSizing: 'border-box',
  cursor: 'pointer',
  color: 'rgba(0, 0, 0, 0.5)',
  transition: 'color 500ms cubic-bezier(0, 0, 0.2, 1) 0ms, border-color 500ms cubic-bezier(0, 0, 0.2, 1) 0ms;',
  WebkitTapHighlightColor: 'transparent',
  userSelect: 'none',
  '&:last-of-type': {
    marginRight: '0px'
  },
  '&:hover': {
    '&.kakao': {
      color: (0,_config__WEBPACK_IMPORTED_MODULE_3__.default)('templete.palette.kakao.main'),
      borderColor: (0,_config__WEBPACK_IMPORTED_MODULE_3__.default)('templete.palette.kakao.main')
    },
    '&.naver': {
      color: (0,_config__WEBPACK_IMPORTED_MODULE_3__.default)('templete.palette.naver.main'),
      borderColor: (0,_config__WEBPACK_IMPORTED_MODULE_3__.default)('templete.palette.naver.main')
    },
    '&.google': {
      color: (0,_config__WEBPACK_IMPORTED_MODULE_3__.default)('templete.palette.google.main'),
      borderColor: (0,_config__WEBPACK_IMPORTED_MODULE_3__.default)('templete.palette.google.main')
    },
    '&.facebook': {
      color: (0,_config__WEBPACK_IMPORTED_MODULE_3__.default)('templete.palette.facebook.main'),
      borderColor: (0,_config__WEBPACK_IMPORTED_MODULE_3__.default)('templete.palette.facebook.main')
    }
  }
});
var InputItem = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.default)('div')({
  width: '100%',
  '&:last-of-type': {
    marginBottom: '0px'
  },
  '&.button-box button': {
    boxShadow: '0 7px 10px 0 rgba(73, 70, 128, 0.3)'
  },
  '& .MuiInputBase-formControl': {
    borderRadius: '6px'
  },
  '& .checkbox-container .MuiTypography-root': {
    fontSize: 'inherit'
  }
});
function SignIn() {
  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_8__.useHistory)();
  var ref = {
    email: react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),
    password: react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),
    remember: react__WEBPACK_IMPORTED_MODULE_0__.useRef(null)
  };
  var theme = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__.default)({
    palette: (0,_config__WEBPACK_IMPORTED_MODULE_3__.default)('templete.palette'),
    breakpoints: (0,_config__WEBPACK_IMPORTED_MODULE_3__.default)('templete.breakpoints')
  });
  var Checkbox = (0,_material_ui_styles__WEBPACK_IMPORTED_MODULE_10__.default)({
    root: {
      color: (0,_config__WEBPACK_IMPORTED_MODULE_3__.default)('templete.palette.primary.main')
    }
  })(function (props) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_11__.default, _objectSpread({
      color: "default"
    }, props));
  });

  var process = function process() {
    var email = ref.email.current.querySelector('input');
    var password = ref.password.current.querySelector('input');
    var remember_me = ref.remember.current.querySelector('input').checked;
    var user_agent = (0,_config__WEBPACK_IMPORTED_MODULE_3__.default)('app.agent');
    _services_api__WEBPACK_IMPORTED_MODULE_5__.post('auth/signin', {
      email: email.value,
      password: password.value,
      remember_me: remember_me,
      ip_address: (0,_config__WEBPACK_IMPORTED_MODULE_3__.default)('app.client'),
      user_agent: {
        device: user_agent.device,
        platform: user_agent.platform,
        platform_version: user_agent.platform_version,
        browser: user_agent.browser
      }
    }).then(function (response) {
      if (response.status === 200) {
        var cookie = new universal_cookie__WEBPACK_IMPORTED_MODULE_12__.default();
        cookie.set('personal_access_token', response.headers['aether-access-token'], {
          path: '/',
          domain: '.' + (0,_config__WEBPACK_IMPORTED_MODULE_3__.default)('app.domain')
        });
        cookie.set('personal_unique_code', response.headers['aether-user-unique-code'], {
          path: '/',
          domain: '.' + (0,_config__WEBPACK_IMPORTED_MODULE_3__.default)('app.domain')
        });

        if (cookie.get('personal_access_token')) {
          window.location.href = '/';
        } else {
          console.log('cookie: ' + cookie.get('personal_access_token'));
        }
      }
    })["catch"](function (error) {
      alert('사용자 정보가 잘못되었습니다.');
      password.value = '';
      password.focus();
    });
  };

  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    var keyEvent = function keyEvent(event) {
      if (event.keyCode == 13) {
        process();
      }
    };

    ref.email.current.querySelector('input').addEventListener('keyup', function (event) {
      keyEvent(event);
    });
    ref.password.current.querySelector('input').addEventListener('keyup', function (event) {
      keyEvent(event);
    });
  }, []);
  _services_common__WEBPACK_IMPORTED_MODULE_4__.init();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_13__.default, {
    theme: theme,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_components_SingleBox__WEBPACK_IMPORTED_MODULE_1__.default, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_components_Elements__WEBPACK_IMPORTED_MODULE_2__.FloatingBox.Container, {
        sx: {
          width: '100%',
          maxWidth: '450px'
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_components_Elements__WEBPACK_IMPORTED_MODULE_2__.FloatingBox.Header.Container, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_Elements__WEBPACK_IMPORTED_MODULE_2__.FloatingBox.Header.Primary, {
            children: "SIGN IN"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_Elements__WEBPACK_IMPORTED_MODULE_2__.FloatingBox.Header.Secondary, {
            children: "\uD68C\uC6D0\uC73C\uB85C \uB85C\uADF8\uC778\uD558\uBA74 \uBAA8\uB4E0 \uAE30\uB2A5\uC744 \uC774\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_components_Elements__WEBPACK_IMPORTED_MODULE_2__.FloatingBox.Body, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(SocialContainer, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(SocialServiceButton, {
              className: "kakao",
              children: "K"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(SocialServiceButton, {
              className: "naver",
              children: "N"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(SocialServiceButton, {
              className: "google",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_material_ui_icons_Google__WEBPACK_IMPORTED_MODULE_14__.default, {})
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(SocialServiceButton, {
              className: "facebook",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_material_ui_icons_Facebook__WEBPACK_IMPORTED_MODULE_15__.default, {})
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_Elements__WEBPACK_IMPORTED_MODULE_2__.FloatingBox.Divider, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_Elements__WEBPACK_IMPORTED_MODULE_2__.FloatingBox.DividerText, {
              children: "OR"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(InputItem, {
            sx: {
              marginBottom: '20px'
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_16__.default, {
              fullWidth: true,
              ref: ref.email,
              label: "\uC774\uBA54\uC77C\uC8FC\uC18C",
              variant: "outlined",
              color: "primary"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(InputItem, {
            sx: {
              marginBottom: '10px'
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_16__.default, {
              fullWidth: true,
              ref: ref.password,
              type: "password",
              label: "\uD328\uC2A4\uC6CC\uB4DC",
              variant: "outlined",
              color: "primary"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(InputItem, {
            sx: {
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: '10px'
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_Elements__WEBPACK_IMPORTED_MODULE_2__.GrowBox, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_17__.default, {
                className: "checkbox-container",
                control: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(Checkbox, {
                  name: "remember"
                }),
                label: "\uB85C\uADF8\uC778 \uC0C1\uD0DC \uC720\uC9C0\uD558\uAE30",
                ref: ref.remember
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("a", {
              href: "#",
              children: "\uD328\uC2A4\uC6CC\uB4DC \uCD08\uAE30\uD654"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(InputItem, {
            className: "button-box",
            sx: {
              marginBottom: '10px'
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_18__.default, {
              fullWidth: true,
              variant: "contained",
              color: "primary",
              size: "large",
              disableElevation: true,
              onClick: process,
              children: "\uB85C\uADF8\uC778"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_Elements__WEBPACK_IMPORTED_MODULE_2__.FloatingBox.Divider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_19__.default, {
            sx: {
              textAlign: 'center'
            },
            children: ["\uC544\uC9C1 \uD68C\uC6D0\uC774 \uC544\uB2C8\uC2E0\uAC00\uC694?", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_19__.default, {
              onClick: function onClick() {
                window.location.href = '/user/signup';
              },
              sx: {
                display: 'inline-block',
                marginLeft: '10px',
                color: (0,_config__WEBPACK_IMPORTED_MODULE_3__.default)('templete.palette.primary.main'),
                fontWeight: 'bold',
                cursor: 'pointer'
              },
              children: "\uD68C\uC6D0\uAC00\uC785"
            })]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_19__.default, {
        onClick: function onClick() {
          history.goBack();
        },
        sx: {
          margin: '30px',
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          WebkitTapHighlightColor: 'transparent',
          userSelect: 'none'
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_20__.default, {
          sx: {
            marginRight: '10px'
          }
        }), "\uB3CC\uC544\uAC00\uAE30"]
      })]
    })
  });
}

/***/ }),

/***/ "./resources/js/standalones/SignOut.jsx":
/*!**********************************************!*\
  !*** ./resources/js/standalones/SignOut.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SignOut)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! universal-cookie */ "./node_modules/universal-cookie/es6/index.js");
/* harmony import */ var _services_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/common */ "./resources/js/services/common.js");
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api */ "./resources/js/services/api.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





function SignOut() {
  _services_common__WEBPACK_IMPORTED_MODULE_1__.init();
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    var cookie = new universal_cookie__WEBPACK_IMPORTED_MODULE_4__.default();
    var access_token = cookie.get('personal_access_token');
    _services_api__WEBPACK_IMPORTED_MODULE_2__.post('auth/signout', {}, access_token).then(function (response) {
      if (response.status === 200) {
        var _cookie = new universal_cookie__WEBPACK_IMPORTED_MODULE_4__.default();

        _cookie.remove('personal_access_token');

        _cookie.remove('personal_unique_code');

        window.location.href = '/';
      } else {
        alert('로그아웃 실패! 관리자에게 문의하세요.');
        window.location.href = '/';
      }
    })["catch"](function (error) {
      console.log(error);
    });
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {});
}

/***/ }),

/***/ "./resources/js/standalones/SignUp.jsx":
/*!*********************************************!*\
  !*** ./resources/js/standalones/SignUp.jsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SignUp)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/styles/styled.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/createTheme.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/node_modules/@material-ui/system/esm/ThemeProvider/ThemeProvider.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/Box/Box.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/Grid/Grid.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/TextField/TextField.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/Button.js");
/* harmony import */ var _material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/ArrowBack */ "./node_modules/@material-ui/icons/ArrowBack.js");
/* harmony import */ var _components_SingleBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/SingleBox */ "./resources/js/components/SingleBox.jsx");
/* harmony import */ var _components_Elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Elements */ "./resources/js/components/Elements.jsx");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./resources/js/config/index.js");
/* harmony import */ var _services_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/common */ "./resources/js/services/common.js");
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/api */ "./resources/js/services/api.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
















var InputItem = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.default)('div')({
  width: '100%',
  '&:last-of-type': {
    marginBottom: '0px'
  },
  '&.button-box button': {
    boxShadow: '0 7px 10px 0 rgba(73, 70, 128, 0.3)'
  },
  '& .MuiInputBase-formControl': {
    borderRadius: '6px'
  },
  '& .checkbox-container .MuiTypography-root': {
    fontSize: 'inherit'
  }
});
function SignUp() {
  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_8__.useHistory)();
  var ref = {
    email: react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),
    password: react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),
    password_confirmation: react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),
    firstname: react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),
    lastname: react__WEBPACK_IMPORTED_MODULE_0__.useRef(null)
  };
  var theme = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__.default)({
    palette: (0,_config__WEBPACK_IMPORTED_MODULE_3__.default)('templete.palette'),
    breakpoints: (0,_config__WEBPACK_IMPORTED_MODULE_3__.default)('templete.breakpoints')
  });

  var process = function process() {
    var email = ref.email.current.querySelector('input');
    var password = ref.password.current.querySelector('input');
    var password_confirmation = ref.password_confirmation.current.querySelector('input');
    var firstname = ref.firstname.current.querySelector('input');
    var lastname = ref.lastname.current.querySelector('input');
    _services_api__WEBPACK_IMPORTED_MODULE_5__.post('users', {
      email: email.value,
      password: password.value,
      firstname: firstname.value,
      lastname: lastname.value
    }).then(function (response) {
      if (response.status === 201) {
        window.location.href = '/';
      } else {
        alert('회원가입에 실패했습니다. 관리자에게 문의하세요.');
      }
    })["catch"](function (error) {
      console.log(error.response);
    });
  };

  _services_common__WEBPACK_IMPORTED_MODULE_4__.init();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__.default, {
    theme: theme,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_components_SingleBox__WEBPACK_IMPORTED_MODULE_1__.default, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_components_Elements__WEBPACK_IMPORTED_MODULE_2__.FloatingBox.Container, {
        sx: {
          width: '100%',
          maxWidth: '450px'
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_components_Elements__WEBPACK_IMPORTED_MODULE_2__.FloatingBox.Header.Container, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_Elements__WEBPACK_IMPORTED_MODULE_2__.FloatingBox.Header.Primary, {
            children: "SIGN UP"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_Elements__WEBPACK_IMPORTED_MODULE_2__.FloatingBox.Header.Secondary, {
            children: "\uD68C\uC6D0\uAC00\uC785 \uD6C4 \uD22C\uC790\uC790\uC0B0\uC744 \uD6A8\uC728\uC801\uC73C\uB85C \uAD00\uB9AC\uD574\uBCF4\uC138\uC694."
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_components_Elements__WEBPACK_IMPORTED_MODULE_2__.FloatingBox.Body, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(InputItem, {
            sx: {
              marginBottom: '20px'
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__.default, {
              fullWidth: true,
              required: true,
              ref: ref.email,
              label: "\uC774\uBA54\uC77C\uC8FC\uC18C",
              helperText: "\uC774\uBA54\uC77C \uC8FC\uC18C\uB294 \uACC4\uC815 \uC544\uC774\uB514\uB85C \uC0AC\uC6A9\uB429\uB2C8\uB2E4.",
              variant: "outlined",
              color: "primary"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(InputItem, {
            sx: {
              marginBottom: '20px'
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__.default, {
              fullWidth: true,
              required: true,
              ref: ref.password,
              type: "password",
              label: "\uD328\uC2A4\uC6CC\uB4DC",
              helperText: "\uC0AC\uC6A9\uD560 \uD328\uC2A4\uC6CC\uB4DC\uB97C \uC815\uD655\uD558\uAC8C \uC785\uB825\uD558\uC138\uC694.",
              variant: "outlined",
              color: "primary"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(InputItem, {
            sx: {
              marginBottom: '20px'
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__.default, {
              fullWidth: true,
              required: true,
              ref: ref.password_confirmation,
              type: "password",
              label: "\uD328\uC2A4\uC6CC\uB4DC \uD655\uC778",
              helperText: "\uC704\uC5D0\uC11C \uC785\uB825\uD55C \uD328\uC2A4\uC6CC\uB4DC\uB97C \uD55C \uBC88 \uB354 \uC785\uB825\uD574\uC8FC\uC138\uC694.",
              variant: "outlined",
              color: "primary"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_12__.default, {
            container: true,
            spacing: 2,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_12__.default, {
              item: true,
              xs: 6,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(InputItem, {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__.default, {
                  fullWidth: true,
                  required: true,
                  ref: ref.lastname,
                  label: "\uC131",
                  variant: "outlined",
                  color: "primary"
                })
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_12__.default, {
              item: true,
              xs: 6,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(InputItem, {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__.default, {
                  fullWidth: true,
                  required: true,
                  ref: ref.firstname,
                  label: "\uC774\uB984",
                  variant: "outlined",
                  color: "primary"
                })
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(InputItem, {
            className: "button-box",
            sx: {
              marginTop: '40px',
              marginBottom: '10px'
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13__.default, {
              fullWidth: true,
              disableElevation: true,
              variant: "contained",
              color: "primary",
              size: "large",
              onClick: process,
              children: "\uD68C\uC6D0\uAC00\uC785"
            })
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_14__.default, {
        onClick: function onClick() {
          history.goBack();
        },
        sx: {
          margin: '30px',
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          WebkitTapHighlightColor: 'transparent',
          userSelect: 'none'
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_15__.default, {
          sx: {
            marginRight: '10px'
          }
        }), "\uB3CC\uC544\uAC00\uAE30"]
      })]
    })
  });
}

/***/ }),

/***/ "./resources/js/standalones/index.js":
/*!*******************************************!*\
  !*** ./resources/js/standalones/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignIn": () => (/* reexport safe */ _SignIn__WEBPACK_IMPORTED_MODULE_0__.default),
/* harmony export */   "SignUp": () => (/* reexport safe */ _SignUp__WEBPACK_IMPORTED_MODULE_1__.default),
/* harmony export */   "SignOut": () => (/* reexport safe */ _SignOut__WEBPACK_IMPORTED_MODULE_2__.default)
/* harmony export */ });
/* harmony import */ var _SignIn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SignIn */ "./resources/js/standalones/SignIn.jsx");
/* harmony import */ var _SignUp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SignUp */ "./resources/js/standalones/SignUp.jsx");
/* harmony import */ var _SignOut__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SignOut */ "./resources/js/standalones/SignOut.jsx");





/***/ }),

/***/ "./resources/js/system/App.jsx":
/*!*************************************!*\
  !*** ./resources/js/system/App.jsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/styles/styled.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/node_modules/@material-ui/system/esm/ThemeProvider/ThemeProvider.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/createTheme.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./resources/js/system/Header.jsx");
/* harmony import */ var _MobileDrawer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MobileDrawer */ "./resources/js/system/MobileDrawer.jsx");
/* harmony import */ var _MobileNavigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MobileNavigation */ "./resources/js/system/MobileNavigation.jsx");
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages */ "./resources/js/pages/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ "./resources/js/config/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












var Container = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.default)('div')(function (_ref) {
  var _ref2;

  var theme = _ref.theme;
  return _ref2 = {}, _defineProperty(_ref2, theme.breakpoints.up('xs'), {
    marginTop: (0,_config__WEBPACK_IMPORTED_MODULE_5__.default)('templete.height.headerFixed.mobile')
  }), _defineProperty(_ref2, theme.breakpoints.up('md'), {
    marginTop: (0,_config__WEBPACK_IMPORTED_MODULE_5__.default)('templete.height.headerFixed.desktop')
  }), _ref2;
});
function App() {
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    (function () {
      var w = window;

      if (w.ChannelIO) {
        return (window.console.error || window.console.log || function () {})('ChannelIO script included twice.');
      }

      var ch = function ch() {
        ch.c(arguments);
      };

      ch.q = [];

      ch.c = function (args) {
        ch.q.push(args);
      };

      w.ChannelIO = ch;

      function l() {
        if (w.ChannelIOInitialized) {
          return;
        }

        w.ChannelIOInitialized = true;
        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.src = 'https://cdn.channel.io/plugin/ch-plugin-web.js';
        s.charset = 'UTF-8';
        var x = document.getElementsByTagName('script')[0];
        x.parentNode.insertBefore(s, x);
      }

      if (document.readyState === 'complete') {
        l();
      } else if (window.attachEvent) {
        window.attachEvent('onload', l);
      } else {
        window.addEventListener('DOMContentLoaded', l, false);
        window.addEventListener('load', l, false);
      }
    })();

    ChannelIO('boot', {
      pluginKey: 'a2370838-95e6-43dd-9508-0cb10daa84ba'
    });
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__.default, {
    theme: (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__.default)({
      palette: (0,_config__WEBPACK_IMPORTED_MODULE_5__.default)('templete.palette'),
      breakpoints: (0,_config__WEBPACK_IMPORTED_MODULE_5__.default)('templete.breakpoints')
    }),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_MobileDrawer__WEBPACK_IMPORTED_MODULE_2__.default, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Header__WEBPACK_IMPORTED_MODULE_1__.default, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(Container, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Switch, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
          exact: true,
          path: "/",
          component: _pages__WEBPACK_IMPORTED_MODULE_4__.Home
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
          path: "/user",
          component: _pages__WEBPACK_IMPORTED_MODULE_4__.User
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
          path: "/assets",
          component: _pages__WEBPACK_IMPORTED_MODULE_4__.Asset
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
          path: "/investment",
          component: _pages__WEBPACK_IMPORTED_MODULE_4__.Investment
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
          path: "/advisors",
          component: _pages__WEBPACK_IMPORTED_MODULE_4__.Advisor
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
          path: "/developer",
          component: _pages__WEBPACK_IMPORTED_MODULE_4__.Developer
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_MobileNavigation__WEBPACK_IMPORTED_MODULE_3__.default, {})]
  });
}

/***/ }),

/***/ "./resources/js/system/Container.jsx":
/*!*******************************************!*\
  !*** ./resources/js/system/Container.jsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Container)
/* harmony export */ });
/* harmony import */ var _container_BasicContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./container/BasicContainer */ "./resources/js/system/container/BasicContainer.jsx");
/* harmony import */ var _container_SimpleContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./container/SimpleContainer */ "./resources/js/system/container/SimpleContainer.jsx");
/* harmony import */ var _container_SingleContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./container/SingleContainer */ "./resources/js/system/container/SingleContainer.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




function Container(_ref) {
  var pages = _ref.pages,
      secondary = _ref.secondary,
      submenus = _ref.submenus;

  if (!submenus && !secondary) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_container_SingleContainer__WEBPACK_IMPORTED_MODULE_2__.default, {
      pages: pages
    });
  } else if (!submenus && secondary) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_container_SimpleContainer__WEBPACK_IMPORTED_MODULE_1__.default, {
      pages: pages,
      secondary: secondary
    });
  } else {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_container_BasicContainer__WEBPACK_IMPORTED_MODULE_0__.default, {
      pages: pages,
      secondary: secondary,
      submenus: submenus
    });
  }
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









var Container = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.default)('div')(function (_ref) {
  var _invisible;

  var theme = _ref.theme;
  return {
    position: 'fixed',
    width: '100%',
    top: 0,
    zIndex: (0,_config__WEBPACK_IMPORTED_MODULE_3__.default)('templete.zIndex.header'),
    transition: 'transform 500ms cubic-bezier(0, 0, 0.2, 1) 0ms',
    '&.invisible': (_invisible = {}, _defineProperty(_invisible, theme.breakpoints.up('xs'), {
      transform: 'translateY(-' + (0,_config__WEBPACK_IMPORTED_MODULE_3__.default)('templete.height.headerFixed.mobile') + ')'
    }), _defineProperty(_invisible, theme.breakpoints.up('md'), {
      transform: 'translateY(-' + (0,_config__WEBPACK_IMPORTED_MODULE_3__.default)('templete.height.headerFixed.desktop') + ')'
    }), _invisible),
    '&.shadow': {
      boxShadow: (0,_config__WEBPACK_IMPORTED_MODULE_3__.default)('templete.boxShadow.2')
    }
  };
});
function Header() {
  var refHeader = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var scrollTrigger = (0,_material_ui_core_useScrollTrigger__WEBPACK_IMPORTED_MODULE_6__.default)();
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
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_header_HeaderFixed__WEBPACK_IMPORTED_MODULE_1__.default, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_header_HeaderNavigation__WEBPACK_IMPORTED_MODULE_2__.default, {})]
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
/* harmony import */ var _material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/Person */ "./node_modules/@material-ui/icons/Person.js");
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


















var UserInfoContainer = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.default)('div')({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  alignItems: 'center',
  padding: '10px',
  marginBottom: '20px'
});
var AvatarContainer = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.default)('div')({
  marginRight: '20px',
  '& .MuiAvatar-root': {
    width: '56px',
    height: '56px'
  },
  '& svg': {
    width: '32px',
    height: '32px'
  }
});
var UserNameContainer = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.default)('div')({
  flexGrow: 1,
  fontSize: '1.2em',
  textAlign: 'center',
  '& a': {
    color: '#dddddd'
  }
});
var SubMenuContainer = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.default)('div')({
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
    return _menuLinks__WEBPACK_IMPORTED_MODULE_3__.default.map(function (link) {
      if (!(link.slug in mobileDrawerSubMenuOpen)) {
        setMobileDrawerSubMenuOpen(_objectSpread(_objectSpread({}, mobileDrawerSubMenuOpen), {}, _defineProperty({}, link.slug, false)));
      }

      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_7__.default, {
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
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_material_ui_core_ListItemButton__WEBPACK_IMPORTED_MODULE_8__.default, {
          disableGutters: true,
          disableTouchRipple: true,
          children: ['children' in link && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_icons_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_9__.default, {
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
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11__.default, {
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
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core_ListItemButton__WEBPACK_IMPORTED_MODULE_8__.default, {
              disableGutters: true,
              disableTouchRipple: true,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Link, {
                to: sublink.to,
                onClick: toggleMobileDrawer,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11__.default, {
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

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_12__.default, {
    id: "mobile-drawer",
    anchor: "left",
    open: open,
    onClose: toggleMobileDrawer,
    transitionDuration: 300,
    sx: {
      '& .MuiPaper-root': {
        width: (0,_config__WEBPACK_IMPORTED_MODULE_4__.default)('templete.width.drawer.mobile'),
        boxSizing: 'border-box',
        padding: '10px',
        backgroundColor: '#000000',
        color: '#ffffff',
        fontSize: '0.8rem'
      }
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(UserInfoContainer, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(AvatarContainer, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_13__.default, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_14__.default, {})
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(UserNameContainer, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Link, {
          to: "/user/signin",
          children: "\uB85C\uADF8\uC778\uC744 \uD574\uC8FC\uC138\uC694."
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_15__.default, {
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
/* harmony import */ var _material_ui_icons_AccountBoxRounded__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/AccountBoxRounded */ "./node_modules/@material-ui/icons/AccountBoxRounded.js");
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















var Container = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.default)('div')(function (_ref) {
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
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_material_ui_core_BottomNavigation__WEBPACK_IMPORTED_MODULE_5__.default, {
      value: currentTab,
      sx: {
        height: (0,_config__WEBPACK_IMPORTED_MODULE_2__.default)('templete.height.bottomNavigation.mobile'),
        display: 'flex',
        justifyContent: 'space-evenly',
        backgroundColor: '#ffffff',
        width: '100%',
        position: 'fixed',
        bottom: '0px',
        right: '0px',
        left: 'auto',
        zIndex: (0,_config__WEBPACK_IMPORTED_MODULE_2__.default)('templete.zIndex.bottomNavigation'),
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
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core_BottomNavigationAction__WEBPACK_IMPORTED_MODULE_6__.default, {
        icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_icons_HomeRounded__WEBPACK_IMPORTED_MODULE_7__.default, {}),
        value: (0,_config__WEBPACK_IMPORTED_MODULE_2__.default)('app.route.home'),
        component: react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Link,
        to: "/"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core_BottomNavigationAction__WEBPACK_IMPORTED_MODULE_6__.default, {
        icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_icons_PieChartRounded__WEBPACK_IMPORTED_MODULE_9__.default, {}),
        value: (0,_config__WEBPACK_IMPORTED_MODULE_2__.default)('app.route.asset'),
        component: react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Link,
        to: "/assets"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core_BottomNavigationAction__WEBPACK_IMPORTED_MODULE_6__.default, {
        icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_icons_SupervisedUserCircleRounded__WEBPACK_IMPORTED_MODULE_10__.default, {}),
        value: (0,_config__WEBPACK_IMPORTED_MODULE_2__.default)('app.route.advisor'),
        component: react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Link,
        to: "/advisors"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core_BottomNavigationAction__WEBPACK_IMPORTED_MODULE_6__.default, {
        icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_icons_TrendingUpRounded__WEBPACK_IMPORTED_MODULE_11__.default, {}),
        value: (0,_config__WEBPACK_IMPORTED_MODULE_2__.default)('app.route.investment'),
        component: react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Link,
        to: "/investment"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core_BottomNavigationAction__WEBPACK_IMPORTED_MODULE_6__.default, {
        icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_icons_AccountBoxRounded__WEBPACK_IMPORTED_MODULE_12__.default, {}),
        value: (0,_config__WEBPACK_IMPORTED_MODULE_2__.default)('app.route.user'),
        component: react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Link,
        to: "/user"
      })]
    })
  });
}

/***/ }),

/***/ "./resources/js/system/container/BasicContainer.jsx":
/*!**********************************************************!*\
  !*** ./resources/js/system/container/BasicContainer.jsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BasicContainer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/Container/Container.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/Grid/Grid.js");
/* harmony import */ var _DesktopDrawer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DesktopDrawer */ "./resources/js/system/container/DesktopDrawer.jsx");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config */ "./resources/js/config/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










function BasicContainer(_ref) {
  var pages = _ref.pages,
      secondary = _ref.secondary,
      submenus = _ref.submenus;
  var currentTab = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.app.tab;
  });

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(null),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      desktopDrawer = _React$useState2[0],
      setDesktopDrawer = _React$useState2[1];

  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    setDesktopDrawer( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_DesktopDrawer__WEBPACK_IMPORTED_MODULE_2__.default, {
      submenus: submenus
    }));
  }, [currentTab]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_5__.default, {
      maxWidth: false,
      sx: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'space-between',
        padding: '0px',
        minHeight: '3000px',
        // 테스트용
        height: {
          xs: 'calc(100% - ' + (0,_config__WEBPACK_IMPORTED_MODULE_3__.default)('templete.height.bottomNavigation.mobile') + ' + ' + (0,_config__WEBPACK_IMPORTED_MODULE_3__.default)('templete.margin.default.mobile') + ')',
          md: 'auto'
        },
        marginBottom: {
          xs: 'calc(' + (0,_config__WEBPACK_IMPORTED_MODULE_3__.default)('templete.height.bottomNavigation.mobile') + ' + 20px)',
          md: '20px'
        },
        paddingTop: {
          xs: 'calc(' + (0,_config__WEBPACK_IMPORTED_MODULE_3__.default)('templete.height.headerNavigation.mobile') + ' + ' + (0,_config__WEBPACK_IMPORTED_MODULE_3__.default)('templete.margin.default.mobile') + ')',
          md: 'calc(' + (0,_config__WEBPACK_IMPORTED_MODULE_3__.default)('templete.height.headerNavigation.desktop') + ' + ' + (0,_config__WEBPACK_IMPORTED_MODULE_3__.default)('templete.margin.default.desktop') + ')'
        },
        paddingLeft: {
          xs: '0px',
          sm: (0,_config__WEBPACK_IMPORTED_MODULE_3__.default)('templete.margin.default.mobile'),
          md: (0,_config__WEBPACK_IMPORTED_MODULE_3__.default)('templete.margin.default.desktop')
        },
        paddingRight: {
          xs: '0px',
          sm: (0,_config__WEBPACK_IMPORTED_MODULE_3__.default)('templete.margin.default.mobile'),
          md: (0,_config__WEBPACK_IMPORTED_MODULE_3__.default)('templete.margin.default.desktop')
        }
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__.default, {
        container: true,
        direction: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        sx: {
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'nowrap',
          justifyContent: {
            xs: 'center',
            sm: 'space-between'
          },
          '& .MuiGrid-item': {
            flexGrow: 0,
            flexShrink: 0,
            boxSizing: 'border-box',
            minHeight: {
              xs: 'calc(100vh - ' + (0,_config__WEBPACK_IMPORTED_MODULE_3__.default)('templete.height.headerFixed.mobile') + ')',
              md: 'calc(100vh - ' + (0,_config__WEBPACK_IMPORTED_MODULE_3__.default)('templete.height.headerFixed.desktop') + ')'
            },
            '&.primary': {
              width: {
                xs: '100%',
                sm: (0,_config__WEBPACK_IMPORTED_MODULE_3__.default)('templete.width.primary.desktop')
              },
              maxWidth: {
                xs: (0,_config__WEBPACK_IMPORTED_MODULE_3__.default)('templete.width.primary.mobile'),
                sm: 'none'
              },
              margin: {
                xs: '0px',
                sm: 'initial'
              },
              flexShrink: {
                sm: 1
              }
            },
            '&.secondary': {
              display: {
                xs: 'none',
                sm: 'block'
              },
              flexShrink: {
                sm: 1
              },
              marginLeft: {
                sm: (0,_config__WEBPACK_IMPORTED_MODULE_3__.default)('templete.margin.default.mobile'),
                md: (0,_config__WEBPACK_IMPORTED_MODULE_3__.default)('templete.margin.default.desktop')
              },
              width: {
                sm: (0,_config__WEBPACK_IMPORTED_MODULE_3__.default)('templete.width.secondary.desktop')
              }
            },
            '&.trickery': {
              display: {
                xs: 'none',
                md: 'block'
              },
              width: '100%',
              maxWidth: {
                md: 'calc(' + (0,_config__WEBPACK_IMPORTED_MODULE_3__.default)('templete.width.drawer.desktop') + ' - ((' + (0,_config__WEBPACK_IMPORTED_MODULE_3__.default)('templete.breakpoints.values.xl') + 'px - ' + (0,_config__WEBPACK_IMPORTED_MODULE_3__.default)('templete.breakpoints.values.lg') + 'px)) / 2)',
                lg: 'calc(' + (0,_config__WEBPACK_IMPORTED_MODULE_3__.default)('templete.width.drawer.desktop') + ' - ((' + (0,_config__WEBPACK_IMPORTED_MODULE_3__.default)('templete.breakpoints.values.xl') + 'px - 100vw)) / 2)',
                xl: (0,_config__WEBPACK_IMPORTED_MODULE_3__.default)('templete.width.drawer.desktop')
              }
            }
          }
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__.default, {
          item: true,
          className: "trickery"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__.default, {
          item: true,
          className: "primary",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Switch, {
            children: _typeof(pages) === 'object' && pages.map(function (_ref2) {
              var path = _ref2.path,
                  component = _ref2.component,
                  exact = _ref2.exact;
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
                path: path,
                component: component,
                exact: exact === true ? true : false
              }, "react-router-dom-pages-".concat(path));
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__.default, {
          item: true,
          className: "secondary",
          children: secondary
        })]
      })
    }), desktopDrawer]
  });
}

/***/ }),

/***/ "./resources/js/system/container/DesktopDrawer.jsx":
/*!*********************************************************!*\
  !*** ./resources/js/system/container/DesktopDrawer.jsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DesktopDrawer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_useScrollTrigger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/useScrollTrigger */ "./node_modules/@material-ui/core/useScrollTrigger/useScrollTrigger.js");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Drawer */ "./node_modules/@material-ui/core/Drawer/Drawer.js");
/* harmony import */ var _XMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./XMenu */ "./resources/js/system/container/XMenu.jsx");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config */ "./resources/js/config/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }







function DesktopDrawer(props) {
  var scrollTrigger = (0,_material_ui_core_useScrollTrigger__WEBPACK_IMPORTED_MODULE_4__.default)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_5__.default, {
    variant: "permanent",
    anchor: "left",
    className: scrollTrigger ? 'up' : '',
    sx: {
      display: {
        xs: 'none',
        md: 'inline-flex'
      },
      width: {
        md: 'calc(' + (0,_config__WEBPACK_IMPORTED_MODULE_2__.default)('templete.width.drawer.desktop') + ' - ((' + (0,_config__WEBPACK_IMPORTED_MODULE_2__.default)('templete.breakpoints.values.xl') + 'px - ' + (0,_config__WEBPACK_IMPORTED_MODULE_2__.default)('templete.breakpoints.values.lg') + 'px)) / 2)',
        lg: 'calc(' + (0,_config__WEBPACK_IMPORTED_MODULE_2__.default)('templete.width.drawer.desktop') + ' - ((' + (0,_config__WEBPACK_IMPORTED_MODULE_2__.default)('templete.breakpoints.values.xl') + 'px - 100vw) / 2))',
        xl: (0,_config__WEBPACK_IMPORTED_MODULE_2__.default)('templete.width.drawer.desktop')
      },
      '&.up': {
        '& .MuiPaper-root': {
          transform: {
            xs: 'translateY(-' + (0,_config__WEBPACK_IMPORTED_MODULE_2__.default)('templete.height.headerFixed.mobile') + ')',
            md: 'translateY(-' + (0,_config__WEBPACK_IMPORTED_MODULE_2__.default)('templete.height.headerFixed.desktop') + ')'
          }
        }
      },
      '& .MuiPaper-root': {
        display: 'flex',
        backgroundColor: (0,_config__WEBPACK_IMPORTED_MODULE_2__.default)('templete.palette.bgColor.main'),
        border: '0px',
        zIndex: (0,_config__WEBPACK_IMPORTED_MODULE_2__.default)('templete.zIndex.drawer'),
        boxSizing: 'border-box',
        transition: 'transform 500ms cubic-bezier(0, 0, 0.2, 1) 0ms, height 500ms cubic-bezier(0, 0, 0.2, 1) 0ms',
        width: {
          md: 'calc(' + (0,_config__WEBPACK_IMPORTED_MODULE_2__.default)('templete.width.drawer.desktop') + ' - ((' + (0,_config__WEBPACK_IMPORTED_MODULE_2__.default)('templete.breakpoints.values.xl') + 'px - ' + (0,_config__WEBPACK_IMPORTED_MODULE_2__.default)('templete.breakpoints.values.lg') + 'px)) / 2)',
          lg: 'calc(' + (0,_config__WEBPACK_IMPORTED_MODULE_2__.default)('templete.width.drawer.desktop') + ' - ((' + (0,_config__WEBPACK_IMPORTED_MODULE_2__.default)('templete.breakpoints.values.xl') + 'px - 100vw) / 2))',
          xl: (0,_config__WEBPACK_IMPORTED_MODULE_2__.default)('templete.width.drawer.desktop')
        },
        height: {
          md: 'calc(100vh - ' + (0,_config__WEBPACK_IMPORTED_MODULE_2__.default)('templete.height.headerFixed.desktop') + ' - ' + (0,_config__WEBPACK_IMPORTED_MODULE_2__.default)('templete.height.headerNavigation.desktop') + ')'
        },
        marginTop: {
          md: 'calc(' + (0,_config__WEBPACK_IMPORTED_MODULE_2__.default)('templete.height.headerFixed.desktop') + ' + ' + (0,_config__WEBPACK_IMPORTED_MODULE_2__.default)('templete.height.headerNavigation.desktop') + ')'
        },
        marginLeft: {
          md: (0,_config__WEBPACK_IMPORTED_MODULE_2__.default)('templete.margin.default.desktop')
        },
        paddingRight: {
          md: (0,_config__WEBPACK_IMPORTED_MODULE_2__.default)('templete.margin.default.desktop')
        }
      }
    },
    children: 'submenus' in props && _typeof(props.submenus) === 'object' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_XMenu__WEBPACK_IMPORTED_MODULE_1__.default, {
      items: props.submenus
    })
  });
}

/***/ }),

/***/ "./resources/js/system/container/SimpleContainer.jsx":
/*!***********************************************************!*\
  !*** ./resources/js/system/container/SimpleContainer.jsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SimpleContainer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/Container/Container.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/Grid/Grid.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





function SimpleContainer(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2__.default, {
      className: "app-container aether simple-container",
      maxWidth: false,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__.default, {
        container: true,
        className: "grid-container",
        direction: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__.default, {
          className: "grid-item-trickery",
          item: true
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__.default, {
          className: "grid-item-1",
          item: true,
          children: props.children
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__.default, {
          className: "grid-item-2",
          item: true,
          children: props.right
        })]
      })
    })
  });
}

/***/ }),

/***/ "./resources/js/system/container/SingleContainer.jsx":
/*!***********************************************************!*\
  !*** ./resources/js/system/container/SingleContainer.jsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SingleContainer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/Container/Container.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/Grid/Grid.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




function SingleContainer(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2__.default, {
      className: "app-container aether simple-container",
      maxWidth: false,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__.default, {
        container: true,
        className: "grid-container",
        direction: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__.default, {
          className: "grid-item-1",
          item: true,
          children: props.children
        })
      })
    })
  });
}

/***/ }),

/***/ "./resources/js/system/container/XMenu.jsx":
/*!*************************************************!*\
  !*** ./resources/js/system/container/XMenu.jsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ XMenu)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/styles/styled.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/List/List.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/ListItem/ListItem.js");
/* harmony import */ var _material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/ListItemAvatar */ "./node_modules/@material-ui/core/ListItemAvatar/ListItemAvatar.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/ListItemText/ListItemText.js");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/Avatar/Avatar.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config */ "./resources/js/config/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













var Container = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.default)('div')(function (_ref) {
  var theme = _ref.theme;
  return _defineProperty({}, theme.breakpoints.up('md'), {
    paddingTop: (0,_config__WEBPACK_IMPORTED_MODULE_2__.default)('templete.margin.default.desktop'),
    paddingRight: 0,
    paddingBottom: '10px'
  });
});
var MenuContainer = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.default)('div')({
  '&.selected': {
    '& .MuiListItem-root': {
      backgroundColor: '#eeeeee'
    }
  },
  '&:hover': {
    '& .MuiListItem-root': {
      backgroundColor: '#e9e9e9'
    }
  },
  '&:active': {
    '& .MuiListItem-root': {
      backgroundColor: '#e0e0e0'
    }
  }
});
function XMenu(_ref3) {
  var items = _ref3.items;
  var currentURI = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.app.uri;
  });
  var refContainer = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {// 경로가 변경될 때마다 리렌더링
  }, [currentURI]);

  var MenuItems = function MenuItems() {
    return items.map(function (item, index) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(MenuContainer, {
        "data-path": item.path,
        className: window.location.pathname === item.path ? 'selected' : null,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {
          to: item.path,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_6__.default, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_7__.default, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_8__.default, {
                children: item.icon
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_9__.default, {
              primary: item.text
            })]
          })
        })
      }, "XMenu-submenus-".concat(item.path, "-").concat(index));
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_10__.default, {
    component: "ul",
    sx: {
      overflowX: 'hidden',
      overflowY: 'auto',
      padding: '0px',
      msOverflowStyle: 'none',
      scrollbarWidth: 'none',
      '&::-webkit-scrollbar': {
        display: 'none'
      },
      '& .MuiListItem-root': {
        borderRadius: '5px',
        '& .MuiAvatar-root': {
          backgroundColor: '#ffffff',
          color: '#aaaaaa',
          border: '1px solid #cccccc'
        }
      }
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Container, {
      ref: refContainer,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(MenuItems, {})
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













var HeaderAppNameContainer = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.default)('div')(function (_ref) {
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
var MobileMenuIconContainer = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.default)('div')(function (_ref3) {
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
var HeaderIconContainer = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.default)('div')({
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

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_7__.default, {
    position: "static",
    sx: {
      transition: 'none',
      background: (0,_config__WEBPACK_IMPORTED_MODULE_4__.default)('templete.gradient.primary'),
      boxShadow: 'none',
      zIndex: (0,_config__WEBPACK_IMPORTED_MODULE_4__.default)('templete.zIndex.header'),
      height: {
        xs: (0,_config__WEBPACK_IMPORTED_MODULE_4__.default)('templete.height.headerFixed.mobile'),
        md: (0,_config__WEBPACK_IMPORTED_MODULE_4__.default)('templete.height.headerFixed.desktop')
      }
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_8__.default, {
      disableGutters: true,
      sx: {
        display: 'flex',
        justifyContent: 'space-between',
        minHeight: {
          xs: (0,_config__WEBPACK_IMPORTED_MODULE_4__.default)('templete.height.headerFixed.mobile'),
          md: (0,_config__WEBPACK_IMPORTED_MODULE_4__.default)('templete.height.headerFixed.desktop')
        },
        height: {
          xs: (0,_config__WEBPACK_IMPORTED_MODULE_4__.default)('templete.height.headerFixed.mobile'),
          md: (0,_config__WEBPACK_IMPORTED_MODULE_4__.default)('templete.height.headerFixed.desktop')
        },
        paddingLeft: {
          xs: (0,_config__WEBPACK_IMPORTED_MODULE_4__.default)('templete.margin.default.mobile'),
          md: (0,_config__WEBPACK_IMPORTED_MODULE_4__.default)('templete.margin.default.desktop')
        },
        paddingRight: {
          xs: (0,_config__WEBPACK_IMPORTED_MODULE_4__.default)('templete.margin.default.mobile'),
          md: (0,_config__WEBPACK_IMPORTED_MODULE_4__.default)('templete.margin.default.desktop')
        }
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(HeaderAppNameContainer, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(MobileMenuIconContainer, {
          onClick: toggleMobileDrawer,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_9__.default, {})
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_10__.default, {
          href: "/",
          children: "Aether"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(HeaderIconContainer, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_XHeaderIcons__WEBPACK_IMPORTED_MODULE_2__.default, {})
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/styles/styled.js");
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/useMediaQuery */ "./node_modules/@material-ui/core/useMediaQuery/useMediaQuery.js");
/* harmony import */ var _material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Popper */ "./node_modules/@material-ui/core/Popper/Popper.js");
/* harmony import */ var _material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Grow */ "./node_modules/@material-ui/core/Grow/Grow.js");
/* harmony import */ var _menuLinks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../menuLinks */ "./resources/js/system/menuLinks.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config */ "./resources/js/config/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
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












var Container = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.default)('div')(function (_ref) {
  var _ref2;

  var theme = _ref.theme;
  return _ref2 = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    boxSizing: 'border-box',
    background: (0,_config__WEBPACK_IMPORTED_MODULE_3__.default)('templete.gradient.primary'),
    zIndex: (0,_config__WEBPACK_IMPORTED_MODULE_3__.default)('templete.zIndex.headerNavigation')
  }, _defineProperty(_ref2, theme.breakpoints.up('xs'), {
    paddingLeft: (0,_config__WEBPACK_IMPORTED_MODULE_3__.default)('templete.margin.default.mobile'),
    paddingRight: (0,_config__WEBPACK_IMPORTED_MODULE_3__.default)('templete.margin.default.mobile'),
    height: (0,_config__WEBPACK_IMPORTED_MODULE_3__.default)('templete.height.headerNavigation.mobile')
  }), _defineProperty(_ref2, theme.breakpoints.up('md'), {
    paddingLeft: (0,_config__WEBPACK_IMPORTED_MODULE_3__.default)('templete.margin.default.desktop'),
    paddingRight: (0,_config__WEBPACK_IMPORTED_MODULE_3__.default)('templete.margin.default.desktop'),
    height: (0,_config__WEBPACK_IMPORTED_MODULE_3__.default)('templete.height.headerNavigation.desktop')
  }), _ref2;
});
var SubContainer = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.default)('div')({
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
var HeaderNavListContainer = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.default)('ul')({
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
var HeaderNavItemContainer = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.default)('div')({
  display: 'flex',
  alignItems: 'center'
});
var HeaderNavItem = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.default)('li')(function (_ref3) {
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
var HeaderNavItemText = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.default)('div')(function (_ref4) {
  var _a;

  var theme = _ref4.theme;
  return {
    '& a': (_a = {
      display: 'block',
      color: '#ffffff',
      opacity: '0.6',
      textDecoration: 'none',
      transition: 'opacity 0.2s linear',
      fontFamily: (0,_config__WEBPACK_IMPORTED_MODULE_3__.default)('templete.fontFamily.1'),
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
var SubNavigationContainer = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.default)('div')({
  position: 'absolute'
});
var SubNavigationSubContainer = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.default)('div')({
  marginTop: '7px',
  backgroundColor: '#ffffff',
  width: '250px',
  overflowX: 'hidden',
  boxShadow: '0 1px 5px 0px rgba(0, 0, 0, 0.2)',
  borderRadius: '2px'
});
var SubNavigationListContainer = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.default)('ol')({
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'nowrap',
  listStyle: 'none',
  margin: '0px',
  padding: '10px 0px'
});
var SubNavigationItem = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.default)('li')({
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
      backgroundColor: (0,_config__WEBPACK_IMPORTED_MODULE_3__.default)('templete.palette.primary.main'),
      color: '#ffffff'
    }
  }
});
function HeaderNavigation() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState({}),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      subLinkBoxAnchor = _React$useState2[0],
      setSubLinkBoxAnchor = _React$useState2[1];

  var isDesktop = (0,_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_6__.default)(function (theme) {
    return theme.breakpoints.up('md');
  });
  var currentURI = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.app.uri;
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
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(SubNavigationItem, {
          component: "li",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Link, {
            to: link.to,
            onClick: initHeaderNavigationLinks,
            children: link.name
          })
        }, "headerNavigationLink-".concat(slug, "-sub-").concat(index));
      });
    }
  };

  var fetchHeaderNavigationLinks = function fetchHeaderNavigationLinks() {
    return _menuLinks__WEBPACK_IMPORTED_MODULE_2__.default.map(function (link, index) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(HeaderNavItem, {
        "data-path": link.to,
        onMouseOver: 'children' in link && isDesktop ? function (event) {
          var currentTarget = event.currentTarget;
          setSubLinkBoxAnchor(_objectSpread(_objectSpread({}, subLinkBoxAnchor), {}, _defineProperty({}, link.slug, currentTarget)));
        } : null,
        onMouseOut: 'children' in link && isDesktop ? function () {
          setSubLinkBoxAnchor(_objectSpread(_objectSpread({}, subLinkBoxAnchor), {}, _defineProperty({}, link.slug, false)));
        } : null,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(HeaderNavItemText, {
          className: "item",
          "data-key": index,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Link, {
            id: "header-navigation-link-".concat(link.slug),
            to: link.to,
            onClick: initHeaderNavigationLinks,
            "data-slug": link.slug,
            "data-key": index,
            children: link.name
          }), 'children' in link ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_8__.default, {
            anchorEl: subLinkBoxAnchor[link.slug],
            open: Boolean(subLinkBoxAnchor[link.slug]),
            role: undefined,
            placement: "bottom-start",
            transition: true,
            disablePortal: true,
            children: function children(_ref5) {
              var TransitionProps = _ref5.TransitionProps;
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_9__.default, _objectSpread(_objectSpread({
                timeout: 0
              }, TransitionProps), {}, {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(SubNavigationContainer, {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(SubNavigationSubContainer, {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(SubNavigationListContainer, {
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
    var currentPathArray = currentURI.split('/');
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
  }, [currentURI]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Container, {
    ref: ref.container,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(SubContainer, {
      ref: ref.subContainer,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(HeaderNavListContainer, {
        ref: ref.listBox,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(HeaderNavItemContainer, {
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









var Container = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.default)('div')(function (_ref) {
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
var IconContainer = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.default)('div')(function (_ref3) {
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
          if (item.auth === true && (0,_config__WEBPACK_IMPORTED_MODULE_2__.default)('app.auth').length > 0 || item.auth === false && (0,_config__WEBPACK_IMPORTED_MODULE_2__.default)('app.auth').length === 0) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(IconContainer, {
              children: 'standalone' in item && item.standalone === true ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_5__.default, {
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
          if (item.auth === true && (0,_config__WEBPACK_IMPORTED_MODULE_2__.default)('app.auth').length > 0 || item.auth === false && (0,_config__WEBPACK_IMPORTED_MODULE_2__.default)('app.auth').length === 0) {
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
  slug: 'investment',
  to: '/investment',
  children: [{
    name: '포트폴리오 관리',
    slug: 'portfolio',
    to: '/investment/portfolio'
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
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_menuLinks);

/***/ }),

/***/ "./resources/sass/index.scss":
/*!***********************************!*\
  !*** ./resources/sass/index.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["css/app","/js/vendor"], () => (__webpack_exec__("./resources/js/index.jsx"), __webpack_exec__("./resources/sass/index.scss")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);