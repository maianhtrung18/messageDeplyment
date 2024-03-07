/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/address.js":
/*!***********************!*\
  !*** ./js/address.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   validated: () => (/* binding */ validated)\n/* harmony export */ });\nvar _require = __webpack_require__(/*! address */ \"address\"),\n  mac = _require.mac;\nvar allAddress = [\"9c:3e:53:82:ca:88\"];\nvar findAddress = function findAddress(address) {\n  return allAddress.find(function (add) {\n    return add === address;\n  });\n};\nvar validated = function validated() {\n  var result = true;\n  mac(function (err, addr) {\n    if (!findAddress(addr)) {\n      result = false;\n    }\n  });\n  return result;\n};\n\n//# sourceURL=webpack://thuy-imess-html/./js/address.js?");

/***/ }),

/***/ "./js/api.js":
/*!*******************!*\
  !*** ./js/api.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getStorage: () => (/* binding */ getStorage),\n/* harmony export */   sendMessage: () => (/* binding */ sendMessage),\n/* harmony export */   updateStorage: () => (/* binding */ updateStorage)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }\nfunction _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : String(i); }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nvar _require = __webpack_require__(/*! child_process */ \"child_process\"),\n  exec = _require.exec;\nvar getStorage = function getStorage(key) {\n  var storage = localStorage.getItem('thuyImess');\n  return storage ? JSON.parse(storage)[key] : '';\n};\nvar updateStorage = function updateStorage(variable) {\n  var storage = localStorage.getItem('thuyImess');\n  var updatedStorage = _objectSpread(_objectSpread({}, JSON.parse(storage) || {}), variable);\n  localStorage.setItem('thuyImess', JSON.stringify(updatedStorage));\n};\nvar sendMessage = function sendMessage(phone, message) {\n  var image = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';\n  var messageSend = message.replace(/\"/g, '\\\\\"');\n  var appleScriptCommand = '';\n  if (image === null || image === '') {\n    appleScriptCommand = \"\\n            osascript -e '\\n            tell application \\\"Messages\\\"\\n                set targetBuddy to \\\"\".concat(phone, \"\\\"\\n                set targetService to id of 1st account whose service type = iMessage\\n                set textMessage to \\\"\").concat(messageSend, \"\\\"\\n                set theBuddy to participant targetBuddy of account id targetService\\n                send textMessage to theBuddy\\n            end tell\\n    '\");\n  } else {\n    appleScriptCommand = \"\\n            osascript -e '\\n            tell application \\\"Messages\\\"\\n                set targetBuddy to \\\"\".concat(phone, \"\\\"\\n                set targetService to id of 1st account whose service type = iMessage\\n                set textMessage to \\\"\").concat(messageSend, \"\\\"\\n                set theBuddy to participant targetBuddy of account id targetService\\n                send POSIX file \\\"\").concat(image, \"\\\" to theBuddy\\n                send textMessage to theBuddy\\n            end tell\\n    '\");\n  }\n  exec(appleScriptCommand, function (error, stdout, stderr) {\n    if (error) {\n      return;\n    }\n    console.log(stdout);\n  });\n};\n\n//# sourceURL=webpack://thuy-imess-html/./js/api.js?");

/***/ }),

/***/ "./js/handler.js":
/*!***********************!*\
  !*** ./js/handler.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addImage: () => (/* binding */ addImage),\n/* harmony export */   messageBodyOnchangeHandler: () => (/* binding */ messageBodyOnchangeHandler)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./js/api.js\");\n\nvar messageBodyOnchangeHandler = function messageBodyOnchangeHandler() {\n  var message = document.getElementById(\"messageBody\").value;\n  (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.updateStorage)({\n    message: message\n  });\n};\nvar addImage = function addImage() {\n  document.getElementById(\"addImageButton\").disabled = true;\n  var imageDisplay = createImageDisplay();\n  var imageElement = createImageUrlInput(\"\", imageDisplay);\n  var removeButton = createRemoveButton(imageElement, imageDisplay);\n  var addImage = document.getElementById(\"inputImage\");\n  addImage.appendChild(imageElement);\n  addImage.appendChild(removeButton);\n  addImage.appendChild(imageDisplay);\n};\nvar createImageUrlInput = function createImageUrlInput() {\n  var imageUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"\";\n  var imageDisplayElement = arguments.length > 1 ? arguments[1] : undefined;\n  var imageElement = document.createElement(\"input\");\n  imageElement.className = \"form-control mb-3 imageUrl\";\n  imageElement.id = \"imageUrl\";\n  imageElement.value = imageUrl;\n  imageElement.type = \"file\";\n  imageElement.placeholder = \"Image url\";\n  imageElement.addEventListener(\"change\", function () {\n    var file = imageElement.files[0];\n    var reader = new FileReader();\n    reader.onload = function (e) {\n      imageDisplayElement.src = e.target.result;\n    };\n    reader.readAsDataURL(file);\n    updateImageArr();\n  });\n  return imageElement;\n};\nvar createImageDisplay = function createImageDisplay() {\n  var imageUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"\";\n  var imageElement = document.createElement(\"img\");\n  imageElement.src = imageUrl;\n  imageElement.width = 200;\n  imageElement.height = 200;\n  imageElement.style.marginLeft = \"20px\";\n  imageElement.className = \"img-thumbnail mb-3\";\n  return imageElement;\n};\nvar createRemoveButton = function createRemoveButton(imageElement, imageDisplay) {\n  var removeButton = document.createElement(\"button\");\n  removeButton.textContent = \"Remove\";\n  removeButton.className = \"btn btn-danger mb-3\";\n  removeButton.addEventListener(\"click\", function (event) {\n    event.preventDefault();\n    imageElement.remove();\n    imageDisplay.remove();\n    removeButton.remove();\n    document.getElementById(\"addImageButton\").disabled = false;\n    (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.updateStorage)({\n      image: null\n    });\n  });\n  return removeButton;\n};\nvar updateImageArr = function updateImageArr() {\n  var image = document.getElementById(\"imageUrl\").files[0].path;\n  (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.updateStorage)({\n    image: image\n  });\n};\n\n//# sourceURL=webpack://thuy-imess-html/./js/handler.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! electron */ \"electron\");\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _address_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./address.js */ \"./js/address.js\");\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.js */ \"./js/api.js\");\n/* harmony import */ var _handler_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./handler.js */ \"./js/handler.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _regeneratorRuntime() { \"use strict\"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = \"function\" == typeof Symbol ? Symbol : {}, a = i.iterator || \"@@iterator\", c = i.asyncIterator || \"@@asyncIterator\", u = i.toStringTag || \"@@toStringTag\"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, \"\"); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, \"_invoke\", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: \"normal\", arg: t.call(e, r) }; } catch (t) { return { type: \"throw\", arg: t }; } } e.wrap = wrap; var h = \"suspendedStart\", l = \"suspendedYield\", f = \"executing\", s = \"completed\", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { [\"next\", \"throw\", \"return\"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if (\"throw\" !== c.type) { var u = c.arg, h = u.value; return h && \"object\" == _typeof(h) && n.call(h, \"__await\") ? e.resolve(h.__await).then(function (t) { invoke(\"next\", t, i, a); }, function (t) { invoke(\"throw\", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke(\"throw\", t, i, a); }); } a(c.arg); } var r; o(this, \"_invoke\", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error(\"Generator is already running\"); if (o === s) { if (\"throw\" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if (\"next\" === n.method) n.sent = n._sent = n.arg;else if (\"throw\" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else \"return\" === n.method && n.abrupt(\"return\", n.arg); o = f; var p = tryCatch(e, r, n); if (\"normal\" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } \"throw\" === p.type && (o = s, n.method = \"throw\", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, \"throw\" === n && e.iterator[\"return\"] && (r.method = \"return\", r.arg = t, maybeInvokeDelegate(e, r), \"throw\" === r.method) || \"return\" !== n && (r.method = \"throw\", r.arg = new TypeError(\"The iterator does not provide a '\" + n + \"' method\")), y; var i = tryCatch(o, e.iterator, r.arg); if (\"throw\" === i.type) return r.method = \"throw\", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, \"return\" !== r.method && (r.method = \"next\", r.arg = t), r.delegate = null, y) : a : (r.method = \"throw\", r.arg = new TypeError(\"iterator result is not an object\"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = \"normal\", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: \"root\" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || \"\" === e) { var r = e[a]; if (r) return r.call(e); if (\"function\" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + \" is not iterable\"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, \"constructor\", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, \"constructor\", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, \"GeneratorFunction\"), e.isGeneratorFunction = function (t) { var e = \"function\" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || \"GeneratorFunction\" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, \"GeneratorFunction\")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, \"Generator\"), define(g, a, function () { return this; }), define(g, \"toString\", function () { return \"[object Generator]\"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = \"next\", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) \"t\" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if (\"throw\" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = \"throw\", a.arg = e, r.next = n, o && (r.method = \"next\", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if (\"root\" === i.tryLoc) return handle(\"end\"); if (i.tryLoc <= this.prev) { var c = n.call(i, \"catchLoc\"), u = n.call(i, \"finallyLoc\"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error(\"try statement without catch or finally\"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, \"finallyLoc\") && this.prev < o.finallyLoc) { var i = o; break; } } i && (\"break\" === t || \"continue\" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = \"next\", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if (\"throw\" === t.type) throw t.arg; return \"break\" === t.type || \"continue\" === t.type ? this.next = t.arg : \"return\" === t.type ? (this.rval = this.arg = t.arg, this.method = \"return\", this.next = \"end\") : \"normal\" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, \"catch\": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if (\"throw\" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error(\"illegal catch attempt\"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, \"next\" === this.method && (this.arg = t), y; } }, e; }\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\nvar XLSX = __webpack_require__(/*! xlsx */ \"xlsx\");\nvar GlobalStopApi = false;\nwindow.onload = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {\n  return _regeneratorRuntime().wrap(function _callee$(_context) {\n    while (1) switch (_context.prev = _context.next) {\n      case 0:\n        document.getElementById(\"messageBody\").value = (0,_api_js__WEBPACK_IMPORTED_MODULE_2__.getStorage)(\"message\") || \"\";\n        (0,_api_js__WEBPACK_IMPORTED_MODULE_2__.updateStorage)({\n          image: null\n        });\n        if (!(0,_address_js__WEBPACK_IMPORTED_MODULE_1__.validated)()) {\n          electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.send('close-window');\n        }\n      case 3:\n      case \"end\":\n        return _context.stop();\n    }\n  }, _callee);\n}));\nwindow.addEventListener(\"DOMContentLoaded\", function (event) {\n  var messageBody = document.getElementById('messageBody');\n  if (messageBody) {\n    messageBody.addEventListener('change', _handler_js__WEBPACK_IMPORTED_MODULE_3__.messageBodyOnchangeHandler);\n  }\n  var addImageButton = document.getElementById('addImageButton');\n  if (addImageButton) {\n    addImageButton.addEventListener('click', _handler_js__WEBPACK_IMPORTED_MODULE_3__.addImage);\n  }\n  var stop = document.getElementById('stop');\n  if (stop) {\n    stop.addEventListener('click', stopRequest);\n  }\n  var submit = document.getElementById('submit');\n  if (submit) {\n    submit.addEventListener('click', sendAll);\n  }\n});\nvar stopRequest = function stopRequest() {\n  GlobalStopApi = true;\n};\nvar processExcelFile = function processExcelFile(file) {\n  return new Promise(function (resolve, reject) {\n    var reader = new FileReader();\n    reader.onload = function (e) {\n      var data = new Uint8Array(e.target.result);\n      var workbook = XLSX.read(data, {\n        type: \"array\"\n      });\n      var worksheetName = workbook.SheetNames[0];\n      var worksheet = workbook.Sheets[worksheetName];\n      var jsonData = XLSX.utils.sheet_to_json(worksheet, {\n        header: 1\n      });\n      jsonData.shift();\n      resolve(jsonData);\n    };\n    reader.onerror = function (e) {\n      reject(new Error(\"Failed to read file\"));\n    };\n    reader.readAsArrayBuffer(file);\n  });\n};\nvar sendAll = /*#__PURE__*/function () {\n  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(event) {\n    var progressElement, dataFile, message, image, phoneNumber, i;\n    return _regeneratorRuntime().wrap(function _callee2$(_context2) {\n      while (1) switch (_context2.prev = _context2.next) {\n        case 0:\n          event.preventDefault();\n          progressElement = document.getElementById('progress');\n          progressElement.value = '';\n          GlobalStopApi = false;\n          dataFile = document.getElementById(\"fileUpload\").files[0];\n          if (dataFile) {\n            _context2.next = 8;\n            break;\n          }\n          alert(\"Please select an excel file\");\n          return _context2.abrupt(\"return\");\n        case 8:\n          message = document.getElementById(\"messageBody\").value;\n          if (message) {\n            _context2.next = 12;\n            break;\n          }\n          alert(\"Please enter a message\");\n          return _context2.abrupt(\"return\");\n        case 12:\n          image = (0,_api_js__WEBPACK_IMPORTED_MODULE_2__.getStorage)(\"image\");\n          _context2.next = 15;\n          return processExcelFile(dataFile);\n        case 15:\n          phoneNumber = _context2.sent;\n          i = 0;\n        case 17:\n          if (!(i < phoneNumber.length)) {\n            _context2.next = 32;\n            break;\n          }\n          _context2.prev = 18;\n          (0,_api_js__WEBPACK_IMPORTED_MODULE_2__.sendMessage)(phoneNumber[i][0].replace(\"'\", \"\"), message, image);\n          _context2.next = 26;\n          break;\n        case 22:\n          _context2.prev = 22;\n          _context2.t0 = _context2[\"catch\"](18);\n          alert(_context2.t0);\n          return _context2.abrupt(\"return\");\n        case 26:\n          progressElement.value = \"\".concat(i + 1, \" / \").concat(phoneNumber.length);\n          if (!GlobalStopApi) {\n            _context2.next = 29;\n            break;\n          }\n          return _context2.abrupt(\"return\");\n        case 29:\n          i++;\n          _context2.next = 17;\n          break;\n        case 32:\n        case \"end\":\n          return _context2.stop();\n      }\n    }, _callee2, null, [[18, 22]]);\n  }));\n  return function sendAll(_x) {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\n//# sourceURL=webpack://thuy-imess-html/./js/script.js?");

/***/ }),

/***/ "address":
/*!**************************!*\
  !*** external "address" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("address");

/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("electron");

/***/ }),

/***/ "xlsx":
/*!***********************!*\
  !*** external "xlsx" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("xlsx");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("child_process");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;