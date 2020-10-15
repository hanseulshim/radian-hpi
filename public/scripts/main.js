/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/scripts/main.js","vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/scripts/lib/ajax-form.js":
/*!**************************************!*\
  !*** ./src/scripts/lib/ajax-form.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function ($) {
  $.fn.ajaxForm = function () {
    this.on('submit', function (event) {
      event.preventDefault();
      var form = $(event.target);
      var action = form.attr('action');
      var method = form.attr('method');
      var successModalId = form.data('ajaxSuccessModal');
      var errorModalId = form.data('ajaxErrorModal');
      var data = form.serialize();
      form.addClass('ajax-pending');
      $.ajax({
        type: method,
        url: action,
        data: data,
        success: function success() {
          var containingModal = form.parents('.modal');

          if (containingModal.length > 0) {
            containingModal.modal('hide');
          }

          if (successModalId) {
            var successModal = $('#' + successModalId);
            successModal.modal('show');
          }
        },
        error: function error() {
          if (errorModalId) {
            var errorModal = $('#' + errorModalId);
            errorModal.modal('show');
          }
        },
        complete: function complete() {
          form.removeClass('ajax-pending');
        }
      });
    });
  };
})(jQuery);

/***/ }),

/***/ "./src/scripts/lib/animate-group.js":
/*!******************************************!*\
  !*** ./src/scripts/lib/animate-group.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Defines jQuery plugin `animateGroup`
 * that waits for all `img.animation-layer` elements to trigger their "load" events
 * and then removes a class `animation-pending`
 * allowing any transitions that are defined by CSS to take effect without that class.
 */
(function ($) {
  $.fn.animateGroup = function () {
    var animationGroups = this;
    animationGroups.each(function (i, el) {
      var animationGroup = $(el);
      var animationLayers = animationGroup.find('img.animation-layer');
      var numLayers = animationLayers.length;
      var numLayersLoaded = 0;

      var loadLayer = function loadLayer() {
        numLayersLoaded++;

        if (numLayersLoaded === numLayers) {
          setTimeout(function () {
            animationGroup.removeClass('animation-pending');
          }, 1000);
        }
      };

      animationLayers.each(function (i, img) {
        if (img.complete) {
          loadLayer();
        } else {
          img.onload = loadLayer;
          img.onerror = loadLayer;
        }
      });
    });
  };
})(jQuery);

/***/ }),

/***/ "./src/scripts/lib/content-selector.js":
/*!*********************************************!*\
  !*** ./src/scripts/lib/content-selector.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function ($) {
  var HIDE = 'd-none';

  $.fn.contentSelector = function (tree) {
    var el = $(this);
    var selects = el.find('select');
    var select0 = selects.eq(0);
    var select1 = selects.eq(1);
    var cta = el.find('a');
    setOptions(select0, tree.map(function (x) {
      return x.name;
    }), 1);
    select0.on('change', function (event) {
      var val = select0.val();
      cta.addClass(HIDE);

      if (val !== "") {
        select1.removeAttr('disabled');
        var index = parseInt(val);
        setOptions(select1, tree[index].options.map(function (x) {
          return x.name;
        }), 2);
      } else {
        select1.attr('disabled', true);
        setOptions(select1, [], 2);
      }
    });
    select1.on('change', function (event) {
      var val0 = select0.val();
      var val1 = select1.val();
      cta.removeAttr("target");
      cta.attr('data-action', '');
      cta.attr('data-label', '');

      if (val1 !== "") {
        var i0 = parseInt(val0);
        var i1 = parseInt(val1);
        var link = tree[i0].options[i1].link;
        var dataAction = tree[i0].name;
        var dataLabel = tree[i0].options[i1].name;
        var linkTarget = link.target;
        cta.attr('href', link.url); //Start of RAD-555,601

        if (linkTarget) {
          cta.attr('target', linkTarget);
        }

        cta.attr('data-action', dataAction);
        cta.attr('data-label', dataLabel); //End of RAD-555,601

        cta.text(link.text);
        cta.removeClass(HIDE);
      } else {
        cta.addClass(HIDE);
      }
    });
  };

  function setOptions(select, names, place) {
    var placeholder = "";
    if (place === 1) placeholder = "Select First";else placeholder = "Select Second";
    var html = "<option value=\"\">" + placeholder + "</option>" + names.map(function (n, i) {
      return "<option value=".concat(i, ">").concat(n, "</option>");
    }).join('');
    select.html(html);
  }
})(jQuery);

/***/ }),

/***/ "./src/scripts/lib/detect.js":
/*!***********************************!*\
  !*** ./src/scripts/lib/detect.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var is = __webpack_require__(/*! is_js */ "./node_modules/is_js/is.js");
/**
 * Detects relevant aspects of browser and operating system.
 * @type {{}}
 */


var detect = {
  /**
   * Detects MSIE
   * @returns {Boolean}
   */
  ie: function ie() {
    return is.ie();
  },

  /**
   * Detects Windows (10 if on Windows version 10, otherwise true)
   * @returns {Boolean|Number}
   */
  windows: function windows() {
    /*
    Examples of navigator.appVersion
    5.0 (Windows NT 6.1; WOW64; Trident/7.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; .NET4.0C; .NET4.0E; rv:11.0) like Gecko
    5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729; rv:11.0) like Gecko
     */
    if (!is.windows()) {
      return false;
    } else if (navigator.appVersion.match('Windows NT 10')) {
      return 10;
    } else {
      return true;
    }
  }
};
module.exports = detect;

/***/ }),

/***/ "./src/scripts/lib/focusable.js":
/*!**************************************!*\
  !*** ./src/scripts/lib/focusable.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function ($) {
  /**
   * Finds focusable descendants.
   */
  $.fn.focusable = function () {
    return this.find('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]');
  };
})(jQuery);

/***/ }),

/***/ "./src/scripts/lib/form-envoy.js":
/*!***************************************!*\
  !*** ./src/scripts/lib/form-envoy.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function ($) {
  $.fn.formEnvoy = function () {
    /*
    Toggles a label element's active class
    depending on its corresponding input. In particular,
    the form envoy label is active iff has focus or has a non-empty value.
     */
    var className = 'active';
    return this.each(function (i, el) {
      var envoy = $(el);
      var inputId = envoy.attr('for');
      var input = $('#' + inputId);

      var handler = function handler() {
        if (input.hasClass('dynamic') || input.val() || input[0] === document.activeElement) {
          envoy.addClass(className);
        } else {
          envoy.removeClass(className);
        }
      };

      var delayedHandler = function delayedHandler() {
        return setTimeout(handler, 100);
      };
      /*
      TRICKY
      delaying blur handler fixes issue with lag between selecting dropdown item and setting input value
       */


      input.on('change', handler).on('focus', handler).on('blur', delayedHandler);
      handler();
    });
  };
})(jQuery);

/***/ }),

/***/ "./src/scripts/lib/form-hint.js":
/*!**************************************!*\
  !*** ./src/scripts/lib/form-hint.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function ($) {
  /**
   * Adds the attributes to a form hint:
   tabindex="0"
   data-toggle="tooltip"
   data-placement="bottom"
   title="{{ tooltip }}"
   */
  $.fn.formHint = function () {
    return this.each(function (i, el) {
      var formHint = $(el);
      formHint.attr('tabindex', 0);
      formHint.attr('title', formHint.text());
      formHint.text('');
      formHint.tooltip({
        placement: 'bottom'
      });
    });
  };
})(jQuery);

/***/ }),

/***/ "./src/scripts/lib/list-editor.js":
/*!****************************************!*\
  !*** ./src/scripts/lib/list-editor.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function ($) {
  $.fn.listEditor = function () {
    /*
    Enables an input to manage the elements of a list
    */
    var addButtons = $('[data-list-editor="add"]');

    try {
      addButtons.each(function (i, el) {
        var addButton = $(el);
        var sourceId = addButton.data('source');

        if (!sourceId) {
          throw new Error('missing source id');
        }

        var targetId = addButton.data('target');

        if (!targetId) {
          throw new Error('missing target id');
        }

        var inputName = addButton.data('inputName');

        if (!inputName) {
          throw new Error('missing data-input-name attribute');
        }

        var sourceInput = $('#' + sourceId);

        if (sourceInput.length === 0) {
          throw new Error('cannot find source input');
        }

        var targetList = $('#' + targetId);

        if (targetList.length === 0) {
          throw new Error('cannot find target input');
        } // disable add button to prevent empty input from being added to the list


        if (sourceInput.val() === '') {
          addButton.attr('disabled', 'disabled');
        } // handle click on add button by taking input value and appending it to the list


        addButton.on('click', function (event) {
          event.preventDefault();
          var value = sourceInput.val();
          var listItem = targetList.find('.managed-list-item:first-child').clone();
          listItem.find('.managed-list-value').text(value);
          listItem.find('[data-list-editor="remove"]').on('click', function (event) {
            event.preventDefault();
            var target = $(event.target);
            target.closest('.managed-list-item').remove();
          });
          var hiddenInput = $('<input type="hidden"/>');
          hiddenInput.attr('name', inputName);
          hiddenInput.val(value);
          listItem.append(hiddenInput);
          targetList.append(listItem);
          sourceInput.val('');
          addButton.attr('disabled', 'disabled');
          sourceInput.focus();
        }); // re-enable add button if ever input becomes non-empty

        $(sourceInput).keyup(function () {
          if (sourceInput.val() === '') {
            addButton.attr('disabled', 'disabled');
          } else {
            addButton.removeAttr('disabled');
          }
        });
      });
    } catch (e) {
      console.error('List Editor Plugin Error: ', e.message);
    }
  };
})(jQuery);

/***/ }),

/***/ "./src/scripts/lib/nav-menu-app/ActiveFlag.js":
/*!****************************************************!*\
  !*** ./src/scripts/lib/nav-menu-app/ActiveFlag.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Icon */ "./src/scripts/lib/nav-menu-app/Icon.js");


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var className = _ref.className;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "active-flag position-absolute text-secondary ".concat(className)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon__WEBPACK_IMPORTED_MODULE_1__["default"].Ring, null));
});

/***/ }),

/***/ "./src/scripts/lib/nav-menu-app/BackButton.js":
/*!****************************************************!*\
  !*** ./src/scripts/lib/nav-menu-app/BackButton.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Icon */ "./src/scripts/lib/nav-menu-app/Icon.js");


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var _onClick = _ref.onClick;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-link back-btn",
    onClick: function onClick() {
      return _onClick && _onClick();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "h4 mr-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon__WEBPACK_IMPORTED_MODULE_1__["default"].ArrowLeft, null)), "Back"));
});

/***/ }),

/***/ "./src/scripts/lib/nav-menu-app/Icon.js":
/*!**********************************************!*\
  !*** ./src/scripts/lib/nav-menu-app/Icon.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
  Ring: function Ring() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
      className: "icon",
      viewBox: "0 0 16 16"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
      r: "6.5",
      cx: "8",
      cy: "8",
      stroke: "currentColor",
      strokeWidth: "3",
      fillOpacity: "0"
    }));
  },
  CaretDown: function CaretDown() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
      className: "icon",
      viewBox: "0 0 10 5"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("polygon", {
      points: "10 0 5 5 0 0",
      fill: "currentColor"
    }));
  },
  CaretRight: function CaretRight() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
      className: "icon",
      viewBox: "0 0 5 10"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("polygon", {
      points: "0 0 5 5 0 10",
      fill: "currentColor"
    }));
  },
  ChevronRight: function ChevronRight() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
      className: "icon",
      viewBox: "0 0 16 13"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
      stroke: "currentColor",
      strokeWidth: "2",
      fill: "none",
      fillRule: "evenodd",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      d: "M15 6.5H15M10 1.5l5 5-5 5"
    })));
  },
  ArrowLeft: function ArrowLeft() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
      className: "icon",
      viewBox: "0 0 16 13"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
      stroke: "currentColor",
      strokeWidth: "1.5",
      fill: "none",
      fillRule: "evenodd",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      d: "M14.547 6.5H1M6 11.5l-5-5 5-5"
    })));
  },
  ArrowRight: function ArrowRight() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
      className: "icon",
      viewBox: "0 0 16 13"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
      stroke: "currentColor",
      "stroke-width": "1.5",
      fill: "none",
      "fill-rule": "evenodd",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      d: "M1.453 6.5H15M10 1.5l5 5-5 5"
    })));
  }
});

/***/ }),

/***/ "./src/scripts/lib/nav-menu-app/NavLink.js":
/*!*************************************************!*\
  !*** ./src/scripts/lib/nav-menu-app/NavLink.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ActiveFlag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ActiveFlag */ "./src/scripts/lib/nav-menu-app/ActiveFlag.js");


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var className = _ref.className,
      url = _ref.url,
      title = _ref.title,
      active = _ref.active,
      dataCategory = _ref.dataCategory,
      dataAction = _ref.dataAction,
      dataLabel = _ref.dataLabel;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "position-relative ".concat(className)
  }, !active ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ActiveFlag__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "pl-2 pt-3"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "btn btn-link",
    "data-category": dataCategory,
    "data-action": dataAction,
    "data-label": dataLabel,
    href: url
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "h5 mb-0 font-weight-black"
  }, title)));
});

/***/ }),

/***/ "./src/scripts/lib/nav-menu-app/NavMenuApp.js":
/*!****************************************************!*\
  !*** ./src/scripts/lib/nav-menu-app/NavMenuApp.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NavMenuApp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NavMenuLeaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavMenuLeaflet */ "./src/scripts/lib/nav-menu-app/NavMenuLeaflet.js");
/* harmony import */ var _NavMenuMega__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NavMenuMega */ "./src/scripts/lib/nav-menu-app/NavMenuMega.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var NavMenuApp = /*#__PURE__*/function (_React$Component) {
  _inherits(NavMenuApp, _React$Component);

  var _super = _createSuper(NavMenuApp);

  function NavMenuApp() {
    _classCallCheck(this, NavMenuApp);

    return _super.apply(this, arguments);
  }

  _createClass(NavMenuApp, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "d-md-none overflow-hidden"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavMenuLeaflet__WEBPACK_IMPORTED_MODULE_1__["default"], {
        navMenu: this.props.navMenu
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "d-none d-md-block overflow-hidden h-100"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavMenuMega__WEBPACK_IMPORTED_MODULE_2__["default"], {
        navMenu: this.props.navMenu
      })));
    }
  }]);

  return NavMenuApp;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./src/scripts/lib/nav-menu-app/NavMenuLeaflet.js":
/*!********************************************************!*\
  !*** ./src/scripts/lib/nav-menu-app/NavMenuLeaflet.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _BackButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BackButton */ "./src/scripts/lib/nav-menu-app/BackButton.js");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Icon */ "./src/scripts/lib/nav-menu-app/Icon.js");
/* harmony import */ var _Rule__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Rule */ "./src/scripts/lib/nav-menu-app/Rule.js");
/* harmony import */ var _NavLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NavLink */ "./src/scripts/lib/nav-menu-app/NavLink.js");
/* harmony import */ var _ActiveFlag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ActiveFlag */ "./src/scripts/lib/nav-menu-app/ActiveFlag.js");
/* harmony import */ var _isLinkActive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./isLinkActive */ "./src/scripts/lib/nav-menu-app/isLinkActive.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










function TertiaryPage(_ref) {
  var navMenu = _ref.navMenu,
      onClose = _ref.onClose;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, !navMenu ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BackButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onClick: onClose
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavLink__WEBPACK_IMPORTED_MODULE_5__["default"], navMenu), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Rule__WEBPACK_IMPORTED_MODULE_4__["default"], null), !navMenu.links ? null : navMenu.links.map(function (link, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: index,
      className: "position-relative"
    }, !link.active ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ActiveFlag__WEBPACK_IMPORTED_MODULE_6__["default"], {
      className: "py-3 pl-2"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "btn btn-link",
      "data-category": link.dataCategory,
      "data-action": link.dataAction,
      "data-label": link.dataLabel,
      href: link.url
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "lead"
    }, link.title), !link.description ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "d-block pt-2 pl-3 pr-5"
    }, link.description)));
  })));
}

function SecondaryPage(_ref2) {
  var navMenu = _ref2.navMenu,
      onClose = _ref2.onClose;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(-1),
      _useState2 = _slicedToArray(_useState, 2),
      selectedIndex = _useState2[0],
      setSelectedIndex = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(selectedIndex >= 0),
      _useState4 = _slicedToArray(_useState3, 2),
      open = _useState4[0],
      setOpen = _useState4[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({
      'leaflet': true,
      'leaflet-open': open
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "leaflet-page"
  }, !navMenu ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BackButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onClick: onClose
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavLink__WEBPACK_IMPORTED_MODULE_5__["default"], navMenu), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Rule__WEBPACK_IMPORTED_MODULE_4__["default"], null), !navMenu.links ? null : navMenu.links.map(function (link, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: index,
      className: "position-relative"
    }, !Object(_isLinkActive__WEBPACK_IMPORTED_MODULE_7__["default"])(link) ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ActiveFlag__WEBPACK_IMPORTED_MODULE_6__["default"], {
      className: "py-3 pl-2"
    }), link.links && link.links.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "btn btn-link btn-block",
      onClick: function onClick() {
        setSelectedIndex(index);
        setOpen(true);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, link.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon__WEBPACK_IMPORTED_MODULE_3__["default"].CaretRight, null)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "btn btn-link btn-block",
      "data-category": link.dataCategory,
      "data-action": link.dataAction,
      "data-label": link.dataLabel,
      href: link.url
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, link.title)));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "leaflet-page"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TertiaryPage, {
    navMenu: selectedIndex < 0 ? null : navMenu.links[selectedIndex],
    onClose: function onClose() {
      return setOpen(false);
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(-1),
      _useState6 = _slicedToArray(_useState5, 2),
      selectedIndex = _useState6[0],
      setSelectedIndex = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(selectedIndex >= 0),
      _useState8 = _slicedToArray(_useState7, 2),
      open = _useState8[0],
      setOpen = _useState8[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({
      'leaflet': true,
      'leaflet-open': open
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "leaflet-page"
  }, props.navMenu.links.map(function (link, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: index,
      className: "bg-primary-grad position-relative"
    }, !Object(_isLinkActive__WEBPACK_IMPORTED_MODULE_7__["default"])(link) ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ActiveFlag__WEBPACK_IMPORTED_MODULE_6__["default"], {
      className: "py-4 pl-2"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "btn btn-link btn-block py-4",
      onClick: function onClick() {
        setSelectedIndex(index);
        setOpen(true);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "h5 mb-0 font-weight-black"
    }, link.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon__WEBPACK_IMPORTED_MODULE_3__["default"].CaretRight, null)));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "nav d-inline-flex d-md-none my-3"
  }, props.navMenu.quickLinks.map(function (link, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: i,
      className: "nav-item"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "nav-link",
      "data-category": link.dataCategory,
      "data-action": link.dataAction,
      href: link.url
    }, link.title));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "leaflet-page"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SecondaryPage, {
    navMenu: selectedIndex < 0 ? null : props.navMenu.links[selectedIndex],
    onClose: function onClose() {
      return setOpen(false);
    }
  })));
});

/***/ }),

/***/ "./src/scripts/lib/nav-menu-app/NavMenuMega.js":
/*!*****************************************************!*\
  !*** ./src/scripts/lib/nav-menu-app/NavMenuMega.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NavMenuMega; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _BackButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BackButton */ "./src/scripts/lib/nav-menu-app/BackButton.js");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Icon */ "./src/scripts/lib/nav-menu-app/Icon.js");
/* harmony import */ var _NavLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NavLink */ "./src/scripts/lib/nav-menu-app/NavLink.js");
/* harmony import */ var _ActiveFlag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ActiveFlag */ "./src/scripts/lib/nav-menu-app/ActiveFlag.js");
/* harmony import */ var _isLinkActive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./isLinkActive */ "./src/scripts/lib/nav-menu-app/isLinkActive.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









function Tertiary(_ref) {
  var headLink = _ref.headLink,
      links = _ref.links;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "p-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, !headLink ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavLink__WEBPACK_IMPORTED_MODULE_4__["default"], headLink), !headLink.description ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "mx-5"
  }, headLink.description)), !links ? null : links.map(function (link, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: i,
      className: "col-12 col-lg-6 position-relative"
    }, link.active ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ActiveFlag__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: "pl-2 pt-2 pt-lg-3"
    }) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "btn btn-link",
      "data-category": link.dataCategory,
      "data-action": link.dataAction,
      "data-label": link.dataLabel,
      href: link.url
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "lead"
    }, link.title), !link.description ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "d-block pt-2 pl-3 pr-5"
    }, link.description)));
  })));
}

function NavMenuMega(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(-1),
      _useState2 = _slicedToArray(_useState, 2),
      selectedPrimaryIndex = _useState2[0],
      setSelectedPrimaryIndex = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(-1),
      _useState4 = _slicedToArray(_useState3, 2),
      selectedSecondaryIndex = _useState4[0],
      setSelectedSecondaryIndex = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState6 = _slicedToArray(_useState5, 2),
      open = _useState6[0],
      setOpen = _useState6[1];

  var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (node) {
    var groups = node.querySelectorAll('.mega-secondary');
    Array.from(groups).forEach(function (group) {
      var backButton = group.querySelector('.back-btn');
      var subgroup = group.nextElementSibling;
      subgroup.addEventListener('focusout', function (event) {
        if (!subgroup.contains(event.relatedTarget) && !group.contains(event.relatedTarget)) {
          backButton.focus();
        }
      });
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    ref: ref,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({
      mega: true,
      active: open
    })
  }, props.navMenu.links.map(function (primaryLink, primaryIndex) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      key: primaryIndex
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({
        'mega-secondary': true,
        'active': primaryIndex === selectedPrimaryIndex
      })
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({
        'invisible': !open || primaryIndex !== selectedPrimaryIndex
      })
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BackButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
      onClick: function onClick() {
        return setOpen(false);
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavLink__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({
      className: "level-1"
    }, primaryLink)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "mega-rule text-secondary"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon__WEBPACK_IMPORTED_MODULE_3__["default"].Ring, null)), primaryLink.links.map(function (secondaryLink, secondaryIndex) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        key: secondaryIndex,
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({
          'position-relative': true,
          'mega-secondary-option': true,
          'mega-secondary-option-selected': open && selectedSecondaryIndex === secondaryIndex
        })
      }, Object(_isLinkActive__WEBPACK_IMPORTED_MODULE_6__["default"])(secondaryLink) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ActiveFlag__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: "pl-2 pt-2 pt-lg-3"
      }) : null, secondaryLink.links && secondaryLink.links.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "btn btn-link btn-block font-weight-bold",
        onClick: function onClick() {
          setSelectedPrimaryIndex(primaryIndex);
          setSelectedSecondaryIndex(secondaryIndex);
          setOpen(true);
        },
        "aria-controls": "tertiary-link-group-".concat(primaryIndex),
        "aria-expanded": open && selectedPrimaryIndex === primaryIndex && selectedSecondaryIndex === secondaryIndex ? 'true' : 'false'
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, secondaryLink.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon__WEBPACK_IMPORTED_MODULE_3__["default"].ChevronRight, null)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "btn btn-link btn-block font-weight-bold",
        "data-category": secondaryLink.dataCategory,
        "data-action": secondaryLink.dataAction,
        "data-label": secondaryLink.dataLabel,
        href: secondaryLink.url
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, secondaryLink.title)));
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "mega-tertiary",
      id: "tertiary-link-group-".concat(primaryIndex)
    }, selectedPrimaryIndex >= 0 && selectedSecondaryIndex >= 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tertiary, {
      headLink: props.navMenu.links[selectedPrimaryIndex].links[selectedSecondaryIndex],
      links: props.navMenu.links[selectedPrimaryIndex].links[selectedSecondaryIndex].links
    }) : null));
  }));
}
;

/***/ }),

/***/ "./src/scripts/lib/nav-menu-app/Rule.js":
/*!**********************************************!*\
  !*** ./src/scripts/lib/nav-menu-app/Rule.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Icon */ "./src/scripts/lib/nav-menu-app/Icon.js");


/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "leaflet-rule text-secondary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon__WEBPACK_IMPORTED_MODULE_1__["default"].Ring, null));
});

/***/ }),

/***/ "./src/scripts/lib/nav-menu-app/index.js":
/*!***********************************************!*\
  !*** ./src/scripts/lib/nav-menu-app/index.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _NavMenuApp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NavMenuApp */ "./src/scripts/lib/nav-menu-app/NavMenuApp.js");



var el = document.querySelector('#nav-menu .site-menu-content');
var data = window.NAV_MENU_DATA;

if (el && data) {
  react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavMenuApp__WEBPACK_IMPORTED_MODULE_2__["default"], {
    navMenu: data
  }), el);
}

/***/ }),

/***/ "./src/scripts/lib/nav-menu-app/isLinkActive.js":
/*!******************************************************!*\
  !*** ./src/scripts/lib/nav-menu-app/isLinkActive.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isLinkActive; });
function isLinkActive(link) {
  if (!link) {
    return false;
  }

  if (link.active) {
    return true;
  }

  if (link.links) {
    var activeSublink = link.links.find(function (sublink) {
      return isLinkActive(sublink);
    });

    if (activeSublink) {
      return true;
    }
  }

  return false;
}

/***/ }),

/***/ "./src/scripts/lib/nav-tab-scroll.js":
/*!*******************************************!*\
  !*** ./src/scripts/lib/nav-tab-scroll.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function ($) {
  $.fn.navTabScroll = function () {
    this.each(function (i, el) {
      var navTab = $(el);
      var selected = navTab.hasClass('active');

      if (selected) {
        scrollToNavTab(navTab, false);
      }
    });
    this.on('show.bs.tab', function (event) {
      var navTab = $(event.target);
      scrollToNavTab(navTab, true);
    });

    function scrollToNavTab(navTab, smooth) {
      var navItem = navTab.closest('.nav-item');
      var navTabs = navItem.closest('.nav-tabs');
      var listWidth = navTabs.width();
      var scrollLeft = navTabs.scrollLeft();
      var itemLeft = navItem.position().left + scrollLeft;
      var itemWidth = navItem.width();
      var scrollLeft2 = itemLeft + (itemWidth - listWidth) / 2;

      if (smooth) {
        navTabs.animate({
          scrollLeft: scrollLeft2
        }, {
          duration: 200
        });
      } else {
        navTabs.scrollLeft(scrollLeft2);
      }
    }
  };
})(jQuery);

/***/ }),

/***/ "./src/scripts/lib/site-menu-collapse.js":
/*!***********************************************!*\
  !*** ./src/scripts/lib/site-menu-collapse.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./focusable.js */ "./src/scripts/lib/focusable.js");

(function ($) {
  /**
   * Enables site menu functionality:
   * Focus site menu when shown
   * Return focus to opening button when site menu hides
   * Trap keyboard focus
   * Close on ESCAPE key
   *
   * @returns {jQuery}
   */
  $.fn.siteMenuCollapse = function () {
    this.each(function () {
      var siteMenu = $(this);
      var focusable = siteMenu.focusable();
      siteMenu.on('show.bs.collapse', function (event) {
        $(event.target).attr('aria-modal', 'true');
      });
      siteMenu.on('shown.bs.collapse', function (event) {
        if (siteMenu.attr('tabindex') === '0') {
          siteMenu[0].focus();
        } else if (focusable.length > 0) {
          focusable[0].focus();
        }
      });
      siteMenu.on('keyup', function (event) {
        if (event.key === 'Escape' || event.keyCode === 27) {
          siteMenu.collapse('hide');
        }
      });
      siteMenu.on('hide.bs.collapse', function (event) {
        $(event.target).attr('aria-modal', 'false');
      });
      siteMenu.on('hidden.bs.collapse', function (event) {
        var id = $(event.target).attr('id');

        if (id) {
          var controller = $("[aria-controls=\"".concat(id, "\"]"));

          if (controller.length > 0) {
            controller[0].focus();
          }
        }
      });
      focusable.on('focusout', function (event) {
        var focusReceiver = siteMenu.find(event.relatedTarget);

        if (focusReceiver.length === 0) {
          event.preventDefault();
          event.stopPropagation();
          event.target.focus();
        }
      });
    });
    return this;
  };
})(jQuery);

/***/ }),

/***/ "./src/scripts/lib/skip-navigation.js":
/*!********************************************!*\
  !*** ./src/scripts/lib/skip-navigation.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./focusable */ "./src/scripts/lib/focusable.js");

(function ($) {
  $.fn.skipNavigation = function () {
    var skip = $(this);
    var others = $('main').focusable();

    if (others.length <= 0) {
      skip.attr('disabled', true);
    } else {
      skip.on('click', function (event) {
        others.eq(0).focus();
      });
    }
  };
})(jQuery);

/***/ }),

/***/ "./src/scripts/lib/snap.js":
/*!*********************************!*\
  !*** ./src/scripts/lib/snap.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function ($) {
  $.fn.snap = function () {
    var scrollDuration = 300;
    $(this).each(function (i, node) {
      var el = $(node);
      var list = el.find('.snap-list');
      var prev = el.find('.snap-prev');
      var next = el.find('.snap-next');
      var items = list.find('.snap-item');
      var autoscrolling = false;
      var timeoutId;
      updateNavigation();
      prev.on('click', function (event) {
        if (!autoscrolling) {
          var n = getSnapIndex() - 1;

          if (n >= 0) {
            setSnapIndex(n);
          }
        }
      });
      next.on('click', function (event) {
        if (!autoscrolling) {
          var n = getSnapIndex() + 1;
          var max = maxSnapIndex();

          if (n <= max) {
            setSnapIndex(n);
          }
        }
      });
      list.on('scroll', function (event) {
        if (timeoutId) {
          clearTimeout(timeoutId);
        }

        timeoutId = setTimeout(function () {
          updateNavigation();
        }, 100);
      });

      function setSnapIndex(index) {
        var item = items.eq(index);

        if (item.length > 0) {
          var listLeft = list[0].getBoundingClientRect().left;
          var itemLeft = item[0].getBoundingClientRect().left;
          var itemRelativeLeft = itemLeft - listLeft;
          scrollList("+=".concat(itemRelativeLeft));
        }
      }

      function scrollList(scrollLeft) {
        autoscrolling = true;
        list.animate({
          scrollLeft: scrollLeft
        }, scrollDuration, function () {
          autoscrolling = false;
        });
      }

      function updateNavigation() {
        var index = getSnapIndex();
        var max = maxSnapIndex();
        prev.attr('disabled', index <= 0);
        next.attr('disabled', index >= max);
      }

      function getSnapIndex() {
        var listLeft = list[0].getBoundingClientRect().left;
        var itemOffsets = Array.from(items.map(function (i, node) {
          var itemLeft = node.getBoundingClientRect().left;
          return Math.abs(itemLeft - listLeft);
        }));
        var minItemOffset = Math.min.apply(null, itemOffsets);
        var index = itemOffsets.indexOf(minItemOffset);
        return index;
      }

      function maxSnapIndex() {
        var listWidth = list[0].getBoundingClientRect().width;
        var scrollWidth = list[0].scrollWidth;
        var scrollLeft = list[0].scrollLeft;

        for (var k = items.length - 1; k >= 0; k--) {
          var itemLeft = items[k].getBoundingClientRect().left;
          var itemScrollDistance = scrollWidth - scrollLeft - itemLeft;

          if (Math.floor(itemScrollDistance) > listWidth) {
            return k + 1;
          }
        }

        return 0;
      }
    });
  };
})(jQuery);

/***/ }),

/***/ "./src/scripts/lib/state-map.js":
/*!**************************************!*\
  !*** ./src/scripts/lib/state-map.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function ($) {
  $.fn.stateMap = function (options) {
    var _this = this;

    // parse options
    if (!options) {
      options = {};
    }

    var select = $(options.select); // initialize select

    if (select.length > 0) {
      this.find('.option').each(function (i, el) {
        var option = $(el);
        var id = el.id;
        var title = option.find('title').text(); //handle dropdown selection depending on querystring

        var urlParams = new URLSearchParams(location.search);

        if (urlParams.has('state')) // true
          {
            var state = urlParams.get('state');
          }

        if (state != null && id == state) {
          select.append("<option value=\"".concat(id, "\"  selected >").concat(title, "</option>"));
          select.focus();
        } else {
          select.append("<option value=\"".concat(id, "\">").concat(title, "</option>"));
        }
      });
    } // handle select changes


    select.on('change', function (event) {
      var id = scrubStateId(select.val());

      _this.find('.option.active').removeClass('active');

      if (id) {
        _this.find('.option#' + id).addClass('active');
      }
    }); // handle map clicks

    this.find('.option').on('click', function (event) {
      _this.find('.option.active').removeClass('active');

      var id = scrubStateId(event.target.id);
      var target = $(event.target);
      target.addClass('active');
      select.val(id);
      select.focus();
    });
  };

  function scrubStateId(id) {
    return String(id).replace(/\W/, '');
  }
})(jQuery);

/***/ }),

/***/ "./src/scripts/lib/warn-msie-win10.js":
/*!********************************************!*\
  !*** ./src/scripts/lib/warn-msie-win10.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var detect = __webpack_require__(/*! ./detect */ "./src/scripts/lib/detect.js");

(function ($) {
  $.fn.warnMSIEWin10 = function () {
    if (detect.ie() && detect.windows() === 10) {
      console.log('detected MSIE on Windows 10');
      return this.modal('show');
    } else {
      return this;
    }
  };
})(jQuery);

/***/ }),

/***/ "./src/scripts/lib/warn-msie-win7.js":
/*!*******************************************!*\
  !*** ./src/scripts/lib/warn-msie-win7.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var detect = __webpack_require__(/*! ./detect */ "./src/scripts/lib/detect.js");

(function ($) {
  $.fn.warnMSIEWin7 = function () {
    if (detect.ie() && detect.windows() === true) {
      console.log('detected MSIE on Windows 7');
      return this.modal('show');
    } else {
      return this;
    }
  };
})(jQuery);

/***/ }),

/***/ "./src/scripts/main.js":
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Design system scripted functionality.
__webpack_require__(/*! @babel/polyfill */ "./node_modules/@babel/polyfill/lib/index.js");

__webpack_require__(/*! ./lib/ajax-form */ "./src/scripts/lib/ajax-form.js");

__webpack_require__(/*! ./lib/animate-group.js */ "./src/scripts/lib/animate-group.js");

__webpack_require__(/*! ./lib/content-selector */ "./src/scripts/lib/content-selector.js");

__webpack_require__(/*! ./lib/form-envoy.js */ "./src/scripts/lib/form-envoy.js");

__webpack_require__(/*! ./lib/form-hint */ "./src/scripts/lib/form-hint.js");

__webpack_require__(/*! ./lib/list-editor */ "./src/scripts/lib/list-editor.js");

__webpack_require__(/*! ./lib/nav-menu-app */ "./src/scripts/lib/nav-menu-app/index.js");

__webpack_require__(/*! ./lib/nav-tab-scroll */ "./src/scripts/lib/nav-tab-scroll.js");

__webpack_require__(/*! ./lib/site-menu-collapse.js */ "./src/scripts/lib/site-menu-collapse.js");

__webpack_require__(/*! ./lib/skip-navigation */ "./src/scripts/lib/skip-navigation.js");

__webpack_require__(/*! ./lib/snap */ "./src/scripts/lib/snap.js");

__webpack_require__(/*! ./lib/state-map */ "./src/scripts/lib/state-map.js");

__webpack_require__(/*! ./lib/warn-msie-win10.js */ "./src/scripts/lib/warn-msie-win10.js");

__webpack_require__(/*! ./lib/warn-msie-win7.js */ "./src/scripts/lib/warn-msie-win7.js");

(function ($) {
  $('[data-toggle="tooltip"]').tooltip();
  $('.animation-group').animateGroup();
  $('.form-envoy').formEnvoy();
  $('.form-hint[data-toggle!="tooltip"]').formHint();
  $('form').listEditor();
  $('.nav-tabs .nav-link').navTabScroll(); //$('form[data-ajax]').ajaxForm();

  $('.site-menu.collapse').siteMenuCollapse();
  $('.skip-nav').skipNavigation();
  $('.snap-container').snap();
  $('.state-map').stateMap({
    select: '#state-selector'
  });
  $('.msie-win7-warning-modal').warnMSIEWin7();
  $('.msie-win10-warning-modal').warnMSIEWin10();
})(jQuery);

/***/ })

/******/ });
//# sourceMappingURL=main.js.map