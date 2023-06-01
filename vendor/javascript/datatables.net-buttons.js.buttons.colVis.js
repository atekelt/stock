import * as n from "datatables.net";
import * as t from "datatables.net-buttons";
var e = "default" in n ? n.default : n;
var o = "default" in t ? t.default : t;
var l =
  "undefined" !== typeof globalThis
    ? globalThis
    : "undefined" !== typeof self
    ? self
    : global;
var i = {};
(function (n) {
  i = function (t, l) {
    t || (t = window);
    (l && l.fn.dataTable) || (l = e(t, l).$);
    l.fn.dataTable.Buttons || o(t, l);
    return n(l, t, t.document);
  };
})(function (n, t, e, o) {
  var i = n.fn.dataTable;
  n.extend(i.ext.buttons, {
    colvis: function (n, t) {
      var e = null;
      var o = {
        extend: "collection",
        init: function (n, t) {
          e = t;
        },
        text: function (n) {
          return n.i18n("buttons.colvis", "Column visibility");
        },
        className: "buttons-colvis",
        closeButton: false,
        buttons: [
          {
            extend: "columnsToggle",
            columns: t.columns,
            columnText: t.columnText,
          },
        ],
      };
      n.on("column-reorder.dt" + t.namespace, function (o, l, i) {
        n.button(null, n.button(null, e).node()).collectionRebuild([
          {
            extend: "columnsToggle",
            columns: t.columns,
            columnText: t.columnText,
          },
        ]);
      });
      return o;
    },
    columnsToggle: function (n, t) {
      var e = n
        .columns(t.columns)
        .indexes()
        .map(function (n) {
          return {
            extend: "columnToggle",
            columns: n,
            columnText: t.columnText,
          };
        })
        .toArray();
      return e;
    },
    columnToggle: function (n, t) {
      return {
        extend: "columnVisibility",
        columns: t.columns,
        columnText: t.columnText,
      };
    },
    columnsVisibility: function (n, t) {
      var e = n
        .columns(t.columns)
        .indexes()
        .map(function (n) {
          return {
            extend: "columnVisibility",
            columns: n,
            visibility: t.visibility,
            columnText: t.columnText,
          };
        })
        .toArray();
      return e;
    },
    columnVisibility: {
      columns: o,
      text: function (n, t, e) {
        return e._columnText(n, e);
      },
      className: "buttons-columnVisibility",
      action: function (n, t, e, l) {
        var i = t.columns(l.columns);
        var u = i.visible();
        i.visible(l.visibility !== o ? l.visibility : !(!!u.length && u[0]));
      },
      init: function (n, t, e) {
        var o = this || l;
        t.attr("data-cv-idx", e.columns);
        n.on("column-visibility.dt" + e.namespace, function (t, l) {
          l.bDestroying ||
            l.nTable != n.settings()[0].nTable ||
            o.active(n.column(e.columns).visible());
        }).on("column-reorder.dt" + e.namespace, function (t, l, i) {
          if (!e.destroying && 1 === n.columns(e.columns).count()) {
            o.text(e._columnText(n, e));
            o.active(n.column(e.columns).visible());
          }
        });
        this.active(n.column(e.columns).visible());
      },
      destroy: function (n, t, e) {
        n.off("column-visibility.dt" + e.namespace).off(
          "column-reorder.dt" + e.namespace
        );
      },
      _columnText: function (n, t) {
        var e = n.column(t.columns).index();
        var o = n.settings()[0].aoColumns[e].sTitle;
        o || (o = n.column(e).header().innerHTML);
        o = o
          .replace(/\n/g, " ")
          .replace(/<br\s*\/?>/gi, " ")
          .replace(/<select(.*?)<\/select>/g, "")
          .replace(/<!\-\-.*?\-\->/g, "")
          .replace(/<.*?>/g, "")
          .replace(/^\s+|\s+$/g, "");
        return t.columnText ? t.columnText(n, e, o) : o;
      },
    },
    colvisRestore: {
      className: "buttons-colvisRestore",
      text: function (n) {
        return n.i18n("buttons.colvisRestore", "Restore visibility");
      },
      init: function (n, t, e) {
        e._visOriginal = n
          .columns()
          .indexes()
          .map(function (t) {
            return n.column(t).visible();
          })
          .toArray();
      },
      action: function (n, t, e, o) {
        t.columns().every(function (n) {
          var e =
            t.colReorder && t.colReorder.transpose
              ? t.colReorder.transpose(n, "toOriginal")
              : n;
          this.visible(o._visOriginal[e]);
        });
      },
    },
    colvisGroup: {
      className: "buttons-colvisGroup",
      action: function (n, t, e, o) {
        t.columns(o.show).visible(true, false);
        t.columns(o.hide).visible(false, false);
        t.columns.adjust();
      },
      show: [],
      hide: [],
    },
  });
  return i.Buttons;
});
var u = i;
export { u as default };
