import * as t from "datatables.net";
import * as e from "datatables.net-buttons";

var o = "default" in t ? t.default : t;
var n = "default" in e ? e.default : e;
var a =
  "undefined" !== typeof globalThis
    ? globalThis
    : "undefined" !== typeof self
    ? self
    : global;
var r = {};
(function (t) {
  r = function (e, a) {
    e || (e = window);
    (a && a.fn.dataTable) || (a = o(e, a).$);
    a.fn.dataTable.Buttons || n(e, a);
    return t(a, e, e.document);
  };
})(function (t, e, o, n) {
  var r = t.fn.dataTable;
  var i = o.createElement("a");
  /**
   * Clone link and style tags, taking into account the need to change the source
   * path.
   *
   * @param  {node}     el Element to convert
   */ var _styleToAbs = function (e) {
    var o = t(e).clone()[0];
    "link" === o.nodeName.toLowerCase() && (o.href = _relToAbs(o.href));
    return o.outerHTML;
  };
  /**
   * Convert a URL from a relative to an absolute address so it will work
   * correctly in the popup window which has no base URL.
   *
   * @param  {string} href URL
   */ var _relToAbs = function (t) {
    i.href = t;
    var e = i.host;
    -1 === e.indexOf("/") && 0 !== i.pathname.indexOf("/") && (e += "/");
    return i.protocol + "//" + e + i.pathname + i.search;
  };
  r.ext.buttons.print = {
    className: "buttons-print",
    text: function (t) {
      return t.i18n("buttons.print", "Print");
    },
    action: function (o, r, i, s) {
      var u = r.buttons.exportData(
        t.extend({ decodeEntities: false }, s.exportOptions)
      );
      var l = r.buttons.exportInfo(s);
      var d = r
        .columns(s.exportOptions.columns)
        .flatten()
        .map(function (t) {
          return r.settings()[0].aoColumns[r.column(t).index()].sClass;
        })
        .toArray();
      var addRow = function (t, e) {
        var o = "<tr>";
        for (var a = 0, r = t.length; a < r; a++) {
          var i = null === t[a] || t[a] === n ? "" : t[a];
          var s = d[a] ? 'class="' + d[a] + '"' : "";
          o += "<" + e + " " + s + ">" + i + "</" + e + ">";
        }
        return o + "</tr>";
      };
      var f = '<table class="' + r.table().node().className + '">';
      s.header && (f += "<thead>" + addRow(u.header, "th") + "</thead>");
      f += "<tbody>";
      for (var c = 0, m = u.body.length; c < m; c++)
        f += addRow(u.body[c], "td");
      f += "</tbody>";
      s.footer &&
        u.footer &&
        (f += "<tfoot>" + addRow(u.footer, "th") + "</tfoot>");
      f += "</table>";
      var b = e.open("", "");
      if (b) {
        b.document.close();
        var p = "<title>" + l.title + "</title>";
        t("style, link").each(function () {
          p += _styleToAbs(this || a);
        });
        try {
          b.document.head.innerHTML = p;
        } catch (o) {
          t(b.document.head).html(p);
        }
        b.document.body.innerHTML =
          "<h1>" +
          l.title +
          "</h1><div>" +
          (l.messageTop || "") +
          "</div>" +
          f +
          "<div>" +
          (l.messageBottom || "") +
          "</div>";
        t(b.document.body).addClass("dt-print-view");
        t("img", b.document.body).each(function (t, e) {
          e.setAttribute("src", _relToAbs(e.getAttribute("src")));
        });
        s.customize && s.customize(b, s, r);
        var autoPrint = function () {
          if (s.autoPrint) {
            b.print();
            b.close();
          }
        };
        navigator.userAgent.match(/Trident\/\d.\d/)
          ? autoPrint()
          : b.setTimeout(autoPrint, 1e3);
      } else
        r.buttons.info(
          r.i18n("buttons.printErrorTitle", "Unable to open print view"),
          r.i18n(
            "buttons.printErrorMsg",
            "Please allow popups in your browser for this site to be able to view the print view."
          ),
          5e3
        );
    },
    title: "*",
    messageTop: "*",
    messageBottom: "*",
    exportOptions: {},
    header: true,
    footer: false,
    autoPrint: true,
    customize: null,
  };
  return r.Buttons;
});
var i = r;
export { i as default };
