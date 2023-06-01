import * as t from "datatables.net-bs5";
import * as n from "datatables.net-buttons";
var a = "default" in t ? t.default : t;
var o = "default" in n ? n.default : n;
var e = {};
(function (t) {
  e = function (n, e) {
    n || (n = window);
    (e && e.fn.dataTable) || (e = a(n, e).$);
    e.fn.dataTable.Buttons || o(n, e);
    return t(e, n, n.document);
  };
})(function (t, n, a, o) {
  var e = t.fn.dataTable;
  t.extend(true, e.Buttons.defaults, {
    dom: {
      container: { className: "dt-buttons btn-group flex-wrap" },
      button: { className: "btn btn-secondary" },
      collection: {
        tag: "div",
        className: "dropdown-menu",
        closeButton: false,
        button: {
          tag: "a",
          className: "dt-button dropdown-item",
          active: "active",
          disabled: "disabled",
        },
      },
      splitWrapper: {
        tag: "div",
        className: "dt-btn-split-wrapper btn-group",
        closeButton: false,
      },
      splitDropdown: {
        tag: "button",
        text: "",
        className:
          "btn btn-secondary dt-btn-split-drop dropdown-toggle dropdown-toggle-split",
        closeButton: false,
        align: "split-left",
        splitAlignClass: "dt-button-split-left",
      },
      splitDropdownButton: {
        tag: "button",
        className: "dt-btn-split-drop-button btn btn-secondary",
        closeButton: false,
      },
    },
    buttonCreated: function (n, a) {
      return n.buttons ? t('<div class="btn-group"/>').append(a) : a;
    },
  });
  e.ext.buttons.collection.className += " dropdown-toggle";
  e.ext.buttons.collection.rightAlignClassName = "dropdown-menu-right";
  return e.Buttons;
});
var s = e;
export { s as default };
