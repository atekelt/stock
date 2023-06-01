import * as t from "datatables.net";
var n = "default" in t ? t.default : t;
var e =
  "undefined" !== typeof globalThis
    ? globalThis
    : "undefined" !== typeof self
    ? self
    : global;
var o = {};
(function (t) {
  o = function (e, o) {
    e || (e = window);
    (o && o.fn.dataTable) || (o = n(e, o).$);
    return t(o, e, e.document);
  };
})(function (t, n, o, i) {
  var r = t.fn.dataTable;
  var s = 0;
  var a = 0;
  var l = r.ext.buttons;
  function _fadeIn(n, e, o) {
    if (t.fn.animate) n.stop().fadeIn(e, o);
    else {
      n.css("display", "block");
      o && o.call(n);
    }
  }
  function _fadeOut(n, e, o) {
    if (t.fn.animate) n.stop().fadeOut(e, o);
    else {
      n.css("display", "none");
      o && o.call(n);
    }
  }
  /**
   * [Buttons description]
   * @param {[type]}
   * @param {[type]}
   */ var Buttons = function (n, o) {
    if (!((this || e) instanceof Buttons))
      return function (t) {
        return new Buttons(t, n).container();
      };
    "undefined" === typeof o && (o = {});
    true === o && (o = {});
    Array.isArray(o) && (o = { buttons: o });
    (this || e).c = t.extend(true, {}, Buttons.defaults, o);
    o.buttons && ((this || e).c.buttons = o.buttons);
    (this || e).s = {
      dt: new r.Api(n),
      buttons: [],
      listenKeys: "",
      namespace: "dtb" + s++,
    };
    (this || e).dom = {
      container: t("<" + (this || e).c.dom.container.tag + "/>").addClass(
        (this || e).c.dom.container.className
      ),
    };
    this._constructor();
  };
  t.extend(Buttons.prototype, {
    /**
     * Get the action of a button
     * @param  {int|string} Button index
     * @return {function}
     */
    /**
     * Set the action of a button
     * @param  {node} node Button element
     * @param  {function} action Function to set
     * @return {Buttons} Self for chaining
     */
    action: function (t, n) {
      var o = this._nodeToButton(t);
      if (n === i) return o.conf.action;
      o.conf.action = n;
      return this || e;
    },
    /**
     * Add an active class to the button to make to look active or get current
     * active state.
     * @param  {node} node Button element
     * @param  {boolean} [flag] Enable / disable flag
     * @return {Buttons} Self for chaining or boolean for getter
     */
    active: function (n, o) {
      var r = this._nodeToButton(n);
      var s = (this || e).c.dom.button.active;
      var a = t(r.node);
      if (o === i) return a.hasClass(s);
      a.toggleClass(s, o === i || o);
      return this || e;
    },
    /**
     * Add a new button
     * @param {object} config Button configuration object, base string name or function
     * @param {int|string} [idx] Button index for where to insert the button
     * @param {boolean} [draw=true] Trigger a draw. Set a false when adding
     *   lots of buttons, until the last button.
     * @return {Buttons} Self for chaining
     */
    add: function (t, n, o) {
      var r = (this || e).s.buttons;
      if ("string" === typeof n) {
        var s = n.split("-");
        var a = (this || e).s;
        for (var l = 0, u = s.length - 1; l < u; l++) a = a.buttons[1 * s[l]];
        r = a.buttons;
        n = 1 * s[s.length - 1];
      }
      this._expandButton(
        r,
        t,
        t !== i ? t.split : i,
        (t === i || t.split === i || 0 === t.split.length) && a !== i,
        false,
        n
      );
      (o !== i && true !== o) || this._draw();
      return this || e;
    },
    collectionRebuild: function (t, n) {
      var e = this._nodeToButton(t);
      if (n !== i) {
        var o;
        for (o = e.buttons.length - 1; o >= 0; o--)
          this.remove(e.buttons[o].node);
        for (o = 0; o < n.length; o++) {
          var r = n[o];
          this._expandButton(
            e.buttons,
            r,
            r !== i && r.config !== i && r.config.split !== i,
            true,
            r.parentConf !== i && r.parentConf.split !== i,
            o,
            r.parentConf
          );
        }
      }
      this._draw(e.collection, e.buttons);
    },
    container: function () {
      return (this || e).dom.container;
    },
    /**
     * Disable a button
     * @param  {node} node Button node
     * @return {Buttons} Self for chaining
     */
    disable: function (n) {
      var o = this._nodeToButton(n);
      t(o.node)
        .addClass((this || e).c.dom.button.disabled)
        .attr("disabled", true);
      return this || e;
    },
    destroy: function () {
      t("body").off("keyup." + (this || e).s.namespace);
      var n = (this || e).s.buttons.slice();
      var o, i;
      for (o = 0, i = n.length; o < i; o++) this.remove(n[o].node);
      (this || e).dom.container.remove();
      var r = (this || e).s.dt.settings()[0];
      for (o = 0, i = r.length; o < i; o++)
        if (r.inst === (this || e)) {
          r.splice(o, 1);
          break;
        }
      return this || e;
    },
    /**
     * Enable / disable a button
     * @param  {node} node Button node
     * @param  {boolean} [flag=true] Enable / disable flag
     * @return {Buttons} Self for chaining
     */
    enable: function (n, o) {
      if (false === o) return this.disable(n);
      var i = this._nodeToButton(n);
      t(i.node)
        .removeClass((this || e).c.dom.button.disabled)
        .removeAttr("disabled");
      return this || e;
    },
    /**
     * Get a button's index
     *
     * This is internally recursive
     * @param {element} node Button to get the index of
     * @return {string} Button index
     */
    index: function (t, n, o) {
      if (!n) {
        n = "";
        o = (this || e).s.buttons;
      }
      for (var i = 0, r = o.length; i < r; i++) {
        var s = o[i].buttons;
        if (o[i].node === t) return n + i;
        if (s && s.length) {
          var a = this.index(t, i + "-", s);
          if (null !== a) return a;
        }
      }
      return null;
    },
    name: function () {
      return (this || e).c.name;
    },
    /**
     * Get a button's node of the buttons container if no button is given
     * @param  {node} [node] Button node
     * @return {jQuery} Button element, or container
     */
    node: function (n) {
      if (!n) return (this || e).dom.container;
      var o = this._nodeToButton(n);
      return t(o.node);
    },
    /**
     * Set / get a processing class on the selected button
     * @param {element} node Triggering button node
     * @param  {boolean} flag true to add, false to remove, undefined to get
     * @return {boolean|Buttons} Getter value or this if a setter.
     */
    processing: function (n, o) {
      var r = (this || e).s.dt;
      var s = this._nodeToButton(n);
      if (o === i) return t(s.node).hasClass("processing");
      t(s.node).toggleClass("processing", o);
      t(r.table().node()).triggerHandler("buttons-processing.dt", [
        o,
        r.button(n),
        r,
        t(n),
        s.conf,
      ]);
      return this || e;
    },
    /**
     * Remove a button.
     * @param  {node} node Button node
     * @return {Buttons} Self for chaining
     */
    remove: function (n) {
      var o = this._nodeToButton(n);
      var i = this._nodeToHost(n);
      var r = (this || e).s.dt;
      if (o.buttons.length)
        for (var s = o.buttons.length - 1; s >= 0; s--)
          this.remove(o.buttons[s].node);
      o.conf.destroying = true;
      o.conf.destroy && o.conf.destroy.call(r.button(n), r, t(n), o.conf);
      this._removeKey(o.conf);
      t(o.node).remove();
      var a = t.inArray(o, i);
      i.splice(a, 1);
      return this || e;
    },
    /**
     * Get the text for a button
     * @param  {int|string} node Button index
     * @return {string} Button text
     */
    /**
     * Set the text for a button
     * @param  {int|string|function} node Button index
     * @param  {string} label Text
     * @return {Buttons} Self for chaining
     */
    text: function (n, o) {
      var r = this._nodeToButton(n);
      var s = (this || e).c.dom.collection.buttonLiner;
      var a =
        r.inCollection && s && s.tag
          ? s.tag
          : (this || e).c.dom.buttonLiner.tag;
      var l = (this || e).s.dt;
      var u = t(r.node);
      var text = function (t) {
        return "function" === typeof t ? t(l, u, r.conf) : t;
      };
      if (o === i) return text(r.conf.text);
      r.conf.text = o;
      a
        ? u.children(a).eq(0).filter(":not(.dt-down-arrow)").html(text(o))
        : u.html(text(o));
      return this || e;
    },
    _constructor: function () {
      var n = this || e;
      var i = (this || e).s.dt;
      var r = i.settings()[0];
      var s = (this || e).c.buttons;
      r._buttons || (r._buttons = []);
      r._buttons.push({ inst: this || e, name: (this || e).c.name });
      for (var a = 0, l = s.length; a < l; a++) this.add(s[a]);
      i.on("destroy", function (t, e) {
        e === r && n.destroy();
      });
      t("body").on("keyup." + (this || e).s.namespace, function (t) {
        if (!o.activeElement || o.activeElement === o.body) {
          var e = String.fromCharCode(t.keyCode).toLowerCase();
          -1 !== n.s.listenKeys.toLowerCase().indexOf(e) && n._keypress(e, t);
        }
      });
    },
    /**
     * Add a new button to the key press listener
     * @param {object} conf Resolved button configuration object
     * @private
     */
    _addKey: function (n) {
      n.key &&
        ((this || e).s.listenKeys += t.isPlainObject(n.key)
          ? n.key.key
          : n.key);
    },
    /**
     * Insert the buttons into the container. Call without parameters!
     * @param  {node} [container] Recursive only - Insert point
     * @param  {array} [buttons] Recursive only - Buttons array
     * @private
     */
    _draw: function (t, n) {
      if (!t) {
        t = (this || e).dom.container;
        n = (this || e).s.buttons;
      }
      t.children().detach();
      for (var o = 0, i = n.length; o < i; o++) {
        t.append(n[o].inserter);
        t.append(" ");
        n[o].buttons &&
          n[o].buttons.length &&
          this._draw(n[o].collection, n[o].buttons);
      }
    },
    /**
     * Create buttons from an array of buttons
     * @param  {array} attachTo Buttons array to attach to
     * @param  {object} button Button definition
     * @param  {boolean} inCollection true if the button is in a collection
     * @private
     */
    _expandButton: function (n, o, r, s, a, l, u) {
      var c = (this || e).s.dt;
      var d = 0;
      var f = false;
      var p = Array.isArray(o) ? o : [o];
      o === i && (p = Array.isArray(r) ? r : [r]);
      o !== i && o.split !== i && (f = true);
      for (var h = 0, b = p.length; h < b; h++) {
        var v = this._resolveExtends(p[h]);
        if (v) {
          f = !(v.config === i || !v.config.split);
          if (Array.isArray(v))
            this._expandButton(
              n,
              v,
              g !== i && g.conf !== i ? g.conf.split : i,
              s,
              u !== i && u.split !== i,
              l,
              u
            );
          else {
            var g = this._buildButton(
              v,
              s,
              v.split !== i || (v.config !== i && v.config.split !== i),
              a
            );
            if (g) {
              if (l !== i && null !== l) {
                n.splice(l, 0, g);
                l++;
              } else n.push(g);
              if (g.conf.buttons || g.conf.split) {
                g.collection = t(
                  "<" +
                    (f
                      ? (this || e).c.dom.splitCollection.tag
                      : (this || e).c.dom.collection.tag) +
                    "/>"
                );
                g.conf._collection = g.collection;
                if (g.conf.split) {
                  for (var m = 0; m < g.conf.split.length; m++)
                    if ("object" === typeof g.conf.split[m]) {
                      g.conf.split[m].parent = u;
                      g.conf.split[m].collectionLayout === i &&
                        (g.conf.split[m].collectionLayout =
                          g.conf.collectionLayout);
                      g.conf.split[m].dropup === i &&
                        (g.conf.split[m].dropup = g.conf.dropup);
                      g.conf.split[m].fade === i &&
                        (g.conf.split[m].fade = g.conf.fade);
                    }
                } else
                  t(g.node).append(
                    t(
                      '<span class="dt-down-arrow">' +
                        (this || e).c.dom.splitDropdown.text +
                        "</span>"
                    )
                  );
                this._expandButton(
                  g.buttons,
                  g.conf.buttons,
                  g.conf.split,
                  !f,
                  f,
                  l,
                  g.conf
                );
              }
              g.conf.parent = u;
              v.init && v.init.call(c.button(g.node), c, t(g.node), v);
              d++;
            }
          }
        }
      }
    },
    /**
     * Create an individual button
     * @param  {object} config            Resolved button configuration
     * @param  {boolean} inCollection `true` if a collection button
     * @return {jQuery} Created button node (jQuery)
     * @private
     */
    _buildButton: function (n, o, r, s) {
      var u = (this || e).c.dom.button;
      var c = (this || e).c.dom.buttonLiner;
      var d = (this || e).c.dom.collection;
      (this || e).c.dom.split;
      var f = (this || e).c.dom.splitCollection;
      var p = (this || e).c.dom.splitDropdownButton;
      var h = (this || e).s.dt;
      var text = function (t) {
        return "function" === typeof t ? t(h, v, n) : t;
      };
      if (n.spacer) {
        var b = t("<span></span>")
          .addClass("dt-button-spacer " + n.style + " " + u.spacerClass)
          .html(text(n.text));
        return {
          conf: n,
          node: b,
          inserter: b,
          buttons: [],
          inCollection: o,
          isSplit: r,
          inSplit: s,
          collection: null,
        };
      }
      !r && s && f ? (u = p) : !r && o && d.button && (u = d.button);
      !r && s && f.buttonLiner
        ? (c = f.buttonLiner)
        : !r && o && d.buttonLiner && (c = d.buttonLiner);
      if (n.available && !n.available(h, n) && !n.hasOwnProperty("html"))
        return false;
      var v;
      if (n.hasOwnProperty("html")) v = t(n.html);
      else {
        var action = function (n, e, o, i) {
          i.action.call(e.button(o), n, e, o, i);
          t(e.table().node()).triggerHandler("buttons-action.dt", [
            e.button(o),
            e,
            o,
            i,
          ]);
        };
        var g = n.tag || u.tag;
        var m = n.clickBlurs === i || n.clickBlurs;
        v = t("<" + g + "/>")
          .addClass(u.className)
          .addClass(s ? (this || e).c.dom.splitDropdownButton.className : "")
          .attr("tabindex", (this || e).s.dt.settings()[0].iTabIndex)
          .attr("aria-controls", (this || e).s.dt.table().node().id)
          .on("click.dtb", function (t) {
            t.preventDefault();
            !v.hasClass(u.disabled) && n.action && action(t, h, v, n);
            m && v.trigger("blur");
          })
          .on("keypress.dtb", function (t) {
            if (13 === t.keyCode) {
              t.preventDefault();
              !v.hasClass(u.disabled) && n.action && action(t, h, v, n);
            }
          });
        "a" === g.toLowerCase() && v.attr("href", "#");
        "button" === g.toLowerCase() && v.attr("type", "button");
        if (c.tag) {
          var y = t("<" + c.tag + "/>")
            .html(text(n.text))
            .addClass(c.className);
          "a" === c.tag.toLowerCase() && y.attr("href", "#");
          v.append(y);
        } else v.html(text(n.text));
        false === n.enabled && v.addClass(u.disabled);
        n.className && v.addClass(n.className);
        n.titleAttr && v.attr("title", text(n.titleAttr));
        n.attr && v.attr(n.attr);
        n.namespace || (n.namespace = ".dt-button-" + a++);
        n.config !== i && n.config.split && (n.split = n.config.split);
      }
      var x = (this || e).c.dom.buttonContainer;
      var _;
      _ =
        x && x.tag
          ? t("<" + x.tag + "/>")
              .addClass(x.className)
              .append(v)
          : v;
      this._addKey(n);
      (this || e).c.buttonCreated && (_ = (this || e).c.buttonCreated(n, _));
      var C;
      if (r) {
        C = t("<div/>").addClass((this || e).c.dom.splitWrapper.className);
        C.append(v);
        var w = t.extend(n, {
          text: (this || e).c.dom.splitDropdown.text,
          className: (this || e).c.dom.splitDropdown.className,
          closeButton: false,
          attr: { "aria-haspopup": true, "aria-expanded": false },
          align: (this || e).c.dom.splitDropdown.align,
          splitAlignClass: (this || e).c.dom.splitDropdown.splitAlignClass,
        });
        this._addKey(w);
        var splitAction = function (n, e, o, i) {
          l.split.action.call(
            e.button(t("div.dt-btn-split-wrapper")[0]),
            n,
            e,
            o,
            i
          );
          t(e.table().node()).triggerHandler("buttons-action.dt", [
            e.button(o),
            e,
            o,
            i,
          ]);
          o.attr("aria-expanded", true);
        };
        var A = t(
          '<button class="' +
            (this || e).c.dom.splitDropdown.className +
            ' dt-button"><span class="dt-btn-split-drop-arrow">' +
            (this || e).c.dom.splitDropdown.text +
            "</span></button>"
        )
          .on("click.dtb", function (t) {
            t.preventDefault();
            t.stopPropagation();
            A.hasClass(u.disabled) || splitAction(t, h, A, w);
            m && A.trigger("blur");
          })
          .on("keypress.dtb", function (t) {
            if (13 === t.keyCode) {
              t.preventDefault();
              A.hasClass(u.disabled) || splitAction(t, h, A, w);
            }
          });
        0 === n.split.length && A.addClass("dtb-hide-drop");
        C.append(A).attr(w.attr);
      }
      return {
        conf: n,
        node: r ? C.get(0) : v.get(0),
        inserter: r ? C : _,
        buttons: [],
        inCollection: o,
        isSplit: r,
        inSplit: s,
        collection: null,
      };
    },
    /**
     * Get the button object from a node (recursive)
     * @param  {node} node Button node
     * @param  {array} [buttons] Button array, uses base if not defined
     * @return {object} Button object
     * @private
     */
    _nodeToButton: function (t, n) {
      n || (n = (this || e).s.buttons);
      for (var o = 0, i = n.length; o < i; o++) {
        if (n[o].node === t) return n[o];
        if (n[o].buttons.length) {
          var r = this._nodeToButton(t, n[o].buttons);
          if (r) return r;
        }
      }
    },
    /**
     * Get container array for a button from a button node (recursive)
     * @param  {node} node Button node
     * @param  {array} [buttons] Button array, uses base if not defined
     * @return {array} Button's host array
     * @private
     */
    _nodeToHost: function (t, n) {
      n || (n = (this || e).s.buttons);
      for (var o = 0, i = n.length; o < i; o++) {
        if (n[o].node === t) return n;
        if (n[o].buttons.length) {
          var r = this._nodeToHost(t, n[o].buttons);
          if (r) return r;
        }
      }
    },
    /**
     * Handle a key press - determine if any button's key configured matches
     * what was typed and trigger the action if so.
     * @param  {string} character The character pressed
     * @param  {object} e Key event that triggered this call
     * @private
     */
    _keypress: function (n, o) {
      if (!o._buttonsHandled) {
        var run = function (e, i) {
          if (e.key)
            if (e.key === n) {
              o._buttonsHandled = true;
              t(i).click();
            } else if (t.isPlainObject(e.key)) {
              if (e.key.key !== n) return;
              if (e.key.shiftKey && !o.shiftKey) return;
              if (e.key.altKey && !o.altKey) return;
              if (e.key.ctrlKey && !o.ctrlKey) return;
              if (e.key.metaKey && !o.metaKey) return;
              o._buttonsHandled = true;
              t(i).click();
            }
        };
        var recurse = function (t) {
          for (var n = 0, e = t.length; n < e; n++) {
            run(t[n].conf, t[n].node);
            t[n].buttons.length && recurse(t[n].buttons);
          }
        };
        recurse((this || e).s.buttons);
      }
    },
    /**
     * Remove a key from the key listener for this instance (to be used when a
     * button is removed)
     * @param  {object} conf Button configuration
     * @private
     */
    _removeKey: function (n) {
      if (n.key) {
        var o = t.isPlainObject(n.key) ? n.key.key : n.key;
        var i = (this || e).s.listenKeys.split("");
        var r = t.inArray(o, i);
        i.splice(r, 1);
        (this || e).s.listenKeys = i.join("");
      }
    },
    /**
     * Resolve a button configuration
     * @param  {string|function|object} conf Button config to resolve
     * @return {object} Button configuration
     * @private
     */
    _resolveExtends: function (n) {
      var o = this || e;
      var r = (this || e).s.dt;
      var s, a;
      var toConfObject = function (e) {
        var s = 0;
        while (!t.isPlainObject(e) && !Array.isArray(e)) {
          if (e === i) return;
          if ("function" === typeof e) {
            e = e.call(o, r, n);
            if (!e) return false;
          } else if ("string" === typeof e) {
            if (!l[e]) return { html: e };
            e = l[e];
          }
          s++;
          if (s > 30) throw "Buttons: Too many iterations";
        }
        return Array.isArray(e) ? e : t.extend({}, e);
      };
      n = toConfObject(n);
      while (n && n.extend) {
        if (!l[n.extend])
          throw "Cannot extend unknown button type: " + n.extend;
        var u = toConfObject(l[n.extend]);
        if (Array.isArray(u)) return u;
        if (!u) return false;
        var c = u.className;
        n.config !== i &&
          u.config !== i &&
          (n.config = t.extend({}, u.config, n.config));
        n = t.extend({}, u, n);
        c && n.className !== c && (n.className = c + " " + n.className);
        var d = n.postfixButtons;
        if (d) {
          n.buttons || (n.buttons = []);
          for (s = 0, a = d.length; s < a; s++) n.buttons.push(d[s]);
          n.postfixButtons = null;
        }
        var f = n.prefixButtons;
        if (f) {
          n.buttons || (n.buttons = []);
          for (s = 0, a = f.length; s < a; s++) n.buttons.splice(s, 0, f[s]);
          n.prefixButtons = null;
        }
        n.extend = u.extend;
      }
      return n;
    },
    /**
     * Display (and replace if there is an existing one) a popover attached to a button
     * @param {string|node} content Content to show
     * @param {DataTable.Api} hostButton DT API instance of the button
     * @param {object} inOpts Options (see object below for all options)
     */
    _popover: function (i, r, s, a) {
      var l = r;
      var u = (this || e).c;
      var c = false;
      var d = t.extend(
        {
          align: "button-left",
          autoClose: false,
          background: true,
          backgroundClassName: "dt-button-background",
          closeButton: true,
          contentClassName: u.dom.collection.className,
          collectionLayout: "",
          collectionTitle: "",
          dropup: false,
          fade: 400,
          popoverTitle: "",
          rightAlignClassName: "dt-button-right",
          tag: u.dom.collection.tag,
        },
        s
      );
      var f = r.node();
      var close = function () {
        c = true;
        _fadeOut(t(".dt-button-collection"), d.fade, function () {
          t(this || e).detach();
        });
        t(
          l.buttons('[aria-haspopup="true"][aria-expanded="true"]').nodes()
        ).attr("aria-expanded", "false");
        t("div.dt-button-background").off("click.dtb-collection");
        Buttons.background(false, d.backgroundClassName, d.fade, f);
        t(n).off("resize.resize.dtb-collection");
        t("body").off(".dtb-collection");
        l.off("buttons-action.b-internal");
        l.off("destroy");
      };
      if (false !== i) {
        var p = t(
          l.buttons('[aria-haspopup="true"][aria-expanded="true"]').nodes()
        );
        if (p.length) {
          f.closest("div.dt-button-collection").length && (f = p.eq(0));
          close();
        }
        var h = t(".dt-button", i).length;
        var b = "";
        3 === h
          ? (b = "dtb-b3")
          : 2 === h
          ? (b = "dtb-b2")
          : 1 === h && (b = "dtb-b1");
        var v = t("<div/>")
          .addClass("dt-button-collection")
          .addClass(d.collectionLayout)
          .addClass(d.splitAlignClass)
          .addClass(b)
          .css("display", "none");
        i = t(i).addClass(d.contentClassName).attr("role", "menu").appendTo(v);
        f.attr("aria-expanded", "true");
        f.parents("body")[0] !== o.body && (f = o.body.lastChild);
        d.popoverTitle
          ? v.prepend(
              '<div class="dt-button-collection-title">' +
                d.popoverTitle +
                "</div>"
            )
          : d.collectionTitle &&
            v.prepend(
              '<div class="dt-button-collection-title">' +
                d.collectionTitle +
                "</div>"
            );
        d.closeButton &&
          v
            .prepend('<div class="dtb-popover-close">x</div>')
            .addClass("dtb-collection-closeable");
        _fadeIn(v.insertAfter(f), d.fade);
        var g = t(r.table().container());
        var m = v.css("position");
        if ("container" === d.span || "dt-container" === d.align) {
          f = f.parent();
          v.css("width", g.width());
        }
        if ("absolute" === m) {
          var y = t(f[0].offsetParent);
          var x = f.position();
          var _ = f.offset();
          var C = y.offset();
          var w = y.position();
          var A = n.getComputedStyle(y[0]);
          C.height = y.outerHeight();
          C.width = y.width() + parseFloat(A.paddingLeft);
          C.right = C.left + C.width;
          C.bottom = C.top + C.height;
          var k = x.top + f.outerHeight();
          var T = x.left;
          v.css({ top: k, left: T });
          A = n.getComputedStyle(v[0]);
          var B = v.offset();
          B.height = v.outerHeight();
          B.width = v.outerWidth();
          B.right = B.left + B.width;
          B.bottom = B.top + B.height;
          B.marginTop = parseFloat(A.marginTop);
          B.marginBottom = parseFloat(A.marginBottom);
          d.dropup && (k = x.top - B.height - B.marginTop - B.marginBottom);
          ("button-right" === d.align || v.hasClass(d.rightAlignClassName)) &&
            (T = x.left - B.width + f.outerWidth());
          if ("dt-container" === d.align || "container" === d.align) {
            T < x.left && (T = -x.left);
            T + B.width > C.width && (T = C.width - B.width);
          }
          w.left + T + B.width > t(n).width() &&
            (T = t(n).width() - B.width - w.left);
          _.left + T < 0 && (T = -_.left);
          w.top + k + B.height > t(n).height() + t(n).scrollTop() &&
            (k = x.top - B.height - B.marginTop - B.marginBottom);
          w.top + k < t(n).scrollTop() && (k = x.top + f.outerHeight());
          v.css({ top: k, left: T });
        } else {
          m = function () {
            var e = t(n).height() / 2;
            var o = v.height() / 2;
            o > e && (o = e);
            v.css("marginTop", -1 * o);
          };
          m();
          t(n).on("resize.dtb-collection", function () {
            m();
          });
        }
        d.background &&
          Buttons.background(
            true,
            d.backgroundClassName,
            d.fade,
            d.backgroundHost || f
          );
        t("div.dt-button-background").on(
          "click.dtb-collection",
          function () {}
        );
        d.autoClose &&
          setTimeout(function () {
            l.on("buttons-action.b-internal", function (t, n, e, o) {
              o[0] !== f[0] && close();
            });
          }, 0);
        t(v).trigger("buttons-popover.dt");
        l.on("destroy", close);
        setTimeout(function () {
          c = false;
          t("body")
            .on("click.dtb-collection", function (n) {
              if (!c) {
                var e = t.fn.addBack ? "addBack" : "andSelf";
                var o = t(n.target).parent()[0];
                ((!t(n.target).parents()[e]().filter(i).length &&
                  !t(o).hasClass("dt-buttons")) ||
                  t(n.target).hasClass("dt-button-background")) &&
                  close();
              }
            })
            .on("keyup.dtb-collection", function (t) {
              27 === t.keyCode && close();
            });
        }, 0);
      } else close();
    },
  });
  /**
   * Show / hide a background layer behind a collection
   * @param  {boolean} Flag to indicate if the background should be shown or
   *   hidden
   * @param  {string} Class to assign to the background
   * @static
   */ Buttons.background = function (n, r, s, a) {
    s === i && (s = 400);
    a || (a = o.body);
    n
      ? _fadeIn(
          t("<div/>").addClass(r).css("display", "none").insertAfter(a),
          s
        )
      : _fadeOut(t("div." + r), s, function () {
          t(this || e)
            .removeClass(r)
            .remove();
        });
  };
  /**
   * Instance selector - select Buttons instances based on an instance selector
   * value from the buttons assigned to a DataTable. This is only useful if
   * multiple instances are attached to a DataTable.
   * @param  {string|int|array} Instance selector - see `instance-selector`
   *   documentation on the DataTables site
   * @param  {array} Button instance array that was attached to the DataTables
   *   settings object
   * @return {array} Buttons instances
   * @static
   */ Buttons.instanceSelector = function (n, e) {
    if (n === i || null === n)
      return t.map(e, function (t) {
        return t.inst;
      });
    var o = [];
    var r = t.map(e, function (t) {
      return t.name;
    });
    var process = function (n) {
      if (Array.isArray(n))
        for (var i = 0, s = n.length; i < s; i++) process(n[i]);
      else if ("string" === typeof n)
        if (-1 !== n.indexOf(",")) process(n.split(","));
        else {
          var a = t.inArray(n.trim(), r);
          -1 !== a && o.push(e[a].inst);
        }
      else
        "number" === typeof n
          ? o.push(e[n].inst)
          : "object" === typeof n && o.push(n);
    };
    process(n);
    return o;
  };
  /**
   * Button selector - select one or more buttons from a selector input so some
   * operation can be performed on them.
   * @param  {array} Button instances array that the selector should operate on
   * @param  {string|int|node|jQuery|array} Button selector - see
   *   `button-selector` documentation on the DataTables site
   * @return {array} Array of objects containing `inst` and `idx` properties of
   *   the selected buttons so you know which instance each button belongs to.
   * @static
   */ Buttons.buttonSelector = function (n, o) {
    var r = [];
    var nodeBuilder = function (t, n, e) {
      var o;
      var r;
      for (var s = 0, a = n.length; s < a; s++) {
        o = n[s];
        if (o) {
          r = e !== i ? e + s : s + "";
          t.push({ node: o.node, name: o.conf.name, idx: r });
          o.buttons && nodeBuilder(t, o.buttons, r + "-");
        }
      }
    };
    var run = function (n, o) {
      var s, a;
      var l = [];
      nodeBuilder(l, o.s.buttons);
      var u = t.map(l, function (t) {
        return t.node;
      });
      if (Array.isArray(n) || n instanceof t)
        for (s = 0, a = n.length; s < a; s++) run(n[s], o);
      else if (null === n || n === i || "*" === n)
        for (s = 0, a = l.length; s < a; s++)
          r.push({ inst: o, node: l[s].node });
      else if ("number" === typeof n)
        o.s.buttons[n] && r.push({ inst: o, node: o.s.buttons[n].node });
      else if ("string" === typeof n)
        if (-1 !== n.indexOf(",")) {
          var c = n.split(",");
          for (s = 0, a = c.length; s < a; s++) run(c[s].trim(), o);
        } else if (n.match(/^\d+(\-\d+)*$/)) {
          var d = t.map(l, function (t) {
            return t.idx;
          });
          r.push({ inst: o, node: l[t.inArray(n, d)].node });
        } else if (-1 !== n.indexOf(":name")) {
          var f = n.replace(":name", "");
          for (s = 0, a = l.length; s < a; s++)
            l[s].name === f && r.push({ inst: o, node: l[s].node });
        } else
          t(u)
            .filter(n)
            .each(function () {
              r.push({ inst: o, node: this || e });
            });
      else if ("object" === typeof n && n.nodeName) {
        var p = t.inArray(n, u);
        -1 !== p && r.push({ inst: o, node: u[p] });
      }
    };
    for (var s = 0, a = n.length; s < a; s++) {
      var l = n[s];
      run(o, l);
    }
    return r;
  };
  /**
   * Default function used for formatting output data.
   * @param {*} str Data to strip
   */ Buttons.stripData = function (t, n) {
    if ("string" !== typeof t) return t;
    t = t.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "");
    t = t.replace(/<!\-\-.*?\-\->/g, "");
    (n && !n.stripHtml) || (t = t.replace(/<[^>]*>/g, ""));
    (n && !n.trim) || (t = t.replace(/^\s+|\s+$/g, ""));
    (n && !n.stripNewlines) || (t = t.replace(/\n/g, " "));
    if (!n || n.decodeEntities) {
      c.innerHTML = t;
      t = c.value;
    }
    return t;
  };
  /**
   * Buttons defaults. For full documentation, please refer to the docs/option
   * directory or the DataTables site.
   * @type {Object}
   * @static
   */ Buttons.defaults = {
    buttons: ["copy", "excel", "csv", "pdf", "print"],
    name: "main",
    tabIndex: 0,
    dom: {
      container: { tag: "div", className: "dt-buttons" },
      collection: { tag: "div", className: "" },
      button: {
        tag: "button",
        className: "dt-button",
        active: "active",
        disabled: "disabled",
        spacerClass: "",
      },
      buttonLiner: { tag: "span", className: "" },
      split: { tag: "div", className: "dt-button-split" },
      splitWrapper: { tag: "div", className: "dt-btn-split-wrapper" },
      splitDropdown: {
        tag: "button",
        text: "&#x25BC;",
        className: "dt-btn-split-drop",
        align: "split-right",
        splitAlignClass: "dt-button-split-left",
      },
      splitDropdownButton: {
        tag: "button",
        className: "dt-btn-split-drop-button dt-button",
      },
      splitCollection: { tag: "div", className: "dt-button-split-collection" },
    },
  };
  /**
   * Version information
   * @type {string}
   * @static
   */ Buttons.version = "2.2.2";
  t.extend(l, {
    collection: {
      text: function (t) {
        return t.i18n("buttons.collection", "Collection");
      },
      className: "buttons-collection",
      closeButton: false,
      init: function (t, n, e) {
        n.attr("aria-expanded", false);
      },
      action: function (t, n, e, o) {
        o._collection.parents("body").length
          ? this.popover(false, o)
          : this.popover(o._collection, o);
      },
      attr: { "aria-haspopup": true },
    },
    split: {
      text: function (t) {
        return t.i18n("buttons.split", "Split");
      },
      className: "buttons-split",
      closeButton: false,
      init: function (t, n, e) {
        return n.attr("aria-expanded", false);
      },
      action: function (t, n, e, o) {
        this.popover(o._collection, o);
      },
      attr: { "aria-haspopup": true },
    },
    copy: function (t, n) {
      if (l.copyHtml5) return "copyHtml5";
    },
    csv: function (t, n) {
      if (l.csvHtml5 && l.csvHtml5.available(t, n)) return "csvHtml5";
    },
    excel: function (t, n) {
      if (l.excelHtml5 && l.excelHtml5.available(t, n)) return "excelHtml5";
    },
    pdf: function (t, n) {
      if (l.pdfHtml5 && l.pdfHtml5.available(t, n)) return "pdfHtml5";
    },
    pageLength: function (n) {
      var o = n.settings()[0].aLengthMenu;
      var i = [];
      var r = [];
      var text = function (t) {
        return t.i18n(
          "buttons.pageLength",
          { "-1": "Show all rows", _: "Show %d rows" },
          t.page.len()
        );
      };
      if (Array.isArray(o[0])) {
        i = o[0];
        r = o[1];
      } else
        for (var s = 0; s < o.length; s++) {
          var a = o[s];
          if (t.isPlainObject(a)) {
            i.push(a.value);
            r.push(a.label);
          } else {
            i.push(a);
            r.push(a);
          }
        }
      return {
        extend: "collection",
        text: text,
        className: "buttons-page-length",
        autoClose: true,
        buttons: t.map(i, function (t, n) {
          return {
            text: r[n],
            className: "button-page-length",
            action: function (n, e) {
              e.page.len(t).draw();
            },
            init: function (n, o, i) {
              var r = this || e;
              var fn = function () {
                r.active(n.page.len() === t);
              };
              n.on("length.dt" + i.namespace, fn);
              fn();
            },
            destroy: function (t, n, e) {
              t.off("length.dt" + e.namespace);
            },
          };
        }),
        init: function (t, n, o) {
          var i = this || e;
          t.on("length.dt" + o.namespace, function () {
            i.text(o.text);
          });
        },
        destroy: function (t, n, e) {
          t.off("length.dt" + e.namespace);
        },
      };
    },
    spacer: {
      style: "empty",
      spacer: true,
      text: function (t) {
        return t.i18n("buttons.spacer", "");
      },
    },
  });
  r.Api.register("buttons()", function (t, n) {
    if (n === i) {
      n = t;
      t = i;
    }
    (this || e).selector.buttonGroup = t;
    var o = this.iterator(
      true,
      "table",
      function (e) {
        if (e._buttons)
          return Buttons.buttonSelector(
            Buttons.instanceSelector(t, e._buttons),
            n
          );
      },
      true
    );
    o._groupSelector = t;
    return o;
  });
  r.Api.register("button()", function (t, n) {
    var e = this.buttons(t, n);
    e.length > 1 && e.splice(1, e.length);
    return e;
  });
  r.Api.registerPlural("buttons().active()", "button().active()", function (t) {
    return t === i
      ? this.map(function (t) {
          return t.inst.active(t.node);
        })
      : this.each(function (n) {
          n.inst.active(n.node, t);
        });
  });
  r.Api.registerPlural("buttons().action()", "button().action()", function (t) {
    return t === i
      ? this.map(function (t) {
          return t.inst.action(t.node);
        })
      : this.each(function (n) {
          n.inst.action(n.node, t);
        });
  });
  r.Api.registerPlural(
    "buttons().collectionRebuild()",
    "button().collectionRebuild()",
    function (t) {
      return this.each(function (n) {
        for (var e = 0; e < t.length; e++)
          "object" === typeof t[e] && (t[e].parentConf = n);
        n.inst.collectionRebuild(n.node, t);
      });
    }
  );
  r.Api.register(["buttons().enable()", "button().enable()"], function (t) {
    return this.each(function (n) {
      n.inst.enable(n.node, t);
    });
  });
  r.Api.register(["buttons().disable()", "button().disable()"], function () {
    return this.each(function (t) {
      t.inst.disable(t.node);
    });
  });
  r.Api.register("button().index()", function () {
    var t = null;
    this.each(function (n) {
      var e = n.inst.index(n.node);
      null !== e && (t = e);
    });
    return t;
  });
  r.Api.registerPlural("buttons().nodes()", "button().node()", function () {
    var n = t();
    t(
      this.each(function (t) {
        n = n.add(t.inst.node(t.node));
      })
    );
    return n;
  });
  r.Api.registerPlural(
    "buttons().processing()",
    "button().processing()",
    function (t) {
      return t === i
        ? this.map(function (t) {
            return t.inst.processing(t.node);
          })
        : this.each(function (n) {
            n.inst.processing(n.node, t);
          });
    }
  );
  r.Api.registerPlural("buttons().text()", "button().text()", function (t) {
    return t === i
      ? this.map(function (t) {
          return t.inst.text(t.node);
        })
      : this.each(function (n) {
          n.inst.text(n.node, t);
        });
  });
  r.Api.registerPlural(
    "buttons().trigger()",
    "button().trigger()",
    function () {
      return this.each(function (t) {
        t.inst.node(t.node).trigger("click");
      });
    }
  );
  r.Api.register("button().popover()", function (t, n) {
    return this.map(function (o) {
      return o.inst._popover(t, this.button((this || e)[0].node), n);
    });
  });
  r.Api.register("buttons().containers()", function () {
    var n = t();
    var o = (this || e)._groupSelector;
    this.iterator(true, "table", function (t) {
      if (t._buttons) {
        var e = Buttons.instanceSelector(o, t._buttons);
        for (var i = 0, r = e.length; i < r; i++) n = n.add(e[i].container());
      }
    });
    return n;
  });
  r.Api.register("buttons().container()", function () {
    return this.containers().eq(0);
  });
  r.Api.register("button().add()", function (t, n, o) {
    var i = (this || e).context;
    if (i.length) {
      var r = Buttons.instanceSelector(
        (this || e)._groupSelector,
        i[0]._buttons
      );
      r.length && r[0].add(n, t, o);
    }
    return this.button((this || e)._groupSelector, t);
  });
  r.Api.register("buttons().destroy()", function () {
    this.pluck("inst")
      .unique()
      .each(function (t) {
        t.destroy();
      });
    return this || e;
  });
  r.Api.registerPlural("buttons().remove()", "buttons().remove()", function () {
    this.each(function (t) {
      t.inst.remove(t.node);
    });
    return this || e;
  });
  var u;
  r.Api.register("buttons.info()", function (n, o, r) {
    var s = this || e;
    if (false === n) {
      this.off("destroy.btn-info");
      _fadeOut(t("#datatables_buttons_info"), 400, function () {
        t(this || e).remove();
      });
      clearTimeout(u);
      u = null;
      return this || e;
    }
    u && clearTimeout(u);
    t("#datatables_buttons_info").length &&
      t("#datatables_buttons_info").remove();
    n = n ? "<h2>" + n + "</h2>" : "";
    _fadeIn(
      t('<div id="datatables_buttons_info" class="dt-button-info"/>')
        .html(n)
        .append(t("<div/>")["string" === typeof o ? "html" : "append"](o))
        .css("display", "none")
        .appendTo("body")
    );
    r !== i &&
      0 !== r &&
      (u = setTimeout(function () {
        s.buttons.info(false);
      }, r));
    this.on("destroy.btn-info", function () {
      s.buttons.info(false);
    });
    return this || e;
  });
  r.Api.register("buttons.exportData()", function (t) {
    if ((this || e).context.length)
      return _exportData(new r.Api((this || e).context[0]), t);
  });
  r.Api.register("buttons.exportInfo()", function (t) {
    t || (t = {});
    return {
      filename: _filename(t),
      title: _title(t),
      messageTop: _message(this || e, t.message || t.messageTop, "top"),
      messageBottom: _message(this || e, t.messageBottom, "bottom"),
    };
  });
  /**
   * Get the file name for an exported file.
   *
   * @param {object}	config Button configuration
   * @param {boolean} incExtension Include the file name extension
   */ var _filename = function (n) {
    var e =
      "*" === n.filename &&
      "*" !== n.title &&
      n.title !== i &&
      null !== n.title &&
      "" !== n.title
        ? n.title
        : n.filename;
    "function" === typeof e && (e = e());
    if (e === i || null === e) return null;
    -1 !== e.indexOf("*") &&
      (e = e.replace("*", t("head > title").text()).trim());
    e = e.replace(/[^a-zA-Z0-9_\u00A1-\uFFFF\.,\-_ !\(\)]/g, "");
    var o = _stringOrFunction(n.extension);
    o || (o = "");
    return e + o;
  };
  /**
   * Simply utility method to allow parameters to be given as a function
   *
   * @param {undefined|string|function} option Option
   * @return {null|string} Resolved value
   */ var _stringOrFunction = function (t) {
    return null === t || t === i ? null : "function" === typeof t ? t() : t;
  };
  /**
   * Get the title for an exported file.
   *
   * @param {object} config	Button configuration
   */ var _title = function (n) {
    var e = _stringOrFunction(n.title);
    return null === e
      ? null
      : -1 !== e.indexOf("*")
      ? e.replace("*", t("head > title").text() || "Exported data")
      : e;
  };
  var _message = function (n, e, o) {
    var i = _stringOrFunction(e);
    if (null === i) return null;
    var r = t("caption", n.table().container()).eq(0);
    if ("*" === i) {
      var s = r.css("caption-side");
      return s !== o ? null : r.length ? r.text() : "";
    }
    return i;
  };
  var c = t("<textarea/>")[0];
  var _exportData = function (n, e) {
    var o = t.extend(
      true,
      {},
      {
        rows: null,
        columns: "",
        modifier: { search: "applied", order: "applied" },
        orthogonal: "display",
        stripHtml: true,
        stripNewlines: true,
        decodeEntities: true,
        trim: true,
        format: {
          header: function (t) {
            return Buttons.stripData(t, o);
          },
          footer: function (t) {
            return Buttons.stripData(t, o);
          },
          body: function (t) {
            return Buttons.stripData(t, o);
          },
        },
        customizeData: null,
      },
      e
    );
    var r = n
      .columns(o.columns)
      .indexes()
      .map(function (t) {
        var e = n.column(t).header();
        return o.format.header(e.innerHTML, t, e);
      })
      .toArray();
    var s = n.table().footer()
      ? n
          .columns(o.columns)
          .indexes()
          .map(function (t) {
            var e = n.column(t).footer();
            return o.format.footer(e ? e.innerHTML : "", t, e);
          })
          .toArray()
      : null;
    var a = t.extend({}, o.modifier);
    n.select &&
      "function" === typeof n.select.info &&
      a.selected === i &&
      n.rows(o.rows, t.extend({ selected: true }, a)).any() &&
      t.extend(a, { selected: true });
    var l = n.rows(o.rows, a).indexes().toArray();
    var u = n.cells(l, o.columns);
    var c = u.render(o.orthogonal).toArray();
    var d = u.nodes().toArray();
    var f = r.length;
    var p = f > 0 ? c.length / f : 0;
    var h = [];
    var b = 0;
    for (var v = 0, g = p; v < g; v++) {
      var m = [f];
      for (var y = 0; y < f; y++) {
        m[y] = o.format.body(c[b], v, y, d[b]);
        b++;
      }
      h[v] = m;
    }
    var x = { header: r, footer: s, body: h };
    o.customizeData && o.customizeData(x);
    return x;
  };
  t.fn.dataTable.Buttons = Buttons;
  t.fn.DataTable.Buttons = Buttons;
  t(o).on("init.dt plugin-init.dt", function (t, n) {
    if ("dt" === t.namespace) {
      var e = n.oInit.buttons || r.defaults.buttons;
      e && !n._buttons && new Buttons(n, e).container();
    }
  });
  function _init(t, n) {
    var e = new r.Api(t);
    var o = n || e.init().buttons || r.defaults.buttons;
    return new Buttons(e, o).container();
  }
  r.ext.feature.push({ fnInit: _init, cFeature: "B" });
  r.ext.features && r.ext.features.register("buttons", _init);
  return Buttons;
});
var i = o;
export { i as default };
