var n =
  "undefined" !== typeof globalThis
    ? globalThis
    : "undefined" !== typeof self
    ? self
    : global;
var r = {};
(function () {
  var t = this || n;
  var e = t._;
  var i = {};
  var u = Array.prototype,
    a = Object.prototype,
    l = Function.prototype;
  var c = u.push,
    o = u.slice,
    f = u.concat,
    s = a.toString,
    p = a.hasOwnProperty;
  var v = u.forEach,
    h = u.map,
    y = u.reduce,
    d = u.reduceRight,
    g = u.filter,
    m = u.every,
    b = u.some,
    x = u.indexOf,
    w = u.lastIndexOf,
    j = Array.isArray,
    A = Object.keys,
    O = l.bind;
  var _ = function (r) {
    if (r instanceof _) return r;
    if (!((this || n) instanceof _)) return new _(r);
    (this || n)._wrapped = r;
  };
  r && (r = r = _);
  r._ = _;
  _.VERSION = "1.4.4";
  var E =
    (_.each =
    _.forEach =
      function (n, r, t) {
        if (null != n)
          if (v && n.forEach === v) n.forEach(r, t);
          else if (n.length === +n.length) {
            for (var e = 0, u = n.length; e < u; e++)
              if (r.call(t, n[e], e, n) === i) return;
          } else
            for (var a in n)
              if (_.has(n, a) && r.call(t, n[a], a, n) === i) return;
      });
  _.map = _.collect = function (n, r, t) {
    var e = [];
    if (null == n) return e;
    if (h && n.map === h) return n.map(r, t);
    E(n, function (n, i, u) {
      e[e.length] = r.call(t, n, i, u);
    });
    return e;
  };
  var k = "Reduce of empty array with no initial value";
  _.reduce =
    _.foldl =
    _.inject =
      function (n, r, t, e) {
        var i = arguments.length > 2;
        null == n && (n = []);
        if (y && n.reduce === y) {
          e && (r = _.bind(r, e));
          return i ? n.reduce(r, t) : n.reduce(r);
        }
        E(n, function (n, u, a) {
          if (i) t = r.call(e, t, n, u, a);
          else {
            t = n;
            i = true;
          }
        });
        if (!i) throw new TypeError(k);
        return t;
      };
  _.reduceRight = _.foldr = function (n, r, t, e) {
    var i = arguments.length > 2;
    null == n && (n = []);
    if (d && n.reduceRight === d) {
      e && (r = _.bind(r, e));
      return i ? n.reduceRight(r, t) : n.reduceRight(r);
    }
    var u = n.length;
    if (u !== +u) {
      var a = _.keys(n);
      u = a.length;
    }
    E(n, function (l, c, o) {
      c = a ? a[--u] : --u;
      if (i) t = r.call(e, t, n[c], c, o);
      else {
        t = n[c];
        i = true;
      }
    });
    if (!i) throw new TypeError(k);
    return t;
  };
  _.find = _.detect = function (n, r, t) {
    var e;
    I(n, function (n, i, u) {
      if (r.call(t, n, i, u)) {
        e = n;
        return true;
      }
    });
    return e;
  };
  _.filter = _.select = function (n, r, t) {
    var e = [];
    if (null == n) return e;
    if (g && n.filter === g) return n.filter(r, t);
    E(n, function (n, i, u) {
      r.call(t, n, i, u) && (e[e.length] = n);
    });
    return e;
  };
  _.reject = function (n, r, t) {
    return _.filter(
      n,
      function (n, e, i) {
        return !r.call(t, n, e, i);
      },
      t
    );
  };
  _.every = _.all = function (n, r, t) {
    r || (r = _.identity);
    var e = true;
    if (null == n) return e;
    if (m && n.every === m) return n.every(r, t);
    E(n, function (n, u, a) {
      if (!(e = e && r.call(t, n, u, a))) return i;
    });
    return !!e;
  };
  var I =
    (_.some =
    _.any =
      function (n, r, t) {
        r || (r = _.identity);
        var e = false;
        if (null == n) return e;
        if (b && n.some === b) return n.some(r, t);
        E(n, function (n, u, a) {
          if (e || (e = r.call(t, n, u, a))) return i;
        });
        return !!e;
      });
  _.contains = _.include = function (n, r) {
    return (
      null != n &&
      (x && n.indexOf === x
        ? -1 != n.indexOf(r)
        : I(n, function (n) {
            return n === r;
          }))
    );
  };
  _.invoke = function (n, r) {
    var t = o.call(arguments, 2);
    var e = _.isFunction(r);
    return _.map(n, function (n) {
      return (e ? r : n[r]).apply(n, t);
    });
  };
  _.pluck = function (n, r) {
    return _.map(n, function (n) {
      return n[r];
    });
  };
  _.where = function (n, r, t) {
    return _.isEmpty(r)
      ? t
        ? null
        : []
      : _[t ? "find" : "filter"](n, function (n) {
          for (var t in r) if (r[t] !== n[t]) return false;
          return true;
        });
  };
  _.findWhere = function (n, r) {
    return _.where(n, r, true);
  };
  _.max = function (n, r, t) {
    if (!r && _.isArray(n) && n[0] === +n[0] && n.length < 65535)
      return Math.max.apply(Math, n);
    if (!r && _.isEmpty(n)) return -Infinity;
    var e = { computed: -Infinity, value: -Infinity };
    E(n, function (n, i, u) {
      var a = r ? r.call(t, n, i, u) : n;
      a >= e.computed && (e = { value: n, computed: a });
    });
    return e.value;
  };
  _.min = function (n, r, t) {
    if (!r && _.isArray(n) && n[0] === +n[0] && n.length < 65535)
      return Math.min.apply(Math, n);
    if (!r && _.isEmpty(n)) return Infinity;
    var e = { computed: Infinity, value: Infinity };
    E(n, function (n, i, u) {
      var a = r ? r.call(t, n, i, u) : n;
      a < e.computed && (e = { value: n, computed: a });
    });
    return e.value;
  };
  _.shuffle = function (n) {
    var r;
    var t = 0;
    var e = [];
    E(n, function (n) {
      r = _.random(t++);
      e[t - 1] = e[r];
      e[r] = n;
    });
    return e;
  };
  var lookupIterator = function (n) {
    return _.isFunction(n)
      ? n
      : function (r) {
          return r[n];
        };
  };
  _.sortBy = function (n, r, t) {
    var e = lookupIterator(r);
    return _.pluck(
      _.map(n, function (n, r, i) {
        return { value: n, index: r, criteria: e.call(t, n, r, i) };
      }).sort(function (n, r) {
        var t = n.criteria;
        var e = r.criteria;
        if (t !== e) {
          if (t > e || void 0 === t) return 1;
          if (t < e || void 0 === e) return -1;
        }
        return n.index < r.index ? -1 : 1;
      }),
      "value"
    );
  };
  var group = function (n, r, t, e) {
    var i = {};
    var u = lookupIterator(r || _.identity);
    E(n, function (r, a) {
      var l = u.call(t, r, a, n);
      e(i, l, r);
    });
    return i;
  };
  _.groupBy = function (n, r, t) {
    return group(n, r, t, function (n, r, t) {
      (_.has(n, r) ? n[r] : (n[r] = [])).push(t);
    });
  };
  _.countBy = function (n, r, t) {
    return group(n, r, t, function (n, r) {
      _.has(n, r) || (n[r] = 0);
      n[r]++;
    });
  };
  _.sortedIndex = function (n, r, t, e) {
    t = null == t ? _.identity : lookupIterator(t);
    var i = t.call(e, r);
    var u = 0,
      a = n.length;
    while (u < a) {
      var l = (u + a) >>> 1;
      t.call(e, n[l]) < i ? (u = l + 1) : (a = l);
    }
    return u;
  };
  _.toArray = function (n) {
    return n
      ? _.isArray(n)
        ? o.call(n)
        : n.length === +n.length
        ? _.map(n, _.identity)
        : _.values(n)
      : [];
  };
  _.size = function (n) {
    return null == n ? 0 : n.length === +n.length ? n.length : _.keys(n).length;
  };
  _.first =
    _.head =
    _.take =
      function (n, r, t) {
        if (null != n) return null == r || t ? n[0] : o.call(n, 0, r);
      };
  _.initial = function (n, r, t) {
    return o.call(n, 0, n.length - (null == r || t ? 1 : r));
  };
  _.last = function (n, r, t) {
    if (null != n)
      return null == r || t
        ? n[n.length - 1]
        : o.call(n, Math.max(n.length - r, 0));
  };
  _.rest =
    _.tail =
    _.drop =
      function (n, r, t) {
        return o.call(n, null == r || t ? 1 : r);
      };
  _.compact = function (n) {
    return _.filter(n, _.identity);
  };
  var flatten = function (n, r, t) {
    E(n, function (n) {
      _.isArray(n) ? (r ? c.apply(t, n) : flatten(n, r, t)) : t.push(n);
    });
    return t;
  };
  _.flatten = function (n, r) {
    return flatten(n, r, []);
  };
  _.without = function (n) {
    return _.difference(n, o.call(arguments, 1));
  };
  _.uniq = _.unique = function (n, r, t, e) {
    if (_.isFunction(r)) {
      e = t;
      t = r;
      r = false;
    }
    var i = t ? _.map(n, t, e) : n;
    var u = [];
    var a = [];
    E(i, function (t, e) {
      if (r ? !e || a[a.length - 1] !== t : !_.contains(a, t)) {
        a.push(t);
        u.push(n[e]);
      }
    });
    return u;
  };
  _.union = function () {
    return _.uniq(f.apply(u, arguments));
  };
  _.intersection = function (n) {
    var r = o.call(arguments, 1);
    return _.filter(_.uniq(n), function (n) {
      return _.every(r, function (r) {
        return _.indexOf(r, n) >= 0;
      });
    });
  };
  _.difference = function (n) {
    var r = f.apply(u, o.call(arguments, 1));
    return _.filter(n, function (n) {
      return !_.contains(r, n);
    });
  };
  _.zip = function () {
    var n = o.call(arguments);
    var r = _.max(_.pluck(n, "length"));
    var t = new Array(r);
    for (var e = 0; e < r; e++) t[e] = _.pluck(n, "" + e);
    return t;
  };
  _.object = function (n, r) {
    if (null == n) return {};
    var t = {};
    for (var e = 0, i = n.length; e < i; e++)
      r ? (t[n[e]] = r[e]) : (t[n[e][0]] = n[e][1]);
    return t;
  };
  _.indexOf = function (n, r, t) {
    if (null == n) return -1;
    var e = 0,
      i = n.length;
    if (t) {
      if ("number" != typeof t) {
        e = _.sortedIndex(n, r);
        return n[e] === r ? e : -1;
      }
      e = t < 0 ? Math.max(0, i + t) : t;
    }
    if (x && n.indexOf === x) return n.indexOf(r, t);
    for (; e < i; e++) if (n[e] === r) return e;
    return -1;
  };
  _.lastIndexOf = function (n, r, t) {
    if (null == n) return -1;
    var e = null != t;
    if (w && n.lastIndexOf === w)
      return e ? n.lastIndexOf(r, t) : n.lastIndexOf(r);
    var i = e ? t : n.length;
    while (i--) if (n[i] === r) return i;
    return -1;
  };
  _.range = function (n, r, t) {
    if (arguments.length <= 1) {
      r = n || 0;
      n = 0;
    }
    t = arguments[2] || 1;
    var e = Math.max(Math.ceil((r - n) / t), 0);
    var i = 0;
    var u = new Array(e);
    while (i < e) {
      u[i++] = n;
      n += t;
    }
    return u;
  };
  _.bind = function (n, r) {
    if (n.bind === O && O) return O.apply(n, o.call(arguments, 1));
    var t = o.call(arguments, 2);
    return function () {
      return n.apply(r, t.concat(o.call(arguments)));
    };
  };
  _.partial = function (r) {
    var t = o.call(arguments, 1);
    return function () {
      return r.apply(this || n, t.concat(o.call(arguments)));
    };
  };
  _.bindAll = function (n) {
    var r = o.call(arguments, 1);
    0 === r.length && (r = _.functions(n));
    E(r, function (r) {
      n[r] = _.bind(n[r], n);
    });
    return n;
  };
  _.memoize = function (r, t) {
    var e = {};
    t || (t = _.identity);
    return function () {
      var i = t.apply(this || n, arguments);
      return _.has(e, i) ? e[i] : (e[i] = r.apply(this || n, arguments));
    };
  };
  _.delay = function (n, r) {
    var t = o.call(arguments, 2);
    return setTimeout(function () {
      return n.apply(null, t);
    }, r);
  };
  _.defer = function (n) {
    return _.delay.apply(_, [n, 1].concat(o.call(arguments, 1)));
  };
  _.throttle = function (r, t) {
    var e, i, u, a;
    var l = 0;
    var later = function () {
      l = new Date();
      u = null;
      a = r.apply(e, i);
    };
    return function () {
      var c = new Date();
      var o = t - (c - l);
      e = this || n;
      i = arguments;
      if (o <= 0) {
        clearTimeout(u);
        u = null;
        l = c;
        a = r.apply(e, i);
      } else u || (u = setTimeout(later, o));
      return a;
    };
  };
  _.debounce = function (r, t, e) {
    var i, u;
    return function () {
      var a = this || n,
        l = arguments;
      var later = function () {
        i = null;
        e || (u = r.apply(a, l));
      };
      var c = e && !i;
      clearTimeout(i);
      i = setTimeout(later, t);
      c && (u = r.apply(a, l));
      return u;
    };
  };
  _.once = function (r) {
    var t = false,
      e;
    return function () {
      if (t) return e;
      t = true;
      e = r.apply(this || n, arguments);
      r = null;
      return e;
    };
  };
  _.wrap = function (r, t) {
    return function () {
      var e = [r];
      c.apply(e, arguments);
      return t.apply(this || n, e);
    };
  };
  _.compose = function () {
    var r = arguments;
    return function () {
      var t = arguments;
      for (var e = r.length - 1; e >= 0; e--) t = [r[e].apply(this || n, t)];
      return t[0];
    };
  };
  _.after = function (r, t) {
    return r <= 0
      ? t()
      : function () {
          if (--r < 1) return t.apply(this || n, arguments);
        };
  };
  _.keys =
    A ||
    function (n) {
      if (n !== Object(n)) throw new TypeError("Invalid object");
      var r = [];
      for (var t in n) _.has(n, t) && (r[r.length] = t);
      return r;
    };
  _.values = function (n) {
    var r = [];
    for (var t in n) _.has(n, t) && r.push(n[t]);
    return r;
  };
  _.pairs = function (n) {
    var r = [];
    for (var t in n) _.has(n, t) && r.push([t, n[t]]);
    return r;
  };
  _.invert = function (n) {
    var r = {};
    for (var t in n) _.has(n, t) && (r[n[t]] = t);
    return r;
  };
  _.functions = _.methods = function (n) {
    var r = [];
    for (var t in n) _.isFunction(n[t]) && r.push(t);
    return r.sort();
  };
  _.extend = function (n) {
    E(o.call(arguments, 1), function (r) {
      if (r) for (var t in r) n[t] = r[t];
    });
    return n;
  };
  _.pick = function (n) {
    var r = {};
    var t = f.apply(u, o.call(arguments, 1));
    E(t, function (t) {
      t in n && (r[t] = n[t]);
    });
    return r;
  };
  _.omit = function (n) {
    var r = {};
    var t = f.apply(u, o.call(arguments, 1));
    for (var e in n) _.contains(t, e) || (r[e] = n[e]);
    return r;
  };
  _.defaults = function (n) {
    E(o.call(arguments, 1), function (r) {
      if (r) for (var t in r) null == n[t] && (n[t] = r[t]);
    });
    return n;
  };
  _.clone = function (n) {
    return _.isObject(n) ? (_.isArray(n) ? n.slice() : _.extend({}, n)) : n;
  };
  _.tap = function (n, r) {
    r(n);
    return n;
  };
  var eq = function (n, r, t, e) {
    if (n === r) return 0 !== n || 1 / n == 1 / r;
    if (null == n || null == r) return n === r;
    n instanceof _ && (n = n._wrapped);
    r instanceof _ && (r = r._wrapped);
    var i = s.call(n);
    if (i != s.call(r)) return false;
    switch (i) {
      case "[object String]":
        return n == String(r);
      case "[object Number]":
        return n != +n ? r != +r : 0 == n ? 1 / n == 1 / r : n == +r;
      case "[object Date]":
      case "[object Boolean]":
        return +n == +r;
      case "[object RegExp]":
        return (
          n.source == r.source &&
          n.global == r.global &&
          n.multiline == r.multiline &&
          n.ignoreCase == r.ignoreCase
        );
    }
    if ("object" != typeof n || "object" != typeof r) return false;
    var u = t.length;
    while (u--) if (t[u] == n) return e[u] == r;
    t.push(n);
    e.push(r);
    var a = 0,
      l = true;
    if ("[object Array]" == i) {
      a = n.length;
      l = a == r.length;
      if (l) while (a--) if (!(l = eq(n[a], r[a], t, e))) break;
    } else {
      var c = n.constructor,
        o = r.constructor;
      if (
        c !== o &&
        !(
          _.isFunction(c) &&
          c instanceof c &&
          _.isFunction(o) &&
          o instanceof o
        )
      )
        return false;
      for (var f in n)
        if (_.has(n, f)) {
          a++;
          if (!(l = _.has(r, f) && eq(n[f], r[f], t, e))) break;
        }
      if (l) {
        for (f in r) if (_.has(r, f) && !a--) break;
        l = !a;
      }
    }
    t.pop();
    e.pop();
    return l;
  };
  _.isEqual = function (n, r) {
    return eq(n, r, [], []);
  };
  _.isEmpty = function (n) {
    if (null == n) return true;
    if (_.isArray(n) || _.isString(n)) return 0 === n.length;
    for (var r in n) if (_.has(n, r)) return false;
    return true;
  };
  _.isElement = function (n) {
    return !!(n && 1 === n.nodeType);
  };
  _.isArray =
    j ||
    function (n) {
      return "[object Array]" == s.call(n);
    };
  _.isObject = function (n) {
    return n === Object(n);
  };
  E(
    ["Arguments", "Function", "String", "Number", "Date", "RegExp"],
    function (n) {
      _["is" + n] = function (r) {
        return s.call(r) == "[object " + n + "]";
      };
    }
  );
  _.isArguments(arguments) ||
    (_.isArguments = function (n) {
      return !!(n && _.has(n, "callee"));
    });
  "function" !== typeof /./ &&
    (_.isFunction = function (n) {
      return "function" === typeof n;
    });
  _.isFinite = function (n) {
    return isFinite(n) && !isNaN(parseFloat(n));
  };
  _.isNaN = function (n) {
    return _.isNumber(n) && n != +n;
  };
  _.isBoolean = function (n) {
    return true === n || false === n || "[object Boolean]" == s.call(n);
  };
  _.isNull = function (n) {
    return null === n;
  };
  _.isUndefined = function (n) {
    return void 0 === n;
  };
  _.has = function (n, r) {
    return p.call(n, r);
  };
  _.noConflict = function () {
    t._ = e;
    return this || n;
  };
  _.identity = function (n) {
    return n;
  };
  _.times = function (n, r, t) {
    var e = Array(n);
    for (var i = 0; i < n; i++) e[i] = r.call(t, i);
    return e;
  };
  _.random = function (n, r) {
    if (null == r) {
      r = n;
      n = 0;
    }
    return n + Math.floor(Math.random() * (r - n + 1));
  };
  var F = {
    escape: {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#x27;",
      "/": "&#x2F;",
    },
  };
  F.unescape = _.invert(F.escape);
  var R = {
    escape: new RegExp("[" + _.keys(F.escape).join("") + "]", "g"),
    unescape: new RegExp("(" + _.keys(F.unescape).join("|") + ")", "g"),
  };
  _.each(["escape", "unescape"], function (n) {
    _[n] = function (r) {
      return null == r
        ? ""
        : ("" + r).replace(R[n], function (r) {
            return F[n][r];
          });
    };
  });
  _.result = function (n, r) {
    if (null == n) return null;
    var t = n[r];
    return _.isFunction(t) ? t.call(n) : t;
  };
  _.mixin = function (r) {
    E(_.functions(r), function (t) {
      var e = (_[t] = r[t]);
      _.prototype[t] = function () {
        var r = [(this || n)._wrapped];
        c.apply(r, arguments);
        return result.call(this || n, e.apply(_, r));
      };
    });
  };
  var S = 0;
  _.uniqueId = function (n) {
    var r = ++S + "";
    return n ? n + r : r;
  };
  _.templateSettings = {
    evaluate: /<%([\s\S]+?)%>/g,
    interpolate: /<%=([\s\S]+?)%>/g,
    escape: /<%-([\s\S]+?)%>/g,
  };
  var T = /(.)^/;
  var M = {
    "'": "'",
    "\\": "\\",
    "\r": "r",
    "\n": "n",
    "\t": "t",
    "\u2028": "u2028",
    "\u2029": "u2029",
  };
  var N = /\\|'|\r|\n|\t|\u2028|\u2029/g;
  _.template = function (r, t, e) {
    var i;
    e = _.defaults({}, e, _.templateSettings);
    var u = new RegExp(
      [
        (e.escape || T).source,
        (e.interpolate || T).source,
        (e.evaluate || T).source,
      ].join("|") + "|$",
      "g"
    );
    var a = 0;
    var l = "__p+='";
    r.replace(u, function (n, t, e, i, u) {
      l += r.slice(a, u).replace(N, function (n) {
        return "\\" + M[n];
      });
      t && (l += "'+\n((__t=(" + t + "))==null?'':_.escape(__t))+\n'");
      e && (l += "'+\n((__t=(" + e + "))==null?'':__t)+\n'");
      i && (l += "';\n" + i + "\n__p+='");
      a = u + n.length;
      return n;
    });
    l += "';\n";
    e.variable || (l = "with(obj||{}){\n" + l + "}\n");
    l =
      "var __t,__p='',__j=Array.prototype.join," +
      "print=function(){__p+=__j.call(arguments,'');};\n" +
      l +
      "return __p;\n";
    try {
      i = new Function(e.variable || "obj", "_", l);
    } catch (n) {
      n.source = l;
      throw n;
    }
    if (t) return i(t, _);
    var template = function (r) {
      return i.call(this || n, r, _);
    };
    template.source = "function(" + (e.variable || "obj") + "){\n" + l + "}";
    return template;
  };
  _.chain = function (n) {
    return _(n).chain();
  };
  var result = function (r) {
    return (this || n)._chain ? _(r).chain() : r;
  };
  _.mixin(_);
  E(
    ["pop", "push", "reverse", "shift", "sort", "splice", "unshift"],
    function (r) {
      var t = u[r];
      _.prototype[r] = function () {
        var e = (this || n)._wrapped;
        t.apply(e, arguments);
        ("shift" != r && "splice" != r) || 0 !== e.length || delete e[0];
        return result.call(this || n, e);
      };
    }
  );
  E(["concat", "join", "slice"], function (r) {
    var t = u[r];
    _.prototype[r] = function () {
      return result.call(this || n, t.apply((this || n)._wrapped, arguments));
    };
  });
  _.extend(_.prototype, {
    chain: function () {
      (this || n)._chain = true;
      return this || n;
    },
    value: function () {
      return (this || n)._wrapped;
    },
  });
}.call(r));
var t = r;
const e = r._;
export default t;
export { e as _ };
