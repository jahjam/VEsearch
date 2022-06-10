// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"g0ste":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "435c1cc1a1a9526e";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"dEDha":[function(require,module,exports) {
var _config = require("./config");
var _helper = require("./helper");
const state = {
    search: {
        query: '',
        results: []
    },
    recipe: {
    }
};
if (module.hot) module.hot.accept();
// ***************************** //
// LOAD RESULTS AND DISPLAY THEM
// ***************************** //
const loadRecipeResults = async function(query) {
    try {
        resultsSection.classList.remove('nodisplay');
        renderLoadingIcon(recipeContainer);
        const data = await _helper.getJSON(`${_config.baseURL}&q=${query}`);
        const { hits  } = data;
        state.search.query = query;
        state.search.results = hits.map((hit)=>{
            return {
                id: hit._links.self.href.slice(38, 70),
                title: hit.recipe.label,
                publisher: hit.recipe.source,
                imgURL: hit.recipe.image
            };
        });
        console.log(hits);
    } catch (err) {
        throw err;
    }
};
const searchBtn = document.querySelector('.search-button');
const searchInput = document.querySelector('.search-input');
const resultsSection = document.querySelector('.recipe-results-section');
const resultsBox = document.querySelector('.recipe-results');
const recipeContainer = document.querySelector('.recipe-container');
const rightArrow = document.querySelector('.right-arrow');
const leftArrow = document.querySelector('.left-arrow');
let width;
const renderLoadingIcon = function(parentEl) {
    const markup = `
  <div class="dot-pulse">
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
  </div>`;
    parentEl.innerHTML = '';
    parentEl.insertAdjacentHTML('afterbegin', markup);
};
const renderErrorMsg = function(parentEl, message = 'Recipe failed to load, try refreshing the page...') {
    const markup = `
    <div div class="error">
        <p class="error-msg">
          ${message}
        </p>    
     </div>
`;
    parentEl.innerHTML = '';
    parentEl.insertAdjacentHTML('afterbegin', markup);
};
const showSearchResults = async function() {
    try {
        await loadRecipeResults(searchInput.value);
        if (searchInput.value === '') throw new Error('Please enter something in the search field above!');
        recipeContainer.innerHTML = '';
        state.search.results.forEach((result)=>recipeContainer.insertAdjacentHTML('beforeend', generateMarkup(result))
        );
        searchInput.value = '';
        width = resultsBox.clientWidth + 4 - 20;
        resultsBox.addEventListener('click', function(e) {
            const allResults = document.querySelectorAll('.results-box');
            allResults.forEach((box)=>box.classList.remove('results-box--active')
            );
            e.target.closest('.results-box').classList.add('results-box--active');
        });
    } catch (err) {
        renderErrorMsg(recipeContainer, err.message);
    }
};
const generateMarkup = (recipe)=>`
        <a class="results-box" href="#${recipe.id}">
        <div class="result" >
          <div class="img">
            <img
              src="${recipe.imgURL}"
              alt="Professional photograph of ${recipe.title}"
              class="recipe-results-img"
            />
          </div>
          <span class="result-title">${recipe.title}</span>
          <span class="recipe-company result-company">${recipe.publisher}
          </span>
          </div>
        </a>
    `
;
let currentSlide = 0;
const slideResultsLeft = function() {
    if (currentSlide < state.search.results.length - 4) {
        currentSlide++;
        recipeContainer.style.transform = `translateX(-${currentSlide * (width / 4)}px)`;
    }
};
const slideResultsRight = function() {
    if (currentSlide > 0) {
        currentSlide--;
        recipeContainer.style.transform = `translateX(-${currentSlide * (width / 4)}px)`;
    }
};
const pressEnterKey = (e)=>{
    if (e.keyCode === 13) showSearchResults();
};
searchBtn.addEventListener('click', showSearchResults);
searchInput.addEventListener('keydown', pressEnterKey);
rightArrow.addEventListener('click', slideResultsLeft);
leftArrow.addEventListener('click', slideResultsRight);
// ***************************** //
// LOAD RECIPE AND DISPLAY IT
// ***************************** //
const recipeListing = document.querySelector('.recipe-listing-section');
const recipeListingContainer = document.querySelector('.recipe-listing-container');
const recipeFooterSection = document.querySelector('.source-link-section');
const loadRecipe = async function(id) {
    try {
        recipeListing.classList.remove('nodisplay');
        renderLoadingIcon(recipeListingContainer);
        const data = await _helper.getJSON(`https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=64090b3f&app_key=863ec5c1694689e9e7474e4a313d6ed5`);
        const { recipe  } = data;
        state.recipe = {
            id: recipe.uri,
            title: recipe.label,
            publisher: recipe.source,
            imgURL: recipe.image,
            sourceUrl: recipe.url,
            servings: recipe.yield,
            ingredients: recipe.ingredients,
            nutrition: recipe.totalDaily,
            amountInGrams: recipe.digest,
            calories: recipe.calories
        };
    } catch (err) {
        console.error(err);
        throw err;
    }
};
const showRecipe = async function() {
    try {
        const id = window.location.hash.slice(1);
        if (!id) return;
        await loadRecipe(id);
        recipeFooterSection.classList.remove('nodisplay');
        recipeListingContainer.innerHTML = '';
        recipeFooterSection.innerHTML = '';
        state.recipe.ingredients.forEach((ing)=>{
            if (ing.quantity.toString().slice(0, 3) === '0.3') ing.quantity = '1/3';
            if (ing.quantity.toString().slice(0, 4) === '0.25') ing.quantity = '1/4';
            if (ing.quantity.toString().slice(0, 3) === '0.5') ing.quantity = '1/2';
            if (ing.quantity.toString().slice(0, 4) === '0.75') ing.quantity = '3/4';
        });
        recipeListingContainer.insertAdjacentHTML('afterbegin', generateRecipeMarkup(state.recipe));
        recipeFooterSection.insertAdjacentHTML('afterbegin', generateFooterMarkup(state.recipe));
    } catch (err) {
        // console.error(err);
        renderErrorMsg(recipeListingContainer);
    }
};
const generateRecipeMarkup = (recipe)=>`

      <div class="recipe-img-box">
      <img class="listing-img" src="${recipe.imgURL}"> 
      </div>

      <h2 class="recipe-title">${recipe.title}</h2>

      <div class="recipe-servings-box">
        <button class="btn servings-button" data-update-to="${recipe.servings - 1}">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="servings-icon"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        <span class="num-servings quantity">${recipe.servings} serving(s)</span>
        <button class="btn servings-button" data-update-to="${recipe.servings + 1}">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="servings-icon"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>

       <div class="nutrition-info">
         <div class="nutrition-info-box">
          <h3>Nutritional Facts</h3>
          <h4>(Estimated per serving)</h4>
          <ul class="nooch-list">
            <li class="nooch-box"><p        class="nooch-title">Energy</p><p class= "nooch-amount">${(recipe.calories / recipe.servings).toFixed(0)}g</p><p  class="nooch-perc">${(recipe.nutrition.ENERC_KCAL.quantity / recipe.servings).toFixed(0)}%</p></li>
            <li class="nooch-box"><p class="nooch-title">Carb</p><p class= "nooch-amount">${(Object.values(state.recipe.amountInGrams).find((measure)=>measure.label === 'Carbs'
    ).total / recipe.servings).toFixed(0)}${Object.values(state.recipe.amountInGrams).find((measure)=>measure.label === 'Carbs'
    ).unit}</p><p class="nooch-perc">${(recipe.nutrition.CHOCDF.quantity / recipe.servings).toFixed(0)}%</p></li>
            <li class="nooch-box"><p class="nooch-title">Fat</p><p class= "nooch-amount">${(Object.values(state.recipe.amountInGrams).find((measure)=>measure.label === 'Fat'
    ).total / recipe.servings).toFixed(0)}${Object.values(state.recipe.amountInGrams).find((measure)=>measure.label === 'Fat'
    ).unit}</p><p class="nooch-perc">${(recipe.nutrition.FAT.quantity / recipe.servings).toFixed(0)}%</p></li>
            <li class="nooch-box"><p class="nooch-title">Saturates</p><p class= "nooch-amount">${(Object.values(state.recipe.amountInGrams).find((measure)=>measure.label === 'Fat'
    ).sub.find((measure)=>measure.label === 'Saturated'
    ).total / recipe.servings).toFixed(0)}${Object.values(state.recipe.amountInGrams).find((measure)=>measure.label === 'Fat'
    ).sub.find((measure)=>measure.label === 'Saturated'
    ).unit}</p><p class="nooch-perc">${(recipe.nutrition.FASAT.quantity / recipe.servings).toFixed(0)}%</p></li>
            <li class="nooch-box"><p class="nooch-title">Salt</p><p class= "nooch-amount">${(Object.values(state.recipe.amountInGrams).find((measure)=>measure.label === 'Sodium'
    ).total / recipe.servings).toFixed(0)}${Object.values(state.recipe.amountInGrams).find((measure)=>measure.label === 'Sodium'
    ).unit}</p><p class="nooch-perc">${(recipe.nutrition.NA.quantity / recipe.servings).toFixed(0)}%</p></li>
          </ul>
         </div>
        </div>

        <div class="ingredients-box">

        <h2 class="recipe-list-title">Recipe Ingredients</h2>

        <ul class="recipe-list">
          ${recipe.ingredients.map((ing)=>{
        return `
            <li class="ing-item">
              <span class="ingredient"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="ing-icon"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"
                  />
                </svg><span class="quantity">
                ${ing.quantity === 0 ? '' : ing.quantity.toString().slice(0, 4)} ${ing.measure === '<unit>' || ing.quantity === 0 ? '' : `${ing.measure}(s)`} ${ing.food.toLowerCase()}</span>
              </span>
            </li>
          `;
    }).join('')}
          </ul>
        </div>
      `
;
const generateFooterMarkup = (recipe)=>{
    return `
    <h2 class="source-link-title">Want to cook this recipe?</h2>
    <span class="source-link-desc"
      >This recipe was put together by
      <span class="source-recipe-company">${recipe.publisher}</span>. For
      instructions on how to cook it, visit their website here:</span
    >
    <a href="${recipe.sourceUrl}" class="source-link"
      ><button class="btn source-link-button">Cook it!</button></a
    >
  `;
};
[
    'hashchange',
    'load'
].forEach((ev)=>window.addEventListener(ev, showRecipe)
);
// ***************************** //
// UPDATE SERVINGS
// ***************************** //
const updateServings = function(newServings) {
    state.recipe.ingredients.forEach((ing1)=>{
        if (ing1.quantity === '1/3') ing1.quantity = 0.3333333333333333;
        if (ing1.quantity === '1/4') ing1.quantity = 0.25;
        if (ing1.quantity === '1/2') ing1.quantity = 0.5;
        if (ing1.quantity === '3/4') ing1.quantity = 0.75;
        ing1.quantity = ing1.quantity * newServings / state.recipe.servings;
        // newQt = oldQt * newServings / oldServings // 4 = 2 * 8 / 4
        state.recipe.ingredients.forEach((ing)=>{
            if (ing.quantity.toString().slice(0, 3) === '0.3') ing.quantity = '1/3';
            if (ing.quantity.toString().slice(0, 4) === '0.25') ing.quantity = '1/4';
            if (ing.quantity.toString().slice(0, 3) === '0.5') ing.quantity = '1/2';
            if (ing.quantity.toString().slice(0, 4) === '0.75') ing.quantity = '3/4';
        });
    });
    console.log(state.recipe.ingredients);
    state.recipe.servings = newServings;
    const newMarkup = generateRecipeMarkup(state.recipe);
    const newDOM = document.createRange().createContextualFragment(newMarkup);
    const newElements = Array.from(newDOM.querySelectorAll('*'));
    const curElements = Array.from(recipeListingContainer.querySelectorAll('*'));
    newElements.forEach((newEl, i)=>{
        const curEl = curElements[i];
        if (!newEl.isEqualNode(curEl) && newEl.classList.contains('quantity')) curEl.textContent = newEl.textContent;
        if (!newEl.isEqualNode(curEl)) Array.from(newEl.attributes).forEach((attr)=>curEl.setAttribute(attr.name, attr.value)
        );
    });
};
recipeListing.addEventListener('click', function(e) {
    const servingsBtn = e.target.closest('.servings-button');
    if (!servingsBtn) return;
    const { updateTo  } = servingsBtn.dataset;
    if (+updateTo > 0) updateServings(+updateTo);
});

},{"./config":"jtCLN","./helper":"3r8hW"}],"jtCLN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "baseURL", ()=>baseURL
);
parcelHelpers.export(exports, "TIMEOUT_SEC", ()=>TIMEOUT_SEC
);
const baseURL = 'https://api.edamam.com/api/recipes/v2?type=public&app_id=64090b3f&app_key=863ec5c1694689e9e7474e4a313d6ed5&health=vegan';
const TIMEOUT_SEC = 1;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"3r8hW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getJSON", ()=>getJSON
);
var _config = require("./config");
const timeout = function(s = _config.TIMEOUT_SEC) {
    return new Promise(function(_, reject) {
        setTimeout(function() {
            reject(new Error(`Request took too long! Timeout after ${s} second. <br/> Please try again...`));
        }, s * 1000);
    });
};
const getJSON = async function(url) {
    try {
        const res = await Promise.race([
            fetch(url),
            timeout(_config.TIMEOUT_SEC)
        ]);
        const data = await res.json();
        if (!res.ok) throw new Error(`Bad Request: ${data.message} (Status:${res.status})`);
        return data;
    } catch (err) {
        throw err;
    }
};

},{"./config":"jtCLN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["g0ste","dEDha"], "dEDha", "parcelRequire6829")

//# sourceMappingURL=index.a1a9526e.js.map
