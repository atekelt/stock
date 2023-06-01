import * as a from "datatables.net";
var e = "default" in a ? a.default : a;
var t = {};
(function (a) {
  t = function (t, r) {
    t || (t = window);
    (r && r.fn.dataTable) || (r = e(t, r).$);
    return a(r, t, t.document);
  };
})(function (a, e, t, r) {
  var s = a.fn.dataTable;
  a.extend(true, s.defaults, {
    dom: "<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'f>><'row'<'col-sm-12'tr>><'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
    renderer: "bootstrap",
  });
  a.extend(s.ext.classes, {
    sWrapper: "dataTables_wrapper dt-bootstrap5",
    sFilterInput: "form-control form-control-sm",
    sLengthSelect: "form-select form-select-sm",
    sProcessing: "dataTables_processing card",
    sPageButton: "paginate_button page-item",
  });
  s.ext.renderer.pageButton.bootstrap = function (e, n, o, i, l, d) {
    var c = new s.Api(e);
    var p = e.oClasses;
    var f = e.oLanguage.oPaginate;
    var u = e.oLanguage.oAria.paginate || {};
    var b,
      g,
      m = 0;
    var attach = function (t, r) {
      var s, n, i, v;
      var clickHandler = function (e) {
        e.preventDefault();
        a(e.currentTarget).hasClass("disabled") ||
          c.page() == e.data.action ||
          c.page(e.data.action).draw("page");
      };
      for (s = 0, n = r.length; s < n; s++) {
        v = r[s];
        if (Array.isArray(v)) attach(t, v);
        else {
          b = "";
          g = "";
          switch (v) {
            case "ellipsis":
              b = "&#x2026;";
              g = "disabled";
              break;
            case "first":
              b = f.sFirst;
              g = v + (l > 0 ? "" : " disabled");
              break;
            case "previous":
              b = f.sPrevious;
              g = v + (l > 0 ? "" : " disabled");
              break;
            case "next":
              b = f.sNext;
              g = v + (l < d - 1 ? "" : " disabled");
              break;
            case "last":
              b = f.sLast;
              g = v + (l < d - 1 ? "" : " disabled");
              break;
            default:
              b = v + 1;
              g = l === v ? "active" : "";
              break;
          }
          if (b) {
            i = a("<li>", {
              class: p.sPageButton + " " + g,
              id:
                0 === o && "string" === typeof v ? e.sTableId + "_" + v : null,
            })
              .append(
                a("<a>", {
                  href: "#",
                  "aria-controls": e.sTableId,
                  "aria-label": u[v],
                  "data-dt-idx": m,
                  tabindex: e.iTabIndex,
                  class: "page-link",
                }).html(b)
              )
              .appendTo(t);
            e.oApi._fnBindAction(i, { action: v }, clickHandler);
            m++;
          }
        }
      }
    };
    var v;
    try {
      v = a(n).find(t.activeElement).data("dt-idx");
    } catch (a) {}
    attach(a(n).empty().html('<ul class="pagination"/>').children("ul"), i);
    v !== r &&
      a(n)
        .find("[data-dt-idx=" + v + "]")
        .trigger("focus");
  };
  return s;
});
var r = t;
export { r as default };
