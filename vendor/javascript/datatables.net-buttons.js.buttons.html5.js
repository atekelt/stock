import * as e from "datatables.net";
import * as t from "datatables.net-buttons";

var l = "default" in e ? e.default : e;
var o = "default" in t ? t.default : t;
var r =
  "undefined" !== typeof globalThis
    ? globalThis
    : "undefined" !== typeof self
    ? self
    : global;
var a = {};
(function (e) {
  a = function (t, r, a, n) {
    t || (t = window);
    (r && r.fn.dataTable) || (r = l(t, r).$);
    r.fn.dataTable.Buttons || o(t, r);
    return e(r, t, t.document, a, n);
  };
})(function (e, t, l, o, a, n) {
  var d = e.fn.dataTable;

  function _jsZip() {
    return o || t.JSZip;
  }

  function _pdfMake() {
    return a || t.pdfMake;
  }

  d.Buttons.pdfMake = function (e) {
    if (!e) return _pdfMake();
    a = e;
  };
  d.Buttons.jszip = function (e) {
    if (!e) return _jsZip();
    o = e;
  };
  var p = (function (e) {
    if (
      !(
        "undefined" === typeof e ||
        ("undefined" !== typeof navigator &&
          /MSIE [1-9]\./.test(navigator.userAgent))
      )
    ) {
      var t = e.document,
        get_URL = function () {
          return e.URL || e.webkitURL || e;
        },
        l = t.createElementNS("http://www.w3.org/1999/xhtml", "a"),
        o = "download" in l,
        click = function (e) {
          var t = new MouseEvent("click");
          e.dispatchEvent(t);
        },
        a = /constructor/i.test(e.HTMLElement) || e.safari,
        d = /CriOS\/[\d]+/.test(navigator.userAgent),
        throw_outside = function (t) {
          (e.setImmediate || e.setTimeout)(function () {
            throw t;
          }, 0);
        },
        p = "application/octet-stream",
        i = 4e4,
        revoke = function (e) {
          var revoker = function () {
            "string" === typeof e ? get_URL().revokeObjectURL(e) : e.remove();
          };
          setTimeout(revoker, i);
        },
        dispatch = function (e, t, l) {
          t = [].concat(t);
          var o = t.length;
          while (o--) {
            var r = e["on" + t[o]];
            if ("function" === typeof r)
              try {
                r.call(e, l || e);
              } catch (e) {
                throw_outside(e);
              }
          }
        },
        auto_bom = function (e) {
          return /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(
            e.type
          )
            ? new Blob([String.fromCharCode(65279), e], { type: e.type })
            : e;
        },
        FileSaver = function (t, i, f) {
          f || (t = auto_bom(t));
          var s,
            m = this || r,
            c = t.type,
            u = c === p,
            dispatch_all = function () {
              dispatch(m, "writestart progress write writeend".split(" "));
            },
            fs_error = function () {
              if ((d || (u && a)) && e.FileReader) {
                var l = new FileReader();
                l.onloadend = function () {
                  var t = d
                    ? l.result
                    : l.result.replace(/^data:[^;]*;/, "data:attachment/file;");
                  var o = e.open(t, "_blank");
                  o || (e.location.href = t);
                  t = n;
                  m.readyState = m.DONE;
                  dispatch_all();
                };
                l.readAsDataURL(t);
                m.readyState = m.INIT;
              } else {
                s || (s = get_URL().createObjectURL(t));
                if (u) e.location.href = s;
                else {
                  var o = e.open(s, "_blank");
                  o || (e.location.href = s);
                }
                m.readyState = m.DONE;
                dispatch_all();
                revoke(s);
              }
            };
          m.readyState = m.INIT;
          if (o) {
            s = get_URL().createObjectURL(t);
            setTimeout(function () {
              l.href = s;
              l.download = i;
              click(l);
              dispatch_all();
              revoke(s);
              m.readyState = m.DONE;
            });
          } else fs_error();
        },
        f = FileSaver.prototype,
        saveAs = function (e, t, l) {
          return new FileSaver(e, t || e.name || "download", l);
        };
      if ("undefined" !== typeof navigator && navigator.msSaveOrOpenBlob)
        return function (e, t, l) {
          t = t || e.name || "download";
          l || (e = auto_bom(e));
          return navigator.msSaveOrOpenBlob(e, t);
        };
      f.abort = function () {};
      f.readyState = f.INIT = 0;
      f.WRITING = 1;
      f.DONE = 2;
      f.error =
        f.onwritestart =
        f.onprogress =
        f.onwrite =
        f.onabort =
        f.onerror =
        f.onwriteend =
          null;
      return saveAs;
    }
  })(
    ("undefined" !== typeof self && self) ||
      ("undefined" !== typeof t && t) ||
      (this || r).content
  );
  d.fileSave = p;
  /**
   * Get the sheet name for Excel exports.
   *
   * @param {object}    config Button configuration
   */ var _sheetname = function (e) {
    var t = "Sheet1";
    e.sheetName && (t = e.sheetName.replace(/[\[\]\*\/\\\?\:]/g, ""));
    return t;
  };
  /**
   * Get the newline character(s)
   *
   * @param {object}    config Button configuration
   * @return {string}                Newline character
   */ var _newLine = function (e) {
    return e.newline
      ? e.newline
      : navigator.userAgent.match(/Windows/)
      ? "\r\n"
      : "\n";
  };
  /**
   * Combine the data from the `buttons.exportData` method into a string that
   * will be used in the export file.
   *
   * @param    {DataTable.Api} dt         DataTables API instance
   * @param    {object}                config Button configuration
   * @return {object}                             The data to export
   */ var _exportData = function (e, t) {
    var l = _newLine(t);
    var o = e.buttons.exportData(t.exportOptions);
    var r = t.fieldBoundary;
    var a = t.fieldSeparator;
    var d = new RegExp(r, "g");
    var p = t.escapeChar !== n ? t.escapeChar : "\\";
    var join = function (e) {
      var t = "";
      for (var l = 0, o = e.length; l < o; l++) {
        l > 0 && (t += a);
        t += r ? r + ("" + e[l]).replace(d, p + r) + r : e[l];
      }
      return t;
    };
    var i = t.header ? join(o.header) + l : "";
    var f = t.footer && o.footer ? l + join(o.footer) : "";
    var s = [];
    for (var m = 0, c = o.body.length; m < c; m++) s.push(join(o.body[m]));
    return { str: i + s.join(l) + f, rows: s.length };
  };
  var _isDuffSafari = function () {
    var e =
      -1 !== navigator.userAgent.indexOf("Safari") &&
      -1 === navigator.userAgent.indexOf("Chrome") &&
      -1 === navigator.userAgent.indexOf("Opera");
    if (!e) return false;
    var t = navigator.userAgent.match(/AppleWebKit\/(\d+\.\d+)/);
    return !!(t && t.length > 1 && 1 * t[1] < 603.1);
  };

  /**
   * Convert from numeric position to letter for column names in Excel
   * @param  {int} n Column number
   * @return {string} Column letter(s) name
   */ function createCellPos(e) {
    var t = "A".charCodeAt(0);
    var l = "Z".charCodeAt(0);
    var o = l - t + 1;
    var r = "";
    while (e >= 0) {
      r = String.fromCharCode((e % o) + t) + r;
      e = Math.floor(e / o) - 1;
    }
    return r;
  }

  try {
    var i = new XMLSerializer();
    var f;
  } catch (e) {}

  /**
   * Recursively add XML files from an object's structure to a ZIP file. This
   * allows the XSLX file to be easily defined with an object's structure matching
   * the files structure.
   *
   * @param {JSZip} zip ZIP package
   * @param {object} obj Object to add (recursive)
   */ function _addToZip(l, o) {
    f === n &&
      (f =
        -1 ===
        i
          .serializeToString(
            new t.DOMParser().parseFromString(
              s["xl/worksheets/sheet1.xml"],
              "text/xml"
            )
          )
          .indexOf("xmlns:r"));
    e.each(o, function (t, o) {
      if (e.isPlainObject(o)) {
        var r = l.folder(t);
        _addToZip(r, o);
      } else {
        if (f) {
          var a = o.childNodes[0];
          var n, d;
          var p = [];
          for (n = a.attributes.length - 1; n >= 0; n--) {
            var s = a.attributes[n].nodeName;
            var m = a.attributes[n].nodeValue;
            if (-1 !== s.indexOf(":")) {
              p.push({ name: s, value: m });
              a.removeAttribute(s);
            }
          }
          for (n = 0, d = p.length; n < d; n++) {
            var c = o.createAttribute(
              p[n].name.replace(":", "_dt_b_namespace_token_")
            );
            c.value = p[n].value;
            a.setAttributeNode(c);
          }
        }
        var u = i.serializeToString(o);
        if (f) {
          -1 === u.indexOf("<?xml") &&
            (u = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' + u);
          u = u.replace(/_dt_b_namespace_token_/g, ":");
          u = u.replace(/xmlns:NS[\d]+="" NS[\d]+:/g, "");
        }
        u = u.replace(/<([^<>]*?) xmlns=""([^<>]*?)>/g, "<$1 $2>");
        l.file(t, u);
      }
    });
  }

  /**
   * Create an XML node and add any children, attributes, etc without needing to
   * be verbose in the DOM.
   *
   * @param  {object} doc      XML document
   * @param  {string} nodeName Node name
   * @param  {object} opts     Options - can be `attr` (attributes), `children`
   *   (child nodes) and `text` (text content)
   * @return {node}            Created node
   */ function _createNode(t, l, o) {
    var r = t.createElement(l);
    if (o) {
      o.attr && e(r).attr(o.attr);
      o.children &&
        e.each(o.children, function (e, t) {
          r.appendChild(t);
        });
      null !== o.text &&
        o.text !== n &&
        r.appendChild(t.createTextNode(o.text));
    }
    return r;
  }

  /**
   * Get the width for an Excel column based on the contents of that column
   * @param  {object} data Data for export
   * @param  {int}    col  Column index
   * @return {int}         Column width
   */ function _excelColWidth(e, t) {
    var l = e.header[t].length;
    var o, r, a;
    e.footer && e.footer[t].length > l && (l = e.footer[t].length);
    for (var d = 0, p = e.body.length; d < p; d++) {
      var i = e.body[d][t];
      a = null !== i && i !== n ? i.toString() : "";
      if (-1 !== a.indexOf("\n")) {
        r = a.split("\n");
        r.sort(function (e, t) {
          return t.length - e.length;
        });
        o = r[0].length;
      } else o = a.length;
      o > l && (l = o);
      if (l > 40) return 54;
    }
    l *= 1.35;
    return l > 6 ? l : 6;
  }

  var s = {
    "_rels/.rels":
      '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>',
    "xl/_rels/workbook.xml.rels":
      '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/></Relationships>',
    "[Content_Types].xml":
      '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="xml" ContentType="application/xml" /><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml" /><Default Extension="jpeg" ContentType="image/jpeg" /><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml" /><Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml" /><Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml" /></Types>',
    "xl/workbook.xml":
      '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><fileVersion appName="xl" lastEdited="5" lowestEdited="5" rupBuild="24816"/><workbookPr showInkAnnotation="0" autoCompressPictures="0"/><bookViews><workbookView xWindow="0" yWindow="0" windowWidth="25600" windowHeight="19020" tabRatio="500"/></bookViews><sheets><sheet name="Sheet1" sheetId="1" r:id="rId1"/></sheets><definedNames/></workbook>',
    "xl/worksheets/sheet1.xml":
      '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" mc:Ignorable="x14ac" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"><sheetData/><mergeCells count="0"/></worksheet>',
    "xl/styles.xml":
      '<?xml version="1.0" encoding="UTF-8"?><styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" mc:Ignorable="x14ac" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"><numFmts count="6"><numFmt numFmtId="164" formatCode="#,##0.00_- [$$-45C]"/><numFmt numFmtId="165" formatCode="&quot;£&quot;#,##0.00"/><numFmt numFmtId="166" formatCode="[$€-2] #,##0.00"/><numFmt numFmtId="167" formatCode="0.0%"/><numFmt numFmtId="168" formatCode="#,##0;(#,##0)"/><numFmt numFmtId="169" formatCode="#,##0.00;(#,##0.00)"/></numFmts><fonts count="5" x14ac:knownFonts="1"><font><sz val="11" /><name val="Calibri" /></font><font><sz val="11" /><name val="Calibri" /><color rgb="FFFFFFFF" /></font><font><sz val="11" /><name val="Calibri" /><b /></font><font><sz val="11" /><name val="Calibri" /><i /></font><font><sz val="11" /><name val="Calibri" /><u /></font></fonts><fills count="6"><fill><patternFill patternType="none" /></fill><fill><patternFill patternType="none" /></fill><fill><patternFill patternType="solid"><fgColor rgb="FFD9D9D9" /><bgColor indexed="64" /></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="FFD99795" /><bgColor indexed="64" /></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="ffc6efce" /><bgColor indexed="64" /></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="ffc6cfef" /><bgColor indexed="64" /></patternFill></fill></fills><borders count="2"><border><left /><right /><top /><bottom /><diagonal /></border><border diagonalUp="false" diagonalDown="false"><left style="thin"><color auto="1" /></left><right style="thin"><color auto="1" /></right><top style="thin"><color auto="1" /></top><bottom style="thin"><color auto="1" /></bottom><diagonal /></border></borders><cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" /></cellStyleXfs><cellXfs count="68"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="left"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="center"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="right"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="fill"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment textRotation="90"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment wrapText="1"/></xf><xf numFmtId="9"   fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="164" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="165" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="166" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="167" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="168" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="169" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="3" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="4" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="1" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="2" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="14" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/></cellXfs><cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0" /></cellStyles><dxfs count="0" /><tableStyles count="0" defaultTableStyle="TableStyleMedium9" defaultPivotStyle="PivotStyleMedium4" /></styleSheet>',
  };
  var m = [
    {
      match: /^\-?\d+\.\d%$/,
      style: 60,
      fmt: function (e) {
        return e / 100;
      },
    },
    {
      match: /^\-?\d+\.?\d*%$/,
      style: 56,
      fmt: function (e) {
        return e / 100;
      },
    },
    { match: /^\-?\$[\d,]+.?\d*$/, style: 57 },
    { match: /^\-?£[\d,]+.?\d*$/, style: 58 },
    {
      match: /^\-?€[\d,]+.?\d*$/,
      style: 59,
    },
    { match: /^\-?\d+$/, style: 65 },
    { match: /^\-?\d+\.\d{2}$/, style: 66 },
    {
      match: /^\([\d,]+\)$/,
      style: 61,
      fmt: function (e) {
        return -1 * e.replace(/[\(\)]/g, "");
      },
    },
    {
      match: /^\([\d,]+\.\d{2}\)$/,
      style: 62,
      fmt: function (e) {
        return -1 * e.replace(/[\(\)]/g, "");
      },
    },
    { match: /^\-?[\d,]+$/, style: 63 },
    {
      match: /^\-?[\d,]+\.\d{2}$/,
      style: 64,
    },
    {
      match: /^[\d]{4}\-[\d]{2}\-[\d]{2}$/,
      style: 67,
      fmt: function (e) {
        return Math.round(25569 + Date.parse(e) / 864e5);
      },
    },
  ];
  d.ext.buttons.copyHtml5 = {
    className: "buttons-copy buttons-html5",
    text: function (e) {
      return e.i18n("buttons.copy", "Copy");
    },
    action: function (t, o, a, n) {
      this.processing(true);
      var d = this || r;
      var p = _exportData(o, n);
      var i = o.buttons.exportInfo(n);
      var f = _newLine(n);
      var s = p.str;
      var m = e("<div/>").css({
        height: 1,
        width: 1,
        overflow: "hidden",
        position: "fixed",
        top: 0,
        left: 0,
      });
      i.title && (s = i.title + f + f + s);
      i.messageTop && (s = i.messageTop + f + f + s);
      i.messageBottom && (s = s + f + f + i.messageBottom);
      n.customize && (s = n.customize(s, n, o));
      var c = e("<textarea readonly/>").val(s).appendTo(m);
      if (l.queryCommandSupported("copy")) {
        m.appendTo(o.table().container());
        c[0].focus();
        c[0].select();
        try {
          var u = l.execCommand("copy");
          m.remove();
          if (u) {
            o.buttons.info(
              o.i18n("buttons.copyTitle", "Copy to clipboard"),
              o.i18n(
                "buttons.copySuccess",
                {
                  1: "Copied one row to clipboard",
                  _: "Copied %d rows to clipboard",
                },
                p.rows
              ),
              2e3
            );
            this.processing(false);
            return;
          }
        } catch (e) {}
      }
      var y = e(
        "<span>" +
          o.i18n(
            "buttons.copyKeys",
            "Press <i>ctrl</i> or <i>⌘</i> + <i>C</i> to copy the table data<br>to your system clipboard.<br><br>To cancel, click this message or press escape."
          ) +
          "</span>"
      ).append(m);
      o.buttons.info(o.i18n("buttons.copyTitle", "Copy to clipboard"), y, 0);
      c[0].focus();
      c[0].select();
      var I = e(y).closest(".dt-button-info");
      var close = function () {
        I.off("click.buttons-copy");
        e(l).off(".buttons-copy");
        o.buttons.info(false);
      };
      I.on("click.buttons-copy", close);
      e(l)
        .on("keydown.buttons-copy", function (e) {
          if (27 === e.keyCode) {
            close();
            d.processing(false);
          }
        })
        .on("copy.buttons-copy cut.buttons-copy", function () {
          close();
          d.processing(false);
        });
    },
    exportOptions: {},
    fieldSeparator: "\t",
    fieldBoundary: "",
    header: true,
    footer: false,
    title: "*",
    messageTop: "*",
    messageBottom: "*",
  };
  d.ext.buttons.csvHtml5 = {
    bom: false,
    className: "buttons-csv buttons-html5",
    available: function () {
      return t.FileReader !== n && t.Blob;
    },
    text: function (e) {
      return e.i18n("buttons.csv", "CSV");
    },
    action: function (e, t, o, r) {
      this.processing(true);
      var a = _exportData(t, r).str;
      var n = t.buttons.exportInfo(r);
      var d = r.charset;
      r.customize && (a = r.customize(a, r, t));
      if (false !== d) {
        d || (d = l.characterSet || l.charset);
        d && (d = ";charset=" + d);
      } else d = "";
      r.bom && (a = String.fromCharCode(65279) + a);
      p(new Blob([a], { type: "text/csv" + d }), n.filename, true);
      this.processing(false);
    },
    filename: "*",
    extension: ".csv",
    exportOptions: {},
    fieldSeparator: ",",
    fieldBoundary: '"',
    escapeChar: '"',
    charset: null,
    header: true,
    footer: false,
  };
  d.ext.buttons.excelHtml5 = {
    className: "buttons-excel buttons-html5",
    available: function () {
      return t.FileReader !== n && _jsZip() !== n && !_isDuffSafari() && i;
    },
    text: function (e) {
      return e.i18n("buttons.excel", "Excel");
    },
    action: function (t, l, o, a) {
      this.processing(true);
      var d = this || r;
      var i = 0;
      var f, c;
      var getXml = function (t) {
        var l = s[t];
        return e.parseXML(l);
      };
      var u = getXml("xl/worksheets/sheet1.xml");
      var y = u.getElementsByTagName("sheetData")[0];
      var I = {
        _rels: { ".rels": getXml("_rels/.rels") },
        xl: {
          _rels: { "workbook.xml.rels": getXml("xl/_rels/workbook.xml.rels") },
          "workbook.xml": getXml("xl/workbook.xml"),
          "styles.xml": getXml("xl/styles.xml"),
          worksheets: { "sheet1.xml": u },
        },
        "[Content_Types].xml": getXml("[Content_Types].xml"),
      };
      var F = l.buttons.exportData(a.exportOptions);
      var x, h;
      var addRow = function (e) {
        x = i + 1;
        h = _createNode(u, "row", { attr: { r: x } });
        for (var t = 0, l = e.length; t < l; t++) {
          var o = createCellPos(t) + "" + x;
          var r = null;
          if (null === e[t] || e[t] === n || "" === e[t]) {
            if (true !== a.createEmptyCells) continue;
            e[t] = "";
          }
          var d = e[t];
          e[t] = "function" === typeof e[t].trim ? e[t].trim() : e[t];
          for (var p = 0, f = m.length; p < f; p++) {
            var s = m[p];
            if (e[t].match && !e[t].match(/^0\d+/) && e[t].match(s.match)) {
              var c = e[t].replace(/[^\d\.\-]/g, "");
              s.fmt && (c = s.fmt(c));
              r = _createNode(u, "c", {
                attr: { r: o, s: s.style },
                children: [_createNode(u, "v", { text: c })],
              });
              break;
            }
          }
          if (!r)
            if (
              "number" === typeof e[t] ||
              (e[t].match &&
                e[t].match(/^-?\d+(\.\d+)?([eE]\-?\d+)?$/) &&
                !e[t].match(/^0\d+/))
            )
              r = _createNode(u, "c", {
                attr: {
                  t: "n",
                  r: o,
                },
                children: [_createNode(u, "v", { text: e[t] })],
              });
            else {
              var I = d.replace
                ? d.replace(/[\x00-\x09\x0B\x0C\x0E-\x1F\x7F-\x9F]/g, "")
                : d;
              r = _createNode(u, "c", {
                attr: { t: "inlineStr", r: o },
                children: {
                  row: _createNode(u, "is", {
                    children: {
                      row: _createNode(u, "t", {
                        text: I,
                        attr: { "xml:space": "preserve" },
                      }),
                    },
                  }),
                },
              });
            }
          h.appendChild(r);
        }
        y.appendChild(h);
        i++;
      };
      a.customizeData && a.customizeData(F);
      var mergeCells = function (t, l) {
        var o = e("mergeCells", u);
        o[0].appendChild(
          _createNode(u, "mergeCell", {
            attr: { ref: "A" + t + ":" + createCellPos(l) + t },
          })
        );
        o.attr("count", parseFloat(o.attr("count")) + 1);
        e("row:eq(" + (t - 1) + ") c", u).attr("s", "51");
      };
      var b = l.buttons.exportInfo(a);
      if (b.title) {
        addRow([b.title], i);
        mergeCells(i, F.header.length - 1);
      }
      if (b.messageTop) {
        addRow([b.messageTop], i);
        mergeCells(i, F.header.length - 1);
      }
      if (a.header) {
        addRow(F.header, i);
        e("row:last c", u).attr("s", "2");
      }
      f = i;
      for (var g = 0, v = F.body.length; g < v; g++) addRow(F.body[g], i);
      c = i;
      if (a.footer && F.footer) {
        addRow(F.footer, i);
        e("row:last c", u).attr("s", "2");
      }
      if (b.messageBottom) {
        addRow([b.messageBottom], i);
        mergeCells(i, F.header.length - 1);
      }
      var B = _createNode(u, "cols");
      e("worksheet", u).prepend(B);
      for (var w = 0, C = F.header.length; w < C; w++)
        B.appendChild(
          _createNode(u, "col", {
            attr: {
              min: w + 1,
              max: w + 1,
              width: _excelColWidth(F, w),
              customWidth: 1,
            },
          })
        );
      var T = I.xl["workbook.xml"];
      e("sheets sheet", T).attr("name", _sheetname(a));
      if (a.autoFilter) {
        e("mergeCells", u).before(
          _createNode(u, "autoFilter", {
            attr: {
              ref: "A" + f + ":" + createCellPos(F.header.length - 1) + c,
            },
          })
        );
        e("definedNames", T).append(
          _createNode(T, "definedName", {
            attr: {
              name: "_xlnm._FilterDatabase",
              localSheetId: "0",
              hidden: 1,
            },
            text:
              _sheetname(a) +
              "!$A$" +
              f +
              ":" +
              createCellPos(F.header.length - 1) +
              c,
          })
        );
      }
      a.customize && a.customize(I, a, l);
      0 === e("mergeCells", u).children().length && e("mergeCells", u).remove();
      var k = _jsZip();
      var S = new k();
      var N = {
        type: "blob",
        mimeType:
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      };
      _addToZip(S, I);
      if (S.generateAsync)
        S.generateAsync(N).then(function (e) {
          p(e, b.filename);
          d.processing(false);
        });
      else {
        p(S.generate(N), b.filename);
        this.processing(false);
      }
    },
    filename: "*",
    extension: ".xlsx",
    exportOptions: {},
    header: true,
    footer: false,
    title: "*",
    messageTop: "*",
    messageBottom: "*",
    createEmptyCells: false,
    autoFilter: false,
    sheetName: "",
  };
  d.ext.buttons.pdfHtml5 = {
    className: "buttons-pdf buttons-html5",
    available: function () {
      return t.FileReader !== n && _pdfMake();
    },
    text: function (e) {
      return e.i18n("buttons.pdf", "PDF");
    },
    action: function (t, l, o, r) {
      this.processing(true);
      var a = l.buttons.exportData(r.exportOptions);
      var d = l.buttons.exportInfo(r);
      var p = [];
      r.header &&
        p.push(
          e.map(a.header, function (e) {
            return {
              text: "string" === typeof e ? e : e + "",
              style: "tableHeader",
            };
          })
        );
      for (var i = 0, f = a.body.length; i < f; i++)
        p.push(
          e.map(a.body[i], function (e) {
            (null !== e && e !== n) || (e = "");
            return {
              text: "string" === typeof e ? e : e + "",
              style: i % 2 ? "tableBodyEven" : "tableBodyOdd",
            };
          })
        );
      r.footer &&
        a.footer &&
        p.push(
          e.map(a.footer, function (e) {
            return {
              text: "string" === typeof e ? e : e + "",
              style: "tableFooter",
            };
          })
        );
      var s = {
        pageSize: r.pageSize,
        pageOrientation: r.orientation,
        content: [{ table: { headerRows: 1, body: p }, layout: "noBorders" }],
        styles: {
          tableHeader: {
            bold: true,
            fontSize: 11,
            color: "white",
            fillColor: "#2d4154",
            alignment: "center",
          },
          tableBodyEven: {},
          tableBodyOdd: { fillColor: "#f3f3f3" },
          tableFooter: {
            bold: true,
            fontSize: 11,
            color: "white",
            fillColor: "#2d4154",
          },
          title: { alignment: "center", fontSize: 15 },
          message: {},
        },
        defaultStyle: { fontSize: 10 },
      };
      d.messageTop &&
        s.content.unshift({
          text: d.messageTop,
          style: "message",
          margin: [0, 0, 0, 12],
        });
      d.messageBottom &&
        s.content.push({
          text: d.messageBottom,
          style: "message",
          margin: [0, 0, 0, 12],
        });
      d.title &&
        s.content.unshift({
          text: d.title,
          style: "title",
          margin: [0, 0, 0, 12],
        });
      r.customize && r.customize(s, r, l);
      var m = _pdfMake().createPdf(s);
      "open" !== r.download || _isDuffSafari()
        ? m.download(d.filename)
        : m.open();
      this.processing(false);
    },
    title: "*",
    filename: "*",
    extension: ".pdf",
    exportOptions: {},
    orientation: "portrait",
    pageSize: "A4",
    header: true,
    footer: false,
    messageTop: "*",
    messageBottom: "*",
    customize: null,
    download: "download",
  };
  return d.Buttons;
});
var n = a;
export { n as default };
