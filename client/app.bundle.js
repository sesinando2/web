webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(298);


/***/ },

/***/ 298:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _angular = __webpack_require__(299);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _angularUiRouter = __webpack_require__(301);
	
	var _angularUiRouter2 = _interopRequireDefault(_angularUiRouter);
	
	var _common = __webpack_require__(302);
	
	var _common2 = _interopRequireDefault(_common);
	
	var _components = __webpack_require__(312);
	
	var _components2 = _interopRequireDefault(_components);
	
	var _app = __webpack_require__(319);
	
	var _app2 = _interopRequireDefault(_app);
	
	__webpack_require__(323);
	
	__webpack_require__(325);
	
	__webpack_require__(332);
	
	__webpack_require__(334);
	
	__webpack_require__(336);
	
	__webpack_require__(338);
	
	__webpack_require__(340);
	
	__webpack_require__(348);
	
	__webpack_require__(350);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_angular2.default.module('app', [_angularUiRouter2.default, _common2.default, _components2.default]).config(["$locationProvider", function ($locationProvider) {
	  "ngInject";
	  // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
	  // #how-to-configure-your-server-to-work-with-html5mode
	
	  $locationProvider.html5Mode(true).hashPrefix('!');
	}]).component('app', _app2.default);

/***/ },

/***/ 302:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _angular = __webpack_require__(299);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _sidebar = __webpack_require__(303);
	
	var _sidebar2 = _interopRequireDefault(_sidebar);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var commonModule = _angular2.default.module('app.common', [_sidebar2.default]).name;
	
	exports.default = commonModule;

/***/ },

/***/ 303:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _angular = __webpack_require__(299);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _angularUiRouter = __webpack_require__(301);
	
	var _angularUiRouter2 = _interopRequireDefault(_angularUiRouter);
	
	var _sidebar = __webpack_require__(304);
	
	var _sidebar2 = _interopRequireDefault(_sidebar);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var sidebarModule = _angular2.default.module('sidebar', [_angularUiRouter2.default]).component('sidebar', _sidebar2.default).name;
	
	exports.default = sidebarModule;

/***/ },

/***/ 304:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _sidebar = __webpack_require__(305);
	
	var _sidebar2 = _interopRequireDefault(_sidebar);
	
	var _sidebar3 = __webpack_require__(306);
	
	var _sidebar4 = _interopRequireDefault(_sidebar3);
	
	__webpack_require__(308);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var sidebarComponent = {
	  restrict: 'E',
	  bindings: {},
	  template: _sidebar2.default,
	  controller: _sidebar4.default
	};
	
	exports.default = sidebarComponent;

/***/ },

/***/ 305:
/***/ function(module, exports) {

	module.exports = "<div>\n  <h1>{{ $ctrl.name }}</h1>\n</div>\n"

/***/ },

/***/ 306:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _classCallCheck2 = __webpack_require__(307);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var SidebarController = function SidebarController() {
	  (0, _classCallCheck3.default)(this, SidebarController);
	
	  this.name = 'sidebar';
	};
	
	exports.default = SidebarController;

/***/ },

/***/ 308:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(309);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(311)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(309, function() {
				var newContent = __webpack_require__(309);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 309:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(310)();
	// imports
	
	
	// module
	exports.push([module.id, ".sidebar {\n  color: #f00;\n}\n", ""]);
	
	// exports


/***/ },

/***/ 312:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _angular = __webpack_require__(299);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _people = __webpack_require__(313);
	
	var _people2 = _interopRequireDefault(_people);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var componentModule = _angular2.default.module('app.components', [_people2.default]).name;
	
	exports.default = componentModule;

/***/ },

/***/ 313:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _angular = __webpack_require__(299);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _angularUiRouter = __webpack_require__(301);
	
	var _angularUiRouter2 = _interopRequireDefault(_angularUiRouter);
	
	var _people = __webpack_require__(314);
	
	var _people2 = _interopRequireDefault(_people);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var peopleModule = _angular2.default.module('people', [_angularUiRouter2.default]).config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
	  "ngInject";
	
	  $urlRouterProvider.otherwise('/');
	
	  $stateProvider.state('people', {
	    url: '/',
	    component: 'people'
	  });
	}]).component('people', _people2.default).name;
	
	exports.default = peopleModule;

/***/ },

/***/ 314:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _people = __webpack_require__(315);
	
	var _people2 = _interopRequireDefault(_people);
	
	var _people3 = __webpack_require__(316);
	
	var _people4 = _interopRequireDefault(_people3);
	
	__webpack_require__(317);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var peopleComponent = {
	  restrict: 'E',
	  bindings: {},
	  template: _people2.default,
	  controller: _people4.default
	};
	
	exports.default = peopleComponent;

/***/ },

/***/ 315:
/***/ function(module, exports) {

	module.exports = "<topbar></topbar>\n<div>\n  <sidebar></sidebar>\n  <div>\n    <h1>{{ $ctrl.name }}</h1>\n  </div>\n</div>\n"

/***/ },

/***/ 316:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _classCallCheck2 = __webpack_require__(307);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var PeopleController = function PeopleController() {
	  (0, _classCallCheck3.default)(this, PeopleController);
	
	  this.name = 'people';
	};
	
	exports.default = PeopleController;

/***/ },

/***/ 317:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(318);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(311)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(318, function() {
				var newContent = __webpack_require__(318);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 318:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(310)();
	// imports
	
	
	// module
	exports.push([module.id, ".people {\n  color: #f00;\n}\n", ""]);
	
	// exports


/***/ },

/***/ 319:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _app = __webpack_require__(320);
	
	var _app2 = _interopRequireDefault(_app);
	
	__webpack_require__(321);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var appComponent = {
	  template: _app2.default,
	  restrict: 'E'
	};
	
	exports.default = appComponent;

/***/ },

/***/ 320:
/***/ function(module, exports) {

	module.exports = "<!-- Place all UI elements intended to be present across all routes in this file -->\n<div class=\"app\">\n  <div ui-view></div>\n</div>\n"

/***/ },

/***/ 321:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(322);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(311)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(322, function() {
				var newContent = __webpack_require__(322);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 322:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(310)();
	// imports
	
	
	// module
	exports.push([module.id, ".app {\n  height: 100%;\n  background-color: $lightBgColor;\n}\n", ""]);
	
	// exports


/***/ }

});
//# sourceMappingURL=app.bundle.js.map