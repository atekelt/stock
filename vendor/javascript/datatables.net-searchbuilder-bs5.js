import * as t from "datatables.net-bs5";
import * as e from "datatables.net-searchbuilder";
var a = "default" in t ? t.default : t;
var l = "default" in e ? e.default : e;
var n = {};
(function (t) {
  n = function (e, n) {
    e || (e = window);
    (n && n.fn.dataTable) || (n = a(e, n).$);
    n.fn.dataTable.searchBuilder || l(e, n);
    return t(n);
  };
})(function (t) {
  var e = t.fn.dataTable;
  t.extend(true, e.SearchBuilder.classes, {
    clearAll: "btn btn-light dtsb-clearAll",
  });
  t.extend(true, e.Group.classes, {
    add: "btn btn-light dtsb-add",
    clearGroup: "btn btn-light dtsb-clearGroup",
    logic: "btn btn-light dtsb-logic",
  });
  t.extend(true, e.Criteria.classes, {
    condition: "form-select dtsb-condition",
    data: "dtsb-data form-select",
    delete: "btn btn-light dtsb-delete",
    input: "form-control dtsb-input",
    left: "btn btn-light dtsb-left",
    right: "btn btn-light dtsb-right",
    select: "form-select",
    value: "dtsb-value",
  });
  return e.searchPanes;
});
var r = n;
export { r as default };
