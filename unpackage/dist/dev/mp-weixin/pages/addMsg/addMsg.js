(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/addMsg/addMsg"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!C:\\Users\\Administrator.EBQE09GQ7ZCT755\\Documents\\HBuilderProjects\\hello\\pages\\addMsg\\addMsg.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!C:/Users/Administrator.EBQE09GQ7ZCT755/Documents/HBuilderProjects/hello/pages/addMsg/addMsg.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default =
{
  data: function data() {
    return {
      orderId: '',
      datetime: '',
      area: '',
      explain: '' };

  },
  onLoad: function onLoad() {},
  onReady: function onReady() {
    this.datetime = this.getCurrentDate();
  },
  methods: {
    getCurrentDate: function getCurrentDate() {
      var date = new Date();
      var sign1 = '-';
      var sign2 = ':';
      var year = date.getFullYear(); // 年
      var month = date.getMonth() + 1; // 月
      var day = date.getDate(); // 日
      var hour = date.getHours(); // 时
      var minutes = date.getMinutes(); // 分
      var seconds = date.getSeconds(); //秒
      // var weekArr = ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期天'];
      // var week = weekArr[date.getDay()];
      // 给一位数数据前面加 “0”
      if (month >= 1 && month <= 9) {
        month = '0' + month;
      }
      if (day >= 0 && day <= 9) {
        day = '0' + day;
      }
      if (hour >= 0 && hour <= 9) {
        hour = '0' + hour;
      }
      if (minutes >= 0 && minutes <= 9) {
        minutes = '0' + minutes;
      }
      if (seconds >= 0 && seconds <= 9) {
        seconds = '0' + seconds;
      }
      var currentdate = year + sign1 + month + sign1 + day + ' ' + hour + sign2 + minutes + sign2 + seconds;
      return currentdate;
    },
    getOrderId: function getOrderId(event) {
      this.orderId = event.target.value;
    },
    getDateTime: function getDateTime(event) {
      this.dateTime = event.target.value;
    },
    getArea: function getArea(event) {
      this.area = event.target.value;
    },
    getExplain: function getExplain(event) {
      this.explain = event.target.value;
    },
    goBack: function goBack() {
      uni.navigateBack();
    },
    getQrcode: function getQrcode() {
      var that = this;
      uni.scanCode({
        success: function success(res) {
          console.log('条码类型：' + res.scanType);
          console.log('条码内容：' + res.result);
          if (that.orderId != '') {
            that.orderId += ',' + res.result;
          } else {
            that.orderId = res.result;
          }
        },
        fail: function fail(res) {
          console.error(res);
        } });

    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ "./node_modules/@dcloudio/uni-mp-weixin/dist/index.js")["default"]))

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!C:\\Users\\Administrator.EBQE09GQ7ZCT755\\Documents\\HBuilderProjects\\hello\\pages\\addMsg\\addMsg.vue?vue&type=template&id=b6bdd364&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!C:/Users/Administrator.EBQE09GQ7ZCT755/Documents/HBuilderProjects/hello/pages/addMsg/addMsg.vue?vue&type=template&id=b6bdd364& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "C:\\Users\\Administrator.EBQE09GQ7ZCT755\\Documents\\HBuilderProjects\\hello\\pages\\addMsg\\addMsg.vue":
/*!*******************************************************************************************************!*\
  !*** C:/Users/Administrator.EBQE09GQ7ZCT755/Documents/HBuilderProjects/hello/pages/addMsg/addMsg.vue ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _addMsg_vue_vue_type_template_id_b6bdd364___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addMsg.vue?vue&type=template&id=b6bdd364& */ "C:\\Users\\Administrator.EBQE09GQ7ZCT755\\Documents\\HBuilderProjects\\hello\\pages\\addMsg\\addMsg.vue?vue&type=template&id=b6bdd364&");
/* harmony import */ var _addMsg_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addMsg.vue?vue&type=script&lang=js& */ "C:\\Users\\Administrator.EBQE09GQ7ZCT755\\Documents\\HBuilderProjects\\hello\\pages\\addMsg\\addMsg.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _addMsg_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _addMsg_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _addMsg_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _addMsg_vue_vue_type_template_id_b6bdd364___WEBPACK_IMPORTED_MODULE_0__["render"],
  _addMsg_vue_vue_type_template_id_b6bdd364___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "C:/Users/Administrator.EBQE09GQ7ZCT755/Documents/HBuilderProjects/hello/pages/addMsg/addMsg.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "C:\\Users\\Administrator.EBQE09GQ7ZCT755\\Documents\\HBuilderProjects\\hello\\pages\\addMsg\\addMsg.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************!*\
  !*** C:/Users/Administrator.EBQE09GQ7ZCT755/Documents/HBuilderProjects/hello/pages/addMsg/addMsg.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_addMsg_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./addMsg.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!C:\\Users\\Administrator.EBQE09GQ7ZCT755\\Documents\\HBuilderProjects\\hello\\pages\\addMsg\\addMsg.vue?vue&type=script&lang=js&");
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_addMsg_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_addMsg_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_addMsg_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_addMsg_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_addMsg_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "C:\\Users\\Administrator.EBQE09GQ7ZCT755\\Documents\\HBuilderProjects\\hello\\pages\\addMsg\\addMsg.vue?vue&type=template&id=b6bdd364&":
/*!**************************************************************************************************************************************!*\
  !*** C:/Users/Administrator.EBQE09GQ7ZCT755/Documents/HBuilderProjects/hello/pages/addMsg/addMsg.vue?vue&type=template&id=b6bdd364& ***!
  \**************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_addMsg_vue_vue_type_template_id_b6bdd364___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./addMsg.vue?vue&type=template&id=b6bdd364& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!C:\\Users\\Administrator.EBQE09GQ7ZCT755\\Documents\\HBuilderProjects\\hello\\pages\\addMsg\\addMsg.vue?vue&type=template&id=b6bdd364&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_addMsg_vue_vue_type_template_id_b6bdd364___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_addMsg_vue_vue_type_template_id_b6bdd364___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

},[["C:\\Users\\Administrator.EBQE09GQ7ZCT755\\Documents\\HBuilderProjects\\hello\\main.js?{\"page\":\"pages%2FaddMsg%2FaddMsg\"}","common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/addMsg/addMsg.js.map