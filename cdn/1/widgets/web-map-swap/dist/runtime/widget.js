/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
System.register(["jimu-core","jimu-arcgis","esri/WebMap","jimu-ui"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_WebMap__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_WebMap__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_WebMap__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./jimu-core/lib/set-public-path.ts":
/*!******************************************!*\
  !*** ./jimu-core/lib/set-public-path.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("/**\n * Webpack will replace __webpack_public_path__ with __webpack_require__.p to set the public path dynamically.\n * The reason why we can't set the publicPath in webpack config is: we change the publicPath when download.\n * */\n// eslint-disable-next-line\n// @ts-ignore\n__webpack_require__.p = window.jimuConfig.baseUrl;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cy5qcyIsIm1hcHBpbmdzIjoiQUFBQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1jb3JlL2xpYi9zZXQtcHVibGljLXBhdGgudHM/NzA4MyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogV2VicGFjayB3aWxsIHJlcGxhY2UgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gd2l0aCBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgdG8gc2V0IHRoZSBwdWJsaWMgcGF0aCBkeW5hbWljYWxseS5cclxuICogVGhlIHJlYXNvbiB3aHkgd2UgY2FuJ3Qgc2V0IHRoZSBwdWJsaWNQYXRoIGluIHdlYnBhY2sgY29uZmlnIGlzOiB3ZSBjaGFuZ2UgdGhlIHB1YmxpY1BhdGggd2hlbiBkb3dubG9hZC5cclxuICogKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbi8vIEB0cy1pZ25vcmVcclxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB3aW5kb3cuamltdUNvbmZpZy5iYXNlVXJsXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./jimu-core/lib/set-public-path.ts\n");

/***/ }),

/***/ "./your-extensions/widgets/web-map-swap/src/runtime/translations/default.ts":
/*!**********************************************************************************!*\
  !*** ./your-extensions/widgets/web-map-swap/src/runtime/translations/default.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    _widgetLabel: 'Web Map Swap',\n    webMap: \"Web Map\",\n    placeholderMessage: \"Please select a web map and set valid web map IDs.\"\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy93ZWItbWFwLXN3YXAvc3JjL3J1bnRpbWUvdHJhbnNsYXRpb25zL2RlZmF1bHQudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvd2ViLW1hcC1zd2FwL3NyYy9ydW50aW1lL3RyYW5zbGF0aW9ucy9kZWZhdWx0LnRzPzM2ODgiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICBfd2lkZ2V0TGFiZWw6ICdXZWIgTWFwIFN3YXAnLFxuICB3ZWJNYXA6IFwiV2ViIE1hcFwiLFxuICBwbGFjZWhvbGRlck1lc3NhZ2U6IFwiUGxlYXNlIHNlbGVjdCBhIHdlYiBtYXAgYW5kIHNldCB2YWxpZCB3ZWIgbWFwIElEcy5cIlxufTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./your-extensions/widgets/web-map-swap/src/runtime/translations/default.ts\n");

/***/ }),

/***/ "./your-extensions/widgets/web-map-swap/src/runtime/widget.tsx":
/*!*********************************************************************!*\
  !*** ./your-extensions/widgets/web-map-swap/src/runtime/widget.tsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Widget)\n/* harmony export */ });\n/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ \"jimu-core\");\n/* harmony import */ var _translations_default__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./translations/default */ \"./your-extensions/widgets/web-map-swap/src/runtime/translations/default.ts\");\n/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-arcgis */ \"jimu-arcgis\");\n/* harmony import */ var esri_WebMap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! esri/WebMap */ \"esri/WebMap\");\n/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jimu-ui */ \"jimu-ui\");\n/** @jsx jsx */\n\n\n\n\n\nconst starIcon = __webpack_require__(/*! jimu-ui/lib/icons/star.svg */ \"./jimu-ui/lib/icons/star.svg\");\nconst { useState } = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React;\nfunction Widget(props) {\n    var _a;\n    const [jimuMapView, setJimuMapView] = useState();\n    const selectChangeHandler = (evt) => {\n        if (jimuMapView) {\n            if (evt.target.value !== '') {\n                jimuMapView.view.map = new esri_WebMap__WEBPACK_IMPORTED_MODULE_3__.default({\n                    portalItem: {\n                        // autocasts as new PortalItem()\n                        id: evt.target.value\n                    }\n                });\n            }\n            else {\n                // set to default (todo)\n            }\n        }\n    };\n    let content;\n    if (props.hasOwnProperty(\"useMapWidgetIds\") &&\n        props.useMapWidgetIds &&\n        props.useMapWidgetIds.length === 1 &&\n        props.config.webMapIds.length > 0 &&\n        props.config.webMapIds.indexOf('') === -1) {\n        content = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", { className: \"shadow-lg m-3 p-3 bg-white rounded\" },\n            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"label\", { style: { maxWidth: \"100%\" } },\n                _translations_default__WEBPACK_IMPORTED_MODULE_1__.default.webMap,\n                \":\",\n                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"br\", null),\n                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"select\", { onChange: (evt) => {\n                        selectChangeHandler(evt);\n                    }, style: { maxWidth: \"100%\" } },\n                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"option\", { value: \"\" }),\n                    props.config.webMapIds.map((webMapId) => {\n                        return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"option\", { value: webMapId }, webMapId);\n                    }))),\n            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_arcgis__WEBPACK_IMPORTED_MODULE_2__.JimuMapViewComponent, { useMapWidgetId: (_a = props.useMapWidgetIds) === null || _a === void 0 ? void 0 : _a[0], onActiveViewChange: (jmv) => {\n                    setJimuMapView(jmv);\n                } }));\n    }\n    else {\n        content = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_4__.WidgetPlaceholder, { icon: starIcon, widgetId: props.id, message: _translations_default__WEBPACK_IMPORTED_MODULE_1__.default.placeholderMessage });\n    }\n    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", { className: \"widget-view-layers-toggle jimu-widget\", style: { overflow: \"auto\" } }, content));\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy93ZWItbWFwLXN3YXAvc3JjL3J1bnRpbWUvd2lkZ2V0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBR0E7QUFDQTtBQUdBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFRQSIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy93ZWItbWFwLXN3YXAvc3JjL3J1bnRpbWUvd2lkZ2V0LnRzeD8wZTY2Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgQWxsV2lkZ2V0UHJvcHMsIFJlYWN0LCBqc3ggfSBmcm9tIFwiamltdS1jb3JlXCI7XG5pbXBvcnQgeyBJTUNvbmZpZyB9IGZyb20gXCIuLi9jb25maWdcIjtcblxuaW1wb3J0IGRlZmF1bHRNZXNzYWdlcyBmcm9tIFwiLi90cmFuc2xhdGlvbnMvZGVmYXVsdFwiO1xuaW1wb3J0IHsgSmltdU1hcFZpZXdDb21wb25lbnQsIEppbXVNYXBWaWV3IH0gZnJvbSBcImppbXUtYXJjZ2lzXCI7XG5pbXBvcnQgV2ViTWFwIGZyb20gJ2VzcmkvV2ViTWFwJztcbmltcG9ydCB7IFdpZGdldFBsYWNlaG9sZGVyIH0gZnJvbSBcImppbXUtdWlcIjtcbmNvbnN0IHN0YXJJY29uID0gcmVxdWlyZSgnamltdS11aS9saWIvaWNvbnMvc3Rhci5zdmcnKTtcbmNvbnN0IHsgdXNlU3RhdGUgfSA9IFJlYWN0O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXaWRnZXQocHJvcHM6IEFsbFdpZGdldFByb3BzPElNQ29uZmlnPikge1xuICBjb25zdCBbamltdU1hcFZpZXcsIHNldEppbXVNYXBWaWV3XSA9IHVzZVN0YXRlPEppbXVNYXBWaWV3PigpO1xuXG4gIGNvbnN0IHNlbGVjdENoYW5nZUhhbmRsZXIgPSAoZXZ0KSA9PiB7XG4gICAgaWYgKGppbXVNYXBWaWV3KSB7XG4gICAgICBpZiAoZXZ0LnRhcmdldC52YWx1ZSAhPT0gJycpIHtcblxuICAgICAgICBqaW11TWFwVmlldy52aWV3Lm1hcCA9IG5ldyBXZWJNYXAoe1xuICAgICAgICAgIHBvcnRhbEl0ZW06IHtcbiAgICAgICAgICAgIC8vIGF1dG9jYXN0cyBhcyBuZXcgUG9ydGFsSXRlbSgpXG4gICAgICAgICAgICBpZDogZXZ0LnRhcmdldC52YWx1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBzZXQgdG8gZGVmYXVsdCAodG9kbylcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgbGV0IGNvbnRlbnQ7XG4gIGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eShcInVzZU1hcFdpZGdldElkc1wiKSAmJlxuICAgIHByb3BzLnVzZU1hcFdpZGdldElkcyAmJlxuICAgIHByb3BzLnVzZU1hcFdpZGdldElkcy5sZW5ndGggPT09IDEgJiZcbiAgICBwcm9wcy5jb25maWcud2ViTWFwSWRzLmxlbmd0aCA+IDAgJiZcbiAgICBwcm9wcy5jb25maWcud2ViTWFwSWRzLmluZGV4T2YoJycpID09PSAtMSkge1xuICAgIGNvbnRlbnQgPSA8cCBjbGFzc05hbWU9XCJzaGFkb3ctbGcgbS0zIHAtMyBiZy13aGl0ZSByb3VuZGVkXCI+XG4gICAgICA8bGFiZWwgc3R5bGU9e3sgbWF4V2lkdGg6IFwiMTAwJVwiIH19PlxuICAgICAgICB7ZGVmYXVsdE1lc3NhZ2VzLndlYk1hcH06PGJyIC8+XG4gICAgICAgIDxzZWxlY3RcbiAgICAgICAgICBvbkNoYW5nZT17KGV2dCkgPT4ge1xuICAgICAgICAgICAgc2VsZWN0Q2hhbmdlSGFuZGxlcihldnQpO1xuICAgICAgICAgIH19XG4gICAgICAgICAgc3R5bGU9e3sgbWF4V2lkdGg6IFwiMTAwJVwiIH19XG4gICAgICAgID5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+PC9vcHRpb24+XG4gICAgICAgICAge3Byb3BzLmNvbmZpZy53ZWJNYXBJZHMubWFwKCh3ZWJNYXBJZCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIDxvcHRpb24gdmFsdWU9e3dlYk1hcElkfT57d2ViTWFwSWR9PC9vcHRpb24+O1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L3NlbGVjdD5cbiAgICAgIDwvbGFiZWw+XG4gICAgICA8SmltdU1hcFZpZXdDb21wb25lbnRcbiAgICAgICAgdXNlTWFwV2lkZ2V0SWQ9e3Byb3BzLnVzZU1hcFdpZGdldElkcz8uWzBdfVxuICAgICAgICBvbkFjdGl2ZVZpZXdDaGFuZ2U9eyhqbXY6IEppbXVNYXBWaWV3KSA9PiB7XG4gICAgICAgICAgc2V0SmltdU1hcFZpZXcoam12KTtcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgPC9wPjtcbiAgfSBlbHNlIHtcbiAgICBjb250ZW50ID0gPFdpZGdldFBsYWNlaG9sZGVyIGljb249e3N0YXJJY29ufSB3aWRnZXRJZD17cHJvcHMuaWR9IG1lc3NhZ2U9e2RlZmF1bHRNZXNzYWdlcy5wbGFjZWhvbGRlck1lc3NhZ2V9IC8+O1xuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPVwid2lkZ2V0LXZpZXctbGF5ZXJzLXRvZ2dsZSBqaW11LXdpZGdldFwiXG4gICAgICBzdHlsZT17eyBvdmVyZmxvdzogXCJhdXRvXCIgfX1cbiAgICA+XG4gICAgICB7Y29udGVudH1cbiAgICA8L2Rpdj5cbiAgKTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./your-extensions/widgets/web-map-swap/src/runtime/widget.tsx\n");

/***/ }),

/***/ "./jimu-ui/lib/icons/star.svg":
/*!************************************!*\
  !*** ./jimu-ui/lib/icons/star.svg ***!
  \************************************/
/***/ ((module) => {

eval("module.exports = \"<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" viewBox=\\\"0 0 26 28\\\"><path d=\\\"M26 10.109c0 .281-.203.547-.406.75l-5.672 5.531 1.344 7.812c.016.109.016.203.016.313 0 .406-.187.781-.641.781a1.27 1.27 0 01-.625-.187L13 21.422l-7.016 3.687c-.203.109-.406.187-.625.187-.453 0-.656-.375-.656-.781 0-.109.016-.203.031-.313l1.344-7.812L.39 10.859c-.187-.203-.391-.469-.391-.75 0-.469.484-.656.875-.719l7.844-1.141 3.516-7.109c.141-.297.406-.641.766-.641s.625.344.766.641l3.516 7.109 7.844 1.141c.375.063.875.25.875.719z\\\"></path></svg>\"//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qaW11LXVpL2xpYi9pY29ucy9zdGFyLnN2Zy5qcyIsIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LXVpL2xpYi9pY29ucy9zdGFyLnN2Zz8wMGU1Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgdmlld0JveD1cXFwiMCAwIDI2IDI4XFxcIj48cGF0aCBkPVxcXCJNMjYgMTAuMTA5YzAgLjI4MS0uMjAzLjU0Ny0uNDA2Ljc1bC01LjY3MiA1LjUzMSAxLjM0NCA3LjgxMmMuMDE2LjEwOS4wMTYuMjAzLjAxNi4zMTMgMCAuNDA2LS4xODcuNzgxLS42NDEuNzgxYTEuMjcgMS4yNyAwIDAxLS42MjUtLjE4N0wxMyAyMS40MjJsLTcuMDE2IDMuNjg3Yy0uMjAzLjEwOS0uNDA2LjE4Ny0uNjI1LjE4Ny0uNDUzIDAtLjY1Ni0uMzc1LS42NTYtLjc4MSAwLS4xMDkuMDE2LS4yMDMuMDMxLS4zMTNsMS4zNDQtNy44MTJMLjM5IDEwLjg1OWMtLjE4Ny0uMjAzLS4zOTEtLjQ2OS0uMzkxLS43NSAwLS40NjkuNDg0LS42NTYuODc1LS43MTlsNy44NDQtMS4xNDEgMy41MTYtNy4xMDljLjE0MS0uMjk3LjQwNi0uNjQxLjc2Ni0uNjQxcy42MjUuMzQ0Ljc2Ni42NDFsMy41MTYgNy4xMDkgNy44NDQgMS4xNDFjLjM3NS4wNjMuODc1LjI1Ljg3NS43MTl6XFxcIj48L3BhdGg+PC9zdmc+XCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./jimu-ui/lib/icons/star.svg\n");

/***/ }),

/***/ "esri/WebMap":
/*!******************************!*\
  !*** external "esri/WebMap" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_WebMap__;

/***/ }),

/***/ "jimu-arcgis":
/*!******************************!*\
  !*** external "jimu-arcgis" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__;

/***/ }),

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ }),

/***/ "jimu-ui":
/*!**************************!*\
  !*** external "jimu-ui" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui__;

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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./jimu-core/lib/set-public-path.ts");
/******/ 	var __webpack_exports__ = __webpack_require__("./your-extensions/widgets/web-map-swap/src/runtime/widget.tsx");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});