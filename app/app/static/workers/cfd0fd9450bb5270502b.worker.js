/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/diagram/recorder.worker.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/diagram/recorder.worker.js":
/*!*******************************************!*\
  !*** ./src/js/diagram/recorder.worker.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tools_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tools/tools */ "./src/js/tools/tools.js");
// @flow


// declare var self: DedicatedWorkerGlobalScope;

let cache = new _tools_tools__WEBPACK_IMPORTED_MODULE_0__["ObjectTracker"]();

// onmessage = (event: MessageEvent) => {
addEventListener("message", (event) => {
  const { message, payload } = event.data;
  if (message === 'reset') {
    // resetCache(payload.baseReference, payload.references)
    cache = new _tools_tools__WEBPACK_IMPORTED_MODULE_0__["ObjectTracker"]();
    cache.baseReference = payload.baseReference;
    cache.references = payload.references;
  } else if (message === 'get') {
    postMessage({
      message: 'cache',
      payload: {
        baseReferece: cache.baseReference,
        references: cache.references,
        diffs: cache.diffs,
      },
    });
  } else if (message === 'add') {
    // add(payload.now, payload.state, payload.reference, payload.lastRecordTimeCount);
    cache.add(payload.now, payload.state, payload.reference, payload.lastRecordTimeCount);
    // postMessage({
    //   message: 'cacheDuration',
    //   duration: cache.diffs[cache.diffs.length - 1],
    // });
  } else if (message === 'addReferece') {
    cache.addReference(payload.state, payload.refName, payload.basedOn);
  }
  // console.log('worker', event.data);
  // postMessage(`From Worker: ${event.data[0] + 2 * event.data[1]}`)
});

// function resetCache(baseReference: Object, references: Object) {
//   cache = new ObjectTracker();
//   cache.baseReference = baseReference;
//   cache.references = references;
// }

// function add(now: number, state: Object, reference: string, lastRecordTimeCount: number) {
//   cache.add(now, state, reference, lastRecordTimeCount);
//   postMessage({
//     message: 'cacheDuration',
//     duration: cache.diffs[cache.diffs.length - 1],
//   })
// }


/***/ }),

/***/ "./src/js/tools/math.js":
/*!******************************!*\
  !*** ./src/js/tools/math.js ***!
  \******************************/
/*! exports provided: round, roundNum, decelerate, easeinout, easeout, easein, sinusoid, linear, clipMag, clipValue, range, randInt, rand, randElement, removeRandElement, randElements, rand2D, randSign */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "round", function() { return round; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roundNum", function() { return roundNum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decelerate", function() { return decelerate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeinout", function() { return easeinout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeout", function() { return easeout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easein", function() { return easein; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sinusoid", function() { return sinusoid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linear", function() { return linear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clipMag", function() { return clipMag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clipValue", function() { return clipValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "range", function() { return range; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randInt", function() { return randInt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rand", function() { return rand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randElement", function() { return randElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeRandElement", function() { return removeRandElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randElements", function() { return randElements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rand2D", function() { return rand2D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randSign", function() { return randSign; });
var roundNum = function roundNum(value) {
  var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;
  var multiplier = Math.pow(10, precision);
  var result = Math.round(value * multiplier) / multiplier; // if (Object.is(result, -0)) {
  // if (result === -0) {
  //   result = 0;
  // }

  var objectIsPolyfill = function objectIsPolyfill(x, y) {
    if (x === y) {
      // 0 === -0, but they are not identical
      return x !== 0 || 1 / x === 1 / y;
    } // NaN !== NaN, but they are identical.
    // NaNs are the only non-reflexive value, i.e., if x !== x,
    // then x is a NaN.
    // isNaN is broken: it converts its argument to number, so
    // isNaN("foo") => true
    // eslint-disable-next-line no-self-compare


    return x !== x && y !== y;
  };

  if (objectIsPolyfill(result, -0)) {
    result = 0;
  } // if (result === -0) {
  //   // 0 === -0, but they are not identical
  //   return result !== 0 || 1 / x === 1 / y;
  // }


  return result;
};

/**
 * Rounds a number or numbers in an array
 * @method
 * @param {number | Array<number>} arrayOrValue - Value or array of values to be rounded
 * @param {number} precision - Number of decimal places to round to
 * @returns {number | Array<number>} Rounded value or array of values
 */
function round(arrayOrValue) {
  var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;
  var result = 0;

  if (Array.isArray(arrayOrValue)) {
    return arrayOrValue.map(function (elem) {
      return round(elem, precision);
    });
  }

  if (typeof arrayOrValue === 'number') {
    result = roundNum(arrayOrValue, precision);
  } else if (arrayOrValue != null && arrayOrValue.round != null) {
    result = arrayOrValue.round(precision);
  } // $FlowFixMe


  return result;
} // // clipValue clips a value to either 0 if it's small enough, or to a max value
// // Value, and maxValue are sign independent. e.g.
// //    * value, maxValue = 2, 1 => clips to 1
// //    * value, maxValue = -2, -1 => clips to -1
// //    * value, maxValue = -2, 1 => clips to -1
// //    * value, maxValue = 2, -1 => clips to 1
// function clipValue(
//   value: number,
//   zeroThreshold: number,
//   maxValue: number = 0,
// ) {
//   let result = value;
//   let zero = zeroThreshold;
//   if (zero < 0) {
//     zero = -zero;
//   }
//   if (value > -zero && value < zero) {
//     return 0;
//   }
//   let max = maxValue;
//   if (max < 0) {
//     max = -max;
//   }
//   if (value > max) {
//     result = max;
//   }
//   if (value < -max) {
//     result = -max;
//   }
//   return result;
// }
// Clip a value to either max velocity, or 0 once under the minimum
// threashold.
//  * velocity: can be positive or negative
//  * maxVelocity will clip velocity to:
//      * |maxVelocity| if velocity > 0
//      * -|maxVelocity| if velcity < 0
//  * zeroThreshold will clip velocity to:
//       * 0 if velocity is larger than -|zeroThreshold| and smaller than
//         |zeroThreshold|.


function clipMag(value, zeroThreshold, maxValue) {
  var result = value;
  var zeroT = zeroThreshold;
  var maxV = maxValue;

  if (zeroT === null) {
    zeroT = 0;
  }

  if (zeroT < 0) {
    zeroT = -zeroT;
  }

  if (maxV === null) {
    return result;
  }

  if (maxV < 0) {
    maxV = -maxV;
  }

  if (value >= -zeroT && value <= zeroT) {
    result = 0;
  }

  if (value > maxV) {
    result = maxV;
  }

  if (value < -maxV) {
    result = -maxV;
  }

  return result;
}

function clipValue(value, minValue, maxValue) {
  var clipped = value;

  if (minValue !== null) {
    if (value < minValue) {
      clipped = minValue;
    }
  }

  if (maxValue !== null) {
    if (value > maxValue) {
      clipped = maxValue;
    }
  }

  return clipped;
}

var decelerate = function getPositionVelocityFromDecAndTime(position, velocity, magDeceleration, time, zeroThreshold) {
  var zeroT = 0;

  if (zeroThreshold !== null) {
    zeroT = zeroThreshold;
  }

  var decel = 0;

  if (magDeceleration !== null) {
    decel = magDeceleration;
  } // If the velocity is currently 0, then no further deceleration can occur, so
  // return the current velocity and position


  var v = clipMag(velocity, zeroT, velocity);

  if (v === 0) {
    return {
      p: position,
      v: 0
    };
  }

  var d = decel;

  if (decel < 0) {
    d = -d;
  } // If there is some initial velocity, then calc its sign and


  var sign = velocity / Math.abs(velocity);
  var newVelocity = velocity - sign * d * time; // if the new velocity changes sign, then it should go to 0. If it doesn't
  // change sign, then clip incase it should go to 0 because it is below
  // the zero velocity threshold.

  var newSign = newVelocity / Math.abs(newVelocity);

  if (newSign !== sign) {
    newVelocity = 0;
  } else {
    newVelocity = clipMag(newVelocity, zeroT, newVelocity);
  } // If the new velocity is clipped, then we need to use the time to where the
  // velocity crosses the clipping point.
  // v_new = v_init + a*t
  // Therefore, if v_new = zeroT: t = (zeroT - vi)/a


  var t = time;

  if (newVelocity === 0) {
    var z = zeroT;
    var zSign = z / Math.abs(z);

    if (zSign !== sign) {
      z = -z;
    }

    t = Math.abs((z - velocity) / d);
  } // Now can calculate the new position


  var newPosition = position + velocity * t - sign * 0.5 * d * t * t;
  return {
    p: newPosition,
    v: newVelocity
  };
};

var linear = function linear(percentTime) {
  var invert = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (invert) {
    return percentTime;
  }

  return percentTime;
};

var easeinout = function easeinout(percentTime) {
  var invert = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (invert) {
    if (percentTime === 0.5) {
      return 0.5;
    }

    var a = percentTime;
    return (2 * a - Math.sqrt(-4 * a * a + 4 * a)) / (4 * a - 2);
  }

  var x = percentTime;
  var percentDistance = Math.pow(x, 2) / (Math.pow(x, 2) + Math.pow(1 - x, 2));
  return percentDistance;
};

function easeout(percentTime) {
  var invert = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (invert) {
    if (percentTime === 0) {
      return 0;
    }

    var a = percentTime / 2 + 0.5;
    var b = (2 * a - Math.sqrt(-4 * a * a + 4 * a)) / (4 * a - 2);
    return (b - 0.5) * 2;
  }

  var x = 0.5 + percentTime / 2;
  var power = 2;
  var percentDistance = Math.pow(x, power) / (Math.pow(x, power) + Math.pow(1 - x, power));
  return (percentDistance - 0.5) * 2;
}

function easein(percentTime) {
  var invert = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (invert) {
    if (percentTime === 1) {
      return 1;
    }

    var a = percentTime / 2;
    var b = (2 * a - Math.sqrt(-4 * a * a + 4 * a)) / (4 * a - 2);
    return b * 2;
  }

  var x = percentTime / 2;
  var power = 2;
  var percentDistance = Math.pow(x, power) / (Math.pow(x, power) + Math.pow(1 - x, power));
  return percentDistance * 2;
}

function sinusoid() {
  var deltaTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var frequency = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var bias = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var mag = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
  var phaseOffset = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
  return bias + mag * Math.sin(deltaTime * frequency * 2.0 * Math.PI + phaseOffset);
} // const animationPhase = (transform, time, rotDirection = 0, animationStyle = easeinout) => {
//     return {
//         transform: transform._dup(),
//         time: time,
//         rotDirection: rotDirection,
//         animationStyle: animationStyle,
//     }
// }

/**
 * Creates an array with a range of number
 * @method
 * @memberof tools
 * @param start - Range start
 * @param stop - Range stop
 * @param step - Range step
 * @returns {Array<number>} Range of numbers in an array
 */


function range(start, stop) {
  var step = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var out = [];

  for (var i = start; i <= stop + step * 0.5; i += step) {
    out.push(i);
  }

  return out;
}

function randSign() {
  return Math.random() > 0.5 ? 1 : -1;
}

function randInt(minOrMax) {
  var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var plusOrMinus = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var r = 0;

  if (max != null) {
    var min = minOrMax;
    r = Math.floor(Math.random() * Math.floor(max - min) + Math.floor(min));
  } else {
    r = Math.floor(Math.random() * Math.floor(minOrMax));
  }

  if (plusOrMinus) {
    r *= randSign();
  }

  return r;
}

function rand(minOrMax) {
  var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var plusOrMinus = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var r = 0;

  if (max != null) {
    var min = minOrMax;
    r = Math.random() * (max - min) + min;
  } else {
    r = Math.random() * minOrMax;
  }

  if (plusOrMinus) {
    r *= randSign();
  }

  return r;
}

function randElement(inputArray) {
  var index = randInt(inputArray.length);
  return inputArray[index];
}

function removeRandElement(inputArray) {
  var index = rand(inputArray.length);
  return inputArray.splice(index, 1)[0];
}

function randElements(num, inputArray) {
  var possibleIndeces = range(0, inputArray.length - 1, 1);
  var elements = [];

  for (var i = 0; i < num; i += 1) {
    var index = removeRandElement(possibleIndeces);
    elements.push(inputArray[index]);
  }

  return elements;
}

function rand2D(minX, minY, maxX, maxY) {
  return {
    x: rand(minX, maxX),
    y: rand(minY, maxY)
  };
}



/***/ }),

/***/ "./src/js/tools/tools.js":
/*!*******************************!*\
  !*** ./src/js/tools/tools.js ***!
  \*******************************/
/*! exports provided: diffPathsToObj, diffObjToPaths, Console, classify, extractFrom, ObjectKeyPointer, getElement, addToObject, duplicateFromTo, isTouchDevice, generateUniqueId, joinObjects, cleanUIDs, loadRemote, loadRemoteCSS, deleteKeys, copyKeysFromTo, generateRandomString, duplicate, assignObjectFromTo, joinObjectsWithOptions, objectToPaths, getObjectDiff, updateObjFromPath, pathsToObj, UniqueMap, compressObject, refAndDiffToObject, uncompressObject, unminify, minify, ObjectTracker, download */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "diffPathsToObj", function() { return diffPathsToObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "diffObjToPaths", function() { return diffObjToPaths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Console", function() { return Console; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "classify", function() { return classify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractFrom", function() { return extractFrom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectKeyPointer", function() { return ObjectKeyPointer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getElement", function() { return getElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToObject", function() { return addToObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "duplicateFromTo", function() { return duplicateFromTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTouchDevice", function() { return isTouchDevice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateUniqueId", function() { return generateUniqueId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "joinObjects", function() { return joinObjects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cleanUIDs", function() { return cleanUIDs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadRemote", function() { return loadRemote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadRemoteCSS", function() { return loadRemoteCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteKeys", function() { return deleteKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyKeysFromTo", function() { return copyKeysFromTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateRandomString", function() { return generateRandomString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "duplicate", function() { return duplicate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assignObjectFromTo", function() { return assignObjectFromTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "joinObjectsWithOptions", function() { return joinObjectsWithOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objectToPaths", function() { return objectToPaths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getObjectDiff", function() { return getObjectDiff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateObjFromPath", function() { return updateObjFromPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pathsToObj", function() { return pathsToObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniqueMap", function() { return UniqueMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compressObject", function() { return compressObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "refAndDiffToObject", function() { return refAndDiffToObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uncompressObject", function() { return uncompressObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unminify", function() { return unminify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minify", function() { return minify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectTracker", function() { return ObjectTracker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "download", function() { return download; });
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math */ "./src/js/tools/math.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

 // import Worker from '../diagram/recorder.worker.js';

var Console = function Console(text) {
  console.log(text); // eslint-disable-line no-console
}; // function add(a: number, b: number): number {
//   return a + b;
// }
// function mulToString(a: number, b: number): string {
//   return (a * b).toString();
// }
// const divide = (a: number, b: number): number => a / b;


var classify = function classify(key, value) {
  var nonEmpty = value || key;
  var withKey = nonEmpty[0] === '-' || nonEmpty.startsWith("".concat(key, "-")) ? "".concat(key, " ").concat(nonEmpty) : nonEmpty;
  var joinStr = " ".concat(key, "-");
  return "".concat(withKey.split(' -').join(joinStr));
};

var ObjectKeyPointer = /*#__PURE__*/function () {
  function ObjectKeyPointer(object, key) {
    _classCallCheck(this, ObjectKeyPointer);

    this.object = object;
    this.key = '';

    if (key in object) {
      this.key = key;
    }
  }

  _createClass(ObjectKeyPointer, [{
    key: "setValue",
    value: function setValue(value) {
      if (this.key) {
        this.object[this.key] = value;
      }
    }
  }, {
    key: "execute",
    value: function execute() {
      if (this.key) {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return this.object[this.key].apply(null, args);
      }

      return undefined;
    }
  }, {
    key: "value",
    value: function value() {
      if (this.key) {
        return this.object[this.key];
      }

      return undefined;
    }
  }]);

  return ObjectKeyPointer;
}(); //


function extractFrom(objectToExtractFrom, keyValues) {
  var keyPrefix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var out = [];

  if (typeof keyValues === 'string') {
    if (keyPrefix + keyValues in objectToExtractFrom) {
      return new ObjectKeyPointer(objectToExtractFrom, keyPrefix + keyValues);
    }

    var keyHeirarchy = keyValues.split('_');
    var keys = keyHeirarchy.filter(function (k) {
      return k.length > 0;
    });

    if (keys.length > 1) {
      if (keyPrefix + keys[0] in objectToExtractFrom) {
        return extractFrom(objectToExtractFrom[keyPrefix + keys[0]], keys.slice(1).join('_'), keyPrefix);
      }
    } else if (keys.length === 1) {
      if (keyPrefix + keys[0] in objectToExtractFrom) {
        return new ObjectKeyPointer(objectToExtractFrom, keyPrefix + keys[0]);
      }
    }

    return undefined;
  }

  if (Array.isArray(keyValues)) {
    keyValues.forEach(function (kv) {
      var result = extractFrom(objectToExtractFrom, kv, keyPrefix);

      if (result !== undefined) {
        out.push(result);
      }
    });
  } else {
    Object.keys(keyValues).forEach(function (key) {
      if (keyPrefix + key in objectToExtractFrom) {
        out.push({
          obj: new ObjectKeyPointer(objectToExtractFrom, keyPrefix + key),
          // $FlowFixMe
          value: keyValues[key]
        });
      }
    });
  }

  return out;
}

function getElement(collection, keyValues) {
  return extractFrom(collection, keyValues, '_');
}

function addToObject(obj, nameToAdd, valueToAdd) {
  var splitStr = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '-';
  var levels = nameToAdd.split(splitStr);
  var currentLevel = obj;
  levels.forEach(function (level, index) {
    if (index === levels.length - 1) {
      currentLevel[level] = valueToAdd;
      return;
    }

    if (!Object.prototype.hasOwnProperty.call(currentLevel, level)) {
      currentLevel[level] = {};
    }

    currentLevel = currentLevel[level];
  });
} // function duplicateFromTo(
//   fromObject: Object,
//   toObject: Object,
//   exceptKeys: Array<string> = [],
// ) {
//   const copyValue = (value) => {
//     if (typeof value === 'number'
//         || typeof value === 'boolean'
//         || typeof value === 'string'
//         || value == null
//         || typeof value === 'function') {
//       return value;
//     }
//     if (typeof value._dup === 'function') {
//       return value._dup();
//     }
//     if (Array.isArray(value)) {
//       const arrayCopy = [];
//       value.forEach(arrayElement => arrayCopy.push(copyValue(arrayElement)));
//       return arrayCopy;
//     }
//     if (typeof value === 'object') {
//       const objectCopy = {};
//       Object.keys(value).forEach((key) => {
//         const v = copyValue(value[key]);
//         objectCopy[key] = v;
//       });
//       return objectCopy;
//     }
//     return value;
//   };
//   Object.keys(fromObject).forEach((key) => {
//     if (exceptKeys.indexOf(key) === -1) {
//       // eslint-disable-next-line no-param-reassign
//       toObject[key] = copyValue(fromObject[key]);
//     }
//   });
// }


function duplicate(value) {
  if (typeof value === 'number' || typeof value === 'boolean' || typeof value === 'string' || value == null || value === NaN || typeof value === 'function') {
    return value;
  }

  if (typeof value._dup === 'function') {
    return value._dup();
  }

  if (Array.isArray(value)) {
    var arrayDup = [];
    value.forEach(function (arrayElement) {
      return arrayDup.push(duplicate(arrayElement));
    });
    return arrayDup;
  } // if (typeof value === 'object') {


  var objectDup = {};
  Object.keys(value).forEach(function (key) {
    var v = duplicate(value[key]);
    objectDup[key] = v;
  });
  return objectDup; // }
  // return value;
}

function assignObjectFromTo(fromObject, toObject) {
  var exceptIn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var duplicateValues = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var parentPath = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';
  var except = typeof exceptIn === 'string' ? [exceptIn] : exceptIn;
  Object.keys(fromObject).forEach(function (key) {
    var keyPath = parentPath !== '' ? "".concat(parentPath, ".").concat(key) : key;

    if (except.indexOf(keyPath) !== -1) {
      return;
    }

    var value = fromObject[key];

    if (_typeof(value) === 'object' && value != null && value._assignAsLinkOnly) {
      // eslint-disable-next-line no-param-reassign
      toObject[key] = fromObject[key];
      return;
    }

    if (typeof value === 'number' || typeof value === 'boolean' || typeof value === 'string' || value == null || typeof value === 'function' || typeof value._dup === 'function' || Array.isArray(value)) {
      // Only assign the value if:
      //    * Value is not undefined OR
      //    * Value is undefined and toObject[key] is undefined
      if (value !== undefined || toObject[key] === undefined) {
        if (duplicateValues) {
          // eslint-disable-next-line no-param-reassign
          toObject[key] = duplicate(value);
        } else {
          // eslint-disable-next-line no-param-reassign
          toObject[key] = value;
        }
      }
    } else {
      // If the fromObject[key] value is an object, but the toObject[key] value
      // is not an object, but then make toObject[key] an empty object
      var toValue = toObject[key];

      if (typeof toValue === 'number' || typeof toValue === 'boolean' || typeof toValue === 'string' || toValue == null || typeof toValue === 'function' || Array.isArray(toValue)) {
        // eslint-disable-next-line no-param-reassign
        toObject[key] = {};
      }

      assignObjectFromTo(value, toObject[key], except, duplicateValues, keyPath);
    }
  });
}

function joinObjectsWithOptions(options) {
  var except = options.except;
  var dup = options.duplicate;

  if (except == null) {
    except = [];
  }

  if (dup == null) {
    dup = false;
  }

  var num = arguments.length <= 1 ? 0 : arguments.length - 1;
  var out = arguments.length <= 1 ? undefined : arguments[1];

  for (var i = 1; i < num; i += 1) {
    var o = i + 1 < 1 || arguments.length <= i + 1 ? undefined : arguments[i + 1];

    if (o != null) {
      assignObjectFromTo(o, out, except, dup, '');
    }
  }

  return out;
} // joins objects like object.assign but goes as many levels deep as the object
// is. Objects later in the arrawy overwrite objects earlier.


function joinObjects() {
  for (var _len2 = arguments.length, objects = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    objects[_key2] = arguments[_key2];
  }

  return joinObjectsWithOptions.apply(void 0, [{}].concat(objects));
}

function duplicateFromTo(fromObject, toObject) {
  var exceptKeys = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  joinObjectsWithOptions({
    except: exceptKeys,
    duplicate: true
  }, toObject, fromObject);
}

function generateUniqueId() {
  var seed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  var randomString = function randomString(s) {
    return "".concat(s).concat(Math.floor(Math.random() * 1000000));
  };

  var seedToUse = seed;

  if (seedToUse.length === 0) {
    seedToUse = 'id_random_';
  }

  var idExists = true;
  var newId = randomString(seedToUse);

  while (idExists) {
    newId = randomString(seedToUse);
    var element = document.getElementById(newId);

    if (element == null) {
      idExists = false;
    }
  }

  return newId;
}

function isTouchDevice() {
  var prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');

  var mq = function mq(query) {
    return window.matchMedia(query).matches;
  };
  /* eslint-disable no-undef, no-mixed-operators */
  // $FlowFixMe


  if ('ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch) {
    return true;
  }
  /* eslint-enable no-undef, no-mixed-operators */
  // include the 'heartz' as a way to have a non matching MQ to help terminate the join
  // https://git.io/vznFH


  var query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
  return mq(query);
}

function loadRemote(scriptId, url) {
  var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var existingScript = document.getElementById(scriptId);

  if (!existingScript) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    script.id = scriptId; // e.g., googleMaps or stripe

    if (document.body) {
      document.body.appendChild(script);
    }

    script.onload = function () {
      if (callback != null) {
        callback(scriptId, url);
      }
    };
  } else if (callback != null) {
    callback(scriptId, url);
  }
}

function loadRemoteCSS(id, url) {
  var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var existingScript = document.getElementById(id);

  if (!existingScript) {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = url;
    link.id = id; // e.g., googleMaps or stripe

    if (document.body) {
      document.body.appendChild(link);
    }

    link.onload = function () {
      if (callback != null) {
        callback(id, url);
      }
    };
  } else if (callback != null) {
    callback(id, url);
  }
} // function remoteLoadToObject(
//   scriptId: string,
//   url: string,
//   toObject: {},
//   callback: null | (string, string) => void = null,
// ) {
//   loadRemote(scriptId, url, callback);
// }


var cleanUIDs = function cleanUIDs(objectToClean) {
  var genericUID = '0000000000';

  if (objectToClean == null) {
    return;
  }

  if ('uid' in objectToClean) {
    if (objectToClean.uid === genericUID) {
      return;
    } // eslint-disable-next-line no-param-reassign


    objectToClean.uid = genericUID;
  }

  var keys = Object.keys(objectToClean);

  for (var i = 0; i < keys.length; i += 1) {
    var key = keys[i];
    var value = objectToClean[key];

    if (_typeof(value) === 'object' && !Array.isArray(value) && value != null && typeof value !== 'function' && typeof value !== 'number' && typeof value !== 'boolean' && typeof value !== 'string') {
      cleanUIDs(value);
    }
  }
};

function deleteKeys(obj, keys) {
  keys.forEach(function (key) {
    if (obj[key] !== undefined) {
      // eslint-disable-next-line no-param-reassign
      delete obj[key];
    }
  });
}

function copyKeysFromTo(source, destination, keys) {
  keys.forEach(function (key) {
    if (source[key] !== undefined) {
      // eslint-disable-next-line no-param-reassign
      destination[key] = source[key];
    }
  });
}

function generateRandomString() {
  return (Math.random() * 1e18).toString(36);
}

var UniqueMap = /*#__PURE__*/function () {
  function UniqueMap() {
    _classCallCheck(this, UniqueMap);

    this.map = {};
    this.index = 1;
    this.inverseMap = {};
    this.letters = '0abcdefghijklmnopqrstuvwxz';
    this.undefinedCode = '.a';
  }

  _createClass(UniqueMap, [{
    key: "reset",
    value: function reset() {
      this.index = 1;
      this.map = {};
    }
  }, {
    key: "add",
    value: function add(pathStr) {
      if (this.map[pathStr] != null) {
        return this.map[pathStr];
      }

      var unique = this.getNextUniqueString();
      this.map[pathStr] = unique;
      return unique;
    }
  }, {
    key: "getNextUniqueString",
    value: function getNextUniqueString() {
      if (this.index === 0) {
        return 'a';
      }

      var order = Math.floor(Math.log(this.index) / Math.log(this.letters.length));
      var remainder = this.index;
      var out = '';

      for (var i = order; i >= 0; i -= 1) {
        var factor = Math.floor(remainder / Math.pow(this.letters.length, i));
        remainder -= factor * Math.pow(this.letters.length, i);
        out = "".concat(out).concat(this.letters[factor]);
      }

      this.index += 1;
      return out;
    }
  }, {
    key: "makeInverseMap",
    value: function makeInverseMap() {
      var _this = this;

      this.inverseMap = {};
      Object.keys(this.map).forEach(function (key) {
        var uniqueStr = _this.map[key];
        _this.inverseMap[uniqueStr] = key;
      });
    }
  }, {
    key: "get",
    value: function get(uniqueStr) {
      if (uniqueStr === this.undefinedCode) {
        return undefined;
      }

      if (this.inverseMap[uniqueStr] != null) {
        return this.inverseMap[uniqueStr];
      }

      return uniqueStr;
    }
  }]);

  return UniqueMap;
}();

function compressObject(obj, map) {
  var keys = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var strValues = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  var precision = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
  var uncompress = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;

  if (typeof obj === 'string') {
    // if (obj === 'do') {
    //   console.log(obj, strValues, uncompress, map.get(obj))
    // }
    if (strValues && uncompress) {
      return map.get(obj);
    }

    if (strValues) {
      return map.add(obj);
    }

    return obj;
  }

  if (typeof obj === 'number') {
    if (precision === null || uncompress) {
      return obj;
    }

    return Object(_math__WEBPACK_IMPORTED_MODULE_0__["roundNum"])(obj, precision);
  }

  if (typeof obj === 'boolean' || typeof obj === 'function' || obj === null) {
    return obj;
  }

  if (obj === undefined) {
    return map.undefinedCode;
  }

  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i += 1) {
      obj[i] = compressObject(obj[i], map, keys, strValues, precision, uncompress);
    }

    return obj;
  }

  if (_typeof(obj) === 'object') {
    var objKeys = Object.keys(obj);
    var obj2 = {};

    for (var _i = 0; _i < objKeys.length; _i += 1) {
      var k = objKeys[_i];
      obj[k] = compressObject(obj[k], map, keys, strValues, precision, uncompress);

      if (keys && uncompress) {
        obj2[map.get(k)] = obj[k];
      } else if (keys) {
        obj2[map.add(k)] = obj[k];
      } else {
        obj2[k] = obj[k];
      }
    }

    if (keys) {
      return obj2;
    }

    return obj2;
  }

  return obj;
}

function uncompressObject(obj, map) {
  var keys = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var strValues = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  return compressObject(obj, map, keys, strValues, null, true);
}

function minify(objectOrArray) {
  var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;
  var map = new UniqueMap();
  return {
    minified: compressObject(objectOrArray, map, true, true, precision),
    map: map
  };
}

function unminify(minObjectOrArray) {
  var map = minObjectOrArray.map;

  if (!(map instanceof UniqueMap)) {
    var uMap = new UniqueMap();
    uMap.map = map.map;
    uMap.index = map.index;
    uMap.letters = map.letters;
    map = uMap;
  }

  map.makeInverseMap();
  return uncompressObject(minObjectOrArray.minified, map, true, true);
}

function objectToPaths(obj) {
  var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var pathObj = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var precision = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  if (typeof obj === 'string' // || typeof obj === 'number'
  || typeof obj === 'boolean' || typeof obj === 'function') {
    pathObj["".concat(path)] = obj; // eslint-disable-line no-param-reassign

    return pathObj;
  }

  if (typeof obj === 'number') {
    if (precision != null) {
      pathObj["".concat(path)] = Object(_math__WEBPACK_IMPORTED_MODULE_0__["roundNum"])(obj, precision); // eslint-disable-line no-param-reassign
    } else {
      pathObj["".concat(path)] = obj; // eslint-disable-line no-param-reassign
    }

    return pathObj;
  }

  if (obj === null) {
    pathObj["".concat(path)] = null; // eslint-disable-line no-param-reassign

    return pathObj;
  }

  if (obj === undefined) {
    // pathObj[`${path}`] = undefined; // eslint-disable-line no-param-reassign
    return pathObj;
  }

  if (Array.isArray(obj)) {
    obj.forEach(function (o, index) {
      objectToPaths(o, "".concat(path, "[").concat(index, "]"), pathObj, precision);
    });
    return pathObj;
  }

  Object.keys(obj).forEach(function (key) {
    objectToPaths(obj[key], "".concat(path, ".").concat(key), pathObj, precision);
  });
  return pathObj;
}

function getObjectDiff(obj1In, diffs, obj2) {
  var precision = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var debug = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  // const pathMap = {};
  var obj1 = obj1In;

  if (diffs.length > 0) {
    // eslint-disable-next-line no-use-before-define
    obj1 = refAndDiffToObject.apply(void 0, [obj1In].concat(_toConsumableArray(diffs)));
  }

  var paths1 = objectToPaths(obj1, '', {}, precision);
  var paths2 = objectToPaths(obj2, '', {}, precision);
  var added = {};
  var diff = {};
  var removed = {};
  Object.keys(paths1).forEach(function (key1) {
    if (paths2[key1] === undefined) {
      removed[key1] = paths1[key1];
      return;
    }

    if (paths1[key1] !== paths2[key1]) {
      if (debug) {
        diff[key1] = [paths1[key1], paths2[key1]];
      } else {
        diff[key1] = paths2[key1];
      }
    }
  });
  Object.keys(paths2).forEach(function (key2) {
    if (paths1[key2] === undefined) {
      added[key2] = paths2[key2];
    }
  });
  var out = {};

  if (Object.keys(diff).length > 0) {
    out.diff = diff;
  }

  if (Object.keys(added).length > 0) {
    out.added = added;
  }

  if (Object.keys(removed).length > 0) {
    out.removed = removed;
  }

  return out;
}

function updateObjFromPath(remainingPath, obj, value) {
  var remove = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  // console.log(remainingPath)
  var fullP = remainingPath[0];

  if (fullP.length === 0) {
    return;
  }

  var arrayStringIndeces = fullP.match(/\[[^\]]*\]/g);
  var p = fullP.replace(/\[.*/, '');

  if (remainingPath.length === 1 && remove && !arrayStringIndeces) {
    delete obj[p];
    return;
  }

  if (arrayStringIndeces) {
    var arrayIndeces = arrayStringIndeces.map(function (e) {
      return parseInt(e.replace(/\[|\]/g, ''), 10);
    }); // console.log(arrayIndeces)
    // return;

    if (obj[p] == null || !Array.isArray(obj[p])) {
      obj[p] = [];
    } // console.log(obj)
    // return


    var currentArray = obj[p];
    var index = 0;

    for (var i = 0; i < arrayIndeces.length; i += 1) {
      index = arrayIndeces[i];

      if (currentArray.length <= index) {
        for (var j = currentArray.length; j < index - currentArray.length + 1; j += 1) {
          currentArray.push(undefined);
        }
      }

      if (i < arrayIndeces.length - 1) {
        // currentArray[index] = currentArray[index][i];
        if (!Array.isArray(currentArray[index])) {
          currentArray[index] = [];
        }

        currentArray = currentArray[index];
      }
    }

    if (remainingPath.length === 1 && remove) {
      currentArray[index] = undefined;
      return;
    }

    if (remainingPath.length === 1) {
      currentArray[index] = value;
      return;
    }

    if (currentArray[index] == null || _typeof(currentArray[index]) !== 'object') {
      currentArray[index] = {};
    }

    updateObjFromPath(remainingPath.slice(1), currentArray[index], value, remove);
    return;
  } // if (remainingPath.length === 1 && remove) {
  //   console.log('asdf')
  //   obj[p] = undefined;
  // }


  if (remainingPath.length === 1) {
    obj[p] = value;
    return;
  }

  if (obj[p] == null) {
    obj[p] = {};
  }

  updateObjFromPath(remainingPath.slice(1), obj[p], value, remove);
}

function pathsToObj(paths) {
  var obj = {};
  Object.keys(paths).forEach(function (key) {
    var path = key.split('.').filter(function (p) {
      return p.length > 0;
    });
    var value = paths[key];

    if (Array.isArray(value)) {
      updateObjFromPath(path, obj, value.slice(-1)[0]);
    } else {
      updateObjFromPath(path, obj, value);
    }
  });
  return obj;
}

function refAndDiffToObject(referenceIn) {
  var ref = duplicate(referenceIn);

  var processPaths = function processPaths(paths) {
    var remove = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    // console.log(paths)
    Object.keys(paths).forEach(function (pathStr) {
      // console.log(pathStr)
      var path = pathStr.split('.').filter(function (p) {
        return p.length > 0;
      });
      var value = paths[pathStr];

      if (Array.isArray(value)) {
        updateObjFromPath(path, ref, value.slice(-1)[0], remove);
      } else {
        updateObjFromPath(path, ref, value, remove);
      }
    });
  }; // console.log(diffsIn)


  for (var _len3 = arguments.length, diffsIn = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    diffsIn[_key3 - 1] = arguments[_key3];
  }

  diffsIn.forEach(function (diffIn) {
    // console.log(diffIn)
    var added = diffIn.added,
        removed = diffIn.removed,
        diff = diffIn.diff; // console.log(1, removed)

    if (removed != null) {
      processPaths(removed, true);
    } // console.log(2)


    if (added != null) {
      processPaths(added);
    } // console.log(3)


    if (diff != null) {
      processPaths(diff);
    }
  });
  return ref;
}

function diffPathsToObj(diff) {
  var out = {};

  if (diff.diff && Object.keys(diff.diff).length > 0) {
    out.diff = pathsToObj(diff.diff);
  }

  if (diff.added && Object.keys(diff.added).length > 0) {
    out.added = pathsToObj(diff.added);
  }

  if (diff.removed && Object.keys(diff.removed).length > 0) {
    out.removed = pathsToObj(diff.removed);
  }

  return out;
}

function diffObjToPaths(diff) {
  var out = {};

  if (diff.diff && Object.keys(diff.diff).length > 0) {
    out.diff = objectToPaths(diff.diff);
  }

  if (diff.added && Object.keys(diff.added).length > 0) {
    out.added = objectToPaths(diff.added);
  }

  if (diff.removed && Object.keys(diff.removed).length > 0) {
    out.removed = objectToPaths(diff.removed);
  }

  return out;
} // Class that can track an object's differences over time


var ObjectTracker = /*#__PURE__*/function () {
  //             time   refName  diff
  function ObjectTracker() {
    var precision = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 8;

    _classCallCheck(this, ObjectTracker);

    this.precision = precision;
    this.reset();
  }

  _createClass(ObjectTracker, [{
    key: "toObj",
    value: function toObj() {
      var _this2 = this;

      var references = {};
      Object.keys(this.references).forEach(function (refName) {
        references[refName] = {
          basedOn: _this2.references[refName].basedOn,
          diff: diffPathsToObj(_this2.references[refName].diff)
        };
      });
      var diffs = this.diffs.map(function (d) {
        return [d[0], d[1], diffPathsToObj(d[2]), d[3]];
      });
      return {
        baseReference: duplicate(this.baseReference),
        diffs: diffs,
        references: references,
        precision: this.precision,
        lastReferenceName: this.lastReferenceName
      };
    }
  }, {
    key: "setFromObj",
    value: function setFromObj(obj) {
      var references = {};
      Object.keys(obj.references).forEach(function (refName) {
        references[refName] = {
          basedOn: obj.references[refName].basedOn,
          diff: diffObjToPaths(obj.references[refName].diff)
        };
      });
      this.references = references;
      this.baseReference = duplicate(obj.baseReference);
      this.precision = obj.precision;
      this.diffs = obj.diffs.map(function (d) {
        return [d[0], d[1], diffObjToPaths(d[2]), d[3]];
      });
      this.lastReferenceName = obj.lastReferenceName;
    }
  }, {
    key: "reset",
    value: function reset() {
      this.baseReference = null;
      this.references = {};
      this.diffs = [];
      this.lastReferenceName = '__base';
    }
  }, {
    key: "setBaseReference",
    value: function setBaseReference(obj) {
      this.baseReference = duplicate(obj);
      this.lastReferenceName = '__base';
    }
  }, {
    key: "addReference",
    value: function addReference(obj, refName) {
      var basedOn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '__base';

      if (this.baseReference == null || refName === '__base') {
        this.setBaseReference(obj);
      }

      if (refName !== '__base') {
        this.references[refName] = {
          diff: this.getDiffToReference(obj, basedOn),
          basedOn: basedOn
        };
        this.lastReferenceName = refName;
      }
    }
  }, {
    key: "getReferenceChain",
    value: function getReferenceChain(name, chain) {
      if (name === '__base') {
        return chain;
      }

      if (this.references[name] == null) {
        return chain;
      }

      return this.getReferenceChain(this.references[name].basedOn, [this.references[name].diff].concat(_toConsumableArray(chain)));
    }
  }, {
    key: "getReference",
    value: function getReference(refName) {
      var referenceChain = this.getReferenceChain(refName, []);
      return refAndDiffToObject.apply(void 0, [this.baseReference].concat(_toConsumableArray(referenceChain)));
    }
  }, {
    key: "getDiffToReference",
    value: function getDiffToReference(obj, refName) {
      var s1 = performance.now();
      var referenceChain = this.getReferenceChain(refName, []); // console.log('ref Chain', performance.now() - s1);

      var s2 = performance.now();
      var diff = getObjectDiff(this.baseReference, referenceChain, obj, this.precision); // console.log('s2', performance.now() - s2);

      return diff;
    }
  }, {
    key: "getObjFromDiffAndReference",
    value: function getObjFromDiffAndReference(diff, refName) {
      var referenceChain = this.getReferenceChain(refName, []);
      var diffs = [].concat(_toConsumableArray(referenceChain), [diff]);
      return refAndDiffToObject.apply(void 0, [this.baseReference].concat(_toConsumableArray(diffs)));
    }
  }, {
    key: "add",
    value: function add(time, obj) {
      var refName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.lastReferenceName;
      var timeCount = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

      if (this.baseReference == null) {
        this.setBaseReference(obj);
      }

      var diff = this.getDiffToReference(obj, refName);
      this.diffs.push([time, refName, diff, timeCount]);
    }
  }, {
    key: "addWithWorker",
    value: function addWithWorker(time, obj) {
      var refName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.lastReferenceName;
      var timeCount = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

      if (this.baseReference == null) {
        this.setBaseReference(obj);
      }

      this.startWorker();

      if (this.worker != null) {
        this.worker.postMessage([time, refName, obj, timeCount]);
      }
    }
  }, {
    key: "startWorker",
    value: function startWorker() {
      if (this.worker != null) {
        return;
      }

      this.worker = new Worker();
      this.worker.addEventListener("message", function (event) {
        console.log(event.data);
      });
    }
  }, {
    key: "getFromIndex",
    value: function getFromIndex(index) {
      if (index > this.diffs.length) {
        return null;
      }

      var _this$diffs$index = _slicedToArray(this.diffs[index], 3),
          basedOn = _this$diffs$index[1],
          diff = _this$diffs$index[2];

      return this.getObjFromDiffAndReference(diff, basedOn);
    }
  }]);

  return ObjectTracker;
}();

function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', "data:text/plain;charset=utf-8,".concat(encodeURIComponent(text)));
  element.setAttribute('download', filename);
  element.style.display = 'none';
  var _document = document,
      body = _document.body;

  if (body != null) {
    body.appendChild(element);
    element.click();
    body.removeChild(element);
  }
}



/***/ })

/******/ });
//# sourceMappingURL=cfd0fd9450bb5270502b.worker.js.map