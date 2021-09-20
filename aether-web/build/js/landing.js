(self["webpackChunk"] = self["webpackChunk"] || []).push([["/js/landing"],{

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
    backend: 'https://back.flintspark.kr',
    // 백엔드 서버 URL
    api: 'https://back.flintspark.kr/api' // API 서버 URL

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

/***/ "./resources/js/landing.jsx":
/*!**********************************!*\
  !*** ./resources/js/landing.jsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _system_LandingPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./system/LandingPage */ "./resources/js/system/LandingPage.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_system_LandingPage__WEBPACK_IMPORTED_MODULE_2__["default"], {}), document.getElementById('app'));

/***/ }),

/***/ "./resources/js/system/LandingPage.jsx":
/*!*********************************************!*\
  !*** ./resources/js/system/LandingPage.jsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LandingPage)
/* harmony export */ });
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/system/esm/ThemeProvider/ThemeProvider.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/createTheme.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/styles/styled.js");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Link */ "./node_modules/@material-ui/core/Link/Link.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/Box/Box.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/Button.js");
/* harmony import */ var _landing_Layouts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landing/Layouts */ "./resources/js/system/landing/Layouts.jsx");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./resources/js/config/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");









var Divider = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["default"])('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  margin: '30px 0px',
  boxSizing: 'border-box',
  '&:before, &:after': {
    content: '""',
    width: '100%',
    borderTop: '1px solid #efefef'
  }
});
function LandingPage() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["default"], {
    theme: (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["default"])({
      palette: (0,_config__WEBPACK_IMPORTED_MODULE_1__["default"])('templete.palette'),
      breakpoints: (0,_config__WEBPACK_IMPORTED_MODULE_1__["default"])('templete.breakpoints')
    }),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_landing_Layouts__WEBPACK_IMPORTED_MODULE_0__.Container, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_landing_Layouts__WEBPACK_IMPORTED_MODULE_0__.Body, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_landing_Layouts__WEBPACK_IMPORTED_MODULE_0__.Primary, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6__["default"], {
            sx: {
              display: 'flex',
              justifyContent: 'flex-start',
              width: '100%',
              alignItems: 'baseline',
              marginBottom: '40px',
              lineHeight: {
                md: 1
              },
              flexDirection: {
                xs: 'column',
                md: 'row'
              }
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6__["default"], {
              sx: {
                margin: 0,
                padding: 0,
                fontSize: '2.4em',
                fontWeight: 'bold'
              },
              children: "Aether"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6__["default"], {
              sx: {
                fontSize: '1.3em',
                marginLeft: {
                  xs: '0px',
                  md: '20px'
                }
              },
              children: "\uAC1C\uC778\uD615 \uD22C\uC790\uC815\uBCF4 \uD50C\uB7AB\uD3FC"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6__["default"], {
            sx: {
              marginBottom: '10px',
              fontSize: '1.4em',
              fontWeight: 'bold',
              color: (0,_config__WEBPACK_IMPORTED_MODULE_1__["default"])('templete.palette.primary.main')
            },
            children: "\uB3C8\uC740 \uC138\uC0C1\uC758 \uADFC\uBCF8\uC774\uC790 \uCC98\uC74C\uACFC \uB05D"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6__["default"], {
            sx: {
              fontSize: '1.1em',
              fontWeight: 'bold',
              color: (0,_config__WEBPACK_IMPORTED_MODULE_1__["default"])('templete.palette.secondary.main')
            },
            children: "\uC131\uACF5\uC758 \uC5F4\uC1E0\uB97C \uCC3E\uAE30 \uC704\uD55C \uC5EC\uC815\uC744 \uC6B0\uB9AC\uAC00 \uD568\uAED8\uD569\uB2C8\uB2E4."
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_landing_Layouts__WEBPACK_IMPORTED_MODULE_0__.Secondary, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6__["default"], {
            sx: {
              fontSize: '1.2em',
              marginBottom: '20px'
            },
            children: "\uC9C0\uAE08 \uBC14\uB85C \uD68C\uC6D0\uC73C\uB85C \uC2DC\uC791\uD558\uC138\uC694."
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6__["default"], {
            sx: {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
              disableElevation: true,
              variant: "contained",
              color: "primary",
              sx: {
                width: '100%',
                height: '45px',
                fontSize: '1.1em'
              },
              onClick: function onClick() {
                window.location.href = '/user/signin';
              },
              children: "\uB85C\uADF8\uC778"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Divider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
              disableElevation: true,
              variant: "contained",
              color: "secondary",
              sx: {
                width: '100%',
                maxWidth: '250px',
                height: '60px',
                fontSize: '1.3em'
              },
              onClick: function onClick() {
                window.location.href = '/user/signup';
              },
              children: "\uC0C8 \uACC4\uC815 \uB9CC\uB4E4\uAE30"
            })]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_landing_Layouts__WEBPACK_IMPORTED_MODULE_0__.Footer, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_landing_Layouts__WEBPACK_IMPORTED_MODULE_0__.FooterContent, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6__["default"], {
            sx: {
              fontSize: '0.8em',
              color: '#555555',
              '& a': {
                display: 'inline-flex',
                margin: '0px 10px',
                color: (0,_config__WEBPACK_IMPORTED_MODULE_1__["default"])('templete.palette.primary.main'),
                textDecoration: 'none',
                webkitTapHighlightColor: 'transparent',
                userSelect: 'none',
                '&:first-of-type': {
                  margin: '0px 10px 0px 0px'
                },
                '&:last-of-type': {
                  margin: '0px 0px 0px 10px'
                }
              }
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_8__["default"], {
              href: "https://notion.flintspark.kr",
              target: "_blank",
              children: "\uD50C\uB9B0\uCE20\uD30C\uD06C \uADF8\uB8F9"
            }), "/", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_8__["default"], {
              href: "https://blog.naver.com/erzsamatory",
              target: "_blank",
              children: "\uCC3D\uC870\uC801 \uB178\uB9C8\uB4DC \uB7F0\uB358\uC2DC\uD2F0 \uBE14\uB85C\uADF8"
            }), "/", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_8__["default"], {
              href: "https://www.walterz.net",
              target: "_blank",
              children: "\uB7F0\uB358\uC2DC\uD2F0 \uC6CC\uB4DC\uD504\uB808\uC2A4"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Divider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6__["default"], {
            sx: {
              fontSize: '0.8em',
              color: '#555555'
            },
            children: "Erzsphilos.com \xA9 2021"
          })]
        })
      })]
    })
  });
}

/***/ }),

/***/ "./resources/js/system/landing/Layouts.jsx":
/*!*************************************************!*\
  !*** ./resources/js/system/landing/Layouts.jsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": () => (/* binding */ Container),
/* harmony export */   "Body": () => (/* binding */ Body),
/* harmony export */   "Primary": () => (/* binding */ Primary),
/* harmony export */   "Secondary": () => (/* binding */ Secondary),
/* harmony export */   "Footer": () => (/* binding */ Footer),
/* harmony export */   "FooterContent": () => (/* binding */ FooterContent)
/* harmony export */ });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/styles/styled.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config */ "./resources/js/config/index.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Container = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["default"])('div')(function (_ref) {
  var theme = _ref.theme;
  return {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    width: '100%',
    height: '100vh',
    overflowX: 'hidden',
    overflowY: 'scroll',
    boxSizing: 'border-box'
  };
});
var Body = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["default"])('div')(function (_ref2) {
  var _ref3;

  var theme = _ref2.theme;
  return _ref3 = {
    display: 'flex',
    width: '100%',
    boxSizing: 'border-box',
    minHeight: '640px'
  }, _defineProperty(_ref3, theme.breakpoints.up('xs'), {
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px'
  }), _defineProperty(_ref3, theme.breakpoints.up('md'), {
    maxWidth: '1000px',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: '150px 0px 50px 0px'
  }), _ref3;
});
var Primary = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["default"])('div')(function (_ref4) {
  var _ref5;

  var theme = _ref4.theme;
  return _ref5 = {
    width: '100%',
    height: 'fit-content',
    boxSizing: 'border-box'
  }, _defineProperty(_ref5, theme.breakpoints.up('xs'), {
    maxWidth: '500px',
    margin: '20px'
  }), _defineProperty(_ref5, theme.breakpoints.up('md'), {
    maxWidth: '500px',
    margin: '0px 10px 0px 0px'
  }), _ref5;
});
var Secondary = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["default"])('div')(function (_ref6) {
  var _ref7;

  var theme = _ref6.theme;
  return _ref7 = {
    width: '100%',
    height: 'fit-content',
    borderRadius: (0,_config__WEBPACK_IMPORTED_MODULE_0__["default"])('templete.borderRadius.1'),
    backgroundColor: '#ffffff',
    boxSizing: 'border-box',
    padding: '30px 20px 30px 20px'
  }, _defineProperty(_ref7, theme.breakpoints.up('xs'), {
    maxWidth: '500px',
    margin: '20px'
  }), _defineProperty(_ref7, theme.breakpoints.up('md'), {
    maxWidth: '400px',
    margin: '0px 0px 0px 10px'
  }), _ref7;
});
var Footer = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["default"])('div')(function (_ref8) {
  var _ref9;

  var theme = _ref8.theme;
  return _ref9 = {
    display: 'flex',
    justifyContent: 'center',
    bottom: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#ffffff',
    boxSizing: 'border-box'
  }, _defineProperty(_ref9, theme.breakpoints.up('xs'), {
    padding: '20px'
  }), _defineProperty(_ref9, theme.breakpoints.up('md'), {
    padding: '30px'
  }), _ref9;
});
var FooterContent = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["default"])('div')(function (_ref10) {
  var theme = _ref10.theme;
  return _defineProperty({
    width: '100%',
    boxSizing: 'border-box'
  }, theme.breakpoints.up('md'), {
    maxWidth: '1000px'
  });
});

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
/******/ __webpack_require__.O(0, ["js/common/chunk.1","js/common/chunk.2","js/common/chunk.a"], () => (__webpack_exec__("./resources/js/landing.jsx")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);