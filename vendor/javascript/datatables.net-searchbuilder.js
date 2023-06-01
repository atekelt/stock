import * as t from "datatables.net";
var i = "default" in t ? t.default : t;
var e =
  "undefined" !== typeof globalThis
    ? globalThis
    : "undefined" !== typeof self
    ? self
    : global;
var n = {};
(function () {
  var t;
  var r;
  var s = window.moment;
  var a = window.luxon;
  /**
   * Sets the value of jQuery for use in the file
   *
   * @param jq the instance of jQuery to be set
   */ function setJQuery$2(i) {
    t = i;
    r = i.fn.dataTable;
  }
  var o = (function () {
    function Criteria(i, n, s, a, o) {
      var d = this || e;
      void 0 === a && (a = 0);
      void 0 === o && (o = 1);
      if (!r || !r.versionCheck || !r.versionCheck("1.10.0"))
        throw new Error("SearchPane requires DataTables 1.10 or newer");
      (this || e).classes = t.extend(true, {}, Criteria.classes);
      (this || e).c = t.extend(
        true,
        {},
        Criteria.defaults,
        t.fn.dataTable.ext.searchBuilder,
        n
      );
      var l = (this || e).c.i18n;
      (this || e).s = {
        condition: void 0,
        conditions: {},
        data: void 0,
        dataIdx: -1,
        dataPoints: [],
        dateFormat: false,
        depth: o,
        dt: i,
        filled: false,
        index: a,
        origData: void 0,
        topGroup: s,
        type: "",
        value: [],
      };
      (this || e).dom = {
        buttons: t("<div/>").addClass((this || e).classes.buttonContainer),
        condition: t("<select disabled/>")
          .addClass((this || e).classes.condition)
          .addClass((this || e).classes.dropDown)
          .addClass((this || e).classes.italic)
          .attr("autocomplete", "hacking"),
        conditionTitle: t('<option value="" disabled selected hidden/>').text(
          (this || e).s.dt.i18n("searchBuilder.condition", l.condition)
        ),
        container: t("<div/>").addClass((this || e).classes.container),
        data: t("<select/>")
          .addClass((this || e).classes.data)
          .addClass((this || e).classes.dropDown)
          .addClass((this || e).classes.italic),
        dataTitle: t('<option value="" disabled selected hidden/>').text(
          (this || e).s.dt.i18n("searchBuilder.data", l.data)
        ),
        defaultValue: t("<select disabled/>")
          .addClass((this || e).classes.value)
          .addClass((this || e).classes.dropDown)
          .addClass((this || e).classes.select),
        delete: t("<button/>")
          .html((this || e).s.dt.i18n("searchBuilder.delete", l.delete))
          .addClass((this || e).classes.delete)
          .addClass((this || e).classes.button)
          .attr(
            "title",
            (this || e).s.dt.i18n("searchBuilder.deleteTitle", l.deleteTitle)
          )
          .attr("type", "button"),
        left: t("<button/>")
          .text((this || e).s.dt.i18n("searchBuilder.left", l.left))
          .addClass((this || e).classes.left)
          .addClass((this || e).classes.button)
          .attr(
            "title",
            (this || e).s.dt.i18n("searchBuilder.leftTitle", l.leftTitle)
          )
          .attr("type", "button"),
        right: t("<button/>")
          .text((this || e).s.dt.i18n("searchBuilder.right", l.right))
          .addClass((this || e).classes.right)
          .addClass((this || e).classes.button)
          .attr(
            "title",
            (this || e).s.dt.i18n("searchBuilder.rightTitle", l.rightTitle)
          )
          .attr("type", "button"),
        value: [
          t("<select disabled/>")
            .addClass((this || e).classes.value)
            .addClass((this || e).classes.dropDown)
            .addClass((this || e).classes.italic)
            .addClass((this || e).classes.select),
        ],
        valueTitle: t('<option value="--valueTitle--" selected/>').text(
          (this || e).s.dt.i18n("searchBuilder.value", l.value)
        ),
      };
      if ((this || e).c.greyscale) {
        (this || e).dom.data.addClass((this || e).classes.greyscale);
        (this || e).dom.condition.addClass((this || e).classes.greyscale);
        (this || e).dom.defaultValue.addClass((this || e).classes.greyscale);
        for (var u = 0, c = (this || e).dom.value; u < c.length; u++) {
          var h = c[u];
          h.addClass((this || e).classes.greyscale);
        }
      }
      (this || e).s.dt.on("draw.dtsb", function () {
        d._adjustCriteria();
      });
      (this || e).s.dt.on("buttons-action.dtsb", function () {
        d._adjustCriteria();
      });
      t(window).on(
        "resize.dtsb",
        r.util.throttle(function () {
          d._adjustCriteria();
        })
      );
      this._buildCriteria();
      return this || e;
    }
    Criteria.prototype.updateArrows = function (t, i) {
      void 0 === t && (t = false);
      void 0 === i && (i = true);
      (this || e).dom.container.children().detach();
      (this || e).dom.container
        .append((this || e).dom.data)
        .append((this || e).dom.condition)
        .append((this || e).dom.value[0]);
      this.setListeners();
      void 0 !== (this || e).dom.value[0] &&
        (this || e).dom.value[0].trigger("dtsb-inserted");
      for (var n = 1; n < (this || e).dom.value.length; n++) {
        (this || e).dom.container.append((this || e).dom.value[n]);
        (this || e).dom.value[n].trigger("dtsb-inserted");
      }
      (this || e).s.depth > 1 &&
        (this || e).dom.buttons.append((this || e).dom.left);
      (false === (this || e).c.depthLimit ||
        (this || e).s.depth < (this || e).c.depthLimit) &&
      t
        ? (this || e).dom.buttons.append((this || e).dom.right)
        : (this || e).dom.right.remove();
      (this || e).dom.buttons.append((this || e).dom.delete);
      (this || e).dom.container.append((this || e).dom.buttons);
      i && this._adjustCriteria();
    };
    Criteria.prototype.destroy = function () {
      (this || e).dom.data.off(".dtsb");
      (this || e).dom.condition.off(".dtsb");
      (this || e).dom.delete.off(".dtsb");
      for (var t = 0, i = (this || e).dom.value; t < i.length; t++) {
        var n = i[t];
        n.off(".dtsb");
      }
      (this || e).dom.container.remove();
    };
    /**
     * Passes in the data for the row and compares it against this single criteria
     *
     * @param rowData The data for the row to be compared
     * @returns boolean Whether the criteria has passed
     */ Criteria.prototype.search = function (t, i) {
      var n = (this || e).s.conditions[(this || e).s.condition];
      if (void 0 !== (this || e).s.condition && void 0 !== n) {
        var r = t[(this || e).s.dataIdx];
        if (
          (this || e).s.type.includes("num") &&
          ("" !== (this || e).s.dt.settings()[0].oLanguage.sDecimal ||
            "" !== (this || e).s.dt.settings()[0].oLanguage.sThousands)
        ) {
          var s = [t[(this || e).s.dataIdx]];
          "" !== (this || e).s.dt.settings()[0].oLanguage.sDecimal &&
            (s = t[(this || e).s.dataIdx].split(
              (this || e).s.dt.settings()[0].oLanguage.sDecimal
            ));
          if ("" !== (this || e).s.dt.settings()[0].oLanguage.sThousands)
            for (var a = 0; a < s.length; a++)
              s[a] = s[a].replace(
                (this || e).s.dt.settings()[0].oLanguage.sThousands,
                ","
              );
          r = s.join(".");
        }
        if ("filter" !== (this || e).c.orthogonal.search) {
          var o = (this || e).s.dt.settings()[0];
          r = o.oApi._fnGetCellData(
            o,
            i,
            (this || e).s.dataIdx,
            "string" === typeof (this || e).c.orthogonal
              ? (this || e).c.orthogonal
              : (this || e).c.orthogonal.search
          );
        }
        if ("array" === (this || e).s.type) {
          Array.isArray(r) || (r = [r]);
          r.sort();
          for (var d = 0, l = r; d < l.length; d++) {
            var u = l[d];
            u && (u = u.replace(/[\r\n\u2028]/g, " "));
          }
        } else null !== r && (r = r.replace(/[\r\n\u2028]/g, " "));
        (this || e).s.type.includes("html") &&
          (r = r.replace(/(<([^>]+)>)/gi, ""));
        null === r && (r = "");
        return n.search(r, (this || e).s.value, this || e);
      }
    };
    Criteria.prototype.getDetails = function (t) {
      void 0 === t && (t = false);
      if (
        null === (this || e).s.type ||
        !(this || e).s.type.includes("num") ||
        ("" === (this || e).s.dt.settings()[0].oLanguage.sDecimal &&
          "" === (this || e).s.dt.settings()[0].oLanguage.sThousands)
      ) {
        if (null !== (this || e).s.type && t)
          if (
            (this || e).s.type.includes("date") ||
            (this || e).s.type.includes("time")
          )
            for (i = 0; i < (this || e).s.value.length; i++)
              null ===
                (this || e).s.value[i].match(
                  /^\d{4}-([0]\d|1[0-2])-([0-2]\d|3[01])$/g
                ) && ((this || e).s.value[i] = "");
          else if ((this || e).s.type.includes("moment"))
            for (i = 0; i < (this || e).s.value.length; i++)
              (this || e).s.value[i] = s(
                (this || e).s.value[i],
                (this || e).s.dateFormat
              ).toISOString();
          else if ((this || e).s.type.includes("luxon"))
            for (i = 0; i < (this || e).s.value.length; i++)
              (this || e).s.value[i] = a.DateTime.fromFormat(
                (this || e).s.value[i],
                (this || e).s.dateFormat
              ).toISO();
      } else
        for (var i = 0; i < (this || e).s.value.length; i++) {
          var n = [(this || e).s.value[i].toString()];
          "" !== (this || e).s.dt.settings()[0].oLanguage.sDecimal &&
            (n = (this || e).s.value[i].split(
              (this || e).s.dt.settings()[0].oLanguage.sDecimal
            ));
          if ("" !== (this || e).s.dt.settings()[0].oLanguage.sThousands)
            for (var r = 0; r < n.length; r++)
              n[r] = n[r].replace(
                (this || e).s.dt.settings()[0].oLanguage.sThousands,
                ","
              );
          (this || e).s.value[i] = n.join(".");
        }
      if (
        (this || e).s.type.includes("num") &&
        (this || e).s.dt.page.info().serverSide
      )
        for (i = 0; i < (this || e).s.value.length; i++)
          (this || e).s.value[i] = (this || e).s.value[i].replace(
            /[^0-9.]/g,
            ""
          );
      return {
        condition: (this || e).s.condition,
        data: (this || e).s.data,
        origData: (this || e).s.origData,
        type: (this || e).s.type,
        value: (this || e).s.value.map(function (t) {
          return t.toString();
        }),
      };
    };
    /**
     * Getter for the node for the container of the criteria
     *
     * @returns JQuery<HTMLElement> the node for the container
     */ Criteria.prototype.getNode = function () {
      return (this || e).dom.container;
    };
    Criteria.prototype.populate = function () {
      this._populateData();
      if (-1 !== (this || e).s.dataIdx) {
        this._populateCondition();
        void 0 !== (this || e).s.condition && this._populateValue();
      }
    };
    /**
     * Rebuilds the criteria based upon the details passed in
     *
     * @param loadedCriteria the details required to rebuild the criteria
     */ Criteria.prototype.rebuild = function (i) {
      var n = false;
      var r;
      this._populateData();
      if (void 0 !== i.data) {
        var s = (this || e).classes.italic;
        var a = (this || e).dom.data;
        (this || e).dom.data.children("option").each(function () {
          if (t(this || e).text() === i.data) {
            t(this || e).prop("selected", true);
            a.removeClass(s);
            n = true;
            r = t(this || e).val();
          } else t(this || e).removeProp("selected");
        });
      }
      if (n) {
        (this || e).s.data = i.data;
        (this || e).s.origData = i.origData;
        (this || e).s.dataIdx = r;
        (this || e).c.orthogonal = this._getOptions().orthogonal;
        (this || e).dom.dataTitle.remove();
        this._populateCondition();
        (this || e).dom.conditionTitle.remove();
        var o = void 0;
        var d = (this || e).dom.condition.children("option");
        for (var l = 0; l < d.length; l++) {
          var u = t(d[l]);
          if (
            void 0 !== i.condition &&
            u.val() === i.condition &&
            "string" === typeof i.condition
          ) {
            u.prop("selected", true);
            o = u.val();
          } else u.removeProp("selected");
        }
        (this || e).s.condition = o;
        if (void 0 !== (this || e).s.condition) {
          (this || e).dom.conditionTitle.removeProp("selected");
          (this || e).dom.conditionTitle.remove();
          (this || e).dom.condition.removeClass((this || e).classes.italic);
          for (l = 0; l < d.length; l++) {
            u = t(d[l]);
            u.val() !== (this || e).s.condition && u.removeProp("selected");
          }
          this._populateValue(i);
        } else
          (this || e).dom.conditionTitle
            .prependTo((this || e).dom.condition)
            .prop("selected", true);
      }
    };
    Criteria.prototype.setListeners = function () {
      var i = this || e;
      (this || e).dom.data.unbind("change").on("change.dtsb", function () {
        i.dom.dataTitle.removeProp("selected");
        var e = i.dom.data.children("option." + i.classes.option);
        for (var n = 0; n < e.length; n++) {
          var r = t(e[n]);
          if (r.val() === i.dom.data.val()) {
            i.dom.data.removeClass(i.classes.italic);
            r.prop("selected", true);
            i.s.dataIdx = +r.val();
            i.s.data = r.text();
            i.s.origData = r.prop("origData");
            i.c.orthogonal = i._getOptions().orthogonal;
            i._clearCondition();
            i._clearValue();
            i._populateCondition();
            if (i.s.filled) {
              i.s.filled = false;
              i.s.dt.draw();
              i.setListeners();
            }
            i.s.dt.state.save();
          } else r.removeProp("selected");
        }
      });
      (this || e).dom.condition.unbind("change").on("change.dtsb", function () {
        i.dom.conditionTitle.removeProp("selected");
        var e = i.dom.condition.children("option." + i.classes.option);
        for (var n = 0; n < e.length; n++) {
          var r = t(e[n]);
          if (r.val() === i.dom.condition.val()) {
            i.dom.condition.removeClass(i.classes.italic);
            r.prop("selected", true);
            var s = r.val();
            for (
              var a = 0, o = Object.keys(i.s.conditions);
              a < o.length;
              a++
            ) {
              var d = o[a];
              if (d === s) {
                i.s.condition = s;
                break;
              }
            }
            i._clearValue();
            i._populateValue();
            for (var l = 0, u = i.dom.value; l < u.length; l++) {
              var c = u[l];
              if (
                i.s.filled &&
                void 0 !== c &&
                0 !== i.dom.container.has(c[0]).length
              ) {
                i.s.filled = false;
                i.s.dt.draw();
                i.setListeners();
              }
            }
            (0 === i.dom.value.length ||
              (1 === i.dom.value.length && void 0 === i.dom.value[0])) &&
              i.s.dt.draw();
          } else r.removeProp("selected");
        }
      });
    };
    Criteria.prototype._adjustCriteria = function () {
      if (0 !== t(document).has((this || e).dom.container).length) {
        var i;
        var n;
        var r = (this || e).dom.value[(this || e).dom.value.length - 1];
        if (void 0 !== r && 0 !== (this || e).dom.container.has(r[0]).length) {
          n = r.outerWidth(true);
          i = r.offset().left + n;
          var s = (this || e).dom.left.offset();
          var a = (this || e).dom.right.offset();
          var o = (this || e).dom.delete.offset();
          var d =
            0 !== (this || e).dom.container.has((this || e).dom.left[0]).length;
          var l =
            0 !==
            (this || e).dom.container.has((this || e).dom.right[0]).length;
          var u = d ? s.left : l ? a.left : o.left;
          if (
            (u - i < 15 || (d && s.top !== o.top) || (l && a.top !== o.top)) &&
            !(this || e).dom.container
              .parent()
              .hasClass((this || e).classes.vertical)
          ) {
            (this || e).dom.container
              .parent()
              .addClass((this || e).classes.vertical);
            (this || e).s.topGroup.trigger("dtsb-redrawContents");
          } else if (
            u -
              ((this || e).dom.data.offset().left +
                (this || e).dom.data.outerWidth(true) +
                (this || e).dom.condition.outerWidth(true) +
                n) >
              15 &&
            (this || e).dom.container
              .parent()
              .hasClass((this || e).classes.vertical)
          ) {
            (this || e).dom.container
              .parent()
              .removeClass((this || e).classes.vertical);
            (this || e).s.topGroup.trigger("dtsb-redrawContents");
          }
        }
      }
    };
    Criteria.prototype._buildCriteria = function () {
      (this || e).dom.data.append((this || e).dom.dataTitle);
      (this || e).dom.condition.append((this || e).dom.conditionTitle);
      (this || e).dom.container
        .append((this || e).dom.data)
        .append((this || e).dom.condition);
      for (var t = 0, i = (this || e).dom.value; t < i.length; t++) {
        var n = i[t];
        n.append((this || e).dom.valueTitle);
        (this || e).dom.container.append(n);
      }
      (this || e).dom.container
        .append((this || e).dom.delete)
        .append((this || e).dom.right);
      this.setListeners();
    };
    Criteria.prototype._clearCondition = function () {
      (this || e).dom.condition.empty();
      (this || e).dom.conditionTitle
        .prop("selected", true)
        .attr("disabled", "true");
      (this || e).dom.condition
        .prepend((this || e).dom.conditionTitle)
        .prop("selectedIndex", 0);
      (this || e).s.conditions = {};
      (this || e).s.condition = void 0;
    };
    Criteria.prototype._clearValue = function () {
      if (void 0 !== (this || e).s.condition) {
        if (
          (this || e).dom.value.length > 0 &&
          void 0 !== (this || e).dom.value[0]
        ) {
          var _loop_1 = function (t) {
            void 0 !== t &&
              setTimeout(function () {
                t.remove();
              }, 50);
          };
          for (var i = 0, n = (this || e).dom.value; i < n.length; i++) {
            var r = n[i];
            _loop_1(r);
          }
        }
        (this || e).dom.value = [].concat(
          (this || e).s.conditions[(this || e).s.condition].init(
            this || e,
            Criteria.updateListener
          )
        );
        if (
          (this || e).dom.value.length > 0 &&
          void 0 !== (this || e).dom.value[0]
        ) {
          (this || e).dom.value[0]
            .insertAfter((this || e).dom.condition)
            .trigger("dtsb-inserted");
          for (var s = 1; s < (this || e).dom.value.length; s++)
            (this || e).dom.value[s]
              .insertAfter((this || e).dom.value[s - 1])
              .trigger("dtsb-inserted");
        }
      } else {
        var _loop_2 = function (t) {
          void 0 !== t &&
            setTimeout(function () {
              t.remove();
            }, 50);
        };
        for (var a = 0, o = (this || e).dom.value; a < o.length; a++) {
          r = o[a];
          _loop_2(r);
        }
        (this || e).dom.valueTitle.prop("selected", true);
        (this || e).dom.defaultValue
          .append((this || e).dom.valueTitle)
          .insertAfter((this || e).dom.condition);
      }
      (this || e).s.value = [];
      (this || e).dom.value = [
        t("<select disabled/>")
          .addClass((this || e).classes.value)
          .addClass((this || e).classes.dropDown)
          .addClass((this || e).classes.italic)
          .addClass((this || e).classes.select)
          .append((this || e).dom.valueTitle.clone()),
      ];
    };
    /**
     * Gets the options for the column
     *
     * @returns {object} The options for the column
     */ Criteria.prototype._getOptions = function () {
      var i = (this || e).s.dt;
      return t.extend(
        true,
        {},
        Criteria.defaults,
        i.settings()[0].aoColumns[(this || e).s.dataIdx].searchBuilder
      );
    };
    Criteria.prototype._populateCondition = function () {
      var i = [];
      var n = Object.keys((this || e).s.conditions).length;
      if (0 === n) {
        var r = +(this || e).dom.data.children("option:selected").val();
        (this || e).s.type = (this || e).s.dt.columns().type().toArray()[r];
        var s = (this || e).s.dt.settings()[0].aoColumns;
        if (void 0 !== s) {
          var a = s[r];
          void 0 !== a.searchBuilderType && null !== a.searchBuilderType
            ? ((this || e).s.type = a.searchBuilderType)
            : (void 0 !== (this || e).s.type && null !== (this || e).s.type) ||
              ((this || e).s.type = a.sType);
        }
        if (null === (this || e).s.type || void 0 === (this || e).s.type) {
          t.fn.dataTable.ext.oApi._fnColumnTypes(
            (this || e).s.dt.settings()[0]
          );
          (this || e).s.type = (this || e).s.dt.columns().type().toArray()[r];
        }
        (this || e).dom.condition
          .removeAttr("disabled")
          .empty()
          .append((this || e).dom.conditionTitle)
          .addClass((this || e).classes.italic);
        (this || e).dom.conditionTitle.prop("selected", true);
        var o = (this || e).s.dt.settings()[0].oLanguage.sDecimal;
        "" !== o &&
          (this || e).s.type.indexOf(o) ===
            (this || e).s.type.length - o.length &&
          ((this || e).s.type.includes("num-fmt") ||
            (this || e).s.type.includes("num")) &&
          ((this || e).s.type = (this || e).s.type.replace(o, ""));
        var d =
          void 0 !== (this || e).c.conditions[(this || e).s.type]
            ? (this || e).c.conditions[(this || e).s.type]
            : (this || e).s.type.includes("moment")
            ? (this || e).c.conditions.moment
            : (this || e).s.type.includes("luxon")
            ? (this || e).c.conditions.luxon
            : (this || e).c.conditions.string;
        (this || e).s.type.includes("moment")
          ? ((this || e).s.dateFormat = (this || e).s.type.replace(
              /moment-/g,
              ""
            ))
          : (this || e).s.type.includes("luxon") &&
            ((this || e).s.dateFormat = (this || e).s.type.replace(
              /luxon-/g,
              ""
            ));
        for (var l = 0, u = Object.keys(d); l < u.length; l++) {
          var c = u[l];
          if (null !== d[c]) {
            if (
              (this || e).s.dt.page.info().serverSide &&
              d[c].init === Criteria.initSelect
            ) {
              d[c].init = Criteria.initInput;
              d[c].inputValue = Criteria.inputValueInput;
              d[c].isInputValid = Criteria.isInputValidInput;
            }
            (this || e).s.conditions[c] = d[c];
            var h = d[c].conditionName;
            "function" === typeof h &&
              (h = h((this || e).s.dt, (this || e).c.i18n));
            i.push(
              t("<option>", { text: h, value: c })
                .addClass((this || e).classes.option)
                .addClass((this || e).classes.notItalic)
            );
          }
        }
      } else {
        if (!(n > 0)) {
          (this || e).dom.condition
            .attr("disabled", "true")
            .addClass((this || e).classes.italic);
          return;
        }
        (this || e).dom.condition
          .empty()
          .removeAttr("disabled")
          .addClass((this || e).classes.italic);
        for (
          var p = 0, f = Object.keys((this || e).s.conditions);
          p < f.length;
          p++
        ) {
          c = f[p];
          h = (this || e).s.conditions[c].conditionName;
          "function" === typeof h &&
            (h = h((this || e).s.dt, (this || e).c.i18n));
          var m = t("<option>", { text: h, value: c })
            .addClass((this || e).classes.option)
            .addClass((this || e).classes.notItalic);
          if (
            void 0 !== (this || e).s.condition &&
            (this || e).s.condition === h
          ) {
            m.prop("selected", true);
            (this || e).dom.condition.removeClass((this || e).classes.italic);
          }
          i.push(m);
        }
      }
      for (var v = 0, g = i; v < g.length; v++) {
        var C = g[v];
        (this || e).dom.condition.append(C);
      }
      (this || e).dom.condition.prop("selectedIndex", 0);
    };
    Criteria.prototype._populateData = function () {
      var i = this || e;
      (this || e).dom.data.empty().append((this || e).dom.dataTitle);
      if (0 === (this || e).s.dataPoints.length)
        (this || e).s.dt.columns().every(function (e) {
          if (
            true === i.c.columns ||
            i.s.dt.columns(i.c.columns).indexes().toArray().includes(e)
          ) {
            var n = false;
            for (var r = 0, s = i.s.dataPoints; r < s.length; r++) {
              var a = s[r];
              if (a.index === e) {
                n = true;
                break;
              }
            }
            if (!n) {
              var o = i.s.dt.settings()[0].aoColumns[e];
              var d = {
                index: e,
                origData: o.data,
                text: (void 0 === o.searchBuilderTitle
                  ? o.sTitle
                  : o.searchBuilderTitle
                ).replace(/(<([^>]+)>)/gi, ""),
              };
              i.s.dataPoints.push(d);
              i.dom.data.append(
                t("<option>", { text: d.text, value: d.index })
                  .addClass(i.classes.option)
                  .addClass(i.classes.notItalic)
                  .prop("origData", o.data)
                  .prop("selected", i.s.dataIdx === d.index)
              );
              i.s.dataIdx === d.index && i.dom.dataTitle.removeProp("selected");
            }
          }
        });
      else {
        var _loop_3 = function (e) {
          n.s.dt.columns().every(function (t) {
            var n = i.s.dt.settings()[0].aoColumns[t];
            if (
              (void 0 === n.searchBuilderTitle
                ? n.sTitle
                : n.searchBuilderTitle
              ).replace(/(<([^>]+)>)/gi, "") === e.text
            ) {
              e.index = t;
              e.origData = n.data;
            }
          });
          var r = t("<option>", {
            text: e.text.replace(/(<([^>]+)>)/gi, ""),
            value: e.index,
          })
            .addClass(n.classes.option)
            .addClass(n.classes.notItalic)
            .prop("origData", e.origData);
          if (n.s.data === e.text) {
            n.s.dataIdx = e.index;
            n.dom.dataTitle.removeProp("selected");
            r.prop("selected", true);
            n.dom.data.removeClass(n.classes.italic);
          }
          n.dom.data.append(r);
        };
        var n = this || e;
        for (var r = 0, s = (this || e).s.dataPoints; r < s.length; r++) {
          var a = s[r];
          _loop_3(a);
        }
      }
    };
    /**
     * Populates the Value select element
     *
     * @param loadedCriteria optional, used to reload criteria from predefined filters
     */ Criteria.prototype._populateValue = function (i) {
      var n = this || e;
      var r = (this || e).s.filled;
      (this || e).s.filled = false;
      setTimeout(function () {
        n.dom.defaultValue.remove();
      }, 50);
      var _loop_4 = function (t) {
        setTimeout(function () {
          void 0 !== t && t.remove();
        }, 50);
      };
      for (var s = 0, a = (this || e).dom.value; s < a.length; s++) {
        var o = a[s];
        _loop_4(o);
      }
      var d = (this || e).dom.container.children();
      if (d.length > 3) for (var l = 2; l < d.length - 1; l++) t(d[l]).remove();
      void 0 !== i &&
        (this || e).s.dt.columns().every(function (t) {
          n.s.dt.settings()[0].aoColumns[t].sTitle === i.data &&
            (n.s.dataIdx = t);
        });
      (this || e).dom.value = [].concat(
        (this || e).s.conditions[(this || e).s.condition].init(
          this || e,
          Criteria.updateListener,
          void 0 !== i ? i.value : void 0
        )
      );
      void 0 !== i && void 0 !== i.value && ((this || e).s.value = i.value);
      void 0 !== (this || e).dom.value[0] &&
        (this || e).dom.value[0]
          .insertAfter((this || e).dom.condition)
          .trigger("dtsb-inserted");
      for (l = 1; l < (this || e).dom.value.length; l++)
        (this || e).dom.value[l]
          .insertAfter((this || e).dom.value[l - 1])
          .trigger("dtsb-inserted");
      (this || e).s.filled = (this || e).s.conditions[
        (this || e).s.condition
      ].isInputValid((this || e).dom.value, this || e);
      this.setListeners();
      if (r !== (this || e).s.filled) {
        (this || e).s.dt.draw();
        this.setListeners();
      }
    };
    /**
     * Provides throttling capabilities to SearchBuilder without having to use dt's _fnThrottle function
     * This is because that function is not quite suitable for our needs as it runs initially rather than waiting
     *
     * @param args arguments supplied to the throttle function
     * @returns Function that is to be run that implements the throttling
     */ Criteria.prototype._throttle = function (t, i) {
      void 0 === i && (i = 200);
      var n = null;
      var r = null;
      var s = this || e;
      null === i && (i = 200);
      return function () {
        var e = [];
        for (var a = 0; a < arguments.length; a++) e[a] = arguments[a];
        var o = +new Date();
        null !== n && o < n + i ? clearTimeout(r) : (n = o);
        r = setTimeout(function () {
          n = null;
          t.apply(s, e);
        }, i);
      };
    };
    Criteria.version = "1.1.0";
    Criteria.classes = {
      button: "dtsb-button",
      buttonContainer: "dtsb-buttonContainer",
      condition: "dtsb-condition",
      container: "dtsb-criteria",
      data: "dtsb-data",
      delete: "dtsb-delete",
      dropDown: "dtsb-dropDown",
      greyscale: "dtsb-greyscale",
      input: "dtsb-input",
      italic: "dtsb-italic",
      joiner: "dtsp-joiner",
      left: "dtsb-left",
      notItalic: "dtsb-notItalic",
      option: "dtsb-option",
      right: "dtsb-right",
      select: "dtsb-select",
      value: "dtsb-value",
      vertical: "dtsb-vertical",
    };
    Criteria.initSelect = function (i, n, r, s) {
      void 0 === r && (r = null);
      void 0 === s && (s = false);
      var a = i.dom.data.children("option:selected").val();
      var o = i.s.dt.rows().indexes().toArray();
      var d = i.s.dt.settings()[0];
      var l = t("<select/>")
        .addClass(Criteria.classes.value)
        .addClass(Criteria.classes.dropDown)
        .addClass(Criteria.classes.italic)
        .addClass(Criteria.classes.select)
        .append(i.dom.valueTitle)
        .on("change.dtsb", function () {
          t(this || e).removeClass(Criteria.classes.italic);
          n(i, this || e);
        });
      i.c.greyscale && l.addClass(Criteria.classes.greyscale);
      var u = [];
      var c = [];
      for (var h = 0, p = o; h < p.length; h++) {
        var f = p[h];
        var m = d.oApi._fnGetCellData(
          d,
          f,
          a,
          "string" === typeof i.c.orthogonal
            ? i.c.orthogonal
            : i.c.orthogonal.search
        );
        var v = {
          filter: "string" === typeof m ? m.replace(/[\r\n\u2028]/g, " ") : m,
          index: f,
          text: d.oApi._fnGetCellData(
            d,
            f,
            a,
            "string" === typeof i.c.orthogonal
              ? i.c.orthogonal
              : i.c.orthogonal.display
          ),
        };
        if ("array" === i.s.type) {
          v.filter = Array.isArray(v.filter)
            ? (v.filter = v.filter.sort())
            : [v.filter];
          v.text = Array.isArray(v.text) ? (v.text = v.text.sort()) : [v.text];
        }
        var addOption = function (e, n) {
          var s = t("<option>", {
            type: Array.isArray(e) ? "Array" : "String",
            value:
              i.s.type.includes("html") && null !== e && "string" === typeof e
                ? e.replace(/(<([^>]+)>)/gi, "")
                : e,
          })
            .addClass(i.classes.option)
            .addClass(i.classes.notItalic)
            .html("string" === typeof n ? n.replace(/(<([^>]+)>)/gi, "") : n);
          var a = s.val();
          if (-1 === u.indexOf(a)) {
            u.push(a);
            c.push(s);
            null !== r && Array.isArray(r[0]) && (r[0] = r[0].sort().join(","));
            if (null !== r && s.val() === r[0]) {
              s.prop("selected", true);
              l.removeClass(Criteria.classes.italic);
            }
          }
        };
        if (s)
          for (var g = 0; g < v.filter.length; g++)
            addOption(v.filter[g], v.text[g]);
        else addOption(v.filter, v.text);
      }
      c.sort(function (t, e) {
        return "array" === i.s.type ||
          "string" === i.s.type ||
          "html" === i.s.type
          ? t.val() < e.val()
            ? -1
            : t.val() > e.val()
            ? 1
            : 0
          : "num" === i.s.type || "html-num" === i.s.type
          ? +t.val().replace(/(<([^>]+)>)/gi, "") <
            +e.val().replace(/(<([^>]+)>)/gi, "")
            ? -1
            : +t.val().replace(/(<([^>]+)>)/gi, "") >
              +e.val().replace(/(<([^>]+)>)/gi, "")
            ? 1
            : 0
          : "num-fmt" === i.s.type || "html-num-fmt" === i.s.type
          ? +t.val().replace(/[^0-9.]/g, "") < +e.val().replace(/[^0-9.]/g, "")
            ? -1
            : +t.val().replace(/[^0-9.]/g, "") >
              +e.val().replace(/[^0-9.]/g, "")
            ? 1
            : 0
          : void 0;
      });
      for (var C = 0, b = c; C < b.length; C++) {
        var y = b[C];
        l.append(y);
      }
      return l;
    };
    Criteria.initSelectArray = function (t, i, e) {
      void 0 === e && (e = null);
      return Criteria.initSelect(t, i, e, true);
    };
    Criteria.initInput = function (i, n, r) {
      void 0 === r && (r = null);
      var s = i.s.dt.settings()[0].searchDelay;
      var a = t("<input/>")
        .addClass(Criteria.classes.value)
        .addClass(Criteria.classes.input)
        .on(
          "input.dtsb keypress.dtsb",
          i._throttle(
            function (t) {
              var r = t.keyCode || t.which;
              if (
                (!i.c.enterSearch &&
                  !(
                    void 0 !== i.s.dt.settings()[0].oInit.search &&
                    i.s.dt.settings()[0].oInit.search.return
                  )) ||
                13 === r
              )
                return n(i, this || e);
            },
            null === s ? 100 : s
          )
        );
      i.c.greyscale && a.addClass(Criteria.classes.greyscale);
      null !== r && a.val(r[0]);
      i.s.dt.one("draw.dtsb", function () {
        i.s.topGroup.trigger("dtsb-redrawLogic");
      });
      return a;
    };
    Criteria.init2Input = function (i, n, r) {
      void 0 === r && (r = null);
      var s = i.s.dt.settings()[0].searchDelay;
      var a = [
        t("<input/>")
          .addClass(Criteria.classes.value)
          .addClass(Criteria.classes.input)
          .on(
            "input.dtsb keypress.dtsb",
            i._throttle(
              function (t) {
                var r = t.keyCode || t.which;
                if (
                  (!i.c.enterSearch &&
                    !(
                      void 0 !== i.s.dt.settings()[0].oInit.search &&
                      i.s.dt.settings()[0].oInit.search.return
                    )) ||
                  13 === r
                )
                  return n(i, this || e);
              },
              null === s ? 100 : s
            )
          ),
        t("<span>")
          .addClass(i.classes.joiner)
          .text(i.s.dt.i18n("searchBuilder.valueJoiner", i.c.i18n.valueJoiner)),
        t("<input/>")
          .addClass(Criteria.classes.value)
          .addClass(Criteria.classes.input)
          .on(
            "input.dtsb keypress.dtsb",
            i._throttle(
              function (t) {
                var r = t.keyCode || t.which;
                if (
                  (!i.c.enterSearch &&
                    !(
                      void 0 !== i.s.dt.settings()[0].oInit.search &&
                      i.s.dt.settings()[0].oInit.search.return
                    )) ||
                  13 === r
                )
                  return n(i, this || e);
              },
              null === s ? 100 : s
            )
          ),
      ];
      if (i.c.greyscale) {
        a[0].addClass(Criteria.classes.greyscale);
        a[2].addClass(Criteria.classes.greyscale);
      }
      if (null !== r) {
        a[0].val(r[0]);
        a[2].val(r[1]);
      }
      i.s.dt.one("draw.dtsb", function () {
        i.s.topGroup.trigger("dtsb-redrawLogic");
      });
      return a;
    };
    Criteria.initDate = function (i, n, r) {
      void 0 === r && (r = null);
      var s = i.s.dt.settings()[0].searchDelay;
      var a = t("<input/>")
        .addClass(Criteria.classes.value)
        .addClass(Criteria.classes.input)
        .dtDateTime({
          attachTo: "input",
          format: i.s.dateFormat ? i.s.dateFormat : void 0,
        })
        .on(
          "change.dtsb",
          i._throttle(
            function () {
              return n(i, this || e);
            },
            null === s ? 100 : s
          )
        )
        .on(
          "input.dtsb keypress.dtsb",
          i.c.enterSearch ||
            (void 0 !== i.s.dt.settings()[0].oInit.search &&
              i.s.dt.settings()[0].oInit.search.return)
            ? function (t) {
                i._throttle(
                  function () {
                    var r = t.keyCode || t.which;
                    if (13 === r) return n(i, this || e);
                  },
                  null === s ? 100 : s
                );
              }
            : i._throttle(
                function () {
                  return n(i, this || e);
                },
                null === s ? 100 : s
              )
        );
      i.c.greyscale && a.addClass(Criteria.classes.greyscale);
      null !== r && a.val(r[0]);
      i.s.dt.one("draw.dtsb", function () {
        i.s.topGroup.trigger("dtsb-redrawLogic");
      });
      return a;
    };
    Criteria.initNoValue = function (t) {
      t.s.dt.one("draw.dtsb", function () {
        t.s.topGroup.trigger("dtsb-redrawLogic");
      });
    };
    Criteria.init2Date = function (i, n, r) {
      var s = this || e;
      void 0 === r && (r = null);
      var a = i.s.dt.settings()[0].searchDelay;
      var o = [
        t("<input/>")
          .addClass(Criteria.classes.value)
          .addClass(Criteria.classes.input)
          .dtDateTime({
            attachTo: "input",
            format: i.s.dateFormat ? i.s.dateFormat : void 0,
          })
          .on(
            "change.dtsb",
            null !== a
              ? i.s.dt.settings()[0].oApi._fnThrottle(function () {
                  return n(i, this || e);
                }, a)
              : function () {
                  n(i, s);
                }
          )
          .on(
            "input.dtsb keypress.dtsb",
            i.c.enterSearch ||
              (void 0 !== i.s.dt.settings()[0].oInit.search &&
                i.s.dt.settings()[0].oInit.search.return) ||
              null === a
              ? i.c.enterSearch ||
                (void 0 !== i.s.dt.settings()[0].oInit.search &&
                  i.s.dt.settings()[0].oInit.search.return)
                ? function (t) {
                    var e = t.keyCode || t.which;
                    13 === e && n(i, s);
                  }
                : function () {
                    n(i, s);
                  }
              : i.s.dt.settings()[0].oApi._fnThrottle(function () {
                  return n(i, this || e);
                }, a)
          ),
        t("<span>")
          .addClass(i.classes.joiner)
          .text(i.s.dt.i18n("searchBuilder.valueJoiner", i.c.i18n.valueJoiner)),
        t("<input/>")
          .addClass(Criteria.classes.value)
          .addClass(Criteria.classes.input)
          .dtDateTime({
            attachTo: "input",
            format: i.s.dateFormat ? i.s.dateFormat : void 0,
          })
          .on(
            "change.dtsb",
            null !== a
              ? i.s.dt.settings()[0].oApi._fnThrottle(function () {
                  return n(i, this || e);
                }, a)
              : function () {
                  n(i, s);
                }
          )
          .on(
            "input.dtsb keypress.dtsb",
            i.c.enterSearch ||
              (void 0 !== i.s.dt.settings()[0].oInit.search &&
                i.s.dt.settings()[0].oInit.search.return) ||
              null === a
              ? i.c.enterSearch ||
                (void 0 !== i.s.dt.settings()[0].oInit.search &&
                  i.s.dt.settings()[0].oInit.search.return)
                ? function (t) {
                    var e = t.keyCode || t.which;
                    13 === e && n(i, s);
                  }
                : function () {
                    n(i, s);
                  }
              : i.s.dt.settings()[0].oApi._fnThrottle(function () {
                  return n(i, this || e);
                }, a)
          ),
      ];
      if (i.c.greyscale) {
        o[0].addClass(Criteria.classes.greyscale);
        o[2].addClass(Criteria.classes.greyscale);
      }
      if (null !== r && r.length > 0) {
        o[0].val(r[0]);
        o[2].val(r[1]);
      }
      i.s.dt.one("draw.dtsb", function () {
        i.s.topGroup.trigger("dtsb-redrawLogic");
      });
      return o;
    };
    Criteria.isInputValidSelect = function (t) {
      var i = true;
      for (var e = 0, n = t; e < n.length; e++) {
        var r = n[e];
        r.children("option:selected").length ===
          r.children("option").length -
            r.children("option." + Criteria.classes.notItalic).length &&
          1 === r.children("option:selected").length &&
          r.children("option:selected")[0] === r.children("option:hidden")[0] &&
          (i = false);
      }
      return i;
    };
    Criteria.isInputValidInput = function (t) {
      var i = true;
      for (var e = 0, n = t; e < n.length; e++) {
        var r = n[e];
        r.is("input") && 0 === r.val().length && (i = false);
      }
      return i;
    };
    Criteria.inputValueSelect = function (t) {
      var i = [];
      for (var e = 0, n = t; e < n.length; e++) {
        var r = n[e];
        if (r.is("select")) {
          var s = r.children("option:selected").val();
          i.push(
            "Array" === r.children("option:selected").attr("type")
              ? s.split(",").sort()
              : s
          );
        }
      }
      return i;
    };
    Criteria.inputValueInput = function (t) {
      var i = [];
      for (var e = 0, n = t; e < n.length; e++) {
        var r = n[e];
        r.is("input") && i.push(r.val());
      }
      return i;
    };
    Criteria.updateListener = function (t, i) {
      var e = t.s.conditions[t.s.condition];
      t.s.filled = e.isInputValid(t.dom.value, t);
      t.s.value = e.inputValue(t.dom.value, t);
      if (t.s.filled) {
        Array.isArray(t.s.value) || (t.s.value = [t.s.value]);
        for (var n = 0; n < t.s.value.length; n++)
          if (Array.isArray(t.s.value[n])) t.s.value[n].sort();
          else if (
            t.s.type.includes("num") &&
            ("" !== t.s.dt.settings()[0].oLanguage.sDecimal ||
              "" !== t.s.dt.settings()[0].oLanguage.sThousands)
          ) {
            var r = [t.s.value[n].toString()];
            "" !== t.s.dt.settings()[0].oLanguage.sDecimal &&
              (r = t.s.value[n].split(t.s.dt.settings()[0].oLanguage.sDecimal));
            if ("" !== t.s.dt.settings()[0].oLanguage.sThousands)
              for (var s = 0; s < r.length; s++)
                r[s] = r[s].replace(
                  t.s.dt.settings()[0].oLanguage.sThousands,
                  ","
                );
            t.s.value[n] = r.join(".");
          }
        var a = null;
        var o = null;
        for (n = 0; n < t.dom.value.length; n++)
          if (i === t.dom.value[n][0]) {
            a = n;
            void 0 !== i.selectionStart && (o = i.selectionStart);
          }
        t.s.dt.draw();
        if (null !== a) {
          t.dom.value[a].removeClass(t.classes.italic);
          t.dom.value[a].focus();
          null !== o && t.dom.value[a][0].setSelectionRange(o, o);
        }
      } else t.s.dt.draw();
    };
    Criteria.dateConditions = {
      "=": {
        conditionName: function (t, i) {
          return t.i18n(
            "searchBuilder.conditions.date.equals",
            i.conditions.date.equals
          );
        },
        init: Criteria.initDate,
        inputValue: Criteria.inputValueInput,
        isInputValid: Criteria.isInputValidInput,
        search: function (t, i) {
          t = t.replace(/(\/|-|,)/g, "-");
          return t === i[0];
        },
      },
      "!=": {
        conditionName: function (t, i) {
          return t.i18n(
            "searchBuilder.conditions.date.not",
            i.conditions.date.not
          );
        },
        init: Criteria.initDate,
        inputValue: Criteria.inputValueInput,
        isInputValid: Criteria.isInputValidInput,
        search: function (t, i) {
          t = t.replace(/(\/|-|,)/g, "-");
          return t !== i[0];
        },
      },
      "<": {
        conditionName: function (t, i) {
          return t.i18n(
            "searchBuilder.conditions.date.before",
            i.conditions.date.before
          );
        },
        init: Criteria.initDate,
        inputValue: Criteria.inputValueInput,
        isInputValid: Criteria.isInputValidInput,
        search: function (t, i) {
          t = t.replace(/(\/|-|,)/g, "-");
          return t < i[0];
        },
      },
      ">": {
        conditionName: function (t, i) {
          return t.i18n(
            "searchBuilder.conditions.date.after",
            i.conditions.date.after
          );
        },
        init: Criteria.initDate,
        inputValue: Criteria.inputValueInput,
        isInputValid: Criteria.isInputValidInput,
        search: function (t, i) {
          t = t.replace(/(\/|-|,)/g, "-");
          return t > i[0];
        },
      },
      between: {
        conditionName: function (t, i) {
          return t.i18n(
            "searchBuilder.conditions.date.between",
            i.conditions.date.between
          );
        },
        init: Criteria.init2Date,
        inputValue: Criteria.inputValueInput,
        isInputValid: Criteria.isInputValidInput,
        search: function (t, i) {
          t = t.replace(/(\/|-|,)/g, "-");
          return i[0] < i[1] ? i[0] <= t && t <= i[1] : i[1] <= t && t <= i[0];
        },
      },
      "!between": {
        conditionName: function (t, i) {
          return t.i18n(
            "searchBuilder.conditions.date.notBetween",
            i.conditions.date.notBetween
          );
        },
        init: Criteria.init2Date,
        inputValue: Criteria.inputValueInput,
        isInputValid: Criteria.isInputValidInput,
        search: function (t, i) {
          t = t.replace(/(\/|-|,)/g, "-");
          return i[0] < i[1]
            ? !(i[0] <= t && t <= i[1])
            : !(i[1] <= t && t <= i[0]);
        },
      },
      null: {
        conditionName: function (t, i) {
          return t.i18n(
            "searchBuilder.conditions.date.empty",
            i.conditions.date.empty
          );
        },
        init: Criteria.initNoValue,
        inputValue: function () {},
        isInputValid: function () {
          return true;
        },
        search: function (t) {
          return null === t || void 0 === t || 0 === t.length;
        },
      },
      "!null": {
        conditionName: function (t, i) {
          return t.i18n(
            "searchBuilder.conditions.date.notEmpty",
            i.conditions.date.notEmpty
          );
        },
        init: Criteria.initNoValue,
        inputValue: function () {},
        isInputValid: function () {
          return true;
        },
        search: function (t) {
          return !(null === t || void 0 === t || 0 === t.length);
        },
      },
    };
    Criteria.momentDateConditions = {
      "=": {
        conditionName: function (t, i) {
          return t.i18n(
            "searchBuilder.conditions.date.equals",
            i.conditions.date.equals
          );
        },
        init: Criteria.initDate,
        inputValue: Criteria.inputValueInput,
        isInputValid: Criteria.isInputValidInput,
        search: function (t, i, e) {
          return (
            s(t, e.s.dateFormat).valueOf() === s(i[0], e.s.dateFormat).valueOf()
          );
        },
      },
      "!=": {
        conditionName: function (t, i) {
          return t.i18n(
            "searchBuilder.conditions.date.not",
            i.conditions.date.not
          );
        },
        init: Criteria.initDate,
        inputValue: Criteria.inputValueInput,
        isInputValid: Criteria.isInputValidInput,
        search: function (t, i, e) {
          return (
            s(t, e.s.dateFormat).valueOf() !== s(i[0], e.s.dateFormat).valueOf()
          );
        },
      },
      "<": {
        conditionName: function (t, i) {
          return t.i18n(
            "searchBuilder.conditions.date.before",
            i.conditions.date.before
          );
        },
        init: Criteria.initDate,
        inputValue: Criteria.inputValueInput,
        isInputValid: Criteria.isInputValidInput,
        search: function (t, i, e) {
          return (
            s(t, e.s.dateFormat).valueOf() < s(i[0], e.s.dateFormat).valueOf()
          );
        },
      },
      ">": {
        conditionName: function (t, i) {
          return t.i18n(
            "searchBuilder.conditions.date.after",
            i.conditions.date.after
          );
        },
        init: Criteria.initDate,
        inputValue: Criteria.inputValueInput,
        isInputValid: Criteria.isInputValidInput,
        search: function (t, i, e) {
          return (
            s(t, e.s.dateFormat).valueOf() > s(i[0], e.s.dateFormat).valueOf()
          );
        },
      },
      between: {
        conditionName: function (t, i) {
          return t.i18n(
            "searchBuilder.conditions.date.between",
            i.conditions.date.between
          );
        },
        init: Criteria.init2Date,
        inputValue: Criteria.inputValueInput,
        isInputValid: Criteria.isInputValidInput,
        search: function (t, i, e) {
          var n = s(t, e.s.dateFormat).valueOf();
          var r = s(i[0], e.s.dateFormat).valueOf();
          var a = s(i[1], e.s.dateFormat).valueOf();
          return r < a ? r <= n && n <= a : a <= n && n <= r;
        },
      },
      "!between": {
        conditionName: function (t, i) {
          return t.i18n(
            "searchBuilder.conditions.date.notBetween",
            i.conditions.date.notBetween
          );
        },
        init: Criteria.init2Date,
        inputValue: Criteria.inputValueInput,
        isInputValid: Criteria.isInputValidInput,
        search: function (t, i, e) {
          var n = s(t, e.s.dateFormat).valueOf();
          var r = s(i[0], e.s.dateFormat).valueOf();
          var a = s(i[1], e.s.dateFormat).valueOf();
          return r < a ? !(+r <= +n && +n <= +a) : !(+a <= +n && +n <= +r);
        },
      },
      null: {
        conditionName: function (t, i) {
          return t.i18n(
            "searchBuilder.conditions.date.empty",
            i.conditions.date.empty
          );
        },
        init: Criteria.initNoValue,
        inputValue: function () {},
        isInputValid: function () {
          return true;
        },
        search: function (t) {
          return null === t || void 0 === t || 0 === t.length;
        },
      },
      "!null": {
        conditionName: function (t, i) {
          return t.i18n(
            "searchBuilder.conditions.date.notEmpty",
            i.conditions.date.notEmpty
          );
        },
        init: Criteria.initNoValue,
        inputValue: function () {},
        isInputValid: function () {
          return true;
        },
        search: function (t) {
          return !(null === t || void 0 === t || 0 === t.length);
        },
      },
    };
    Criteria.luxonDateConditions = {
      "=": {
        conditionName: function (t, i) {
          return t.i18n(
            "searchBuilder.conditions.date.equals",
            i.conditions.date.equals
          );
        },
        init: Criteria.initDate,
        inputValue: Criteria.inputValueInput,
        isInputValid: Criteria.isInputValidInput,
        search: function (t, i, e) {
          return (
            a.DateTime.fromFormat(t, e.s.dateFormat).ts ===
            a.DateTime.fromFormat(i[0], e.s.dateFormat).ts
          );
        },
      },
      "!=": {
        conditionName: function (t, i) {
          return t.i18n(
            "searchBuilder.conditions.date.not",
            i.conditions.date.not
          );
        },
        init: Criteria.initDate,
        inputValue: Criteria.inputValueInput,
        isInputValid: Criteria.isInputValidInput,
        search: function (t, i, e) {
          return (
            a.DateTime.fromFormat(t, e.s.dateFormat).ts !==
            a.DateTime.fromFormat(i[0], e.s.dateFormat).ts
          );
        },
      },
      "<": {
        conditionName: function (t, i) {
          return t.i18n(
            "searchBuilder.conditions.date.before",
            i.conditions.date.before
          );
        },
        init: Criteria.initDate,
        inputValue: Criteria.inputValueInput,
        isInputValid: Criteria.isInputValidInput,
        search: function (t, i, e) {
          return (
            a.DateTime.fromFormat(t, e.s.dateFormat).ts <
            a.DateTime.fromFormat(i[0], e.s.dateFormat).ts
          );
        },
      },
      ">": {
        conditionName: function (t, i) {
          return t.i18n(
            "searchBuilder.conditions.date.after",
            i.conditions.date.after
          );
        },
        init: Criteria.initDate,
        inputValue: Criteria.inputValueInput,
        isInputValid: Criteria.isInputValidInput,
        search: function (t, i, e) {
          return (
            a.DateTime.fromFormat(t, e.s.dateFormat).ts >
            a.DateTime.fromFormat(i[0], e.s.dateFormat).ts
          );
        },
      },
      between: {
        conditionName: function (t, i) {
          return t.i18n(
            "searchBuilder.conditions.date.between",
            i.conditions.date.between
          );
        },
        init: Criteria.init2Date,
        inputValue: Criteria.inputValueInput,
        isInputValid: Criteria.isInputValidInput,
        search: function (t, i, e) {
          var n = a.DateTime.fromFormat(t, e.s.dateFormat).ts;
          var r = a.DateTime.fromFormat(i[0], e.s.dateFormat).ts;
          var s = a.DateTime.fromFormat(i[1], e.s.dateFormat).ts;
          return r < s ? r <= n && n <= s : s <= n && n <= r;
        },
      },
      "!between": {
        conditionName: function (t, i) {
          return t.i18n(
            "searchBuilder.conditions.date.notBetween",
            i.conditions.date.notBetween
          );
        },
        init: Criteria.init2Date,
        inputValue: Criteria.inputValueInput,
        isInputValid: Criteria.isInputValidInput,
        search: function (t, i, e) {
          var n = a.DateTime.fromFormat(t, e.s.dateFormat).ts;
          var r = a.DateTime.fromFormat(i[0], e.s.dateFormat).ts;
          var s = a.DateTime.fromFormat(i[1], e.s.dateFormat).ts;
          return r < s ? !(+r <= +n && +n <= +s) : !(+s <= +n && +n <= +r);
        },
      },
      null: {
        conditionName: function (t, i) {
          return t.i18n(
            "searchBuilder.conditions.date.empty",
            i.conditions.date.empty
          );
        },
        init: Criteria.initNoValue,
        inputValue: function () {},
        isInputValid: function () {
          return true;
        },
        search: function (t) {
          return null === t || void 0 === t || 0 === t.length;
        },
      },
      "!null": {
        conditionName: function (t, i) {
          return t.i18n(
            "searchBuilder.conditions.date.notEmpty",
            i.conditions.date.notEmpty
          );
        },
        init: Criteria.initNoValue,
        inputValue: function () {},
        isInputValid: function () {
          return true;
        },
        search: function (t) {
          return !(null === t || void 0 === t || 0 === t.length);
        },
      },
    };
    Criteria.numConditions = {
      "=": {
        conditionName: function (t, i) {
          return t.i18n(
            "searchBuilder.conditions.number.equals",
            i.conditions.number.equals
          );
        },
        init: Criteria.initSelect,
        inputValue: Criteria.inputValueSelect,
        isInputValid: Criteria.isInputValidSelect,
        search: function (t, i) {
          return +t === +i[0];
        },
      },
      "!=": {
        conditionName: function (t, i) {
          return t.i18n(
            "searchBuilder.conditions.number.not",
            i.conditions.number.not
          );
        },
        init: Criteria.initSelect,
        inputValue: Criteria.inputValueSelect,
        isInputValid: Criteria.isInputValidSelect,
        search: function (t, i) {
          return +t !== +i[0];
        },
      },
      "<": {
        conditionName: function (t, i) {
          return t.i18n(
            "searchBuilder.conditions.number.lt",
            i.conditions.number.lt
          );
        },
        init: Criteria.initInput,
        inputValue: Criteria.inputValueInput,
        isInputValid: Criteria.isInputValidInput,
        search: function (t, i) {
          return +t < +i[0];
        },
      },
      "<=": {
        conditionName: function (t, i) {
          return t.i18n(
            "searchBuilder.conditions.number.lte",
            i.conditions.number.lte
          );
        },
        init: Criteria.initInput,
        inputValue: Criteria.inputValueInput,
        isInputValid: Criteria.isInputValidInput,
        search: function (t, i) {
          return +t <= +i[0];
        },
      },
      ">=": {
        conditionName: function (t, i) {
          return t.i18n(
            "searchBuilder.conditions.number.gte",
            i.conditions.number.gte
          );
        },
        init: Criteria.initInput,
        inputValue: Criteria.inputValueInput,
        isInputValid: Criteria.isInputValidInput,
        search: function (t, i) {
          return +t >= +i[0];
        },
      },
      ">": {
        conditionName: function (t, i) {
          return t.i18n(
            "searchBuilder.conditions.number.gt",
            i.conditions.number.gt
          );
        },
        init: Criteria.initInput,
        inputValue: Criteria.inputValueInput,
        isInputValid: Criteria.isInputValidInput,
        search: function (t, i) {
          return +t > +i[0];
        },
      },
      between: {
        conditionName: function (t, i) {
          return t.i18n(
            "searchBuilder.conditions.number.between",
            i.conditions.number.between
          );
        },
        init: Criteria.init2Input,
        inputValue: Criteria.inputValueInput,
        isInputValid: Criteria.isInputValidInput,
        search: function (t, i) {
          return +i[0] < +i[1]
            ? +i[0] <= +t && +t <= +i[1]
            : +i[1] <= +t && +t <= +i[0];
        },
      },
      "!between": {
        conditionName: function (t, i) {
          return t.i18n(
            "searchBuilder.conditions.number.notBetween",
            i.conditions.number.notBetween
          );
        },
        init: Criteria.init2Input,
        inputValue: Criteria.inputValueInput,
        isInputValid: Criteria.isInputValidInput,
        search: function (t, i) {
          return +i[0] < +i[1]
            ? !(+i[0] <= +t && +t <= +i[1])
            : !(+i[1] <= +t && +t <= +i[0]);
        },
      },
      null: {
        conditionName: function (t, i) {
          return t.i18n(
            "searchBuilder.conditions.number.empty",
            i.conditions.number.empty
          );
        },
        init: Criteria.initNoValue,
        inputValue: function () {},
        isInputValid: function () {
          return true;
        },
        search: function (t) {
          return null === t || void 0 === t || 0 === t.length;
        },
      },
      "!null": {
        conditionName: function (t, i) {
          return t.i18n(
            "searchBuilder.conditions.number.notEmpty",
            i.conditions.number.notEmpty
          );
        },
        init: Criteria.initNoValue,
        inputValue: function () {},
        isInputValid: function () {
          return true;
        },
        search: function (t) {
          return !(null === t || void 0 === t || 0 === t.length);
        },
      },
    };
    Criteria.numFmtConditions = {
      "=": {
        conditionName: function (t, i) {
          return t.i18n(
            "searchBuilder.conditions.number.equals",
            i.conditions.number.equals
          );
        },
        init: Criteria.initSelect,
        inputValue: Criteria.inputValueSelect,
        isInputValid: Criteria.isInputValidSelect,
        search: function (t, i) {
          var e =
            0 === t.indexOf("-")
              ? "-" + t.replace(/[^0-9.]/g, "")
              : t.replace(/[^0-9.]/g, "");
          var n =
            0 === i[0].indexOf("-")
              ? "-" + i[0].replace(/[^0-9.]/g, "")
              : i[0].replace(/[^0-9.]/g, "");
          return +e === +n;
        },
      },
      "!=": {
        conditionName: function (t, i) {
          return t.i18n(
            "searchBuilder.conditions.number.not",
            i.conditions.number.not
          );
        },
        init: Criteria.initSelect,
        inputValue: Criteria.inputValueSelect,
        isInputValid: Criteria.isInputValidSelect,
        search: function (t, i) {
          var e =
            0 === t.indexOf("-")
              ? "-" + t.replace(/[^0-9.]/g, "")
              : t.replace(/[^0-9.]/g, "");
          var n =
            0 === i[0].indexOf("-")
              ? "-" + i[0].replace(/[^0-9.]/g, "")
              : i[0].replace(/[^0-9.]/g, "");
          return +e !== +n;
        },
      },
      "<": {
        conditionName: function (t, i) {
          return t.i18n(
            "searchBuilder.conditions.number.lt",
            i.conditions.number.lt
          );
        },
        init: Criteria.initInput,
        inputValue: Criteria.inputValueInput,
        isInputValid: Criteria.isInputValidInput,
        search: function (t, i) {
          var e =
            0 === t.indexOf("-")
              ? "-" + t.replace(/[^0-9.]/g, "")
              : t.replace(/[^0-9.]/g, "");
          var n =
            0 === i[0].indexOf("-")
              ? "-" + i[0].replace(/[^0-9.]/g, "")
              : i[0].replace(/[^0-9.]/g, "");
          return +e < +n;
        },
      },
      "<=": {
        conditionName: function (t, i) {
          return t.i18n(
            "searchBuilder.conditions.number.lte",
            i.conditions.number.lte
          );
        },
        init: Criteria.initInput,
        inputValue: Criteria.inputValueInput,
        isInputValid: Criteria.isInputValidInput,
        search: function (t, i) {
          var e =
            0 === t.indexOf("-")
              ? "-" + t.replace(/[^0-9.]/g, "")
              : t.replace(/[^0-9.]/g, "");
          var n =
            0 === i[0].indexOf("-")
              ? "-" + i[0].replace(/[^0-9.]/g, "")
              : i[0].replace(/[^0-9.]/g, "");
          return +e <= +n;
        },
      },
      ">=": {
        conditionName: function (t, i) {
          return t.i18n(
            "searchBuilder.conditions.number.gte",
            i.conditions.number.gte
          );
        },
        init: Criteria.initInput,
        inputValue: Criteria.inputValueInput,
        isInputValid: Criteria.isInputValidInput,
        search: function (t, i) {
          var e =
            0 === t.indexOf("-")
              ? "-" + t.replace(/[^0-9.]/g, "")
              : t.replace(/[^0-9.]/g, "");
          var n =
            0 === i[0].indexOf("-")
              ? "-" + i[0].replace(/[^0-9.]/g, "")
              : i[0].replace(/[^0-9.]/g, "");
          return +e >= +n;
        },
      },
      ">": {
        conditionName: function (t, i) {
          return t.i18n(
            "searchBuilder.conditions.number.gt",
            i.conditions.number.gt
          );
        },
        init: Criteria.initInput,
        inputValue: Criteria.inputValueInput,
        isInputValid: Criteria.isInputValidInput,
        search: function (t, i) {
          var e =
            0 === t.indexOf("-")
              ? "-" + t.replace(/[^0-9.]/g, "")
              : t.replace(/[^0-9.]/g, "");
          var n =
            0 === i[0].indexOf("-")
              ? "-" + i[0].replace(/[^0-9.]/g, "")
              : i[0].replace(/[^0-9.]/g, "");
          return +e > +n;
        },
      },
      between: {
        conditionName: function (t, i) {
          return t.i18n(
            "searchBuilder.conditions.number.between",
            i.conditions.number.between
          );
        },
        init: Criteria.init2Input,
        inputValue: Criteria.inputValueInput,
        isInputValid: Criteria.isInputValidInput,
        search: function (t, i) {
          var e =
            0 === t.indexOf("-")
              ? "-" + t.replace(/[^0-9.]/g, "")
              : t.replace(/[^0-9.]/g, "");
          var n =
            0 === i[0].indexOf("-")
              ? "-" + i[0].replace(/[^0-9.]/g, "")
              : i[0].replace(/[^0-9.]/g, "");
          var r =
            0 === i[1].indexOf("-")
              ? "-" + i[1].replace(/[^0-9.]/g, "")
              : i[1].replace(/[^0-9.]/g, "");
          return +n < +r ? +n <= +e && +e <= +r : +r <= +e && +e <= +n;
        },
      },
      "!between": {
        conditionName: function (t, i) {
          return t.i18n(
            "searchBuilder.conditions.number.notBetween",
            i.conditions.number.notBetween
          );
        },
        init: Criteria.init2Input,
        inputValue: Criteria.inputValueInput,
        isInputValid: Criteria.isInputValidInput,
        search: function (t, i) {
          var e =
            0 === t.indexOf("-")
              ? "-" + t.replace(/[^0-9.]/g, "")
              : t.replace(/[^0-9.]/g, "");
          var n =
            0 === i[0].indexOf("-")
              ? "-" + i[0].replace(/[^0-9.]/g, "")
              : i[0].replace(/[^0-9.]/g, "");
          var r =
            0 === i[1].indexOf("-")
              ? "-" + i[1].replace(/[^0-9.]/g, "")
              : i[1].replace(/[^0-9.]/g, "");
          return +n < +r ? !(+n <= +e && +e <= +r) : !(+r <= +e && +e <= +n);
        },
      },
      null: {
        conditionName: function (t, i) {
          return t.i18n(
            "searchBuilder.conditions.number.empty",
            i.conditions.number.empty
          );
        },
        init: Criteria.initNoValue,
        inputValue: function () {},
        isInputValid: function () {
          return true;
        },
        search: function (t) {
          return null === t || void 0 === t || 0 === t.length;
        },
      },
      "!null": {
        conditionName: function (t, i) {
          return t.i18n(
            "searchBuilder.conditions.number.notEmpty",
            i.conditions.number.notEmpty
          );
        },
        init: Criteria.initNoValue,
        inputValue: function () {},
        isInputValid: function () {
          return true;
        },
        search: function (t) {
          return !(null === t || void 0 === t || 0 === t.length);
        },
      },
    };
    Criteria.stringConditions = {
      "=": {
        conditionName: function (t, i) {
          return t.i18n(
            "searchBuilder.conditions.string.equals",
            i.conditions.string.equals
          );
        },
        init: Criteria.initSelect,
        inputValue: Criteria.inputValueSelect,
        isInputValid: Criteria.isInputValidSelect,
        search: function (t, i) {
          return t === i[0];
        },
      },
      "!=": {
        conditionName: function (t, i) {
          return t.i18n(
            "searchBuilder.conditions.string.not",
            i.conditions.string.not
          );
        },
        init: Criteria.initSelect,
        inputValue: Criteria.inputValueSelect,
        isInputValid: Criteria.isInputValidInput,
        search: function (t, i) {
          return t !== i[0];
        },
      },
      starts: {
        conditionName: function (t, i) {
          return t.i18n(
            "searchBuilder.conditions.string.startsWith",
            i.conditions.string.startsWith
          );
        },
        init: Criteria.initInput,
        inputValue: Criteria.inputValueInput,
        isInputValid: Criteria.isInputValidInput,
        search: function (t, i) {
          return 0 === t.toLowerCase().indexOf(i[0].toLowerCase());
        },
      },
      "!starts": {
        conditionName: function (t, i) {
          return t.i18n(
            "searchBuilder.conditions.string.notStartsWith",
            i.conditions.string.notStartsWith
          );
        },
        init: Criteria.initInput,
        inputValue: Criteria.inputValueInput,
        isInputValid: Criteria.isInputValidInput,
        search: function (t, i) {
          return 0 !== t.toLowerCase().indexOf(i[0].toLowerCase());
        },
      },
      contains: {
        conditionName: function (t, i) {
          return t.i18n(
            "searchBuilder.conditions.string.contains",
            i.conditions.string.contains
          );
        },
        init: Criteria.initInput,
        inputValue: Criteria.inputValueInput,
        isInputValid: Criteria.isInputValidInput,
        search: function (t, i) {
          return t.toLowerCase().includes(i[0].toLowerCase());
        },
      },
      "!contains": {
        conditionName: function (t, i) {
          return t.i18n(
            "searchBuilder.conditions.string.notContains",
            i.conditions.string.notContains
          );
        },
        init: Criteria.initInput,
        inputValue: Criteria.inputValueInput,
        isInputValid: Criteria.isInputValidInput,
        search: function (t, i) {
          return !t.toLowerCase().includes(i[0].toLowerCase());
        },
      },
      ends: {
        conditionName: function (t, i) {
          return t.i18n(
            "searchBuilder.conditions.string.endsWith",
            i.conditions.string.endsWith
          );
        },
        init: Criteria.initInput,
        inputValue: Criteria.inputValueInput,
        isInputValid: Criteria.isInputValidInput,
        search: function (t, i) {
          return t.toLowerCase().endsWith(i[0].toLowerCase());
        },
      },
      "!ends": {
        conditionName: function (t, i) {
          return t.i18n(
            "searchBuilder.conditions.string.notEndsWith",
            i.conditions.string.notEndsWith
          );
        },
        init: Criteria.initInput,
        inputValue: Criteria.inputValueInput,
        isInputValid: Criteria.isInputValidInput,
        search: function (t, i) {
          return !t.toLowerCase().endsWith(i[0].toLowerCase());
        },
      },
      null: {
        conditionName: function (t, i) {
          return t.i18n(
            "searchBuilder.conditions.string.empty",
            i.conditions.string.empty
          );
        },
        init: Criteria.initNoValue,
        inputValue: function () {},
        isInputValid: function () {
          return true;
        },
        search: function (t) {
          return null === t || void 0 === t || 0 === t.length;
        },
      },
      "!null": {
        conditionName: function (t, i) {
          return t.i18n(
            "searchBuilder.conditions.string.notEmpty",
            i.conditions.string.notEmpty
          );
        },
        init: Criteria.initNoValue,
        inputValue: function () {},
        isInputValid: function () {
          return true;
        },
        search: function (t) {
          return !(null === t || void 0 === t || 0 === t.length);
        },
      },
    };
    Criteria.arrayConditions = {
      contains: {
        conditionName: function (t, i) {
          return t.i18n(
            "searchBuilder.conditions.array.contains",
            i.conditions.array.contains
          );
        },
        init: Criteria.initSelectArray,
        inputValue: Criteria.inputValueSelect,
        isInputValid: Criteria.isInputValidSelect,
        search: function (t, i) {
          return t.includes(i[0]);
        },
      },
      without: {
        conditionName: function (t, i) {
          return t.i18n(
            "searchBuilder.conditions.array.without",
            i.conditions.array.without
          );
        },
        init: Criteria.initSelectArray,
        inputValue: Criteria.inputValueSelect,
        isInputValid: Criteria.isInputValidSelect,
        search: function (t, i) {
          return -1 === t.indexOf(i[0]);
        },
      },
      "=": {
        conditionName: function (t, i) {
          return t.i18n(
            "searchBuilder.conditions.array.equals",
            i.conditions.array.equals
          );
        },
        init: Criteria.initSelect,
        inputValue: Criteria.inputValueSelect,
        isInputValid: Criteria.isInputValidSelect,
        search: function (t, i) {
          if (t.length === i[0].length) {
            for (var e = 0; e < t.length; e++)
              if (t[e] !== i[0][e]) return false;
            return true;
          }
          return false;
        },
      },
      "!=": {
        conditionName: function (t, i) {
          return t.i18n(
            "searchBuilder.conditions.array.not",
            i.conditions.array.not
          );
        },
        init: Criteria.initSelect,
        inputValue: Criteria.inputValueSelect,
        isInputValid: Criteria.isInputValidSelect,
        search: function (t, i) {
          if (t.length === i[0].length) {
            for (var e = 0; e < t.length; e++)
              if (t[e] !== i[0][e]) return true;
            return false;
          }
          return true;
        },
      },
      null: {
        conditionName: function (t, i) {
          return t.i18n(
            "searchBuilder.conditions.array.empty",
            i.conditions.array.empty
          );
        },
        init: Criteria.initNoValue,
        inputValue: function () {},
        isInputValid: function () {
          return true;
        },
        search: function (t) {
          return null === t || void 0 === t || 0 === t.length;
        },
      },
      "!null": {
        conditionName: function (t, i) {
          return t.i18n(
            "searchBuilder.conditions.array.notEmpty",
            i.conditions.array.notEmpty
          );
        },
        init: Criteria.initNoValue,
        inputValue: function () {},
        isInputValid: function () {
          return true;
        },
        search: function (t) {
          return null !== t && void 0 !== t && 0 !== t.length;
        },
      },
    };
    Criteria.defaults = {
      columns: true,
      conditions: {
        array: Criteria.arrayConditions,
        date: Criteria.dateConditions,
        html: Criteria.stringConditions,
        "html-num": Criteria.numConditions,
        "html-num-fmt": Criteria.numFmtConditions,
        luxon: Criteria.luxonDateConditions,
        moment: Criteria.momentDateConditions,
        num: Criteria.numConditions,
        "num-fmt": Criteria.numFmtConditions,
        string: Criteria.stringConditions,
      },
      depthLimit: false,
      enterSearch: false,
      filterChanged: void 0,
      greyscale: false,
      i18n: {
        add: "Add Condition",
        button: { 0: "Search Builder", _: "Search Builder (%d)" },
        clearAll: "Clear All",
        condition: "Condition",
        data: "Data",
        delete: "&times",
        deleteTitle: "Delete filtering rule",
        left: "<",
        leftTitle: "Outdent criteria",
        logicAnd: "And",
        logicOr: "Or",
        right: ">",
        rightTitle: "Indent criteria",
        title: { 0: "Custom Search Builder", _: "Custom Search Builder (%d)" },
        value: "Value",
        valueJoiner: "and",
      },
      logic: "AND",
      orthogonal: { display: "display", search: "filter" },
      preDefined: false,
    };
    return Criteria;
  })();
  var d;
  var l;
  /**
   * Sets the value of jQuery for use in the file
   *
   * @param jq the instance of jQuery to be set
   */ function setJQuery$1(t) {
    d = t;
    l = t.fn.dataTable;
  }
  var u = (function () {
    function Group(t, i, n, r, s, a) {
      void 0 === r && (r = 0);
      void 0 === s && (s = false);
      void 0 === a && (a = 1);
      if (!l || !l.versionCheck || !l.versionCheck("1.10.0"))
        throw new Error("SearchBuilder requires DataTables 1.10 or newer");
      (this || e).classes = d.extend(true, {}, Group.classes);
      (this || e).c = d.extend(true, {}, Group.defaults, i);
      (this || e).s = {
        criteria: [],
        depth: a,
        dt: t,
        index: r,
        isChild: s,
        logic: void 0,
        opts: i,
        preventRedraw: false,
        toDrop: void 0,
        topGroup: n,
      };
      (this || e).dom = {
        add: d("<button/>")
          .addClass((this || e).classes.add)
          .addClass((this || e).classes.button)
          .attr("type", "button"),
        clear: d("<button>&times</button>")
          .addClass((this || e).classes.button)
          .addClass((this || e).classes.clearGroup)
          .attr("type", "button"),
        container: d("<div/>").addClass((this || e).classes.group),
        logic: d("<button><div/></button>")
          .addClass((this || e).classes.logic)
          .addClass((this || e).classes.button)
          .attr("type", "button"),
        logicContainer: d("<div/>").addClass(
          (this || e).classes.logicContainer
        ),
      };
      void 0 === (this || e).s.topGroup &&
        ((this || e).s.topGroup = (this || e).dom.container);
      this._setup();
      return this || e;
    }
    Group.prototype.destroy = function () {
      (this || e).dom.add.off(".dtsb");
      (this || e).dom.logic.off(".dtsb");
      (this || e).dom.container.trigger("dtsb-destroy").remove();
      (this || e).s.criteria = [];
    };
    Group.prototype.getDetails = function (t) {
      void 0 === t && (t = false);
      if (0 === (this || e).s.criteria.length) return {};
      var i = { criteria: [], logic: (this || e).s.logic };
      for (var n = 0, r = (this || e).s.criteria; n < r.length; n++) {
        var s = r[n];
        i.criteria.push(s.criteria.getDetails(t));
      }
      return i;
    };
    /**
     * Getter for the node for the container of the group
     *
     * @returns Node for the container of the group
     */ Group.prototype.getNode = function () {
      return (this || e).dom.container;
    };
    /**
     * Rebuilds the group based upon the details passed in
     *
     * @param loadedDetails the details required to rebuild the group
     */ Group.prototype.rebuild = function (t) {
      if (
        !(
          void 0 === t.criteria ||
          null === t.criteria ||
          (Array.isArray(t.criteria) && 0 === t.criteria.length)
        )
      ) {
        (this || e).s.logic = t.logic;
        (this || e).dom.logic
          .children()
          .first()
          .text(
            "OR" === (this || e).s.logic
              ? (this || e).s.dt.i18n(
                  "searchBuilder.logicOr",
                  (this || e).c.i18n.logicOr
                )
              : (this || e).s.dt.i18n(
                  "searchBuilder.logicAnd",
                  (this || e).c.i18n.logicAnd
                )
          );
        if (Array.isArray(t.criteria))
          for (var i = 0, n = t.criteria; i < n.length; i++) {
            var r = n[i];
            void 0 !== r.logic
              ? this._addPrevGroup(r)
              : void 0 === r.logic && this._addPrevCriteria(r);
          }
        for (var s = 0, a = (this || e).s.criteria; s < a.length; s++) {
          r = a[s];
          if (r.criteria instanceof o) {
            r.criteria.updateArrows((this || e).s.criteria.length > 1, false);
            this._setCriteriaListeners(r.criteria);
          }
        }
      }
    };
    Group.prototype.redrawContents = function () {
      if (!(this || e).s.preventRedraw) {
        (this || e).dom.container.children().detach();
        (this || e).dom.container
          .append((this || e).dom.logicContainer)
          .append((this || e).dom.add);
        (this || e).s.criteria.sort(function (t, i) {
          return t.criteria.s.index < i.criteria.s.index
            ? -1
            : t.criteria.s.index > i.criteria.s.index
            ? 1
            : 0;
        });
        this.setListeners();
        for (var t = 0; t < (this || e).s.criteria.length; t++) {
          var i = (this || e).s.criteria[t].criteria;
          if (i instanceof o) {
            (this || e).s.criteria[t].index = t;
            (this || e).s.criteria[t].criteria.s.index = t;
            (this || e).s.criteria[t].criteria.dom.container.insertBefore(
              (this || e).dom.add
            );
            this._setCriteriaListeners(i);
            (this || e).s.criteria[t].criteria.rebuild(
              (this || e).s.criteria[t].criteria.getDetails()
            );
          } else if (i instanceof Group && i.s.criteria.length > 0) {
            (this || e).s.criteria[t].index = t;
            (this || e).s.criteria[t].criteria.s.index = t;
            (this || e).s.criteria[t].criteria.dom.container.insertBefore(
              (this || e).dom.add
            );
            i.redrawContents();
            this._setGroupListeners(i);
          } else {
            (this || e).s.criteria.splice(t, 1);
            t--;
          }
        }
        this.setupLogic();
      }
    };
    Group.prototype.redrawLogic = function () {
      for (var t = 0, i = (this || e).s.criteria; t < i.length; t++) {
        var n = i[t];
        n instanceof Group && n.redrawLogic();
      }
      this.setupLogic();
    };
    /**
     * Search method, checking the row data against the criteria in the group
     *
     * @param rowData The row data to be compared
     * @returns boolean The result of the search
     */ Group.prototype.search = function (t, i) {
      return "AND" === (this || e).s.logic
        ? this._andSearch(t, i)
        : "OR" !== (this || e).s.logic || this._orSearch(t, i);
    };
    Group.prototype.setupLogic = function () {
      (this || e).dom.logicContainer.remove();
      (this || e).dom.clear.remove();
      if ((this || e).s.criteria.length < 1) {
        if (!(this || e).s.isChild) {
          (this || e).dom.container.trigger("dtsb-destroy");
          (this || e).dom.container.css("margin-left", 0);
        }
      } else {
        var t = (this || e).dom.container.height() - 1;
        (this || e).dom.clear.height("0px");
        (this || e).dom.logicContainer.append((this || e).dom.clear).width(t);
        (this || e).dom.container.prepend((this || e).dom.logicContainer);
        this._setLogicListener();
        (this || e).dom.container.css(
          "margin-left",
          (this || e).dom.logicContainer.outerHeight(true)
        );
        var i = (this || e).dom.logicContainer.offset();
        var n = i.left;
        var r = (this || e).dom.container.offset().left;
        var s = n - r;
        var a = n - s - (this || e).dom.logicContainer.outerHeight(true);
        (this || e).dom.logicContainer.offset({ left: a });
        var o = (this || e).dom.logicContainer.next();
        var l = i.top;
        var u = d(o).offset().top;
        var c = l - u;
        var h = l - c;
        (this || e).dom.logicContainer.offset({ top: h });
        (this || e).dom.clear.outerHeight(
          (this || e).dom.logicContainer.height()
        );
        this._setClearListener();
      }
    };
    Group.prototype.setListeners = function () {
      var t = this || e;
      (this || e).dom.add.unbind("click");
      (this || e).dom.add.on("click.dtsb", function () {
        t.s.isChild || t.dom.container.prepend(t.dom.logicContainer);
        t.addCriteria();
        t.dom.container.trigger("dtsb-add");
        t.s.dt.state.save();
        return false;
      });
      for (var i = 0, n = (this || e).s.criteria; i < n.length; i++) {
        var r = n[i];
        r.criteria.setListeners();
      }
      this._setClearListener();
      this._setLogicListener();
    };
    /**
     * Adds a criteria to the group
     *
     * @param crit Instance of Criteria to be added to the group
     */ Group.prototype.addCriteria = function (t, i) {
      void 0 === t && (t = null);
      void 0 === i && (i = true);
      var n = null === t ? (this || e).s.criteria.length : t.s.index;
      var r = new o(
        (this || e).s.dt,
        (this || e).s.opts,
        (this || e).s.topGroup,
        n,
        (this || e).s.depth
      );
      if (null !== t) {
        r.c = t.c;
        r.s = t.s;
        r.s.depth = (this || e).s.depth;
        r.classes = t.classes;
      }
      r.populate();
      var s = false;
      for (var a = 0; a < (this || e).s.criteria.length; a++)
        if (0 === a && (this || e).s.criteria[a].criteria.s.index > r.s.index) {
          r.getNode().insertBefore(
            (this || e).s.criteria[a].criteria.dom.container
          );
          s = true;
        } else if (
          a < (this || e).s.criteria.length - 1 &&
          (this || e).s.criteria[a].criteria.s.index < r.s.index &&
          (this || e).s.criteria[a + 1].criteria.s.index > r.s.index
        ) {
          r.getNode().insertAfter(
            (this || e).s.criteria[a].criteria.dom.container
          );
          s = true;
        }
      s || r.getNode().insertBefore((this || e).dom.add);
      (this || e).s.criteria.push({ criteria: r, index: n });
      (this || e).s.criteria = (this || e).s.criteria.sort(function (t, i) {
        return t.criteria.s.index - i.criteria.s.index;
      });
      for (var d = 0, l = (this || e).s.criteria; d < l.length; d++) {
        var u = l[d];
        u.criteria instanceof o &&
          u.criteria.updateArrows((this || e).s.criteria.length > 1, i);
      }
      this._setCriteriaListeners(r);
      r.setListeners();
      this.setupLogic();
    };
    Group.prototype.checkFilled = function () {
      for (var t = 0, i = (this || e).s.criteria; t < i.length; t++) {
        var n = i[t];
        if (
          (n.criteria instanceof o && n.criteria.s.filled) ||
          (n.criteria instanceof Group && n.criteria.checkFilled())
        )
          return true;
      }
      return false;
    };
    Group.prototype.count = function () {
      var t = 0;
      for (var i = 0, n = (this || e).s.criteria; i < n.length; i++) {
        var r = n[i];
        r.criteria instanceof Group ? (t += r.criteria.count()) : t++;
      }
      return t;
    };
    /**
     * Rebuilds a sub group that previously existed
     *
     * @param loadedGroup The details of a group within this group
     */ Group.prototype._addPrevGroup = function (t) {
      var i = (this || e).s.criteria.length;
      var n = new Group(
        (this || e).s.dt,
        (this || e).c,
        (this || e).s.topGroup,
        i,
        true,
        (this || e).s.depth + 1
      );
      (this || e).s.criteria.push({ criteria: n, index: i, logic: n.s.logic });
      n.rebuild(t);
      (this || e).s.criteria[i].criteria = n;
      (this || e).s.topGroup.trigger("dtsb-redrawContents");
      this._setGroupListeners(n);
    };
    /**
     * Rebuilds a criteria of this group that previously existed
     *
     * @param loadedCriteria The details of a criteria within the group
     */ Group.prototype._addPrevCriteria = function (t) {
      var i = (this || e).s.criteria.length;
      var n = new o(
        (this || e).s.dt,
        (this || e).s.opts,
        (this || e).s.topGroup,
        i,
        (this || e).s.depth
      );
      n.populate();
      (this || e).s.criteria.push({ criteria: n, index: i });
      n.rebuild(t);
      (this || e).s.criteria[i].criteria = n;
      (this || e).s.topGroup.trigger("dtsb-redrawContents");
    };
    /**
     * Checks And the criteria using AND logic
     *
     * @param rowData The row data to be checked against the search criteria
     * @returns boolean The result of the AND search
     */ Group.prototype._andSearch = function (t, i) {
      if (0 === (this || e).s.criteria.length) return true;
      for (var n = 0, r = (this || e).s.criteria; n < r.length; n++) {
        var s = r[n];
        if (
          (!(s.criteria instanceof o) || s.criteria.s.filled) &&
          !s.criteria.search(t, i)
        )
          return false;
      }
      return true;
    };
    /**
     * Checks And the criteria using OR logic
     *
     * @param rowData The row data to be checked against the search criteria
     * @returns boolean The result of the OR search
     */ Group.prototype._orSearch = function (t, i) {
      if (0 === (this || e).s.criteria.length) return true;
      var n = false;
      for (var r = 0, s = (this || e).s.criteria; r < s.length; r++) {
        var a = s[r];
        if (a.criteria instanceof o && a.criteria.s.filled) {
          n = true;
          if (a.criteria.search(t, i)) return true;
        } else if (a.criteria instanceof Group && a.criteria.checkFilled()) {
          n = true;
          if (a.criteria.search(t, i)) return true;
        }
      }
      return !n;
    };
    /**
     * Removes a criteria from the group
     *
     * @param criteria The criteria instance to be removed
     */ Group.prototype._removeCriteria = function (t, i) {
      void 0 === i && (i = false);
      if ((this || e).s.criteria.length <= 1 && (this || e).s.isChild)
        this.destroy();
      else {
        var n = void 0;
        for (var r = 0; r < (this || e).s.criteria.length; r++)
          (this || e).s.criteria[r].index === t.s.index &&
            (!i || (this || e).s.criteria[r].criteria instanceof Group) &&
            (n = r);
        void 0 !== n && (this || e).s.criteria.splice(n, 1);
        for (r = 0; r < (this || e).s.criteria.length; r++) {
          (this || e).s.criteria[r].index = r;
          (this || e).s.criteria[r].criteria.s.index = r;
        }
      }
    };
    /**
     * Sets the listeners in group for a criteria
     *
     * @param criteria The criteria for the listeners to be set on
     */ Group.prototype._setCriteriaListeners = function (t) {
      var i = this || e;
      t.dom.delete.unbind("click").on("click.dtsb", function () {
        i._removeCriteria(t);
        t.dom.container.remove();
        for (var e = 0, n = i.s.criteria; e < n.length; e++) {
          var r = n[e];
          r.criteria instanceof o &&
            r.criteria.updateArrows(i.s.criteria.length > 1);
        }
        t.destroy();
        i.s.dt.draw();
        i.s.topGroup.trigger("dtsb-redrawContents");
        i.s.topGroup.trigger("dtsb-updateTitle");
        return false;
      });
      t.dom.right.unbind("click").on("click.dtsb", function () {
        var e = t.s.index;
        var n = new Group(
          i.s.dt,
          i.s.opts,
          i.s.topGroup,
          t.s.index,
          true,
          i.s.depth + 1
        );
        n.addCriteria(t);
        i.s.criteria[e].criteria = n;
        i.s.criteria[e].logic = "AND";
        i.s.topGroup.trigger("dtsb-redrawContents");
        i._setGroupListeners(n);
        return false;
      });
      t.dom.left.unbind("click").on("click.dtsb", function () {
        i.s.toDrop = new o(i.s.dt, i.s.opts, i.s.topGroup, t.s.index);
        i.s.toDrop.s = t.s;
        i.s.toDrop.c = t.c;
        i.s.toDrop.classes = t.classes;
        i.s.toDrop.populate();
        var e = i.s.toDrop.s.index;
        i.dom.container.trigger("dtsb-dropCriteria");
        t.s.index = e;
        i._removeCriteria(t);
        i.s.topGroup.trigger("dtsb-redrawContents");
        i.s.dt.draw();
        return false;
      });
    };
    Group.prototype._setClearListener = function () {
      var t = this || e;
      (this || e).dom.clear.unbind("click").on("click.dtsb", function () {
        if (!t.s.isChild) {
          t.dom.container.trigger("dtsb-clearContents");
          return false;
        }
        t.destroy();
        t.s.topGroup.trigger("dtsb-updateTitle");
        t.s.topGroup.trigger("dtsb-redrawContents");
        return false;
      });
    };
    /**
     * Sets listeners for sub groups of this group
     *
     * @param group The sub group that the listeners are to be set on
     */ Group.prototype._setGroupListeners = function (t) {
      var i = this || e;
      t.dom.add.unbind("click").on("click.dtsb", function () {
        i.setupLogic();
        i.dom.container.trigger("dtsb-add");
        return false;
      });
      t.dom.container.unbind("dtsb-add").on("dtsb-add.dtsb", function () {
        i.setupLogic();
        i.dom.container.trigger("dtsb-add");
        return false;
      });
      t.dom.container
        .unbind("dtsb-destroy")
        .on("dtsb-destroy.dtsb", function () {
          i._removeCriteria(t, true);
          t.dom.container.remove();
          i.setupLogic();
          return false;
        });
      t.dom.container
        .unbind("dtsb-dropCriteria")
        .on("dtsb-dropCriteria.dtsb", function () {
          var e = t.s.toDrop;
          e.s.index = t.s.index;
          e.updateArrows(i.s.criteria.length > 1, false);
          i.addCriteria(e, false);
          return false;
        });
      t.setListeners();
    };
    Group.prototype._setup = function () {
      this.setListeners();
      (this || e).dom.add.text(
        (this || e).s.dt.i18n("searchBuilder.add", (this || e).c.i18n.add)
      );
      (this || e).dom.logic
        .children()
        .first()
        .text(
          "OR" === (this || e).c.logic
            ? (this || e).s.dt.i18n(
                "searchBuilder.logicOr",
                (this || e).c.i18n.logicOr
              )
            : (this || e).s.dt.i18n(
                "searchBuilder.logicAnd",
                (this || e).c.i18n.logicAnd
              )
        );
      (this || e).s.logic = "OR" === (this || e).c.logic ? "OR" : "AND";
      (this || e).c.greyscale &&
        (this || e).dom.logic.addClass((this || e).classes.greyscale);
      (this || e).dom.logicContainer
        .append((this || e).dom.logic)
        .append((this || e).dom.clear);
      (this || e).s.isChild &&
        (this || e).dom.container.append((this || e).dom.logicContainer);
      (this || e).dom.container.append((this || e).dom.add);
    };
    Group.prototype._setLogicListener = function () {
      var t = this || e;
      (this || e).dom.logic.unbind("click").on("click.dtsb", function () {
        t._toggleLogic();
        t.s.dt.draw();
        for (var i = 0, e = t.s.criteria; i < e.length; i++) {
          var n = e[i];
          n.criteria.setListeners();
        }
      });
    };
    Group.prototype._toggleLogic = function () {
      if ("OR" === (this || e).s.logic) {
        (this || e).s.logic = "AND";
        (this || e).dom.logic
          .children()
          .first()
          .text(
            (this || e).s.dt.i18n(
              "searchBuilder.logicAnd",
              (this || e).c.i18n.logicAnd
            )
          );
      } else if ("AND" === (this || e).s.logic) {
        (this || e).s.logic = "OR";
        (this || e).dom.logic
          .children()
          .first()
          .text(
            (this || e).s.dt.i18n(
              "searchBuilder.logicOr",
              (this || e).c.i18n.logicOr
            )
          );
      }
    };
    Group.version = "1.1.0";
    Group.classes = {
      add: "dtsb-add",
      button: "dtsb-button",
      clearGroup: "dtsb-clearGroup",
      greyscale: "dtsb-greyscale",
      group: "dtsb-group",
      inputButton: "dtsb-iptbtn",
      logic: "dtsb-logic",
      logicContainer: "dtsb-logicContainer",
    };
    Group.defaults = {
      columns: true,
      conditions: {
        date: o.dateConditions,
        html: o.stringConditions,
        "html-num": o.numConditions,
        "html-num-fmt": o.numFmtConditions,
        luxon: o.luxonDateConditions,
        moment: o.momentDateConditions,
        num: o.numConditions,
        "num-fmt": o.numFmtConditions,
        string: o.stringConditions,
      },
      depthLimit: false,
      enterSearch: false,
      filterChanged: void 0,
      greyscale: false,
      i18n: {
        add: "Add Condition",
        button: { 0: "Search Builder", _: "Search Builder (%d)" },
        clearAll: "Clear All",
        condition: "Condition",
        data: "Data",
        delete: "&times",
        deleteTitle: "Delete filtering rule",
        left: "<",
        leftTitle: "Outdent criteria",
        logicAnd: "And",
        logicOr: "Or",
        right: ">",
        rightTitle: "Indent criteria",
        title: { 0: "Custom Search Builder", _: "Custom Search Builder (%d)" },
        value: "Value",
        valueJoiner: "and",
      },
      logic: "AND",
      orthogonal: { display: "display", search: "filter" },
      preDefined: false,
    };
    return Group;
  })();
  var c;
  var h;
  /**
   * Sets the value of jQuery for use in the file
   *
   * @param jq the instance of jQuery to be set
   */ function setJQuery(t) {
    c = t;
    h = t.fn.DataTable;
  }
  var p = (function () {
    function SearchBuilder(t, i) {
      var n = this || e;
      if (!h || !h.versionCheck || !h.versionCheck("1.10.0"))
        throw new Error("SearchBuilder requires DataTables 1.10 or newer");
      var r = new h.Api(t);
      (this || e).classes = c.extend(true, {}, SearchBuilder.classes);
      (this || e).c = c.extend(true, {}, SearchBuilder.defaults, i);
      (this || e).dom = {
        clearAll: c(
          '<button type="button">' +
            r.i18n("searchBuilder.clearAll", (this || e).c.i18n.clearAll) +
            "</button>"
        )
          .addClass((this || e).classes.clearAll)
          .addClass((this || e).classes.button)
          .attr("type", "button"),
        container: c("<div/>").addClass((this || e).classes.container),
        title: c("<div/>").addClass((this || e).classes.title),
        titleRow: c("<div/>").addClass((this || e).classes.titleRow),
        topGroup: void 0,
      };
      (this || e).s = { dt: r, opts: i, search: void 0, topGroup: void 0 };
      if (void 0 === r.settings()[0]._searchBuilder) {
        r.settings()[0]._searchBuilder = this || e;
        (this || e).s.dt.settings()[0]._bInitComplete
          ? this._setUp()
          : r.one("init.dt", function () {
              n._setUp();
            });
        return this || e;
      }
    }
    SearchBuilder.prototype.getDetails = function (t) {
      void 0 === t && (t = false);
      return (this || e).s.topGroup.getDetails(t);
    };
    /**
     * Getter for the node of the container for the searchBuilder
     *
     * @returns JQuery<HTMLElement> the node of the container
     */ SearchBuilder.prototype.getNode = function () {
      return (this || e).dom.container;
    };
    /**
     * Rebuilds the SearchBuilder to a state that is provided
     *
     * @param details The details required to perform a rebuild
     */ SearchBuilder.prototype.rebuild = function (t) {
      (this || e).dom.clearAll.click();
      if (void 0 === t || null === t) return this || e;
      (this || e).s.topGroup.s.preventRedraw = true;
      (this || e).s.topGroup.rebuild(t);
      (this || e).s.topGroup.s.preventRedraw = false;
      (this || e).s.topGroup.redrawContents();
      (this || e).s.dt.draw(false);
      (this || e).s.topGroup.setListeners();
      return this || e;
    };
    /**
     * Applies the defaults to preDefined criteria
     *
     * @param preDef the array of criteria to be processed.
     */ SearchBuilder.prototype._applyPreDefDefaults = function (t) {
      var i = this || e;
      void 0 !== t.criteria && void 0 === t.logic && (t.logic = "AND");
      var _loop_1 = function (t) {
        void 0 !== t.criteria
          ? (t = n._applyPreDefDefaults(t))
          : n.s.dt.columns().every(function (e) {
              i.s.dt.settings()[0].aoColumns[e].sTitle === t.data &&
                (t.dataIdx = e);
            });
      };
      var n = this || e;
      for (var r = 0, s = t.criteria; r < s.length; r++) {
        var a = s[r];
        _loop_1(a);
      }
      return t;
    };
    SearchBuilder.prototype._setUp = function (t) {
      var i = this || e;
      void 0 === t && (t = true);
      c.fn.DataTable.Api.registerPlural(
        "columns().type()",
        "column().type()",
        function () {
          return this.iterator(
            "column",
            function (t, i) {
              return t.aoColumns[i].sType;
            },
            1
          );
        }
      );
      if (!h.DateTime) {
        var n = (this || e).s.dt.columns().type().toArray();
        if (void 0 === n || n.includes(void 0) || n.includes(null)) {
          n = [];
          for (
            var r = 0, s = (this || e).s.dt.settings()[0].aoColumns;
            r < s.length;
            r++
          ) {
            var a = s[r];
            n.push(
              void 0 !== a.searchBuilderType ? a.searchBuilderType : a.sType
            );
          }
        }
        var o = (this || e).s.dt.columns().toArray();
        if (void 0 === n || n.includes(void 0) || n.includes(null)) {
          c.fn.dataTable.ext.oApi._fnColumnTypes(
            (this || e).s.dt.settings()[0]
          );
          n = (this || e).s.dt.columns().type().toArray();
        }
        for (var d = 0; d < o[0].length; d++) {
          var l = o[0][d];
          var p = n[l];
          if (
            (true === (this || e).c.columns ||
              (Array.isArray((this || e).c.columns) &&
                (this || e).c.columns.includes(d))) &&
            (p.includes("date") || p.includes("moment") || p.includes("luxon"))
          ) {
            alert("SearchBuilder Requires DateTime when used with dates.");
            throw new Error("SearchBuilder requires DateTime");
          }
        }
      }
      (this || e).s.topGroup = new u((this || e).s.dt, (this || e).c, void 0);
      this._setClearListener();
      (this || e).s.dt.on("stateSaveParams.dtsb", function (t, e, n) {
        n.searchBuilder = i.getDetails();
        n.page = i.s.dt.page();
      });
      (this || e).s.dt.on("stateLoadParams.dtsb", function (t, e, n) {
        i.rebuild(n.searchBuilder);
      });
      this._build();
      (this || e).s.dt.on("preXhr.dtsb", function (t, e, n) {
        i.s.dt.page.info().serverSide &&
          (n.searchBuilder = i._collapseArray(i.getDetails(true)));
      });
      if (t) {
        var f = (this || e).s.dt.state.loaded();
        if (null !== f && void 0 !== f.searchBuilder) {
          (this || e).s.topGroup.rebuild(f.searchBuilder);
          (this || e).s.topGroup.dom.container.trigger("dtsb-redrawContents");
          (this || e).s.dt.page(f.page).draw("page");
          (this || e).s.topGroup.setListeners();
        } else if (false !== (this || e).c.preDefined) {
          (this || e).c.preDefined = this._applyPreDefDefaults(
            (this || e).c.preDefined
          );
          this.rebuild((this || e).c.preDefined);
        }
      }
      this._setEmptyListener();
      (this || e).s.dt.state.save();
    };
    SearchBuilder.prototype._collapseArray = function (t) {
      if (void 0 === t.logic) {
        if (void 0 !== t.value) {
          t.value.sort(function (t, i) {
            if (!isNaN(+t)) {
              t = +t;
              i = +i;
            }
            return t < i ? -1 : i < t ? 1 : 0;
          });
          t.value1 = t.value[0];
          t.value2 = t.value[1];
        }
      } else
        for (var i = 0; i < t.criteria.length; i++)
          t.criteria[i] = this._collapseArray(t.criteria[i]);
      return t;
    };
    /**
     * Updates the title of the SearchBuilder
     *
     * @param count the number of filters in the SearchBuilder
     */ SearchBuilder.prototype._updateTitle = function (t) {
      (this || e).dom.title.html(
        (this || e).s.dt.i18n(
          "searchBuilder.title",
          (this || e).c.i18n.title,
          t
        )
      );
    };
    SearchBuilder.prototype._build = function () {
      var t = this || e;
      (this || e).dom.clearAll.remove();
      (this || e).dom.container.empty();
      var i = (this || e).s.topGroup.count();
      this._updateTitle(i);
      (this || e).dom.titleRow.append((this || e).dom.title);
      (this || e).dom.container.append((this || e).dom.titleRow);
      (this || e).dom.topGroup = (this || e).s.topGroup.getNode();
      (this || e).dom.container.append((this || e).dom.topGroup);
      this._setRedrawListener();
      var n = (this || e).s.dt.table(0).node();
      if (!c.fn.dataTable.ext.search.includes((this || e).s.search)) {
        (this || e).s.search = function (i, e, r) {
          return i.nTable !== n || t.s.topGroup.search(e, r);
        };
        c.fn.dataTable.ext.search.push((this || e).s.search);
      }
      (this || e).s.dt.on("destroy.dtsb", function () {
        t.dom.container.remove();
        t.dom.clearAll.remove();
        var i = c.fn.dataTable.ext.search.indexOf(t.s.search);
        while (-1 !== i) {
          c.fn.dataTable.ext.search.splice(i, 1);
          i = c.fn.dataTable.ext.search.indexOf(t.s.search);
        }
        t.s.dt.off(".dtsb");
        c(t.s.dt.table().node()).off(".dtsb");
      });
    };
    SearchBuilder.prototype._checkClear = function () {
      if ((this || e).s.topGroup.s.criteria.length > 0) {
        (this || e).dom.clearAll.insertAfter((this || e).dom.title);
        this._setClearListener();
      } else (this || e).dom.clearAll.remove();
    };
    /**
     * Update the count in the title/button
     *
     * @param count Number of filters applied
     */ SearchBuilder.prototype._filterChanged = function (t) {
      var i = (this || e).c.filterChanged;
      "function" === typeof i &&
        i(
          t,
          (this || e).s.dt.i18n(
            "searchBuilder.button",
            (this || e).c.i18n.button,
            t
          )
        );
    };
    SearchBuilder.prototype._setClearListener = function () {
      var t = this || e;
      (this || e).dom.clearAll.unbind("click");
      (this || e).dom.clearAll.on("click.dtsb", function () {
        t.s.topGroup = new u(t.s.dt, t.c, void 0);
        t._build();
        t.s.dt.draw();
        t.s.topGroup.setListeners();
        t.dom.clearAll.remove();
        t._setEmptyListener();
        t._filterChanged(0);
        return false;
      });
    };
    SearchBuilder.prototype._setRedrawListener = function () {
      var t = this || e;
      (this || e).s.topGroup.dom.container.unbind("dtsb-redrawContents");
      (this || e).s.topGroup.dom.container.on(
        "dtsb-redrawContents.dtsb",
        function () {
          t._checkClear();
          t.s.topGroup.redrawContents();
          t.s.topGroup.setupLogic();
          t._setEmptyListener();
          var i = t.s.topGroup.count();
          t._updateTitle(i);
          t._filterChanged(i);
          t.s.dt.draw();
          t.s.dt.state.save();
        }
      );
      (this || e).s.topGroup.dom.container.unbind("dtsb-redrawLogic");
      (this || e).s.topGroup.dom.container.on(
        "dtsb-redrawLogic.dtsb",
        function () {
          t.s.topGroup.redrawLogic();
          var i = t.s.topGroup.count();
          t._updateTitle(i);
          t._filterChanged(i);
        }
      );
      (this || e).s.topGroup.dom.container.unbind("dtsb-add");
      (this || e).s.topGroup.dom.container.on("dtsb-add.dtsb", function () {
        var i = t.s.topGroup.count();
        t._updateTitle(i);
        t._filterChanged(i);
      });
      (this || e).s.dt.on(
        "postEdit.dtsb postCreate.dtsb postRemove.dtsb",
        function () {
          t.s.topGroup.redrawContents();
        }
      );
      (this || e).s.topGroup.dom.container.unbind("dtsb-clearContents");
      (this || e).s.topGroup.dom.container.on(
        "dtsb-clearContents.dtsb",
        function () {
          t._setUp(false);
          t._filterChanged(0);
          t.s.dt.draw();
        }
      );
      (this || e).s.topGroup.dom.container.on(
        "dtsb-updateTitle.dtsb",
        function () {
          var i = t.s.topGroup.count();
          t._updateTitle(i);
          t._filterChanged(i);
        }
      );
    };
    SearchBuilder.prototype._setEmptyListener = function () {
      var t = this || e;
      (this || e).s.topGroup.dom.add.on("click.dtsb", function () {
        t._checkClear();
      });
      (this || e).s.topGroup.dom.container.on("dtsb-destroy.dtsb", function () {
        t.dom.clearAll.remove();
      });
    };
    SearchBuilder.version = "1.3.0";
    SearchBuilder.classes = {
      button: "dtsb-button",
      clearAll: "dtsb-clearAll",
      container: "dtsb-searchBuilder",
      inputButton: "dtsb-iptbtn",
      title: "dtsb-title",
      titleRow: "dtsb-titleRow",
    };
    SearchBuilder.defaults = {
      columns: true,
      conditions: {
        date: o.dateConditions,
        html: o.stringConditions,
        "html-num": o.numConditions,
        "html-num-fmt": o.numFmtConditions,
        luxon: o.luxonDateConditions,
        moment: o.momentDateConditions,
        num: o.numConditions,
        "num-fmt": o.numFmtConditions,
        string: o.stringConditions,
      },
      depthLimit: false,
      enterSearch: false,
      filterChanged: void 0,
      greyscale: false,
      i18n: {
        add: "Add Condition",
        button: { 0: "Search Builder", _: "Search Builder (%d)" },
        clearAll: "Clear All",
        condition: "Condition",
        conditions: {
          array: {
            contains: "Contains",
            empty: "Empty",
            equals: "Equals",
            not: "Not",
            notEmpty: "Not Empty",
            without: "Without",
          },
          date: {
            after: "After",
            before: "Before",
            between: "Between",
            empty: "Empty",
            equals: "Equals",
            not: "Not",
            notBetween: "Not Between",
            notEmpty: "Not Empty",
          },
          number: {
            between: "Between",
            empty: "Empty",
            equals: "Equals",
            gt: "Greater Than",
            gte: "Greater Than Equal To",
            lt: "Less Than",
            lte: "Less Than Equal To",
            not: "Not",
            notBetween: "Not Between",
            notEmpty: "Not Empty",
          },
          string: {
            contains: "Contains",
            empty: "Empty",
            endsWith: "Ends With",
            equals: "Equals",
            not: "Not",
            notContains: "Does Not Contain",
            notEmpty: "Not Empty",
            notEndsWith: "Does Not End With",
            notStartsWith: "Does Not Start With",
            startsWith: "Starts With",
          },
        },
        data: "Data",
        delete: "&times",
        deleteTitle: "Delete filtering rule",
        left: "<",
        leftTitle: "Outdent criteria",
        logicAnd: "And",
        logicOr: "Or",
        right: ">",
        rightTitle: "Indent criteria",
        title: { 0: "Custom Search Builder", _: "Custom Search Builder (%d)" },
        value: "Value",
        valueJoiner: "and",
      },
      logic: "AND",
      orthogonal: { display: "display", search: "filter" },
      preDefined: false,
    };
    return SearchBuilder;
  })();
  (function (t) {
    n = function (e, n) {
      e || (e = window);
      (n && n.fn.dataTable) || (n = i(e, n).$);
      return t(n, e, e.document);
    };
  })(function (t, i, n) {
    setJQuery(t);
    setJQuery$1(t);
    setJQuery$2(t);
    var r = t.fn.dataTable;
    t.fn.dataTable.SearchBuilder = p;
    t.fn.DataTable.SearchBuilder = p;
    t.fn.dataTable.Group = u;
    t.fn.DataTable.Group = u;
    t.fn.dataTable.Criteria = o;
    t.fn.DataTable.Criteria = o;
    var s = t.fn.dataTable.Api.register;
    t.fn.dataTable.ext.searchBuilder = { conditions: {} };
    t.fn.dataTable.ext.buttons.searchBuilder = {
      action: function (i, e, n, r) {
        this.popover(r._searchBuilder.getNode(), { align: "dt-container" });
        void 0 !== r._searchBuilder.s.topGroup &&
          r._searchBuilder.s.topGroup.dom.container.trigger(
            "dtsb-redrawContents"
          );
        0 === r._searchBuilder.s.topGroup.s.criteria.length &&
          t("." + t.fn.dataTable.Group.classes.add).click();
      },
      config: {},
      init: function (i, e, n) {
        var r = new t.fn.dataTable.SearchBuilder(
          i,
          t.extend(
            {
              filterChanged: function (t, n) {
                i.button(e).text(n);
              },
            },
            n.config
          )
        );
        i.button(e).text(
          n.text || i.i18n("searchBuilder.button", r.c.i18n.button, 0)
        );
        n._searchBuilder = r;
      },
      text: null,
    };
    s("searchBuilder.getDetails()", function (t) {
      void 0 === t && (t = false);
      var i = (this || e).context[0];
      return i._searchBuilder ? i._searchBuilder.getDetails(t) : null;
    });
    s("searchBuilder.rebuild()", function (t) {
      var i = (this || e).context[0];
      if (void 0 === i._searchBuilder) return null;
      i._searchBuilder.rebuild(t);
      return this || e;
    });
    s("searchBuilder.container()", function () {
      var t = (this || e).context[0];
      return t._searchBuilder ? t._searchBuilder.getNode() : null;
    });
    /**
     * Init function for SearchBuilder
     *
     * @param settings the settings to be applied
     * @param options the options for SearchBuilder
     * @returns JQUERY<HTMLElement> Returns the node of the SearchBuilder
     */ function _init(t, i) {
      var e = new r.Api(t);
      var n = i || e.init().searchBuilder || r.defaults.searchBuilder;
      var s = new p(e, n);
      var a = s.getNode();
      return a;
    }
    t(n).on("preInit.dt.dtsp", function (t, i) {
      "dt" === t.namespace &&
        (i.oInit.searchBuilder || r.defaults.searchBuilder) &&
        (i._searchBuilder || _init(i));
    });
    r.ext.feature.push({ cFeature: "Q", fnInit: _init });
    r.ext.features && r.ext.features.register("searchBuilder", _init);
  });
})();
var r = n;
export { r as default };
