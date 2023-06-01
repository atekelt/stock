var e =
  "undefined" !== typeof globalThis
    ? globalThis
    : "undefined" !== typeof self
    ? self
    : global;
var t = {};
(function (e, n) {
  t = e.document
    ? n(e, true)
    : function (e) {
        if (!e.document)
          throw new Error("jQuery requires a window with a document");
        return n(e);
      };
})("undefined" !== typeof window ? window : t, function (t, n) {
  var r = [];
  var i = Object.getPrototypeOf;
  var o = r.slice;
  var a = r.flat
    ? function (e) {
        return r.flat.call(e);
      }
    : function (e) {
        return r.concat.apply([], e);
      };
  var s = r.push;
  var u = r.indexOf;
  var l = {};
  var c = l.toString;
  var f = l.hasOwnProperty;
  var d = f.toString;
  var p = d.call(Object);
  var h = {};
  var g = function isFunction(e) {
    return (
      "function" === typeof e &&
      "number" !== typeof e.nodeType &&
      "function" !== typeof e.item
    );
  };
  var m = function isWindow(e) {
    return null != e && e === e.window;
  };
  var v = t.document;
  var y = { type: true, src: true, nonce: true, noModule: true };
  function DOMEval(e, t, n) {
    n = n || v;
    var r,
      i,
      o = n.createElement("script");
    o.text = e;
    if (t)
      for (r in y) {
        i = t[r] || (t.getAttribute && t.getAttribute(r));
        i && o.setAttribute(r, i);
      }
    n.head.appendChild(o).parentNode.removeChild(o);
  }
  function toType(e) {
    return null == e
      ? e + ""
      : "object" === typeof e || "function" === typeof e
      ? l[c.call(e)] || "object"
      : typeof e;
  }
  var x = "3.6.0",
    jQuery = function (e, t) {
      return new jQuery.fn.init(e, t);
    };
  jQuery.fn = jQuery.prototype = {
    jquery: x,
    constructor: jQuery,
    length: 0,
    toArray: function () {
      return o.call(this || e);
    },
    get: function (t) {
      return null == t
        ? o.call(this || e)
        : t < 0
        ? (this || e)[t + (this || e).length]
        : (this || e)[t];
    },
    pushStack: function (t) {
      var n = jQuery.merge(this.constructor(), t);
      n.prevObject = this || e;
      return n;
    },
    each: function (t) {
      return jQuery.each(this || e, t);
    },
    map: function (t) {
      return this.pushStack(
        jQuery.map(this || e, function (e, n) {
          return t.call(e, n, e);
        })
      );
    },
    slice: function () {
      return this.pushStack(o.apply(this || e, arguments));
    },
    first: function () {
      return this.eq(0);
    },
    last: function () {
      return this.eq(-1);
    },
    even: function () {
      return this.pushStack(
        jQuery.grep(this || e, function (e, t) {
          return (t + 1) % 2;
        })
      );
    },
    odd: function () {
      return this.pushStack(
        jQuery.grep(this || e, function (e, t) {
          return t % 2;
        })
      );
    },
    eq: function (t) {
      var n = (this || e).length,
        r = +t + (t < 0 ? n : 0);
      return this.pushStack(r >= 0 && r < n ? [(this || e)[r]] : []);
    },
    end: function () {
      return (this || e).prevObject || this.constructor();
    },
    push: s,
    sort: r.sort,
    splice: r.splice,
  };
  jQuery.extend = jQuery.fn.extend = function () {
    var t,
      n,
      r,
      i,
      o,
      a,
      s = arguments[0] || {},
      u = 1,
      l = arguments.length,
      c = false;
    if ("boolean" === typeof s) {
      c = s;
      s = arguments[u] || {};
      u++;
    }
    "object" === typeof s || g(s) || (s = {});
    if (u === l) {
      s = this || e;
      u--;
    }
    for (; u < l; u++)
      if (null != (t = arguments[u]))
        for (n in t) {
          i = t[n];
          if ("__proto__" !== n && s !== i)
            if (c && i && (jQuery.isPlainObject(i) || (o = Array.isArray(i)))) {
              r = s[n];
              a =
                o && !Array.isArray(r)
                  ? []
                  : o || jQuery.isPlainObject(r)
                  ? r
                  : {};
              o = false;
              s[n] = jQuery.extend(c, a, i);
            } else void 0 !== i && (s[n] = i);
        }
    return s;
  };
  jQuery.extend({
    expando: "jQuery" + (x + Math.random()).replace(/\D/g, ""),
    isReady: true,
    error: function (e) {
      throw new Error(e);
    },
    noop: function () {},
    isPlainObject: function (e) {
      var t, n;
      if (!e || "[object Object]" !== c.call(e)) return false;
      t = i(e);
      if (!t) return true;
      n = f.call(t, "constructor") && t.constructor;
      return "function" === typeof n && d.call(n) === p;
    },
    isEmptyObject: function (e) {
      var t;
      for (t in e) return false;
      return true;
    },
    globalEval: function (e, t, n) {
      DOMEval(e, { nonce: t && t.nonce }, n);
    },
    each: function (e, t) {
      var n,
        r = 0;
      if (isArrayLike(e)) {
        n = e.length;
        for (; r < n; r++) if (false === t.call(e[r], r, e[r])) break;
      } else for (r in e) if (false === t.call(e[r], r, e[r])) break;
      return e;
    },
    makeArray: function (e, t) {
      var n = t || [];
      null != e &&
        (isArrayLike(Object(e))
          ? jQuery.merge(n, "string" === typeof e ? [e] : e)
          : s.call(n, e));
      return n;
    },
    inArray: function (e, t, n) {
      return null == t ? -1 : u.call(t, e, n);
    },
    merge: function (e, t) {
      var n = +t.length,
        r = 0,
        i = e.length;
      for (; r < n; r++) e[i++] = t[r];
      e.length = i;
      return e;
    },
    grep: function (e, t, n) {
      var r,
        i = [],
        o = 0,
        a = e.length,
        s = !n;
      for (; o < a; o++) {
        r = !t(e[o], o);
        r !== s && i.push(e[o]);
      }
      return i;
    },
    map: function (e, t, n) {
      var r,
        i,
        o = 0,
        s = [];
      if (isArrayLike(e)) {
        r = e.length;
        for (; o < r; o++) {
          i = t(e[o], o, n);
          null != i && s.push(i);
        }
      } else
        for (o in e) {
          i = t(e[o], o, n);
          null != i && s.push(i);
        }
      return a(s);
    },
    guid: 1,
    support: h,
  });
  "function" === typeof Symbol &&
    (jQuery.fn[Symbol.iterator] = r[Symbol.iterator]);
  jQuery.each(
    "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
      " "
    ),
    function (e, t) {
      l["[object " + t + "]"] = t.toLowerCase();
    }
  );
  function isArrayLike(e) {
    var t = !!e && "length" in e && e.length,
      n = toType(e);
    return (
      !g(e) &&
      !m(e) &&
      ("array" === n ||
        0 === t ||
        ("number" === typeof t && t > 0 && t - 1 in e))
    );
  }
  var b = (function (e) {
    var t,
      n,
      r,
      i,
      o,
      a,
      s,
      u,
      l,
      c,
      f,
      d,
      p,
      h,
      g,
      m,
      v,
      y,
      x,
      b = "sizzle" + 1 * new Date(),
      w = e.document,
      T = 0,
      C = 0,
      S = createCache(),
      A = createCache(),
      k = createCache(),
      E = createCache(),
      sortOrder = function (e, t) {
        e === t && (f = true);
        return 0;
      },
      N = {}.hasOwnProperty,
      D = [],
      j = D.pop,
      P = D.push,
      L = D.push,
      q = D.slice,
      indexOf = function (e, t) {
        var n = 0,
          r = e.length;
        for (; n < r; n++) if (e[n] === t) return n;
        return -1;
      },
      H =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      O = "[\\x20\\t\\r\\n\\f]",
      M =
        "(?:\\\\[\\da-fA-F]{1,6}" +
        O +
        "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
      F =
        "\\[" +
        O +
        "*(" +
        M +
        ")(?:" +
        O +
        "*([*^$|!~]?=)" +
        O +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        M +
        "))|)" +
        O +
        "*\\]",
      z =
        ":(" +
        M +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        F +
        ")*)|.*)\\)|)",
      I = new RegExp(O + "+", "g"),
      R = new RegExp("^" + O + "+|((?:^|[^\\\\])(?:\\\\.)*)" + O + "+$", "g"),
      W = new RegExp("^" + O + "*," + O + "*"),
      B = new RegExp("^" + O + "*([>+~]|" + O + ")" + O + "*"),
      $ = new RegExp(O + "|>"),
      _ = new RegExp(z),
      U = new RegExp("^" + M + "$"),
      X = {
        ID: new RegExp("^#(" + M + ")"),
        CLASS: new RegExp("^\\.(" + M + ")"),
        TAG: new RegExp("^(" + M + "|[*])"),
        ATTR: new RegExp("^" + F),
        PSEUDO: new RegExp("^" + z),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            O +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            O +
            "*(?:([+-]|)" +
            O +
            "*(\\d+)|))" +
            O +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + H + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            O +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            O +
            "*((?:-\\d)?\\d*)" +
            O +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      G = /HTML$/i,
      V = /^(?:input|select|textarea|button)$/i,
      Y = /^h\d$/i,
      Q = /^[^{]+\{\s*\[native \w/,
      J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      K = /[+~]/,
      Z = new RegExp("\\\\[\\da-fA-F]{1,6}" + O + "?|\\\\([^\\r\\n\\f])", "g"),
      funescape = function (e, t) {
        var n = "0x" + e.slice(1) - 65536;
        return (
          t ||
          (n < 0
            ? String.fromCharCode(n + 65536)
            : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
        );
      },
      ee = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      fcssescape = function (e, t) {
        return t
          ? "\0" === e
            ? "�"
            : e.slice(0, -1) +
              "\\" +
              e.charCodeAt(e.length - 1).toString(16) +
              " "
          : "\\" + e;
      },
      unloadHandler = function () {
        d();
      },
      te = addCombinator(
        function (e) {
          return true === e.disabled && "fieldset" === e.nodeName.toLowerCase();
        },
        { dir: "parentNode", next: "legend" }
      );
    try {
      L.apply((D = q.call(w.childNodes)), w.childNodes);
      D[w.childNodes.length].nodeType;
    } catch (e) {
      L = {
        apply: D.length
          ? function (e, t) {
              P.apply(e, q.call(t));
            }
          : function (e, t) {
              var n = e.length,
                r = 0;
              while ((e[n++] = t[r++]));
              e.length = n - 1;
            },
      };
    }
    function Sizzle(e, t, r, i) {
      var o,
        s,
        l,
        c,
        f,
        h,
        v,
        y = t && t.ownerDocument,
        w = t ? t.nodeType : 9;
      r = r || [];
      if ("string" !== typeof e || !e || (1 !== w && 9 !== w && 11 !== w))
        return r;
      if (!i) {
        d(t);
        t = t || p;
        if (g) {
          if (11 !== w && (f = J.exec(e)))
            if ((o = f[1])) {
              if (9 === w) {
                if (!(l = t.getElementById(o))) return r;
                if (l.id === o) {
                  r.push(l);
                  return r;
                }
              } else if (
                y &&
                (l = y.getElementById(o)) &&
                x(t, l) &&
                l.id === o
              ) {
                r.push(l);
                return r;
              }
            } else {
              if (f[2]) {
                L.apply(r, t.getElementsByTagName(e));
                return r;
              }
              if (
                (o = f[3]) &&
                n.getElementsByClassName &&
                t.getElementsByClassName
              ) {
                L.apply(r, t.getElementsByClassName(o));
                return r;
              }
            }
          if (
            n.qsa &&
            !E[e + " "] &&
            (!m || !m.test(e)) &&
            (1 !== w || "object" !== t.nodeName.toLowerCase())
          ) {
            v = e;
            y = t;
            if (1 === w && ($.test(e) || B.test(e))) {
              y = (K.test(e) && testContext(t.parentNode)) || t;
              (y === t && n.scope) ||
                ((c = t.getAttribute("id"))
                  ? (c = c.replace(ee, fcssescape))
                  : t.setAttribute("id", (c = b)));
              h = a(e);
              s = h.length;
              while (s--)
                h[s] = (c ? "#" + c : ":scope") + " " + toSelector(h[s]);
              v = h.join(",");
            }
            try {
              L.apply(r, y.querySelectorAll(v));
              return r;
            } catch (t) {
              E(e, true);
            } finally {
              c === b && t.removeAttribute("id");
            }
          }
        }
      }
      return u(e.replace(R, "$1"), t, r, i);
    }
    /**
     * Create key-value caches of limited size
     * @returns {function(string, object)} Returns the Object data after storing it on itself with
     *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
     *	deleting the oldest entry
     */ function createCache() {
      var e = [];
      function cache(t, n) {
        e.push(t + " ") > r.cacheLength && delete cache[e.shift()];
        return (cache[t + " "] = n);
      }
      return cache;
    }
    /**
     * Mark a function for special use by Sizzle
     * @param {Function} fn The function to mark
     */ function markFunction(e) {
      e[b] = true;
      return e;
    }
    /**
     * Support testing using an element
     * @param {Function} fn Passed the created element and returns a boolean result
     */ function assert(e) {
      var t = p.createElement("fieldset");
      try {
        return !!e(t);
      } catch (e) {
        return false;
      } finally {
        t.parentNode && t.parentNode.removeChild(t);
        t = null;
      }
    }
    /**
     * Adds the same handler for all of the specified attrs
     * @param {String} attrs Pipe-separated list of attributes
     * @param {Function} handler The method that will be applied
     */ function addHandle(e, t) {
      var n = e.split("|"),
        i = n.length;
      while (i--) r.attrHandle[n[i]] = t;
    }
    /**
     * Checks document order of two siblings
     * @param {Element} a
     * @param {Element} b
     * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
     */ function siblingCheck(e, t) {
      var n = t && e,
        r =
          n &&
          1 === e.nodeType &&
          1 === t.nodeType &&
          e.sourceIndex - t.sourceIndex;
      if (r) return r;
      if (n) while ((n = n.nextSibling)) if (n === t) return -1;
      return e ? 1 : -1;
    }
    /**
     * Returns a function to use in pseudos for input types
     * @param {String} type
     */ function createInputPseudo(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();
        return "input" === n && t.type === e;
      };
    }
    /**
     * Returns a function to use in pseudos for buttons
     * @param {String} type
     */ function createButtonPseudo(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();
        return ("input" === n || "button" === n) && t.type === e;
      };
    }
    /**
     * Returns a function to use in pseudos for :enabled/:disabled
     * @param {Boolean} disabled true for :disabled; false for :enabled
     */ function createDisabledPseudo(e) {
      return function (t) {
        return "form" in t
          ? t.parentNode && false === t.disabled
            ? "label" in t
              ? "label" in t.parentNode
                ? t.parentNode.disabled === e
                : t.disabled === e
              : t.isDisabled === e || (t.isDisabled !== !e && te(t) === e)
            : t.disabled === e
          : "label" in t && t.disabled === e;
      };
    }
    /**
     * Returns a function to use in pseudos for positionals
     * @param {Function} fn
     */ function createPositionalPseudo(e) {
      return markFunction(function (t) {
        t = +t;
        return markFunction(function (n, r) {
          var i,
            o = e([], n.length, t),
            a = o.length;
          while (a--) n[(i = o[a])] && (n[i] = !(r[i] = n[i]));
        });
      });
    }
    /**
     * Checks a node for validity as a Sizzle context
     * @param {Element|Object=} context
     * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
     */ function testContext(e) {
      return e && "undefined" !== typeof e.getElementsByTagName && e;
    }
    n = Sizzle.support = {};
    /**
     * Detects XML nodes
     * @param {Element|Object} elem An element or a document
     * @returns {Boolean} True iff elem is a non-HTML XML node
     */ o = Sizzle.isXML = function (e) {
      var t = e && e.namespaceURI,
        n = e && (e.ownerDocument || e).documentElement;
      return !G.test(t || (n && n.nodeName) || "HTML");
    };
    /**
     * Sets document-related variables once based on the current document
     * @param {Element|Object} [doc] An element or document object to use to set the document
     * @returns {Object} Returns the current document
     */ d = Sizzle.setDocument = function (e) {
      var t,
        i,
        a = e ? e.ownerDocument || e : w;
      if (a == p || 9 !== a.nodeType || !a.documentElement) return p;
      p = a;
      h = p.documentElement;
      g = !o(p);
      w != p &&
        (i = p.defaultView) &&
        i.top !== i &&
        (i.addEventListener
          ? i.addEventListener("unload", unloadHandler, false)
          : i.attachEvent && i.attachEvent("onunload", unloadHandler));
      n.scope = assert(function (e) {
        h.appendChild(e).appendChild(p.createElement("div"));
        return (
          "undefined" !== typeof e.querySelectorAll &&
          !e.querySelectorAll(":scope fieldset div").length
        );
      });
      n.attributes = assert(function (e) {
        e.className = "i";
        return !e.getAttribute("className");
      });
      n.getElementsByTagName = assert(function (e) {
        e.appendChild(p.createComment(""));
        return !e.getElementsByTagName("*").length;
      });
      n.getElementsByClassName = Q.test(p.getElementsByClassName);
      n.getById = assert(function (e) {
        h.appendChild(e).id = b;
        return !p.getElementsByName || !p.getElementsByName(b).length;
      });
      if (n.getById) {
        r.filter.ID = function (e) {
          var t = e.replace(Z, funescape);
          return function (e) {
            return e.getAttribute("id") === t;
          };
        };
        r.find.ID = function (e, t) {
          if ("undefined" !== typeof t.getElementById && g) {
            var n = t.getElementById(e);
            return n ? [n] : [];
          }
        };
      } else {
        r.filter.ID = function (e) {
          var t = e.replace(Z, funescape);
          return function (e) {
            var n =
              "undefined" !== typeof e.getAttributeNode &&
              e.getAttributeNode("id");
            return n && n.value === t;
          };
        };
        r.find.ID = function (e, t) {
          if ("undefined" !== typeof t.getElementById && g) {
            var n,
              r,
              i,
              o = t.getElementById(e);
            if (o) {
              n = o.getAttributeNode("id");
              if (n && n.value === e) return [o];
              i = t.getElementsByName(e);
              r = 0;
              while ((o = i[r++])) {
                n = o.getAttributeNode("id");
                if (n && n.value === e) return [o];
              }
            }
            return [];
          }
        };
      }
      r.find.TAG = n.getElementsByTagName
        ? function (e, t) {
            return "undefined" !== typeof t.getElementsByTagName
              ? t.getElementsByTagName(e)
              : n.qsa
              ? t.querySelectorAll(e)
              : void 0;
          }
        : function (e, t) {
            var n,
              r = [],
              i = 0,
              o = t.getElementsByTagName(e);
            if ("*" === e) {
              while ((n = o[i++])) 1 === n.nodeType && r.push(n);
              return r;
            }
            return o;
          };
      r.find.CLASS =
        n.getElementsByClassName &&
        function (e, t) {
          if ("undefined" !== typeof t.getElementsByClassName && g)
            return t.getElementsByClassName(e);
        };
      v = [];
      m = [];
      if ((n.qsa = Q.test(p.querySelectorAll))) {
        assert(function (e) {
          var t;
          h.appendChild(e).innerHTML =
            "<a id='" +
            b +
            "'></a><select id='" +
            b +
            "-\r\\' msallowcapture=''><option selected=''></option></select>";
          e.querySelectorAll("[msallowcapture^='']").length &&
            m.push("[*^$]=" + O + "*(?:''|\"\")");
          e.querySelectorAll("[selected]").length ||
            m.push("\\[" + O + "*(?:value|" + H + ")");
          e.querySelectorAll("[id~=" + b + "-]").length || m.push("~=");
          t = p.createElement("input");
          t.setAttribute("name", "");
          e.appendChild(t);
          e.querySelectorAll("[name='']").length ||
            m.push("\\[" + O + "*name" + O + "*=" + O + "*(?:''|\"\")");
          e.querySelectorAll(":checked").length || m.push(":checked");
          e.querySelectorAll("a#" + b + "+*").length || m.push(".#.+[+~]");
          e.querySelectorAll("\\\f");
          m.push("[\\r\\n\\f]");
        });
        assert(function (e) {
          e.innerHTML =
            "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
          var t = p.createElement("input");
          t.setAttribute("type", "hidden");
          e.appendChild(t).setAttribute("name", "D");
          e.querySelectorAll("[name=d]").length &&
            m.push("name" + O + "*[*^$|!~]?=");
          2 !== e.querySelectorAll(":enabled").length &&
            m.push(":enabled", ":disabled");
          h.appendChild(e).disabled = true;
          2 !== e.querySelectorAll(":disabled").length &&
            m.push(":enabled", ":disabled");
          e.querySelectorAll("*,:x");
          m.push(",.*:");
        });
      }
      (n.matchesSelector = Q.test(
        (y =
          h.matches ||
          h.webkitMatchesSelector ||
          h.mozMatchesSelector ||
          h.oMatchesSelector ||
          h.msMatchesSelector)
      )) &&
        assert(function (e) {
          n.disconnectedMatch = y.call(e, "*");
          y.call(e, "[s!='']:x");
          v.push("!=", z);
        });
      m = m.length && new RegExp(m.join("|"));
      v = v.length && new RegExp(v.join("|"));
      t = Q.test(h.compareDocumentPosition);
      x =
        t || Q.test(h.contains)
          ? function (e, t) {
              var n = 9 === e.nodeType ? e.documentElement : e,
                r = t && t.parentNode;
              return (
                e === r ||
                !!(
                  r &&
                  1 === r.nodeType &&
                  (n.contains
                    ? n.contains(r)
                    : e.compareDocumentPosition &&
                      16 & e.compareDocumentPosition(r))
                )
              );
            }
          : function (e, t) {
              if (t) while ((t = t.parentNode)) if (t === e) return true;
              return false;
            };
      sortOrder = t
        ? function (e, t) {
            if (e === t) {
              f = true;
              return 0;
            }
            var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
            if (r) return r;
            r =
              (e.ownerDocument || e) == (t.ownerDocument || t)
                ? e.compareDocumentPosition(t)
                : 1;
            return 1 & r ||
              (!n.sortDetached && t.compareDocumentPosition(e) === r)
              ? e == p || (e.ownerDocument == w && x(w, e))
                ? -1
                : t == p || (t.ownerDocument == w && x(w, t))
                ? 1
                : c
                ? indexOf(c, e) - indexOf(c, t)
                : 0
              : 4 & r
              ? -1
              : 1;
          }
        : function (e, t) {
            if (e === t) {
              f = true;
              return 0;
            }
            var n,
              r = 0,
              i = e.parentNode,
              o = t.parentNode,
              a = [e],
              s = [t];
            if (!i || !o)
              return e == p
                ? -1
                : t == p
                ? 1
                : i
                ? -1
                : o
                ? 1
                : c
                ? indexOf(c, e) - indexOf(c, t)
                : 0;
            if (i === o) return siblingCheck(e, t);
            n = e;
            while ((n = n.parentNode)) a.unshift(n);
            n = t;
            while ((n = n.parentNode)) s.unshift(n);
            while (a[r] === s[r]) r++;
            return r
              ? siblingCheck(a[r], s[r])
              : a[r] == w
              ? -1
              : s[r] == w
              ? 1
              : 0;
          };
      return p;
    };
    Sizzle.matches = function (e, t) {
      return Sizzle(e, null, null, t);
    };
    Sizzle.matchesSelector = function (e, t) {
      d(e);
      if (
        n.matchesSelector &&
        g &&
        !E[t + " "] &&
        (!v || !v.test(t)) &&
        (!m || !m.test(t))
      )
        try {
          var r = y.call(e, t);
          if (
            r ||
            n.disconnectedMatch ||
            (e.document && 11 !== e.document.nodeType)
          )
            return r;
        } catch (e) {
          E(t, true);
        }
      return Sizzle(t, p, null, [e]).length > 0;
    };
    Sizzle.contains = function (e, t) {
      (e.ownerDocument || e) != p && d(e);
      return x(e, t);
    };
    Sizzle.attr = function (e, t) {
      (e.ownerDocument || e) != p && d(e);
      var i = r.attrHandle[t.toLowerCase()],
        o = i && N.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
      return void 0 !== o
        ? o
        : n.attributes || !g
        ? e.getAttribute(t)
        : (o = e.getAttributeNode(t)) && o.specified
        ? o.value
        : null;
    };
    Sizzle.escape = function (e) {
      return (e + "").replace(ee, fcssescape);
    };
    Sizzle.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    };
    /**
     * Document sorting and removing duplicates
     * @param {ArrayLike} results
     */ Sizzle.uniqueSort = function (e) {
      var t,
        r = [],
        i = 0,
        o = 0;
      f = !n.detectDuplicates;
      c = !n.sortStable && e.slice(0);
      e.sort(sortOrder);
      if (f) {
        while ((t = e[o++])) t === e[o] && (i = r.push(o));
        while (i--) e.splice(r[i], 1);
      }
      c = null;
      return e;
    };
    /**
     * Utility function for retrieving the text value of an array of DOM nodes
     * @param {Array|Element} elem
     */ i = Sizzle.getText = function (e) {
      var t,
        n = "",
        r = 0,
        o = e.nodeType;
      if (o) {
        if (1 === o || 9 === o || 11 === o) {
          if ("string" === typeof e.textContent) return e.textContent;
          for (e = e.firstChild; e; e = e.nextSibling) n += i(e);
        } else if (3 === o || 4 === o) return e.nodeValue;
      } else while ((t = e[r++])) n += i(t);
      return n;
    };
    r = Sizzle.selectors = {
      cacheLength: 50,
      createPseudo: markFunction,
      match: X,
      attrHandle: {},
      find: {},
      relative: {
        ">": { dir: "parentNode", first: true },
        " ": { dir: "parentNode" },
        "+": { dir: "previousSibling", first: true },
        "~": { dir: "previousSibling" },
      },
      preFilter: {
        ATTR: function (e) {
          e[1] = e[1].replace(Z, funescape);
          e[3] = (e[3] || e[4] || e[5] || "").replace(Z, funescape);
          "~=" === e[2] && (e[3] = " " + e[3] + " ");
          return e.slice(0, 4);
        },
        CHILD: function (e) {
          e[1] = e[1].toLowerCase();
          if ("nth" === e[1].slice(0, 3)) {
            e[3] || Sizzle.error(e[0]);
            e[4] = +(e[4]
              ? e[5] + (e[6] || 1)
              : 2 * ("even" === e[3] || "odd" === e[3]));
            e[5] = +(e[7] + e[8] || "odd" === e[3]);
          } else e[3] && Sizzle.error(e[0]);
          return e;
        },
        PSEUDO: function (e) {
          var t,
            n = !e[6] && e[2];
          if (X.CHILD.test(e[0])) return null;
          if (e[3]) e[2] = e[4] || e[5] || "";
          else if (
            n &&
            _.test(n) &&
            (t = a(n, true)) &&
            (t = n.indexOf(")", n.length - t) - n.length)
          ) {
            e[0] = e[0].slice(0, t);
            e[2] = n.slice(0, t);
          }
          return e.slice(0, 3);
        },
      },
      filter: {
        TAG: function (e) {
          var t = e.replace(Z, funescape).toLowerCase();
          return "*" === e
            ? function () {
                return true;
              }
            : function (e) {
                return e.nodeName && e.nodeName.toLowerCase() === t;
              };
        },
        CLASS: function (e) {
          var t = S[e + " "];
          return (
            t ||
            ((t = new RegExp("(^|" + O + ")" + e + "(" + O + "|$)")) &&
              S(e, function (e) {
                return t.test(
                  ("string" === typeof e.className && e.className) ||
                    ("undefined" !== typeof e.getAttribute &&
                      e.getAttribute("class")) ||
                    ""
                );
              }))
          );
        },
        ATTR: function (e, t, n) {
          return function (r) {
            var i = Sizzle.attr(r, e);
            if (null == i) return "!=" === t;
            if (!t) return true;
            i += "";
            return "=" === t
              ? i === n
              : "!=" === t
              ? i !== n
              : "^=" === t
              ? n && 0 === i.indexOf(n)
              : "*=" === t
              ? n && i.indexOf(n) > -1
              : "$=" === t
              ? n && i.slice(-n.length) === n
              : "~=" === t
              ? (" " + i.replace(I, " ") + " ").indexOf(n) > -1
              : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-");
          };
        },
        CHILD: function (e, t, n, r, i) {
          var o = "nth" !== e.slice(0, 3),
            a = "last" !== e.slice(-4),
            s = "of-type" === t;
          return 1 === r && 0 === i
            ? function (e) {
                return !!e.parentNode;
              }
            : function (t, n, u) {
                var l,
                  c,
                  f,
                  d,
                  p,
                  h,
                  g = o !== a ? "nextSibling" : "previousSibling",
                  m = t.parentNode,
                  v = s && t.nodeName.toLowerCase(),
                  y = !u && !s,
                  x = false;
                if (m) {
                  if (o) {
                    while (g) {
                      d = t;
                      while ((d = d[g]))
                        if (
                          s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType
                        )
                          return false;
                      h = g = "only" === e && !h && "nextSibling";
                    }
                    return true;
                  }
                  h = [a ? m.firstChild : m.lastChild];
                  if (a && y) {
                    d = m;
                    f = d[b] || (d[b] = {});
                    c = f[d.uniqueID] || (f[d.uniqueID] = {});
                    l = c[e] || [];
                    p = l[0] === T && l[1];
                    x = p && l[2];
                    d = p && m.childNodes[p];
                    while ((d = (++p && d && d[g]) || (x = p = 0) || h.pop()))
                      if (1 === d.nodeType && ++x && d === t) {
                        c[e] = [T, p, x];
                        break;
                      }
                  } else {
                    if (y) {
                      d = t;
                      f = d[b] || (d[b] = {});
                      c = f[d.uniqueID] || (f[d.uniqueID] = {});
                      l = c[e] || [];
                      p = l[0] === T && l[1];
                      x = p;
                    }
                    if (false === x)
                      while ((d = (++p && d && d[g]) || (x = p = 0) || h.pop()))
                        if (
                          (s
                            ? d.nodeName.toLowerCase() === v
                            : 1 === d.nodeType) &&
                          ++x
                        ) {
                          if (y) {
                            f = d[b] || (d[b] = {});
                            c = f[d.uniqueID] || (f[d.uniqueID] = {});
                            c[e] = [T, x];
                          }
                          if (d === t) break;
                        }
                  }
                  x -= i;
                  return x === r || (x % r === 0 && x / r >= 0);
                }
              };
        },
        PSEUDO: function (e, t) {
          var n,
            i =
              r.pseudos[e] ||
              r.setFilters[e.toLowerCase()] ||
              Sizzle.error("unsupported pseudo: " + e);
          if (i[b]) return i(t);
          if (i.length > 1) {
            n = [e, e, "", t];
            return r.setFilters.hasOwnProperty(e.toLowerCase())
              ? markFunction(function (e, n) {
                  var r,
                    o = i(e, t),
                    a = o.length;
                  while (a--) {
                    r = indexOf(e, o[a]);
                    e[r] = !(n[r] = o[a]);
                  }
                })
              : function (e) {
                  return i(e, 0, n);
                };
          }
          return i;
        },
      },
      pseudos: {
        not: markFunction(function (e) {
          var t = [],
            n = [],
            r = s(e.replace(R, "$1"));
          return r[b]
            ? markFunction(function (e, t, n, i) {
                var o,
                  a = r(e, null, i, []),
                  s = e.length;
                while (s--) (o = a[s]) && (e[s] = !(t[s] = o));
              })
            : function (e, i, o) {
                t[0] = e;
                r(t, null, o, n);
                t[0] = null;
                return !n.pop();
              };
        }),
        has: markFunction(function (e) {
          return function (t) {
            return Sizzle(e, t).length > 0;
          };
        }),
        contains: markFunction(function (e) {
          e = e.replace(Z, funescape);
          return function (t) {
            return (t.textContent || i(t)).indexOf(e) > -1;
          };
        }),
        lang: markFunction(function (e) {
          U.test(e || "") || Sizzle.error("unsupported lang: " + e);
          e = e.replace(Z, funescape).toLowerCase();
          return function (t) {
            var n;
            do {
              if (
                (n = g
                  ? t.lang
                  : t.getAttribute("xml:lang") || t.getAttribute("lang"))
              ) {
                n = n.toLowerCase();
                return n === e || 0 === n.indexOf(e + "-");
              }
            } while ((t = t.parentNode) && 1 === t.nodeType);
            return false;
          };
        }),
        target: function (t) {
          var n = e.location && e.location.hash;
          return n && n.slice(1) === t.id;
        },
        root: function (e) {
          return e === h;
        },
        focus: function (e) {
          return (
            e === p.activeElement &&
            (!p.hasFocus || p.hasFocus()) &&
            !!(e.type || e.href || ~e.tabIndex)
          );
        },
        enabled: createDisabledPseudo(false),
        disabled: createDisabledPseudo(true),
        checked: function (e) {
          var t = e.nodeName.toLowerCase();
          return (
            ("input" === t && !!e.checked) || ("option" === t && !!e.selected)
          );
        },
        selected: function (e) {
          e.parentNode && e.parentNode.selectedIndex;
          return true === e.selected;
        },
        empty: function (e) {
          for (e = e.firstChild; e; e = e.nextSibling)
            if (e.nodeType < 6) return false;
          return true;
        },
        parent: function (e) {
          return !r.pseudos.empty(e);
        },
        header: function (e) {
          return Y.test(e.nodeName);
        },
        input: function (e) {
          return V.test(e.nodeName);
        },
        button: function (e) {
          var t = e.nodeName.toLowerCase();
          return ("input" === t && "button" === e.type) || "button" === t;
        },
        text: function (e) {
          var t;
          return (
            "input" === e.nodeName.toLowerCase() &&
            "text" === e.type &&
            (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
          );
        },
        first: createPositionalPseudo(function () {
          return [0];
        }),
        last: createPositionalPseudo(function (e, t) {
          return [t - 1];
        }),
        eq: createPositionalPseudo(function (e, t, n) {
          return [n < 0 ? n + t : n];
        }),
        even: createPositionalPseudo(function (e, t) {
          var n = 0;
          for (; n < t; n += 2) e.push(n);
          return e;
        }),
        odd: createPositionalPseudo(function (e, t) {
          var n = 1;
          for (; n < t; n += 2) e.push(n);
          return e;
        }),
        lt: createPositionalPseudo(function (e, t, n) {
          var r = n < 0 ? n + t : n > t ? t : n;
          for (; --r >= 0; ) e.push(r);
          return e;
        }),
        gt: createPositionalPseudo(function (e, t, n) {
          var r = n < 0 ? n + t : n;
          for (; ++r < t; ) e.push(r);
          return e;
        }),
      },
    };
    r.pseudos.nth = r.pseudos.eq;
    for (t in {
      radio: true,
      checkbox: true,
      file: true,
      password: true,
      image: true,
    })
      r.pseudos[t] = createInputPseudo(t);
    for (t in { submit: true, reset: true })
      r.pseudos[t] = createButtonPseudo(t);
    function setFilters() {}
    setFilters.prototype = r.filters = r.pseudos;
    r.setFilters = new setFilters();
    a = Sizzle.tokenize = function (e, t) {
      var n,
        i,
        o,
        a,
        s,
        u,
        l,
        c = A[e + " "];
      if (c) return t ? 0 : c.slice(0);
      s = e;
      u = [];
      l = r.preFilter;
      while (s) {
        if (!n || (i = W.exec(s))) {
          i && (s = s.slice(i[0].length) || s);
          u.push((o = []));
        }
        n = false;
        if ((i = B.exec(s))) {
          n = i.shift();
          o.push({ value: n, type: i[0].replace(R, " ") });
          s = s.slice(n.length);
        }
        for (a in r.filter)
          if ((i = X[a].exec(s)) && (!l[a] || (i = l[a](i)))) {
            n = i.shift();
            o.push({ value: n, type: a, matches: i });
            s = s.slice(n.length);
          }
        if (!n) break;
      }
      return t ? s.length : s ? Sizzle.error(e) : A(e, u).slice(0);
    };
    function toSelector(e) {
      var t = 0,
        n = e.length,
        r = "";
      for (; t < n; t++) r += e[t].value;
      return r;
    }
    function addCombinator(e, t, n) {
      var r = t.dir,
        i = t.next,
        o = i || r,
        a = n && "parentNode" === o,
        s = C++;
      return t.first
        ? function (t, n, i) {
            while ((t = t[r])) if (1 === t.nodeType || a) return e(t, n, i);
            return false;
          }
        : function (t, n, u) {
            var l,
              c,
              f,
              d = [T, s];
            if (u) {
              while ((t = t[r]))
                if ((1 === t.nodeType || a) && e(t, n, u)) return true;
            } else
              while ((t = t[r]))
                if (1 === t.nodeType || a) {
                  f = t[b] || (t[b] = {});
                  c = f[t.uniqueID] || (f[t.uniqueID] = {});
                  if (i && i === t.nodeName.toLowerCase()) t = t[r] || t;
                  else {
                    if ((l = c[o]) && l[0] === T && l[1] === s)
                      return (d[2] = l[2]);
                    c[o] = d;
                    if ((d[2] = e(t, n, u))) return true;
                  }
                }
            return false;
          };
    }
    function elementMatcher(e) {
      return e.length > 1
        ? function (t, n, r) {
            var i = e.length;
            while (i--) if (!e[i](t, n, r)) return false;
            return true;
          }
        : e[0];
    }
    function multipleContexts(e, t, n) {
      var r = 0,
        i = t.length;
      for (; r < i; r++) Sizzle(e, t[r], n);
      return n;
    }
    function condense(e, t, n, r, i) {
      var o,
        a = [],
        s = 0,
        u = e.length,
        l = null != t;
      for (; s < u; s++)
        if ((o = e[s]) && (!n || n(o, r, i))) {
          a.push(o);
          l && t.push(s);
        }
      return a;
    }
    function setMatcher(e, t, n, r, i, o) {
      r && !r[b] && (r = setMatcher(r));
      i && !i[b] && (i = setMatcher(i, o));
      return markFunction(function (o, a, s, u) {
        var l,
          c,
          f,
          d = [],
          p = [],
          h = a.length,
          g = o || multipleContexts(t || "*", s.nodeType ? [s] : s, []),
          m = !e || (!o && t) ? g : condense(g, d, e, s, u),
          v = n ? (i || (o ? e : h || r) ? [] : a) : m;
        n && n(m, v, s, u);
        if (r) {
          l = condense(v, p);
          r(l, [], s, u);
          c = l.length;
          while (c--) (f = l[c]) && (v[p[c]] = !(m[p[c]] = f));
        }
        if (o) {
          if (i || e) {
            if (i) {
              l = [];
              c = v.length;
              while (c--) (f = v[c]) && l.push((m[c] = f));
              i(null, (v = []), l, u);
            }
            c = v.length;
            while (c--)
              (f = v[c]) &&
                (l = i ? indexOf(o, f) : d[c]) > -1 &&
                (o[l] = !(a[l] = f));
          }
        } else {
          v = condense(v === a ? v.splice(h, v.length) : v);
          i ? i(null, a, v, u) : L.apply(a, v);
        }
      });
    }
    function matcherFromTokens(e) {
      var t,
        n,
        i,
        o = e.length,
        a = r.relative[e[0].type],
        s = a || r.relative[" "],
        u = a ? 1 : 0,
        c = addCombinator(
          function (e) {
            return e === t;
          },
          s,
          true
        ),
        f = addCombinator(
          function (e) {
            return indexOf(t, e) > -1;
          },
          s,
          true
        ),
        d = [
          function (e, n, r) {
            var i =
              (!a && (r || n !== l)) ||
              ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
            t = null;
            return i;
          },
        ];
      for (; u < o; u++)
        if ((n = r.relative[e[u].type]))
          d = [addCombinator(elementMatcher(d), n)];
        else {
          n = r.filter[e[u].type].apply(null, e[u].matches);
          if (n[b]) {
            i = ++u;
            for (; i < o; i++) if (r.relative[e[i].type]) break;
            return setMatcher(
              u > 1 && elementMatcher(d),
              u > 1 &&
                toSelector(
                  e
                    .slice(0, u - 1)
                    .concat({ value: " " === e[u - 2].type ? "*" : "" })
                ).replace(R, "$1"),
              n,
              u < i && matcherFromTokens(e.slice(u, i)),
              i < o && matcherFromTokens((e = e.slice(i))),
              i < o && toSelector(e)
            );
          }
          d.push(n);
        }
      return elementMatcher(d);
    }
    function matcherFromGroupMatchers(e, t) {
      var n = t.length > 0,
        i = e.length > 0,
        superMatcher = function (o, a, s, u, c) {
          var f,
            h,
            m,
            v = 0,
            y = "0",
            x = o && [],
            b = [],
            w = l,
            C = o || (i && r.find.TAG("*", c)),
            S = (T += null == w ? 1 : Math.random() || 0.1),
            A = C.length;
          c && (l = a == p || a || c);
          for (; y !== A && null != (f = C[y]); y++) {
            if (i && f) {
              h = 0;
              if (!a && f.ownerDocument != p) {
                d(f);
                s = !g;
              }
              while ((m = e[h++]))
                if (m(f, a || p, s)) {
                  u.push(f);
                  break;
                }
              c && (T = S);
            }
            if (n) {
              (f = !m && f) && v--;
              o && x.push(f);
            }
          }
          v += y;
          if (n && y !== v) {
            h = 0;
            while ((m = t[h++])) m(x, b, a, s);
            if (o) {
              if (v > 0) while (y--) x[y] || b[y] || (b[y] = j.call(u));
              b = condense(b);
            }
            L.apply(u, b);
            c && !o && b.length > 0 && v + t.length > 1 && Sizzle.uniqueSort(u);
          }
          if (c) {
            T = S;
            l = w;
          }
          return x;
        };
      return n ? markFunction(superMatcher) : superMatcher;
    }
    s = Sizzle.compile = function (e, t) {
      var n,
        r = [],
        i = [],
        o = k[e + " "];
      if (!o) {
        t || (t = a(e));
        n = t.length;
        while (n--) {
          o = matcherFromTokens(t[n]);
          o[b] ? r.push(o) : i.push(o);
        }
        o = k(e, matcherFromGroupMatchers(i, r));
        o.selector = e;
      }
      return o;
    };
    /**
     * A low-level selection function that works with Sizzle's compiled
     *  selector functions
     * @param {String|Function} selector A selector or a pre-compiled
     *  selector function built with Sizzle.compile
     * @param {Element} context
     * @param {Array} [results]
     * @param {Array} [seed] A set of elements to match against
     */ u = Sizzle.select = function (e, t, n, i) {
      var o,
        u,
        l,
        c,
        f,
        d = "function" === typeof e && e,
        p = !i && a((e = d.selector || e));
      n = n || [];
      if (1 === p.length) {
        u = p[0] = p[0].slice(0);
        if (
          u.length > 2 &&
          "ID" === (l = u[0]).type &&
          9 === t.nodeType &&
          g &&
          r.relative[u[1].type]
        ) {
          t = (r.find.ID(l.matches[0].replace(Z, funescape), t) || [])[0];
          if (!t) return n;
          d && (t = t.parentNode);
          e = e.slice(u.shift().value.length);
        }
        o = X.needsContext.test(e) ? 0 : u.length;
        while (o--) {
          l = u[o];
          if (r.relative[(c = l.type)]) break;
          if (
            (f = r.find[c]) &&
            (i = f(
              l.matches[0].replace(Z, funescape),
              (K.test(u[0].type) && testContext(t.parentNode)) || t
            ))
          ) {
            u.splice(o, 1);
            e = i.length && toSelector(u);
            if (!e) {
              L.apply(n, i);
              return n;
            }
            break;
          }
        }
      }
      (d || s(e, p))(
        i,
        t,
        !g,
        n,
        !t || (K.test(e) && testContext(t.parentNode)) || t
      );
      return n;
    };
    n.sortStable = b.split("").sort(sortOrder).join("") === b;
    n.detectDuplicates = !!f;
    d();
    n.sortDetached = assert(function (e) {
      return 1 & e.compareDocumentPosition(p.createElement("fieldset"));
    });
    assert(function (e) {
      e.innerHTML = "<a href='#'></a>";
      return "#" === e.firstChild.getAttribute("href");
    }) ||
      addHandle("type|href|height|width", function (e, t, n) {
        if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
      });
    (n.attributes &&
      assert(function (e) {
        e.innerHTML = "<input/>";
        e.firstChild.setAttribute("value", "");
        return "" === e.firstChild.getAttribute("value");
      })) ||
      addHandle("value", function (e, t, n) {
        if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
      });
    assert(function (e) {
      return null == e.getAttribute("disabled");
    }) ||
      addHandle(H, function (e, t, n) {
        var r;
        if (!n)
          return true === e[t]
            ? t.toLowerCase()
            : (r = e.getAttributeNode(t)) && r.specified
            ? r.value
            : null;
      });
    return Sizzle;
  })(t);
  jQuery.find = b;
  jQuery.expr = b.selectors;
  jQuery.expr[":"] = jQuery.expr.pseudos;
  jQuery.uniqueSort = jQuery.unique = b.uniqueSort;
  jQuery.text = b.getText;
  jQuery.isXMLDoc = b.isXML;
  jQuery.contains = b.contains;
  jQuery.escapeSelector = b.escape;
  var dir = function (e, t, n) {
    var r = [],
      i = void 0 !== n;
    while ((e = e[t]) && 9 !== e.nodeType)
      if (1 === e.nodeType) {
        if (i && jQuery(e).is(n)) break;
        r.push(e);
      }
    return r;
  };
  var siblings = function (e, t) {
    var n = [];
    for (; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
    return n;
  };
  var w = jQuery.expr.match.needsContext;
  function nodeName(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  var T = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function winnow(e, t, n) {
    return g(t)
      ? jQuery.grep(e, function (e, r) {
          return !!t.call(e, r, e) !== n;
        })
      : t.nodeType
      ? jQuery.grep(e, function (e) {
          return (e === t) !== n;
        })
      : "string" !== typeof t
      ? jQuery.grep(e, function (e) {
          return u.call(t, e) > -1 !== n;
        })
      : jQuery.filter(t, e, n);
  }
  jQuery.filter = function (e, t, n) {
    var r = t[0];
    n && (e = ":not(" + e + ")");
    return 1 === t.length && 1 === r.nodeType
      ? jQuery.find.matchesSelector(r, e)
        ? [r]
        : []
      : jQuery.find.matches(
          e,
          jQuery.grep(t, function (e) {
            return 1 === e.nodeType;
          })
        );
  };
  jQuery.fn.extend({
    find: function (t) {
      var n,
        r,
        i = (this || e).length,
        o = this || e;
      if ("string" !== typeof t)
        return this.pushStack(
          jQuery(t).filter(function () {
            for (n = 0; n < i; n++)
              if (jQuery.contains(o[n], this || e)) return true;
          })
        );
      r = this.pushStack([]);
      for (n = 0; n < i; n++) jQuery.find(t, o[n], r);
      return i > 1 ? jQuery.uniqueSort(r) : r;
    },
    filter: function (t) {
      return this.pushStack(winnow(this || e, t || [], false));
    },
    not: function (t) {
      return this.pushStack(winnow(this || e, t || [], true));
    },
    is: function (t) {
      return !!winnow(
        this || e,
        "string" === typeof t && w.test(t) ? jQuery(t) : t || [],
        false
      ).length;
    },
  });
  var C,
    S = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
    A = (jQuery.fn.init = function (t, n, r) {
      var i, o;
      if (!t) return this || e;
      r = r || C;
      if ("string" === typeof t) {
        i =
          "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3
            ? [null, t, null]
            : S.exec(t);
        if (!i || (!i[1] && n))
          return !n || n.jquery
            ? (n || r).find(t)
            : this.constructor(n).find(t);
        if (i[1]) {
          n = n instanceof jQuery ? n[0] : n;
          jQuery.merge(
            this || e,
            jQuery.parseHTML(
              i[1],
              n && n.nodeType ? n.ownerDocument || n : v,
              true
            )
          );
          if (T.test(i[1]) && jQuery.isPlainObject(n))
            for (i in n) g((this || e)[i]) ? this[i](n[i]) : this.attr(i, n[i]);
          return this || e;
        }
        o = v.getElementById(i[2]);
        if (o) {
          (this || e)[0] = o;
          (this || e).length = 1;
        }
        return this || e;
      }
      if (t.nodeType) {
        (this || e)[0] = t;
        (this || e).length = 1;
        return this || e;
      }
      return g(t)
        ? void 0 !== r.ready
          ? r.ready(t)
          : t(jQuery)
        : jQuery.makeArray(t, this || e);
    });
  A.prototype = jQuery.fn;
  C = jQuery(v);
  var k = /^(?:parents|prev(?:Until|All))/,
    E = { children: true, contents: true, next: true, prev: true };
  jQuery.fn.extend({
    has: function (t) {
      var n = jQuery(t, this || e),
        r = n.length;
      return this.filter(function () {
        var t = 0;
        for (; t < r; t++) if (jQuery.contains(this || e, n[t])) return true;
      });
    },
    closest: function (t, n) {
      var r,
        i = 0,
        o = (this || e).length,
        a = [],
        s = "string" !== typeof t && jQuery(t);
      if (!w.test(t))
        for (; i < o; i++)
          for (r = (this || e)[i]; r && r !== n; r = r.parentNode)
            if (
              r.nodeType < 11 &&
              (s
                ? s.index(r) > -1
                : 1 === r.nodeType && jQuery.find.matchesSelector(r, t))
            ) {
              a.push(r);
              break;
            }
      return this.pushStack(a.length > 1 ? jQuery.uniqueSort(a) : a);
    },
    index: function (t) {
      return t
        ? "string" === typeof t
          ? u.call(jQuery(t), (this || e)[0])
          : u.call(this || e, t.jquery ? t[0] : t)
        : (this || e)[0] && (this || e)[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (e, t) {
      return this.pushStack(
        jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(e, t)))
      );
    },
    addBack: function (t) {
      return this.add(
        null == t ? (this || e).prevObject : (this || e).prevObject.filter(t)
      );
    },
  });
  function sibling(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType);
    return e;
  }
  jQuery.each(
    {
      parent: function (e) {
        var t = e.parentNode;
        return t && 11 !== t.nodeType ? t : null;
      },
      parents: function (e) {
        return dir(e, "parentNode");
      },
      parentsUntil: function (e, t, n) {
        return dir(e, "parentNode", n);
      },
      next: function (e) {
        return sibling(e, "nextSibling");
      },
      prev: function (e) {
        return sibling(e, "previousSibling");
      },
      nextAll: function (e) {
        return dir(e, "nextSibling");
      },
      prevAll: function (e) {
        return dir(e, "previousSibling");
      },
      nextUntil: function (e, t, n) {
        return dir(e, "nextSibling", n);
      },
      prevUntil: function (e, t, n) {
        return dir(e, "previousSibling", n);
      },
      siblings: function (e) {
        return siblings((e.parentNode || {}).firstChild, e);
      },
      children: function (e) {
        return siblings(e.firstChild);
      },
      contents: function (e) {
        if (null != e.contentDocument && i(e.contentDocument))
          return e.contentDocument;
        nodeName(e, "template") && (e = e.content || e);
        return jQuery.merge([], e.childNodes);
      },
    },
    function (t, n) {
      jQuery.fn[t] = function (r, i) {
        var o = jQuery.map(this || e, n, r);
        "Until" !== t.slice(-5) && (i = r);
        i && "string" === typeof i && (o = jQuery.filter(i, o));
        if ((this || e).length > 1) {
          E[t] || jQuery.uniqueSort(o);
          k.test(t) && o.reverse();
        }
        return this.pushStack(o);
      };
    }
  );
  var N = /[^\x20\t\r\n\f]+/g;
  function createOptions(e) {
    var t = {};
    jQuery.each(e.match(N) || [], function (e, n) {
      t[n] = true;
    });
    return t;
  }
  jQuery.Callbacks = function (t) {
    t = "string" === typeof t ? createOptions(t) : jQuery.extend({}, t);
    var n,
      r,
      i,
      o,
      a = [],
      s = [],
      u = -1,
      fire = function () {
        o = o || t.once;
        i = n = true;
        for (; s.length; u = -1) {
          r = s.shift();
          while (++u < a.length)
            if (false === a[u].apply(r[0], r[1]) && t.stopOnFalse) {
              u = a.length;
              r = false;
            }
        }
        t.memory || (r = false);
        n = false;
        o && (a = r ? [] : "");
      },
      l = {
        add: function () {
          if (a) {
            if (r && !n) {
              u = a.length - 1;
              s.push(r);
            }
            (function add(e) {
              jQuery.each(e, function (e, n) {
                g(n)
                  ? (t.unique && l.has(n)) || a.push(n)
                  : n && n.length && "string" !== toType(n) && add(n);
              });
            })(arguments);
            r && !n && fire();
          }
          return this || e;
        },
        remove: function () {
          jQuery.each(arguments, function (e, t) {
            var n;
            while ((n = jQuery.inArray(t, a, n)) > -1) {
              a.splice(n, 1);
              n <= u && u--;
            }
          });
          return this || e;
        },
        has: function (e) {
          return e ? jQuery.inArray(e, a) > -1 : a.length > 0;
        },
        empty: function () {
          a && (a = []);
          return this || e;
        },
        disable: function () {
          o = s = [];
          a = r = "";
          return this || e;
        },
        disabled: function () {
          return !a;
        },
        lock: function () {
          o = s = [];
          r || n || (a = r = "");
          return this || e;
        },
        locked: function () {
          return !!o;
        },
        fireWith: function (t, r) {
          if (!o) {
            r = r || [];
            r = [t, r.slice ? r.slice() : r];
            s.push(r);
            n || fire();
          }
          return this || e;
        },
        fire: function () {
          l.fireWith(this || e, arguments);
          return this || e;
        },
        fired: function () {
          return !!i;
        },
      };
    return l;
  };
  function Identity(e) {
    return e;
  }
  function Thrower(e) {
    throw e;
  }
  function adoptValue(e, t, n, r) {
    var i;
    try {
      e && g((i = e.promise))
        ? i.call(e).done(t).fail(n)
        : e && g((i = e.then))
        ? i.call(e, t, n)
        : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  jQuery.extend({
    Deferred: function (n) {
      var r = [
          [
            "notify",
            "progress",
            jQuery.Callbacks("memory"),
            jQuery.Callbacks("memory"),
            2,
          ],
          [
            "resolve",
            "done",
            jQuery.Callbacks("once memory"),
            jQuery.Callbacks("once memory"),
            0,
            "resolved",
          ],
          [
            "reject",
            "fail",
            jQuery.Callbacks("once memory"),
            jQuery.Callbacks("once memory"),
            1,
            "rejected",
          ],
        ],
        i = "pending",
        o = {
          state: function () {
            return i;
          },
          always: function () {
            a.done(arguments).fail(arguments);
            return this || e;
          },
          catch: function (e) {
            return o.then(null, e);
          },
          pipe: function () {
            var t = arguments;
            return jQuery
              .Deferred(function (n) {
                jQuery.each(r, function (r, i) {
                  var o = g(t[i[4]]) && t[i[4]];
                  a[i[1]](function () {
                    var t = o && o.apply(this || e, arguments);
                    t && g(t.promise)
                      ? t
                          .promise()
                          .progress(n.notify)
                          .done(n.resolve)
                          .fail(n.reject)
                      : n[i[0] + "With"](this || e, o ? [t] : arguments);
                  });
                });
                t = null;
              })
              .promise();
          },
          then: function (n, i, o) {
            var a = 0;
            function resolve(n, r, i, o) {
              return function () {
                var s = this || e,
                  u = arguments,
                  mightThrow = function () {
                    var e, t;
                    if (!(n < a)) {
                      e = i.apply(s, u);
                      if (e === r.promise())
                        throw new TypeError("Thenable self-resolution");
                      t =
                        e &&
                        ("object" === typeof e || "function" === typeof e) &&
                        e.then;
                      if (g(t))
                        if (o)
                          t.call(
                            e,
                            resolve(a, r, Identity, o),
                            resolve(a, r, Thrower, o)
                          );
                        else {
                          a++;
                          t.call(
                            e,
                            resolve(a, r, Identity, o),
                            resolve(a, r, Thrower, o),
                            resolve(a, r, Identity, r.notifyWith)
                          );
                        }
                      else {
                        if (i !== Identity) {
                          s = void 0;
                          u = [e];
                        }
                        (o || r.resolveWith)(s, u);
                      }
                    }
                  },
                  l = o
                    ? mightThrow
                    : function () {
                        try {
                          mightThrow();
                        } catch (e) {
                          jQuery.Deferred.exceptionHook &&
                            jQuery.Deferred.exceptionHook(e, l.stackTrace);
                          if (n + 1 >= a) {
                            if (i !== Thrower) {
                              s = void 0;
                              u = [e];
                            }
                            r.rejectWith(s, u);
                          }
                        }
                      };
                if (n) l();
                else {
                  jQuery.Deferred.getStackHook &&
                    (l.stackTrace = jQuery.Deferred.getStackHook());
                  t.setTimeout(l);
                }
              };
            }
            return jQuery
              .Deferred(function (e) {
                r[0][3].add(resolve(0, e, g(o) ? o : Identity, e.notifyWith));
                r[1][3].add(resolve(0, e, g(n) ? n : Identity));
                r[2][3].add(resolve(0, e, g(i) ? i : Thrower));
              })
              .promise();
          },
          promise: function (e) {
            return null != e ? jQuery.extend(e, o) : o;
          },
        },
        a = {};
      jQuery.each(r, function (t, n) {
        var s = n[2],
          u = n[5];
        o[n[1]] = s.add;
        u &&
          s.add(
            function () {
              i = u;
            },
            r[3 - t][2].disable,
            r[3 - t][3].disable,
            r[0][2].lock,
            r[0][3].lock
          );
        s.add(n[3].fire);
        a[n[0]] = function () {
          a[n[0] + "With"]((this || e) === a ? void 0 : this || e, arguments);
          return this || e;
        };
        a[n[0] + "With"] = s.fireWith;
      });
      o.promise(a);
      n && n.call(a, a);
      return a;
    },
    when: function (t) {
      var n = arguments.length,
        r = n,
        i = Array(r),
        a = o.call(arguments),
        s = jQuery.Deferred(),
        updateFunc = function (t) {
          return function (r) {
            i[t] = this || e;
            a[t] = arguments.length > 1 ? o.call(arguments) : r;
            --n || s.resolveWith(i, a);
          };
        };
      if (n <= 1) {
        adoptValue(t, s.done(updateFunc(r)).resolve, s.reject, !n);
        if ("pending" === s.state() || g(a[r] && a[r].then)) return s.then();
      }
      while (r--) adoptValue(a[r], updateFunc(r), s.reject);
      return s.promise();
    },
  });
  var D = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  jQuery.Deferred.exceptionHook = function (e, n) {
    t.console &&
      t.console.warn &&
      e &&
      D.test(e.name) &&
      t.console.warn("jQuery.Deferred exception: " + e.message, e.stack, n);
  };
  jQuery.readyException = function (e) {
    t.setTimeout(function () {
      throw e;
    });
  };
  var j = jQuery.Deferred();
  jQuery.fn.ready = function (t) {
    j.then(t).catch(function (e) {
      jQuery.readyException(e);
    });
    return this || e;
  };
  jQuery.extend({
    isReady: false,
    readyWait: 1,
    ready: function (e) {
      if (!(true === e ? --jQuery.readyWait : jQuery.isReady)) {
        jQuery.isReady = true;
        (true !== e && --jQuery.readyWait > 0) || j.resolveWith(v, [jQuery]);
      }
    },
  });
  jQuery.ready.then = j.then;
  function completed() {
    v.removeEventListener("DOMContentLoaded", completed);
    t.removeEventListener("load", completed);
    jQuery.ready();
  }
  if (
    "complete" === v.readyState ||
    ("loading" !== v.readyState && !v.documentElement.doScroll)
  )
    t.setTimeout(jQuery.ready);
  else {
    v.addEventListener("DOMContentLoaded", completed);
    t.addEventListener("load", completed);
  }
  var access = function (e, t, n, r, i, o, a) {
    var s = 0,
      u = e.length,
      l = null == n;
    if ("object" === toType(n)) {
      i = true;
      for (s in n) access(e, t, s, n[s], true, o, a);
    } else if (void 0 !== r) {
      i = true;
      g(r) || (a = true);
      if (l)
        if (a) {
          t.call(e, r);
          t = null;
        } else {
          l = t;
          t = function (e, t, n) {
            return l.call(jQuery(e), n);
          };
        }
      if (t) for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
    }
    return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
  };
  var P = /^-ms-/,
    L = /-([a-z])/g;
  function fcamelCase(e, t) {
    return t.toUpperCase();
  }
  function camelCase(e) {
    return e.replace(P, "ms-").replace(L, fcamelCase);
  }
  var acceptData = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };
  function Data() {
    (this || e).expando = jQuery.expando + Data.uid++;
  }
  Data.uid = 1;
  Data.prototype = {
    cache: function (t) {
      var n = t[(this || e).expando];
      if (!n) {
        n = {};
        acceptData(t) &&
          (t.nodeType
            ? (t[(this || e).expando] = n)
            : Object.defineProperty(t, (this || e).expando, {
                value: n,
                configurable: true,
              }));
      }
      return n;
    },
    set: function (e, t, n) {
      var r,
        i = this.cache(e);
      if ("string" === typeof t) i[camelCase(t)] = n;
      else for (r in t) i[camelCase(r)] = t[r];
      return i;
    },
    get: function (t, n) {
      return void 0 === n
        ? this.cache(t)
        : t[(this || e).expando] && t[(this || e).expando][camelCase(n)];
    },
    access: function (e, t, n) {
      if (void 0 === t || (t && "string" === typeof t && void 0 === n))
        return this.get(e, t);
      this.set(e, t, n);
      return void 0 !== n ? n : t;
    },
    remove: function (t, n) {
      var r,
        i = t[(this || e).expando];
      if (void 0 !== i) {
        if (void 0 !== n) {
          if (Array.isArray(n)) n = n.map(camelCase);
          else {
            n = camelCase(n);
            n = n in i ? [n] : n.match(N) || [];
          }
          r = n.length;
          while (r--) delete i[n[r]];
        }
        (void 0 === n || jQuery.isEmptyObject(i)) &&
          (t.nodeType
            ? (t[(this || e).expando] = void 0)
            : delete t[(this || e).expando]);
      }
    },
    hasData: function (t) {
      var n = t[(this || e).expando];
      return void 0 !== n && !jQuery.isEmptyObject(n);
    },
  };
  var q = new Data();
  var H = new Data();
  var O = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    M = /[A-Z]/g;
  function getData(e) {
    return (
      "true" === e ||
      ("false" !== e &&
        ("null" === e
          ? null
          : e === +e + ""
          ? +e
          : O.test(e)
          ? JSON.parse(e)
          : e))
    );
  }
  function dataAttr(e, t, n) {
    var r;
    if (void 0 === n && 1 === e.nodeType) {
      r = "data-" + t.replace(M, "-$&").toLowerCase();
      n = e.getAttribute(r);
      if ("string" === typeof n) {
        try {
          n = getData(n);
        } catch (e) {}
        H.set(e, t, n);
      } else n = void 0;
    }
    return n;
  }
  jQuery.extend({
    hasData: function (e) {
      return H.hasData(e) || q.hasData(e);
    },
    data: function (e, t, n) {
      return H.access(e, t, n);
    },
    removeData: function (e, t) {
      H.remove(e, t);
    },
    _data: function (e, t, n) {
      return q.access(e, t, n);
    },
    _removeData: function (e, t) {
      q.remove(e, t);
    },
  });
  jQuery.fn.extend({
    data: function (t, n) {
      var r,
        i,
        o,
        a = (this || e)[0],
        s = a && a.attributes;
      if (void 0 === t) {
        if ((this || e).length) {
          o = H.get(a);
          if (1 === a.nodeType && !q.get(a, "hasDataAttrs")) {
            r = s.length;
            while (r--)
              if (s[r]) {
                i = s[r].name;
                if (0 === i.indexOf("data-")) {
                  i = camelCase(i.slice(5));
                  dataAttr(a, i, o[i]);
                }
              }
            q.set(a, "hasDataAttrs", true);
          }
        }
        return o;
      }
      return "object" === typeof t
        ? this.each(function () {
            H.set(this || e, t);
          })
        : access(
            this || e,
            function (n) {
              var r;
              if (a && void 0 === n) {
                r = H.get(a, t);
                if (void 0 !== r) return r;
                r = dataAttr(a, t);
                return void 0 !== r ? r : void 0;
              }
              this.each(function () {
                H.set(this || e, t, n);
              });
            },
            null,
            n,
            arguments.length > 1,
            null,
            true
          );
    },
    removeData: function (t) {
      return this.each(function () {
        H.remove(this || e, t);
      });
    },
  });
  jQuery.extend({
    queue: function (e, t, n) {
      var r;
      if (e) {
        t = (t || "fx") + "queue";
        r = q.get(e, t);
        n &&
          (!r || Array.isArray(n)
            ? (r = q.access(e, t, jQuery.makeArray(n)))
            : r.push(n));
        return r || [];
      }
    },
    dequeue: function (e, t) {
      t = t || "fx";
      var n = jQuery.queue(e, t),
        r = n.length,
        i = n.shift(),
        o = jQuery._queueHooks(e, t),
        next = function () {
          jQuery.dequeue(e, t);
        };
      if ("inprogress" === i) {
        i = n.shift();
        r--;
      }
      if (i) {
        "fx" === t && n.unshift("inprogress");
        delete o.stop;
        i.call(e, next, o);
      }
      !r && o && o.empty.fire();
    },
    _queueHooks: function (e, t) {
      var n = t + "queueHooks";
      return (
        q.get(e, n) ||
        q.access(e, n, {
          empty: jQuery.Callbacks("once memory").add(function () {
            q.remove(e, [t + "queue", n]);
          }),
        })
      );
    },
  });
  jQuery.fn.extend({
    queue: function (t, n) {
      var r = 2;
      if ("string" !== typeof t) {
        n = t;
        t = "fx";
        r--;
      }
      return arguments.length < r
        ? jQuery.queue((this || e)[0], t)
        : void 0 === n
        ? this || e
        : this.each(function () {
            var r = jQuery.queue(this || e, t, n);
            jQuery._queueHooks(this || e, t);
            "fx" === t && "inprogress" !== r[0] && jQuery.dequeue(this || e, t);
          });
    },
    dequeue: function (t) {
      return this.each(function () {
        jQuery.dequeue(this || e, t);
      });
    },
    clearQueue: function (e) {
      return this.queue(e || "fx", []);
    },
    promise: function (t, n) {
      var r,
        i = 1,
        o = jQuery.Deferred(),
        a = this || e,
        s = (this || e).length,
        resolve = function () {
          --i || o.resolveWith(a, [a]);
        };
      if ("string" !== typeof t) {
        n = t;
        t = void 0;
      }
      t = t || "fx";
      while (s--) {
        r = q.get(a[s], t + "queueHooks");
        if (r && r.empty) {
          i++;
          r.empty.add(resolve);
        }
      }
      resolve();
      return o.promise(n);
    },
  });
  var F = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
  var z = new RegExp("^(?:([+-])=|)(" + F + ")([a-z%]*)$", "i");
  var I = ["Top", "Right", "Bottom", "Left"];
  var R = v.documentElement;
  var isAttached = function (e) {
      return jQuery.contains(e.ownerDocument, e);
    },
    W = { composed: true };
  R.getRootNode &&
    (isAttached = function (e) {
      return (
        jQuery.contains(e.ownerDocument, e) ||
        e.getRootNode(W) === e.ownerDocument
      );
    });
  var isHiddenWithinTree = function (e, t) {
    e = t || e;
    return (
      "none" === e.style.display ||
      ("" === e.style.display &&
        isAttached(e) &&
        "none" === jQuery.css(e, "display"))
    );
  };
  function adjustCSS(e, t, n, r) {
    var i,
      o,
      a = 20,
      s = r
        ? function () {
            return r.cur();
          }
        : function () {
            return jQuery.css(e, t, "");
          },
      u = s(),
      l = (n && n[3]) || (jQuery.cssNumber[t] ? "" : "px"),
      c =
        e.nodeType &&
        (jQuery.cssNumber[t] || ("px" !== l && +u)) &&
        z.exec(jQuery.css(e, t));
    if (c && c[3] !== l) {
      u /= 2;
      l = l || c[3];
      c = +u || 1;
      while (a--) {
        jQuery.style(e, t, c + l);
        (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0);
        c /= o;
      }
      c *= 2;
      jQuery.style(e, t, c + l);
      n = n || [];
    }
    if (n) {
      c = +c || +u || 0;
      i = n[1] ? c + (n[1] + 1) * n[2] : +n[2];
      if (r) {
        r.unit = l;
        r.start = c;
        r.end = i;
      }
    }
    return i;
  }
  var B = {};
  function getDefaultDisplay(e) {
    var t,
      n = e.ownerDocument,
      r = e.nodeName,
      i = B[r];
    if (i) return i;
    t = n.body.appendChild(n.createElement(r));
    i = jQuery.css(t, "display");
    t.parentNode.removeChild(t);
    "none" === i && (i = "block");
    B[r] = i;
    return i;
  }
  function showHide(e, t) {
    var n,
      r,
      i = [],
      o = 0,
      a = e.length;
    for (; o < a; o++) {
      r = e[o];
      if (r.style) {
        n = r.style.display;
        if (t) {
          if ("none" === n) {
            i[o] = q.get(r, "display") || null;
            i[o] || (r.style.display = "");
          }
          "" === r.style.display &&
            isHiddenWithinTree(r) &&
            (i[o] = getDefaultDisplay(r));
        } else if ("none" !== n) {
          i[o] = "none";
          q.set(r, "display", n);
        }
      }
    }
    for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
    return e;
  }
  jQuery.fn.extend({
    show: function () {
      return showHide(this || e, true);
    },
    hide: function () {
      return showHide(this || e);
    },
    toggle: function (t) {
      return "boolean" === typeof t
        ? t
          ? this.show()
          : this.hide()
        : this.each(function () {
            isHiddenWithinTree(this || e)
              ? jQuery(this || e).show()
              : jQuery(this || e).hide();
          });
    },
  });
  var $ = /^(?:checkbox|radio)$/i;
  var _ = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
  var U = /^$|^module$|\/(?:java|ecma)script/i;
  (function () {
    var e = v.createDocumentFragment(),
      t = e.appendChild(v.createElement("div")),
      n = v.createElement("input");
    n.setAttribute("type", "radio");
    n.setAttribute("checked", "checked");
    n.setAttribute("name", "t");
    t.appendChild(n);
    h.checkClone = t.cloneNode(true).cloneNode(true).lastChild.checked;
    t.innerHTML = "<textarea>x</textarea>";
    h.noCloneChecked = !!t.cloneNode(true).lastChild.defaultValue;
    t.innerHTML = "<option></option>";
    h.option = !!t.lastChild;
  })();
  var X = {
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""],
  };
  X.tbody = X.tfoot = X.colgroup = X.caption = X.thead;
  X.th = X.td;
  h.option ||
    (X.optgroup = X.option = [1, "<select multiple='multiple'>", "</select>"]);
  function getAll(e, t) {
    var n;
    n =
      "undefined" !== typeof e.getElementsByTagName
        ? e.getElementsByTagName(t || "*")
        : "undefined" !== typeof e.querySelectorAll
        ? e.querySelectorAll(t || "*")
        : [];
    return void 0 === t || (t && nodeName(e, t)) ? jQuery.merge([e], n) : n;
  }
  function setGlobalEval(e, t) {
    var n = 0,
      r = e.length;
    for (; n < r; n++)
      q.set(e[n], "globalEval", !t || q.get(t[n], "globalEval"));
  }
  var G = /<|&#?\w+;/;
  function buildFragment(e, t, n, r, i) {
    var o,
      a,
      s,
      u,
      l,
      c,
      f = t.createDocumentFragment(),
      d = [],
      p = 0,
      h = e.length;
    for (; p < h; p++) {
      o = e[p];
      if (o || 0 === o)
        if ("object" === toType(o)) jQuery.merge(d, o.nodeType ? [o] : o);
        else if (G.test(o)) {
          a = a || f.appendChild(t.createElement("div"));
          s = (_.exec(o) || ["", ""])[1].toLowerCase();
          u = X[s] || X._default;
          a.innerHTML = u[1] + jQuery.htmlPrefilter(o) + u[2];
          c = u[0];
          while (c--) a = a.lastChild;
          jQuery.merge(d, a.childNodes);
          a = f.firstChild;
          a.textContent = "";
        } else d.push(t.createTextNode(o));
    }
    f.textContent = "";
    p = 0;
    while ((o = d[p++]))
      if (r && jQuery.inArray(o, r) > -1) i && i.push(o);
      else {
        l = isAttached(o);
        a = getAll(f.appendChild(o), "script");
        l && setGlobalEval(a);
        if (n) {
          c = 0;
          while ((o = a[c++])) U.test(o.type || "") && n.push(o);
        }
      }
    return f;
  }
  var V = /^([^.]*)(?:\.(.+)|)/;
  function returnTrue() {
    return true;
  }
  function returnFalse() {
    return false;
  }
  function expectSync(e, t) {
    return (e === safeActiveElement()) === ("focus" === t);
  }
  function safeActiveElement() {
    try {
      return v.activeElement;
    } catch (e) {}
  }
  function on(t, n, r, i, o, a) {
    var s, u;
    if ("object" === typeof n) {
      if ("string" !== typeof r) {
        i = i || r;
        r = void 0;
      }
      for (u in n) on(t, u, r, i, n[u], a);
      return t;
    }
    if (null == i && null == o) {
      o = r;
      i = r = void 0;
    } else if (null == o)
      if ("string" === typeof r) {
        o = i;
        i = void 0;
      } else {
        o = i;
        i = r;
        r = void 0;
      }
    if (false === o) o = returnFalse;
    else if (!o) return t;
    if (1 === a) {
      s = o;
      o = function (t) {
        jQuery().off(t);
        return s.apply(this || e, arguments);
      };
      o.guid = s.guid || (s.guid = jQuery.guid++);
    }
    return t.each(function () {
      jQuery.event.add(this || e, n, o, i, r);
    });
  }
  jQuery.event = {
    global: {},
    add: function (e, t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        d,
        p,
        h,
        g,
        m = q.get(e);
      if (acceptData(e)) {
        if (n.handler) {
          o = n;
          n = o.handler;
          i = o.selector;
        }
        i && jQuery.find.matchesSelector(R, i);
        n.guid || (n.guid = jQuery.guid++);
        (u = m.events) || (u = m.events = Object.create(null));
        (a = m.handle) ||
          (a = m.handle =
            function (t) {
              return "undefined" !== typeof jQuery &&
                jQuery.event.triggered !== t.type
                ? jQuery.event.dispatch.apply(e, arguments)
                : void 0;
            });
        t = (t || "").match(N) || [""];
        l = t.length;
        while (l--) {
          s = V.exec(t[l]) || [];
          p = g = s[1];
          h = (s[2] || "").split(".").sort();
          if (p) {
            f = jQuery.event.special[p] || {};
            p = (i ? f.delegateType : f.bindType) || p;
            f = jQuery.event.special[p] || {};
            c = jQuery.extend(
              {
                type: p,
                origType: g,
                data: r,
                handler: n,
                guid: n.guid,
                selector: i,
                needsContext: i && jQuery.expr.match.needsContext.test(i),
                namespace: h.join("."),
              },
              o
            );
            if (!(d = u[p])) {
              d = u[p] = [];
              d.delegateCount = 0;
              (f.setup && false !== f.setup.call(e, r, h, a)) ||
                (e.addEventListener && e.addEventListener(p, a));
            }
            if (f.add) {
              f.add.call(e, c);
              c.handler.guid || (c.handler.guid = n.guid);
            }
            i ? d.splice(d.delegateCount++, 0, c) : d.push(c);
            jQuery.event.global[p] = true;
          }
        }
      }
    },
    remove: function (e, t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        d,
        p,
        h,
        g,
        m = q.hasData(e) && q.get(e);
      if (m && (u = m.events)) {
        t = (t || "").match(N) || [""];
        l = t.length;
        while (l--) {
          s = V.exec(t[l]) || [];
          p = g = s[1];
          h = (s[2] || "").split(".").sort();
          if (p) {
            f = jQuery.event.special[p] || {};
            p = (r ? f.delegateType : f.bindType) || p;
            d = u[p] || [];
            s =
              s[2] &&
              new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)");
            a = o = d.length;
            while (o--) {
              c = d[o];
              if (
                (i || g === c.origType) &&
                (!n || n.guid === c.guid) &&
                (!s || s.test(c.namespace)) &&
                (!r || r === c.selector || ("**" === r && c.selector))
              ) {
                d.splice(o, 1);
                c.selector && d.delegateCount--;
                f.remove && f.remove.call(e, c);
              }
            }
            if (a && !d.length) {
              (f.teardown && false !== f.teardown.call(e, h, m.handle)) ||
                jQuery.removeEvent(e, p, m.handle);
              delete u[p];
            }
          } else for (p in u) jQuery.event.remove(e, p + t[l], n, r, true);
        }
        jQuery.isEmptyObject(u) && q.remove(e, "handle events");
      }
    },
    dispatch: function (t) {
      var n,
        r,
        i,
        o,
        a,
        s,
        u = new Array(arguments.length),
        l = jQuery.event.fix(t),
        c = (q.get(this || e, "events") || Object.create(null))[l.type] || [],
        f = jQuery.event.special[l.type] || {};
      u[0] = l;
      for (n = 1; n < arguments.length; n++) u[n] = arguments[n];
      l.delegateTarget = this || e;
      if (!f.preDispatch || false !== f.preDispatch.call(this || e, l)) {
        s = jQuery.event.handlers.call(this || e, l, c);
        n = 0;
        while ((o = s[n++]) && !l.isPropagationStopped()) {
          l.currentTarget = o.elem;
          r = 0;
          while ((a = o.handlers[r++]) && !l.isImmediatePropagationStopped())
            if (
              !l.rnamespace ||
              false === a.namespace ||
              l.rnamespace.test(a.namespace)
            ) {
              l.handleObj = a;
              l.data = a.data;
              i = (
                (jQuery.event.special[a.origType] || {}).handle || a.handler
              ).apply(o.elem, u);
              if (void 0 !== i && false === (l.result = i)) {
                l.preventDefault();
                l.stopPropagation();
              }
            }
        }
        f.postDispatch && f.postDispatch.call(this || e, l);
        return l.result;
      }
    },
    handlers: function (t, n) {
      var r,
        i,
        o,
        a,
        s,
        u = [],
        l = n.delegateCount,
        c = t.target;
      if (l && c.nodeType && !("click" === t.type && t.button >= 1))
        for (; c !== (this || e); c = c.parentNode || this || e)
          if (
            1 === c.nodeType &&
            !("click" === t.type && true === c.disabled)
          ) {
            a = [];
            s = {};
            for (r = 0; r < l; r++) {
              i = n[r];
              o = i.selector + " ";
              void 0 === s[o] &&
                (s[o] = i.needsContext
                  ? jQuery(o, this || e).index(c) > -1
                  : jQuery.find(o, this || e, null, [c]).length);
              s[o] && a.push(i);
            }
            a.length && u.push({ elem: c, handlers: a });
          }
      c = this || e;
      l < n.length && u.push({ elem: c, handlers: n.slice(l) });
      return u;
    },
    addProp: function (t, n) {
      Object.defineProperty(jQuery.Event.prototype, t, {
        enumerable: true,
        configurable: true,
        get: g(n)
          ? function () {
              if ((this || e).originalEvent)
                return n((this || e).originalEvent);
            }
          : function () {
              if ((this || e).originalEvent)
                return (this || e).originalEvent[t];
            },
        set: function (n) {
          Object.defineProperty(this || e, t, {
            enumerable: true,
            configurable: true,
            writable: true,
            value: n,
          });
        },
      });
    },
    fix: function (e) {
      return e[jQuery.expando] ? e : new jQuery.Event(e);
    },
    special: {
      load: { noBubble: true },
      click: {
        setup: function (t) {
          var n = this || e || t;
          $.test(n.type) &&
            n.click &&
            nodeName(n, "input") &&
            leverageNative(n, "click", returnTrue);
          return false;
        },
        trigger: function (t) {
          var n = this || e || t;
          $.test(n.type) &&
            n.click &&
            nodeName(n, "input") &&
            leverageNative(n, "click");
          return true;
        },
        _default: function (e) {
          var t = e.target;
          return (
            ($.test(t.type) &&
              t.click &&
              nodeName(t, "input") &&
              q.get(t, "click")) ||
            nodeName(t, "a")
          );
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        },
      },
    },
  };
  function leverageNative(t, n, r) {
    if (r) {
      q.set(t, n, false);
      jQuery.event.add(t, n, {
        namespace: false,
        handler: function (t) {
          var i,
            a,
            s = q.get(this || e, n);
          if (1 & t.isTrigger && (this || e)[n])
            if (s.length)
              (jQuery.event.special[n] || {}).delegateType &&
                t.stopPropagation();
            else {
              s = o.call(arguments);
              q.set(this || e, n, s);
              i = r(this || e, n);
              this[n]();
              a = q.get(this || e, n);
              s !== a || i ? q.set(this || e, n, false) : (a = {});
              if (s !== a) {
                t.stopImmediatePropagation();
                t.preventDefault();
                return a && a.value;
              }
            }
          else if (s.length) {
            q.set(this || e, n, {
              value: jQuery.event.trigger(
                jQuery.extend(s[0], jQuery.Event.prototype),
                s.slice(1),
                this || e
              ),
            });
            t.stopImmediatePropagation();
          }
        },
      });
    } else void 0 === q.get(t, n) && jQuery.event.add(t, n, returnTrue);
  }
  jQuery.removeEvent = function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n);
  };
  jQuery.Event = function (t, n) {
    if (!((this || e) instanceof jQuery.Event)) return new jQuery.Event(t, n);
    if (t && t.type) {
      (this || e).originalEvent = t;
      (this || e).type = t.type;
      (this || e).isDefaultPrevented =
        t.defaultPrevented ||
        (void 0 === t.defaultPrevented && false === t.returnValue)
          ? returnTrue
          : returnFalse;
      (this || e).target =
        t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target;
      (this || e).currentTarget = t.currentTarget;
      (this || e).relatedTarget = t.relatedTarget;
    } else (this || e).type = t;
    n && jQuery.extend(this || e, n);
    (this || e).timeStamp = (t && t.timeStamp) || Date.now();
    (this || e)[jQuery.expando] = true;
  };
  jQuery.Event.prototype = {
    constructor: jQuery.Event,
    isDefaultPrevented: returnFalse,
    isPropagationStopped: returnFalse,
    isImmediatePropagationStopped: returnFalse,
    isSimulated: false,
    preventDefault: function () {
      var t = (this || e).originalEvent;
      (this || e).isDefaultPrevented = returnTrue;
      t && !(this || e).isSimulated && t.preventDefault();
    },
    stopPropagation: function () {
      var t = (this || e).originalEvent;
      (this || e).isPropagationStopped = returnTrue;
      t && !(this || e).isSimulated && t.stopPropagation();
    },
    stopImmediatePropagation: function () {
      var t = (this || e).originalEvent;
      (this || e).isImmediatePropagationStopped = returnTrue;
      t && !(this || e).isSimulated && t.stopImmediatePropagation();
      this.stopPropagation();
    },
  };
  jQuery.each(
    {
      altKey: true,
      bubbles: true,
      cancelable: true,
      changedTouches: true,
      ctrlKey: true,
      detail: true,
      eventPhase: true,
      metaKey: true,
      pageX: true,
      pageY: true,
      shiftKey: true,
      view: true,
      char: true,
      code: true,
      charCode: true,
      key: true,
      keyCode: true,
      button: true,
      buttons: true,
      clientX: true,
      clientY: true,
      offsetX: true,
      offsetY: true,
      pointerId: true,
      pointerType: true,
      screenX: true,
      screenY: true,
      targetTouches: true,
      toElement: true,
      touches: true,
      which: true,
    },
    jQuery.event.addProp
  );
  jQuery.each({ focus: "focusin", blur: "focusout" }, function (t, n) {
    jQuery.event.special[t] = {
      setup: function () {
        leverageNative(this || e, t, expectSync);
        return false;
      },
      trigger: function () {
        leverageNative(this || e, t);
        return true;
      },
      _default: function () {
        return true;
      },
      delegateType: n,
    };
  });
  jQuery.each(
    {
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      pointerenter: "pointerover",
      pointerleave: "pointerout",
    },
    function (t, n) {
      jQuery.event.special[t] = {
        delegateType: n,
        bindType: n,
        handle: function (t) {
          var r,
            i = this || e,
            o = t.relatedTarget,
            a = t.handleObj;
          if (!o || (o !== i && !jQuery.contains(i, o))) {
            t.type = a.origType;
            r = a.handler.apply(this || e, arguments);
            t.type = n;
          }
          return r;
        },
      };
    }
  );
  jQuery.fn.extend({
    on: function (t, n, r, i) {
      return on(this || e, t, n, r, i);
    },
    one: function (t, n, r, i) {
      return on(this || e, t, n, r, i, 1);
    },
    off: function (t, n, r) {
      var i, o;
      if (t && t.preventDefault && t.handleObj) {
        i = t.handleObj;
        jQuery(t.delegateTarget).off(
          i.namespace ? i.origType + "." + i.namespace : i.origType,
          i.selector,
          i.handler
        );
        return this || e;
      }
      if ("object" === typeof t) {
        for (o in t) this.off(o, n, t[o]);
        return this || e;
      }
      if (false === n || "function" === typeof n) {
        r = n;
        n = void 0;
      }
      false === r && (r = returnFalse);
      return this.each(function () {
        jQuery.event.remove(this || e, t, r, n);
      });
    },
  });
  var Y = /<script|<style|<link/i,
    Q = /checked\s*(?:[^=]|=\s*.checked.)/i,
    J = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function manipulationTarget(e, t) {
    return (
      (nodeName(e, "table") &&
        nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") &&
        jQuery(e).children("tbody")[0]) ||
      e
    );
  }
  function disableScript(e) {
    e.type = (null !== e.getAttribute("type")) + "/" + e.type;
    return e;
  }
  function restoreScript(e) {
    "true/" === (e.type || "").slice(0, 5)
      ? (e.type = e.type.slice(5))
      : e.removeAttribute("type");
    return e;
  }
  function cloneCopyEvent(e, t) {
    var n, r, i, o, a, s, u;
    if (1 === t.nodeType) {
      if (q.hasData(e)) {
        o = q.get(e);
        u = o.events;
        if (u) {
          q.remove(t, "handle events");
          for (i in u)
            for (n = 0, r = u[i].length; n < r; n++)
              jQuery.event.add(t, i, u[i][n]);
        }
      }
      if (H.hasData(e)) {
        a = H.access(e);
        s = jQuery.extend({}, a);
        H.set(t, s);
      }
    }
  }
  function fixInput(e, t) {
    var n = t.nodeName.toLowerCase();
    "input" === n && $.test(e.type)
      ? (t.checked = e.checked)
      : ("input" !== n && "textarea" !== n) ||
        (t.defaultValue = e.defaultValue);
  }
  function domManip(t, n, r, i) {
    n = a(n);
    var o,
      s,
      u,
      l,
      c,
      f,
      d = 0,
      p = t.length,
      m = p - 1,
      v = n[0],
      y = g(v);
    if (y || (p > 1 && "string" === typeof v && !h.checkClone && Q.test(v)))
      return t.each(function (o) {
        var a = t.eq(o);
        y && (n[0] = v.call(this || e, o, a.html()));
        domManip(a, n, r, i);
      });
    if (p) {
      o = buildFragment(n, t[0].ownerDocument, false, t, i);
      s = o.firstChild;
      1 === o.childNodes.length && (o = s);
      if (s || i) {
        u = jQuery.map(getAll(o, "script"), disableScript);
        l = u.length;
        for (; d < p; d++) {
          c = o;
          if (d !== m) {
            c = jQuery.clone(c, true, true);
            l && jQuery.merge(u, getAll(c, "script"));
          }
          r.call(t[d], c, d);
        }
        if (l) {
          f = u[u.length - 1].ownerDocument;
          jQuery.map(u, restoreScript);
          for (d = 0; d < l; d++) {
            c = u[d];
            U.test(c.type || "") &&
              !q.access(c, "globalEval") &&
              jQuery.contains(f, c) &&
              (c.src && "module" !== (c.type || "").toLowerCase()
                ? jQuery._evalUrl &&
                  !c.noModule &&
                  jQuery._evalUrl(
                    c.src,
                    { nonce: c.nonce || c.getAttribute("nonce") },
                    f
                  )
                : DOMEval(c.textContent.replace(J, ""), c, f));
          }
        }
      }
    }
    return t;
  }
  function remove(e, t, n) {
    var r,
      i = t ? jQuery.filter(t, e) : e,
      o = 0;
    for (; null != (r = i[o]); o++) {
      n || 1 !== r.nodeType || jQuery.cleanData(getAll(r));
      if (r.parentNode) {
        n && isAttached(r) && setGlobalEval(getAll(r, "script"));
        r.parentNode.removeChild(r);
      }
    }
    return e;
  }
  jQuery.extend({
    htmlPrefilter: function (e) {
      return e;
    },
    clone: function (e, t, n) {
      var r,
        i,
        o,
        a,
        s = e.cloneNode(true),
        u = isAttached(e);
      if (
        !h.noCloneChecked &&
        (1 === e.nodeType || 11 === e.nodeType) &&
        !jQuery.isXMLDoc(e)
      ) {
        a = getAll(s);
        o = getAll(e);
        for (r = 0, i = o.length; r < i; r++) fixInput(o[r], a[r]);
      }
      if (t)
        if (n) {
          o = o || getAll(e);
          a = a || getAll(s);
          for (r = 0, i = o.length; r < i; r++) cloneCopyEvent(o[r], a[r]);
        } else cloneCopyEvent(e, s);
      a = getAll(s, "script");
      a.length > 0 && setGlobalEval(a, !u && getAll(e, "script"));
      return s;
    },
    cleanData: function (e) {
      var t,
        n,
        r,
        i = jQuery.event.special,
        o = 0;
      for (; void 0 !== (n = e[o]); o++)
        if (acceptData(n)) {
          if ((t = n[q.expando])) {
            if (t.events)
              for (r in t.events)
                i[r]
                  ? jQuery.event.remove(n, r)
                  : jQuery.removeEvent(n, r, t.handle);
            n[q.expando] = void 0;
          }
          n[H.expando] && (n[H.expando] = void 0);
        }
    },
  });
  jQuery.fn.extend({
    detach: function (t) {
      return remove(this || e, t, true);
    },
    remove: function (t) {
      return remove(this || e, t);
    },
    text: function (t) {
      return access(
        this || e,
        function (t) {
          return void 0 === t
            ? jQuery.text(this || e)
            : this.empty().each(function () {
                (1 !== (this || e).nodeType &&
                  11 !== (this || e).nodeType &&
                  9 !== (this || e).nodeType) ||
                  ((this || e).textContent = t);
              });
        },
        null,
        t,
        arguments.length
      );
    },
    append: function () {
      return domManip(this || e, arguments, function (t) {
        if (
          1 === (this || e).nodeType ||
          11 === (this || e).nodeType ||
          9 === (this || e).nodeType
        ) {
          var n = manipulationTarget(this || e, t);
          n.appendChild(t);
        }
      });
    },
    prepend: function () {
      return domManip(this || e, arguments, function (t) {
        if (
          1 === (this || e).nodeType ||
          11 === (this || e).nodeType ||
          9 === (this || e).nodeType
        ) {
          var n = manipulationTarget(this || e, t);
          n.insertBefore(t, n.firstChild);
        }
      });
    },
    before: function () {
      return domManip(this || e, arguments, function (t) {
        (this || e).parentNode &&
          (this || e).parentNode.insertBefore(t, this || e);
      });
    },
    after: function () {
      return domManip(this || e, arguments, function (t) {
        (this || e).parentNode &&
          (this || e).parentNode.insertBefore(t, (this || e).nextSibling);
      });
    },
    empty: function () {
      var t,
        n = 0;
      for (; null != (t = (this || e)[n]); n++)
        if (1 === t.nodeType) {
          jQuery.cleanData(getAll(t, false));
          t.textContent = "";
        }
      return this || e;
    },
    clone: function (t, n) {
      t = null != t && t;
      n = null == n ? t : n;
      return this.map(function () {
        return jQuery.clone(this || e, t, n);
      });
    },
    html: function (t) {
      return access(
        this || e,
        function (t) {
          var n = (this || e)[0] || {},
            r = 0,
            i = (this || e).length;
          if (void 0 === t && 1 === n.nodeType) return n.innerHTML;
          if (
            "string" === typeof t &&
            !Y.test(t) &&
            !X[(_.exec(t) || ["", ""])[1].toLowerCase()]
          ) {
            t = jQuery.htmlPrefilter(t);
            try {
              for (; r < i; r++) {
                n = (this || e)[r] || {};
                if (1 === n.nodeType) {
                  jQuery.cleanData(getAll(n, false));
                  n.innerHTML = t;
                }
              }
              n = 0;
            } catch (e) {}
          }
          n && this.empty().append(t);
        },
        null,
        t,
        arguments.length
      );
    },
    replaceWith: function () {
      var t = [];
      return domManip(
        this || e,
        arguments,
        function (n) {
          var r = (this || e).parentNode;
          if (jQuery.inArray(this || e, t) < 0) {
            jQuery.cleanData(getAll(this || e));
            r && r.replaceChild(n, this || e);
          }
        },
        t
      );
    },
  });
  jQuery.each(
    {
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith",
    },
    function (t, n) {
      jQuery.fn[t] = function (t) {
        var r,
          i = [],
          o = jQuery(t),
          a = o.length - 1,
          u = 0;
        for (; u <= a; u++) {
          r = u === a ? this || e : this.clone(true);
          jQuery(o[u])[n](r);
          s.apply(i, r.get());
        }
        return this.pushStack(i);
      };
    }
  );
  var K = new RegExp("^(" + F + ")(?!px)[a-z%]+$", "i");
  var getStyles = function (e) {
    var n = e.ownerDocument.defaultView;
    (n && n.opener) || (n = t);
    return n.getComputedStyle(e);
  };
  var swap = function (e, t, n) {
    var r,
      i,
      o = {};
    for (i in t) {
      o[i] = e.style[i];
      e.style[i] = t[i];
    }
    r = n.call(e);
    for (i in t) e.style[i] = o[i];
    return r;
  };
  var Z = new RegExp(I.join("|"), "i");
  (function () {
    function computeStyleTests() {
      if (u) {
        s.style.cssText =
          "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0";
        u.style.cssText =
          "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%";
        R.appendChild(s).appendChild(u);
        var o = t.getComputedStyle(u);
        e = "1%" !== o.top;
        a = 12 === roundPixelMeasures(o.marginLeft);
        u.style.right = "60%";
        i = 36 === roundPixelMeasures(o.right);
        n = 36 === roundPixelMeasures(o.width);
        u.style.position = "absolute";
        r = 12 === roundPixelMeasures(u.offsetWidth / 3);
        R.removeChild(s);
        u = null;
      }
    }
    function roundPixelMeasures(e) {
      return Math.round(parseFloat(e));
    }
    var e,
      n,
      r,
      i,
      o,
      a,
      s = v.createElement("div"),
      u = v.createElement("div");
    if (u.style) {
      u.style.backgroundClip = "content-box";
      u.cloneNode(true).style.backgroundClip = "";
      h.clearCloneStyle = "content-box" === u.style.backgroundClip;
      jQuery.extend(h, {
        boxSizingReliable: function () {
          computeStyleTests();
          return n;
        },
        pixelBoxStyles: function () {
          computeStyleTests();
          return i;
        },
        pixelPosition: function () {
          computeStyleTests();
          return e;
        },
        reliableMarginLeft: function () {
          computeStyleTests();
          return a;
        },
        scrollboxSize: function () {
          computeStyleTests();
          return r;
        },
        reliableTrDimensions: function () {
          var e, n, r, i;
          if (null == o) {
            e = v.createElement("table");
            n = v.createElement("tr");
            r = v.createElement("div");
            e.style.cssText =
              "position:absolute;left:-11111px;border-collapse:separate";
            n.style.cssText = "border:1px solid";
            n.style.height = "1px";
            r.style.height = "9px";
            r.style.display = "block";
            R.appendChild(e).appendChild(n).appendChild(r);
            i = t.getComputedStyle(n);
            o =
              parseInt(i.height, 10) +
                parseInt(i.borderTopWidth, 10) +
                parseInt(i.borderBottomWidth, 10) ===
              n.offsetHeight;
            R.removeChild(e);
          }
          return o;
        },
      });
    }
  })();
  function curCSS(e, t, n) {
    var r,
      i,
      o,
      a,
      s = e.style;
    n = n || getStyles(e);
    if (n) {
      a = n.getPropertyValue(t) || n[t];
      "" !== a || isAttached(e) || (a = jQuery.style(e, t));
      if (!h.pixelBoxStyles() && K.test(a) && Z.test(t)) {
        r = s.width;
        i = s.minWidth;
        o = s.maxWidth;
        s.minWidth = s.maxWidth = s.width = a;
        a = n.width;
        s.width = r;
        s.minWidth = i;
        s.maxWidth = o;
      }
    }
    return void 0 !== a ? a + "" : a;
  }
  function addGetHookIf(t, n) {
    return {
      get: function () {
        if (!t()) return ((this || e).get = n).apply(this || e, arguments);
        delete (this || e).get;
      },
    };
  }
  var ee = ["Webkit", "Moz", "ms"],
    te = v.createElement("div").style,
    ne = {};
  function vendorPropName(e) {
    var t = e[0].toUpperCase() + e.slice(1),
      n = ee.length;
    while (n--) {
      e = ee[n] + t;
      if (e in te) return e;
    }
  }
  function finalPropName(e) {
    var t = jQuery.cssProps[e] || ne[e];
    return t || (e in te ? e : (ne[e] = vendorPropName(e) || e));
  }
  var re = /^(none|table(?!-c[ea]).+)/,
    ie = /^--/,
    oe = { position: "absolute", visibility: "hidden", display: "block" },
    ae = { letterSpacing: "0", fontWeight: "400" };
  function setPositiveNumber(e, t, n) {
    var r = z.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }
  function boxModelAdjustment(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
      s = 0,
      u = 0;
    if (n === (r ? "border" : "content")) return 0;
    for (; a < 4; a += 2) {
      "margin" === n && (u += jQuery.css(e, n + I[a], true, i));
      if (r) {
        "content" === n && (u -= jQuery.css(e, "padding" + I[a], true, i));
        "margin" !== n &&
          (u -= jQuery.css(e, "border" + I[a] + "Width", true, i));
      } else {
        u += jQuery.css(e, "padding" + I[a], true, i);
        "padding" !== n
          ? (u += jQuery.css(e, "border" + I[a] + "Width", true, i))
          : (s += jQuery.css(e, "border" + I[a] + "Width", true, i));
      }
    }
    !r &&
      o >= 0 &&
      (u +=
        Math.max(
          0,
          Math.ceil(
            e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - 0.5
          )
        ) || 0);
    return u;
  }
  function getWidthOrHeight(e, t, n) {
    var r = getStyles(e),
      i = !h.boxSizingReliable() || n,
      o = i && "border-box" === jQuery.css(e, "boxSizing", false, r),
      a = o,
      s = curCSS(e, t, r),
      u = "offset" + t[0].toUpperCase() + t.slice(1);
    if (K.test(s)) {
      if (!n) return s;
      s = "auto";
    }
    if (
      ((!h.boxSizingReliable() && o) ||
        (!h.reliableTrDimensions() && nodeName(e, "tr")) ||
        "auto" === s ||
        (!parseFloat(s) && "inline" === jQuery.css(e, "display", false, r))) &&
      e.getClientRects().length
    ) {
      o = "border-box" === jQuery.css(e, "boxSizing", false, r);
      a = u in e;
      a && (s = e[u]);
    }
    s = parseFloat(s) || 0;
    return (
      s +
      boxModelAdjustment(e, t, n || (o ? "border" : "content"), a, r, s) +
      "px"
    );
  }
  jQuery.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = curCSS(e, "opacity");
            return "" === n ? "1" : n;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: true,
      columnCount: true,
      fillOpacity: true,
      flexGrow: true,
      flexShrink: true,
      fontWeight: true,
      gridArea: true,
      gridColumn: true,
      gridColumnEnd: true,
      gridColumnStart: true,
      gridRow: true,
      gridRowEnd: true,
      gridRowStart: true,
      lineHeight: true,
      opacity: true,
      order: true,
      orphans: true,
      widows: true,
      zIndex: true,
      zoom: true,
    },
    cssProps: {},
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
          o,
          a,
          s = camelCase(t),
          u = ie.test(t),
          l = e.style;
        u || (t = finalPropName(s));
        a = jQuery.cssHooks[t] || jQuery.cssHooks[s];
        if (void 0 === n)
          return a && "get" in a && void 0 !== (i = a.get(e, false, r))
            ? i
            : l[t];
        o = typeof n;
        if ("string" === o && (i = z.exec(n)) && i[1]) {
          n = adjustCSS(e, t, i);
          o = "number";
        }
        if (null != n && n === n) {
          "number" !== o ||
            u ||
            (n += (i && i[3]) || (jQuery.cssNumber[s] ? "" : "px"));
          h.clearCloneStyle ||
            "" !== n ||
            0 !== t.indexOf("background") ||
            (l[t] = "inherit");
          (a && "set" in a && void 0 === (n = a.set(e, n, r))) ||
            (u ? l.setProperty(t, n) : (l[t] = n));
        }
      }
    },
    css: function (e, t, n, r) {
      var i,
        o,
        a,
        s = camelCase(t),
        u = ie.test(t);
      u || (t = finalPropName(s));
      a = jQuery.cssHooks[t] || jQuery.cssHooks[s];
      a && "get" in a && (i = a.get(e, true, n));
      void 0 === i && (i = curCSS(e, t, r));
      "normal" === i && t in ae && (i = ae[t]);
      if ("" === n || n) {
        o = parseFloat(i);
        return true === n || isFinite(o) ? o || 0 : i;
      }
      return i;
    },
  });
  jQuery.each(["height", "width"], function (e, t) {
    jQuery.cssHooks[t] = {
      get: function (e, n, r) {
        if (n)
          return !re.test(jQuery.css(e, "display")) ||
            (e.getClientRects().length && e.getBoundingClientRect().width)
            ? getWidthOrHeight(e, t, r)
            : swap(e, oe, function () {
                return getWidthOrHeight(e, t, r);
              });
      },
      set: function (e, n, r) {
        var i,
          o = getStyles(e),
          a = !h.scrollboxSize() && "absolute" === o.position,
          s = a || r,
          u = s && "border-box" === jQuery.css(e, "boxSizing", false, o),
          l = r ? boxModelAdjustment(e, t, r, u, o) : 0;
        u &&
          a &&
          (l -= Math.ceil(
            e["offset" + t[0].toUpperCase() + t.slice(1)] -
              parseFloat(o[t]) -
              boxModelAdjustment(e, t, "border", false, o) -
              0.5
          ));
        if (l && (i = z.exec(n)) && "px" !== (i[3] || "px")) {
          e.style[t] = n;
          n = jQuery.css(e, t);
        }
        return setPositiveNumber(e, n, l);
      },
    };
  });
  jQuery.cssHooks.marginLeft = addGetHookIf(
    h.reliableMarginLeft,
    function (e, t) {
      if (t)
        return (
          (parseFloat(curCSS(e, "marginLeft")) ||
            e.getBoundingClientRect().left -
              swap(e, { marginLeft: 0 }, function () {
                return e.getBoundingClientRect().left;
              })) + "px"
        );
    }
  );
  jQuery.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
    jQuery.cssHooks[e + t] = {
      expand: function (n) {
        var r = 0,
          i = {},
          o = "string" === typeof n ? n.split(" ") : [n];
        for (; r < 4; r++) i[e + I[r] + t] = o[r] || o[r - 2] || o[0];
        return i;
      },
    };
    "margin" !== e && (jQuery.cssHooks[e + t].set = setPositiveNumber);
  });
  jQuery.fn.extend({
    css: function (t, n) {
      return access(
        this || e,
        function (e, t, n) {
          var r,
            i,
            o = {},
            a = 0;
          if (Array.isArray(t)) {
            r = getStyles(e);
            i = t.length;
            for (; a < i; a++) o[t[a]] = jQuery.css(e, t[a], false, r);
            return o;
          }
          return void 0 !== n ? jQuery.style(e, t, n) : jQuery.css(e, t);
        },
        t,
        n,
        arguments.length > 1
      );
    },
  });
  function Tween(e, t, n, r, i) {
    return new Tween.prototype.init(e, t, n, r, i);
  }
  jQuery.Tween = Tween;
  Tween.prototype = {
    constructor: Tween,
    init: function (t, n, r, i, o, a) {
      (this || e).elem = t;
      (this || e).prop = r;
      (this || e).easing = o || jQuery.easing._default;
      (this || e).options = n;
      (this || e).start = (this || e).now = this.cur();
      (this || e).end = i;
      (this || e).unit = a || (jQuery.cssNumber[r] ? "" : "px");
    },
    cur: function () {
      var t = Tween.propHooks[(this || e).prop];
      return t && t.get
        ? t.get(this || e)
        : Tween.propHooks._default.get(this || e);
    },
    run: function (t) {
      var n,
        r = Tween.propHooks[(this || e).prop];
      (this || e).options.duration
        ? ((this || e).pos = n =
            jQuery.easing[(this || e).easing](
              t,
              (this || e).options.duration * t,
              0,
              1,
              (this || e).options.duration
            ))
        : ((this || e).pos = n = t);
      (this || e).now =
        ((this || e).end - (this || e).start) * n + (this || e).start;
      (this || e).options.step &&
        (this || e).options.step.call(
          (this || e).elem,
          (this || e).now,
          this || e
        );
      r && r.set ? r.set(this || e) : Tween.propHooks._default.set(this || e);
      return this || e;
    },
  };
  Tween.prototype.init.prototype = Tween.prototype;
  Tween.propHooks = {
    _default: {
      get: function (e) {
        var t;
        if (
          1 !== e.elem.nodeType ||
          (null != e.elem[e.prop] && null == e.elem.style[e.prop])
        )
          return e.elem[e.prop];
        t = jQuery.css(e.elem, e.prop, "");
        return t && "auto" !== t ? t : 0;
      },
      set: function (e) {
        jQuery.fx.step[e.prop]
          ? jQuery.fx.step[e.prop](e)
          : 1 !== e.elem.nodeType ||
            (!jQuery.cssHooks[e.prop] &&
              null == e.elem.style[finalPropName(e.prop)])
          ? (e.elem[e.prop] = e.now)
          : jQuery.style(e.elem, e.prop, e.now + e.unit);
      },
    },
  };
  Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
    set: function (e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
    },
  };
  jQuery.easing = {
    linear: function (e) {
      return e;
    },
    swing: function (e) {
      return 0.5 - Math.cos(e * Math.PI) / 2;
    },
    _default: "swing",
  };
  jQuery.fx = Tween.prototype.init;
  jQuery.fx.step = {};
  var se,
    ue,
    le = /^(?:toggle|show|hide)$/,
    ce = /queueHooks$/;
  function schedule() {
    if (ue) {
      false === v.hidden && t.requestAnimationFrame
        ? t.requestAnimationFrame(schedule)
        : t.setTimeout(schedule, jQuery.fx.interval);
      jQuery.fx.tick();
    }
  }
  function createFxNow() {
    t.setTimeout(function () {
      se = void 0;
    });
    return (se = Date.now());
  }
  function genFx(e, t) {
    var n,
      r = 0,
      i = { height: e };
    t = t ? 1 : 0;
    for (; r < 4; r += 2 - t) {
      n = I[r];
      i["margin" + n] = i["padding" + n] = e;
    }
    t && (i.opacity = i.width = e);
    return i;
  }
  function createTween(e, t, n) {
    var r,
      i = (Animation.tweeners[t] || []).concat(Animation.tweeners["*"]),
      o = 0,
      a = i.length;
    for (; o < a; o++) if ((r = i[o].call(n, t, e))) return r;
  }
  function defaultPrefilter(t, n, r) {
    var i,
      o,
      a,
      s,
      u,
      l,
      c,
      f,
      d = "width" in n || "height" in n,
      p = this || e,
      h = {},
      g = t.style,
      m = t.nodeType && isHiddenWithinTree(t),
      v = q.get(t, "fxshow");
    if (!r.queue) {
      s = jQuery._queueHooks(t, "fx");
      if (null == s.unqueued) {
        s.unqueued = 0;
        u = s.empty.fire;
        s.empty.fire = function () {
          s.unqueued || u();
        };
      }
      s.unqueued++;
      p.always(function () {
        p.always(function () {
          s.unqueued--;
          jQuery.queue(t, "fx").length || s.empty.fire();
        });
      });
    }
    for (i in n) {
      o = n[i];
      if (le.test(o)) {
        delete n[i];
        a = a || "toggle" === o;
        if (o === (m ? "hide" : "show")) {
          if ("show" !== o || !v || void 0 === v[i]) continue;
          m = true;
        }
        h[i] = (v && v[i]) || jQuery.style(t, i);
      }
    }
    l = !jQuery.isEmptyObject(n);
    if (l || !jQuery.isEmptyObject(h)) {
      if (d && 1 === t.nodeType) {
        r.overflow = [g.overflow, g.overflowX, g.overflowY];
        c = v && v.display;
        null == c && (c = q.get(t, "display"));
        f = jQuery.css(t, "display");
        if ("none" === f)
          if (c) f = c;
          else {
            showHide([t], true);
            c = t.style.display || c;
            f = jQuery.css(t, "display");
            showHide([t]);
          }
        if (
          ("inline" === f || ("inline-block" === f && null != c)) &&
          "none" === jQuery.css(t, "float")
        ) {
          if (!l) {
            p.done(function () {
              g.display = c;
            });
            if (null == c) {
              f = g.display;
              c = "none" === f ? "" : f;
            }
          }
          g.display = "inline-block";
        }
      }
      if (r.overflow) {
        g.overflow = "hidden";
        p.always(function () {
          g.overflow = r.overflow[0];
          g.overflowX = r.overflow[1];
          g.overflowY = r.overflow[2];
        });
      }
      l = false;
      for (i in h) {
        if (!l) {
          v
            ? "hidden" in v && (m = v.hidden)
            : (v = q.access(t, "fxshow", { display: c }));
          a && (v.hidden = !m);
          m && showHide([t], true);
          p.done(function () {
            m || showHide([t]);
            q.remove(t, "fxshow");
            for (i in h) jQuery.style(t, i, h[i]);
          });
        }
        l = createTween(m ? v[i] : 0, i, p);
        if (!(i in v)) {
          v[i] = l.start;
          if (m) {
            l.end = l.start;
            l.start = 0;
          }
        }
      }
    }
  }
  function propFilter(e, t) {
    var n, r, i, o, a;
    for (n in e) {
      r = camelCase(n);
      i = t[r];
      o = e[n];
      if (Array.isArray(o)) {
        i = o[1];
        o = e[n] = o[0];
      }
      if (n !== r) {
        e[r] = o;
        delete e[n];
      }
      a = jQuery.cssHooks[r];
      if (a && "expand" in a) {
        o = a.expand(o);
        delete e[r];
        for (n in o)
          if (!(n in e)) {
            e[n] = o[n];
            t[n] = i;
          }
      } else t[r] = i;
    }
  }
  function Animation(t, n, r) {
    var i,
      o,
      a = 0,
      s = Animation.prefilters.length,
      u = jQuery.Deferred().always(function () {
        delete tick.elem;
      }),
      tick = function () {
        if (o) return false;
        var e = se || createFxNow(),
          n = Math.max(0, l.startTime + l.duration - e),
          r = n / l.duration || 0,
          i = 1 - r,
          a = 0,
          s = l.tweens.length;
        for (; a < s; a++) l.tweens[a].run(i);
        u.notifyWith(t, [l, i, n]);
        if (i < 1 && s) return n;
        s || u.notifyWith(t, [l, 1, 0]);
        u.resolveWith(t, [l]);
        return false;
      },
      l = u.promise({
        elem: t,
        props: jQuery.extend({}, n),
        opts: jQuery.extend(
          true,
          { specialEasing: {}, easing: jQuery.easing._default },
          r
        ),
        originalProperties: n,
        originalOptions: r,
        startTime: se || createFxNow(),
        duration: r.duration,
        tweens: [],
        createTween: function (e, n) {
          var r = jQuery.Tween(
            t,
            l.opts,
            e,
            n,
            l.opts.specialEasing[e] || l.opts.easing
          );
          l.tweens.push(r);
          return r;
        },
        stop: function (n) {
          var r = 0,
            i = n ? l.tweens.length : 0;
          if (o) return this || e;
          o = true;
          for (; r < i; r++) l.tweens[r].run(1);
          if (n) {
            u.notifyWith(t, [l, 1, 0]);
            u.resolveWith(t, [l, n]);
          } else u.rejectWith(t, [l, n]);
          return this || e;
        },
      }),
      c = l.props;
    propFilter(c, l.opts.specialEasing);
    for (; a < s; a++) {
      i = Animation.prefilters[a].call(l, t, c, l.opts);
      if (i) {
        g(i.stop) &&
          (jQuery._queueHooks(l.elem, l.opts.queue).stop = i.stop.bind(i));
        return i;
      }
    }
    jQuery.map(c, createTween, l);
    g(l.opts.start) && l.opts.start.call(t, l);
    l.progress(l.opts.progress)
      .done(l.opts.done, l.opts.complete)
      .fail(l.opts.fail)
      .always(l.opts.always);
    jQuery.fx.timer(
      jQuery.extend(tick, { elem: t, anim: l, queue: l.opts.queue })
    );
    return l;
  }
  jQuery.Animation = jQuery.extend(Animation, {
    tweeners: {
      "*": [
        function (e, t) {
          var n = this.createTween(e, t);
          adjustCSS(n.elem, e, z.exec(t), n);
          return n;
        },
      ],
    },
    tweener: function (e, t) {
      if (g(e)) {
        t = e;
        e = ["*"];
      } else e = e.match(N);
      var n,
        r = 0,
        i = e.length;
      for (; r < i; r++) {
        n = e[r];
        Animation.tweeners[n] = Animation.tweeners[n] || [];
        Animation.tweeners[n].unshift(t);
      }
    },
    prefilters: [defaultPrefilter],
    prefilter: function (e, t) {
      t ? Animation.prefilters.unshift(e) : Animation.prefilters.push(e);
    },
  });
  jQuery.speed = function (t, n, r) {
    var i =
      t && "object" === typeof t
        ? jQuery.extend({}, t)
        : {
            complete: r || (!r && n) || (g(t) && t),
            duration: t,
            easing: (r && n) || (n && !g(n) && n),
          };
    jQuery.fx.off
      ? (i.duration = 0)
      : "number" !== typeof i.duration &&
        (i.duration in jQuery.fx.speeds
          ? (i.duration = jQuery.fx.speeds[i.duration])
          : (i.duration = jQuery.fx.speeds._default));
    (null != i.queue && true !== i.queue) || (i.queue = "fx");
    i.old = i.complete;
    i.complete = function () {
      g(i.old) && i.old.call(this || e);
      i.queue && jQuery.dequeue(this || e, i.queue);
    };
    return i;
  };
  jQuery.fn.extend({
    fadeTo: function (e, t, n, r) {
      return this.filter(isHiddenWithinTree)
        .css("opacity", 0)
        .show()
        .end()
        .animate({ opacity: t }, e, n, r);
    },
    animate: function (t, n, r, i) {
      var o = jQuery.isEmptyObject(t),
        a = jQuery.speed(n, r, i),
        doAnimation = function () {
          var n = Animation(this || e, jQuery.extend({}, t), a);
          (o || q.get(this || e, "finish")) && n.stop(true);
        };
      doAnimation.finish = doAnimation;
      return o || false === a.queue
        ? this.each(doAnimation)
        : this.queue(a.queue, doAnimation);
    },
    stop: function (t, n, r) {
      var stopQueue = function (e) {
        var t = e.stop;
        delete e.stop;
        t(r);
      };
      if ("string" !== typeof t) {
        r = n;
        n = t;
        t = void 0;
      }
      n && this.queue(t || "fx", []);
      return this.each(function () {
        var n = true,
          i = null != t && t + "queueHooks",
          o = jQuery.timers,
          a = q.get(this || e);
        if (i) a[i] && a[i].stop && stopQueue(a[i]);
        else for (i in a) a[i] && a[i].stop && ce.test(i) && stopQueue(a[i]);
        for (i = o.length; i--; )
          if (o[i].elem === (this || e) && (null == t || o[i].queue === t)) {
            o[i].anim.stop(r);
            n = false;
            o.splice(i, 1);
          }
        (!n && r) || jQuery.dequeue(this || e, t);
      });
    },
    finish: function (t) {
      false !== t && (t = t || "fx");
      return this.each(function () {
        var n,
          r = q.get(this || e),
          i = r[t + "queue"],
          o = r[t + "queueHooks"],
          a = jQuery.timers,
          s = i ? i.length : 0;
        r.finish = true;
        jQuery.queue(this || e, t, []);
        o && o.stop && o.stop.call(this || e, true);
        for (n = a.length; n--; )
          if (a[n].elem === (this || e) && a[n].queue === t) {
            a[n].anim.stop(true);
            a.splice(n, 1);
          }
        for (n = 0; n < s; n++)
          i[n] && i[n].finish && i[n].finish.call(this || e);
        delete r.finish;
      });
    },
  });
  jQuery.each(["toggle", "show", "hide"], function (t, n) {
    var r = jQuery.fn[n];
    jQuery.fn[n] = function (t, i, o) {
      return null == t || "boolean" === typeof t
        ? r.apply(this || e, arguments)
        : this.animate(genFx(n, true), t, i, o);
    };
  });
  jQuery.each(
    {
      slideDown: genFx("show"),
      slideUp: genFx("hide"),
      slideToggle: genFx("toggle"),
      fadeIn: { opacity: "show" },
      fadeOut: { opacity: "hide" },
      fadeToggle: { opacity: "toggle" },
    },
    function (e, t) {
      jQuery.fn[e] = function (e, n, r) {
        return this.animate(t, e, n, r);
      };
    }
  );
  jQuery.timers = [];
  jQuery.fx.tick = function () {
    var e,
      t = 0,
      n = jQuery.timers;
    se = Date.now();
    for (; t < n.length; t++) {
      e = n[t];
      e() || n[t] !== e || n.splice(t--, 1);
    }
    n.length || jQuery.fx.stop();
    se = void 0;
  };
  jQuery.fx.timer = function (e) {
    jQuery.timers.push(e);
    jQuery.fx.start();
  };
  jQuery.fx.interval = 13;
  jQuery.fx.start = function () {
    if (!ue) {
      ue = true;
      schedule();
    }
  };
  jQuery.fx.stop = function () {
    ue = null;
  };
  jQuery.fx.speeds = { slow: 600, fast: 200, _default: 400 };
  jQuery.fn.delay = function (e, n) {
    e = (jQuery.fx && jQuery.fx.speeds[e]) || e;
    n = n || "fx";
    return this.queue(n, function (n, r) {
      var i = t.setTimeout(n, e);
      r.stop = function () {
        t.clearTimeout(i);
      };
    });
  };
  (function () {
    var e = v.createElement("input"),
      t = v.createElement("select"),
      n = t.appendChild(v.createElement("option"));
    e.type = "checkbox";
    h.checkOn = "" !== e.value;
    h.optSelected = n.selected;
    e = v.createElement("input");
    e.value = "t";
    e.type = "radio";
    h.radioValue = "t" === e.value;
  })();
  var fe,
    de = jQuery.expr.attrHandle;
  jQuery.fn.extend({
    attr: function (t, n) {
      return access(this || e, jQuery.attr, t, n, arguments.length > 1);
    },
    removeAttr: function (t) {
      return this.each(function () {
        jQuery.removeAttr(this || e, t);
      });
    },
  });
  jQuery.extend({
    attr: function (e, t, n) {
      var r,
        i,
        o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) {
        if ("undefined" === typeof e.getAttribute) return jQuery.prop(e, t, n);
        (1 === o && jQuery.isXMLDoc(e)) ||
          (i =
            jQuery.attrHooks[t.toLowerCase()] ||
            (jQuery.expr.match.bool.test(t) ? fe : void 0));
        if (void 0 !== n) {
          if (null === n) {
            jQuery.removeAttr(e, t);
            return;
          }
          if (i && "set" in i && void 0 !== (r = i.set(e, n, t))) return r;
          e.setAttribute(t, n + "");
          return n;
        }
        if (i && "get" in i && null !== (r = i.get(e, t))) return r;
        r = jQuery.find.attr(e, t);
        return null == r ? void 0 : r;
      }
    },
    attrHooks: {
      type: {
        set: function (e, t) {
          if (!h.radioValue && "radio" === t && nodeName(e, "input")) {
            var n = e.value;
            e.setAttribute("type", t);
            n && (e.value = n);
            return t;
          }
        },
      },
    },
    removeAttr: function (e, t) {
      var n,
        r = 0,
        i = t && t.match(N);
      if (i && 1 === e.nodeType) while ((n = i[r++])) e.removeAttribute(n);
    },
  });
  fe = {
    set: function (e, t, n) {
      false === t ? jQuery.removeAttr(e, n) : e.setAttribute(n, n);
      return n;
    },
  };
  jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function (e, t) {
    var n = de[t] || jQuery.find.attr;
    de[t] = function (e, t, r) {
      var i,
        o,
        a = t.toLowerCase();
      if (!r) {
        o = de[a];
        de[a] = i;
        i = null != n(e, t, r) ? a : null;
        de[a] = o;
      }
      return i;
    };
  });
  var pe = /^(?:input|select|textarea|button)$/i,
    he = /^(?:a|area)$/i;
  jQuery.fn.extend({
    prop: function (t, n) {
      return access(this || e, jQuery.prop, t, n, arguments.length > 1);
    },
    removeProp: function (t) {
      return this.each(function () {
        delete (this || e)[jQuery.propFix[t] || t];
      });
    },
  });
  jQuery.extend({
    prop: function (e, t, n) {
      var r,
        i,
        o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) {
        if (1 !== o || !jQuery.isXMLDoc(e)) {
          t = jQuery.propFix[t] || t;
          i = jQuery.propHooks[t];
        }
        return void 0 !== n
          ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
            ? r
            : (e[t] = n)
          : i && "get" in i && null !== (r = i.get(e, t))
          ? r
          : e[t];
      }
    },
    propHooks: {
      tabIndex: {
        get: function (e) {
          var t = jQuery.find.attr(e, "tabindex");
          return t
            ? parseInt(t, 10)
            : pe.test(e.nodeName) || (he.test(e.nodeName) && e.href)
            ? 0
            : -1;
        },
      },
    },
    propFix: { for: "htmlFor", class: "className" },
  });
  h.optSelected ||
    (jQuery.propHooks.selected = {
      get: function (e) {
        var t = e.parentNode;
        t && t.parentNode && t.parentNode.selectedIndex;
        return null;
      },
      set: function (e) {
        var t = e.parentNode;
        if (t) {
          t.selectedIndex;
          t.parentNode && t.parentNode.selectedIndex;
        }
      },
    });
  jQuery.each(
    [
      "tabIndex",
      "readOnly",
      "maxLength",
      "cellSpacing",
      "cellPadding",
      "rowSpan",
      "colSpan",
      "useMap",
      "frameBorder",
      "contentEditable",
    ],
    function () {
      jQuery.propFix[this.toLowerCase()] = this || e;
    }
  );
  function stripAndCollapse(e) {
    var t = e.match(N) || [];
    return t.join(" ");
  }
  function getClass(e) {
    return (e.getAttribute && e.getAttribute("class")) || "";
  }
  function classesToArray(e) {
    return Array.isArray(e) ? e : ("string" === typeof e && e.match(N)) || [];
  }
  jQuery.fn.extend({
    addClass: function (t) {
      var n,
        r,
        i,
        o,
        a,
        s,
        u,
        l = 0;
      if (g(t))
        return this.each(function (n) {
          jQuery(this || e).addClass(t.call(this || e, n, getClass(this || e)));
        });
      n = classesToArray(t);
      if (n.length)
        while ((r = (this || e)[l++])) {
          o = getClass(r);
          i = 1 === r.nodeType && " " + stripAndCollapse(o) + " ";
          if (i) {
            s = 0;
            while ((a = n[s++])) i.indexOf(" " + a + " ") < 0 && (i += a + " ");
            u = stripAndCollapse(i);
            o !== u && r.setAttribute("class", u);
          }
        }
      return this || e;
    },
    removeClass: function (t) {
      var n,
        r,
        i,
        o,
        a,
        s,
        u,
        l = 0;
      if (g(t))
        return this.each(function (n) {
          jQuery(this || e).removeClass(
            t.call(this || e, n, getClass(this || e))
          );
        });
      if (!arguments.length) return this.attr("class", "");
      n = classesToArray(t);
      if (n.length)
        while ((r = (this || e)[l++])) {
          o = getClass(r);
          i = 1 === r.nodeType && " " + stripAndCollapse(o) + " ";
          if (i) {
            s = 0;
            while ((a = n[s++]))
              while (i.indexOf(" " + a + " ") > -1)
                i = i.replace(" " + a + " ", " ");
            u = stripAndCollapse(i);
            o !== u && r.setAttribute("class", u);
          }
        }
      return this || e;
    },
    toggleClass: function (t, n) {
      var r = typeof t,
        i = "string" === r || Array.isArray(t);
      return "boolean" === typeof n && i
        ? n
          ? this.addClass(t)
          : this.removeClass(t)
        : g(t)
        ? this.each(function (r) {
            jQuery(this || e).toggleClass(
              t.call(this || e, r, getClass(this || e), n),
              n
            );
          })
        : this.each(function () {
            var n, o, a, s;
            if (i) {
              o = 0;
              a = jQuery(this || e);
              s = classesToArray(t);
              while ((n = s[o++]))
                a.hasClass(n) ? a.removeClass(n) : a.addClass(n);
            } else if (void 0 === t || "boolean" === r) {
              n = getClass(this || e);
              n && q.set(this || e, "__className__", n);
              (this || e).setAttribute &&
                this.setAttribute(
                  "class",
                  n || false === t
                    ? ""
                    : q.get(this || e, "__className__") || ""
                );
            }
          });
    },
    hasClass: function (t) {
      var n,
        r,
        i = 0;
      n = " " + t + " ";
      while ((r = (this || e)[i++]))
        if (
          1 === r.nodeType &&
          (" " + stripAndCollapse(getClass(r)) + " ").indexOf(n) > -1
        )
          return true;
      return false;
    },
  });
  var ge = /\r/g;
  jQuery.fn.extend({
    val: function (t) {
      var n,
        r,
        i,
        o = (this || e)[0];
      if (arguments.length) {
        i = g(t);
        return this.each(function (r) {
          var o;
          if (1 === (this || e).nodeType) {
            o = i ? t.call(this || e, r, jQuery(this || e).val()) : t;
            null == o
              ? (o = "")
              : "number" === typeof o
              ? (o += "")
              : Array.isArray(o) &&
                (o = jQuery.map(o, function (e) {
                  return null == e ? "" : e + "";
                }));
            n =
              jQuery.valHooks[(this || e).type] ||
              jQuery.valHooks[(this || e).nodeName.toLowerCase()];
            (n && "set" in n && void 0 !== n.set(this || e, o, "value")) ||
              ((this || e).value = o);
          }
        });
      }
      if (o) {
        n =
          jQuery.valHooks[o.type] || jQuery.valHooks[o.nodeName.toLowerCase()];
        if (n && "get" in n && void 0 !== (r = n.get(o, "value"))) return r;
        r = o.value;
        return "string" === typeof r ? r.replace(ge, "") : null == r ? "" : r;
      }
    },
  });
  jQuery.extend({
    valHooks: {
      option: {
        get: function (e) {
          var t = jQuery.find.attr(e, "value");
          return null != t ? t : stripAndCollapse(jQuery.text(e));
        },
      },
      select: {
        get: function (e) {
          var t,
            n,
            r,
            i = e.options,
            o = e.selectedIndex,
            a = "select-one" === e.type,
            s = a ? null : [],
            u = a ? o + 1 : i.length;
          r = o < 0 ? u : a ? o : 0;
          for (; r < u; r++) {
            n = i[r];
            if (
              (n.selected || r === o) &&
              !n.disabled &&
              (!n.parentNode.disabled || !nodeName(n.parentNode, "optgroup"))
            ) {
              t = jQuery(n).val();
              if (a) return t;
              s.push(t);
            }
          }
          return s;
        },
        set: function (e, t) {
          var n,
            r,
            i = e.options,
            o = jQuery.makeArray(t),
            a = i.length;
          while (a--) {
            r = i[a];
            (r.selected =
              jQuery.inArray(jQuery.valHooks.option.get(r), o) > -1) &&
              (n = true);
          }
          n || (e.selectedIndex = -1);
          return o;
        },
      },
    },
  });
  jQuery.each(["radio", "checkbox"], function () {
    jQuery.valHooks[this || e] = {
      set: function (e, t) {
        if (Array.isArray(t))
          return (e.checked = jQuery.inArray(jQuery(e).val(), t) > -1);
      },
    };
    h.checkOn ||
      (jQuery.valHooks[this || e].get = function (e) {
        return null === e.getAttribute("value") ? "on" : e.value;
      });
  });
  h.focusin = "onfocusin" in t;
  var me = /^(?:focusinfocus|focusoutblur)$/,
    stopPropagationCallback = function (e) {
      e.stopPropagation();
    };
  jQuery.extend(jQuery.event, {
    trigger: function (e, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        d,
        p,
        h = [r || v],
        y = f.call(e, "type") ? e.type : e,
        x = f.call(e, "namespace") ? e.namespace.split(".") : [];
      a = p = s = r = r || v;
      if (
        3 !== r.nodeType &&
        8 !== r.nodeType &&
        !me.test(y + jQuery.event.triggered)
      ) {
        if (y.indexOf(".") > -1) {
          x = y.split(".");
          y = x.shift();
          x.sort();
        }
        l = y.indexOf(":") < 0 && "on" + y;
        e = e[jQuery.expando]
          ? e
          : new jQuery.Event(y, "object" === typeof e && e);
        e.isTrigger = i ? 2 : 3;
        e.namespace = x.join(".");
        e.rnamespace = e.namespace
          ? new RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)")
          : null;
        e.result = void 0;
        e.target || (e.target = r);
        n = null == n ? [e] : jQuery.makeArray(n, [e]);
        d = jQuery.event.special[y] || {};
        if (i || !d.trigger || false !== d.trigger.apply(r, n)) {
          if (!i && !d.noBubble && !m(r)) {
            u = d.delegateType || y;
            me.test(u + y) || (a = a.parentNode);
            for (; a; a = a.parentNode) {
              h.push(a);
              s = a;
            }
            s === (r.ownerDocument || v) &&
              h.push(s.defaultView || s.parentWindow || t);
          }
          o = 0;
          while ((a = h[o++]) && !e.isPropagationStopped()) {
            p = a;
            e.type = o > 1 ? u : d.bindType || y;
            c =
              (q.get(a, "events") || Object.create(null))[e.type] &&
              q.get(a, "handle");
            c && c.apply(a, n);
            c = l && a[l];
            if (c && c.apply && acceptData(a)) {
              e.result = c.apply(a, n);
              false === e.result && e.preventDefault();
            }
          }
          e.type = y;
          if (
            !i &&
            !e.isDefaultPrevented() &&
            (!d._default || false === d._default.apply(h.pop(), n)) &&
            acceptData(r) &&
            l &&
            g(r[y]) &&
            !m(r)
          ) {
            s = r[l];
            s && (r[l] = null);
            jQuery.event.triggered = y;
            e.isPropagationStopped() &&
              p.addEventListener(y, stopPropagationCallback);
            r[y]();
            e.isPropagationStopped() &&
              p.removeEventListener(y, stopPropagationCallback);
            jQuery.event.triggered = void 0;
            s && (r[l] = s);
          }
          return e.result;
        }
      }
    },
    simulate: function (e, t, n) {
      var r = jQuery.extend(new jQuery.Event(), n, {
        type: e,
        isSimulated: true,
      });
      jQuery.event.trigger(r, null, t);
    },
  });
  jQuery.fn.extend({
    trigger: function (t, n) {
      return this.each(function () {
        jQuery.event.trigger(t, n, this || e);
      });
    },
    triggerHandler: function (t, n) {
      var r = (this || e)[0];
      if (r) return jQuery.event.trigger(t, n, r, true);
    },
  });
  h.focusin ||
    jQuery.each({ focus: "focusin", blur: "focusout" }, function (t, n) {
      var handler = function (e) {
        jQuery.event.simulate(n, e.target, jQuery.event.fix(e));
      };
      jQuery.event.special[n] = {
        setup: function () {
          var r =
              (this || e).ownerDocument || (this || e).document || this || e,
            i = q.access(r, n);
          i || r.addEventListener(t, handler, true);
          q.access(r, n, (i || 0) + 1);
        },
        teardown: function () {
          var r =
              (this || e).ownerDocument || (this || e).document || this || e,
            i = q.access(r, n) - 1;
          if (i) q.access(r, n, i);
          else {
            r.removeEventListener(t, handler, true);
            q.remove(r, n);
          }
        },
      };
    });
  var ve = t.location;
  var ye = { guid: Date.now() };
  var xe = /\?/;
  jQuery.parseXML = function (e) {
    var n, r;
    if (!e || "string" !== typeof e) return null;
    try {
      n = new t.DOMParser().parseFromString(e, "text/xml");
    } catch (e) {}
    r = n && n.getElementsByTagName("parsererror")[0];
    (n && !r) ||
      jQuery.error(
        "Invalid XML: " +
          (r
            ? jQuery
                .map(r.childNodes, function (e) {
                  return e.textContent;
                })
                .join("\n")
            : e)
      );
    return n;
  };
  var be = /\[\]$/,
    we = /\r?\n/g,
    Te = /^(?:submit|button|image|reset|file)$/i,
    Ce = /^(?:input|select|textarea|keygen)/i;
  function buildParams(e, t, n, r) {
    var i;
    if (Array.isArray(t))
      jQuery.each(t, function (t, i) {
        n || be.test(e)
          ? r(e, i)
          : buildParams(
              e + "[" + ("object" === typeof i && null != i ? t : "") + "]",
              i,
              n,
              r
            );
      });
    else if (n || "object" !== toType(t)) r(e, t);
    else for (i in t) buildParams(e + "[" + i + "]", t[i], n, r);
  }
  jQuery.param = function (t, n) {
    var r,
      i = [],
      add = function (e, t) {
        var n = g(t) ? t() : t;
        i[i.length] =
          encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
      };
    if (null == t) return "";
    if (Array.isArray(t) || (t.jquery && !jQuery.isPlainObject(t)))
      jQuery.each(t, function () {
        add((this || e).name, (this || e).value);
      });
    else for (r in t) buildParams(r, t[r], n, add);
    return i.join("&");
  };
  jQuery.fn.extend({
    serialize: function () {
      return jQuery.param(this.serializeArray());
    },
    serializeArray: function () {
      return this.map(function () {
        var t = jQuery.prop(this || e, "elements");
        return t ? jQuery.makeArray(t) : this || e;
      })
        .filter(function () {
          var t = (this || e).type;
          return (
            (this || e).name &&
            !jQuery(this || e).is(":disabled") &&
            Ce.test((this || e).nodeName) &&
            !Te.test(t) &&
            ((this || e).checked || !$.test(t))
          );
        })
        .map(function (t, n) {
          var r = jQuery(this || e).val();
          return null == r
            ? null
            : Array.isArray(r)
            ? jQuery.map(r, function (e) {
                return { name: n.name, value: e.replace(we, "\r\n") };
              })
            : { name: n.name, value: r.replace(we, "\r\n") };
        })
        .get();
    },
  });
  var Se = /%20/g,
    Ae = /#.*$/,
    ke = /([?&])_=[^&]*/,
    Ee = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Ne = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    De = /^(?:GET|HEAD)$/,
    je = /^\/\//,
    Pe = {},
    Le = {},
    qe = "*/".concat("*"),
    He = v.createElement("a");
  He.href = ve.href;
  function addToPrefiltersOrTransports(e) {
    return function (t, n) {
      if ("string" !== typeof t) {
        n = t;
        t = "*";
      }
      var r,
        i = 0,
        o = t.toLowerCase().match(N) || [];
      if (g(n))
        while ((r = o[i++]))
          if ("+" === r[0]) {
            r = r.slice(1) || "*";
            (e[r] = e[r] || []).unshift(n);
          } else (e[r] = e[r] || []).push(n);
    };
  }
  function inspectPrefiltersOrTransports(e, t, n, r) {
    var i = {},
      o = e === Le;
    function inspect(a) {
      var s;
      i[a] = true;
      jQuery.each(e[a] || [], function (e, a) {
        var u = a(t, n, r);
        if ("string" === typeof u && !o && !i[u]) {
          t.dataTypes.unshift(u);
          inspect(u);
          return false;
        }
        if (o) return !(s = u);
      });
      return s;
    }
    return inspect(t.dataTypes[0]) || (!i["*"] && inspect("*"));
  }
  function ajaxExtend(e, t) {
    var n,
      r,
      i = jQuery.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    r && jQuery.extend(true, e, r);
    return e;
  }
  function ajaxHandleResponses(e, t, n) {
    var r,
      i,
      o,
      a,
      s = e.contents,
      u = e.dataTypes;
    while ("*" === u[0]) {
      u.shift();
      void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
    }
    if (r)
      for (i in s)
        if (s[i] && s[i].test(r)) {
          u.unshift(i);
          break;
        }
    if (u[0] in n) o = u[0];
    else {
      for (i in n) {
        if (!u[0] || e.converters[i + " " + u[0]]) {
          o = i;
          break;
        }
        a || (a = i);
      }
      o = o || a;
    }
    if (o) {
      o !== u[0] && u.unshift(o);
      return n[o];
    }
  }
  function ajaxConvert(e, t, n, r) {
    var i,
      o,
      a,
      s,
      u,
      l = {},
      c = e.dataTypes.slice();
    if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
    o = c.shift();
    while (o) {
      e.responseFields[o] && (n[e.responseFields[o]] = t);
      !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType));
      u = o;
      o = c.shift();
      if (o)
        if ("*" === o) o = u;
        else if ("*" !== u && u !== o) {
          a = l[u + " " + o] || l["* " + o];
          if (!a)
            for (i in l) {
              s = i.split(" ");
              if (s[1] === o) {
                a = l[u + " " + s[0]] || l["* " + s[0]];
                if (a) {
                  if (true === a) a = l[i];
                  else if (true !== l[i]) {
                    o = s[0];
                    c.unshift(s[1]);
                  }
                  break;
                }
              }
            }
          if (true !== a)
            if (a && e.throws) t = a(t);
            else
              try {
                t = a(t);
              } catch (e) {
                return {
                  state: "parsererror",
                  error: a ? e : "No conversion from " + u + " to " + o,
                };
              }
        }
    }
    return { state: "success", data: t };
  }
  jQuery.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: ve.href,
      type: "GET",
      isLocal: Ne.test(ve.protocol),
      global: true,
      processData: true,
      async: true,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": qe,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript",
      },
      contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON",
      },
      converters: {
        "* text": String,
        "text html": true,
        "text json": JSON.parse,
        "text xml": jQuery.parseXML,
      },
      flatOptions: { url: true, context: true },
    },
    ajaxSetup: function (e, t) {
      return t
        ? ajaxExtend(ajaxExtend(e, jQuery.ajaxSettings), t)
        : ajaxExtend(jQuery.ajaxSettings, e);
    },
    ajaxPrefilter: addToPrefiltersOrTransports(Pe),
    ajaxTransport: addToPrefiltersOrTransports(Le),
    ajax: function (n, r) {
      if ("object" === typeof n) {
        r = n;
        n = void 0;
      }
      r = r || {};
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f,
        d,
        p,
        h = jQuery.ajaxSetup({}, r),
        g = h.context || h,
        m = h.context && (g.nodeType || g.jquery) ? jQuery(g) : jQuery.event,
        y = jQuery.Deferred(),
        x = jQuery.Callbacks("once memory"),
        b = h.statusCode || {},
        w = {},
        T = {},
        C = "canceled",
        S = {
          readyState: 0,
          getResponseHeader: function (e) {
            var t;
            if (c) {
              if (!s) {
                s = {};
                while ((t = Ee.exec(a)))
                  s[t[1].toLowerCase() + " "] = (
                    s[t[1].toLowerCase() + " "] || []
                  ).concat(t[2]);
              }
              t = s[e.toLowerCase() + " "];
            }
            return null == t ? null : t.join(", ");
          },
          getAllResponseHeaders: function () {
            return c ? a : null;
          },
          setRequestHeader: function (t, n) {
            if (null == c) {
              t = T[t.toLowerCase()] = T[t.toLowerCase()] || t;
              w[t] = n;
            }
            return this || e;
          },
          overrideMimeType: function (t) {
            null == c && (h.mimeType = t);
            return this || e;
          },
          statusCode: function (t) {
            var n;
            if (t)
              if (c) S.always(t[S.status]);
              else for (n in t) b[n] = [b[n], t[n]];
            return this || e;
          },
          abort: function (t) {
            var n = t || C;
            i && i.abort(n);
            done(0, n);
            return this || e;
          },
        };
      y.promise(S);
      h.url = ((n || h.url || ve.href) + "").replace(je, ve.protocol + "//");
      h.type = r.method || r.type || h.method || h.type;
      h.dataTypes = (h.dataType || "*").toLowerCase().match(N) || [""];
      if (null == h.crossDomain) {
        l = v.createElement("a");
        try {
          l.href = h.url;
          l.href = l.href;
          h.crossDomain =
            He.protocol + "//" + He.host !== l.protocol + "//" + l.host;
        } catch (e) {
          h.crossDomain = true;
        }
      }
      h.data &&
        h.processData &&
        "string" !== typeof h.data &&
        (h.data = jQuery.param(h.data, h.traditional));
      inspectPrefiltersOrTransports(Pe, h, r, S);
      if (c) return S;
      f = jQuery.event && h.global;
      f && 0 === jQuery.active++ && jQuery.event.trigger("ajaxStart");
      h.type = h.type.toUpperCase();
      h.hasContent = !De.test(h.type);
      o = h.url.replace(Ae, "");
      if (h.hasContent)
        h.data &&
          h.processData &&
          0 ===
            (h.contentType || "").indexOf(
              "application/x-www-form-urlencoded"
            ) &&
          (h.data = h.data.replace(Se, "+"));
      else {
        p = h.url.slice(o.length);
        if (h.data && (h.processData || "string" === typeof h.data)) {
          o += (xe.test(o) ? "&" : "?") + h.data;
          delete h.data;
        }
        if (false === h.cache) {
          o = o.replace(ke, "$1");
          p = (xe.test(o) ? "&" : "?") + "_=" + ye.guid++ + p;
        }
        h.url = o + p;
      }
      if (h.ifModified) {
        jQuery.lastModified[o] &&
          S.setRequestHeader("If-Modified-Since", jQuery.lastModified[o]);
        jQuery.etag[o] && S.setRequestHeader("If-None-Match", jQuery.etag[o]);
      }
      ((h.data && h.hasContent && false !== h.contentType) || r.contentType) &&
        S.setRequestHeader("Content-Type", h.contentType);
      S.setRequestHeader(
        "Accept",
        h.dataTypes[0] && h.accepts[h.dataTypes[0]]
          ? h.accepts[h.dataTypes[0]] +
              ("*" !== h.dataTypes[0] ? ", " + qe + "; q=0.01" : "")
          : h.accepts["*"]
      );
      for (d in h.headers) S.setRequestHeader(d, h.headers[d]);
      if (h.beforeSend && (false === h.beforeSend.call(g, S, h) || c))
        return S.abort();
      C = "abort";
      x.add(h.complete);
      S.done(h.success);
      S.fail(h.error);
      i = inspectPrefiltersOrTransports(Le, h, r, S);
      if (i) {
        S.readyState = 1;
        f && m.trigger("ajaxSend", [S, h]);
        if (c) return S;
        h.async &&
          h.timeout > 0 &&
          (u = t.setTimeout(function () {
            S.abort("timeout");
          }, h.timeout));
        try {
          c = false;
          i.send(w, done);
        } catch (e) {
          if (c) throw e;
          done(-1, e);
        }
      } else done(-1, "No Transport");
      function done(e, n, r, s) {
        var l,
          d,
          p,
          v,
          w,
          T = n;
        if (!c) {
          c = true;
          u && t.clearTimeout(u);
          i = void 0;
          a = s || "";
          S.readyState = e > 0 ? 4 : 0;
          l = (e >= 200 && e < 300) || 304 === e;
          r && (v = ajaxHandleResponses(h, S, r));
          !l &&
            jQuery.inArray("script", h.dataTypes) > -1 &&
            jQuery.inArray("json", h.dataTypes) < 0 &&
            (h.converters["text script"] = function () {});
          v = ajaxConvert(h, v, S, l);
          if (l) {
            if (h.ifModified) {
              w = S.getResponseHeader("Last-Modified");
              w && (jQuery.lastModified[o] = w);
              w = S.getResponseHeader("etag");
              w && (jQuery.etag[o] = w);
            }
            if (204 === e || "HEAD" === h.type) T = "nocontent";
            else if (304 === e) T = "notmodified";
            else {
              T = v.state;
              d = v.data;
              p = v.error;
              l = !p;
            }
          } else {
            p = T;
            if (e || !T) {
              T = "error";
              e < 0 && (e = 0);
            }
          }
          S.status = e;
          S.statusText = (n || T) + "";
          l ? y.resolveWith(g, [d, T, S]) : y.rejectWith(g, [S, T, p]);
          S.statusCode(b);
          b = void 0;
          f && m.trigger(l ? "ajaxSuccess" : "ajaxError", [S, h, l ? d : p]);
          x.fireWith(g, [S, T]);
          if (f) {
            m.trigger("ajaxComplete", [S, h]);
            --jQuery.active || jQuery.event.trigger("ajaxStop");
          }
        }
      }
      return S;
    },
    getJSON: function (e, t, n) {
      return jQuery.get(e, t, n, "json");
    },
    getScript: function (e, t) {
      return jQuery.get(e, void 0, t, "script");
    },
  });
  jQuery.each(["get", "post"], function (e, t) {
    jQuery[t] = function (e, n, r, i) {
      if (g(n)) {
        i = i || r;
        r = n;
        n = void 0;
      }
      return jQuery.ajax(
        jQuery.extend(
          { url: e, type: t, dataType: i, data: n, success: r },
          jQuery.isPlainObject(e) && e
        )
      );
    };
  });
  jQuery.ajaxPrefilter(function (e) {
    var t;
    for (t in e.headers)
      "content-type" === t.toLowerCase() &&
        (e.contentType = e.headers[t] || "");
  });
  jQuery._evalUrl = function (e, t, n) {
    return jQuery.ajax({
      url: e,
      type: "GET",
      dataType: "script",
      cache: true,
      async: false,
      global: false,
      converters: { "text script": function () {} },
      dataFilter: function (e) {
        jQuery.globalEval(e, t, n);
      },
    });
  };
  jQuery.fn.extend({
    wrapAll: function (t) {
      var n;
      if ((this || e)[0]) {
        g(t) && (t = t.call((this || e)[0]));
        n = jQuery(t, (this || e)[0].ownerDocument)
          .eq(0)
          .clone(true);
        (this || e)[0].parentNode && n.insertBefore((this || e)[0]);
        n.map(function () {
          var t = this || e;
          while (t.firstElementChild) t = t.firstElementChild;
          return t;
        }).append(this || e);
      }
      return this || e;
    },
    wrapInner: function (t) {
      return g(t)
        ? this.each(function (n) {
            jQuery(this || e).wrapInner(t.call(this || e, n));
          })
        : this.each(function () {
            var n = jQuery(this || e),
              r = n.contents();
            r.length ? r.wrapAll(t) : n.append(t);
          });
    },
    wrap: function (t) {
      var n = g(t);
      return this.each(function (r) {
        jQuery(this || e).wrapAll(n ? t.call(this || e, r) : t);
      });
    },
    unwrap: function (t) {
      this.parent(t)
        .not("body")
        .each(function () {
          jQuery(this || e).replaceWith((this || e).childNodes);
        });
      return this || e;
    },
  });
  jQuery.expr.pseudos.hidden = function (e) {
    return !jQuery.expr.pseudos.visible(e);
  };
  jQuery.expr.pseudos.visible = function (e) {
    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
  };
  jQuery.ajaxSettings.xhr = function () {
    try {
      return new t.XMLHttpRequest();
    } catch (e) {}
  };
  var Oe = { 0: 200, 1223: 204 },
    Me = jQuery.ajaxSettings.xhr();
  h.cors = !!Me && "withCredentials" in Me;
  h.ajax = Me = !!Me;
  jQuery.ajaxTransport(function (e) {
    var n, r;
    if (h.cors || (Me && !e.crossDomain))
      return {
        send: function (i, o) {
          var a,
            s = e.xhr();
          s.open(e.type, e.url, e.async, e.username, e.password);
          if (e.xhrFields) for (a in e.xhrFields) s[a] = e.xhrFields[a];
          e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType);
          e.crossDomain ||
            i["X-Requested-With"] ||
            (i["X-Requested-With"] = "XMLHttpRequest");
          for (a in i) s.setRequestHeader(a, i[a]);
          n = function (e) {
            return function () {
              if (n) {
                n =
                  r =
                  s.onload =
                  s.onerror =
                  s.onabort =
                  s.ontimeout =
                  s.onreadystatechange =
                    null;
                "abort" === e
                  ? s.abort()
                  : "error" === e
                  ? "number" !== typeof s.status
                    ? o(0, "error")
                    : o(s.status, s.statusText)
                  : o(
                      Oe[s.status] || s.status,
                      s.statusText,
                      "text" !== (s.responseType || "text") ||
                        "string" !== typeof s.responseText
                        ? { binary: s.response }
                        : { text: s.responseText },
                      s.getAllResponseHeaders()
                    );
              }
            };
          };
          s.onload = n();
          r = s.onerror = s.ontimeout = n("error");
          void 0 !== s.onabort
            ? (s.onabort = r)
            : (s.onreadystatechange = function () {
                4 === s.readyState &&
                  t.setTimeout(function () {
                    n && r();
                  });
              });
          n = n("abort");
          try {
            s.send((e.hasContent && e.data) || null);
          } catch (e) {
            if (n) throw e;
          }
        },
        abort: function () {
          n && n();
        },
      };
  });
  jQuery.ajaxPrefilter(function (e) {
    e.crossDomain && (e.contents.script = false);
  });
  jQuery.ajaxSetup({
    accepts: {
      script:
        "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
    },
    contents: { script: /\b(?:java|ecma)script\b/ },
    converters: {
      "text script": function (e) {
        jQuery.globalEval(e);
        return e;
      },
    },
  });
  jQuery.ajaxPrefilter("script", function (e) {
    void 0 === e.cache && (e.cache = false);
    e.crossDomain && (e.type = "GET");
  });
  jQuery.ajaxTransport("script", function (e) {
    if (e.crossDomain || e.scriptAttrs) {
      var t, n;
      return {
        send: function (r, i) {
          t = jQuery("<script>")
            .attr(e.scriptAttrs || {})
            .prop({ charset: e.scriptCharset, src: e.url })
            .on(
              "load error",
              (n = function (e) {
                t.remove();
                n = null;
                e && i("error" === e.type ? 404 : 200, e.type);
              })
            );
          v.head.appendChild(t[0]);
        },
        abort: function () {
          n && n();
        },
      };
    }
  });
  var Fe = [],
    ze = /(=)\?(?=&|$)|\?\?/;
  jQuery.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var t = Fe.pop() || jQuery.expando + "_" + ye.guid++;
      (this || e)[t] = true;
      return t;
    },
  });
  jQuery.ajaxPrefilter("json jsonp", function (e, n, r) {
    var i,
      o,
      a,
      s =
        false !== e.jsonp &&
        (ze.test(e.url)
          ? "url"
          : "string" === typeof e.data &&
            0 ===
              (e.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
            ze.test(e.data) &&
            "data");
    if (s || "jsonp" === e.dataTypes[0]) {
      i = e.jsonpCallback = g(e.jsonpCallback)
        ? e.jsonpCallback()
        : e.jsonpCallback;
      s
        ? (e[s] = e[s].replace(ze, "$1" + i))
        : false !== e.jsonp &&
          (e.url += (xe.test(e.url) ? "&" : "?") + e.jsonp + "=" + i);
      e.converters["script json"] = function () {
        a || jQuery.error(i + " was not called");
        return a[0];
      };
      e.dataTypes[0] = "json";
      o = t[i];
      t[i] = function () {
        a = arguments;
      };
      r.always(function () {
        void 0 === o ? jQuery(t).removeProp(i) : (t[i] = o);
        if (e[i]) {
          e.jsonpCallback = n.jsonpCallback;
          Fe.push(i);
        }
        a && g(o) && o(a[0]);
        a = o = void 0;
      });
      return "script";
    }
  });
  h.createHTMLDocument = (function () {
    var e = v.implementation.createHTMLDocument("").body;
    e.innerHTML = "<form></form><form></form>";
    return 2 === e.childNodes.length;
  })();
  jQuery.parseHTML = function (e, t, n) {
    if ("string" !== typeof e) return [];
    if ("boolean" === typeof t) {
      n = t;
      t = false;
    }
    var r, i, o;
    if (!t)
      if (h.createHTMLDocument) {
        t = v.implementation.createHTMLDocument("");
        r = t.createElement("base");
        r.href = v.location.href;
        t.head.appendChild(r);
      } else t = v;
    i = T.exec(e);
    o = !n && [];
    if (i) return [t.createElement(i[1])];
    i = buildFragment([e], t, o);
    o && o.length && jQuery(o).remove();
    return jQuery.merge([], i.childNodes);
  };
  jQuery.fn.load = function (t, n, r) {
    var i,
      o,
      a,
      s = this || e,
      u = t.indexOf(" ");
    if (u > -1) {
      i = stripAndCollapse(t.slice(u));
      t = t.slice(0, u);
    }
    if (g(n)) {
      r = n;
      n = void 0;
    } else n && "object" === typeof n && (o = "POST");
    s.length > 0 &&
      jQuery
        .ajax({ url: t, type: o || "GET", dataType: "html", data: n })
        .done(function (e) {
          a = arguments;
          s.html(i ? jQuery("<div>").append(jQuery.parseHTML(e)).find(i) : e);
        })
        .always(
          r &&
            function (t, n) {
              s.each(function () {
                r.apply(this || e, a || [t.responseText, n, t]);
              });
            }
        );
    return this || e;
  };
  jQuery.expr.pseudos.animated = function (e) {
    return jQuery.grep(jQuery.timers, function (t) {
      return e === t.elem;
    }).length;
  };
  jQuery.offset = {
    setOffset: function (e, t, n) {
      var r,
        i,
        o,
        a,
        s,
        u,
        l,
        c = jQuery.css(e, "position"),
        f = jQuery(e),
        d = {};
      "static" === c && (e.style.position = "relative");
      s = f.offset();
      o = jQuery.css(e, "top");
      u = jQuery.css(e, "left");
      l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1;
      if (l) {
        r = f.position();
        a = r.top;
        i = r.left;
      } else {
        a = parseFloat(o) || 0;
        i = parseFloat(u) || 0;
      }
      g(t) && (t = t.call(e, n, jQuery.extend({}, s)));
      null != t.top && (d.top = t.top - s.top + a);
      null != t.left && (d.left = t.left - s.left + i);
      "using" in t ? t.using.call(e, d) : f.css(d);
    },
  };
  jQuery.fn.extend({
    offset: function (t) {
      if (arguments.length)
        return void 0 === t
          ? this || e
          : this.each(function (n) {
              jQuery.offset.setOffset(this || e, t, n);
            });
      var n,
        r,
        i = (this || e)[0];
      if (i) {
        if (!i.getClientRects().length) return { top: 0, left: 0 };
        n = i.getBoundingClientRect();
        r = i.ownerDocument.defaultView;
        return { top: n.top + r.pageYOffset, left: n.left + r.pageXOffset };
      }
    },
    position: function () {
      if ((this || e)[0]) {
        var t,
          n,
          r,
          i = (this || e)[0],
          o = { top: 0, left: 0 };
        if ("fixed" === jQuery.css(i, "position"))
          n = i.getBoundingClientRect();
        else {
          n = this.offset();
          r = i.ownerDocument;
          t = i.offsetParent || r.documentElement;
          while (
            t &&
            (t === r.body || t === r.documentElement) &&
            "static" === jQuery.css(t, "position")
          )
            t = t.parentNode;
          if (t && t !== i && 1 === t.nodeType) {
            o = jQuery(t).offset();
            o.top += jQuery.css(t, "borderTopWidth", true);
            o.left += jQuery.css(t, "borderLeftWidth", true);
          }
        }
        return {
          top: n.top - o.top - jQuery.css(i, "marginTop", true),
          left: n.left - o.left - jQuery.css(i, "marginLeft", true),
        };
      }
    },
    offsetParent: function () {
      return this.map(function () {
        var t = (this || e).offsetParent;
        while (t && "static" === jQuery.css(t, "position")) t = t.offsetParent;
        return t || R;
      });
    },
  });
  jQuery.each(
    { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
    function (t, n) {
      var r = "pageYOffset" === n;
      jQuery.fn[t] = function (i) {
        return access(
          this || e,
          function (e, t, i) {
            var o;
            m(e) ? (o = e) : 9 === e.nodeType && (o = e.defaultView);
            if (void 0 === i) return o ? o[n] : e[t];
            o
              ? o.scrollTo(r ? o.pageXOffset : i, r ? i : o.pageYOffset)
              : (e[t] = i);
          },
          t,
          i,
          arguments.length
        );
      };
    }
  );
  jQuery.each(["top", "left"], function (e, t) {
    jQuery.cssHooks[t] = addGetHookIf(h.pixelPosition, function (e, n) {
      if (n) {
        n = curCSS(e, t);
        return K.test(n) ? jQuery(e).position()[t] + "px" : n;
      }
    });
  });
  jQuery.each({ Height: "height", Width: "width" }, function (t, n) {
    jQuery.each(
      { padding: "inner" + t, content: n, "": "outer" + t },
      function (r, i) {
        jQuery.fn[i] = function (o, a) {
          var s = arguments.length && (r || "boolean" !== typeof o),
            u = r || (true === o || true === a ? "margin" : "border");
          return access(
            this || e,
            function (e, n, r) {
              var o;
              if (m(e))
                return 0 === i.indexOf("outer")
                  ? e["inner" + t]
                  : e.document.documentElement["client" + t];
              if (9 === e.nodeType) {
                o = e.documentElement;
                return Math.max(
                  e.body["scroll" + t],
                  o["scroll" + t],
                  e.body["offset" + t],
                  o["offset" + t],
                  o["client" + t]
                );
              }
              return void 0 === r
                ? jQuery.css(e, n, u)
                : jQuery.style(e, n, r, u);
            },
            n,
            s ? o : void 0,
            s
          );
        };
      }
    );
  });
  jQuery.each(
    [
      "ajaxStart",
      "ajaxStop",
      "ajaxComplete",
      "ajaxError",
      "ajaxSuccess",
      "ajaxSend",
    ],
    function (e, t) {
      jQuery.fn[t] = function (e) {
        return this.on(t, e);
      };
    }
  );
  jQuery.fn.extend({
    bind: function (e, t, n) {
      return this.on(e, null, t, n);
    },
    unbind: function (e, t) {
      return this.off(e, null, t);
    },
    delegate: function (e, t, n, r) {
      return this.on(t, e, n, r);
    },
    undelegate: function (e, t, n) {
      return 1 === arguments.length
        ? this.off(e, "**")
        : this.off(t, e || "**", n);
    },
    hover: function (e, t) {
      return this.mouseenter(e).mouseleave(t || e);
    },
  });
  jQuery.each(
    "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
      " "
    ),
    function (e, t) {
      jQuery.fn[t] = function (e, n) {
        return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
      };
    }
  );
  var Ie = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  jQuery.proxy = function (t, n) {
    var r, i, a;
    if ("string" === typeof n) {
      r = t[n];
      n = t;
      t = r;
    }
    if (g(t)) {
      i = o.call(arguments, 2);
      a = function () {
        return t.apply(n || this || e, i.concat(o.call(arguments)));
      };
      a.guid = t.guid = t.guid || jQuery.guid++;
      return a;
    }
  };
  jQuery.holdReady = function (e) {
    e ? jQuery.readyWait++ : jQuery.ready(true);
  };
  jQuery.isArray = Array.isArray;
  jQuery.parseJSON = JSON.parse;
  jQuery.nodeName = nodeName;
  jQuery.isFunction = g;
  jQuery.isWindow = m;
  jQuery.camelCase = camelCase;
  jQuery.type = toType;
  jQuery.now = Date.now;
  jQuery.isNumeric = function (e) {
    var t = jQuery.type(e);
    return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
  };
  jQuery.trim = function (e) {
    return null == e ? "" : (e + "").replace(Ie, "");
  };
  var Re = t.jQuery,
    We = t.$;
  jQuery.noConflict = function (e) {
    t.$ === jQuery && (t.$ = We);
    e && t.jQuery === jQuery && (t.jQuery = Re);
    return jQuery;
  };
  "undefined" === typeof n && (t.jQuery = t.$ = jQuery);
  return jQuery;
});
var n = t;
export default n;
