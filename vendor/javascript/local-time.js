var r =
  "undefined" !== typeof globalThis
    ? globalThis
    : "undefined" !== typeof self
    ? self
    : global;
var s = {};
(function () {
  var u = this || r;
  (function () {
    (function () {
      var s = [].slice;
      (this || r).LocalTime = {
        config: {},
        run: function () {
          return this.getController().processElements();
        },
        process: function () {
          var r, u, c, l;
          for (
            u = 1 <= arguments.length ? s.call(arguments, 0) : [],
              c = 0,
              l = u.length;
            c < l;
            c++
          )
            (r = u[c]), this.getController().processElement(r);
          return u.length;
        },
        getController: function () {
          return null != (this || r).controller
            ? (this || r).controller
            : ((this || r).controller = new c.Controller());
        },
      };
    }.call(this || r));
  }.call(u));
  var c = u.LocalTime;
  (function () {
    (function () {
      c.config.i18n = {
        en: {
          date: {
            dayNames: [
              "Sunday",
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
            abbrDayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            monthNames: [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ],
            abbrMonthNames: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ],
            yesterday: "yesterday",
            today: "today",
            tomorrow: "tomorrow",
            on: "on {date}",
            formats: { default: "%b %e, %Y", thisYear: "%b %e" },
          },
          time: {
            am: "am",
            pm: "pm",
            singular: "a {time}",
            singularAn: "an {time}",
            elapsed: "{time} ago",
            second: "second",
            seconds: "seconds",
            minute: "minute",
            minutes: "minutes",
            hour: "hour",
            hours: "hours",
            formats: { default: "%l:%M%P" },
          },
          datetime: {
            at: "{date} at {time}",
            formats: { default: "%B %e, %Y at %l:%M%P %Z" },
          },
        },
      };
    }.call(this || r),
      function () {
        (c.config.locale = "en"), (c.config.defaultLocale = "en");
      }.call(this || r),
      function () {
        c.config.timerInterval = 6e4;
      }.call(this || r),
      function () {
        var r, s, u;
        (u = !isNaN(Date.parse("2011-01-01T12:00:00-05:00"))),
          (c.parseDate = function (r) {
            return (r = r.toString()), u || (r = s(r)), new Date(Date.parse(r));
          }),
          (r =
            /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(Z|[-+]?[\d:]+)$/),
          (s = function (s) {
            var u, c, l, d, h, f, m, p, y;
            if ((l = s.match(r)))
              return (
                l[0],
                (p = l[1]),
                (h = l[2]),
                (u = l[3]),
                (c = l[4]),
                (d = l[5]),
                (m = l[6]),
                (y = l[7]),
                "Z" !== y && (f = y.replace(":", "")),
                p +
                  "/" +
                  h +
                  "/" +
                  u +
                  " " +
                  c +
                  ":" +
                  d +
                  ":" +
                  m +
                  " GMT" +
                  [f]
              );
          });
      }.call(this || r),
      function () {
        c.elementMatchesSelector = (function () {
          var r, s, u, c, l, d;
          return (
            (r = document.documentElement),
            (s =
              null !=
              (u =
                null !=
                (c =
                  null != (l = null != (d = r.matches) ? d : r.matchesSelector)
                    ? l
                    : r.webkitMatchesSelector)
                  ? c
                  : r.mozMatchesSelector)
                ? u
                : r.msMatchesSelector),
            function (r, u) {
              if ((null != r ? r.nodeType : void 0) === Node.ELEMENT_NODE)
                return s.call(r, u);
            }
          );
        })();
      }.call(this || r),
      function () {
        var r, s, u;
        (r = c.config),
          (u = r.i18n),
          (c.getI18nValue = function (l, d) {
            var h, f;
            return (
              null == l && (l = ""),
              (h = (null != d ? d : { locale: r.locale }).locale),
              (f = s(u[h], l)),
              null != f
                ? f
                : h !== r.defaultLocale
                ? c.getI18nValue(l, { locale: r.defaultLocale })
                : void 0
            );
          }),
          (c.translate = function (r, s, u) {
            var l, d, h;
            null == s && (s = {}), (h = c.getI18nValue(r, u));
            for (l in s) (d = s[l]), (h = h.replace("{" + l + "}", d));
            return h;
          }),
          (s = function (r, s) {
            var u, c, l, d, h;
            for (h = r, d = s.split("."), u = 0, l = d.length; u < l; u++) {
              if (((c = d[u]), null == h[c])) return null;
              h = h[c];
            }
            return h;
          });
      }.call(this || r),
      function () {
        var r, s, u, l, d;
        (r = c.getI18nValue),
          (d = c.translate),
          (c.strftime = l =
            function (c, h) {
              var f, m, p, y, g, v, b;
              return (
                (m = c.getDay()),
                (f = c.getDate()),
                (g = c.getMonth()),
                (b = c.getFullYear()),
                (p = c.getHours()),
                (y = c.getMinutes()),
                (v = c.getSeconds()),
                h.replace(/%(-?)([%aAbBcdeHIlmMpPSwyYZ])/g, function (h, S, M) {
                  switch (M) {
                    case "%":
                      return "%";
                    case "a":
                      return r("date.abbrDayNames")[m];
                    case "A":
                      return r("date.dayNames")[m];
                    case "b":
                      return r("date.abbrMonthNames")[g];
                    case "B":
                      return r("date.monthNames")[g];
                    case "c":
                      return c.toString();
                    case "d":
                      return s(f, S);
                    case "e":
                      return f;
                    case "H":
                      return s(p, S);
                    case "I":
                      return s(l(c, "%l"), S);
                    case "l":
                      return 0 === p || 12 === p ? 12 : (p + 12) % 12;
                    case "m":
                      return s(g + 1, S);
                    case "M":
                      return s(y, S);
                    case "p":
                      return d("time." + (p > 11 ? "pm" : "am")).toUpperCase();
                    case "P":
                      return d("time." + (p > 11 ? "pm" : "am"));
                    case "S":
                      return s(v, S);
                    case "w":
                      return m;
                    case "y":
                      return s(b % 100, S);
                    case "Y":
                      return b;
                    case "Z":
                      return u(c);
                  }
                })
              );
            }),
          (s = function (r, s) {
            switch (s) {
              case "-":
                return r;
              default:
                return ("0" + r).slice(-2);
            }
          }),
          (u = function (r) {
            var s, u, c, l, d;
            return (
              (d = r.toString()),
              (s = null != (u = d.match(/\(([\w\s]+)\)$/)) ? u[1] : void 0)
                ? /\s/.test(s)
                  ? s.match(/\b(\w)/g).join("")
                  : s
                : (s =
                    null != (c = d.match(/(\w{3,4})\s\d{4}$/))
                      ? c[1]
                      : void 0) ||
                  (s = null != (l = d.match(/(UTC[\+\-]\d+)/)) ? l[1] : void 0)
                ? s
                : ""
            );
          });
      }.call(this || r),
      function () {
        c.CalendarDate = (function () {
          function t(s, u, c) {
            ((this || r).date = new Date(Date.UTC(s, u - 1))),
              (this || r).date.setUTCDate(c),
              ((this || r).year = (this || r).date.getUTCFullYear()),
              ((this || r).month = (this || r).date.getUTCMonth() + 1),
              ((this || r).day = (this || r).date.getUTCDate()),
              ((this || r).value = (this || r).date.getTime());
          }
          return (
            (t.fromDate = function (s) {
              return new (this || r)(
                s.getFullYear(),
                s.getMonth() + 1,
                s.getDate()
              );
            }),
            (t.today = function () {
              return this.fromDate(new Date());
            }),
            (t.prototype.equals = function (s) {
              return (null != s ? s.value : void 0) === (this || r).value;
            }),
            (t.prototype.is = function (r) {
              return this.equals(r);
            }),
            (t.prototype.isToday = function () {
              return this.is((this || r).constructor.today());
            }),
            (t.prototype.occursOnSameYearAs = function (s) {
              return (this || r).year === (null != s ? s.year : void 0);
            }),
            (t.prototype.occursThisYear = function () {
              return this.occursOnSameYearAs((this || r).constructor.today());
            }),
            (t.prototype.daysSince = function (s) {
              if (s) return ((this || r).date - s.date) / 864e5;
            }),
            (t.prototype.daysPassed = function () {
              return (this || r).constructor.today().daysSince(this || r);
            }),
            t
          );
        })();
      }.call(this || r),
      function () {
        var s, u, l;
        (u = c.strftime),
          (l = c.translate),
          (s = c.getI18nValue),
          (c.RelativeTime = (function () {
            function a(s) {
              ((this || r).date = s),
                ((this || r).calendarDate = c.CalendarDate.fromDate(
                  (this || r).date
                ));
            }
            return (
              (a.prototype.toString = function () {
                var r, s;
                return (s = this.toTimeElapsedString())
                  ? l("time.elapsed", { time: s })
                  : (r = this.toWeekdayString())
                  ? ((s = this.toTimeString()),
                    l("datetime.at", { date: r, time: s }))
                  : l("date.on", { date: this.toDateString() });
              }),
              (a.prototype.toTimeOrDateString = function () {
                return (this || r).calendarDate.isToday()
                  ? this.toTimeString()
                  : this.toDateString();
              }),
              (a.prototype.toTimeElapsedString = function () {
                var s, u, c, d, h;
                return (
                  (c = new Date().getTime() - (this || r).date.getTime()),
                  (d = Math.round(c / 1e3)),
                  (u = Math.round(d / 60)),
                  (s = Math.round(u / 60)),
                  c < 0
                    ? null
                    : d < 10
                    ? ((h = l("time.second")), l("time.singular", { time: h }))
                    : d < 45
                    ? d + " " + l("time.seconds")
                    : d < 90
                    ? ((h = l("time.minute")), l("time.singular", { time: h }))
                    : u < 45
                    ? u + " " + l("time.minutes")
                    : u < 90
                    ? ((h = l("time.hour")), l("time.singularAn", { time: h }))
                    : s < 24
                    ? s + " " + l("time.hours")
                    : ""
                );
              }),
              (a.prototype.toWeekdayString = function () {
                switch ((this || r).calendarDate.daysPassed()) {
                  case 0:
                    return l("date.today");
                  case 1:
                    return l("date.yesterday");
                  case -1:
                    return l("date.tomorrow");
                  case 2:
                  case 3:
                  case 4:
                  case 5:
                  case 6:
                    return u((this || r).date, "%A");
                  default:
                    return "";
                }
              }),
              (a.prototype.toDateString = function () {
                var c;
                return (
                  (c = s(
                    (this || r).calendarDate.occursThisYear()
                      ? "date.formats.thisYear"
                      : "date.formats.default"
                  )),
                  u((this || r).date, c)
                );
              }),
              (a.prototype.toTimeString = function () {
                return u((this || r).date, s("time.formats.default"));
              }),
              a
            );
          })());
      }.call(this || r),
      function () {
        var s,
          n = function (r, s) {
            return function () {
              return r.apply(s, arguments);
            };
          };
        (s = c.elementMatchesSelector),
          (c.PageObserver = (function () {
            function e(s, u) {
              ((this || r).selector = s),
                ((this || r).callback = u),
                ((this || r).processInsertion = n(
                  (this || r).processInsertion,
                  this || r
                )),
                ((this || r).processMutations = n(
                  (this || r).processMutations,
                  this || r
                ));
            }
            return (
              (e.prototype.start = function () {
                if (!(this || r).started)
                  return (
                    this.observeWithMutationObserver() ||
                      this.observeWithMutationEvent(),
                    ((this || r).started = !0)
                  );
              }),
              (e.prototype.observeWithMutationObserver = function () {
                var s;
                if (
                  "undefined" != typeof MutationObserver &&
                  null !== MutationObserver
                )
                  return (
                    (s = new MutationObserver((this || r).processMutations)),
                    s.observe(document.documentElement, {
                      childList: !0,
                      subtree: !0,
                    }),
                    !0
                  );
              }),
              (e.prototype.observeWithMutationEvent = function () {
                return (
                  addEventListener(
                    "DOMNodeInserted",
                    (this || r).processInsertion,
                    !1
                  ),
                  !0
                );
              }),
              (e.prototype.findSignificantElements = function (u) {
                var c;
                return (
                  (c = []),
                  (null != u ? u.nodeType : void 0) === Node.ELEMENT_NODE &&
                    (s(u, (this || r).selector) && c.push(u),
                    c.push.apply(c, u.querySelectorAll((this || r).selector))),
                  c
                );
              }),
              (e.prototype.processMutations = function (r) {
                var s, u, c, l, d, h, f, m;
                for (s = [], u = 0, l = r.length; u < l; u++)
                  switch (((h = r[u]), h.type)) {
                    case "childList":
                      for (m = h.addedNodes, c = 0, d = m.length; c < d; c++)
                        (f = m[c]),
                          s.push.apply(s, this.findSignificantElements(f));
                  }
                return this.notify(s);
              }),
              (e.prototype.processInsertion = function (r) {
                var s;
                return (
                  (s = this.findSignificantElements(r.target)), this.notify(s)
                );
              }),
              (e.prototype.notify = function (s) {
                if (null != s ? s.length : void 0)
                  return "function" == typeof (this || r).callback
                    ? this.callback(s)
                    : void 0;
              }),
              e
            );
          })());
      }.call(this || r),
      function () {
        var s,
          u,
          l,
          d,
          i = function (r, s) {
            return function () {
              return r.apply(s, arguments);
            };
          };
        (l = c.parseDate),
          (d = c.strftime),
          (u = c.getI18nValue),
          (s = c.config),
          (c.Controller = (function () {
            function o() {
              ((this || r).processElements = i(
                (this || r).processElements,
                this || r
              )),
                ((this || r).pageObserver = new c.PageObserver(
                  h,
                  (this || r).processElements
                ));
            }
            var h, f, m;
            return (
              (h = "time[data-local]:not([data-localized])"),
              (o.prototype.start = function () {
                if (!(this || r).started)
                  return (
                    this.processElements(),
                    this.startTimer(),
                    (this || r).pageObserver.start(),
                    ((this || r).started = !0)
                  );
              }),
              (o.prototype.startTimer = function () {
                var u;
                if ((u = s.timerInterval))
                  return null != (this || r).timer
                    ? (this || r).timer
                    : ((this || r).timer = setInterval(
                        (this || r).processElements,
                        u
                      ));
              }),
              (o.prototype.processElements = function (r) {
                var s, u, c;
                for (
                  null == r && (r = document.querySelectorAll(h)),
                    u = 0,
                    c = r.length;
                  u < c;
                  u++
                )
                  (s = r[u]), this.processElement(s);
                return r.length;
              }),
              (o.prototype.processElement = function (r) {
                var s, c, h, p, y, g;
                if (
                  ((c = r.getAttribute("datetime")),
                  (h = r.getAttribute("data-format")),
                  (p = r.getAttribute("data-local")),
                  (y = l(c)),
                  !isNaN(y))
                )
                  return (
                    r.hasAttribute("title") ||
                      ((g = d(y, u("datetime.formats.default"))),
                      r.setAttribute("title", g)),
                    (r.textContent = s =
                      (function () {
                        switch (p) {
                          case "time":
                            return f(r), d(y, h);
                          case "date":
                            return f(r), m(y).toDateString();
                          case "time-ago":
                            return m(y).toString();
                          case "time-or-date":
                            return m(y).toTimeOrDateString();
                          case "weekday":
                            return m(y).toWeekdayString();
                          case "weekday-or-date":
                            return (
                              m(y).toWeekdayString() || m(y).toDateString()
                            );
                        }
                      })()),
                    r.hasAttribute("aria-label")
                      ? void 0
                      : r.setAttribute("aria-label", s)
                  );
              }),
              (f = function (r) {
                return r.setAttribute("data-localized", "");
              }),
              (m = function (r) {
                return new c.RelativeTime(r);
              }),
              o
            );
          })());
      }.call(this || r),
      function () {
        var r, s, u, l;
        (l = !1),
          (r = function () {
            return document.attachEvent
              ? "complete" === document.readyState
              : "loading" !== document.readyState;
          }),
          (s = function (r) {
            var s;
            return null !=
              (s =
                "function" == typeof requestAnimationFrame
                  ? requestAnimationFrame(r)
                  : void 0)
              ? s
              : setTimeout(r, 17);
          }),
          (u = function () {
            var r;
            return (r = c.getController()), r.start();
          }),
          (c.start = function () {
            if (!l)
              return (
                (l = !0),
                ("undefined" != typeof MutationObserver &&
                  null !== MutationObserver) ||
                r()
                  ? u()
                  : s(u)
              );
          }),
          window.LocalTime === c && c.start();
      }.call(this || r));
  }.call(this || r),
    !!s && (s = c));
}.call(s));
var u = s;
export default u;
