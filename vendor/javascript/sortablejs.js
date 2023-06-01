/**!
 * Sortable 1.14.0
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function ownKeys(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    t &&
      (o = o.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      }));
    n.push.apply(n, o);
  }
  return n;
}
function _objectSpread2(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2
      ? ownKeys(Object(n), true).forEach(function (t) {
          _defineProperty(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : ownKeys(Object(n)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
  }
  return e;
}
function _typeof(e) {
  _typeof =
    "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
      ? function (e) {
          return typeof e;
        }
      : function (e) {
          return e &&
            "function" === typeof Symbol &&
            e.constructor === Symbol &&
            e !== Symbol.prototype
            ? "symbol"
            : typeof e;
        };
  return _typeof(e);
}
function _defineProperty(e, t, n) {
  t in e
    ? Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true,
      })
    : (e[t] = n);
  return e;
}
function _extends() {
  _extends =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var o in n)
          Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
      }
      return e;
    };
  return _extends.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(e, t) {
  if (null == e) return {};
  var n = {};
  var o = Object.keys(e);
  var r, a;
  for (a = 0; a < o.length; a++) {
    r = o[a];
    t.indexOf(r) >= 0 || (n[r] = e[r]);
  }
  return n;
}
function _objectWithoutProperties(e, t) {
  if (null == e) return {};
  var n = _objectWithoutPropertiesLoose(e, t);
  var o, r;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) {
      o = a[r];
      t.indexOf(o) >= 0 ||
        (Object.prototype.propertyIsEnumerable.call(e, o) && (n[o] = e[o]));
    }
  }
  return n;
}
function _toConsumableArray(e) {
  return (
    _arrayWithoutHoles(e) ||
    _iterableToArray(e) ||
    _unsupportedIterableToArray(e) ||
    _nonIterableSpread()
  );
}
function _arrayWithoutHoles(e) {
  if (Array.isArray(e)) return _arrayLikeToArray(e);
}
function _iterableToArray(e) {
  if (
    ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
    null != e["@@iterator"]
  )
    return Array.from(e);
}
function _unsupportedIterableToArray(e, t) {
  if (e) {
    if ("string" === typeof e) return _arrayLikeToArray(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    "Object" === n && e.constructor && (n = e.constructor.name);
    return "Map" === n || "Set" === n
      ? Array.from(e)
      : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
      ? _arrayLikeToArray(e, t)
      : void 0;
  }
}
function _arrayLikeToArray(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
  return o;
}
function _nonIterableSpread() {
  throw new TypeError(
    "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
  );
}
var e = "1.14.0";
function userAgent(e) {
  if ("undefined" !== typeof window && window.navigator)
    return !!navigator.userAgent.match(e);
}
var t = userAgent(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i);
var n = userAgent(/Edge/i);
var o = userAgent(/firefox/i);
var r = userAgent(/safari/i) && !userAgent(/chrome/i) && !userAgent(/android/i);
var a = userAgent(/iP(ad|od|hone)/i);
var i = userAgent(/chrome/i) && userAgent(/android/i);
var l = { capture: false, passive: false };
function on(e, n, o) {
  e.addEventListener(n, o, !t && l);
}
function off(e, n, o) {
  e.removeEventListener(n, o, !t && l);
}
function matches(e, t) {
  if (t) {
    ">" === t[0] && (t = t.substring(1));
    if (e)
      try {
        if (e.matches) return e.matches(t);
        if (e.msMatchesSelector) return e.msMatchesSelector(t);
        if (e.webkitMatchesSelector) return e.webkitMatchesSelector(t);
      } catch (e) {
        return false;
      }
    return false;
  }
}
function getParentOrHost(e) {
  return e.host && e !== document && e.host.nodeType ? e.host : e.parentNode;
}
function closest(e, t, n, o) {
  if (e) {
    n = n || document;
    do {
      if (
        (null != t &&
          (">" === t[0]
            ? e.parentNode === n && matches(e, t)
            : matches(e, t))) ||
        (o && e === n)
      )
        return e;
      if (e === n) break;
    } while ((e = getParentOrHost(e)));
  }
  return null;
}
var s = /\s+/g;
function toggleClass(e, t, n) {
  if (e && t)
    if (e.classList) e.classList[n ? "add" : "remove"](t);
    else {
      var o = (" " + e.className + " ")
        .replace(s, " ")
        .replace(" " + t + " ", " ");
      e.className = (o + (n ? " " + t : "")).replace(s, " ");
    }
}
function css(e, t, n) {
  var o = e && e.style;
  if (o) {
    if (void 0 === n) {
      document.defaultView && document.defaultView.getComputedStyle
        ? (n = document.defaultView.getComputedStyle(e, ""))
        : e.currentStyle && (n = e.currentStyle);
      return void 0 === t ? n : n[t];
    }
    t in o || -1 !== t.indexOf("webkit") || (t = "-webkit-" + t);
    o[t] = n + ("string" === typeof n ? "" : "px");
  }
}
function matrix(e, t) {
  var n = "";
  if ("string" === typeof e) n = e;
  else
    do {
      var o = css(e, "transform");
      o && "none" !== o && (n = o + " " + n);
    } while (!t && (e = e.parentNode));
  var r =
    window.DOMMatrix ||
    window.WebKitCSSMatrix ||
    window.CSSMatrix ||
    window.MSCSSMatrix;
  return r && new r(n);
}
function find(e, t, n) {
  if (e) {
    var o = e.getElementsByTagName(t),
      r = 0,
      a = o.length;
    if (n) for (; r < a; r++) n(o[r], r);
    return o;
  }
  return [];
}
function getWindowScrollingElement() {
  var e = document.scrollingElement;
  return e || document.documentElement;
}
/**
 * Returns the "bounding client rect" of given element
 * @param  {HTMLElement} el                       The element whose boundingClientRect is wanted
 * @param  {[Boolean]} relativeToContainingBlock  Whether the rect should be relative to the containing block of (including) the container
 * @param  {[Boolean]} relativeToNonStaticParent  Whether the rect should be relative to the relative parent of (including) the contaienr
 * @param  {[Boolean]} undoScale                  Whether the container's scale() should be undone
 * @param  {[HTMLElement]} container              The parent the element will be placed in
 * @return {Object}                               The boundingClientRect of el, with specified adjustments
 */ function getRect(e, n, o, r, a) {
  if (e.getBoundingClientRect || e === window) {
    var i, l, s, c, u, d, f;
    if (e !== window && e.parentNode && e !== getWindowScrollingElement()) {
      i = e.getBoundingClientRect();
      l = i.top;
      s = i.left;
      c = i.bottom;
      u = i.right;
      d = i.height;
      f = i.width;
    } else {
      l = 0;
      s = 0;
      c = window.innerHeight;
      u = window.innerWidth;
      d = window.innerHeight;
      f = window.innerWidth;
    }
    if ((n || o) && e !== window) {
      a = a || e.parentNode;
      if (!t)
        do {
          if (
            a &&
            a.getBoundingClientRect &&
            ("none" !== css(a, "transform") ||
              (o && "static" !== css(a, "position")))
          ) {
            var h = a.getBoundingClientRect();
            l -= h.top + parseInt(css(a, "border-top-width"));
            s -= h.left + parseInt(css(a, "border-left-width"));
            c = l + i.height;
            u = s + i.width;
            break;
          }
        } while ((a = a.parentNode));
    }
    if (r && e !== window) {
      var g = matrix(a || e),
        p = g && g.a,
        v = g && g.d;
      if (g) {
        l /= v;
        s /= p;
        f /= p;
        d /= v;
        c = l + d;
        u = s + f;
      }
    }
    return { top: l, left: s, bottom: c, right: u, width: f, height: d };
  }
}
/**
 * Checks if a side of an element is scrolled past a side of its parents
 * @param  {HTMLElement}  el           The element who's side being scrolled out of view is in question
 * @param  {String}       elSide       Side of the element in question ('top', 'left', 'right', 'bottom')
 * @param  {String}       parentSide   Side of the parent in question ('top', 'left', 'right', 'bottom')
 * @return {HTMLElement}               The parent scroll element that the el's side is scrolled past, or null if there is no such element
 */ function isScrolledPast(e, t, n) {
  var o = getParentAutoScrollElement(e, true),
    r = getRect(e)[t];
  while (o) {
    var a = getRect(o)[n],
      i = void 0;
    i = "top" === n || "left" === n ? r >= a : r <= a;
    if (!i) return o;
    if (o === getWindowScrollingElement()) break;
    o = getParentAutoScrollElement(o, false);
  }
  return false;
}
/**
 * Gets nth child of el, ignoring hidden children, sortable's elements (does not ignore clone if it's visible)
 * and non-draggable elements
 * @param  {HTMLElement} el       The parent element
 * @param  {Number} childNum      The index of the child
 * @param  {Object} options       Parent Sortable's options
 * @return {HTMLElement}          The child at index childNum, or null if not found
 */ function getChild(e, t, n, o) {
  var r = 0,
    a = 0,
    i = e.children;
  while (a < i.length) {
    if (
      "none" !== i[a].style.display &&
      i[a] !== Sortable.ghost &&
      (o || i[a] !== Sortable.dragged) &&
      closest(i[a], n.draggable, e, false)
    ) {
      if (r === t) return i[a];
      r++;
    }
    a++;
  }
  return null;
}
/**
 * Gets the last child in the el, ignoring ghostEl or invisible elements (clones)
 * @param  {HTMLElement} el       Parent element
 * @param  {selector} selector    Any other elements that should be ignored
 * @return {HTMLElement}          The last child, ignoring ghostEl
 */ function lastChild(e, t) {
  var n = e.lastElementChild;
  while (
    n &&
    (n === Sortable.ghost ||
      "none" === css(n, "display") ||
      (t && !matches(n, t)))
  )
    n = n.previousElementSibling;
  return n || null;
}
/**
 * Returns the index of an element within its parent for a selected set of
 * elements
 * @param  {HTMLElement} el
 * @param  {selector} selector
 * @return {number}
 */ function index(e, t) {
  var n = 0;
  if (!e || !e.parentNode) return -1;
  while ((e = e.previousElementSibling))
    "TEMPLATE" === e.nodeName.toUpperCase() ||
      e === Sortable.clone ||
      (t && !matches(e, t)) ||
      n++;
  return n;
}
/**
 * Returns the scroll offset of the given element, added with all the scroll offsets of parent elements.
 * The value is returned in real pixels.
 * @param  {HTMLElement} el
 * @return {Array}             Offsets in the format of [left, top]
 */ function getRelativeScrollOffset(e) {
  var t = 0,
    n = 0,
    o = getWindowScrollingElement();
  if (e)
    do {
      var r = matrix(e),
        a = r.a,
        i = r.d;
      t += e.scrollLeft * a;
      n += e.scrollTop * i;
    } while (e !== o && (e = e.parentNode));
  return [t, n];
}
/**
 * Returns the index of the object within the given array
 * @param  {Array} arr   Array that may or may not hold the object
 * @param  {Object} obj  An object that has a key-value pair unique to and identical to a key-value pair in the object you want to find
 * @return {Number}      The index of the object in the array, or -1
 */ function indexOfObject(e, t) {
  for (var n in e)
    if (e.hasOwnProperty(n))
      for (var o in t)
        if (t.hasOwnProperty(o) && t[o] === e[n][o]) return Number(n);
  return -1;
}
function getParentAutoScrollElement(e, t) {
  if (!e || !e.getBoundingClientRect) return getWindowScrollingElement();
  var n = e;
  var o = false;
  do {
    if (n.clientWidth < n.scrollWidth || n.clientHeight < n.scrollHeight) {
      var r = css(n);
      if (
        (n.clientWidth < n.scrollWidth &&
          ("auto" == r.overflowX || "scroll" == r.overflowX)) ||
        (n.clientHeight < n.scrollHeight &&
          ("auto" == r.overflowY || "scroll" == r.overflowY))
      ) {
        if (!n.getBoundingClientRect || n === document.body)
          return getWindowScrollingElement();
        if (o || t) return n;
        o = true;
      }
    }
  } while ((n = n.parentNode));
  return getWindowScrollingElement();
}
function extend(e, t) {
  if (e && t) for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
  return e;
}
function isRectEqual(e, t) {
  return (
    Math.round(e.top) === Math.round(t.top) &&
    Math.round(e.left) === Math.round(t.left) &&
    Math.round(e.height) === Math.round(t.height) &&
    Math.round(e.width) === Math.round(t.width)
  );
}
var c;
function throttle(e, t) {
  return function () {
    if (!c) {
      var n = arguments,
        o = this;
      1 === n.length ? e.call(o, n[0]) : e.apply(o, n);
      c = setTimeout(function () {
        c = void 0;
      }, t);
    }
  };
}
function cancelThrottle() {
  clearTimeout(c);
  c = void 0;
}
function scrollBy(e, t, n) {
  e.scrollLeft += t;
  e.scrollTop += n;
}
function clone(e) {
  var t = window.Polymer;
  var n = window.jQuery || window.Zepto;
  return t && t.dom
    ? t.dom(e).cloneNode(true)
    : n
    ? n(e).clone(true)[0]
    : e.cloneNode(true);
}
function setRect(e, t) {
  css(e, "position", "absolute");
  css(e, "top", t.top);
  css(e, "left", t.left);
  css(e, "width", t.width);
  css(e, "height", t.height);
}
function unsetRect(e) {
  css(e, "position", "");
  css(e, "top", "");
  css(e, "left", "");
  css(e, "width", "");
  css(e, "height", "");
}
var u = "Sortable" + new Date().getTime();
function AnimationStateManager() {
  var e,
    t = [];
  return {
    captureAnimationState: function captureAnimationState() {
      t = [];
      if (this.options.animation) {
        var e = [].slice.call(this.el.children);
        e.forEach(function (e) {
          if ("none" !== css(e, "display") && e !== Sortable.ghost) {
            t.push({ target: e, rect: getRect(e) });
            var n = _objectSpread2({}, t[t.length - 1].rect);
            if (e.thisAnimationDuration) {
              var o = matrix(e, true);
              if (o) {
                n.top -= o.f;
                n.left -= o.e;
              }
            }
            e.fromRect = n;
          }
        });
      }
    },
    addAnimationState: function addAnimationState(e) {
      t.push(e);
    },
    removeAnimationState: function removeAnimationState(e) {
      t.splice(indexOfObject(t, { target: e }), 1);
    },
    animateAll: function animateAll(n) {
      var o = this;
      if (this.options.animation) {
        var r = false,
          a = 0;
        t.forEach(function (e) {
          var t = 0,
            n = e.target,
            i = n.fromRect,
            l = getRect(n),
            s = n.prevFromRect,
            c = n.prevToRect,
            u = e.rect,
            d = matrix(n, true);
          if (d) {
            l.top -= d.f;
            l.left -= d.e;
          }
          n.toRect = l;
          n.thisAnimationDuration &&
            isRectEqual(s, l) &&
            !isRectEqual(i, l) &&
            (u.top - l.top) / (u.left - l.left) ===
              (i.top - l.top) / (i.left - l.left) &&
            (t = calculateRealTime(u, s, c, o.options));
          if (!isRectEqual(l, i)) {
            n.prevFromRect = i;
            n.prevToRect = l;
            t || (t = o.options.animation);
            o.animate(n, u, l, t);
          }
          if (t) {
            r = true;
            a = Math.max(a, t);
            clearTimeout(n.animationResetTimer);
            n.animationResetTimer = setTimeout(function () {
              n.animationTime = 0;
              n.prevFromRect = null;
              n.fromRect = null;
              n.prevToRect = null;
              n.thisAnimationDuration = null;
            }, t);
            n.thisAnimationDuration = t;
          }
        });
        clearTimeout(e);
        r
          ? (e = setTimeout(function () {
              "function" === typeof n && n();
            }, a))
          : "function" === typeof n && n();
        t = [];
      } else {
        clearTimeout(e);
        "function" === typeof n && n();
      }
    },
    animate: function animate(e, t, n, o) {
      if (o) {
        css(e, "transition", "");
        css(e, "transform", "");
        var r = matrix(this.el),
          a = r && r.a,
          i = r && r.d,
          l = (t.left - n.left) / (a || 1),
          s = (t.top - n.top) / (i || 1);
        e.animatingX = !!l;
        e.animatingY = !!s;
        css(e, "transform", "translate3d(" + l + "px," + s + "px,0)");
        this.forRepaintDummy = repaint(e);
        css(
          e,
          "transition",
          "transform " +
            o +
            "ms" +
            (this.options.easing ? " " + this.options.easing : "")
        );
        css(e, "transform", "translate3d(0,0,0)");
        "number" === typeof e.animated && clearTimeout(e.animated);
        e.animated = setTimeout(function () {
          css(e, "transition", "");
          css(e, "transform", "");
          e.animated = false;
          e.animatingX = false;
          e.animatingY = false;
        }, o);
      }
    },
  };
}
function repaint(e) {
  return e.offsetWidth;
}
function calculateRealTime(e, t, n, o) {
  return (
    (Math.sqrt(Math.pow(t.top - e.top, 2) + Math.pow(t.left - e.left, 2)) /
      Math.sqrt(Math.pow(t.top - n.top, 2) + Math.pow(t.left - n.left, 2))) *
    o.animation
  );
}
var d = [];
var f = { initializeByDefault: true };
var h = {
  mount: function mount(e) {
    for (var t in f) f.hasOwnProperty(t) && !(t in e) && (e[t] = f[t]);
    d.forEach(function (t) {
      if (t.pluginName === e.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(
          e.pluginName,
          " more than once"
        );
    });
    d.push(e);
  },
  pluginEvent: function pluginEvent(e, t, n) {
    var o = this;
    this.eventCanceled = false;
    n.cancel = function () {
      o.eventCanceled = true;
    };
    var r = e + "Global";
    d.forEach(function (o) {
      if (t[o.pluginName]) {
        t[o.pluginName][r] &&
          t[o.pluginName][r](_objectSpread2({ sortable: t }, n));
        t.options[o.pluginName] &&
          t[o.pluginName][e] &&
          t[o.pluginName][e](_objectSpread2({ sortable: t }, n));
      }
    });
  },
  initializePlugins: function initializePlugins(e, t, n, o) {
    d.forEach(function (o) {
      var r = o.pluginName;
      if (e.options[r] || o.initializeByDefault) {
        var a = new o(e, t, e.options);
        a.sortable = e;
        a.options = e.options;
        e[r] = a;
        _extends(n, a.defaults);
      }
    });
    for (var r in e.options)
      if (e.options.hasOwnProperty(r)) {
        var a = this.modifyOption(e, r, e.options[r]);
        "undefined" !== typeof a && (e.options[r] = a);
      }
  },
  getEventProperties: function getEventProperties(e, t) {
    var n = {};
    d.forEach(function (o) {
      "function" === typeof o.eventProperties &&
        _extends(n, o.eventProperties.call(t[o.pluginName], e));
    });
    return n;
  },
  modifyOption: function modifyOption(e, t, n) {
    var o;
    d.forEach(function (r) {
      e[r.pluginName] &&
        r.optionListeners &&
        "function" === typeof r.optionListeners[t] &&
        (o = r.optionListeners[t].call(e[r.pluginName], n));
    });
    return o;
  },
};
function dispatchEvent(e) {
  var o = e.sortable,
    r = e.rootEl,
    a = e.name,
    i = e.targetEl,
    l = e.cloneEl,
    s = e.toEl,
    c = e.fromEl,
    d = e.oldIndex,
    f = e.newIndex,
    g = e.oldDraggableIndex,
    p = e.newDraggableIndex,
    v = e.originalEvent,
    m = e.putSortable,
    b = e.extraEventProperties;
  o = o || (r && r[u]);
  if (o) {
    var S,
      _ = o.options,
      y = "on" + a.charAt(0).toUpperCase() + a.substr(1);
    if (!window.CustomEvent || t || n) {
      S = document.createEvent("Event");
      S.initEvent(a, true, true);
    } else S = new CustomEvent(a, { bubbles: true, cancelable: true });
    S.to = s || r;
    S.from = c || r;
    S.item = i || r;
    S.clone = l;
    S.oldIndex = d;
    S.newIndex = f;
    S.oldDraggableIndex = g;
    S.newDraggableIndex = p;
    S.originalEvent = v;
    S.pullMode = m ? m.lastPutMode : void 0;
    var E = _objectSpread2(_objectSpread2({}, b), h.getEventProperties(a, o));
    for (var w in E) S[w] = E[w];
    r && r.dispatchEvent(S);
    _[y] && _[y].call(o, S);
  }
}
var g = ["evt"];
var p = function pluginEvent(e, t) {
  var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
    o = n.evt,
    r = _objectWithoutProperties(n, g);
  h.pluginEvent.bind(Sortable)(
    e,
    t,
    _objectSpread2(
      {
        dragEl: v,
        parentEl: m,
        ghostEl: b,
        rootEl: S,
        nextEl: _,
        lastDownEl: y,
        cloneEl: E,
        cloneHidden: w,
        dragStarted: j,
        putSortable: O,
        activeSortable: Sortable.active,
        originalEvent: o,
        oldIndex: D,
        oldDraggableIndex: x,
        newIndex: C,
        newDraggableIndex: A,
        hideGhostForTarget: re,
        unhideGhostForTarget: ae,
        cloneNowHidden: function cloneNowHidden() {
          w = true;
        },
        cloneNowShown: function cloneNowShown() {
          w = false;
        },
        dispatchSortableEvent: function dispatchSortableEvent(e) {
          _dispatchEvent({ sortable: t, name: e, originalEvent: o });
        },
      },
      r
    )
  );
};
function _dispatchEvent(e) {
  dispatchEvent(
    _objectSpread2(
      {
        putSortable: O,
        cloneEl: E,
        targetEl: v,
        rootEl: S,
        oldIndex: D,
        oldDraggableIndex: x,
        newIndex: C,
        newDraggableIndex: A,
      },
      e
    )
  );
}
var v,
  m,
  b,
  S,
  _,
  y,
  E,
  w,
  D,
  C,
  x,
  A,
  T,
  O,
  M,
  P,
  I,
  N,
  R,
  k,
  j,
  X,
  Y,
  F,
  B,
  W = false,
  H = false,
  L = [],
  K = false,
  G = false,
  z = [],
  U = false,
  q = [];
var V = "undefined" !== typeof document,
  $ = a,
  Z = n || t ? "cssFloat" : "float",
  Q = V && !i && !a && "draggable" in document.createElement("div"),
  J = (function () {
    if (V) {
      if (t) return false;
      var e = document.createElement("x");
      e.style.cssText = "pointer-events:auto";
      return "auto" === e.style.pointerEvents;
    }
  })(),
  ee = function _detectDirection(e, t) {
    var n = css(e),
      o =
        parseInt(n.width) -
        parseInt(n.paddingLeft) -
        parseInt(n.paddingRight) -
        parseInt(n.borderLeftWidth) -
        parseInt(n.borderRightWidth),
      r = getChild(e, 0, t),
      a = getChild(e, 1, t),
      i = r && css(r),
      l = a && css(a),
      s =
        i &&
        parseInt(i.marginLeft) + parseInt(i.marginRight) + getRect(r).width,
      c =
        l &&
        parseInt(l.marginLeft) + parseInt(l.marginRight) + getRect(a).width;
    if ("flex" === n.display)
      return "column" === n.flexDirection ||
        "column-reverse" === n.flexDirection
        ? "vertical"
        : "horizontal";
    if ("grid" === n.display)
      return n.gridTemplateColumns.split(" ").length <= 1
        ? "vertical"
        : "horizontal";
    if (r && i.float && "none" !== i.float) {
      var u = "left" === i.float ? "left" : "right";
      return !a || ("both" !== l.clear && l.clear !== u)
        ? "horizontal"
        : "vertical";
    }
    return r &&
      ("block" === i.display ||
        "flex" === i.display ||
        "table" === i.display ||
        "grid" === i.display ||
        (s >= o && "none" === n[Z]) ||
        (a && "none" === n[Z] && s + c > o))
      ? "vertical"
      : "horizontal";
  },
  te = function _dragElInRowColumn(e, t, n) {
    var o = n ? e.left : e.top,
      r = n ? e.right : e.bottom,
      a = n ? e.width : e.height,
      i = n ? t.left : t.top,
      l = n ? t.right : t.bottom,
      s = n ? t.width : t.height;
    return o === i || r === l || o + a / 2 === i + s / 2;
  },
  /**
   * Detects first nearest empty sortable to X and Y position using emptyInsertThreshold.
   * @param  {Number} x      X position
   * @param  {Number} y      Y position
   * @return {HTMLElement}   Element of the first found nearest Sortable
   */
  ne = function _detectNearestEmptySortable(e, t) {
    var n;
    L.some(function (o) {
      var r = o[u].options.emptyInsertThreshold;
      if (r && !lastChild(o)) {
        var a = getRect(o),
          i = e >= a.left - r && e <= a.right + r,
          l = t >= a.top - r && t <= a.bottom + r;
        return i && l ? (n = o) : void 0;
      }
    });
    return n;
  },
  oe = function _prepareGroup(e) {
    function toFn(e, t) {
      return function (n, o, r, a) {
        var i =
          n.options.group.name &&
          o.options.group.name &&
          n.options.group.name === o.options.group.name;
        if (null == e && (t || i)) return true;
        if (null == e || false === e) return false;
        if (t && "clone" === e) return e;
        if ("function" === typeof e) return toFn(e(n, o, r, a), t)(n, o, r, a);
        var l = (t ? n : o).options.group.name;
        return (
          true === e ||
          ("string" === typeof e && e === l) ||
          (e.join && e.indexOf(l) > -1)
        );
      };
    }
    var t = {};
    var n = e.group;
    (n && "object" == _typeof(n)) || (n = { name: n });
    t.name = n.name;
    t.checkPull = toFn(n.pull, true);
    t.checkPut = toFn(n.put);
    t.revertClone = n.revertClone;
    e.group = t;
  },
  re = function _hideGhostForTarget() {
    !J && b && css(b, "display", "none");
  },
  ae = function _unhideGhostForTarget() {
    !J && b && css(b, "display", "");
  };
V &&
  document.addEventListener(
    "click",
    function (e) {
      if (H) {
        e.preventDefault();
        e.stopPropagation && e.stopPropagation();
        e.stopImmediatePropagation && e.stopImmediatePropagation();
        H = false;
        return false;
      }
    },
    true
  );
var ie = function nearestEmptyInsertDetectEvent(e) {
  if (v) {
    e = e.touches ? e.touches[0] : e;
    var t = ne(e.clientX, e.clientY);
    if (t) {
      var n = {};
      for (var o in e) e.hasOwnProperty(o) && (n[o] = e[o]);
      n.target = n.rootEl = t;
      n.preventDefault = void 0;
      n.stopPropagation = void 0;
      t[u]._onDragOver(n);
    }
  }
};
var le = function _checkOutsideTargetEl(e) {
  v && v.parentNode[u]._isOutsideThisEl(e.target);
};
/**
 * @class  Sortable
 * @param  {HTMLElement}  el
 * @param  {Object}       [options]
 */ function Sortable(e, t) {
  if (!(e && e.nodeType && 1 === e.nodeType))
    throw "Sortable: `el` must be an HTMLElement, not ".concat(
      {}.toString.call(e)
    );
  this.el = e;
  this.options = t = _extends({}, t);
  e[u] = this;
  var n = {
    group: null,
    sort: true,
    disabled: false,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(e.nodeName) ? ">li" : ">*",
    swapThreshold: 1,
    invertSwap: false,
    invertedSwapThreshold: null,
    removeCloneOnHide: true,
    direction: function direction() {
      return ee(e, this.options);
    },
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    ignore: "a, img",
    filter: null,
    preventOnFilter: true,
    animation: 0,
    easing: null,
    setData: function setData(e, t) {
      e.setData("Text", t.textContent);
    },
    dropBubble: false,
    dragoverBubble: false,
    dataIdAttr: "data-id",
    delay: 0,
    delayOnTouchOnly: false,
    touchStartThreshold:
      (Number.parseInt ? Number : window).parseInt(
        window.devicePixelRatio,
        10
      ) || 1,
    forceFallback: false,
    fallbackClass: "sortable-fallback",
    fallbackOnBody: false,
    fallbackTolerance: 0,
    fallbackOffset: { x: 0, y: 0 },
    supportPointer:
      false !== Sortable.supportPointer && "PointerEvent" in window && !r,
    emptyInsertThreshold: 5,
  };
  h.initializePlugins(this, e, n);
  for (var o in n) !(o in t) && (t[o] = n[o]);
  oe(t);
  for (var a in this)
    "_" === a.charAt(0) &&
      "function" === typeof this[a] &&
      (this[a] = this[a].bind(this));
  this.nativeDraggable = !t.forceFallback && Q;
  this.nativeDraggable && (this.options.touchStartThreshold = 1);
  if (t.supportPointer) on(e, "pointerdown", this._onTapStart);
  else {
    on(e, "mousedown", this._onTapStart);
    on(e, "touchstart", this._onTapStart);
  }
  if (this.nativeDraggable) {
    on(e, "dragover", this);
    on(e, "dragenter", this);
  }
  L.push(this.el);
  t.store && t.store.get && this.sort(t.store.get(this) || []);
  _extends(this, AnimationStateManager());
}
Sortable.prototype = {
  constructor: Sortable,
  _isOutsideThisEl: function _isOutsideThisEl(e) {
    this.el.contains(e) || e === this.el || (X = null);
  },
  _getDirection: function _getDirection(e, t) {
    return "function" === typeof this.options.direction
      ? this.options.direction.call(this, e, t, v)
      : this.options.direction;
  },
  _onTapStart: function _onTapStart(e) {
    if (e.cancelable) {
      var t = this,
        n = this.el,
        o = this.options,
        a = o.preventOnFilter,
        i = e.type,
        l =
          (e.touches && e.touches[0]) ||
          (e.pointerType && "touch" === e.pointerType && e),
        s = (l || e).target,
        c =
          (e.target.shadowRoot &&
            ((e.path && e.path[0]) ||
              (e.composedPath && e.composedPath()[0]))) ||
          s,
        u = o.filter;
      _saveInputCheckedState(n);
      if (
        !v &&
        !((/mousedown|pointerdown/.test(i) && 0 !== e.button) || o.disabled) &&
        !c.isContentEditable &&
        (this.nativeDraggable ||
          !r ||
          !s ||
          "SELECT" !== s.tagName.toUpperCase())
      ) {
        s = closest(s, o.draggable, n, false);
        if ((!s || !s.animated) && y !== s) {
          D = index(s);
          x = index(s, o.draggable);
          if ("function" === typeof u) {
            if (u.call(this, e, s, this)) {
              _dispatchEvent({
                sortable: t,
                rootEl: c,
                name: "filter",
                targetEl: s,
                toEl: n,
                fromEl: n,
              });
              p("filter", t, { evt: e });
              a && e.cancelable && e.preventDefault();
              return;
            }
          } else if (u) {
            u = u.split(",").some(function (o) {
              o = closest(c, o.trim(), n, false);
              if (o) {
                _dispatchEvent({
                  sortable: t,
                  rootEl: o,
                  name: "filter",
                  targetEl: s,
                  fromEl: n,
                  toEl: n,
                });
                p("filter", t, { evt: e });
                return true;
              }
            });
            if (u) {
              a && e.cancelable && e.preventDefault();
              return;
            }
          }
          (o.handle && !closest(c, o.handle, n, false)) ||
            this._prepareDragStart(e, l, s);
        }
      }
    }
  },
  _prepareDragStart: function _prepareDragStart(e, r, a) {
    var i,
      l = this,
      s = l.el,
      c = l.options,
      u = s.ownerDocument;
    if (a && !v && a.parentNode === s) {
      var d = getRect(a);
      S = s;
      v = a;
      m = v.parentNode;
      _ = v.nextSibling;
      y = a;
      T = c.group;
      Sortable.dragged = v;
      M = { target: v, clientX: (r || e).clientX, clientY: (r || e).clientY };
      R = M.clientX - d.left;
      k = M.clientY - d.top;
      this._lastX = (r || e).clientX;
      this._lastY = (r || e).clientY;
      v.style["will-change"] = "all";
      i = function dragStartFn() {
        p("delayEnded", l, { evt: e });
        if (Sortable.eventCanceled) l._onDrop();
        else {
          l._disableDelayedDragEvents();
          !o && l.nativeDraggable && (v.draggable = true);
          l._triggerDragStart(e, r);
          _dispatchEvent({ sortable: l, name: "choose", originalEvent: e });
          toggleClass(v, c.chosenClass, true);
        }
      };
      c.ignore.split(",").forEach(function (e) {
        find(v, e.trim(), _disableDraggable);
      });
      on(u, "dragover", ie);
      on(u, "mousemove", ie);
      on(u, "touchmove", ie);
      on(u, "mouseup", l._onDrop);
      on(u, "touchend", l._onDrop);
      on(u, "touchcancel", l._onDrop);
      if (o && this.nativeDraggable) {
        this.options.touchStartThreshold = 4;
        v.draggable = true;
      }
      p("delayStart", this, { evt: e });
      if (
        !c.delay ||
        (c.delayOnTouchOnly && !r) ||
        (this.nativeDraggable && (n || t))
      )
        i();
      else {
        if (Sortable.eventCanceled) {
          this._onDrop();
          return;
        }
        on(u, "mouseup", l._disableDelayedDrag);
        on(u, "touchend", l._disableDelayedDrag);
        on(u, "touchcancel", l._disableDelayedDrag);
        on(u, "mousemove", l._delayedDragTouchMoveHandler);
        on(u, "touchmove", l._delayedDragTouchMoveHandler);
        c.supportPointer &&
          on(u, "pointermove", l._delayedDragTouchMoveHandler);
        l._dragStartTimer = setTimeout(i, c.delay);
      }
    }
  },
  _delayedDragTouchMoveHandler: function _delayedDragTouchMoveHandler(e) {
    var t = e.touches ? e.touches[0] : e;
    Math.max(
      Math.abs(t.clientX - this._lastX),
      Math.abs(t.clientY - this._lastY)
    ) >=
      Math.floor(
        this.options.touchStartThreshold /
          ((this.nativeDraggable && window.devicePixelRatio) || 1)
      ) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function _disableDelayedDrag() {
    v && _disableDraggable(v);
    clearTimeout(this._dragStartTimer);
    this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function _disableDelayedDragEvents() {
    var e = this.el.ownerDocument;
    off(e, "mouseup", this._disableDelayedDrag);
    off(e, "touchend", this._disableDelayedDrag);
    off(e, "touchcancel", this._disableDelayedDrag);
    off(e, "mousemove", this._delayedDragTouchMoveHandler);
    off(e, "touchmove", this._delayedDragTouchMoveHandler);
    off(e, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function _triggerDragStart(e, t) {
    t = t || ("touch" == e.pointerType && e);
    if (!this.nativeDraggable || t)
      this.options.supportPointer
        ? on(document, "pointermove", this._onTouchMove)
        : on(document, t ? "touchmove" : "mousemove", this._onTouchMove);
    else {
      on(v, "dragend", this);
      on(S, "dragstart", this._onDragStart);
    }
    try {
      document.selection
        ? _nextTick(function () {
            document.selection.empty();
          })
        : window.getSelection().removeAllRanges();
    } catch (e) {}
  },
  _dragStarted: function _dragStarted(e, t) {
    W = false;
    if (S && v) {
      p("dragStarted", this, { evt: t });
      this.nativeDraggable && on(document, "dragover", le);
      var n = this.options;
      !e && toggleClass(v, n.dragClass, false);
      toggleClass(v, n.ghostClass, true);
      Sortable.active = this;
      e && this._appendGhost();
      _dispatchEvent({ sortable: this, name: "start", originalEvent: t });
    } else this._nulling();
  },
  _emulateDragOver: function _emulateDragOver() {
    if (P) {
      this._lastX = P.clientX;
      this._lastY = P.clientY;
      re();
      var e = document.elementFromPoint(P.clientX, P.clientY);
      var t = e;
      while (e && e.shadowRoot) {
        e = e.shadowRoot.elementFromPoint(P.clientX, P.clientY);
        if (e === t) break;
        t = e;
      }
      v.parentNode[u]._isOutsideThisEl(e);
      if (t)
        do {
          if (t[u]) {
            var n = void 0;
            n = t[u]._onDragOver({
              clientX: P.clientX,
              clientY: P.clientY,
              target: e,
              rootEl: t,
            });
            if (n && !this.options.dragoverBubble) break;
          }
          e = t;
        } while ((t = t.parentNode));
      ae();
    }
  },
  _onTouchMove: function _onTouchMove(e) {
    if (M) {
      var t = this.options,
        n = t.fallbackTolerance,
        o = t.fallbackOffset,
        r = e.touches ? e.touches[0] : e,
        a = b && matrix(b, true),
        i = b && a && a.a,
        l = b && a && a.d,
        s = $ && B && getRelativeScrollOffset(B),
        c =
          (r.clientX - M.clientX + o.x) / (i || 1) +
          (s ? s[0] - z[0] : 0) / (i || 1),
        u =
          (r.clientY - M.clientY + o.y) / (l || 1) +
          (s ? s[1] - z[1] : 0) / (l || 1);
      if (!Sortable.active && !W) {
        if (
          n &&
          Math.max(
            Math.abs(r.clientX - this._lastX),
            Math.abs(r.clientY - this._lastY)
          ) < n
        )
          return;
        this._onDragStart(e, true);
      }
      if (b) {
        if (a) {
          a.e += c - (I || 0);
          a.f += u - (N || 0);
        } else a = { a: 1, b: 0, c: 0, d: 1, e: c, f: u };
        var d = "matrix("
          .concat(a.a, ",")
          .concat(a.b, ",")
          .concat(a.c, ",")
          .concat(a.d, ",")
          .concat(a.e, ",")
          .concat(a.f, ")");
        css(b, "webkitTransform", d);
        css(b, "mozTransform", d);
        css(b, "msTransform", d);
        css(b, "transform", d);
        I = c;
        N = u;
        P = r;
      }
      e.cancelable && e.preventDefault();
    }
  },
  _appendGhost: function _appendGhost() {
    if (!b) {
      var e = this.options.fallbackOnBody ? document.body : S,
        t = getRect(v, true, $, true, e),
        n = this.options;
      if ($) {
        B = e;
        while (
          "static" === css(B, "position") &&
          "none" === css(B, "transform") &&
          B !== document
        )
          B = B.parentNode;
        if (B !== document.body && B !== document.documentElement) {
          B === document && (B = getWindowScrollingElement());
          t.top += B.scrollTop;
          t.left += B.scrollLeft;
        } else B = getWindowScrollingElement();
        z = getRelativeScrollOffset(B);
      }
      b = v.cloneNode(true);
      toggleClass(b, n.ghostClass, false);
      toggleClass(b, n.fallbackClass, true);
      toggleClass(b, n.dragClass, true);
      css(b, "transition", "");
      css(b, "transform", "");
      css(b, "box-sizing", "border-box");
      css(b, "margin", 0);
      css(b, "top", t.top);
      css(b, "left", t.left);
      css(b, "width", t.width);
      css(b, "height", t.height);
      css(b, "opacity", "0.8");
      css(b, "position", $ ? "absolute" : "fixed");
      css(b, "zIndex", "100000");
      css(b, "pointerEvents", "none");
      Sortable.ghost = b;
      e.appendChild(b);
      css(
        b,
        "transform-origin",
        (R / parseInt(b.style.width)) * 100 +
          "% " +
          (k / parseInt(b.style.height)) * 100 +
          "%"
      );
    }
  },
  _onDragStart: function _onDragStart(e, t) {
    var n = this;
    var o = e.dataTransfer;
    var a = n.options;
    p("dragStart", this, { evt: e });
    if (Sortable.eventCanceled) this._onDrop();
    else {
      p("setupClone", this);
      if (!Sortable.eventCanceled) {
        E = clone(v);
        E.draggable = false;
        E.style["will-change"] = "";
        this._hideClone();
        toggleClass(E, this.options.chosenClass, false);
        Sortable.clone = E;
      }
      n.cloneId = _nextTick(function () {
        p("clone", n);
        if (!Sortable.eventCanceled) {
          n.options.removeCloneOnHide || S.insertBefore(E, v);
          n._hideClone();
          _dispatchEvent({ sortable: n, name: "clone" });
        }
      });
      !t && toggleClass(v, a.dragClass, true);
      if (t) {
        H = true;
        n._loopId = setInterval(n._emulateDragOver, 50);
      } else {
        off(document, "mouseup", n._onDrop);
        off(document, "touchend", n._onDrop);
        off(document, "touchcancel", n._onDrop);
        if (o) {
          o.effectAllowed = "move";
          a.setData && a.setData.call(n, o, v);
        }
        on(document, "drop", n);
        css(v, "transform", "translateZ(0)");
      }
      W = true;
      n._dragStartId = _nextTick(n._dragStarted.bind(n, t, e));
      on(document, "selectstart", n);
      j = true;
      r && css(document.body, "user-select", "none");
    }
  },
  _onDragOver: function _onDragOver(e) {
    var t,
      n,
      o,
      r,
      a = this.el,
      i = e.target,
      l = this.options,
      s = l.group,
      c = Sortable.active,
      d = T === s,
      f = l.sort,
      h = O || c,
      g = this,
      y = false;
    if (!U) {
      void 0 !== e.preventDefault && e.cancelable && e.preventDefault();
      i = closest(i, l.draggable, a, true);
      dragOverEvent("dragOver");
      if (Sortable.eventCanceled) return y;
      if (
        v.contains(e.target) ||
        (i.animated && i.animatingX && i.animatingY) ||
        g._ignoreWhileAnimating === i
      )
        return completed(false);
      H = false;
      if (
        c &&
        !l.disabled &&
        (d
          ? f || (o = m !== S)
          : O === this ||
            ((this.lastPutMode = T.checkPull(this, c, v, e)) &&
              s.checkPut(this, c, v, e)))
      ) {
        r = "vertical" === this._getDirection(e, i);
        t = getRect(v);
        dragOverEvent("dragOverValid");
        if (Sortable.eventCanceled) return y;
        if (o) {
          m = S;
          capture();
          this._hideClone();
          dragOverEvent("revert");
          Sortable.eventCanceled ||
            (_ ? S.insertBefore(v, _) : S.appendChild(v));
          return completed(true);
        }
        var E = lastChild(a, l.draggable);
        if (!E || (_ghostIsLast(e, r, this) && !E.animated)) {
          if (E === v) return completed(false);
          E && a === e.target && (i = E);
          i && (n = getRect(i));
          if (false !== _onMove(S, a, v, t, i, n, e, !!i)) {
            capture();
            a.appendChild(v);
            m = a;
            changed();
            return completed(true);
          }
        } else if (E && _ghostIsFirst(e, r, this)) {
          var w = getChild(a, 0, l, true);
          if (w === v) return completed(false);
          i = w;
          n = getRect(i);
          if (false !== _onMove(S, a, v, t, i, n, e, false)) {
            capture();
            a.insertBefore(v, w);
            m = a;
            changed();
            return completed(true);
          }
        } else if (i.parentNode === a) {
          n = getRect(i);
          var D,
            x = 0,
            M = v.parentNode !== a,
            P = !te(
              (v.animated && v.toRect) || t,
              (i.animated && i.toRect) || n,
              r
            ),
            I = r ? "top" : "left",
            N =
              isScrolledPast(i, "top", "top") ||
              isScrolledPast(v, "top", "top"),
            R = N ? N.scrollTop : void 0;
          if (X !== i) {
            D = n[I];
            K = false;
            G = (!P && l.invertSwap) || M;
          }
          x = _getSwapDirection(
            e,
            i,
            n,
            r,
            P ? 1 : l.swapThreshold,
            null == l.invertedSwapThreshold
              ? l.swapThreshold
              : l.invertedSwapThreshold,
            G,
            X === i
          );
          var k;
          if (0 !== x) {
            var j = index(v);
            do {
              j -= x;
              k = m.children[j];
            } while (k && ("none" === css(k, "display") || k === b));
          }
          if (0 === x || k === i) return completed(false);
          X = i;
          Y = x;
          var B = i.nextElementSibling,
            W = false;
          W = 1 === x;
          var L = _onMove(S, a, v, t, i, n, e, W);
          if (false !== L) {
            (1 !== L && -1 !== L) || (W = 1 === L);
            U = true;
            setTimeout(_unsilent, 30);
            capture();
            W && !B
              ? a.appendChild(v)
              : i.parentNode.insertBefore(v, W ? B : i);
            N && scrollBy(N, 0, R - N.scrollTop);
            m = v.parentNode;
            void 0 === D || G || (F = Math.abs(D - getRect(i)[I]));
            changed();
            return completed(true);
          }
        }
        if (a.contains(v)) return completed(false);
      }
      return false;
    }
    function dragOverEvent(l, s) {
      p(
        l,
        g,
        _objectSpread2(
          {
            evt: e,
            isOwner: d,
            axis: r ? "vertical" : "horizontal",
            revert: o,
            dragRect: t,
            targetRect: n,
            canSort: f,
            fromSortable: h,
            target: i,
            completed: completed,
            onMove: function onMove(n, o) {
              return _onMove(S, a, v, t, n, getRect(n), e, o);
            },
            changed: changed,
          },
          s
        )
      );
    }
    function capture() {
      dragOverEvent("dragOverAnimationCapture");
      g.captureAnimationState();
      g !== h && h.captureAnimationState();
    }
    function completed(t) {
      dragOverEvent("dragOverCompleted", { insertion: t });
      if (t) {
        d ? c._hideClone() : c._showClone(g);
        if (g !== h) {
          toggleClass(
            v,
            O ? O.options.ghostClass : c.options.ghostClass,
            false
          );
          toggleClass(v, l.ghostClass, true);
        }
        O !== g && g !== Sortable.active
          ? (O = g)
          : g === Sortable.active && O && (O = null);
        h === g && (g._ignoreWhileAnimating = i);
        g.animateAll(function () {
          dragOverEvent("dragOverAnimationComplete");
          g._ignoreWhileAnimating = null;
        });
        if (g !== h) {
          h.animateAll();
          h._ignoreWhileAnimating = null;
        }
      }
      ((i === v && !v.animated) || (i === a && !i.animated)) && (X = null);
      if (!l.dragoverBubble && !e.rootEl && i !== document) {
        v.parentNode[u]._isOutsideThisEl(e.target);
        !t && ie(e);
      }
      !l.dragoverBubble && e.stopPropagation && e.stopPropagation();
      return (y = true);
    }
    function changed() {
      C = index(v);
      A = index(v, l.draggable);
      _dispatchEvent({
        sortable: g,
        name: "change",
        toEl: a,
        newIndex: C,
        newDraggableIndex: A,
        originalEvent: e,
      });
    }
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function _offMoveEvents() {
    off(document, "mousemove", this._onTouchMove);
    off(document, "touchmove", this._onTouchMove);
    off(document, "pointermove", this._onTouchMove);
    off(document, "dragover", ie);
    off(document, "mousemove", ie);
    off(document, "touchmove", ie);
  },
  _offUpEvents: function _offUpEvents() {
    var e = this.el.ownerDocument;
    off(e, "mouseup", this._onDrop);
    off(e, "touchend", this._onDrop);
    off(e, "pointerup", this._onDrop);
    off(e, "touchcancel", this._onDrop);
    off(document, "selectstart", this);
  },
  _onDrop: function _onDrop(e) {
    var t = this.el,
      n = this.options;
    C = index(v);
    A = index(v, n.draggable);
    p("drop", this, { evt: e });
    m = v && v.parentNode;
    C = index(v);
    A = index(v, n.draggable);
    if (Sortable.eventCanceled) this._nulling();
    else {
      W = false;
      G = false;
      K = false;
      clearInterval(this._loopId);
      clearTimeout(this._dragStartTimer);
      _cancelNextTick(this.cloneId);
      _cancelNextTick(this._dragStartId);
      if (this.nativeDraggable) {
        off(document, "drop", this);
        off(t, "dragstart", this._onDragStart);
      }
      this._offMoveEvents();
      this._offUpEvents();
      r && css(document.body, "user-select", "");
      css(v, "transform", "");
      if (e) {
        if (j) {
          e.cancelable && e.preventDefault();
          !n.dropBubble && e.stopPropagation();
        }
        b && b.parentNode && b.parentNode.removeChild(b);
        (S === m || (O && "clone" !== O.lastPutMode)) &&
          E &&
          E.parentNode &&
          E.parentNode.removeChild(E);
        if (v) {
          this.nativeDraggable && off(v, "dragend", this);
          _disableDraggable(v);
          v.style["will-change"] = "";
          j &&
            !W &&
            toggleClass(
              v,
              O ? O.options.ghostClass : this.options.ghostClass,
              false
            );
          toggleClass(v, this.options.chosenClass, false);
          _dispatchEvent({
            sortable: this,
            name: "unchoose",
            toEl: m,
            newIndex: null,
            newDraggableIndex: null,
            originalEvent: e,
          });
          if (S !== m) {
            if (C >= 0) {
              _dispatchEvent({
                rootEl: m,
                name: "add",
                toEl: m,
                fromEl: S,
                originalEvent: e,
              });
              _dispatchEvent({
                sortable: this,
                name: "remove",
                toEl: m,
                originalEvent: e,
              });
              _dispatchEvent({
                rootEl: m,
                name: "sort",
                toEl: m,
                fromEl: S,
                originalEvent: e,
              });
              _dispatchEvent({
                sortable: this,
                name: "sort",
                toEl: m,
                originalEvent: e,
              });
            }
            O && O.save();
          } else if (C !== D && C >= 0) {
            _dispatchEvent({
              sortable: this,
              name: "update",
              toEl: m,
              originalEvent: e,
            });
            _dispatchEvent({
              sortable: this,
              name: "sort",
              toEl: m,
              originalEvent: e,
            });
          }
          if (Sortable.active) {
            if (null == C || -1 === C) {
              C = D;
              A = x;
            }
            _dispatchEvent({
              sortable: this,
              name: "end",
              toEl: m,
              originalEvent: e,
            });
            this.save();
          }
        }
      }
      this._nulling();
    }
  },
  _nulling: function _nulling() {
    p("nulling", this);
    S =
      v =
      m =
      b =
      _ =
      E =
      y =
      w =
      M =
      P =
      j =
      C =
      A =
      D =
      x =
      X =
      Y =
      O =
      T =
      Sortable.dragged =
      Sortable.ghost =
      Sortable.clone =
      Sortable.active =
        null;
    q.forEach(function (e) {
      e.checked = true;
    });
    q.length = I = N = 0;
  },
  handleEvent: function handleEvent(e) {
    switch (e.type) {
      case "drop":
      case "dragend":
        this._onDrop(e);
        break;
      case "dragenter":
      case "dragover":
        if (v) {
          this._onDragOver(e);
          _globalDragOver(e);
        }
        break;
      case "selectstart":
        e.preventDefault();
        break;
    }
  },
  /**
   * Serializes the item into an array of string.
   * @returns {String[]}
   */
  toArray: function toArray() {
    var e,
      t = [],
      n = this.el.children,
      o = 0,
      r = n.length,
      a = this.options;
    for (; o < r; o++) {
      e = n[o];
      closest(e, a.draggable, this.el, false) &&
        t.push(e.getAttribute(a.dataIdAttr) || _generateId(e));
    }
    return t;
  },
  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function sort(e, t) {
    var n = {},
      o = this.el;
    this.toArray().forEach(function (e, t) {
      var r = o.children[t];
      closest(r, this.options.draggable, o, false) && (n[e] = r);
    }, this);
    t && this.captureAnimationState();
    e.forEach(function (e) {
      if (n[e]) {
        o.removeChild(n[e]);
        o.appendChild(n[e]);
      }
    });
    t && this.animateAll();
  },
  save: function save() {
    var e = this.options.store;
    e && e.set && e.set(this);
  },
  /**
   * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
   * @param   {HTMLElement}  el
   * @param   {String}       [selector]  default: `options.draggable`
   * @returns {HTMLElement|null}
   */
  closest: function closest$1(e, t) {
    return closest(e, t || this.options.draggable, this.el, false);
  },
  /**
   * Set/get option
   * @param   {string} name
   * @param   {*}      [value]
   * @returns {*}
   */
  option: function option(e, t) {
    var n = this.options;
    if (void 0 === t) return n[e];
    var o = h.modifyOption(this, e, t);
    n[e] = "undefined" !== typeof o ? o : t;
    "group" === e && oe(n);
  },
  destroy: function destroy() {
    p("destroy", this);
    var e = this.el;
    e[u] = null;
    off(e, "mousedown", this._onTapStart);
    off(e, "touchstart", this._onTapStart);
    off(e, "pointerdown", this._onTapStart);
    if (this.nativeDraggable) {
      off(e, "dragover", this);
      off(e, "dragenter", this);
    }
    Array.prototype.forEach.call(
      e.querySelectorAll("[draggable]"),
      function (e) {
        e.removeAttribute("draggable");
      }
    );
    this._onDrop();
    this._disableDelayedDragEvents();
    L.splice(L.indexOf(this.el), 1);
    this.el = e = null;
  },
  _hideClone: function _hideClone() {
    if (!w) {
      p("hideClone", this);
      if (Sortable.eventCanceled) return;
      css(E, "display", "none");
      this.options.removeCloneOnHide &&
        E.parentNode &&
        E.parentNode.removeChild(E);
      w = true;
    }
  },
  _showClone: function _showClone(e) {
    if ("clone" === e.lastPutMode) {
      if (w) {
        p("showClone", this);
        if (Sortable.eventCanceled) return;
        v.parentNode != S || this.options.group.revertClone
          ? _
            ? S.insertBefore(E, _)
            : S.appendChild(E)
          : S.insertBefore(E, v);
        this.options.group.revertClone && this.animate(v, E);
        css(E, "display", "");
        w = false;
      }
    } else this._hideClone();
  },
};
function _globalDragOver(e) {
  e.dataTransfer && (e.dataTransfer.dropEffect = "move");
  e.cancelable && e.preventDefault();
}
function _onMove(e, o, r, a, i, l, s, c) {
  var d,
    f,
    h = e[u],
    g = h.options.onMove;
  if (!window.CustomEvent || t || n) {
    d = document.createEvent("Event");
    d.initEvent("move", true, true);
  } else d = new CustomEvent("move", { bubbles: true, cancelable: true });
  d.to = o;
  d.from = e;
  d.dragged = r;
  d.draggedRect = a;
  d.related = i || o;
  d.relatedRect = l || getRect(o);
  d.willInsertAfter = c;
  d.originalEvent = s;
  e.dispatchEvent(d);
  g && (f = g.call(h, d, s));
  return f;
}
function _disableDraggable(e) {
  e.draggable = false;
}
function _unsilent() {
  U = false;
}
function _ghostIsFirst(e, t, n) {
  var o = getRect(getChild(n.el, 0, n.options, true));
  var r = 10;
  return t
    ? e.clientX < o.left - r || (e.clientY < o.top && e.clientX < o.right)
    : e.clientY < o.top - r || (e.clientY < o.bottom && e.clientX < o.left);
}
function _ghostIsLast(e, t, n) {
  var o = getRect(lastChild(n.el, n.options.draggable));
  var r = 10;
  return t
    ? e.clientX > o.right + r ||
        (e.clientX <= o.right && e.clientY > o.bottom && e.clientX >= o.left)
    : (e.clientX > o.right && e.clientY > o.top) ||
        (e.clientX <= o.right && e.clientY > o.bottom + r);
}
function _getSwapDirection(e, t, n, o, r, a, i, l) {
  var s = o ? e.clientY : e.clientX,
    c = o ? n.height : n.width,
    u = o ? n.top : n.left,
    d = o ? n.bottom : n.right,
    f = false;
  if (!i)
    if (l && F < c * r) {
      !K && (1 === Y ? s > u + (c * a) / 2 : s < d - (c * a) / 2) && (K = true);
      if (K) f = true;
      else if (1 === Y ? s < u + F : s > d - F) return -Y;
    } else if (s > u + (c * (1 - r)) / 2 && s < d - (c * (1 - r)) / 2)
      return _getInsertDirection(t);
  f = f || i;
  return f && (s < u + (c * a) / 2 || s > d - (c * a) / 2)
    ? s > u + c / 2
      ? 1
      : -1
    : 0;
}
/**
 * Gets the direction dragEl must be swapped relative to target in order to make it
 * seem that dragEl has been "inserted" into that element's position
 * @param  {HTMLElement} target       The target whose position dragEl is being inserted at
 * @return {Number}                   Direction dragEl must be swapped
 */ function _getInsertDirection(e) {
  return index(v) < index(e) ? 1 : -1;
}
/**
 * Generate id
 * @param   {HTMLElement} el
 * @returns {String}
 * @private
 */ function _generateId(e) {
  var t = e.tagName + e.className + e.src + e.href + e.textContent,
    n = t.length,
    o = 0;
  while (n--) o += t.charCodeAt(n);
  return o.toString(36);
}
function _saveInputCheckedState(e) {
  q.length = 0;
  var t = e.getElementsByTagName("input");
  var n = t.length;
  while (n--) {
    var o = t[n];
    o.checked && q.push(o);
  }
}
function _nextTick(e) {
  return setTimeout(e, 0);
}
function _cancelNextTick(e) {
  return clearTimeout(e);
}
V &&
  on(document, "touchmove", function (e) {
    (Sortable.active || W) && e.cancelable && e.preventDefault();
  });
Sortable.utils = {
  on: on,
  off: off,
  css: css,
  find: find,
  is: function is(e, t) {
    return !!closest(e, t, e, false);
  },
  extend: extend,
  throttle: throttle,
  closest: closest,
  toggleClass: toggleClass,
  clone: clone,
  index: index,
  nextTick: _nextTick,
  cancelNextTick: _cancelNextTick,
  detectDirection: ee,
  getChild: getChild,
};
/**
 * Get the Sortable instance of an element
 * @param  {HTMLElement} element The element
 * @return {Sortable|undefined}         The instance of Sortable
 */ Sortable.get = function (e) {
  return e[u];
};
/**
 * Mount a plugin to Sortable
 * @param  {...SortablePlugin|SortablePlugin[]} plugins       Plugins being mounted
 */ Sortable.mount = function () {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  t[0].constructor === Array && (t = t[0]);
  t.forEach(function (e) {
    if (!e.prototype || !e.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat(
        {}.toString.call(e)
      );
    e.utils &&
      (Sortable.utils = _objectSpread2(
        _objectSpread2({}, Sortable.utils),
        e.utils
      ));
    h.mount(e);
  });
};
/**
 * Create sortable instance
 * @param {HTMLElement}  el
 * @param {Object}      [options]
 */ Sortable.create = function (e, t) {
  return new Sortable(e, t);
};
Sortable.version = e;
var se,
  ce,
  ue,
  de,
  fe,
  he,
  ge = [],
  pe = false;
function AutoScrollPlugin() {
  function AutoScroll() {
    this.defaults = {
      scroll: true,
      forceAutoScrollFallback: false,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: true,
    };
    for (var e in this)
      "_" === e.charAt(0) &&
        "function" === typeof this[e] &&
        (this[e] = this[e].bind(this));
  }
  AutoScroll.prototype = {
    dragStarted: function dragStarted(e) {
      var t = e.originalEvent;
      this.sortable.nativeDraggable
        ? on(document, "dragover", this._handleAutoScroll)
        : this.options.supportPointer
        ? on(document, "pointermove", this._handleFallbackAutoScroll)
        : t.touches
        ? on(document, "touchmove", this._handleFallbackAutoScroll)
        : on(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function dragOverCompleted(e) {
      var t = e.originalEvent;
      this.options.dragOverBubble || t.rootEl || this._handleAutoScroll(t);
    },
    drop: function drop() {
      if (this.sortable.nativeDraggable)
        off(document, "dragover", this._handleAutoScroll);
      else {
        off(document, "pointermove", this._handleFallbackAutoScroll);
        off(document, "touchmove", this._handleFallbackAutoScroll);
        off(document, "mousemove", this._handleFallbackAutoScroll);
      }
      clearPointerElemChangedInterval();
      clearAutoScrolls();
      cancelThrottle();
    },
    nulling: function nulling() {
      fe = ce = se = pe = he = ue = de = null;
      ge.length = 0;
    },
    _handleFallbackAutoScroll: function _handleFallbackAutoScroll(e) {
      this._handleAutoScroll(e, true);
    },
    _handleAutoScroll: function _handleAutoScroll(e, o) {
      var a = this;
      var i = (e.touches ? e.touches[0] : e).clientX,
        l = (e.touches ? e.touches[0] : e).clientY,
        s = document.elementFromPoint(i, l);
      fe = e;
      if (o || this.options.forceAutoScrollFallback || n || t || r) {
        ve(e, this.options, s, o);
        var c = getParentAutoScrollElement(s, true);
        if (pe && (!he || i !== ue || l !== de)) {
          he && clearPointerElemChangedInterval();
          he = setInterval(function () {
            var t = getParentAutoScrollElement(
              document.elementFromPoint(i, l),
              true
            );
            if (t !== c) {
              c = t;
              clearAutoScrolls();
            }
            ve(e, a.options, t, o);
          }, 10);
          ue = i;
          de = l;
        }
      } else {
        if (
          !this.options.bubbleScroll ||
          getParentAutoScrollElement(s, true) === getWindowScrollingElement()
        ) {
          clearAutoScrolls();
          return;
        }
        ve(e, this.options, getParentAutoScrollElement(s, false), false);
      }
    },
  };
  return _extends(AutoScroll, {
    pluginName: "scroll",
    initializeByDefault: true,
  });
}
function clearAutoScrolls() {
  ge.forEach(function (e) {
    clearInterval(e.pid);
  });
  ge = [];
}
function clearPointerElemChangedInterval() {
  clearInterval(he);
}
var ve = throttle(function (e, t, n, o) {
  if (t.scroll) {
    var r = (e.touches ? e.touches[0] : e).clientX,
      a = (e.touches ? e.touches[0] : e).clientY,
      i = t.scrollSensitivity,
      l = t.scrollSpeed,
      s = getWindowScrollingElement();
    var c,
      d = false;
    if (ce !== n) {
      ce = n;
      clearAutoScrolls();
      se = t.scroll;
      c = t.scrollFn;
      true === se && (se = getParentAutoScrollElement(n, true));
    }
    var f = 0;
    var h = se;
    do {
      var g = h,
        p = getRect(g),
        v = p.top,
        m = p.bottom,
        b = p.left,
        S = p.right,
        _ = p.width,
        y = p.height,
        E = void 0,
        w = void 0,
        D = g.scrollWidth,
        C = g.scrollHeight,
        x = css(g),
        A = g.scrollLeft,
        T = g.scrollTop;
      if (g === s) {
        E =
          _ < D &&
          ("auto" === x.overflowX ||
            "scroll" === x.overflowX ||
            "visible" === x.overflowX);
        w =
          y < C &&
          ("auto" === x.overflowY ||
            "scroll" === x.overflowY ||
            "visible" === x.overflowY);
      } else {
        E = _ < D && ("auto" === x.overflowX || "scroll" === x.overflowX);
        w = y < C && ("auto" === x.overflowY || "scroll" === x.overflowY);
      }
      var O =
        E &&
        (Math.abs(S - r) <= i && A + _ < D) - (Math.abs(b - r) <= i && !!A);
      var M =
        w &&
        (Math.abs(m - a) <= i && T + y < C) - (Math.abs(v - a) <= i && !!T);
      if (!ge[f]) for (var P = 0; P <= f; P++) ge[P] || (ge[P] = {});
      if (ge[f].vx != O || ge[f].vy != M || ge[f].el !== g) {
        ge[f].el = g;
        ge[f].vx = O;
        ge[f].vy = M;
        clearInterval(ge[f].pid);
        if (0 != O || 0 != M) {
          d = true;
          ge[f].pid = setInterval(
            function () {
              o && 0 === this.layer && Sortable.active._onTouchMove(fe);
              var t = ge[this.layer].vy ? ge[this.layer].vy * l : 0;
              var n = ge[this.layer].vx ? ge[this.layer].vx * l : 0;
              ("function" === typeof c &&
                "continue" !==
                  c.call(
                    Sortable.dragged.parentNode[u],
                    n,
                    t,
                    e,
                    fe,
                    ge[this.layer].el
                  )) ||
                scrollBy(ge[this.layer].el, n, t);
            }.bind({ layer: f }),
            24
          );
        }
      }
      f++;
    } while (
      t.bubbleScroll &&
      h !== s &&
      (h = getParentAutoScrollElement(h, false))
    );
    pe = d;
  }
}, 30);
var me = function drop(e) {
  var t = e.originalEvent,
    n = e.putSortable,
    o = e.dragEl,
    r = e.activeSortable,
    a = e.dispatchSortableEvent,
    i = e.hideGhostForTarget,
    l = e.unhideGhostForTarget;
  if (t) {
    var s = n || r;
    i();
    var c =
      t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t;
    var u = document.elementFromPoint(c.clientX, c.clientY);
    l();
    if (s && !s.el.contains(u)) {
      a("spill");
      this.onSpill({ dragEl: o, putSortable: n });
    }
  }
};
function Revert() {}
Revert.prototype = {
  startIndex: null,
  dragStart: function dragStart(e) {
    var t = e.oldDraggableIndex;
    this.startIndex = t;
  },
  onSpill: function onSpill(e) {
    var t = e.dragEl,
      n = e.putSortable;
    this.sortable.captureAnimationState();
    n && n.captureAnimationState();
    var o = getChild(this.sortable.el, this.startIndex, this.options);
    o ? this.sortable.el.insertBefore(t, o) : this.sortable.el.appendChild(t);
    this.sortable.animateAll();
    n && n.animateAll();
  },
  drop: me,
};
_extends(Revert, { pluginName: "revertOnSpill" });
function Remove() {}
Remove.prototype = {
  onSpill: function onSpill(e) {
    var t = e.dragEl,
      n = e.putSortable;
    var o = n || this.sortable;
    o.captureAnimationState();
    t.parentNode && t.parentNode.removeChild(t);
    o.animateAll();
  },
  drop: me,
};
_extends(Remove, { pluginName: "removeOnSpill" });
var be;
function SwapPlugin() {
  function Swap() {
    this.defaults = { swapClass: "sortable-swap-highlight" };
  }
  Swap.prototype = {
    dragStart: function dragStart(e) {
      var t = e.dragEl;
      be = t;
    },
    dragOverValid: function dragOverValid(e) {
      var t = e.completed,
        n = e.target,
        o = e.onMove,
        r = e.activeSortable,
        a = e.changed,
        i = e.cancel;
      if (r.options.swap) {
        var l = this.sortable.el,
          s = this.options;
        if (n && n !== l) {
          var c = be;
          if (false !== o(n)) {
            toggleClass(n, s.swapClass, true);
            be = n;
          } else be = null;
          c && c !== be && toggleClass(c, s.swapClass, false);
        }
        a();
        t(true);
        i();
      }
    },
    drop: function drop(e) {
      var t = e.activeSortable,
        n = e.putSortable,
        o = e.dragEl;
      var r = n || this.sortable;
      var a = this.options;
      be && toggleClass(be, a.swapClass, false);
      if (be && (a.swap || (n && n.options.swap)) && o !== be) {
        r.captureAnimationState();
        r !== t && t.captureAnimationState();
        swapNodes(o, be);
        r.animateAll();
        r !== t && t.animateAll();
      }
    },
    nulling: function nulling() {
      be = null;
    },
  };
  return _extends(Swap, {
    pluginName: "swap",
    eventProperties: function eventProperties() {
      return { swapItem: be };
    },
  });
}
function swapNodes(e, t) {
  var n,
    o,
    r = e.parentNode,
    a = t.parentNode;
  if (r && a && !r.isEqualNode(t) && !a.isEqualNode(e)) {
    n = index(e);
    o = index(t);
    r.isEqualNode(a) && n < o && o++;
    r.insertBefore(t, r.children[n]);
    a.insertBefore(e, a.children[o]);
  }
}
var Se,
  _e,
  ye,
  Ee,
  we,
  De = [],
  Ce = [],
  xe = false,
  Ae = false,
  Te = false;
function MultiDragPlugin() {
  function MultiDrag(e) {
    for (var t in this)
      "_" === t.charAt(0) &&
        "function" === typeof this[t] &&
        (this[t] = this[t].bind(this));
    if (e.options.supportPointer)
      on(document, "pointerup", this._deselectMultiDrag);
    else {
      on(document, "mouseup", this._deselectMultiDrag);
      on(document, "touchend", this._deselectMultiDrag);
    }
    on(document, "keydown", this._checkKeyDown);
    on(document, "keyup", this._checkKeyUp);
    this.defaults = {
      selectedClass: "sortable-selected",
      multiDragKey: null,
      setData: function setData(t, n) {
        var o = "";
        De.length && _e === e
          ? De.forEach(function (e, t) {
              o += (t ? ", " : "") + e.textContent;
            })
          : (o = n.textContent);
        t.setData("Text", o);
      },
    };
  }
  MultiDrag.prototype = {
    multiDragKeyDown: false,
    isMultiDrag: false,
    delayStartGlobal: function delayStartGlobal(e) {
      var t = e.dragEl;
      ye = t;
    },
    delayEnded: function delayEnded() {
      this.isMultiDrag = ~De.indexOf(ye);
    },
    setupClone: function setupClone(e) {
      var t = e.sortable,
        n = e.cancel;
      if (this.isMultiDrag) {
        for (var o = 0; o < De.length; o++) {
          Ce.push(clone(De[o]));
          Ce[o].sortableIndex = De[o].sortableIndex;
          Ce[o].draggable = false;
          Ce[o].style["will-change"] = "";
          toggleClass(Ce[o], this.options.selectedClass, false);
          De[o] === ye && toggleClass(Ce[o], this.options.chosenClass, false);
        }
        t._hideClone();
        n();
      }
    },
    clone: function clone(e) {
      var t = e.sortable,
        n = e.rootEl,
        o = e.dispatchSortableEvent,
        r = e.cancel;
      if (
        this.isMultiDrag &&
        !this.options.removeCloneOnHide &&
        De.length &&
        _e === t
      ) {
        insertMultiDragClones(true, n);
        o("clone");
        r();
      }
    },
    showClone: function showClone(e) {
      var t = e.cloneNowShown,
        n = e.rootEl,
        o = e.cancel;
      if (this.isMultiDrag) {
        insertMultiDragClones(false, n);
        Ce.forEach(function (e) {
          css(e, "display", "");
        });
        t();
        we = false;
        o();
      }
    },
    hideClone: function hideClone(e) {
      var t = this;
      e.sortable;
      var n = e.cloneNowHidden,
        o = e.cancel;
      if (this.isMultiDrag) {
        Ce.forEach(function (e) {
          css(e, "display", "none");
          t.options.removeCloneOnHide &&
            e.parentNode &&
            e.parentNode.removeChild(e);
        });
        n();
        we = true;
        o();
      }
    },
    dragStartGlobal: function dragStartGlobal(e) {
      e.sortable;
      !this.isMultiDrag && _e && _e.multiDrag._deselectMultiDrag();
      De.forEach(function (e) {
        e.sortableIndex = index(e);
      });
      De = De.sort(function (e, t) {
        return e.sortableIndex - t.sortableIndex;
      });
      Te = true;
    },
    dragStarted: function dragStarted(e) {
      var t = this;
      var n = e.sortable;
      if (this.isMultiDrag) {
        if (this.options.sort) {
          n.captureAnimationState();
          if (this.options.animation) {
            De.forEach(function (e) {
              e !== ye && css(e, "position", "absolute");
            });
            var o = getRect(ye, false, true, true);
            De.forEach(function (e) {
              e !== ye && setRect(e, o);
            });
            Ae = true;
            xe = true;
          }
        }
        n.animateAll(function () {
          Ae = false;
          xe = false;
          t.options.animation &&
            De.forEach(function (e) {
              unsetRect(e);
            });
          t.options.sort && removeMultiDragElements();
        });
      }
    },
    dragOver: function dragOver(e) {
      var t = e.target,
        n = e.completed,
        o = e.cancel;
      if (Ae && ~De.indexOf(t)) {
        n(false);
        o();
      }
    },
    revert: function revert(e) {
      var t = e.fromSortable,
        n = e.rootEl,
        o = e.sortable,
        r = e.dragRect;
      if (De.length > 1) {
        De.forEach(function (e) {
          o.addAnimationState({ target: e, rect: Ae ? getRect(e) : r });
          unsetRect(e);
          e.fromRect = r;
          t.removeAnimationState(e);
        });
        Ae = false;
        insertMultiDragElements(!this.options.removeCloneOnHide, n);
      }
    },
    dragOverCompleted: function dragOverCompleted(e) {
      var t = e.sortable,
        n = e.isOwner,
        o = e.insertion,
        r = e.activeSortable,
        a = e.parentEl,
        i = e.putSortable;
      var l = this.options;
      if (o) {
        n && r._hideClone();
        xe = false;
        if (
          l.animation &&
          De.length > 1 &&
          (Ae || (!n && !r.options.sort && !i))
        ) {
          var s = getRect(ye, false, true, true);
          De.forEach(function (e) {
            if (e !== ye) {
              setRect(e, s);
              a.appendChild(e);
            }
          });
          Ae = true;
        }
        if (!n) {
          Ae || removeMultiDragElements();
          if (De.length > 1) {
            var c = we;
            r._showClone(t);
            r.options.animation &&
              !we &&
              c &&
              Ce.forEach(function (e) {
                r.addAnimationState({ target: e, rect: Ee });
                e.fromRect = Ee;
                e.thisAnimationDuration = null;
              });
          } else r._showClone(t);
        }
      }
    },
    dragOverAnimationCapture: function dragOverAnimationCapture(e) {
      var t = e.dragRect,
        n = e.isOwner,
        o = e.activeSortable;
      De.forEach(function (e) {
        e.thisAnimationDuration = null;
      });
      if (o.options.animation && !n && o.multiDrag.isMultiDrag) {
        Ee = _extends({}, t);
        var r = matrix(ye, true);
        Ee.top -= r.f;
        Ee.left -= r.e;
      }
    },
    dragOverAnimationComplete: function dragOverAnimationComplete() {
      if (Ae) {
        Ae = false;
        removeMultiDragElements();
      }
    },
    drop: function drop(e) {
      var t = e.originalEvent,
        n = e.rootEl,
        o = e.parentEl,
        r = e.sortable,
        a = e.dispatchSortableEvent,
        i = e.oldIndex,
        l = e.putSortable;
      var s = l || this.sortable;
      if (t) {
        var c = this.options,
          d = o.children;
        if (!Te) {
          c.multiDragKey && !this.multiDragKeyDown && this._deselectMultiDrag();
          toggleClass(ye, c.selectedClass, !~De.indexOf(ye));
          if (~De.indexOf(ye)) {
            De.splice(De.indexOf(ye), 1);
            Se = null;
            dispatchEvent({
              sortable: r,
              rootEl: n,
              name: "deselect",
              targetEl: ye,
              originalEvt: t,
            });
          } else {
            De.push(ye);
            dispatchEvent({
              sortable: r,
              rootEl: n,
              name: "select",
              targetEl: ye,
              originalEvt: t,
            });
            if (t.shiftKey && Se && r.el.contains(Se)) {
              var f = index(Se),
                h = index(ye);
              if (~f && ~h && f !== h) {
                var g, p;
                if (h > f) {
                  p = f;
                  g = h;
                } else {
                  p = h;
                  g = f + 1;
                }
                for (; p < g; p++)
                  if (!~De.indexOf(d[p])) {
                    toggleClass(d[p], c.selectedClass, true);
                    De.push(d[p]);
                    dispatchEvent({
                      sortable: r,
                      rootEl: n,
                      name: "select",
                      targetEl: d[p],
                      originalEvt: t,
                    });
                  }
              }
            } else Se = ye;
            _e = s;
          }
        }
        if (Te && this.isMultiDrag) {
          Ae = false;
          if ((o[u].options.sort || o !== n) && De.length > 1) {
            var v = getRect(ye),
              m = index(ye, ":not(." + this.options.selectedClass + ")");
            !xe && c.animation && (ye.thisAnimationDuration = null);
            s.captureAnimationState();
            if (!xe) {
              if (c.animation) {
                ye.fromRect = v;
                De.forEach(function (e) {
                  e.thisAnimationDuration = null;
                  if (e !== ye) {
                    var t = Ae ? getRect(e) : v;
                    e.fromRect = t;
                    s.addAnimationState({ target: e, rect: t });
                  }
                });
              }
              removeMultiDragElements();
              De.forEach(function (e) {
                d[m] ? o.insertBefore(e, d[m]) : o.appendChild(e);
                m++;
              });
              if (i === index(ye)) {
                var b = false;
                De.forEach(function (e) {
                  e.sortableIndex === index(e) || (b = true);
                });
                b && a("update");
              }
            }
            De.forEach(function (e) {
              unsetRect(e);
            });
            s.animateAll();
          }
          _e = s;
        }
        (n === o || (l && "clone" !== l.lastPutMode)) &&
          Ce.forEach(function (e) {
            e.parentNode && e.parentNode.removeChild(e);
          });
      }
    },
    nullingGlobal: function nullingGlobal() {
      this.isMultiDrag = Te = false;
      Ce.length = 0;
    },
    destroyGlobal: function destroyGlobal() {
      this._deselectMultiDrag();
      off(document, "pointerup", this._deselectMultiDrag);
      off(document, "mouseup", this._deselectMultiDrag);
      off(document, "touchend", this._deselectMultiDrag);
      off(document, "keydown", this._checkKeyDown);
      off(document, "keyup", this._checkKeyUp);
    },
    _deselectMultiDrag: function _deselectMultiDrag(e) {
      if (
        ("undefined" === typeof Te || !Te) &&
        _e === this.sortable &&
        (!e ||
          !closest(
            e.target,
            this.options.draggable,
            this.sortable.el,
            false
          )) &&
        (!e || 0 === e.button)
      )
        while (De.length) {
          var t = De[0];
          toggleClass(t, this.options.selectedClass, false);
          De.shift();
          dispatchEvent({
            sortable: this.sortable,
            rootEl: this.sortable.el,
            name: "deselect",
            targetEl: t,
            originalEvt: e,
          });
        }
    },
    _checkKeyDown: function _checkKeyDown(e) {
      e.key === this.options.multiDragKey && (this.multiDragKeyDown = true);
    },
    _checkKeyUp: function _checkKeyUp(e) {
      e.key === this.options.multiDragKey && (this.multiDragKeyDown = false);
    },
  };
  return _extends(MultiDrag, {
    pluginName: "multiDrag",
    utils: {
      /**
       * Selects the provided multi-drag item
       * @param  {HTMLElement} el    The element to be selected
       */
      select: function select(e) {
        var t = e.parentNode[u];
        if (t && t.options.multiDrag && !~De.indexOf(e)) {
          if (_e && _e !== t) {
            _e.multiDrag._deselectMultiDrag();
            _e = t;
          }
          toggleClass(e, t.options.selectedClass, true);
          De.push(e);
        }
      },
      /**
       * Deselects the provided multi-drag item
       * @param  {HTMLElement} el    The element to be deselected
       */
      deselect: function deselect(e) {
        var t = e.parentNode[u],
          n = De.indexOf(e);
        if (t && t.options.multiDrag && ~n) {
          toggleClass(e, t.options.selectedClass, false);
          De.splice(n, 1);
        }
      },
    },
    eventProperties: function eventProperties() {
      var e = this;
      var t = [],
        n = [];
      De.forEach(function (o) {
        t.push({ multiDragElement: o, index: o.sortableIndex });
        var r;
        r =
          Ae && o !== ye
            ? -1
            : Ae
            ? index(o, ":not(." + e.options.selectedClass + ")")
            : index(o);
        n.push({ multiDragElement: o, index: r });
      });
      return {
        items: _toConsumableArray(De),
        clones: [].concat(Ce),
        oldIndicies: t,
        newIndicies: n,
      };
    },
    optionListeners: {
      multiDragKey: function multiDragKey(e) {
        e = e.toLowerCase();
        "ctrl" === e
          ? (e = "Control")
          : e.length > 1 && (e = e.charAt(0).toUpperCase() + e.substr(1));
        return e;
      },
    },
  });
}
function insertMultiDragElements(e, t) {
  De.forEach(function (n, o) {
    var r = t.children[n.sortableIndex + (e ? Number(o) : 0)];
    r ? t.insertBefore(n, r) : t.appendChild(n);
  });
}
/**
 * Insert multi-drag clones
 * @param  {[Boolean]} elementsInserted  Whether the multi-drag elements are inserted
 * @param  {HTMLElement} rootEl
 */ function insertMultiDragClones(e, t) {
  Ce.forEach(function (n, o) {
    var r = t.children[n.sortableIndex + (e ? Number(o) : 0)];
    r ? t.insertBefore(n, r) : t.appendChild(n);
  });
}
function removeMultiDragElements() {
  De.forEach(function (e) {
    e !== ye && e.parentNode && e.parentNode.removeChild(e);
  });
}
Sortable.mount(new AutoScrollPlugin());
Sortable.mount(Remove, Revert);
export default Sortable;
export { MultiDragPlugin as MultiDrag, Sortable, SwapPlugin as Swap };
