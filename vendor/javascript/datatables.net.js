import * as e from "jquery";
var t = "default" in e ? e.default : e;
var n =
  "undefined" !== typeof globalThis
    ? globalThis
    : "undefined" !== typeof self
    ? self
    : global;
var r = {};
(function (e) {
  r = function (n, r) {
    n || (n = window);
    r || (r = "undefined" !== typeof window ? t : t(n));
    return e(r, n, n.document);
  };
})(function (e, t, r, i) {
  /**
   * DataTables is a plug-in for the jQuery Javascript library. It is a highly
   * flexible tool, based upon the foundations of progressive enhancement,
   * which will add advanced interaction controls to any HTML table. For a
   * full list of features please refer to
   * [DataTables.net](href="http://datatables.net).
   *
   * Note that the `DataTable` object is not a global variable but is aliased
   * to `jQuery.fn.DataTable` and `jQuery.fn.dataTable` through which it may
   * be  accessed.
   *
   *  @class
   *  @param {object} [init={}] Configuration object for DataTables. Options
   *    are defined by {@link DataTable.defaults}
   *  @requires jQuery 1.7+
   *
   *  @example
   *    // Basic initialisation
   *    $(document).ready( function {
   *      $('#example').dataTable();
   *    } );
   *
   *  @example
   *    // Initialisation with configuration options - in this case, disable
   *    // pagination and sorting.
   *    $(document).ready( function {
   *      $('#example').dataTable( {
   *        "paginate": false,
   *        "sort": false
   *      } );
   *    } );
   */
  var DataTable = function (t, r) {
    if ((this || n) instanceof DataTable) return e(t).DataTable(r);
    /**
     * Perform a jQuery selector action on the table's TR elements (from the tbody) and
     * return the resulting jQuery object.
     *  @param {string|node|jQuery} sSelector jQuery selector or node collection to act on
     *  @param {object} [oOpts] Optional parameters for modifying the rows to be included
     *  @param {string} [oOpts.filter=none] Select TR elements that meet the current filter
     *    criterion ("applied") or all TR elements (i.e. no filter).
     *  @param {string} [oOpts.order=current] Order of the TR elements in the processed array.
     *    Can be either 'current', whereby the current sorting of the table is used, or
     *    'original' whereby the original order the data was read into the table is used.
     *  @param {string} [oOpts.page=all] Limit the selection to the currently displayed page
     *    ("current") or not ("all"). If 'current' is given, then order is assumed to be
     *    'current' and filter is 'applied', regardless of what they might be given as.
     *  @returns {object} jQuery object, filtered by the given selector.
     *  @dtopt API
     *  @deprecated Since v1.10
     *
     *  @example
     *    $(document).ready(function() {
     *      var oTable = $('#example').dataTable();
     *
     *      // Highlight every second row
     *      oTable.$('tr:odd').css('backgroundColor', 'blue');
     *    } );
     *
     *  @example
     *    $(document).ready(function() {
     *      var oTable = $('#example').dataTable();
     *
     *      // Filter to rows with 'Webkit' in them, add a background colour and then
     *      // remove the filter, thus highlighting the 'Webkit' rows only.
     *      oTable.fnFilter('Webkit');
     *      oTable.$('tr', {"search": "applied"}).css('backgroundColor', 'blue');
     *      oTable.fnFilter('');
     *    } );
     */ r = t;
    (this || n).$ = function (e, t) {
      return this.api(true).$(e, t);
    };
    /**
     * Almost identical to $ in operation, but in this case returns the data for the matched
     * rows - as such, the jQuery selector used should match TR row nodes or TD/TH cell nodes
     * rather than any descendants, so the data can be obtained for the row/cell. If matching
     * rows are found, the data returned is the original data array/object that was used to
     * create the row (or a generated array if from a DOM source).
     *
     * This method is often useful in-combination with $ where both functions are given the
     * same parameters and the array indexes will match identically.
     *  @param {string|node|jQuery} sSelector jQuery selector or node collection to act on
     *  @param {object} [oOpts] Optional parameters for modifying the rows to be included
     *  @param {string} [oOpts.filter=none] Select elements that meet the current filter
     *    criterion ("applied") or all elements (i.e. no filter).
     *  @param {string} [oOpts.order=current] Order of the data in the processed array.
     *    Can be either 'current', whereby the current sorting of the table is used, or
     *    'original' whereby the original order the data was read into the table is used.
     *  @param {string} [oOpts.page=all] Limit the selection to the currently displayed page
     *    ("current") or not ("all"). If 'current' is given, then order is assumed to be
     *    'current' and filter is 'applied', regardless of what they might be given as.
     *  @returns {array} Data for the matched elements. If any elements, as a result of the
     *    selector, were not TR, TD or TH elements in the DataTable, they will have a null
     *    entry in the array.
     *  @dtopt API
     *  @deprecated Since v1.10
     *
     *  @example
     *    $(document).ready(function() {
     *      var oTable = $('#example').dataTable();
     *
     *      // Get the data from the first row in the table
     *      var data = oTable._('tr:first');
     *
     *      // Do something useful with the data
     *      alert( "First cell is: "+data[0] );
     *    } );
     *
     *  @example
     *    $(document).ready(function() {
     *      var oTable = $('#example').dataTable();
     *
     *      // Filter to 'Webkit' and get all data for
     *      oTable.fnFilter('Webkit');
     *      var data = oTable._('tr', {"search": "applied"});
     *
     *      // Do something with the data
     *      alert( data.length+" rows matched the search" );
     *    } );
     */ (this || n)._ = function (e, t) {
      return this.api(true).rows(e, t).data();
    };
    /**
     * Create a DataTables Api instance, with the currently selected tables for
     * the Api's context.
     * @param {boolean} [traditional=false] Set the API instance's context to be
     *   only the table referred to by the `DataTable.ext.iApiIndex` option, as was
     *   used in the API presented by DataTables 1.9- (i.e. the traditional mode),
     *   or if all tables captured in the jQuery object should be used.
     * @return {DataTables.Api}
     */ (this || n).api = function (e) {
      return new o(
        e ? _fnSettingsFromNode((this || n)[l.iApiIndex]) : this || n
      );
    };
    /**
     * Add a single new row or multiple rows of data to the table. Please note
     * that this is suitable for client-side processing only - if you are using
     * server-side processing (i.e. "bServerSide": true), then to add data, you
     * must add it to the data source, i.e. the server-side, through an Ajax call.
     *  @param {array|object} data The data to be added to the table. This can be:
     *    <ul>
     *      <li>1D array of data - add a single row with the data provided</li>
     *      <li>2D array of arrays - add multiple rows in a single call</li>
     *      <li>object - data object when using <i>mData</i></li>
     *      <li>array of objects - multiple data objects when using <i>mData</i></li>
     *    </ul>
     *  @param {bool} [redraw=true] redraw the table or not
     *  @returns {array} An array of integers, representing the list of indexes in
     *    <i>aoData</i> ({@link DataTable.models.oSettings}) that have been added to
     *    the table.
     *  @dtopt API
     *  @deprecated Since v1.10
     *
     *  @example
     *    // Global var for counter
     *    var giCount = 2;
     *
     *    $(document).ready(function() {
     *      $('#example').dataTable();
     *    } );
     *
     *    function fnClickAddRow() {
     *      $('#example').dataTable().fnAddData( [
     *        giCount+".1",
     *        giCount+".2",
     *        giCount+".3",
     *        giCount+".4" ]
     *      );
     *
     *      giCount++;
     *    }
     */ (this || n).fnAddData = function (t, n) {
      var r = this.api(true);
      var l =
        Array.isArray(t) && (Array.isArray(t[0]) || e.isPlainObject(t[0]))
          ? r.rows.add(t)
          : r.row.add(t);
      (n === i || n) && r.draw();
      return l.flatten().toArray();
    };
    /**
     * This function will make DataTables recalculate the column sizes, based on the data
     * contained in the table and the sizes applied to the columns (in the DOM, CSS or
     * through the sWidth parameter). This can be useful when the width of the table's
     * parent element changes (for example a window resize).
     *  @param {boolean} [bRedraw=true] Redraw the table or not, you will typically want to
     *  @dtopt API
     *  @deprecated Since v1.10
     *
     *  @example
     *    $(document).ready(function() {
     *      var oTable = $('#example').dataTable( {
     *        "sScrollY": "200px",
     *        "bPaginate": false
     *      } );
     *
     *      $(window).on('resize', function () {
     *        oTable.fnAdjustColumnSizing();
     *      } );
     *    } );
     */ (this || n).fnAdjustColumnSizing = function (e) {
      var t = this.api(true).columns.adjust();
      var n = t.settings()[0];
      var r = n.oScroll;
      e === i || e
        ? t.draw(false)
        : ("" === r.sX && "" === r.sY) || _fnScrollDraw(n);
    };
    /**
     * Quickly and simply clear a table
     *  @param {bool} [bRedraw=true] redraw the table or not
     *  @dtopt API
     *  @deprecated Since v1.10
     *
     *  @example
     *    $(document).ready(function() {
     *      var oTable = $('#example').dataTable();
     *
     *      // Immediately 'nuke' the current rows (perhaps waiting for an Ajax callback...)
     *      oTable.fnClearTable();
     *    } );
     */ (this || n).fnClearTable = function (e) {
      var t = this.api(true).clear();
      (e === i || e) && t.draw();
    };
    /**
     * The exact opposite of 'opening' a row, this function will close any rows which
     * are currently 'open'.
     *  @param {node} nTr the table row to 'close'
     *  @returns {int} 0 on success, or 1 if failed (can't find the row)
     *  @dtopt API
     *  @deprecated Since v1.10
     *
     *  @example
     *    $(document).ready(function() {
     *      var oTable;
     *
     *      // 'open' an information row when a row is clicked on
     *      $('#example tbody tr').click( function () {
     *        if ( oTable.fnIsOpen(this) ) {
     *          oTable.fnClose( this );
     *        } else {
     *          oTable.fnOpen( this, "Temporary row opened", "info_row" );
     *        }
     *      } );
     *
     *      oTable = $('#example').dataTable();
     *    } );
     */ (this || n).fnClose = function (e) {
      this.api(true).row(e).child.hide();
    };
    /**
     * Remove a row for the table
     *  @param {mixed} target The index of the row from aoData to be deleted, or
     *    the TR element you want to delete
     *  @param {function|null} [callBack] Callback function
     *  @param {bool} [redraw=true] Redraw the table or not
     *  @returns {array} The row that was deleted
     *  @dtopt API
     *  @deprecated Since v1.10
     *
     *  @example
     *    $(document).ready(function() {
     *      var oTable = $('#example').dataTable();
     *
     *      // Immediately remove the first row
     *      oTable.fnDeleteRow( 0 );
     *    } );
     */ (this || n).fnDeleteRow = function (e, t, r) {
      var l = this.api(true);
      var o = l.rows(e);
      var s = o.settings()[0];
      var f = s.aoData[o[0][0]];
      o.remove();
      t && t.call(this || n, s, f);
      (r === i || r) && l.draw();
      return f;
    };
    /**
     * Restore the table to it's original state in the DOM by removing all of DataTables
     * enhancements, alterations to the DOM structure of the table and event listeners.
     *  @param {boolean} [remove=false] Completely remove the table from the DOM
     *  @dtopt API
     *  @deprecated Since v1.10
     *
     *  @example
     *    $(document).ready(function() {
     *      // This example is fairly pointless in reality, but shows how fnDestroy can be used
     *      var oTable = $('#example').dataTable();
     *      oTable.fnDestroy();
     *    } );
     */ (this || n).fnDestroy = function (e) {
      this.api(true).destroy(e);
    };
    /**
     * Redraw the table
     *  @param {bool} [complete=true] Re-filter and resort (if enabled) the table before the draw.
     *  @dtopt API
     *  @deprecated Since v1.10
     *
     *  @example
     *    $(document).ready(function() {
     *      var oTable = $('#example').dataTable();
     *
     *      // Re-draw the table - you wouldn't want to do it here, but it's an example :-)
     *      oTable.fnDraw();
     *    } );
     */ (this || n).fnDraw = function (e) {
      this.api(true).draw(e);
    };
    /**
     * Filter the input based on data
     *  @param {string} sInput String to filter the table on
     *  @param {int|null} [iColumn] Column to limit filtering to
     *  @param {bool} [bRegex=false] Treat as regular expression or not
     *  @param {bool} [bSmart=true] Perform smart filtering or not
     *  @param {bool} [bShowGlobal=true] Show the input global filter in it's input box(es)
     *  @param {bool} [bCaseInsensitive=true] Do case-insensitive matching (true) or not (false)
     *  @dtopt API
     *  @deprecated Since v1.10
     *
     *  @example
     *    $(document).ready(function() {
     *      var oTable = $('#example').dataTable();
     *
     *      // Sometime later - filter...
     *      oTable.fnFilter( 'test string' );
     *    } );
     */ (this || n).fnFilter = function (e, t, n, r, l, o) {
      var s = this.api(true);
      null === t || t === i
        ? s.search(e, n, r, o)
        : s.column(t).search(e, n, r, o);
      s.draw();
    };
    /**
     * Get the data for the whole table, an individual row or an individual cell based on the
     * provided parameters.
     *  @param {int|node} [src] A TR row node, TD/TH cell node or an integer. If given as
     *    a TR node then the data source for the whole row will be returned. If given as a
     *    TD/TH cell node then iCol will be automatically calculated and the data for the
     *    cell returned. If given as an integer, then this is treated as the aoData internal
     *    data index for the row (see fnGetPosition) and the data for that row used.
     *  @param {int} [col] Optional column index that you want the data of.
     *  @returns {array|object|string} If mRow is undefined, then the data for all rows is
     *    returned. If mRow is defined, just data for that row, and is iCol is
     *    defined, only data for the designated cell is returned.
     *  @dtopt API
     *  @deprecated Since v1.10
     *
     *  @example
     *    // Row data
     *    $(document).ready(function() {
     *      oTable = $('#example').dataTable();
     *
     *      oTable.$('tr').click( function () {
     *        var data = oTable.fnGetData( this );
     *        // ... do something with the array / object of data for the row
     *      } );
     *    } );
     *
     *  @example
     *    // Individual cell data
     *    $(document).ready(function() {
     *      oTable = $('#example').dataTable();
     *
     *      oTable.$('td').click( function () {
     *        var sData = oTable.fnGetData( this );
     *        alert( 'The cell clicked on had the value of '+sData );
     *      } );
     *    } );
     */ (this || n).fnGetData = function (e, t) {
      var n = this.api(true);
      if (e !== i) {
        var r = e.nodeName ? e.nodeName.toLowerCase() : "";
        return t !== i || "td" == r || "th" == r
          ? n.cell(e, t).data()
          : n.row(e).data() || null;
      }
      return n.data().toArray();
    };
    /**
     * Get an array of the TR nodes that are used in the table's body. Note that you will
     * typically want to use the '$' API method in preference to this as it is more
     * flexible.
     *  @param {int} [iRow] Optional row index for the TR element you want
     *  @returns {array|node} If iRow is undefined, returns an array of all TR elements
     *    in the table's body, or iRow is defined, just the TR element requested.
     *  @dtopt API
     *  @deprecated Since v1.10
     *
     *  @example
     *    $(document).ready(function() {
     *      var oTable = $('#example').dataTable();
     *
     *      // Get the nodes from the table
     *      var nNodes = oTable.fnGetNodes( );
     *    } );
     */ (this || n).fnGetNodes = function (e) {
      var t = this.api(true);
      return e !== i ? t.row(e).node() : t.rows().nodes().flatten().toArray();
    };
    /**
     * Get the array indexes of a particular cell from it's DOM element
     * and column index including hidden columns
     *  @param {node} node this can either be a TR, TD or TH in the table's body
     *  @returns {int} If nNode is given as a TR, then a single index is returned, or
     *    if given as a cell, an array of [row index, column index (visible),
     *    column index (all)] is given.
     *  @dtopt API
     *  @deprecated Since v1.10
     *
     *  @example
     *    $(document).ready(function() {
     *      $('#example tbody td').click( function () {
     *        // Get the position of the current data from the node
     *        var aPos = oTable.fnGetPosition( this );
     *
     *        // Get the data array for this row
     *        var aData = oTable.fnGetData( aPos[0] );
     *
     *        // Update the data array and return the value
     *        aData[ aPos[1] ] = 'clicked';
     *        this.innerHTML = 'clicked';
     *      } );
     *
     *      // Init DataTables
     *      oTable = $('#example').dataTable();
     *    } );
     */ (this || n).fnGetPosition = function (e) {
      var t = this.api(true);
      var n = e.nodeName.toUpperCase();
      if ("TR" == n) return t.row(e).index();
      if ("TD" == n || "TH" == n) {
        var r = t.cell(e).index();
        return [r.row, r.columnVisible, r.column];
      }
      return null;
    };
    /**
     * Check to see if a row is 'open' or not.
     *  @param {node} nTr the table row to check
     *  @returns {boolean} true if the row is currently open, false otherwise
     *  @dtopt API
     *  @deprecated Since v1.10
     *
     *  @example
     *    $(document).ready(function() {
     *      var oTable;
     *
     *      // 'open' an information row when a row is clicked on
     *      $('#example tbody tr').click( function () {
     *        if ( oTable.fnIsOpen(this) ) {
     *          oTable.fnClose( this );
     *        } else {
     *          oTable.fnOpen( this, "Temporary row opened", "info_row" );
     *        }
     *      } );
     *
     *      oTable = $('#example').dataTable();
     *    } );
     */ (this || n).fnIsOpen = function (e) {
      return this.api(true).row(e).child.isShown();
    };
    /**
     * This function will place a new row directly after a row which is currently
     * on display on the page, with the HTML contents that is passed into the
     * function. This can be used, for example, to ask for confirmation that a
     * particular record should be deleted.
     *  @param {node} nTr The table row to 'open'
     *  @param {string|node|jQuery} mHtml The HTML to put into the row
     *  @param {string} sClass Class to give the new TD cell
     *  @returns {node} The row opened. Note that if the table row passed in as the
     *    first parameter, is not found in the table, this method will silently
     *    return.
     *  @dtopt API
     *  @deprecated Since v1.10
     *
     *  @example
     *    $(document).ready(function() {
     *      var oTable;
     *
     *      // 'open' an information row when a row is clicked on
     *      $('#example tbody tr').click( function () {
     *        if ( oTable.fnIsOpen(this) ) {
     *          oTable.fnClose( this );
     *        } else {
     *          oTable.fnOpen( this, "Temporary row opened", "info_row" );
     *        }
     *      } );
     *
     *      oTable = $('#example').dataTable();
     *    } );
     */ (this || n).fnOpen = function (e, t, n) {
      return this.api(true).row(e).child(t, n).show().child()[0];
    };
    /**
     * Change the pagination - provides the internal logic for pagination in a simple API
     * function. With this function you can have a DataTables table go to the next,
     * previous, first or last pages.
     *  @param {string|int} mAction Paging action to take: "first", "previous", "next" or "last"
     *    or page number to jump to (integer), note that page 0 is the first page.
     *  @param {bool} [bRedraw=true] Redraw the table or not
     *  @dtopt API
     *  @deprecated Since v1.10
     *
     *  @example
     *    $(document).ready(function() {
     *      var oTable = $('#example').dataTable();
     *      oTable.fnPageChange( 'next' );
     *    } );
     */ (this || n).fnPageChange = function (e, t) {
      var n = this.api(true).page(e);
      (t === i || t) && n.draw(false);
    };
    /**
     * Show a particular column
     *  @param {int} iCol The column whose display should be changed
     *  @param {bool} bShow Show (true) or hide (false) the column
     *  @param {bool} [bRedraw=true] Redraw the table or not
     *  @dtopt API
     *  @deprecated Since v1.10
     *
     *  @example
     *    $(document).ready(function() {
     *      var oTable = $('#example').dataTable();
     *
     *      // Hide the second column after initialisation
     *      oTable.fnSetColumnVis( 1, false );
     *    } );
     */ (this || n).fnSetColumnVis = function (e, t, n) {
      var r = this.api(true).column(e).visible(t);
      (n === i || n) && r.columns.adjust().draw();
    };
    /**
     * Get the settings for a particular table for external manipulation
     *  @returns {object} DataTables settings object. See
     *    {@link DataTable.models.oSettings}
     *  @dtopt API
     *  @deprecated Since v1.10
     *
     *  @example
     *    $(document).ready(function() {
     *      var oTable = $('#example').dataTable();
     *      var oSettings = oTable.fnSettings();
     *
     *      // Show an example parameter from the settings
     *      alert( oSettings._iDisplayStart );
     *    } );
     */ (this || n).fnSettings = function () {
      return _fnSettingsFromNode((this || n)[l.iApiIndex]);
    };
    /**
     * Sort the table by a particular column
     *  @param {int} iCol the data index to sort on. Note that this will not match the
     *    'display index' if you have hidden data entries
     *  @dtopt API
     *  @deprecated Since v1.10
     *
     *  @example
     *    $(document).ready(function() {
     *      var oTable = $('#example').dataTable();
     *
     *      // Sort immediately with columns 0 and 1
     *      oTable.fnSort( [ [0,'asc'], [1,'asc'] ] );
     *    } );
     */ (this || n).fnSort = function (e) {
      this.api(true).order(e).draw();
    };
    /**
     * Attach a sort listener to an element for a given column
     *  @param {node} nNode the element to attach the sort listener to
     *  @param {int} iColumn the column that a click on this node will sort on
     *  @param {function} [fnCallback] callback function when sort is run
     *  @dtopt API
     *  @deprecated Since v1.10
     *
     *  @example
     *    $(document).ready(function() {
     *      var oTable = $('#example').dataTable();
     *
     *      // Sort on column 1, when 'sorter' is clicked on
     *      oTable.fnSortListener( document.getElementById('sorter'), 1 );
     *    } );
     */ (this || n).fnSortListener = function (e, t, n) {
      this.api(true).order.listener(e, t, n);
    };
    /**
     * Update a table cell or row - this method will accept either a single value to
     * update the cell with, an array of values with one element for each column or
     * an object in the same format as the original data source. The function is
     * self-referencing in order to make the multi column updates easier.
     *  @param {object|array|string} mData Data to update the cell/row with
     *  @param {node|int} mRow TR element you want to update or the aoData index
     *  @param {int} [iColumn] The column to update, give as null or undefined to
     *    update a whole row.
     *  @param {bool} [bRedraw=true] Redraw the table or not
     *  @param {bool} [bAction=true] Perform pre-draw actions or not
     *  @returns {int} 0 on success, 1 on error
     *  @dtopt API
     *  @deprecated Since v1.10
     *
     *  @example
     *    $(document).ready(function() {
     *      var oTable = $('#example').dataTable();
     *      oTable.fnUpdate( 'Example update', 0, 0 ); // Single cell
     *      oTable.fnUpdate( ['a', 'b', 'c', 'd', 'e'], $('tbody tr')[0] ); // Row
     *    } );
     */ (this || n).fnUpdate = function (e, t, n, r, l) {
      var o = this.api(true);
      n === i || null === n ? o.row(t).data(e) : o.cell(t, n).data(e);
      (l === i || l) && o.columns.adjust();
      (r === i || r) && o.draw();
      return 0;
    };
    /**
     * Provide a common method for plug-ins to check the version of DataTables being used, in order
     * to ensure compatibility.
     *  @param {string} sVersion Version string to check for, in the format "X.Y.Z". Note that the
     *    formats "X" and "X.Y" are also acceptable.
     *  @returns {boolean} true if this version of DataTables is greater or equal to the required
     *    version, or false if this version of DataTales is not suitable
     *  @method
     *  @dtopt API
     *  @deprecated Since v1.10
     *
     *  @example
     *    $(document).ready(function() {
     *      var oTable = $('#example').dataTable();
     *      alert( oTable.fnVersionCheck( '1.9.0' ) );
     *    } );
     */ (this || n).fnVersionCheck = l.fnVersionCheck;
    var s = this || n;
    var f = r === i;
    var u = (this || n).length;
    f && (r = {});
    (this || n).oApi = (this || n).internal = l.internal;
    for (var c in DataTable.ext.internal)
      c && ((this || n)[c] = _fnExternApiFunc(c));
    this.each(function () {
      var t = {};
      var l = u > 1 ? _fnExtend(t, r, true) : r;
      var o,
        c = 0;
      var d = this.getAttribute("id");
      var h = false;
      var p = DataTable.defaults;
      var v = e(this || n);
      if ("table" == (this || n).nodeName.toLowerCase()) {
        _fnCompatOpts(p);
        _fnCompatCols(p.column);
        _fnCamelToHungarian(p, p, true);
        _fnCamelToHungarian(p.column, p.column, true);
        _fnCamelToHungarian(p, e.extend(l, v.data()), true);
        var _ = DataTable.settings;
        for (c = 0, o = _.length; c < o; c++) {
          var g = _[c];
          if (
            g.nTable == (this || n) ||
            (g.nTHead && g.nTHead.parentNode == (this || n)) ||
            (g.nTFoot && g.nTFoot.parentNode == (this || n))
          ) {
            var m = l.bRetrieve !== i ? l.bRetrieve : p.bRetrieve;
            var S = l.bDestroy !== i ? l.bDestroy : p.bDestroy;
            if (f || m) return g.oInstance;
            if (S) {
              g.oInstance.fnDestroy();
              break;
            }
            _fnLog(g, 0, "Cannot reinitialise DataTable", 3);
            return;
          }
          if (g.sTableId == (this || n).id) {
            _.splice(c, 1);
            break;
          }
        }
        if (null === d || "" === d) {
          d = "DataTables_Table_" + DataTable.ext._unique++;
          (this || n).id = d;
        }
        var D = e.extend(true, {}, DataTable.models.oSettings, {
          sDestroyWidth: v[0].style.width,
          sInstance: d,
          sTableId: d,
        });
        D.nTable = this || n;
        D.oApi = s.internal;
        D.oInit = l;
        _.push(D);
        D.oInstance = 1 === s.length ? s : v.dataTable();
        _fnCompatOpts(l);
        _fnLanguageCompat(l.oLanguage);
        l.aLengthMenu &&
          !l.iDisplayLength &&
          (l.iDisplayLength = Array.isArray(l.aLengthMenu[0])
            ? l.aLengthMenu[0][0]
            : l.aLengthMenu[0]);
        l = _fnExtend(e.extend(true, {}, p), l);
        _fnMap(D.oFeatures, l, [
          "bPaginate",
          "bLengthChange",
          "bFilter",
          "bSort",
          "bSortMulti",
          "bInfo",
          "bProcessing",
          "bAutoWidth",
          "bSortClasses",
          "bServerSide",
          "bDeferRender",
        ]);
        _fnMap(D, l, [
          "asStripeClasses",
          "ajax",
          "fnServerData",
          "fnFormatNumber",
          "sServerMethod",
          "aaSorting",
          "aaSortingFixed",
          "aLengthMenu",
          "sPaginationType",
          "sAjaxSource",
          "sAjaxDataProp",
          "iStateDuration",
          "sDom",
          "bSortCellsTop",
          "iTabIndex",
          "fnStateLoadCallback",
          "fnStateSaveCallback",
          "renderer",
          "searchDelay",
          "rowId",
          ["iCookieDuration", "iStateDuration"],
          ["oSearch", "oPreviousSearch"],
          ["aoSearchCols", "aoPreSearchCols"],
          ["iDisplayLength", "_iDisplayLength"],
        ]);
        _fnMap(D.oScroll, l, [
          ["sScrollX", "sX"],
          ["sScrollXInner", "sXInner"],
          ["sScrollY", "sY"],
          ["bScrollCollapse", "bCollapse"],
        ]);
        _fnMap(D.oLanguage, l, "fnInfoCallback");
        _fnCallbackReg(D, "aoDrawCallback", l.fnDrawCallback, "user");
        _fnCallbackReg(D, "aoServerParams", l.fnServerParams, "user");
        _fnCallbackReg(D, "aoStateSaveParams", l.fnStateSaveParams, "user");
        _fnCallbackReg(D, "aoStateLoadParams", l.fnStateLoadParams, "user");
        _fnCallbackReg(D, "aoStateLoaded", l.fnStateLoaded, "user");
        _fnCallbackReg(D, "aoRowCallback", l.fnRowCallback, "user");
        _fnCallbackReg(D, "aoRowCreatedCallback", l.fnCreatedRow, "user");
        _fnCallbackReg(D, "aoHeaderCallback", l.fnHeaderCallback, "user");
        _fnCallbackReg(D, "aoFooterCallback", l.fnFooterCallback, "user");
        _fnCallbackReg(D, "aoInitComplete", l.fnInitComplete, "user");
        _fnCallbackReg(D, "aoPreDrawCallback", l.fnPreDrawCallback, "user");
        D.rowIdFn = b(l.rowId);
        _fnBrowserDetect(D);
        var C = D.oClasses;
        e.extend(C, DataTable.ext.classes, l.oClasses);
        v.addClass(C.sTable);
        if (D.iInitDisplayStart === i) {
          D.iInitDisplayStart = l.iDisplayStart;
          D._iDisplayStart = l.iDisplayStart;
        }
        if (null !== l.iDeferLoading) {
          D.bDeferLoading = true;
          var y = Array.isArray(l.iDeferLoading);
          D._iRecordsDisplay = y ? l.iDeferLoading[0] : l.iDeferLoading;
          D._iRecordsTotal = y ? l.iDeferLoading[1] : l.iDeferLoading;
        }
        var T = D.oLanguage;
        e.extend(true, T, l.oLanguage);
        if (T.sUrl) {
          e.ajax({
            dataType: "json",
            url: T.sUrl,
            success: function (t) {
              _fnCamelToHungarian(p.oLanguage, t);
              _fnLanguageCompat(t);
              e.extend(true, T, t);
              _fnCallbackFire(D, null, "i18n", [D]);
              _fnInitialise(D);
            },
            error: function () {
              _fnInitialise(D);
            },
          });
          h = true;
        } else _fnCallbackFire(D, null, "i18n", [D]);
        null === l.asStripeClasses &&
          (D.asStripeClasses = [C.sStripeOdd, C.sStripeEven]);
        var w = D.asStripeClasses;
        var x = v.children("tbody").find("tr").eq(0);
        if (
          -1 !==
          e.inArray(
            true,
            e.map(w, function (e, t) {
              return x.hasClass(e);
            })
          )
        ) {
          e("tbody tr", this || n).removeClass(w.join(" "));
          D.asDestroyStripes = w.slice();
        }
        var A = [];
        var F;
        var I = this.getElementsByTagName("thead");
        if (0 !== I.length) {
          _fnDetectHeader(D.aoHeader, I[0]);
          A = _fnGetUniqueThs(D);
        }
        if (null === l.aoColumns) {
          F = [];
          for (c = 0, o = A.length; c < o; c++) F.push(null);
        } else F = l.aoColumns;
        for (c = 0, o = F.length; c < o; c++) _fnAddColumn(D, A ? A[c] : null);
        _fnApplyColumnDefs(D, l.aoColumnDefs, F, function (e, t) {
          _fnColumnOptions(D, e, t);
        });
        if (x.length) {
          var a = function (e, t) {
            return null !== e.getAttribute("data-" + t) ? t : null;
          };
          e(x[0])
            .children("th, td")
            .each(function (e, t) {
              var n = D.aoColumns[e];
              if (n.mData === e) {
                var r = a(t, "sort") || a(t, "order");
                var l = a(t, "filter") || a(t, "search");
                if (null !== r || null !== l) {
                  n.mData = {
                    _: e + ".display",
                    sort: null !== r ? e + ".@data-" + r : i,
                    type: null !== r ? e + ".@data-" + r : i,
                    filter: null !== l ? e + ".@data-" + l : i,
                  };
                  _fnColumnOptions(D, e);
                }
              }
            });
        }
        var L = D.oFeatures;
        var loadedInit = function () {
          if (l.aaSorting === i) {
            var t = D.aaSorting;
            for (c = 0, o = t.length; c < o; c++)
              t[c][1] = D.aoColumns[c].asSorting[0];
          }
          _fnSortingClasses(D);
          L.bSort &&
            _fnCallbackReg(D, "aoDrawCallback", function () {
              if (D.bSorted) {
                var t = _fnSortFlatten(D);
                var n = {};
                e.each(t, function (e, t) {
                  n[t.src] = t.dir;
                });
                _fnCallbackFire(D, null, "order", [D, t, n]);
                _fnSortAria(D);
              }
            });
          _fnCallbackReg(
            D,
            "aoDrawCallback",
            function () {
              (D.bSorted || "ssp" === _fnDataSource(D) || L.bDeferRender) &&
                _fnSortingClasses(D);
            },
            "sc"
          );
          var r = v.children("caption").each(function () {
            (this || n)._captionSide = e(this || n).css("caption-side");
          });
          var s = v.children("thead");
          0 === s.length && (s = e("<thead/>").appendTo(v));
          D.nTHead = s[0];
          var f = v.children("tbody");
          0 === f.length && (f = e("<tbody/>").insertAfter(s));
          D.nTBody = f[0];
          var u = v.children("tfoot");
          0 === u.length &&
            r.length > 0 &&
            ("" !== D.oScroll.sX || "" !== D.oScroll.sY) &&
            (u = e("<tfoot/>").appendTo(v));
          if (0 === u.length || 0 === u.children().length)
            v.addClass(C.sNoFooter);
          else if (u.length > 0) {
            D.nTFoot = u[0];
            _fnDetectHeader(D.aoFooter, D.nTFoot);
          }
          if (l.aaData)
            for (c = 0; c < l.aaData.length; c++) _fnAddData(D, l.aaData[c]);
          else
            (D.bDeferLoading || "dom" == _fnDataSource(D)) &&
              _fnAddTr(D, e(D.nTBody).children("tr"));
          D.aiDisplay = D.aiDisplayMaster.slice();
          D.bInitialised = true;
          false === h && _fnInitialise(D);
        };
        _fnCallbackReg(D, "aoDrawCallback", _fnSaveState, "state_save");
        if (l.bStateSave) {
          L.bStateSave = true;
          _fnLoadState(D, l, loadedInit);
        } else loadedInit();
      } else _fnLog(null, 0, "Non-table node initialisation (" + (this || n).nodeName + ")", 2);
    });
    s = null;
    return this || n;
  };
  var l;
  var o;
  var s;
  var f;
  var u = {};
  var c = /[\r\n\u2028]/g;
  var d = /<.*?>/g;
  var h =
    /^\d{2,4}[\.\/\-]\d{1,2}[\.\/\-]\d{1,2}([T ]{1}\d{1,2}[:\.]\d{2}([\.:]\d{2})?)?$/;
  var p = new RegExp(
    "(\\" +
      [
        "/",
        ".",
        "*",
        "+",
        "?",
        "|",
        "(",
        ")",
        "[",
        "]",
        "{",
        "}",
        "\\",
        "$",
        "^",
        "-",
      ].join("|\\") +
      ")",
    "g"
  );
  var v = /['\u00A0,$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfkɃΞ]/gi;
  var _empty = function (e) {
    return !e || true === e || "-" === e;
  };
  var _intVal = function (e) {
    var t = parseInt(e, 10);
    return !isNaN(t) && isFinite(e) ? t : null;
  };
  var _numToDecimal = function (e, t) {
    u[t] || (u[t] = new RegExp(S(t), "g"));
    return "string" === typeof e && "." !== t
      ? e.replace(/\./g, "").replace(u[t], ".")
      : e;
  };
  var _isNumber = function (e, t, n) {
    var r = "string" === typeof e;
    if (_empty(e)) return true;
    t && r && (e = _numToDecimal(e, t));
    n && r && (e = e.replace(v, ""));
    return !isNaN(parseFloat(e)) && isFinite(e);
  };
  var _isHtml = function (e) {
    return _empty(e) || "string" === typeof e;
  };
  var _htmlNumeric = function (e, t, n) {
    if (_empty(e)) return true;
    var r = _isHtml(e);
    return (r && !!_isNumber(_stripHtml(e), t, n)) || null;
  };
  var _pluck = function (e, t, n) {
    var r = [];
    var l = 0,
      o = e.length;
    if (n !== i) for (; l < o; l++) e[l] && e[l][t] && r.push(e[l][t][n]);
    else for (; l < o; l++) e[l] && r.push(e[l][t]);
    return r;
  };
  var _pluck_order = function (e, t, n, r) {
    var l = [];
    var o = 0,
      s = t.length;
    if (r !== i) for (; o < s; o++) e[t[o]][n] && l.push(e[t[o]][n][r]);
    else for (; o < s; o++) l.push(e[t[o]][n]);
    return l;
  };
  var _range = function (e, t) {
    var n = [];
    var r;
    if (t === i) {
      t = 0;
      r = e;
    } else {
      r = t;
      t = e;
    }
    for (var l = t; l < r; l++) n.push(l);
    return n;
  };
  var _removeEmpty = function (e) {
    var t = [];
    for (var n = 0, r = e.length; n < r; n++) e[n] && t.push(e[n]);
    return t;
  };
  var _stripHtml = function (e) {
    return e.replace(d, "");
  };
  /**
   * Determine if all values in the array are unique. This means we can short
   * cut the _unique method at the cost of a single loop. A sorted array is used
   * to easily check the values.
   *
   * @param  {array} src Source array
   * @return {boolean} true if all unique, false otherwise
   * @ignore
   */ var _areAllUnique = function (e) {
    if (e.length < 2) return true;
    var t = e.slice().sort();
    var n = t[0];
    for (var r = 1, i = t.length; r < i; r++) {
      if (t[r] === n) return false;
      n = t[r];
    }
    return true;
  };
  /**
   * Find the unique elements in a source array.
   *
   * @param  {array} src Source array
   * @return {array} Array of unique items
   * @ignore
   */ var _unique = function (e) {
    if (_areAllUnique(e)) return e.slice();
    var t,
      n,
      r,
      i = [],
      l = e.length,
      o = 0;
    e: for (n = 0; n < l; n++) {
      t = e[n];
      for (r = 0; r < o; r++) if (i[r] === t) continue e;
      i.push(t);
      o++;
    }
    return i;
  };
  var _flatten = function (e, t) {
    if (Array.isArray(t)) for (var n = 0; n < t.length; n++) _flatten(e, t[n]);
    else e.push(t);
    return e;
  };
  var _includes = function (e, t) {
    t === i && (t = 0);
    return -1 !== this.indexOf(e, t);
  };
  Array.isArray ||
    (Array.isArray = function (e) {
      return "[object Array]" === Object.prototype.toString.call(e);
    });
  Array.prototype.includes || (Array.prototype.includes = _includes);
  String.prototype.trim ||
    (String.prototype.trim = function () {
      return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
    });
  String.prototype.includes || (String.prototype.includes = _includes);
  DataTable.util = {
    /**
     * Throttle the calls to a function. Arguments and context are maintained
     * for the throttled function.
     *
     * @param {function} fn Function to be called
     * @param {integer} freq Call frequency in mS
     * @return {function} Wrapped function
     */
    throttle: function (e, t) {
      var r,
        l,
        o = t !== i ? t : 200;
      return function () {
        var t = this || n,
          s = +new Date(),
          f = arguments;
        if (r && s < r + o) {
          clearTimeout(l);
          l = setTimeout(function () {
            r = i;
            e.apply(t, f);
          }, o);
        } else {
          r = s;
          e.apply(t, f);
        }
      };
    },
    /**
     * Escape a string such that it can be used in a regular expression
     *
     *  @param {string} val string to escape
     *  @returns {string} escaped string
     */
    escapeRegex: function (e) {
      return e.replace(p, "\\$1");
    },
    /**
     * Create a function that will write to a nested object or array
     * @param {*} source JSON notation string
     * @returns Write function
     */
    set: function (t) {
      if (e.isPlainObject(t)) return DataTable.util.set(t._);
      if (null === t) return function () {};
      if ("function" === typeof t)
        return function (e, n, r) {
          t(e, "set", n, r);
        };
      if (
        "string" !== typeof t ||
        (-1 === t.indexOf(".") &&
          -1 === t.indexOf("[") &&
          -1 === t.indexOf("("))
      )
        return function (e, n) {
          e[t] = n;
        };
      var setData = function (e, t, n) {
        var r,
          l = _fnSplitObjNotation(n);
        var o = l[l.length - 1];
        var s, f, u, c;
        for (var d = 0, h = l.length - 1; d < h; d++) {
          if ("__proto__" === l[d] || "constructor" === l[d])
            throw new Error("Cannot set prototype values");
          s = l[d].match(_);
          f = l[d].match(g);
          if (s) {
            l[d] = l[d].replace(_, "");
            e[l[d]] = [];
            r = l.slice();
            r.splice(0, d + 1);
            c = r.join(".");
            if (Array.isArray(t))
              for (var p = 0, v = t.length; p < v; p++) {
                u = {};
                setData(u, t[p], c);
                e[l[d]].push(u);
              }
            else e[l[d]] = t;
            return;
          }
          if (f) {
            l[d] = l[d].replace(g, "");
            e = e[l[d]](t);
          }
          (null !== e[l[d]] && e[l[d]] !== i) || (e[l[d]] = {});
          e = e[l[d]];
        }
        o.match(g) ? (e = e[o.replace(g, "")](t)) : (e[o.replace(_, "")] = t);
      };
      return function (e, n) {
        return setData(e, n, t);
      };
    },
    /**
     * Create a function that will read nested objects from arrays, based on JSON notation
     * @param {*} source JSON notation string
     * @returns Value read
     */
    get: function (t) {
      if (e.isPlainObject(t)) {
        var n = {};
        e.each(t, function (e, t) {
          t && (n[e] = DataTable.util.get(t));
        });
        return function (e, t, r, l) {
          var o = n[t] || n._;
          return o !== i ? o(e, t, r, l) : e;
        };
      }
      if (null === t)
        return function (e) {
          return e;
        };
      if ("function" === typeof t)
        return function (e, n, r, i) {
          return t(e, n, r, i);
        };
      if (
        "string" !== typeof t ||
        (-1 === t.indexOf(".") &&
          -1 === t.indexOf("[") &&
          -1 === t.indexOf("("))
      )
        return function (e, n) {
          return e[t];
        };
      var fetchData = function (e, t, n) {
        var r, l, o, s;
        if ("" !== n) {
          var f = _fnSplitObjNotation(n);
          for (var u = 0, c = f.length; u < c; u++) {
            r = f[u].match(_);
            l = f[u].match(g);
            if (r) {
              f[u] = f[u].replace(_, "");
              "" !== f[u] && (e = e[f[u]]);
              o = [];
              f.splice(0, u + 1);
              s = f.join(".");
              if (Array.isArray(e))
                for (var d = 0, h = e.length; d < h; d++)
                  o.push(fetchData(e[d], t, s));
              var p = r[0].substring(1, r[0].length - 1);
              e = "" === p ? o : o.join(p);
              break;
            }
            if (l) {
              f[u] = f[u].replace(g, "");
              e = e[f[u]]();
            } else {
              if (null === e || e[f[u]] === i) return i;
              e = e[f[u]];
            }
          }
        }
        return e;
      };
      return function (e, n) {
        return fetchData(e, n, t);
      };
    },
  };
  /**
   * Create a mapping object that allows camel case parameters to be looked up
   * for their Hungarian counterparts. The mapping is stored in a private
   * parameter called `_hungarianMap` which can be accessed on the source object.
   *  @param {object} o
   *  @memberof DataTable#oApi
   */ function _fnHungarianMap(t) {
    var n,
      r,
      i = "a aa ai ao as b fn i m o s ",
      l = {};
    e.each(t, function (e, o) {
      n = e.match(/^([^A-Z]+?)([A-Z])/);
      if (n && -1 !== i.indexOf(n[1] + " ")) {
        r = e.replace(n[0], n[2].toLowerCase());
        l[r] = e;
        "o" === n[1] && _fnHungarianMap(t[e]);
      }
    });
    t._hungarianMap = l;
  }
  /**
   * Convert from camel case parameters to Hungarian, based on a Hungarian map
   * created by _fnHungarianMap.
   *  @param {object} src The model object which holds all parameters that can be
   *    mapped.
   *  @param {object} user The object to convert from camel case to Hungarian.
   *  @param {boolean} force When set to `true`, properties which already have a
   *    Hungarian value in the `user` object will be overwritten. Otherwise they
   *    won't be.
   *  @memberof DataTable#oApi
   */ function _fnCamelToHungarian(t, n, r) {
    t._hungarianMap || _fnHungarianMap(t);
    var l;
    e.each(n, function (o, s) {
      l = t._hungarianMap[o];
      if (l !== i && (r || n[l] === i))
        if ("o" === l.charAt(0)) {
          n[l] || (n[l] = {});
          e.extend(true, n[l], n[o]);
          _fnCamelToHungarian(t[l], n[l], r);
        } else n[l] = n[o];
    });
  }
  /**
   * Language compatibility - when certain options are given, and others aren't, we
   * need to duplicate the values over, in order to provide backwards compatibility
   * with older language files.
   *  @param {object} oSettings dataTables settings object
   *  @memberof DataTable#oApi
   */ function _fnLanguageCompat(e) {
    var t = DataTable.defaults.oLanguage;
    var n = t.sDecimal;
    n && _addNumericSort(n);
    if (e) {
      var r = e.sZeroRecords;
      !e.sEmptyTable &&
        r &&
        "No data available in table" === t.sEmptyTable &&
        _fnMap(e, e, "sZeroRecords", "sEmptyTable");
      !e.sLoadingRecords &&
        r &&
        "Loading..." === t.sLoadingRecords &&
        _fnMap(e, e, "sZeroRecords", "sLoadingRecords");
      e.sInfoThousands && (e.sThousands = e.sInfoThousands);
      var i = e.sDecimal;
      i && n !== i && _addNumericSort(i);
    }
  }
  /**
   * Map one parameter onto another
   *  @param {object} o Object to map
   *  @param {*} knew The new parameter name
   *  @param {*} old The old parameter name
   */ var _fnCompatMap = function (e, t, n) {
    e[t] !== i && (e[n] = e[t]);
  };
  /**
   * Provide backwards compatibility for the main DT options. Note that the new
   * options are mapped onto the old parameters, so this is an external interface
   * change only.
   *  @param {object} init Object to map
   */ function _fnCompatOpts(e) {
    _fnCompatMap(e, "ordering", "bSort");
    _fnCompatMap(e, "orderMulti", "bSortMulti");
    _fnCompatMap(e, "orderClasses", "bSortClasses");
    _fnCompatMap(e, "orderCellsTop", "bSortCellsTop");
    _fnCompatMap(e, "order", "aaSorting");
    _fnCompatMap(e, "orderFixed", "aaSortingFixed");
    _fnCompatMap(e, "paging", "bPaginate");
    _fnCompatMap(e, "pagingType", "sPaginationType");
    _fnCompatMap(e, "pageLength", "iDisplayLength");
    _fnCompatMap(e, "searching", "bFilter");
    "boolean" === typeof e.sScrollX && (e.sScrollX = e.sScrollX ? "100%" : "");
    "boolean" === typeof e.scrollX && (e.scrollX = e.scrollX ? "100%" : "");
    var t = e.aoSearchCols;
    if (t)
      for (var n = 0, r = t.length; n < r; n++)
        t[n] && _fnCamelToHungarian(DataTable.models.oSearch, t[n]);
  }
  /**
   * Provide backwards compatibility for column options. Note that the new options
   * are mapped onto the old parameters, so this is an external interface change
   * only.
   *  @param {object} init Object to map
   */ function _fnCompatCols(e) {
    _fnCompatMap(e, "orderable", "bSortable");
    _fnCompatMap(e, "orderData", "aDataSort");
    _fnCompatMap(e, "orderSequence", "asSorting");
    _fnCompatMap(e, "orderDataType", "sortDataType");
    var t = e.aDataSort;
    "number" !== typeof t || Array.isArray(t) || (e.aDataSort = [t]);
  }
  /**
   * Browser feature detection for capabilities, quirks
   *  @param {object} settings dataTables settings object
   *  @memberof DataTable#oApi
   */ function _fnBrowserDetect(n) {
    if (!DataTable.__browser) {
      var r = {};
      DataTable.__browser = r;
      var i = e("<div/>")
        .css({
          position: "fixed",
          top: 0,
          left: -1 * e(t).scrollLeft(),
          height: 1,
          width: 1,
          overflow: "hidden",
        })
        .append(
          e("<div/>")
            .css({
              position: "absolute",
              top: 1,
              left: 1,
              width: 100,
              overflow: "scroll",
            })
            .append(e("<div/>").css({ width: "100%", height: 10 }))
        )
        .appendTo("body");
      var l = i.children();
      var o = l.children();
      r.barWidth = l[0].offsetWidth - l[0].clientWidth;
      r.bScrollOversize = 100 === o[0].offsetWidth && 100 !== l[0].clientWidth;
      r.bScrollbarLeft = 1 !== Math.round(o.offset().left);
      r.bBounding = !!i[0].getBoundingClientRect().width;
      i.remove();
    }
    e.extend(n.oBrowser, DataTable.__browser);
    n.oScroll.iBarWidth = DataTable.__browser.barWidth;
  }
  /**
   * Array.prototype reduce[Right] method, used for browsers which don't support
   * JS 1.6. Done this way to reduce code size, since we iterate either way
   *  @param {object} settings dataTables settings object
   *  @memberof DataTable#oApi
   */ function _fnReduce(e, t, n, r, l, o) {
    var s,
      f = r,
      u = false;
    if (n !== i) {
      s = n;
      u = true;
    }
    while (f !== l)
      if (e.hasOwnProperty(f)) {
        s = u ? t(s, e[f], f, e) : e[f];
        u = true;
        f += o;
      }
    return s;
  }
  /**
   * Add a column to the list used for the table with default values
   *  @param {object} oSettings dataTables settings object
   *  @param {node} nTh The th element for this column
   *  @memberof DataTable#oApi
   */ function _fnAddColumn(t, n) {
    var i = DataTable.defaults.column;
    var l = t.aoColumns.length;
    var o = e.extend({}, DataTable.models.oColumn, i, {
      nTh: n || r.createElement("th"),
      sTitle: i.sTitle ? i.sTitle : n ? n.innerHTML : "",
      aDataSort: i.aDataSort ? i.aDataSort : [l],
      mData: i.mData ? i.mData : l,
      idx: l,
    });
    t.aoColumns.push(o);
    var s = t.aoPreSearchCols;
    s[l] = e.extend({}, DataTable.models.oSearch, s[l]);
    _fnColumnOptions(t, l, e(n).data());
  }
  /**
   * Apply options for a column
   *  @param {object} oSettings dataTables settings object
   *  @param {int} iCol column index to consider
   *  @param {object} oOptions object with sType, bVisible and bSearchable etc
   *  @memberof DataTable#oApi
   */ function _fnColumnOptions(t, n, r) {
    var l = t.aoColumns[n];
    var o = t.oClasses;
    var s = e(l.nTh);
    if (!l.sWidthOrig) {
      l.sWidthOrig = s.attr("width") || null;
      var f = (s.attr("style") || "").match(/width:\s*(\d+[pxem%]+)/);
      f && (l.sWidthOrig = f[1]);
    }
    if (r !== i && null !== r) {
      _fnCompatCols(r);
      _fnCamelToHungarian(DataTable.defaults.column, r, true);
      r.mDataProp === i || r.mData || (r.mData = r.mDataProp);
      r.sType && (l._sManualType = r.sType);
      r.className && !r.sClass && (r.sClass = r.className);
      r.sClass && s.addClass(r.sClass);
      e.extend(l, r);
      _fnMap(l, r, "sWidth", "sWidthOrig");
      r.iDataSort !== i && (l.aDataSort = [r.iDataSort]);
      _fnMap(l, r, "aDataSort");
    }
    var u = l.mData;
    var c = b(u);
    var d = l.mRender ? b(l.mRender) : null;
    var attrTest = function (e) {
      return "string" === typeof e && -1 !== e.indexOf("@");
    };
    l._bAttrSrc =
      e.isPlainObject(u) &&
      (attrTest(u.sort) || attrTest(u.type) || attrTest(u.filter));
    l._setter = null;
    l.fnGetData = function (e, t, n) {
      var r = c(e, t, i, n);
      return d && t ? d(r, t, e, n) : r;
    };
    l.fnSetData = function (e, t, n) {
      return m(u)(e, t, n);
    };
    "number" !== typeof u && (t._rowReadObject = true);
    if (!t.oFeatures.bSort) {
      l.bSortable = false;
      s.addClass(o.sSortableNone);
    }
    var h = -1 !== e.inArray("asc", l.asSorting);
    var p = -1 !== e.inArray("desc", l.asSorting);
    if (l.bSortable && (h || p))
      if (h && !p) {
        l.sSortingClass = o.sSortableAsc;
        l.sSortingClassJUI = o.sSortJUIAscAllowed;
      } else if (!h && p) {
        l.sSortingClass = o.sSortableDesc;
        l.sSortingClassJUI = o.sSortJUIDescAllowed;
      } else {
        l.sSortingClass = o.sSortable;
        l.sSortingClassJUI = o.sSortJUI;
      }
    else {
      l.sSortingClass = o.sSortableNone;
      l.sSortingClassJUI = "";
    }
  }
  /**
   * Adjust the table column widths for new data. Note: you would probably want to
   * do a redraw after calling this function!
   *  @param {object} settings dataTables settings object
   *  @memberof DataTable#oApi
   */ function _fnAdjustColumnSizing(e) {
    if (false !== e.oFeatures.bAutoWidth) {
      var t = e.aoColumns;
      _fnCalculateColumnWidths(e);
      for (var n = 0, r = t.length; n < r; n++)
        t[n].nTh.style.width = t[n].sWidth;
    }
    var i = e.oScroll;
    ("" === i.sY && "" === i.sX) || _fnScrollDraw(e);
    _fnCallbackFire(e, null, "column-sizing", [e]);
  }
  /**
   * Convert the index of a visible column to the index in the data array (take account
   * of hidden columns)
   *  @param {object} oSettings dataTables settings object
   *  @param {int} iMatch Visible column index to lookup
   *  @returns {int} i the data index
   *  @memberof DataTable#oApi
   */ function _fnVisibleToColumnIndex(e, t) {
    var n = _fnGetColumns(e, "bVisible");
    return "number" === typeof n[t] ? n[t] : null;
  }
  /**
   * Convert the index of an index in the data array and convert it to the visible
   *   column index (take account of hidden columns)
   *  @param {int} iMatch Column index to lookup
   *  @param {object} oSettings dataTables settings object
   *  @returns {int} i the data index
   *  @memberof DataTable#oApi
   */ function _fnColumnIndexToVisible(t, n) {
    var r = _fnGetColumns(t, "bVisible");
    var i = e.inArray(n, r);
    return -1 !== i ? i : null;
  }
  /**
   * Get the number of visible columns
   *  @param {object} oSettings dataTables settings object
   *  @returns {int} i the number of visible columns
   *  @memberof DataTable#oApi
   */ function _fnVisbleColumns(t) {
    var n = 0;
    e.each(t.aoColumns, function (t, r) {
      r.bVisible && "none" !== e(r.nTh).css("display") && n++;
    });
    return n;
  }
  /**
   * Get an array of column indexes that match a given property
   *  @param {object} oSettings dataTables settings object
   *  @param {string} sParam Parameter in aoColumns to look for - typically
   *    bVisible or bSearchable
   *  @returns {array} Array of indexes with matched properties
   *  @memberof DataTable#oApi
   */ function _fnGetColumns(t, n) {
    var r = [];
    e.map(t.aoColumns, function (e, t) {
      e[n] && r.push(t);
    });
    return r;
  }
  /**
   * Calculate the 'type' of a column
   *  @param {object} settings dataTables settings object
   *  @memberof DataTable#oApi
   */ function _fnColumnTypes(e) {
    var t = e.aoColumns;
    var n = e.aoData;
    var r = DataTable.ext.type.detect;
    var l, o, s, f, u, c;
    var d, h, p;
    for (l = 0, o = t.length; l < o; l++) {
      d = t[l];
      p = [];
      if (!d.sType && d._sManualType) d.sType = d._sManualType;
      else if (!d.sType) {
        for (s = 0, f = r.length; s < f; s++) {
          for (u = 0, c = n.length; u < c; u++) {
            p[u] === i && (p[u] = _fnGetCellData(e, u, l, "type"));
            h = r[s](p[u], e);
            if (!h && s !== r.length - 1) break;
            if ("html" === h && !_empty(p[u])) break;
          }
          if (h) {
            d.sType = h;
            break;
          }
        }
        d.sType || (d.sType = "string");
      }
    }
  }
  /**
   * Take the column definitions and static columns arrays and calculate how
   * they relate to column indexes. The callback function will then apply the
   * definition found for a column to a suitable configuration object.
   *  @param {object} oSettings dataTables settings object
   *  @param {array} aoColDefs The aoColumnDefs array that is to be applied
   *  @param {array} aoCols The aoColumns array that defines columns individually
   *  @param {function} fn Callback function - takes two parameters, the calculated
   *    column index and the definition for that column.
   *  @memberof DataTable#oApi
   */ function _fnApplyColumnDefs(t, n, r, l) {
    var o, s, f, u, c, d, h;
    var p = t.aoColumns;
    if (n)
      for (o = n.length - 1; o >= 0; o--) {
        h = n[o];
        var v = h.targets !== i ? h.targets : h.aTargets;
        Array.isArray(v) || (v = [v]);
        for (f = 0, u = v.length; f < u; f++)
          if ("number" === typeof v[f] && v[f] >= 0) {
            while (p.length <= v[f]) _fnAddColumn(t);
            l(v[f], h);
          } else if ("number" === typeof v[f] && v[f] < 0)
            l(p.length + v[f], h);
          else if ("string" === typeof v[f])
            for (c = 0, d = p.length; c < d; c++)
              ("_all" == v[f] || e(p[c].nTh).hasClass(v[f])) && l(c, h);
      }
    if (r) for (o = 0, s = r.length; o < s; o++) l(o, r[o]);
  }
  /**
   * Add a data array to the table, creating DOM node etc. This is the parallel to
   * _fnGatherData, but for adding rows from a Javascript source, rather than a
   * DOM source.
   *  @param {object} oSettings dataTables settings object
   *  @param {array} aData data array to be added
   *  @param {node} [nTr] TR element to add to the table - optional. If not given,
   *    DataTables will create a row automatically
   *  @param {array} [anTds] Array of TD|TH elements for the row - must be given
   *    if nTr is.
   *  @returns {int} >=0 if successful (index of new aoData entry), -1 if failed
   *  @memberof DataTable#oApi
   */ function _fnAddData(t, n, r, l) {
    var o = t.aoData.length;
    var s = e.extend(true, {}, DataTable.models.oRow, {
      src: r ? "dom" : "data",
      idx: o,
    });
    s._aData = n;
    t.aoData.push(s);
    var f = t.aoColumns;
    for (var u = 0, c = f.length; u < c; u++) f[u].sType = null;
    t.aiDisplayMaster.push(o);
    var d = t.rowIdFn(n);
    d !== i && (t.aIds[d] = s);
    (!r && t.oFeatures.bDeferRender) || _fnCreateTr(t, o, r, l);
    return o;
  }
  /**
   * Add one or more TR elements to the table. Generally we'd expect to
   * use this for reading data from a DOM sourced table, but it could be
   * used for an TR element. Note that if a TR is given, it is used (i.e.
   * it is not cloned).
   *  @param {object} settings dataTables settings object
   *  @param {array|node|jQuery} trs The TR element(s) to add to the table
   *  @returns {array} Array of indexes for the added rows
   *  @memberof DataTable#oApi
   */ function _fnAddTr(t, n) {
    var r;
    n instanceof e || (n = e(n));
    return n.map(function (e, n) {
      r = _fnGetRowElements(t, n);
      return _fnAddData(t, r.data, n, r.cells);
    });
  }
  /**
   * Take a TR element and convert it to an index in aoData
   *  @param {object} oSettings dataTables settings object
   *  @param {node} n the TR element to find
   *  @returns {int} index if the node is found, null if not
   *  @memberof DataTable#oApi
   */ function _fnNodeToDataIndex(e, t) {
    return t._DT_RowIndex !== i ? t._DT_RowIndex : null;
  }
  /**
   * Take a TD element and convert it into a column data index (not the visible index)
   *  @param {object} oSettings dataTables settings object
   *  @param {int} iRow The row number the TD/TH can be found in
   *  @param {node} n The TD/TH element to find
   *  @returns {int} index if the node is found, -1 if not
   *  @memberof DataTable#oApi
   */ function _fnNodeToColumnIndex(t, n, r) {
    return e.inArray(r, t.aoData[n].anCells);
  }
  /**
   * Get the data for a given cell from the internal cache, taking into account data mapping
   *  @param {object} settings dataTables settings object
   *  @param {int} rowIdx aoData row id
   *  @param {int} colIdx Column index
   *  @param {string} type data get type ('display', 'type' 'filter|search' 'sort|order')
   *  @returns {*} Cell data
   *  @memberof DataTable#oApi
   */ function _fnGetCellData(e, t, n, r) {
    "search" === r ? (r = "filter") : "order" === r && (r = "sort");
    var l = e.iDraw;
    var o = e.aoColumns[n];
    var s = e.aoData[t]._aData;
    var f = o.sDefaultContent;
    var u = o.fnGetData(s, r, { settings: e, row: t, col: n });
    if (u === i) {
      if (e.iDrawError != l && null === f) {
        _fnLog(
          e,
          0,
          "Requested unknown parameter " +
            ("function" == typeof o.mData
              ? "{function}"
              : "'" + o.mData + "'") +
            " for row " +
            t +
            ", column " +
            n,
          4
        );
        e.iDrawError = l;
      }
      return f;
    }
    if ((u !== s && null !== u) || null === f || r === i) {
      if ("function" === typeof u) return u.call(s);
    } else u = f;
    if (null === u && "display" === r) return "";
    if ("filter" === r) {
      var c = DataTable.ext.type.search;
      c[o.sType] && (u = c[o.sType](u));
    }
    return u;
  }
  /**
   * Set the value for a specific cell, into the internal data cache
   *  @param {object} settings dataTables settings object
   *  @param {int} rowIdx aoData row id
   *  @param {int} colIdx Column index
   *  @param {*} val Value to set
   *  @memberof DataTable#oApi
   */ function _fnSetCellData(e, t, n, r) {
    var i = e.aoColumns[n];
    var l = e.aoData[t]._aData;
    i.fnSetData(l, r, { settings: e, row: t, col: n });
  }
  var _ = /\[.*?\]$/;
  var g = /\(\)$/;
  /**
   * Split string on periods, taking into account escaped periods
   * @param  {string} str String to split
   * @return {array} Split string
   */ function _fnSplitObjNotation(t) {
    return e.map(t.match(/(\\.|[^\.])+/g) || [""], function (e) {
      return e.replace(/\\\./g, ".");
    });
  }
  /**
   * Return a function that can be used to get data from a source object, taking
   * into account the ability to use nested objects as a source
   *  @param {string|int|function} mSource The data source for the object
   *  @returns {function} Data get function
   *  @memberof DataTable#oApi
   */ var b = DataTable.util.get;
  /**
   * Return a function that can be used to set data from a source object, taking
   * into account the ability to use nested objects as a source
   *  @param {string|int|function} mSource The data source for the object
   *  @returns {function} Data set function
   *  @memberof DataTable#oApi
   */ var m = DataTable.util.set;
  /**
   * Return an array with the full table data
   *  @param {object} oSettings dataTables settings object
   *  @returns array {array} aData Master data array
   *  @memberof DataTable#oApi
   */ function _fnGetDataMaster(e) {
    return _pluck(e.aoData, "_aData");
  }
  /**
   * Nuke the table
   *  @param {object} oSettings dataTables settings object
   *  @memberof DataTable#oApi
   */ function _fnClearTable(e) {
    e.aoData.length = 0;
    e.aiDisplayMaster.length = 0;
    e.aiDisplay.length = 0;
    e.aIds = {};
  }
  /**
   * Take an array of integers (index array) and remove a target integer (value - not
   * the key!)
   *  @param {array} a Index array to target
   *  @param {int} iTarget value to find
   *  @memberof DataTable#oApi
   */ function _fnDeleteIndex(e, t, n) {
    var r = -1;
    for (var l = 0, o = e.length; l < o; l++)
      e[l] == t ? (r = l) : e[l] > t && e[l]--;
    -1 != r && n === i && e.splice(r, 1);
  }
  /**
   * Mark cached data as invalid such that a re-read of the data will occur when
   * the cached data is next requested. Also update from the data source object.
   *
   * @param {object} settings DataTables settings object
   * @param {int}    rowIdx   Row index to invalidate
   * @param {string} [src]    Source to invalidate from: undefined, 'auto', 'dom'
   *     or 'data'
   * @param {int}    [colIdx] Column index to invalidate. If undefined the whole
   *     row will be invalidated
   * @memberof DataTable#oApi
   *
   * @todo For the modularisation of v1.11 this will need to become a callback, so
   *   the sort and filter methods can subscribe to it. That will required
   *   initialisation options for sorting, which is why it is not already baked in
   */ function _fnInvalidate(e, t, n, r) {
    var l = e.aoData[t];
    var o, s;
    var cellWrite = function (n, r) {
      while (n.childNodes.length) n.removeChild(n.firstChild);
      n.innerHTML = _fnGetCellData(e, t, r, "display");
    };
    if ("dom" !== n && ((n && "auto" !== n) || "dom" !== l.src)) {
      var f = l.anCells;
      if (f)
        if (r !== i) cellWrite(f[r], r);
        else for (o = 0, s = f.length; o < s; o++) cellWrite(f[o], o);
    } else l._aData = _fnGetRowElements(e, l, r, r === i ? i : l._aData).data;
    l._aSortData = null;
    l._aFilterData = null;
    var u = e.aoColumns;
    if (r !== i) u[r].sType = null;
    else {
      for (o = 0, s = u.length; o < s; o++) u[o].sType = null;
      _fnRowAttributes(e, l);
    }
  }
  /**
   * Build a data source object from an HTML row, reading the contents of the
   * cells that are in the row.
   *
   * @param {object} settings DataTables settings object
   * @param {node|object} TR element from which to read data or existing row
   *   object from which to re-read the data from the cells
   * @param {int} [colIdx] Optional column index
   * @param {array|object} [d] Data source object. If `colIdx` is given then this
   *   parameter should also be given and will be used to write the data into.
   *   Only the column in question will be written
   * @returns {object} Object with two parameters: `data` the data read, in
   *   document order, and `cells` and array of nodes (they can be useful to the
   *   caller, so rather than needing a second traversal to get them, just return
   *   them from here).
   * @memberof DataTable#oApi
   */ function _fnGetRowElements(e, t, n, r) {
    var l,
      o,
      s,
      f = [],
      u = t.firstChild,
      c = 0,
      d = e.aoColumns,
      h = e._rowReadObject;
    r = r !== i ? r : h ? {} : [];
    var attr = function (e, t) {
      if ("string" === typeof e) {
        var n = e.indexOf("@");
        if (-1 !== n) {
          var i = e.substring(n + 1);
          var l = m(e);
          l(r, t.getAttribute(i));
        }
      }
    };
    var cellProcess = function (e) {
      if (n === i || n === c) {
        o = d[c];
        s = e.innerHTML.trim();
        if (o && o._bAttrSrc) {
          var t = m(o.mData._);
          t(r, s);
          attr(o.mData.sort, e);
          attr(o.mData.type, e);
          attr(o.mData.filter, e);
        } else if (h) {
          o._setter || (o._setter = m(o.mData));
          o._setter(r, s);
        } else r[c] = s;
      }
      c++;
    };
    if (u)
      while (u) {
        l = u.nodeName.toUpperCase();
        if ("TD" == l || "TH" == l) {
          cellProcess(u);
          f.push(u);
        }
        u = u.nextSibling;
      }
    else {
      f = t.anCells;
      for (var p = 0, v = f.length; p < v; p++) cellProcess(f[p]);
    }
    var _ = t.firstChild ? t : t.nTr;
    if (_) {
      var g = _.getAttribute("id");
      g && m(e.rowId)(r, g);
    }
    return { data: r, cells: f };
  }
  /**
   * Create a new TR element (and it's TD children) for a row
   *  @param {object} oSettings dataTables settings object
   *  @param {int} iRow Row to consider
   *  @param {node} [nTrIn] TR element to add to the table - optional. If not given,
   *    DataTables will create a row automatically
   *  @param {array} [anTds] Array of TD|TH elements for the row - must be given
   *    if nTr is.
   *  @memberof DataTable#oApi
   */ function _fnCreateTr(t, n, i, l) {
    var o,
      s,
      f,
      u,
      c,
      d,
      h = t.aoData[n],
      p = h._aData,
      v = [];
    if (null === h.nTr) {
      o = i || r.createElement("tr");
      h.nTr = o;
      h.anCells = v;
      o._DT_RowIndex = n;
      _fnRowAttributes(t, h);
      for (u = 0, c = t.aoColumns.length; u < c; u++) {
        f = t.aoColumns[u];
        d = !i;
        s = d ? r.createElement(f.sCellType) : l[u];
        s._DT_CellIndex = { row: n, column: u };
        v.push(s);
        (!d &&
          ((!f.mRender && f.mData === u) ||
            (e.isPlainObject(f.mData) && f.mData._ === u + ".display"))) ||
          (s.innerHTML = _fnGetCellData(t, n, u, "display"));
        f.sClass && (s.className += " " + f.sClass);
        f.bVisible && !i
          ? o.appendChild(s)
          : !f.bVisible && i && s.parentNode.removeChild(s);
        f.fnCreatedCell &&
          f.fnCreatedCell.call(
            t.oInstance,
            s,
            _fnGetCellData(t, n, u),
            p,
            n,
            u
          );
      }
      _fnCallbackFire(t, "aoRowCreatedCallback", null, [o, p, n, v]);
    }
  }
  /**
   * Add attributes to a row based on the special `DT_*` parameters in a data
   * source object.
   *  @param {object} settings DataTables settings object
   *  @param {object} DataTables row object for the row to be modified
   *  @memberof DataTable#oApi
   */ function _fnRowAttributes(t, n) {
    var r = n.nTr;
    var i = n._aData;
    if (r) {
      var l = t.rowIdFn(i);
      l && (r.id = l);
      if (i.DT_RowClass) {
        var o = i.DT_RowClass.split(" ");
        n.__rowc = n.__rowc ? _unique(n.__rowc.concat(o)) : o;
        e(r).removeClass(n.__rowc.join(" ")).addClass(i.DT_RowClass);
      }
      i.DT_RowAttr && e(r).attr(i.DT_RowAttr);
      i.DT_RowData && e(r).data(i.DT_RowData);
    }
  }
  /**
   * Create the HTML header for the table
   *  @param {object} oSettings dataTables settings object
   *  @memberof DataTable#oApi
   */ function _fnBuildHead(t) {
    var n, r, i, l, o;
    var s = t.nTHead;
    var f = t.nTFoot;
    var u = 0 === e("th, td", s).length;
    var c = t.oClasses;
    var d = t.aoColumns;
    u && (l = e("<tr/>").appendTo(s));
    for (n = 0, r = d.length; n < r; n++) {
      o = d[n];
      i = e(o.nTh).addClass(o.sClass);
      u && i.appendTo(l);
      if (t.oFeatures.bSort) {
        i.addClass(o.sSortingClass);
        if (false !== o.bSortable) {
          i.attr("tabindex", t.iTabIndex).attr("aria-controls", t.sTableId);
          _fnSortAttachListener(t, o.nTh, n);
        }
      }
      o.sTitle != i[0].innerHTML && i.html(o.sTitle);
      _fnRenderer(t, "header")(t, i, o, c);
    }
    u && _fnDetectHeader(t.aoHeader, s);
    e(s).children("tr").children("th, td").addClass(c.sHeaderTH);
    e(f).children("tr").children("th, td").addClass(c.sFooterTH);
    if (null !== f) {
      var h = t.aoFooter[0];
      for (n = 0, r = h.length; n < r; n++) {
        o = d[n];
        o.nTf = h[n].cell;
        o.sClass && e(o.nTf).addClass(o.sClass);
      }
    }
  }
  /**
   * Draw the header (or footer) element based on the column visibility states. The
   * methodology here is to use the layout array from _fnDetectHeader, modified for
   * the instantaneous column visibility, to construct the new layout. The grid is
   * traversed over cell at a time in a rows x columns grid fashion, although each
   * cell insert can cover multiple elements in the grid - which is tracks using the
   * aApplied array. Cell inserts in the grid will only occur where there isn't
   * already a cell in that position.
   *  @param {object} oSettings dataTables settings object
   *  @param array {objects} aoSource Layout array from _fnDetectHeader
   *  @param {boolean} [bIncludeHidden=false] If true then include the hidden columns in the calc,
   *  @memberof DataTable#oApi
   */ function _fnDrawHead(t, n, r) {
    var l, o, s, f, u, c, d;
    var h = [];
    var p = [];
    var v = t.aoColumns.length;
    var _, g;
    if (n) {
      r === i && (r = false);
      for (l = 0, o = n.length; l < o; l++) {
        h[l] = n[l].slice();
        h[l].nTr = n[l].nTr;
        for (s = v - 1; s >= 0; s--)
          t.aoColumns[s].bVisible || r || h[l].splice(s, 1);
        p.push([]);
      }
      for (l = 0, o = h.length; l < o; l++) {
        d = h[l].nTr;
        if (d) while ((c = d.firstChild)) d.removeChild(c);
        for (s = 0, f = h[l].length; s < f; s++) {
          _ = 1;
          g = 1;
          if (p[l][s] === i) {
            d.appendChild(h[l][s].cell);
            p[l][s] = 1;
            while (h[l + _] !== i && h[l][s].cell == h[l + _][s].cell) {
              p[l + _][s] = 1;
              _++;
            }
            while (h[l][s + g] !== i && h[l][s].cell == h[l][s + g].cell) {
              for (u = 0; u < _; u++) p[l + u][s + g] = 1;
              g++;
            }
            e(h[l][s].cell).attr("rowspan", _).attr("colspan", g);
          }
        }
      }
    }
  }
  /**
   * Insert the required TR nodes into the table for display
   *  @param {object} oSettings dataTables settings object
   *  @param ajaxComplete true after ajax call to complete rendering
   *  @memberof DataTable#oApi
   */ function _fnDraw(t, n) {
    _fnStart(t);
    var r = _fnCallbackFire(t, "aoPreDrawCallback", "preDraw", [t]);
    if (-1 === e.inArray(false, r)) {
      var i = [];
      var l = 0;
      var o = t.asStripeClasses;
      var s = o.length;
      var f = t.oLanguage;
      var u = "ssp" == _fnDataSource(t);
      var c = t.aiDisplay;
      var d = t._iDisplayStart;
      var h = t.fnDisplayEnd();
      t.bDrawing = true;
      if (t.bDeferLoading) {
        t.bDeferLoading = false;
        t.iDraw++;
        _fnProcessingDisplay(t, false);
      } else if (u) {
        if (!t.bDestroying && !n) {
          _fnAjaxUpdate(t);
          return;
        }
      } else t.iDraw++;
      if (0 !== c.length) {
        var p = u ? 0 : d;
        var v = u ? t.aoData.length : h;
        for (var _ = p; _ < v; _++) {
          var g = c[_];
          var b = t.aoData[g];
          null === b.nTr && _fnCreateTr(t, g);
          var m = b.nTr;
          if (0 !== s) {
            var S = o[l % s];
            if (b._sRowStripe != S) {
              e(m).removeClass(b._sRowStripe).addClass(S);
              b._sRowStripe = S;
            }
          }
          _fnCallbackFire(t, "aoRowCallback", null, [m, b._aData, l, _, g]);
          i.push(m);
          l++;
        }
      } else {
        var D = f.sZeroRecords;
        1 == t.iDraw && "ajax" == _fnDataSource(t)
          ? (D = f.sLoadingRecords)
          : f.sEmptyTable && 0 === t.fnRecordsTotal() && (D = f.sEmptyTable);
        i[0] = e("<tr/>", { class: s ? o[0] : "" }).append(
          e("<td />", {
            valign: "top",
            colSpan: _fnVisbleColumns(t),
            class: t.oClasses.sRowEmpty,
          }).html(D)
        )[0];
      }
      _fnCallbackFire(t, "aoHeaderCallback", "header", [
        e(t.nTHead).children("tr")[0],
        _fnGetDataMaster(t),
        d,
        h,
        c,
      ]);
      _fnCallbackFire(t, "aoFooterCallback", "footer", [
        e(t.nTFoot).children("tr")[0],
        _fnGetDataMaster(t),
        d,
        h,
        c,
      ]);
      var C = e(t.nTBody);
      C.children().detach();
      C.append(e(i));
      _fnCallbackFire(t, "aoDrawCallback", "draw", [t]);
      t.bSorted = false;
      t.bFiltered = false;
      t.bDrawing = false;
    } else _fnProcessingDisplay(t, false);
  }
  /**
   * Redraw the table - taking account of the various features which are enabled
   *  @param {object} oSettings dataTables settings object
   *  @param {boolean} [holdPosition] Keep the current paging position. By default
   *    the paging is reset to the first page
   *  @memberof DataTable#oApi
   */ function _fnReDraw(e, t) {
    var n = e.oFeatures,
      r = n.bSort,
      i = n.bFilter;
    r && _fnSort(e);
    i
      ? _fnFilterComplete(e, e.oPreviousSearch)
      : (e.aiDisplay = e.aiDisplayMaster.slice());
    true !== t && (e._iDisplayStart = 0);
    e._drawHold = t;
    _fnDraw(e);
    e._drawHold = false;
  }
  /**
   * Add the options to the page HTML for the table
   *  @param {object} oSettings dataTables settings object
   *  @memberof DataTable#oApi
   */ function _fnAddOptionsHtml(t) {
    var n = t.oClasses;
    var r = e(t.nTable);
    var i = e("<div/>").insertBefore(r);
    var l = t.oFeatures;
    var o = e("<div/>", {
      id: t.sTableId + "_wrapper",
      class: n.sWrapper + (t.nTFoot ? "" : " " + n.sNoFooter),
    });
    t.nHolding = i[0];
    t.nTableWrapper = o[0];
    t.nTableReinsertBefore = t.nTable.nextSibling;
    var s = t.sDom.split("");
    var f, u, c, d, h, p;
    for (var v = 0; v < s.length; v++) {
      f = null;
      u = s[v];
      if ("<" == u) {
        c = e("<div/>")[0];
        d = s[v + 1];
        if ("'" == d || '"' == d) {
          h = "";
          p = 2;
          while (s[v + p] != d) {
            h += s[v + p];
            p++;
          }
          "H" == h ? (h = n.sJUIHeader) : "F" == h && (h = n.sJUIFooter);
          if (-1 != h.indexOf(".")) {
            var _ = h.split(".");
            c.id = _[0].substr(1, _[0].length - 1);
            c.className = _[1];
          } else
            "#" == h.charAt(0)
              ? (c.id = h.substr(1, h.length - 1))
              : (c.className = h);
          v += p;
        }
        o.append(c);
        o = e(c);
      } else if (">" == u) o = o.parent();
      else if ("l" == u && l.bPaginate && l.bLengthChange)
        f = _fnFeatureHtmlLength(t);
      else if ("f" == u && l.bFilter) f = _fnFeatureHtmlFilter(t);
      else if ("r" == u && l.bProcessing) f = _fnFeatureHtmlProcessing(t);
      else if ("t" == u) f = _fnFeatureHtmlTable(t);
      else if ("i" == u && l.bInfo) f = _fnFeatureHtmlInfo(t);
      else if ("p" == u && l.bPaginate) f = _fnFeatureHtmlPaginate(t);
      else if (0 !== DataTable.ext.feature.length) {
        var g = DataTable.ext.feature;
        for (var b = 0, m = g.length; b < m; b++)
          if (u == g[b].cFeature) {
            f = g[b].fnInit(t);
            break;
          }
      }
      if (f) {
        var S = t.aanFeatures;
        S[u] || (S[u] = []);
        S[u].push(f);
        o.append(f);
      }
    }
    i.replaceWith(o);
    t.nHolding = null;
  }
  /**
   * Use the DOM source to create up an array of header cells. The idea here is to
   * create a layout grid (array) of rows x columns, which contains a reference
   * to the cell that that point in the grid (regardless of col/rowspan), such that
   * any column / row could be removed and the new grid constructed
   *  @param array {object} aLayout Array to store the calculated layout in
   *  @param {node} nThead The header/footer element for the table
   *  @memberof DataTable#oApi
   */ function _fnDetectHeader(t, n) {
    var r = e(n).children("tr");
    var i, l;
    var o, s, f, u, c, d, h, p;
    var v;
    var fnShiftCol = function (e, t, n) {
      var r = e[t];
      while (r[n]) n++;
      return n;
    };
    t.splice(0, t.length);
    for (o = 0, u = r.length; o < u; o++) t.push([]);
    for (o = 0, u = r.length; o < u; o++) {
      i = r[o];
      d = 0;
      l = i.firstChild;
      while (l) {
        if (
          "TD" == l.nodeName.toUpperCase() ||
          "TH" == l.nodeName.toUpperCase()
        ) {
          h = 1 * l.getAttribute("colspan");
          p = 1 * l.getAttribute("rowspan");
          h = h && 0 !== h && 1 !== h ? h : 1;
          p = p && 0 !== p && 1 !== p ? p : 1;
          c = fnShiftCol(t, o, d);
          v = 1 === h;
          for (f = 0; f < h; f++)
            for (s = 0; s < p; s++) {
              t[o + s][c + f] = { cell: l, unique: v };
              t[o + s].nTr = i;
            }
        }
        l = l.nextSibling;
      }
    }
  }
  /**
   * Get an array of unique th elements, one for each column
   *  @param {object} oSettings dataTables settings object
   *  @param {node} nHeader automatically detect the layout from this node - optional
   *  @param {array} aLayout thead/tfoot layout from _fnDetectHeader - optional
   *  @returns array {node} aReturn list of unique th's
   *  @memberof DataTable#oApi
   */ function _fnGetUniqueThs(e, t, n) {
    var r = [];
    if (!n) {
      n = e.aoHeader;
      if (t) {
        n = [];
        _fnDetectHeader(n, t);
      }
    }
    for (var i = 0, l = n.length; i < l; i++)
      for (var o = 0, s = n[i].length; o < s; o++)
        !n[i][o].unique || (r[o] && e.bSortCellsTop) || (r[o] = n[i][o].cell);
    return r;
  }
  /**
   * Set the start position for draw
   *  @param {object} oSettings dataTables settings object
   */ function _fnStart(e) {
    var t = "ssp" == _fnDataSource(e);
    var n = e.iInitDisplayStart;
    if (n !== i && -1 !== n) {
      e._iDisplayStart = t ? n : n >= e.fnRecordsDisplay() ? 0 : n;
      e.iInitDisplayStart = -1;
    }
  }
  /**
   * Create an Ajax call based on the table's settings, taking into account that
   * parameters can have multiple forms, and backwards compatibility.
   *
   * @param {object} oSettings dataTables settings object
   * @param {array} data Data to send to the server, required by
   *     DataTables - may be augmented by developer callbacks
   * @param {function} fn Callback function to run when data is obtained
   */ function _fnBuildAjax(t, n, r) {
    _fnCallbackFire(t, "aoServerParams", "serverParams", [n]);
    if (n && Array.isArray(n)) {
      var i = {};
      var l = /(.*?)\[\]$/;
      e.each(n, function (e, t) {
        var n = t.name.match(l);
        if (n) {
          var r = n[0];
          i[r] || (i[r] = []);
          i[r].push(t.value);
        } else i[t.name] = t.value;
      });
      n = i;
    }
    var o;
    var s = t.ajax;
    var f = t.oInstance;
    var callback = function (e) {
      var n = t.jqXHR ? t.jqXHR.status : null;
      if (null === e || ("number" === typeof n && 204 == n)) {
        e = {};
        _fnAjaxDataSrc(t, e, []);
      }
      var i = e.error || e.sError;
      i && _fnLog(t, 0, i);
      t.json = e;
      _fnCallbackFire(t, null, "xhr", [t, e, t.jqXHR]);
      r(e);
    };
    if (e.isPlainObject(s) && s.data) {
      o = s.data;
      var u = "function" === typeof o ? o(n, t) : o;
      n = "function" === typeof o && u ? u : e.extend(true, n, u);
      delete s.data;
    }
    var c = {
      data: n,
      success: callback,
      dataType: "json",
      cache: false,
      type: t.sServerMethod,
      error: function (n, r, i) {
        var l = _fnCallbackFire(t, null, "xhr", [t, null, t.jqXHR]);
        -1 === e.inArray(true, l) &&
          ("parsererror" == r
            ? _fnLog(t, 0, "Invalid JSON response", 1)
            : 4 === n.readyState && _fnLog(t, 0, "Ajax error", 7));
        _fnProcessingDisplay(t, false);
      },
    };
    t.oAjaxData = n;
    _fnCallbackFire(t, null, "preXhr", [t, n]);
    if (t.fnServerData)
      t.fnServerData.call(
        f,
        t.sAjaxSource,
        e.map(n, function (e, t) {
          return { name: t, value: e };
        }),
        callback,
        t
      );
    else if (t.sAjaxSource || "string" === typeof s)
      t.jqXHR = e.ajax(e.extend(c, { url: s || t.sAjaxSource }));
    else if ("function" === typeof s) t.jqXHR = s.call(f, n, callback, t);
    else {
      t.jqXHR = e.ajax(e.extend(c, s));
      s.data = o;
    }
  }
  /**
   * Update the table using an Ajax call
   *  @param {object} settings dataTables settings object
   *  @returns {boolean} Block the table drawing or not
   *  @memberof DataTable#oApi
   */ function _fnAjaxUpdate(e) {
    e.iDraw++;
    _fnProcessingDisplay(e, true);
    _fnBuildAjax(e, _fnAjaxParameters(e), function (t) {
      _fnAjaxUpdateDraw(e, t);
    });
  }
  /**
   * Build up the parameters in an object needed for a server-side processing
   * request. Note that this is basically done twice, is different ways - a modern
   * method which is used by default in DataTables 1.10 which uses objects and
   * arrays, or the 1.9- method with is name / value pairs. 1.9 method is used if
   * the sAjaxSource option is used in the initialisation, or the legacyAjax
   * option is set.
   *  @param {object} oSettings dataTables settings object
   *  @returns {bool} block the table drawing or not
   *  @memberof DataTable#oApi
   */ function _fnAjaxParameters(t) {
    var n,
      r,
      i,
      l,
      o = t.aoColumns,
      s = o.length,
      f = t.oFeatures,
      u = t.oPreviousSearch,
      c = t.aoPreSearchCols,
      d = [],
      h = _fnSortFlatten(t),
      p = t._iDisplayStart,
      v = false !== f.bPaginate ? t._iDisplayLength : -1;
    var param = function (e, t) {
      d.push({ name: e, value: t });
    };
    param("sEcho", t.iDraw);
    param("iColumns", s);
    param("sColumns", _pluck(o, "sName").join(","));
    param("iDisplayStart", p);
    param("iDisplayLength", v);
    var _ = {
      draw: t.iDraw,
      columns: [],
      order: [],
      start: p,
      length: v,
      search: { value: u.sSearch, regex: u.bRegex },
    };
    for (n = 0; n < s; n++) {
      i = o[n];
      l = c[n];
      r = "function" == typeof i.mData ? "function" : i.mData;
      _.columns.push({
        data: r,
        name: i.sName,
        searchable: i.bSearchable,
        orderable: i.bSortable,
        search: { value: l.sSearch, regex: l.bRegex },
      });
      param("mDataProp_" + n, r);
      if (f.bFilter) {
        param("sSearch_" + n, l.sSearch);
        param("bRegex_" + n, l.bRegex);
        param("bSearchable_" + n, i.bSearchable);
      }
      f.bSort && param("bSortable_" + n, i.bSortable);
    }
    if (f.bFilter) {
      param("sSearch", u.sSearch);
      param("bRegex", u.bRegex);
    }
    if (f.bSort) {
      e.each(h, function (e, t) {
        _.order.push({ column: t.col, dir: t.dir });
        param("iSortCol_" + e, t.col);
        param("sSortDir_" + e, t.dir);
      });
      param("iSortingCols", h.length);
    }
    var g = DataTable.ext.legacy.ajax;
    return null === g ? (t.sAjaxSource ? d : _) : g ? d : _;
  }
  /**
   * Data the data from the server (nuking the old) and redraw the table
   *  @param {object} oSettings dataTables settings object
   *  @param {object} json json data return from the server.
   *  @param {string} json.sEcho Tracking flag for DataTables to match requests
   *  @param {int} json.iTotalRecords Number of records in the data set, not accounting for filtering
   *  @param {int} json.iTotalDisplayRecords Number of records in the data set, accounting for filtering
   *  @param {array} json.aaData The data to display on this page
   *  @param {string} [json.sColumns] Column ordering (sName, comma separated)
   *  @memberof DataTable#oApi
   */ function _fnAjaxUpdateDraw(e, t) {
    var compat = function (e, n) {
      return t[e] !== i ? t[e] : t[n];
    };
    var n = _fnAjaxDataSrc(e, t);
    var r = compat("sEcho", "draw");
    var l = compat("iTotalRecords", "recordsTotal");
    var o = compat("iTotalDisplayRecords", "recordsFiltered");
    if (r !== i) {
      if (1 * r < e.iDraw) return;
      e.iDraw = 1 * r;
    }
    n || (n = []);
    _fnClearTable(e);
    e._iRecordsTotal = parseInt(l, 10);
    e._iRecordsDisplay = parseInt(o, 10);
    for (var s = 0, f = n.length; s < f; s++) _fnAddData(e, n[s]);
    e.aiDisplay = e.aiDisplayMaster.slice();
    _fnDraw(e, true);
    e._bInitComplete || _fnInitComplete(e, t);
    _fnProcessingDisplay(e, false);
  }
  /**
   * Get the data from the JSON data source to use for drawing a table. Using
   * `_fnGetObjectDataFn` allows the data to be sourced from a property of the
   * source object, or from a processing function.
   *  @param {object} oSettings dataTables settings object
   *  @param  {object} json Data source object / array from the server
   *  @return {array} Array of data to use
   */ function _fnAjaxDataSrc(t, n, r) {
    var l =
      e.isPlainObject(t.ajax) && t.ajax.dataSrc !== i
        ? t.ajax.dataSrc
        : t.sAjaxDataProp;
    if (!r) return "data" === l ? n.aaData || n[l] : "" !== l ? b(l)(n) : n;
    m(l)(n, r);
  }
  /**
   * Generate the node required for filtering text
   *  @returns {node} Filter control element
   *  @param {object} oSettings dataTables settings object
   *  @memberof DataTable#oApi
   */ function _fnFeatureHtmlFilter(t) {
    var i = t.oClasses;
    var l = t.sTableId;
    var o = t.oLanguage;
    var s = t.oPreviousSearch;
    var f = t.aanFeatures;
    var u = '<input type="search" class="' + i.sFilterInput + '"/>';
    var c = o.sSearch;
    c = c.match(/_INPUT_/) ? c.replace("_INPUT_", u) : c + u;
    var d = e("<div/>", {
      id: f.f ? null : l + "_filter",
      class: i.sFilter,
    }).append(e("<label/>").append(c));
    var searchFn = function (e) {
      f.f;
      var r = (this || n).value ? (this || n).value : "";
      if ((!s.return || "Enter" === e.key) && r != s.sSearch) {
        _fnFilterComplete(t, {
          sSearch: r,
          bRegex: s.bRegex,
          bSmart: s.bSmart,
          bCaseInsensitive: s.bCaseInsensitive,
          return: s.return,
        });
        t._iDisplayStart = 0;
        _fnDraw(t);
      }
    };
    var h =
      null !== t.searchDelay
        ? t.searchDelay
        : "ssp" === _fnDataSource(t)
        ? 400
        : 0;
    var p = e("input", d)
      .val(s.sSearch)
      .attr("placeholder", o.sSearchPlaceholder)
      .on(
        "keyup.DT search.DT input.DT paste.DT cut.DT",
        h ? T(searchFn, h) : searchFn
      )
      .on("mouseup", function (e) {
        setTimeout(function () {
          searchFn.call(p[0], e);
        }, 10);
      })
      .on("keypress.DT", function (e) {
        if (13 == e.keyCode) return false;
      })
      .attr("aria-controls", l);
    e(t.nTable).on("search.dt.DT", function (e, n) {
      if (t === n)
        try {
          p[0] !== r.activeElement && p.val(s.sSearch);
        } catch (e) {}
    });
    return d[0];
  }
  /**
   * Filter the table using both the global filter and column based filtering
   *  @param {object} oSettings dataTables settings object
   *  @param {object} oSearch search information
   *  @param {int} [iForce] force a research of the master array (1) or not (undefined or 0)
   *  @memberof DataTable#oApi
   */ function _fnFilterComplete(e, t, n) {
    var r = e.oPreviousSearch;
    var l = e.aoPreSearchCols;
    var fnSaveFilter = function (e) {
      r.sSearch = e.sSearch;
      r.bRegex = e.bRegex;
      r.bSmart = e.bSmart;
      r.bCaseInsensitive = e.bCaseInsensitive;
      r.return = e.return;
    };
    var fnRegex = function (e) {
      return e.bEscapeRegex !== i ? !e.bEscapeRegex : e.bRegex;
    };
    _fnColumnTypes(e);
    if ("ssp" != _fnDataSource(e)) {
      _fnFilter(
        e,
        t.sSearch,
        n,
        fnRegex(t),
        t.bSmart,
        t.bCaseInsensitive,
        t.return
      );
      fnSaveFilter(t);
      for (var o = 0; o < l.length; o++)
        _fnFilterColumn(
          e,
          l[o].sSearch,
          o,
          fnRegex(l[o]),
          l[o].bSmart,
          l[o].bCaseInsensitive
        );
      _fnFilterCustom(e);
    } else fnSaveFilter(t);
    e.bFiltered = true;
    _fnCallbackFire(e, null, "search", [e]);
  }
  /**
   * Apply custom filtering functions
   *  @param {object} oSettings dataTables settings object
   *  @memberof DataTable#oApi
   */ function _fnFilterCustom(t) {
    var n = DataTable.ext.search;
    var r = t.aiDisplay;
    var i, l;
    for (var o = 0, s = n.length; o < s; o++) {
      var f = [];
      for (var u = 0, c = r.length; u < c; u++) {
        l = r[u];
        i = t.aoData[l];
        n[o](t, i._aFilterData, l, i._aData, u) && f.push(l);
      }
      r.length = 0;
      e.merge(r, f);
    }
  }
  /**
   * Filter the table on a per-column basis
   *  @param {object} oSettings dataTables settings object
   *  @param {string} sInput string to filter on
   *  @param {int} iColumn column to filter
   *  @param {bool} bRegex treat search string as a regular expression or not
   *  @param {bool} bSmart use smart filtering or not
   *  @param {bool} bCaseInsensitive Do case insensitive matching or not
   *  @memberof DataTable#oApi
   */ function _fnFilterColumn(e, t, n, r, i, l) {
    if ("" !== t) {
      var o;
      var s = [];
      var f = e.aiDisplay;
      var u = _fnFilterCreateSearch(t, r, i, l);
      for (var c = 0; c < f.length; c++) {
        o = e.aoData[f[c]]._aFilterData[n];
        u.test(o) && s.push(f[c]);
      }
      e.aiDisplay = s;
    }
  }
  /**
   * Filter the data table based on user input and draw the table
   *  @param {object} settings dataTables settings object
   *  @param {string} input string to filter on
   *  @param {int} force optional - force a research of the master array (1) or not (undefined or 0)
   *  @param {bool} regex treat as a regular expression or not
   *  @param {bool} smart perform smart filtering or not
   *  @param {bool} caseInsensitive Do case insensitive matching or not
   *  @memberof DataTable#oApi
   */ function _fnFilter(e, t, n, r, i, l) {
    var o = _fnFilterCreateSearch(t, r, i, l);
    var s = e.oPreviousSearch.sSearch;
    var f = e.aiDisplayMaster;
    var u, c, d;
    var h = [];
    0 !== DataTable.ext.search.length && (n = true);
    c = _fnFilterData(e);
    if (t.length <= 0) e.aiDisplay = f.slice();
    else {
      (c || n || r || s.length > t.length || 0 !== t.indexOf(s) || e.bSorted) &&
        (e.aiDisplay = f.slice());
      u = e.aiDisplay;
      for (d = 0; d < u.length; d++)
        o.test(e.aoData[u[d]]._sFilterRow) && h.push(u[d]);
      e.aiDisplay = h;
    }
  }
  /**
   * Build a regular expression object suitable for searching a table
   *  @param {string} sSearch string to search for
   *  @param {bool} bRegex treat as a regular expression or not
   *  @param {bool} bSmart perform smart filtering or not
   *  @param {bool} bCaseInsensitive Do case insensitive matching or not
   *  @returns {RegExp} constructed object
   *  @memberof DataTable#oApi
   */ function _fnFilterCreateSearch(t, n, r, i) {
    t = n ? t : S(t);
    if (r) {
      var l = e.map(t.match(/"[^"]+"|[^ ]+/g) || [""], function (e) {
        if ('"' === e.charAt(0)) {
          var t = e.match(/^"(.*)"$/);
          e = t ? t[1] : e;
        }
        return e.replace('"', "");
      });
      t = "^(?=.*?" + l.join(")(?=.*?") + ").*$";
    }
    return new RegExp(t, i ? "i" : "");
  }
  /**
   * Escape a string such that it can be used in a regular expression
   *  @param {string} sVal string to escape
   *  @returns {string} escaped string
   *  @memberof DataTable#oApi
   */ var S = DataTable.util.escapeRegex;
  var D = e("<div>")[0];
  var C = D.textContent !== i;
  function _fnFilterData(e) {
    var t = e.aoColumns;
    var n;
    var r, i, l, o, s, f, u;
    var c = false;
    for (r = 0, l = e.aoData.length; r < l; r++) {
      u = e.aoData[r];
      if (!u._aFilterData) {
        s = [];
        for (i = 0, o = t.length; i < o; i++) {
          n = t[i];
          if (n.bSearchable) {
            f = _fnGetCellData(e, r, i, "filter");
            null === f && (f = "");
            "string" !== typeof f && f.toString && (f = f.toString());
          } else f = "";
          if (f.indexOf && -1 !== f.indexOf("&")) {
            D.innerHTML = f;
            f = C ? D.textContent : D.innerText;
          }
          f.replace && (f = f.replace(/[\r\n\u2028]/g, ""));
          s.push(f);
        }
        u._aFilterData = s;
        u._sFilterRow = s.join("  ");
        c = true;
      }
    }
    return c;
  }
  /**
   * Convert from the internal Hungarian notation to camelCase for external
   * interaction
   *  @param {object} obj Object to convert
   *  @returns {object} Inverted object
   *  @memberof DataTable#oApi
   */ function _fnSearchToCamel(e) {
    return {
      search: e.sSearch,
      smart: e.bSmart,
      regex: e.bRegex,
      caseInsensitive: e.bCaseInsensitive,
    };
  }
  /**
   * Convert from camelCase notation to the internal Hungarian. We could use the
   * Hungarian convert function here, but this is cleaner
   *  @param {object} obj Object to convert
   *  @returns {object} Inverted object
   *  @memberof DataTable#oApi
   */ function _fnSearchToHung(e) {
    return {
      sSearch: e.search,
      bSmart: e.smart,
      bRegex: e.regex,
      bCaseInsensitive: e.caseInsensitive,
    };
  }
  /**
   * Generate the node required for the info display
   *  @param {object} oSettings dataTables settings object
   *  @returns {node} Information element
   *  @memberof DataTable#oApi
   */ function _fnFeatureHtmlInfo(t) {
    var n = t.sTableId,
      r = t.aanFeatures.i,
      i = e("<div/>", { class: t.oClasses.sInfo, id: r ? null : n + "_info" });
    if (!r) {
      t.aoDrawCallback.push({ fn: _fnUpdateInfo, sName: "information" });
      i.attr("role", "status").attr("aria-live", "polite");
      e(t.nTable).attr("aria-describedby", n + "_info");
    }
    return i[0];
  }
  /**
   * Update the information elements in the display
   *  @param {object} settings dataTables settings object
   *  @memberof DataTable#oApi
   */ function _fnUpdateInfo(t) {
    var n = t.aanFeatures.i;
    if (0 !== n.length) {
      var r = t.oLanguage,
        i = t._iDisplayStart + 1,
        l = t.fnDisplayEnd(),
        o = t.fnRecordsTotal(),
        s = t.fnRecordsDisplay(),
        f = s ? r.sInfo : r.sInfoEmpty;
      s !== o && (f += " " + r.sInfoFiltered);
      f += r.sInfoPostFix;
      f = _fnInfoMacros(t, f);
      var u = r.fnInfoCallback;
      null !== u && (f = u.call(t.oInstance, t, i, l, o, s, f));
      e(n).html(f);
    }
  }
  function _fnInfoMacros(e, t) {
    var n = e.fnFormatNumber,
      r = e._iDisplayStart + 1,
      i = e._iDisplayLength,
      l = e.fnRecordsDisplay(),
      o = -1 === i;
    return t
      .replace(/_START_/g, n.call(e, r))
      .replace(/_END_/g, n.call(e, e.fnDisplayEnd()))
      .replace(/_MAX_/g, n.call(e, e.fnRecordsTotal()))
      .replace(/_TOTAL_/g, n.call(e, l))
      .replace(/_PAGE_/g, n.call(e, o ? 1 : Math.ceil(r / i)))
      .replace(/_PAGES_/g, n.call(e, o ? 1 : Math.ceil(l / i)));
  }
  /**
   * Draw the table for the first time, adding all required features
   *  @param {object} settings dataTables settings object
   *  @memberof DataTable#oApi
   */ function _fnInitialise(e) {
    var t,
      n,
      r = e.iInitDisplayStart;
    var i,
      l = e.aoColumns;
    var o = e.oFeatures;
    var s = e.bDeferLoading;
    if (e.bInitialised) {
      _fnAddOptionsHtml(e);
      _fnBuildHead(e);
      _fnDrawHead(e, e.aoHeader);
      _fnDrawHead(e, e.aoFooter);
      _fnProcessingDisplay(e, true);
      o.bAutoWidth && _fnCalculateColumnWidths(e);
      for (t = 0, n = l.length; t < n; t++) {
        i = l[t];
        i.sWidth && (i.nTh.style.width = _fnStringToCss(i.sWidth));
      }
      _fnCallbackFire(e, null, "preInit", [e]);
      _fnReDraw(e);
      var f = _fnDataSource(e);
      if ("ssp" != f || s)
        if ("ajax" == f)
          _fnBuildAjax(
            e,
            [],
            function (n) {
              var i = _fnAjaxDataSrc(e, n);
              for (t = 0; t < i.length; t++) _fnAddData(e, i[t]);
              e.iInitDisplayStart = r;
              _fnReDraw(e);
              _fnProcessingDisplay(e, false);
              _fnInitComplete(e, n);
            },
            e
          );
        else {
          _fnProcessingDisplay(e, false);
          _fnInitComplete(e);
        }
    } else
      setTimeout(function () {
        _fnInitialise(e);
      }, 200);
  }
  /**
   * Draw the table for the first time, adding all required features
   *  @param {object} oSettings dataTables settings object
   *  @param {object} [json] JSON from the server that completed the table, if using Ajax source
   *    with client-side processing (optional)
   *  @memberof DataTable#oApi
   */ function _fnInitComplete(e, t) {
    e._bInitComplete = true;
    (t || e.oInit.aaData) && _fnAdjustColumnSizing(e);
    _fnCallbackFire(e, null, "plugin-init", [e, t]);
    _fnCallbackFire(e, "aoInitComplete", "init", [e, t]);
  }
  function _fnLengthChange(e, t) {
    var n = parseInt(t, 10);
    e._iDisplayLength = n;
    _fnLengthOverflow(e);
    _fnCallbackFire(e, null, "length", [e, n]);
  }
  /**
   * Generate the node required for user display length changing
   *  @param {object} settings dataTables settings object
   *  @returns {node} Display length feature node
   *  @memberof DataTable#oApi
   */ function _fnFeatureHtmlLength(t) {
    var r = t.oClasses,
      i = t.sTableId,
      l = t.aLengthMenu,
      o = Array.isArray(l[0]),
      s = o ? l[0] : l,
      f = o ? l[1] : l;
    var u = e("<select/>", {
      name: i + "_length",
      "aria-controls": i,
      class: r.sLengthSelect,
    });
    for (var c = 0, d = s.length; c < d; c++)
      u[0][c] = new Option(
        "number" === typeof f[c] ? t.fnFormatNumber(f[c]) : f[c],
        s[c]
      );
    var h = e("<div><label/></div>").addClass(r.sLength);
    t.aanFeatures.l || (h[0].id = i + "_length");
    h.children().append(
      t.oLanguage.sLengthMenu.replace("_MENU_", u[0].outerHTML)
    );
    e("select", h)
      .val(t._iDisplayLength)
      .on("change.DT", function (r) {
        _fnLengthChange(t, e(this || n).val());
        _fnDraw(t);
      });
    e(t.nTable).on("length.dt.DT", function (n, r, i) {
      t === r && e("select", h).val(i);
    });
    return h[0];
  }
  /**
   * Generate the node required for default pagination
   *  @param {object} oSettings dataTables settings object
   *  @returns {node} Pagination feature node
   *  @memberof DataTable#oApi
   */ function _fnFeatureHtmlPaginate(t) {
    var n = t.sPaginationType,
      r = DataTable.ext.pager[n],
      i = "function" === typeof r,
      redraw = function (e) {
        _fnDraw(e);
      },
      l = e("<div/>").addClass(t.oClasses.sPaging + n)[0],
      o = t.aanFeatures;
    i || r.fnInit(t, l, redraw);
    if (!o.p) {
      l.id = t.sTableId + "_paginate";
      t.aoDrawCallback.push({
        fn: function (e) {
          if (i) {
            var t,
              n,
              l = e._iDisplayStart,
              s = e._iDisplayLength,
              f = e.fnRecordsDisplay(),
              u = -1 === s,
              c = u ? 0 : Math.ceil(l / s),
              d = u ? 1 : Math.ceil(f / s),
              h = r(c, d);
            for (t = 0, n = o.p.length; t < n; t++)
              _fnRenderer(e, "pageButton")(e, o.p[t], t, h, c, d);
          } else r.fnUpdate(e, redraw);
        },
        sName: "pagination",
      });
    }
    return l;
  }
  /**
   * Alter the display settings to change the page
   *  @param {object} settings DataTables settings object
   *  @param {string|int} action Paging action to take: "first", "previous",
   *    "next" or "last" or page number to jump to (integer)
   *  @param [bool] redraw Automatically draw the update or not
   *  @returns {bool} true page has changed, false - no change
   *  @memberof DataTable#oApi
   */ function _fnPageChange(e, t, n) {
    var r = e._iDisplayStart,
      i = e._iDisplayLength,
      l = e.fnRecordsDisplay();
    if (0 === l || -1 === i) r = 0;
    else if ("number" === typeof t) {
      r = t * i;
      r > l && (r = 0);
    } else if ("first" == t) r = 0;
    else if ("previous" == t) {
      r = i >= 0 ? r - i : 0;
      r < 0 && (r = 0);
    } else
      "next" == t
        ? r + i < l && (r += i)
        : "last" == t
        ? (r = Math.floor((l - 1) / i) * i)
        : _fnLog(e, 0, "Unknown paging action: " + t, 5);
    var o = e._iDisplayStart !== r;
    e._iDisplayStart = r;
    if (o) {
      _fnCallbackFire(e, null, "page", [e]);
      n && _fnDraw(e);
    }
    return o;
  }
  /**
   * Generate the node required for the processing node
   *  @param {object} settings dataTables settings object
   *  @returns {node} Processing element
   *  @memberof DataTable#oApi
   */ function _fnFeatureHtmlProcessing(t) {
    return e("<div/>", {
      id: t.aanFeatures.r ? null : t.sTableId + "_processing",
      class: t.oClasses.sProcessing,
    })
      .html(t.oLanguage.sProcessing)
      .insertBefore(t.nTable)[0];
  }
  /**
   * Display or hide the processing indicator
   *  @param {object} settings dataTables settings object
   *  @param {bool} show Show the processing indicator (true) or not (false)
   *  @memberof DataTable#oApi
   */ function _fnProcessingDisplay(t, n) {
    t.oFeatures.bProcessing &&
      e(t.aanFeatures.r).css("display", n ? "block" : "none");
    _fnCallbackFire(t, null, "processing", [t, n]);
  }
  /**
   * Add any control elements for the table - specifically scrolling
   *  @param {object} settings dataTables settings object
   *  @returns {node} Node to add to the DOM
   *  @memberof DataTable#oApi
   */ function _fnFeatureHtmlTable(t) {
    var r = e(t.nTable);
    var i = t.oScroll;
    if ("" === i.sX && "" === i.sY) return t.nTable;
    var l = i.sX;
    var o = i.sY;
    var s = t.oClasses;
    var f = r.children("caption");
    var u = f.length ? f[0]._captionSide : null;
    var c = e(r[0].cloneNode(false));
    var d = e(r[0].cloneNode(false));
    var h = r.children("tfoot");
    var p = "<div/>";
    var size = function (e) {
      return e ? _fnStringToCss(e) : null;
    };
    h.length || (h = null);
    var v = e(p, { class: s.sScrollWrapper })
      .append(
        e(p, { class: s.sScrollHead })
          .css({
            overflow: "hidden",
            position: "relative",
            border: 0,
            width: l ? size(l) : "100%",
          })
          .append(
            e(p, { class: s.sScrollHeadInner })
              .css({ "box-sizing": "content-box", width: i.sXInner || "100%" })
              .append(
                c
                  .removeAttr("id")
                  .css("margin-left", 0)
                  .append("top" === u ? f : null)
                  .append(r.children("thead"))
              )
          )
      )
      .append(
        e(p, { class: s.sScrollBody })
          .css({ position: "relative", overflow: "auto", width: size(l) })
          .append(r)
      );
    h &&
      v.append(
        e(p, { class: s.sScrollFoot })
          .css({ overflow: "hidden", border: 0, width: l ? size(l) : "100%" })
          .append(
            e(p, { class: s.sScrollFootInner }).append(
              d
                .removeAttr("id")
                .css("margin-left", 0)
                .append("bottom" === u ? f : null)
                .append(r.children("tfoot"))
            )
          )
      );
    var _ = v.children();
    var g = _[0];
    var b = _[1];
    var m = h ? _[2] : null;
    l &&
      e(b).on("scroll.DT", function (e) {
        var t = (this || n).scrollLeft;
        g.scrollLeft = t;
        h && (m.scrollLeft = t);
      });
    e(b).css("max-height", o);
    i.bCollapse || e(b).css("height", o);
    t.nScrollHead = g;
    t.nScrollBody = b;
    t.nScrollFoot = m;
    t.aoDrawCallback.push({ fn: _fnScrollDraw, sName: "scrolling" });
    return v[0];
  }
  /**
   * Update the header, footer and body tables for resizing - i.e. column
   * alignment.
   *
   * Welcome to the most horrible function DataTables. The process that this
   * function follows is basically:
   *   1. Re-create the table inside the scrolling div
   *   2. Take live measurements from the DOM
   *   3. Apply the measurements to align the columns
   *   4. Clean up
   *
   *  @param {object} settings dataTables settings object
   *  @memberof DataTable#oApi
   */ function _fnScrollDraw(n) {
    var r,
      l,
      o,
      s,
      f,
      u,
      c,
      d,
      h,
      p = n.oScroll,
      v = p.sX,
      _ = p.sXInner,
      g = p.sY,
      b = p.iBarWidth,
      m = e(n.nScrollHead),
      S = m[0].style,
      D = m.children("div"),
      C = D[0].style,
      y = D.children("table"),
      T = n.nScrollBody,
      w = e(T),
      x = T.style,
      A = e(n.nScrollFoot),
      F = A.children("div"),
      I = F.children("table"),
      L = e(n.nTHead),
      R = e(n.nTable),
      P = R[0],
      j = P.style,
      H = n.nTFoot ? e(n.nTFoot) : null,
      k = n.oBrowser,
      N = k.bScrollOversize,
      M = (_pluck(n.aoColumns, "nTh"), []),
      O = [],
      W = [],
      E = [],
      zeroOut = function (e) {
        var t = e.style;
        t.paddingTop = "0";
        t.paddingBottom = "0";
        t.borderTopWidth = "0";
        t.borderBottomWidth = "0";
        t.height = 0;
      };
    var B = T.scrollHeight > T.clientHeight;
    if (n.scrollBarVis === B || n.scrollBarVis === i) {
      n.scrollBarVis = B;
      R.children("thead, tfoot").remove();
      if (H) {
        u = H.clone().prependTo(R);
        l = H.find("tr");
        s = u.find("tr");
      }
      f = L.clone().prependTo(R);
      r = L.find("tr");
      o = f.find("tr");
      f.find("th, td").removeAttr("tabindex");
      if (!v) {
        x.width = "100%";
        m[0].style.width = "100%";
      }
      e.each(_fnGetUniqueThs(n, f), function (e, t) {
        c = _fnVisibleToColumnIndex(n, e);
        t.style.width = n.aoColumns[c].sWidth;
      });
      H &&
        _fnApplyToChildren(function (e) {
          e.style.width = "";
        }, s);
      h = R.outerWidth();
      if ("" === v) {
        j.width = "100%";
        N &&
          (R.find("tbody").height() > T.offsetHeight ||
            "scroll" == w.css("overflow-y")) &&
          (j.width = _fnStringToCss(R.outerWidth() - b));
        h = R.outerWidth();
      } else if ("" !== _) {
        j.width = _fnStringToCss(_);
        h = R.outerWidth();
      }
      _fnApplyToChildren(zeroOut, o);
      _fnApplyToChildren(function (n) {
        var r = t.getComputedStyle
          ? t.getComputedStyle(n).width
          : _fnStringToCss(e(n).width());
        W.push(n.innerHTML);
        M.push(r);
      }, o);
      _fnApplyToChildren(function (e, t) {
        e.style.width = M[t];
      }, r);
      e(o).height(0);
      if (H) {
        _fnApplyToChildren(zeroOut, s);
        _fnApplyToChildren(function (t) {
          E.push(t.innerHTML);
          O.push(_fnStringToCss(e(t).css("width")));
        }, s);
        _fnApplyToChildren(function (e, t) {
          e.style.width = O[t];
        }, l);
        e(s).height(0);
      }
      _fnApplyToChildren(function (e, t) {
        e.innerHTML = '<div class="dataTables_sizing">' + W[t] + "</div>";
        e.childNodes[0].style.height = "0";
        e.childNodes[0].style.overflow = "hidden";
        e.style.width = M[t];
      }, o);
      H &&
        _fnApplyToChildren(function (e, t) {
          e.innerHTML = '<div class="dataTables_sizing">' + E[t] + "</div>";
          e.childNodes[0].style.height = "0";
          e.childNodes[0].style.overflow = "hidden";
          e.style.width = O[t];
        }, s);
      if (Math.round(R.outerWidth()) < Math.round(h)) {
        d =
          T.scrollHeight > T.offsetHeight || "scroll" == w.css("overflow-y")
            ? h + b
            : h;
        N &&
          (T.scrollHeight > T.offsetHeight ||
            "scroll" == w.css("overflow-y")) &&
          (j.width = _fnStringToCss(d - b));
        ("" !== v && "" === _) ||
          _fnLog(n, 1, "Possible column misalignment", 6);
      } else d = "100%";
      x.width = _fnStringToCss(d);
      S.width = _fnStringToCss(d);
      H && (n.nScrollFoot.style.width = _fnStringToCss(d));
      g || (N && (x.height = _fnStringToCss(P.offsetHeight + b)));
      var U = R.outerWidth();
      y[0].style.width = _fnStringToCss(U);
      C.width = _fnStringToCss(U);
      var G = R.height() > T.clientHeight || "scroll" == w.css("overflow-y");
      var V = "padding" + (k.bScrollbarLeft ? "Left" : "Right");
      C[V] = G ? b + "px" : "0px";
      if (H) {
        I[0].style.width = _fnStringToCss(U);
        F[0].style.width = _fnStringToCss(U);
        F[0].style[V] = G ? b + "px" : "0px";
      }
      R.children("colgroup").insertBefore(R.children("thead"));
      w.trigger("scroll");
      (!n.bSorted && !n.bFiltered) || n._drawHold || (T.scrollTop = 0);
    } else {
      n.scrollBarVis = B;
      _fnAdjustColumnSizing(n);
    }
  }
  /**
   * Apply a given function to the display child nodes of an element array (typically
   * TD children of TR rows
   *  @param {function} fn Method to apply to the objects
   *  @param array {nodes} an1 List of elements to look through for display children
   *  @param array {nodes} an2 Another list (identical structure to the first) - optional
   *  @memberof DataTable#oApi
   */ function _fnApplyToChildren(e, t, n) {
    var r = 0,
      i = 0,
      l = t.length;
    var o, s;
    while (i < l) {
      o = t[i].firstChild;
      s = n ? n[i].firstChild : null;
      while (o) {
        if (1 === o.nodeType) {
          n ? e(o, s, r) : e(o, r);
          r++;
        }
        o = o.nextSibling;
        s = n ? s.nextSibling : null;
      }
      i++;
    }
  }
  var y = /<.*?>/g;
  /**
   * Calculate the width of columns for the table
   *  @param {object} oSettings dataTables settings object
   *  @memberof DataTable#oApi
   */ function _fnCalculateColumnWidths(n) {
    var r,
      i,
      l,
      o = n.nTable,
      s = n.aoColumns,
      f = n.oScroll,
      u = f.sY,
      c = f.sX,
      d = f.sXInner,
      h = s.length,
      p = _fnGetColumns(n, "bVisible"),
      v = e("th", n.nTHead),
      _ = o.getAttribute("width"),
      g = o.parentNode,
      b = false,
      m = n.oBrowser,
      S = m.bScrollOversize;
    var D = o.style.width;
    D && -1 !== D.indexOf("%") && (_ = D);
    for (r = 0; r < p.length; r++) {
      i = s[p[r]];
      if (null !== i.sWidth) {
        i.sWidth = _fnConvertToWidth(i.sWidthOrig, g);
        b = true;
      }
    }
    if (S || (!b && !c && !u && h == _fnVisbleColumns(n) && h == v.length))
      for (r = 0; r < h; r++) {
        var C = _fnVisibleToColumnIndex(n, r);
        null !== C && (s[C].sWidth = _fnStringToCss(v.eq(r).width()));
      }
    else {
      var y = e(o).clone().css("visibility", "hidden").removeAttr("id");
      y.find("tbody tr").remove();
      var w = e("<tr/>").appendTo(y.find("tbody"));
      y.find("thead, tfoot").remove();
      y.append(e(n.nTHead).clone()).append(e(n.nTFoot).clone());
      y.find("tfoot th, tfoot td").css("width", "");
      v = _fnGetUniqueThs(n, y.find("thead")[0]);
      for (r = 0; r < p.length; r++) {
        i = s[p[r]];
        v[r].style.width =
          null !== i.sWidthOrig && "" !== i.sWidthOrig
            ? _fnStringToCss(i.sWidthOrig)
            : "";
        i.sWidthOrig &&
          c &&
          e(v[r]).append(
            e("<div/>").css({
              width: i.sWidthOrig,
              margin: 0,
              padding: 0,
              border: 0,
              height: 1,
            })
          );
      }
      if (n.aoData.length)
        for (r = 0; r < p.length; r++) {
          l = p[r];
          i = s[l];
          e(_fnGetWidestNode(n, l))
            .clone(false)
            .append(i.sContentPadding)
            .appendTo(w);
        }
      e("[name]", y).removeAttr("name");
      var x = e("<div/>")
        .css(
          c || u
            ? {
                position: "absolute",
                top: 0,
                left: 0,
                height: 1,
                right: 0,
                overflow: "hidden",
              }
            : {}
        )
        .append(y)
        .appendTo(g);
      if (c && d) y.width(d);
      else if (c) {
        y.css("width", "auto");
        y.removeAttr("width");
        y.width() < g.clientWidth && _ && y.width(g.clientWidth);
      } else u ? y.width(g.clientWidth) : _ && y.width(_);
      var A = 0;
      for (r = 0; r < p.length; r++) {
        var F = e(v[r]);
        var I = F.outerWidth() - F.width();
        var L = m.bBounding
          ? Math.ceil(v[r].getBoundingClientRect().width)
          : F.outerWidth();
        A += L;
        s[p[r]].sWidth = _fnStringToCss(L - I);
      }
      o.style.width = _fnStringToCss(A);
      x.remove();
    }
    _ && (o.style.width = _fnStringToCss(_));
    if ((_ || c) && !n._reszEvt) {
      var bindResize = function () {
        e(t).on(
          "resize.DT-" + n.sInstance,
          T(function () {
            _fnAdjustColumnSizing(n);
          })
        );
      };
      S ? setTimeout(bindResize, 1e3) : bindResize();
      n._reszEvt = true;
    }
  }
  /**
   * Throttle the calls to a function. Arguments and context are maintained for
   * the throttled function
   *  @param {function} fn Function to be called
   *  @param {int} [freq=200] call frequency in mS
   *  @returns {function} wrapped function
   *  @memberof DataTable#oApi
   */ var T = DataTable.util.throttle;
  /**
   * Convert a CSS unit width to pixels (e.g. 2em)
   *  @param {string} width width to be converted
   *  @param {node} parent parent to get the with for (required for relative widths) - optional
   *  @returns {int} width in pixels
   *  @memberof DataTable#oApi
   */ function _fnConvertToWidth(t, n) {
    if (!t) return 0;
    var i = e("<div/>")
      .css("width", _fnStringToCss(t))
      .appendTo(n || r.body);
    var l = i[0].offsetWidth;
    i.remove();
    return l;
  }
  /**
   * Get the widest node
   *  @param {object} settings dataTables settings object
   *  @param {int} colIdx column of interest
   *  @returns {node} widest table node
   *  @memberof DataTable#oApi
   */ function _fnGetWidestNode(t, n) {
    var r = _fnGetMaxLenString(t, n);
    if (r < 0) return null;
    var i = t.aoData[r];
    return i.nTr
      ? i.anCells[n]
      : e("<td/>").html(_fnGetCellData(t, r, n, "display"))[0];
  }
  /**
   * Get the maximum strlen for each data column
   *  @param {object} settings dataTables settings object
   *  @param {int} colIdx column of interest
   *  @returns {string} max string length for each column
   *  @memberof DataTable#oApi
   */ function _fnGetMaxLenString(e, t) {
    var n,
      r = -1,
      i = -1;
    for (var l = 0, o = e.aoData.length; l < o; l++) {
      n = _fnGetCellData(e, l, t, "display") + "";
      n = n.replace(y, "");
      n = n.replace(/&nbsp;/g, " ");
      if (n.length > r) {
        r = n.length;
        i = l;
      }
    }
    return i;
  }
  /**
   * Append a CSS unit (only if required) to a string
   *  @param {string} value to css-ify
   *  @returns {string} value with css unit
   *  @memberof DataTable#oApi
   */ function _fnStringToCss(e) {
    return null === e
      ? "0px"
      : "number" == typeof e
      ? e < 0
        ? "0px"
        : e + "px"
      : e.match(/\d$/)
      ? e + "px"
      : e;
  }
  function _fnSortFlatten(t) {
    var n,
      r,
      l,
      o,
      s,
      f,
      u,
      c = [],
      d = t.aoColumns,
      h = t.aaSortingFixed,
      p = e.isPlainObject(h),
      v = [],
      add = function (t) {
        t.length && !Array.isArray(t[0]) ? v.push(t) : e.merge(v, t);
      };
    Array.isArray(h) && add(h);
    p && h.pre && add(h.pre);
    add(t.aaSorting);
    p && h.post && add(h.post);
    for (n = 0; n < v.length; n++) {
      u = v[n][0];
      o = d[u].aDataSort;
      for (r = 0, l = o.length; r < l; r++) {
        s = o[r];
        f = d[s].sType || "string";
        v[n]._idx === i && (v[n]._idx = e.inArray(v[n][1], d[s].asSorting));
        c.push({
          src: u,
          col: s,
          dir: v[n][1],
          index: v[n]._idx,
          type: f,
          formatter: DataTable.ext.type.order[f + "-pre"],
        });
      }
    }
    return c;
  }
  /**
   * Change the order of the table
   *  @param {object} oSettings dataTables settings object
   *  @memberof DataTable#oApi
   *  @todo This really needs split up!
   */ function _fnSort(e) {
    var t,
      n,
      r,
      i,
      l,
      o = [],
      s = DataTable.ext.type.order,
      f = e.aoData,
      u = (e.aoColumns, 0),
      c = e.aiDisplayMaster;
    _fnColumnTypes(e);
    l = _fnSortFlatten(e);
    for (t = 0, n = l.length; t < n; t++) {
      i = l[t];
      i.formatter && u++;
      _fnSortData(e, i.col);
    }
    if ("ssp" != _fnDataSource(e) && 0 !== l.length) {
      for (t = 0, r = c.length; t < r; t++) o[c[t]] = t;
      u === l.length
        ? c.sort(function (e, t) {
            var n,
              r,
              i,
              s,
              u,
              c = l.length,
              d = f[e]._aSortData,
              h = f[t]._aSortData;
            for (i = 0; i < c; i++) {
              u = l[i];
              n = d[u.col];
              r = h[u.col];
              s = n < r ? -1 : n > r ? 1 : 0;
              if (0 !== s) return "asc" === u.dir ? s : -s;
            }
            n = o[e];
            r = o[t];
            return n < r ? -1 : n > r ? 1 : 0;
          })
        : c.sort(function (e, t) {
            var n,
              r,
              i,
              u,
              c,
              d,
              h = l.length,
              p = f[e]._aSortData,
              v = f[t]._aSortData;
            for (i = 0; i < h; i++) {
              c = l[i];
              n = p[c.col];
              r = v[c.col];
              d = s[c.type + "-" + c.dir] || s["string-" + c.dir];
              u = d(n, r);
              if (0 !== u) return u;
            }
            n = o[e];
            r = o[t];
            return n < r ? -1 : n > r ? 1 : 0;
          });
    }
    e.bSorted = true;
  }
  function _fnSortAria(e) {
    var t;
    var n;
    var r = e.aoColumns;
    var i = _fnSortFlatten(e);
    var l = e.oLanguage.oAria;
    for (var o = 0, s = r.length; o < s; o++) {
      var f = r[o];
      var u = f.asSorting;
      var c = f.ariaTitle || f.sTitle.replace(/<.*?>/g, "");
      var d = f.nTh;
      d.removeAttribute("aria-sort");
      if (f.bSortable) {
        if (i.length > 0 && i[0].col == o) {
          d.setAttribute(
            "aria-sort",
            "asc" == i[0].dir ? "ascending" : "descending"
          );
          n = u[i[0].index + 1] || u[0];
        } else n = u[0];
        t = c + ("asc" === n ? l.sSortAscending : l.sSortDescending);
      } else t = c;
      d.setAttribute("aria-label", t);
    }
  }
  /**
   * Function to run on user sort request
   *  @param {object} settings dataTables settings object
   *  @param {node} attachTo node to attach the handler to
   *  @param {int} colIdx column sorting index
   *  @param {boolean} [append=false] Append the requested sort to the existing
   *    sort if true (i.e. multi-column sort)
   *  @param {function} [callback] callback function
   *  @memberof DataTable#oApi
   */ function _fnSortListener(t, n, r, l) {
    var o = t.aoColumns[n];
    var s = t.aaSorting;
    var f = o.asSorting;
    var u;
    var next = function (t, n) {
      var r = t._idx;
      r === i && (r = e.inArray(t[1], f));
      return r + 1 < f.length ? r + 1 : n ? null : 0;
    };
    "number" === typeof s[0] && (s = t.aaSorting = [s]);
    if (r && t.oFeatures.bSortMulti) {
      var c = e.inArray(n, _pluck(s, "0"));
      if (-1 !== c) {
        u = next(s[c], true);
        null === u && 1 === s.length && (u = 0);
        if (null === u) s.splice(c, 1);
        else {
          s[c][1] = f[u];
          s[c]._idx = u;
        }
      } else {
        s.push([n, f[0], 0]);
        s[s.length - 1]._idx = 0;
      }
    } else if (s.length && s[0][0] == n) {
      u = next(s[0]);
      s.length = 1;
      s[0][1] = f[u];
      s[0]._idx = u;
    } else {
      s.length = 0;
      s.push([n, f[0]]);
      s[0]._idx = 0;
    }
    _fnReDraw(t);
    "function" == typeof l && l(t);
  }
  /**
   * Attach a sort handler (click) to a node
   *  @param {object} settings dataTables settings object
   *  @param {node} attachTo node to attach the handler to
   *  @param {int} colIdx column sorting index
   *  @param {function} [callback] callback function
   *  @memberof DataTable#oApi
   */ function _fnSortAttachListener(e, t, n, r) {
    var i = e.aoColumns[n];
    _fnBindAction(t, {}, function (t) {
      if (false !== i.bSortable)
        if (e.oFeatures.bProcessing) {
          _fnProcessingDisplay(e, true);
          setTimeout(function () {
            _fnSortListener(e, n, t.shiftKey, r);
            "ssp" !== _fnDataSource(e) && _fnProcessingDisplay(e, false);
          }, 0);
        } else _fnSortListener(e, n, t.shiftKey, r);
    });
  }
  /**
   * Set the sorting classes on table's body, Note: it is safe to call this function
   * when bSort and bSortClasses are false
   *  @param {object} oSettings dataTables settings object
   *  @memberof DataTable#oApi
   */ function _fnSortingClasses(t) {
    var n = t.aLastSort;
    var r = t.oClasses.sSortColumn;
    var i = _fnSortFlatten(t);
    var l = t.oFeatures;
    var o, s, f;
    if (l.bSort && l.bSortClasses) {
      for (o = 0, s = n.length; o < s; o++) {
        f = n[o].src;
        e(_pluck(t.aoData, "anCells", f)).removeClass(r + (o < 2 ? o + 1 : 3));
      }
      for (o = 0, s = i.length; o < s; o++) {
        f = i[o].src;
        e(_pluck(t.aoData, "anCells", f)).addClass(r + (o < 2 ? o + 1 : 3));
      }
    }
    t.aLastSort = i;
  }
  function _fnSortData(e, t) {
    var n = e.aoColumns[t];
    var r = DataTable.ext.order[n.sSortDataType];
    var i;
    r && (i = r.call(e.oInstance, e, t, _fnColumnIndexToVisible(e, t)));
    var l, o;
    var s = DataTable.ext.type.order[n.sType + "-pre"];
    for (var f = 0, u = e.aoData.length; f < u; f++) {
      l = e.aoData[f];
      l._aSortData || (l._aSortData = []);
      if (!l._aSortData[t] || r) {
        o = r ? i[f] : _fnGetCellData(e, f, t, "sort");
        l._aSortData[t] = s ? s(o) : o;
      }
    }
  }
  /**
   * Save the state of a table
   *  @param {object} oSettings dataTables settings object
   *  @memberof DataTable#oApi
   */ function _fnSaveState(t) {
    if (!t._bLoadingState) {
      var n = {
        time: +new Date(),
        start: t._iDisplayStart,
        length: t._iDisplayLength,
        order: e.extend(true, [], t.aaSorting),
        search: _fnSearchToCamel(t.oPreviousSearch),
        columns: e.map(t.aoColumns, function (e, n) {
          return {
            visible: e.bVisible,
            search: _fnSearchToCamel(t.aoPreSearchCols[n]),
          };
        }),
      };
      t.oSavedState = n;
      _fnCallbackFire(t, "aoStateSaveParams", "stateSaveParams", [t, n]);
      t.oFeatures.bStateSave &&
        !t.bDestroying &&
        t.fnStateSaveCallback.call(t.oInstance, t, n);
    }
  }
  /**
   * Attempt to load a saved table state
   *  @param {object} oSettings dataTables settings object
   *  @param {object} oInit DataTables init object so we can override settings
   *  @param {function} callback Callback to execute when the state has been loaded
   *  @memberof DataTable#oApi
   */ function _fnLoadState(e, t, n) {
    if (e.oFeatures.bStateSave) {
      var loaded = function (t) {
        _fnImplementState(e, t, n);
      };
      var r = e.fnStateLoadCallback.call(e.oInstance, e, loaded);
      r !== i && _fnImplementState(e, r, n);
      return true;
    }
    n();
  }
  function _fnImplementState(t, n, r) {
    var l, o;
    var s = t.aoColumns;
    t._bLoadingState = true;
    var f = t._bInitComplete ? new DataTable.Api(t) : null;
    if (n && n.time) {
      var u = _fnCallbackFire(t, "aoStateLoadParams", "stateLoadParams", [
        t,
        n,
      ]);
      if (-1 === e.inArray(false, u)) {
        var c = t.iStateDuration;
        if (c > 0 && n.time < +new Date() - 1e3 * c) {
          t._bLoadingState = false;
          r();
        } else if (n.columns && s.length !== n.columns.length) {
          t._bLoadingState = false;
          r();
        } else {
          t.oLoadedState = e.extend(true, {}, n);
          if (n.start !== i)
            if (null === f) {
              t._iDisplayStart = n.start;
              t.iInitDisplayStart = n.start;
            } else _fnPageChange(t, n.start / n.length);
          n.length !== i && (t._iDisplayLength = n.length);
          if (n.order !== i) {
            t.aaSorting = [];
            e.each(n.order, function (e, n) {
              t.aaSorting.push(n[0] >= s.length ? [0, n[1]] : n);
            });
          }
          n.search !== i &&
            e.extend(t.oPreviousSearch, _fnSearchToHung(n.search));
          if (n.columns) {
            for (l = 0, o = n.columns.length; l < o; l++) {
              var d = n.columns[l];
              d.visible !== i &&
                (f
                  ? f.column(l).visible(d.visible, false)
                  : (s[l].bVisible = d.visible));
              d.search !== i &&
                e.extend(t.aoPreSearchCols[l], _fnSearchToHung(d.search));
            }
            f && f.columns.adjust();
          }
          t._bLoadingState = false;
          _fnCallbackFire(t, "aoStateLoaded", "stateLoaded", [t, n]);
          r();
        }
      } else {
        t._bLoadingState = false;
        r();
      }
    } else {
      t._bLoadingState = false;
      r();
    }
  }
  /**
   * Return the settings object for a particular table
   *  @param {node} table table we are using as a dataTable
   *  @returns {object} Settings object - or null if not found
   *  @memberof DataTable#oApi
   */
  function _fnSettingsFromNode(t) {
    var n = DataTable.settings;
    var r = e.inArray(t, _pluck(n, "nTable"));
    return -1 !== r ? n[r] : null;
  }
  /**
   * Log an error message
   *  @param {object} settings dataTables settings object
   *  @param {int} level log error messages, or display them to the user
   *  @param {string} msg error message
   *  @param {int} tn Technical note id to get more information about the error.
   *  @memberof DataTable#oApi
   */ function _fnLog(e, n, r, i) {
    r =
      "DataTables warning: " + (e ? "table id=" + e.sTableId + " - " : "") + r;
    i &&
      (r +=
        ". For more information about this error, please see http://datatables.net/tn/" +
        i);
    if (n) t.console && console.log && console.log(r);
    else {
      var l = DataTable.ext;
      var o = l.sErrMode || l.errMode;
      e && _fnCallbackFire(e, null, "error", [e, i, r]);
      if ("alert" == o) alert(r);
      else {
        if ("throw" == o) throw new Error(r);
        "function" == typeof o && o(e, i, r);
      }
    }
  }
  /**
   * See if a property is defined on one object, if so assign it to the other object
   *  @param {object} ret target object
   *  @param {object} src source object
   *  @param {string} name property
   *  @param {string} [mappedName] name to map too - optional, name used if not given
   *  @memberof DataTable#oApi
   */ function _fnMap(t, n, r, l) {
    if (Array.isArray(r))
      e.each(r, function (e, r) {
        Array.isArray(r) ? _fnMap(t, n, r[0], r[1]) : _fnMap(t, n, r);
      });
    else {
      l === i && (l = r);
      n[r] !== i && (t[l] = n[r]);
    }
  }
  /**
   * Extend objects - very similar to jQuery.extend, but deep copy objects, and
   * shallow copy arrays. The reason we need to do this, is that we don't want to
   * deep copy array init values (such as aaSorting) since the dev wouldn't be
   * able to override them, but we do want to deep copy arrays.
   *  @param {object} out Object to extend
   *  @param {object} extender Object from which the properties will be applied to
   *      out
   *  @param {boolean} breakRefs If true, then arrays will be sliced to take an
   *      independent copy with the exception of the `data` or `aaData` parameters
   *      if they are present. This is so you can pass in a collection to
   *      DataTables and have that used as your data source without breaking the
   *      references
   *  @returns {object} out Reference, just for convenience - out === the return.
   *  @memberof DataTable#oApi
   *  @todo This doesn't take account of arrays inside the deep copied objects.
   */ function _fnExtend(t, n, r) {
    var i;
    for (var l in n)
      if (n.hasOwnProperty(l)) {
        i = n[l];
        if (e.isPlainObject(i)) {
          e.isPlainObject(t[l]) || (t[l] = {});
          e.extend(true, t[l], i);
        } else
          r && "data" !== l && "aaData" !== l && Array.isArray(i)
            ? (t[l] = i.slice())
            : (t[l] = i);
      }
    return t;
  }
  /**
   * Bind an event handers to allow a click or return key to activate the callback.
   * This is good for accessibility since a return on the keyboard will have the
   * same effect as a click, if the element has focus.
   *  @param {element} n Element to bind the action to
   *  @param {object} oData Data object to pass to the triggered function
   *  @param {function} fn Callback function for when the event is triggered
   *  @memberof DataTable#oApi
   */ function _fnBindAction(t, n, r) {
    e(t)
      .on("click.DT", n, function (n) {
        e(t).trigger("blur");
        r(n);
      })
      .on("keypress.DT", n, function (e) {
        if (13 === e.which) {
          e.preventDefault();
          r(e);
        }
      })
      .on("selectstart.DT", function () {
        return false;
      });
  }
  /**
   * Register a callback function. Easily allows a callback function to be added to
   * an array store of callback functions that can then all be called together.
   *  @param {object} oSettings dataTables settings object
   *  @param {string} sStore Name of the array storage for the callbacks in oSettings
   *  @param {function} fn Function to be called back
   *  @param {string} sName Identifying name for the callback (i.e. a label)
   *  @memberof DataTable#oApi
   */ function _fnCallbackReg(e, t, n, r) {
    n && e[t].push({ fn: n, sName: r });
  }
  /**
   * Fire callback functions and trigger events. Note that the loop over the
   * callback array store is done backwards! Further note that you do not want to
   * fire off triggers in time sensitive applications (for example cell creation)
   * as its slow.
   *  @param {object} settings dataTables settings object
   *  @param {string} callbackArr Name of the array storage for the callbacks in
   *      oSettings
   *  @param {string} eventName Name of the jQuery custom event to trigger. If
   *      null no trigger is fired
   *  @param {array} args Array of arguments to pass to the callback function /
   *      trigger
   *  @memberof DataTable#oApi
   */ function _fnCallbackFire(t, n, r, i) {
    var l = [];
    n &&
      (l = e.map(t[n].slice().reverse(), function (e, n) {
        return e.fn.apply(t.oInstance, i);
      }));
    if (null !== r) {
      var o = e.Event(r + ".dt");
      e(t.nTable).trigger(o, i);
      l.push(o.result);
    }
    return l;
  }
  function _fnLengthOverflow(e) {
    var t = e._iDisplayStart,
      n = e.fnDisplayEnd(),
      r = e._iDisplayLength;
    t >= n && (t = n - r);
    t -= t % r;
    (-1 === r || t < 0) && (t = 0);
    e._iDisplayStart = t;
  }
  function _fnRenderer(t, n) {
    var r = t.renderer;
    var i = DataTable.ext.renderer[n];
    return e.isPlainObject(r) && r[n]
      ? i[r[n]] || i._
      : ("string" === typeof r && i[r]) || i._;
  }
  /**
   * Detect the data source being used for the table. Used to simplify the code
   * a little (ajax) and to make it compress a little smaller.
   *
   *  @param {object} settings dataTables settings object
   *  @returns {string} Data source
   *  @memberof DataTable#oApi
   */ function _fnDataSource(e) {
    return e.oFeatures.bServerSide
      ? "ssp"
      : e.ajax || e.sAjaxSource
      ? "ajax"
      : "dom";
  }
  /**
   * Computed structure of the DataTables API, defined by the options passed to
   * `DataTable.Api.register()` when building the API.
   *
   * The structure is built in order to speed creation and extension of the Api
   * objects since the extensions are effectively pre-parsed.
   *
   * The array is an array of objects with the following structure, where this
   * base array represents the Api prototype base:
   *
   *     [
   *       {
   *         name:      'data'                -- string   - Property name
   *         val:       function () {},       -- function - Api method (or undefined if just an object
   *         methodExt: [ ... ],              -- array    - Array of Api object definitions to extend the method result
   *         propExt:   [ ... ]               -- array    - Array of Api object definitions to extend the property
   *       },
   *       {
   *         name:     'row'
   *         val:       {},
   *         methodExt: [ ... ],
   *         propExt:   [
   *           {
   *             name:      'data'
   *             val:       function () {},
   *             methodExt: [ ... ],
   *             propExt:   [ ... ]
   *           },
   *           ...
   *         ]
   *       }
   *     ]
   *
   * @type {Array}
   * @ignore
   */ var w = [];
  /**
   * `Array.prototype` reference.
   *
   * @type object
   * @ignore
   */ var x = Array.prototype;
  /**
   * Abstraction for `context` parameter of the `Api` constructor to allow it to
   * take several different forms for ease of use.
   *
   * Each of the input parameter types will be converted to a DataTables settings
   * object where possible.
   *
   * @param  {string|node|jQuery|object} mixed DataTable identifier. Can be one
   *   of:
   *
   *   * `string` - jQuery selector. Any DataTables' matching the given selector
   *     with be found and used.
   *   * `node` - `TABLE` node which has already been formed into a DataTable.
   *   * `jQuery` - A jQuery object of `TABLE` nodes.
   *   * `object` - DataTables settings object
   *   * `DataTables.Api` - API instance
   * @return {array|null} Matching DataTables settings objects. `null` or
   *   `undefined` is returned if no matching DataTable is found.
   * @ignore
   */ var _toSettings = function (t) {
    var r, i;
    var l = DataTable.settings;
    var o = e.map(l, function (e, t) {
      return e.nTable;
    });
    if (!t) return [];
    if (t.nTable && t.oApi) return [t];
    if (t.nodeName && "table" === t.nodeName.toLowerCase()) {
      r = e.inArray(t, o);
      return -1 !== r ? [l[r]] : null;
    }
    if (t && "function" === typeof t.settings) return t.settings().toArray();
    "string" === typeof t ? (i = e(t)) : t instanceof e && (i = t);
    return i
      ? i
          .map(function (t) {
            r = e.inArray(this || n, o);
            return -1 !== r ? l[r] : null;
          })
          .toArray()
      : void 0;
  };
  /**
   * DataTables API class - used to control and interface with  one or more
   * DataTables enhanced tables.
   *
   * The API class is heavily based on jQuery, presenting a chainable interface
   * that you can use to interact with tables. Each instance of the API class has
   * a "context" - i.e. the tables that it will operate on. This could be a single
   * table, all tables on a page or a sub-set thereof.
   *
   * Additionally the API is designed to allow you to easily work with the data in
   * the tables, retrieving and manipulating it as required. This is done by
   * presenting the API class as an array like interface. The contents of the
   * array depend upon the actions requested by each method (for example
   * `rows().nodes()` will return an array of nodes, while `rows().data()` will
   * return an array of objects or arrays depending upon your table's
   * configuration). The API object has a number of array like methods (`push`,
   * `pop`, `reverse` etc) as well as additional helper methods (`each`, `pluck`,
   * `unique` etc) to assist your working with the data held in a table.
   *
   * Most methods (those which return an Api instance) are chainable, which means
   * the return from a method call also has all of the methods available that the
   * top level object had. For example, these two calls are equivalent:
   *
   *     // Not chained
   *     api.row.add( {...} );
   *     api.draw();
   *
   *     // Chained
   *     api.row.add( {...} ).draw();
   *
   * @class DataTable.Api
   * @param {array|object|string|jQuery} context DataTable identifier. This is
   *   used to define which DataTables enhanced tables this API will operate on.
   *   Can be one of:
   *
   *   * `string` - jQuery selector. Any DataTables' matching the given selector
   *     with be found and used.
   *   * `node` - `TABLE` node which has already been formed into a DataTable.
   *   * `jQuery` - A jQuery object of `TABLE` nodes.
   *   * `object` - DataTables settings object
   * @param {array} [data] Data to initialise the Api instance with.
   *
   * @example
   *   // Direct initialisation during DataTables construction
   *   var api = $('#example').DataTable();
   *
   * @example
   *   // Initialisation using a DataTables jQuery object
   *   var api = $('#example').dataTable().api();
   *
   * @example
   *   // Initialisation as a constructor
   *   var api = new $.fn.DataTable.Api( 'table.dataTable' );
   */ o = function (t, r) {
    if (!((this || n) instanceof o)) return new o(t, r);
    var i = [];
    var ctxSettings = function (e) {
      var t = _toSettings(e);
      t && i.push.apply(i, t);
    };
    if (Array.isArray(t))
      for (var l = 0, s = t.length; l < s; l++) ctxSettings(t[l]);
    else ctxSettings(t);
    (this || n).context = _unique(i);
    r && e.merge(this || n, r);
    (this || n).selector = { rows: null, cols: null, opts: null };
    o.extend(this || n, this || n, w);
  };
  DataTable.Api = o;
  e.extend(o.prototype, {
    any: function () {
      return 0 !== this.count();
    },
    concat: x.concat,
    context: [],
    count: function () {
      return this.flatten().length;
    },
    each: function (e) {
      for (var t = 0, r = (this || n).length; t < r; t++)
        e.call(this || n, (this || n)[t], t, this || n);
      return this || n;
    },
    eq: function (e) {
      var t = (this || n).context;
      return t.length > e ? new o(t[e], (this || n)[e]) : null;
    },
    filter: function (e) {
      var t = [];
      if (x.filter) t = x.filter.call(this || n, e, this || n);
      else
        for (var r = 0, i = (this || n).length; r < i; r++)
          e.call(this || n, (this || n)[r], r, this || n) &&
            t.push((this || n)[r]);
      return new o((this || n).context, t);
    },
    flatten: function () {
      var e = [];
      return new o((this || n).context, e.concat.apply(e, this.toArray()));
    },
    join: x.join,
    indexOf:
      x.indexOf ||
      function (e, t) {
        for (var r = t || 0, i = (this || n).length; r < i; r++)
          if ((this || n)[r] === e) return r;
        return -1;
      },
    iterator: function (e, t, r, l) {
      var s,
        f,
        u,
        c,
        d,
        h,
        p,
        v,
        _ = [],
        g = (this || n).context,
        b = (this || n).selector;
      if ("string" === typeof e) {
        l = r;
        r = t;
        t = e;
        e = false;
      }
      for (f = 0, u = g.length; f < u; f++) {
        var m = new o(g[f]);
        if ("table" === t) {
          s = r.call(m, g[f], f);
          s !== i && _.push(s);
        } else if ("columns" === t || "rows" === t) {
          s = r.call(m, g[f], (this || n)[f], f);
          s !== i && _.push(s);
        } else if (
          "column" === t ||
          "column-rows" === t ||
          "row" === t ||
          "cell" === t
        ) {
          p = (this || n)[f];
          "column-rows" === t && (h = _selector_row_indexes(g[f], b.opts));
          for (c = 0, d = p.length; c < d; c++) {
            v = p[c];
            s =
              "cell" === t
                ? r.call(m, g[f], v.row, v.column, f, c)
                : r.call(m, g[f], v, f, c, h);
            s !== i && _.push(s);
          }
        }
      }
      if (_.length || l) {
        var S = new o(g, e ? _.concat.apply([], _) : _);
        var D = S.selector;
        D.rows = b.rows;
        D.cols = b.cols;
        D.opts = b.opts;
        return S;
      }
      return this || n;
    },
    lastIndexOf:
      x.lastIndexOf ||
      function (e, t) {
        return (this || n).indexOf.apply(
          (this || n).toArray.reverse(),
          arguments
        );
      },
    length: 0,
    map: function (e) {
      var t = [];
      if (x.map) t = x.map.call(this || n, e, this || n);
      else
        for (var r = 0, i = (this || n).length; r < i; r++)
          t.push(e.call(this || n, (this || n)[r], r));
      return new o((this || n).context, t);
    },
    pluck: function (e) {
      return this.map(function (t) {
        return t[e];
      });
    },
    pop: x.pop,
    push: x.push,
    reduce:
      x.reduce ||
      function (e, t) {
        return _fnReduce(this || n, e, t, 0, (this || n).length, 1);
      },
    reduceRight:
      x.reduceRight ||
      function (e, t) {
        return _fnReduce(this || n, e, t, (this || n).length - 1, -1, -1);
      },
    reverse: x.reverse,
    selector: null,
    shift: x.shift,
    slice: function () {
      return new o((this || n).context, this || n);
    },
    sort: x.sort,
    splice: x.splice,
    toArray: function () {
      return x.slice.call(this || n);
    },
    to$: function () {
      return e(this || n);
    },
    toJQuery: function () {
      return e(this || n);
    },
    unique: function () {
      return new o((this || n).context, _unique(this || n));
    },
    unshift: x.unshift,
  });
  o.extend = function (e, t, n) {
    if (n.length && t && (t instanceof o || t.__dt_wrapper)) {
      var r,
        i,
        l,
        methodScoping = function (e, t, n) {
          return function () {
            var r = t.apply(e, arguments);
            o.extend(r, r, n.methodExt);
            return r;
          };
        };
      for (r = 0, i = n.length; r < i; r++) {
        l = n[r];
        t[l.name] =
          "function" === l.type
            ? methodScoping(e, l.val, l)
            : "object" === l.type
            ? {}
            : l.val;
        t[l.name].__dt_wrapper = true;
        o.extend(e, t[l.name], l.propExt);
      }
    }
  };
  o.register = s = function (t, n) {
    if (Array.isArray(t))
      for (var r = 0, i = t.length; r < i; r++) o.register(t[r], n);
    else {
      var l,
        s,
        f,
        u,
        c = t.split("."),
        d = w;
      var find = function (e, t) {
        for (var n = 0, r = e.length; n < r; n++)
          if (e[n].name === t) return e[n];
        return null;
      };
      for (l = 0, s = c.length; l < s; l++) {
        u = -1 !== c[l].indexOf("()");
        f = u ? c[l].replace("()", "") : c[l];
        var h = find(d, f);
        if (!h) {
          h = { name: f, val: {}, methodExt: [], propExt: [], type: "object" };
          d.push(h);
        }
        if (l === s - 1) {
          h.val = n;
          h.type =
            "function" === typeof n
              ? "function"
              : e.isPlainObject(n)
              ? "object"
              : "other";
        } else d = u ? h.methodExt : h.propExt;
      }
    }
  };
  o.registerPlural = f = function (e, t, r) {
    o.register(e, r);
    o.register(t, function () {
      var e = r.apply(this || n, arguments);
      return e === (this || n)
        ? this || n
        : e instanceof o
        ? e.length
          ? Array.isArray(e[0])
            ? new o(e.context, e[0])
            : e[0]
          : i
        : e;
    });
  };
  /**
   * Selector for HTML tables. Apply the given selector to the give array of
   * DataTables settings objects.
   *
   * @param {string|integer} [selector] jQuery selector string or integer
   * @param  {array} Array of DataTables settings objects to be filtered
   * @return {array}
   * @ignore
   */ var __table_selector = function (t, r) {
    if (Array.isArray(t))
      return e.map(t, function (e) {
        return __table_selector(e, r);
      });
    if ("number" === typeof t) return [r[t]];
    var i = e.map(r, function (e, t) {
      return e.nTable;
    });
    return e(i)
      .filter(t)
      .map(function (t) {
        var l = e.inArray(this || n, i);
        return r[l];
      })
      .toArray();
  };
  /**
   * Context selector for the API's context (i.e. the tables the API instance
   * refers to.
   *
   * @name    DataTable.Api#tables
   * @param {string|integer} [selector] Selector to pick which tables the iterator
   *   should operate on. If not given, all tables in the current context are
   *   used. This can be given as a jQuery selector (for example `':gt(0)'`) to
   *   select multiple tables or as an integer to select a single table.
   * @returns {DataTable.Api} Returns a new API instance if a selector is given.
   */ s("tables()", function (e) {
    return e !== i && null !== e
      ? new o(__table_selector(e, (this || n).context))
      : this || n;
  });
  s("table()", function (e) {
    var t = this.tables(e);
    var n = t.context;
    return n.length ? new o(n[0]) : t;
  });
  f("tables().nodes()", "table().node()", function () {
    return this.iterator(
      "table",
      function (e) {
        return e.nTable;
      },
      1
    );
  });
  f("tables().body()", "table().body()", function () {
    return this.iterator(
      "table",
      function (e) {
        return e.nTBody;
      },
      1
    );
  });
  f("tables().header()", "table().header()", function () {
    return this.iterator(
      "table",
      function (e) {
        return e.nTHead;
      },
      1
    );
  });
  f("tables().footer()", "table().footer()", function () {
    return this.iterator(
      "table",
      function (e) {
        return e.nTFoot;
      },
      1
    );
  });
  f("tables().containers()", "table().container()", function () {
    return this.iterator(
      "table",
      function (e) {
        return e.nTableWrapper;
      },
      1
    );
  });
  s("draw()", function (e) {
    return this.iterator("table", function (t) {
      if ("page" === e) _fnDraw(t);
      else {
        "string" === typeof e && (e = "full-hold" !== e);
        _fnReDraw(t, false === e);
      }
    });
  });
  /**
   * Set the current page.
   *
   * Note that if you attempt to show a page which does not exist, DataTables will
   * not throw an error, but rather reset the paging.
   *
   * @param {integer|string} action The paging action to take. This can be one of:
   *  * `integer` - The page index to jump to
   *  * `string` - An action to take:
   *    * `first` - Jump to first page.
   *    * `next` - Jump to the next page
   *    * `previous` - Jump to previous page
   *    * `last` - Jump to the last page.
   * @returns {DataTables.Api} this
   */ s("page()", function (e) {
    return e === i
      ? (this || n).page.info().page
      : this.iterator("table", function (t) {
          _fnPageChange(t, e);
        });
  });
  s("page.info()", function (e) {
    if (0 === (this || n).context.length) return i;
    var t = (this || n).context[0],
      r = t._iDisplayStart,
      l = t.oFeatures.bPaginate ? t._iDisplayLength : -1,
      o = t.fnRecordsDisplay(),
      s = -1 === l;
    return {
      page: s ? 0 : Math.floor(r / l),
      pages: s ? 1 : Math.ceil(o / l),
      start: r,
      end: t.fnDisplayEnd(),
      length: l,
      recordsTotal: t.fnRecordsTotal(),
      recordsDisplay: o,
      serverSide: "ssp" === _fnDataSource(t),
    };
  });
  /**
   * Set the current page length.
   *
   * @param {integer} Page length to set. Use `-1` to show all records.
   * @returns {DataTables.Api} this
   */ s("page.len()", function (e) {
    return e === i
      ? 0 !== (this || n).context.length
        ? (this || n).context[0]._iDisplayLength
        : i
      : this.iterator("table", function (t) {
          _fnLengthChange(t, e);
        });
  });
  var __reload = function (e, t, n) {
    if (n) {
      var r = new o(e);
      r.one("draw", function () {
        n(r.ajax.json());
      });
    }
    if ("ssp" == _fnDataSource(e)) _fnReDraw(e, t);
    else {
      _fnProcessingDisplay(e, true);
      var i = e.jqXHR;
      i && 4 !== i.readyState && i.abort();
      _fnBuildAjax(e, [], function (n) {
        _fnClearTable(e);
        var r = _fnAjaxDataSrc(e, n);
        for (var i = 0, l = r.length; i < l; i++) _fnAddData(e, r[i]);
        _fnReDraw(e, t);
        _fnProcessingDisplay(e, false);
      });
    }
  };
  s("ajax.json()", function () {
    var e = (this || n).context;
    if (e.length > 0) return e[0].json;
  });
  s("ajax.params()", function () {
    var e = (this || n).context;
    if (e.length > 0) return e[0].oAjaxData;
  });
  /**
   * Reload tables from the Ajax data source. Note that this function will
   * automatically re-draw the table when the remote data has been loaded.
   *
   * @param {boolean} [reset=true] Reset (default) or hold the current paging
   *   position. A full re-sort and re-filter is performed when this method is
   *   called, which is why the pagination reset is the default action.
   * @returns {DataTables.Api} this
   */ s("ajax.reload()", function (e, t) {
    return this.iterator("table", function (n) {
      __reload(n, false === t, e);
    });
  });
  /**
   * Set the Ajax URL. Note that this will set the URL for all tables in the
   * current context.
   *
   * @param {string} url URL to set.
   * @returns {DataTables.Api} this
   */ s("ajax.url()", function (t) {
    var r = (this || n).context;
    if (t === i) {
      if (0 === r.length) return i;
      r = r[0];
      return r.ajax
        ? e.isPlainObject(r.ajax)
          ? r.ajax.url
          : r.ajax
        : r.sAjaxSource;
    }
    return this.iterator("table", function (n) {
      e.isPlainObject(n.ajax) ? (n.ajax.url = t) : (n.ajax = t);
    });
  });
  /**
   * Load data from the newly set Ajax URL. Note that this method is only
   * available when `ajax.url()` is used to set a URL. Additionally, this method
   * has the same effect as calling `ajax.reload()` but is provided for
   * convenience when setting a new URL. Like `ajax.reload()` it will
   * automatically redraw the table once the remote data has been loaded.
   *
   * @returns {DataTables.Api} this
   */ s("ajax.url().load()", function (e, t) {
    return this.iterator("table", function (n) {
      __reload(n, false === t, e);
    });
  });
  var _selector_run = function (e, t, n, r, o) {
    var s,
      f,
      u,
      c,
      d,
      h,
      p = [],
      v = typeof t;
    (t && "string" !== v && "function" !== v && t.length !== i) || (t = [t]);
    for (u = 0, c = t.length; u < c; u++) {
      f =
        t[u] && t[u].split && !t[u].match(/[\[\(:]/) ? t[u].split(",") : [t[u]];
      for (d = 0, h = f.length; d < h; d++) {
        s = n("string" === typeof f[d] ? f[d].trim() : f[d]);
        s && s.length && (p = p.concat(s));
      }
    }
    var _ = l.selector[e];
    if (_.length) for (u = 0, c = _.length; u < c; u++) p = _[u](r, o, p);
    return _unique(p);
  };
  var _selector_opts = function (t) {
    t || (t = {});
    t.filter && t.search === i && (t.search = t.filter);
    return e.extend({ search: "none", order: "current", page: "all" }, t);
  };
  var _selector_first = function (e) {
    for (var t = 0, n = e.length; t < n; t++)
      if (e[t].length > 0) {
        e[0] = e[t];
        e[0].length = 1;
        e.length = 1;
        e.context = [e.context[t]];
        return e;
      }
    e.length = 0;
    return e;
  };
  var _selector_row_indexes = function (t, n) {
    var r,
      i = [],
      l = t.aiDisplay,
      o = t.aiDisplayMaster;
    var s = n.search,
      f = n.order,
      u = n.page;
    if ("ssp" == _fnDataSource(t))
      return "removed" === s ? [] : _range(0, o.length);
    if ("current" == u)
      for (d = t._iDisplayStart, h = t.fnDisplayEnd(); d < h; d++) i.push(l[d]);
    else if ("current" == f || "applied" == f) {
      if ("none" == s) i = o.slice();
      else if ("applied" == s) i = l.slice();
      else if ("removed" == s) {
        var c = {};
        for (var d = 0, h = l.length; d < h; d++) c[l[d]] = null;
        i = e.map(o, function (e) {
          return c.hasOwnProperty(e) ? null : e;
        });
      }
    } else if ("index" == f || "original" == f)
      for (d = 0, h = t.aoData.length; d < h; d++)
        if ("none" == s) i.push(d);
        else {
          r = e.inArray(d, l);
          ((-1 === r && "removed" == s) || (r >= 0 && "applied" == s)) &&
            i.push(d);
        }
    return i;
  };
  var __row_selector = function (t, r, l) {
    var o;
    var run = function (r) {
      var s = _intVal(r);
      var f = t.aoData;
      if (null !== s && !l) return [s];
      o || (o = _selector_row_indexes(t, l));
      if (null !== s && -1 !== e.inArray(s, o)) return [s];
      if (null === r || r === i || "" === r) return o;
      if ("function" === typeof r)
        return e.map(o, function (e) {
          var t = f[e];
          return r(e, t._aData, t.nTr) ? e : null;
        });
      if (r.nodeName) {
        var u = r._DT_RowIndex;
        var c = r._DT_CellIndex;
        if (u !== i) return f[u] && f[u].nTr === r ? [u] : [];
        if (c) return f[c.row] && f[c.row].nTr === r.parentNode ? [c.row] : [];
        var d = e(r).closest("*[data-dt-row]");
        return d.length ? [d.data("dt-row")] : [];
      }
      if ("string" === typeof r && "#" === r.charAt(0)) {
        var h = t.aIds[r.replace(/^#/, "")];
        if (h !== i) return [h.idx];
      }
      var p = _removeEmpty(_pluck_order(t.aoData, o, "nTr"));
      return e(p)
        .filter(r)
        .map(function () {
          return (this || n)._DT_RowIndex;
        })
        .toArray();
    };
    return _selector_run("row", r, run, t, l);
  };
  s("rows()", function (t, n) {
    if (t === i) t = "";
    else if (e.isPlainObject(t)) {
      n = t;
      t = "";
    }
    n = _selector_opts(n);
    var r = this.iterator(
      "table",
      function (e) {
        return __row_selector(e, t, n);
      },
      1
    );
    r.selector.rows = t;
    r.selector.opts = n;
    return r;
  });
  s("rows().nodes()", function () {
    return this.iterator(
      "row",
      function (e, t) {
        return e.aoData[t].nTr || i;
      },
      1
    );
  });
  s("rows().data()", function () {
    return this.iterator(
      true,
      "rows",
      function (e, t) {
        return _pluck_order(e.aoData, t, "_aData");
      },
      1
    );
  });
  f("rows().cache()", "row().cache()", function (e) {
    return this.iterator(
      "row",
      function (t, n) {
        var r = t.aoData[n];
        return "search" === e ? r._aFilterData : r._aSortData;
      },
      1
    );
  });
  f("rows().invalidate()", "row().invalidate()", function (e) {
    return this.iterator("row", function (t, n) {
      _fnInvalidate(t, n, e);
    });
  });
  f("rows().indexes()", "row().index()", function () {
    return this.iterator(
      "row",
      function (e, t) {
        return t;
      },
      1
    );
  });
  f("rows().ids()", "row().id()", function (e) {
    var t = [];
    var r = (this || n).context;
    for (var i = 0, l = r.length; i < l; i++)
      for (var s = 0, f = (this || n)[i].length; s < f; s++) {
        var u = r[i].rowIdFn(r[i].aoData[(this || n)[i][s]]._aData);
        t.push((true === e ? "#" : "") + u);
      }
    return new o(r, t);
  });
  f("rows().remove()", "row().remove()", function () {
    var e = this || n;
    this.iterator("row", function (t, n, r) {
      var l = t.aoData;
      var o = l[n];
      var s, f, u, c;
      var d, h;
      l.splice(n, 1);
      for (s = 0, f = l.length; s < f; s++) {
        d = l[s];
        h = d.anCells;
        null !== d.nTr && (d.nTr._DT_RowIndex = s);
        if (null !== h)
          for (u = 0, c = h.length; u < c; u++) h[u]._DT_CellIndex.row = s;
      }
      _fnDeleteIndex(t.aiDisplayMaster, n);
      _fnDeleteIndex(t.aiDisplay, n);
      _fnDeleteIndex(e[r], n, false);
      t._iRecordsDisplay > 0 && t._iRecordsDisplay--;
      _fnLengthOverflow(t);
      var p = t.rowIdFn(o._aData);
      p !== i && delete t.aIds[p];
    });
    this.iterator("table", function (e) {
      for (var t = 0, n = e.aoData.length; t < n; t++) e.aoData[t].idx = t;
    });
    return this || n;
  });
  s("rows.add()", function (t) {
    var n = this.iterator(
      "table",
      function (e) {
        var n, r, i;
        var l = [];
        for (r = 0, i = t.length; r < i; r++) {
          n = t[r];
          n.nodeName && "TR" === n.nodeName.toUpperCase()
            ? l.push(_fnAddTr(e, n)[0])
            : l.push(_fnAddData(e, n));
        }
        return l;
      },
      1
    );
    var r = this.rows(-1);
    r.pop();
    e.merge(r, n);
    return r;
  });
  s("row()", function (e, t) {
    return _selector_first(this.rows(e, t));
  });
  s("row().data()", function (e) {
    var t = (this || n).context;
    if (e === i)
      return t.length && (this || n).length
        ? t[0].aoData[(this || n)[0]]._aData
        : i;
    var r = t[0].aoData[(this || n)[0]];
    r._aData = e;
    Array.isArray(e) && r.nTr && r.nTr.id && m(t[0].rowId)(e, r.nTr.id);
    _fnInvalidate(t[0], (this || n)[0], "data");
    return this || n;
  });
  s("row().node()", function () {
    var e = (this || n).context;
    return (
      (e.length && (this || n).length && e[0].aoData[(this || n)[0]].nTr) ||
      null
    );
  });
  s("row.add()", function (t) {
    t instanceof e && t.length && (t = t[0]);
    var n = this.iterator("table", function (e) {
      return t.nodeName && "TR" === t.nodeName.toUpperCase()
        ? _fnAddTr(e, t)[0]
        : _fnAddData(e, t);
    });
    return this.row(n[0]);
  });
  e(r).on("plugin-init.dt", function (e, t) {
    var r = new o(t);
    r.on("stateSaveParams", function (e, t, n) {
      var l = r.rows().iterator("row", function (e, t) {
        return e.aoData[t]._detailsShow ? t : i;
      });
      n.childRows = r.rows(l).ids(true).toArray();
    });
    var l = r.state.loaded();
    l &&
      l.childRows &&
      r.rows(l.childRows).every(function () {
        _fnCallbackFire(t, null, "requestChild", [this || n]);
      });
  });
  var __details_add = function (t, n, r, i) {
    var l = [];
    var addRow = function (n, r) {
      if (Array.isArray(n) || n instanceof e)
        for (var i = 0, o = n.length; i < o; i++) addRow(n[i], r);
      else if (n.nodeName && "tr" === n.nodeName.toLowerCase()) l.push(n);
      else {
        var s = e("<tr><td></td></tr>").addClass(r);
        e("td", s).addClass(r).html(n)[0].colSpan = _fnVisbleColumns(t);
        l.push(s[0]);
      }
    };
    addRow(r, i);
    n._details && n._details.detach();
    n._details = e(l);
    n._detailsShow && n._details.insertAfter(n.nTr);
  };
  var __details_remove = function (t, n) {
    var r = t.context;
    if (r.length) {
      var l = r[0].aoData[n !== i ? n : t[0]];
      if (l && l._details) {
        l._details.remove();
        l._detailsShow = i;
        l._details = i;
        e(l.nTr).removeClass("dt-hasChild");
        _fnSaveState(r[0]);
      }
    }
  };
  var __details_display = function (t, n) {
    var r = t.context;
    if (r.length && t.length) {
      var i = r[0].aoData[t[0]];
      if (i._details) {
        i._detailsShow = n;
        if (n) {
          i._details.insertAfter(i.nTr);
          e(i.nTr).addClass("dt-hasChild");
        } else {
          i._details.detach();
          e(i.nTr).removeClass("dt-hasChild");
        }
        _fnCallbackFire(r[0], null, "childRow", [n, t.row(t[0])]);
        __details_events(r[0]);
        _fnSaveState(r[0]);
      }
    }
  };
  var __details_events = function (e) {
    var t = new o(e);
    var n = ".dt.DT_details";
    var r = "draw" + n;
    var i = "column-visibility" + n;
    var l = "destroy" + n;
    var s = e.aoData;
    t.off(r + " " + i + " " + l);
    if (_pluck(s, "_details").length > 0) {
      t.on(r, function (n, r) {
        e === r &&
          t
            .rows({ page: "current" })
            .eq(0)
            .each(function (e) {
              var t = s[e];
              t._detailsShow && t._details.insertAfter(t.nTr);
            });
      });
      t.on(i, function (t, n, r, i) {
        if (e === n) {
          var l,
            o = _fnVisbleColumns(n);
          for (var f = 0, u = s.length; f < u; f++) {
            l = s[f];
            l._details && l._details.children("td[colspan]").attr("colspan", o);
          }
        }
      });
      t.on(l, function (n, r) {
        if (e === r)
          for (var i = 0, l = s.length; i < l; i++)
            s[i]._details && __details_remove(t, i);
      });
    }
  };
  var A = "";
  var F = A + "row().child";
  var I = F + "()";
  s(I, function (e, t) {
    var r = (this || n).context;
    if (e === i)
      return r.length && (this || n).length
        ? r[0].aoData[(this || n)[0]]._details
        : i;
    true === e
      ? (this || n).child.show()
      : false === e
      ? __details_remove(this || n)
      : r.length &&
        (this || n).length &&
        __details_add(r[0], r[0].aoData[(this || n)[0]], e, t);
    return this || n;
  });
  s([F + ".show()", I + ".show()"], function (e) {
    __details_display(this || n, true);
    return this || n;
  });
  s([F + ".hide()", I + ".hide()"], function () {
    __details_display(this || n, false);
    return this || n;
  });
  s([F + ".remove()", I + ".remove()"], function () {
    __details_remove(this || n);
    return this || n;
  });
  s(F + ".isShown()", function () {
    var e = (this || n).context;
    return (
      (e.length &&
        (this || n).length &&
        e[0].aoData[(this || n)[0]]._detailsShow) ||
      false
    );
  });
  var L = /^([^:]+):(name|visIdx|visible)$/;
  var __columnData = function (e, t, n, r, i) {
    var l = [];
    for (var o = 0, s = i.length; o < s; o++)
      l.push(_fnGetCellData(e, i[o], t));
    return l;
  };
  var __column_selector = function (t, r, i) {
    var l = t.aoColumns,
      o = _pluck(l, "sName"),
      s = _pluck(l, "nTh");
    var run = function (r) {
      var f = _intVal(r);
      if ("" === r) return _range(l.length);
      if (null !== f) return [f >= 0 ? f : l.length + f];
      if ("function" === typeof r) {
        var u = _selector_row_indexes(t, i);
        return e.map(l, function (e, n) {
          return r(n, __columnData(t, n, 0, 0, u), s[n]) ? n : null;
        });
      }
      var c = "string" === typeof r ? r.match(L) : "";
      if (c)
        switch (c[2]) {
          case "visIdx":
          case "visible":
            var d = parseInt(c[1], 10);
            if (d < 0) {
              var h = e.map(l, function (e, t) {
                return e.bVisible ? t : null;
              });
              return [h[h.length + d]];
            }
            return [_fnVisibleToColumnIndex(t, d)];
          case "name":
            return e.map(o, function (e, t) {
              return e === c[1] ? t : null;
            });
          default:
            return [];
        }
      if (r.nodeName && r._DT_CellIndex) return [r._DT_CellIndex.column];
      var p = e(s)
        .filter(r)
        .map(function () {
          return e.inArray(this || n, s);
        })
        .toArray();
      if (p.length || !r.nodeName) return p;
      var v = e(r).closest("*[data-dt-column]");
      return v.length ? [v.data("dt-column")] : [];
    };
    return _selector_run("column", r, run, t, i);
  };
  var __setColumnVis = function (t, n, r) {
    var l,
      o,
      s,
      f,
      u = t.aoColumns,
      c = u[n],
      d = t.aoData;
    if (r === i) return c.bVisible;
    if (c.bVisible !== r) {
      if (r) {
        var h = e.inArray(true, _pluck(u, "bVisible"), n + 1);
        for (o = 0, s = d.length; o < s; o++) {
          f = d[o].nTr;
          l = d[o].anCells;
          f && f.insertBefore(l[n], l[h] || null);
        }
      } else e(_pluck(t.aoData, "anCells", n)).detach();
      c.bVisible = r;
    }
  };
  s("columns()", function (t, n) {
    if (t === i) t = "";
    else if (e.isPlainObject(t)) {
      n = t;
      t = "";
    }
    n = _selector_opts(n);
    var r = this.iterator(
      "table",
      function (e) {
        return __column_selector(e, t, n);
      },
      1
    );
    r.selector.cols = t;
    r.selector.opts = n;
    return r;
  });
  f("columns().header()", "column().header()", function (e, t) {
    return this.iterator(
      "column",
      function (e, t) {
        return e.aoColumns[t].nTh;
      },
      1
    );
  });
  f("columns().footer()", "column().footer()", function (e, t) {
    return this.iterator(
      "column",
      function (e, t) {
        return e.aoColumns[t].nTf;
      },
      1
    );
  });
  f("columns().data()", "column().data()", function () {
    return this.iterator("column-rows", __columnData, 1);
  });
  f("columns().dataSrc()", "column().dataSrc()", function () {
    return this.iterator(
      "column",
      function (e, t) {
        return e.aoColumns[t].mData;
      },
      1
    );
  });
  f("columns().cache()", "column().cache()", function (e) {
    return this.iterator(
      "column-rows",
      function (t, n, r, i, l) {
        return _pluck_order(
          t.aoData,
          l,
          "search" === e ? "_aFilterData" : "_aSortData",
          n
        );
      },
      1
    );
  });
  f("columns().nodes()", "column().nodes()", function () {
    return this.iterator(
      "column-rows",
      function (e, t, n, r, i) {
        return _pluck_order(e.aoData, i, "anCells", t);
      },
      1
    );
  });
  f("columns().visible()", "column().visible()", function (t, r) {
    var l = this || n;
    var o = this.iterator("column", function (e, n) {
      if (t === i) return e.aoColumns[n].bVisible;
      __setColumnVis(e, n, t);
    });
    t !== i &&
      this.iterator("table", function (n) {
        _fnDrawHead(n, n.aoHeader);
        _fnDrawHead(n, n.aoFooter);
        n.aiDisplay.length ||
          e(n.nTBody).find("td[colspan]").attr("colspan", _fnVisbleColumns(n));
        _fnSaveState(n);
        l.iterator("column", function (e, n) {
          _fnCallbackFire(e, null, "column-visibility", [e, n, t, r]);
        });
        (r === i || r) && l.columns.adjust();
      });
    return o;
  });
  f("columns().indexes()", "column().index()", function (e) {
    return this.iterator(
      "column",
      function (t, n) {
        return "visible" === e ? _fnColumnIndexToVisible(t, n) : n;
      },
      1
    );
  });
  s("columns.adjust()", function () {
    return this.iterator(
      "table",
      function (e) {
        _fnAdjustColumnSizing(e);
      },
      1
    );
  });
  s("column.index()", function (e, t) {
    if (0 !== (this || n).context.length) {
      var r = (this || n).context[0];
      if ("fromVisible" === e || "toData" === e)
        return _fnVisibleToColumnIndex(r, t);
      if ("fromData" === e || "toVisible" === e)
        return _fnColumnIndexToVisible(r, t);
    }
  });
  s("column()", function (e, t) {
    return _selector_first(this.columns(e, t));
  });
  var __cell_selector = function (t, n, r) {
    var l = t.aoData;
    var o = _selector_row_indexes(t, r);
    var s = _removeEmpty(_pluck_order(l, o, "anCells"));
    var f = e(_flatten([], s));
    var u;
    var c = t.aoColumns.length;
    var d, h, p, v, _, g;
    var run = function (n) {
      var r = "function" === typeof n;
      if (null === n || n === i || r) {
        d = [];
        for (h = 0, p = o.length; h < p; h++) {
          u = o[h];
          for (v = 0; v < c; v++) {
            _ = { row: u, column: v };
            if (r) {
              g = l[u];
              n(_, _fnGetCellData(t, u, v), g.anCells ? g.anCells[v] : null) &&
                d.push(_);
            } else d.push(_);
          }
        }
        return d;
      }
      if (e.isPlainObject(n))
        return n.column !== i && n.row !== i && -1 !== e.inArray(n.row, o)
          ? [n]
          : [];
      var s = f
        .filter(n)
        .map(function (e, t) {
          return { row: t._DT_CellIndex.row, column: t._DT_CellIndex.column };
        })
        .toArray();
      if (s.length || !n.nodeName) return s;
      g = e(n).closest("*[data-dt-row]");
      return g.length
        ? [{ row: g.data("dt-row"), column: g.data("dt-column") }]
        : [];
    };
    return _selector_run("cell", n, run, t, r);
  };
  s("cells()", function (t, n, r) {
    if (e.isPlainObject(t))
      if (t.row === i) {
        r = t;
        t = null;
      } else {
        r = n;
        n = null;
      }
    if (e.isPlainObject(n)) {
      r = n;
      n = null;
    }
    if (null === n || n === i)
      return this.iterator("table", function (e) {
        return __cell_selector(e, t, _selector_opts(r));
      });
    var l = r ? { page: r.page, order: r.order, search: r.search } : {};
    var o = this.columns(n, l);
    var s = this.rows(t, l);
    var f, u, c, d;
    var h = this.iterator(
      "table",
      function (e, t) {
        var n = [];
        for (f = 0, u = s[t].length; f < u; f++)
          for (c = 0, d = o[t].length; c < d; c++)
            n.push({ row: s[t][f], column: o[t][c] });
        return n;
      },
      1
    );
    var p = r && r.selected ? this.cells(h, r) : h;
    e.extend(p.selector, { cols: n, rows: t, opts: r });
    return p;
  });
  f("cells().nodes()", "cell().node()", function () {
    return this.iterator(
      "cell",
      function (e, t, n) {
        var r = e.aoData[t];
        return r && r.anCells ? r.anCells[n] : i;
      },
      1
    );
  });
  s("cells().data()", function () {
    return this.iterator(
      "cell",
      function (e, t, n) {
        return _fnGetCellData(e, t, n);
      },
      1
    );
  });
  f("cells().cache()", "cell().cache()", function (e) {
    e = "search" === e ? "_aFilterData" : "_aSortData";
    return this.iterator(
      "cell",
      function (t, n, r) {
        return t.aoData[n][e][r];
      },
      1
    );
  });
  f("cells().render()", "cell().render()", function (e) {
    return this.iterator(
      "cell",
      function (t, n, r) {
        return _fnGetCellData(t, n, r, e);
      },
      1
    );
  });
  f("cells().indexes()", "cell().index()", function () {
    return this.iterator(
      "cell",
      function (e, t, n) {
        return {
          row: t,
          column: n,
          columnVisible: _fnColumnIndexToVisible(e, n),
        };
      },
      1
    );
  });
  f("cells().invalidate()", "cell().invalidate()", function (e) {
    return this.iterator("cell", function (t, n, r) {
      _fnInvalidate(t, n, e, r);
    });
  });
  s("cell()", function (e, t, n) {
    return _selector_first(this.cells(e, t, n));
  });
  s("cell().data()", function (e) {
    var t = (this || n).context;
    var r = (this || n)[0];
    if (e === i)
      return t.length && r.length
        ? _fnGetCellData(t[0], r[0].row, r[0].column)
        : i;
    _fnSetCellData(t[0], r[0].row, r[0].column, e);
    _fnInvalidate(t[0], r[0].row, "data", r[0].column);
    return this || n;
  });
  /**
   * Get current ordering (sorting) that has been applied to the table.
   *
   * @returns {array} 2D array containing the sorting information for the first
   *   table in the current context. Each element in the parent array represents
   *   a column being sorted upon (i.e. multi-sorting with two columns would have
   *   2 inner arrays). The inner arrays may have 2 or 3 elements. The first is
   *   the column index that the sorting condition applies to, the second is the
   *   direction of the sort (`desc` or `asc`) and, optionally, the third is the
   *   index of the sorting order from the `column.sorting` initialisation array.
   */
  /**
   * Set the ordering for the table.
   *
   * @param {integer} order Column index to sort upon.
   * @param {string} direction Direction of the sort to be applied (`asc` or `desc`)
   * @returns {DataTables.Api} this
   */
  /**
   * Set the ordering for the table.
   *
   * @param {array} order 1D array of sorting information to be applied.
   * @param {array} [...] Optional additional sorting conditions
   * @returns {DataTables.Api} this
   */
  /**
   * Set the ordering for the table.
   *
   * @param {array} order 2D array of sorting information to be applied.
   * @returns {DataTables.Api} this
   */ s("order()", function (e, t) {
    var r = (this || n).context;
    if (e === i) return 0 !== r.length ? r[0].aaSorting : i;
    "number" === typeof e
      ? (e = [[e, t]])
      : e.length &&
        !Array.isArray(e[0]) &&
        (e = Array.prototype.slice.call(arguments));
    return this.iterator("table", function (t) {
      t.aaSorting = e.slice();
    });
  });
  /**
   * Attach a sort listener to an element for a given column
   *
   * @param {node|jQuery|string} node Identifier for the element(s) to attach the
   *   listener to. This can take the form of a single DOM node, a jQuery
   *   collection of nodes or a jQuery selector which will identify the node(s).
   * @param {integer} column the column that a click on this node will sort on
   * @param {function} [callback] callback function when sort is run
   * @returns {DataTables.Api} this
   */ s("order.listener()", function (e, t, n) {
    return this.iterator("table", function (r) {
      _fnSortAttachListener(r, e, t, n);
    });
  });
  s("order.fixed()", function (t) {
    if (!t) {
      var r = (this || n).context;
      var l = r.length ? r[0].aaSortingFixed : i;
      return Array.isArray(l) ? { pre: l } : l;
    }
    return this.iterator("table", function (n) {
      n.aaSortingFixed = e.extend(true, {}, t);
    });
  });
  s(["columns().order()", "column().order()"], function (t) {
    var r = this || n;
    return this.iterator("table", function (n, i) {
      var l = [];
      e.each(r[i], function (e, n) {
        l.push([n, t]);
      });
      n.aaSorting = l;
    });
  });
  s("search()", function (t, r, l, o) {
    var s = (this || n).context;
    return t === i
      ? 0 !== s.length
        ? s[0].oPreviousSearch.sSearch
        : i
      : this.iterator("table", function (n) {
          n.oFeatures.bFilter &&
            _fnFilterComplete(
              n,
              e.extend({}, n.oPreviousSearch, {
                sSearch: t + "",
                bRegex: null !== r && r,
                bSmart: null === l || l,
                bCaseInsensitive: null === o || o,
              }),
              1
            );
        });
  });
  f("columns().search()", "column().search()", function (t, n, r, l) {
    return this.iterator("column", function (o, s) {
      var f = o.aoPreSearchCols;
      if (t === i) return f[s].sSearch;
      if (o.oFeatures.bFilter) {
        e.extend(f[s], {
          sSearch: t + "",
          bRegex: null !== n && n,
          bSmart: null === r || r,
          bCaseInsensitive: null === l || l,
        });
        _fnFilterComplete(o, o.oPreviousSearch, 1);
      }
    });
  });
  s("state()", function () {
    return (this || n).context.length
      ? (this || n).context[0].oSavedState
      : null;
  });
  s("state.clear()", function () {
    return this.iterator("table", function (e) {
      e.fnStateSaveCallback.call(e.oInstance, e, {});
    });
  });
  s("state.loaded()", function () {
    return (this || n).context.length
      ? (this || n).context[0].oLoadedState
      : null;
  });
  s("state.save()", function () {
    return this.iterator("table", function (e) {
      _fnSaveState(e);
    });
  });
  /**
   * Provide a common method for plug-ins to check the version of DataTables being
   * used, in order to ensure compatibility.
   *
   *  @param {string} version Version string to check for, in the format "X.Y.Z".
   *    Note that the formats "X" and "X.Y" are also acceptable.
   *  @returns {boolean} true if this version of DataTables is greater or equal to
   *    the required version, or false if this version of DataTales is not
   *    suitable
   *  @static
   *  @dtopt API-Static
   *
   *  @example
   *    alert( $.fn.dataTable.versionCheck( '1.9.0' ) );
   */ DataTable.versionCheck = DataTable.fnVersionCheck = function (e) {
    var t = DataTable.version.split(".");
    var n = e.split(".");
    var r, i;
    for (var l = 0, o = n.length; l < o; l++) {
      r = parseInt(t[l], 10) || 0;
      i = parseInt(n[l], 10) || 0;
      if (r !== i) return r > i;
    }
    return true;
  };
  /**
   * Check if a `<table>` node is a DataTable table already or not.
   *
   *  @param {node|jquery|string} table Table node, jQuery object or jQuery
   *      selector for the table to test. Note that if more than more than one
   *      table is passed on, only the first will be checked
   *  @returns {boolean} true the table given is a DataTable, or false otherwise
   *  @static
   *  @dtopt API-Static
   *
   *  @example
   *    if ( ! $.fn.DataTable.isDataTable( '#example' ) ) {
   *      $('#example').dataTable();
   *    }
   */ DataTable.isDataTable = DataTable.fnIsDataTable = function (t) {
    var n = e(t).get(0);
    var r = false;
    if (t instanceof DataTable.Api) return true;
    e.each(DataTable.settings, function (t, i) {
      var l = i.nScrollHead ? e("table", i.nScrollHead)[0] : null;
      var o = i.nScrollFoot ? e("table", i.nScrollFoot)[0] : null;
      (i.nTable !== n && l !== n && o !== n) || (r = true);
    });
    return r;
  };
  /**
   * Get all DataTable tables that have been initialised - optionally you can
   * select to get only currently visible tables.
   *
   *  @param {boolean} [visible=false] Flag to indicate if you want all (default)
   *    or visible tables only.
   *  @returns {array} Array of `table` nodes (not DataTable instances) which are
   *    DataTables
   *  @static
   *  @dtopt API-Static
   *
   *  @example
   *    $.each( $.fn.dataTable.tables(true), function () {
   *      $(table).DataTable().columns.adjust();
   *    } );
   */ DataTable.tables = DataTable.fnTables = function (t) {
    var n = false;
    if (e.isPlainObject(t)) {
      n = t.api;
      t = t.visible;
    }
    var r = e.map(DataTable.settings, function (n) {
      if (!t || (t && e(n.nTable).is(":visible"))) return n.nTable;
    });
    return n ? new o(r) : r;
  };
  /**
   * Convert from camel case parameters to Hungarian notation. This is made public
   * for the extensions to provide the same ability as DataTables core to accept
   * either the 1.9 style Hungarian notation, or the 1.10+ style camelCase
   * parameters.
   *
   *  @param {object} src The model object which holds all parameters that can be
   *    mapped.
   *  @param {object} user The object to convert from camel case to Hungarian.
   *  @param {boolean} force When set to `true`, properties which already have a
   *    Hungarian value in the `user` object will be overwritten. Otherwise they
   *    won't be.
   */ DataTable.camelToHungarian = _fnCamelToHungarian;
  s("$()", function (t, n) {
    var r = this.rows(n).nodes(),
      i = e(r);
    return e([].concat(i.filter(t).toArray(), i.find(t).toArray()));
  });
  e.each(["on", "one", "off"], function (t, r) {
    s(r + "()", function () {
      var t = Array.prototype.slice.call(arguments);
      t[0] = e
        .map(t[0].split(/\s/), function (e) {
          return e.match(/\.dt\b/) ? e : e + ".dt";
        })
        .join(" ");
      var i = e(this.tables().nodes());
      i[r].apply(i, t);
      return this || n;
    });
  });
  s("clear()", function () {
    return this.iterator("table", function (e) {
      _fnClearTable(e);
    });
  });
  s("settings()", function () {
    return new o((this || n).context, (this || n).context);
  });
  s("init()", function () {
    var e = (this || n).context;
    return e.length ? e[0].oInit : null;
  });
  s("data()", function () {
    return this.iterator("table", function (e) {
      return _pluck(e.aoData, "_aData");
    }).flatten();
  });
  s("destroy()", function (r) {
    r = r || false;
    return this.iterator("table", function (i) {
      var l = i.nTableWrapper.parentNode;
      var s = i.oClasses;
      var f = i.nTable;
      var u = i.nTBody;
      var c = i.nTHead;
      var d = i.nTFoot;
      var h = e(f);
      var p = e(u);
      var v = e(i.nTableWrapper);
      var _ = e.map(i.aoData, function (e) {
        return e.nTr;
      });
      var g;
      i.bDestroying = true;
      _fnCallbackFire(i, "aoDestroyCallback", "destroy", [i]);
      r || new o(i).columns().visible(true);
      v.off(".DT").find(":not(tbody *)").off(".DT");
      e(t).off(".DT-" + i.sInstance);
      if (f != c.parentNode) {
        h.children("thead").detach();
        h.append(c);
      }
      if (d && f != d.parentNode) {
        h.children("tfoot").detach();
        h.append(d);
      }
      i.aaSorting = [];
      i.aaSortingFixed = [];
      _fnSortingClasses(i);
      e(_).removeClass(i.asStripeClasses.join(" "));
      e("th, td", c).removeClass(
        s.sSortable +
          " " +
          s.sSortableAsc +
          " " +
          s.sSortableDesc +
          " " +
          s.sSortableNone
      );
      p.children().detach();
      p.append(_);
      var b = r ? "remove" : "detach";
      h[b]();
      v[b]();
      if (!r && l) {
        l.insertBefore(f, i.nTableReinsertBefore);
        h.css("width", i.sDestroyWidth).removeClass(s.sTable);
        g = i.asDestroyStripes.length;
        g &&
          p.children().each(function (t) {
            e(this || n).addClass(i.asDestroyStripes[t % g]);
          });
      }
      var m = e.inArray(i, DataTable.settings);
      -1 !== m && DataTable.settings.splice(m, 1);
    });
  });
  e.each(["column", "row", "cell"], function (e, t) {
    s(t + "s().every()", function (e) {
      var r = (this || n).selector.opts;
      var l = this || n;
      return this.iterator(t, function (n, o, s, f, u) {
        e.call(l[t](o, "cell" === t ? s : r, "cell" === t ? r : i), o, s, f, u);
      });
    });
  });
  s("i18n()", function (t, r, l) {
    var o = (this || n).context[0];
    var s = b(t)(o.oLanguage);
    s === i && (s = r);
    l !== i && e.isPlainObject(s) && (s = s[l] !== i ? s[l] : s._);
    return s.replace("%d", l);
  });
  /**
   * Version string for plug-ins to check compatibility. Allowed format is
   * `a.b.c-d` where: a:int, b:int, c:int, d:string(dev|beta|alpha). `d` is used
   * only for non-release builds. See http://semver.org/ for more information.
   *  @member
   *  @type string
   *  @default Version number
   */ DataTable.version = "1.11.4";
  /**
   * Private data store, containing all of the settings objects that are
   * created for the tables on a given page.
   *
   * Note that the `DataTable.settings` object is aliased to
   * `jQuery.fn.dataTableExt` through which it may be accessed and
   * manipulated, or `jQuery.fn.dataTable.settings`.
   *  @member
   *  @type array
   *  @default []
   *  @private
   */ DataTable.settings = [];
  DataTable.models = {};
  DataTable.models.oSearch = {
    /**
     * Flag to indicate if the filtering should be case insensitive or not
     *  @type boolean
     *  @default true
     */
    bCaseInsensitive: true,
    /**
     * Applied search term
     *  @type string
     *  @default <i>Empty string</i>
     */
    sSearch: "",
    /**
     * Flag to indicate if the search term should be interpreted as a
     * regular expression (true) or not (false) and therefore and special
     * regex characters escaped.
     *  @type boolean
     *  @default false
     */
    bRegex: false,
    /**
     * Flag to indicate if DataTables is to use its smart filtering or not.
     *  @type boolean
     *  @default true
     */
    bSmart: true,
    /**
     * Flag to indicate if DataTables should only trigger a search when
     * the return key is pressed.
     *  @type boolean
     *  @default false
     */
    return: false,
  };
  DataTable.models.oRow = {
    /**
     * TR element for the row
     *  @type node
     *  @default null
     */
    nTr: null,
    /**
     * Array of TD elements for each row. This is null until the row has been
     * created.
     *  @type array nodes
     *  @default []
     */
    anCells: null,
    /**
     * Data object from the original data source for the row. This is either
     * an array if using the traditional form of DataTables, or an object if
     * using mData options. The exact type will depend on the passed in
     * data from the data source, or will be an array if using DOM a data
     * source.
     *  @type array|object
     *  @default []
     */
    _aData: [],
    /**
     * Sorting data cache - this array is ostensibly the same length as the
     * number of columns (although each index is generated only as it is
     * needed), and holds the data that is used for sorting each column in the
     * row. We do this cache generation at the start of the sort in order that
     * the formatting of the sort data need be done only once for each cell
     * per sort. This array should not be read from or written to by anything
     * other than the master sorting methods.
     *  @type array
     *  @default null
     *  @private
     */
    _aSortData: null,
    /**
     * Per cell filtering data cache. As per the sort data cache, used to
     * increase the performance of the filtering in DataTables
     *  @type array
     *  @default null
     *  @private
     */
    _aFilterData: null,
    /**
     * Filtering data cache. This is the same as the cell filtering cache, but
     * in this case a string rather than an array. This is easily computed with
     * a join on `_aFilterData`, but is provided as a cache so the join isn't
     * needed on every search (memory traded for performance)
     *  @type array
     *  @default null
     *  @private
     */
    _sFilterRow: null,
    /**
     * Cache of the class name that DataTables has applied to the row, so we
     * can quickly look at this variable rather than needing to do a DOM check
     * on className for the nTr property.
     *  @type string
     *  @default <i>Empty string</i>
     *  @private
     */
    _sRowStripe: "",
    /**
     * Denote if the original data source was from the DOM, or the data source
     * object. This is used for invalidating data, so DataTables can
     * automatically read data from the original source, unless uninstructed
     * otherwise.
     *  @type string
     *  @default null
     *  @private
     */
    src: null,
    /**
     * Index in the aoData array. This saves an indexOf lookup when we have the
     * object, but want to know the index
     *  @type integer
     *  @default -1
     *  @private
     */
    idx: -1,
  };
  DataTable.models.oColumn = {
    /**
     * Column index. This could be worked out on-the-fly with $.inArray, but it
     * is faster to just hold it as a variable
     *  @type integer
     *  @default null
     */
    idx: null,
    /**
     * A list of the columns that sorting should occur on when this column
     * is sorted. That this property is an array allows multi-column sorting
     * to be defined for a column (for example first name / last name columns
     * would benefit from this). The values are integers pointing to the
     * columns to be sorted on (typically it will be a single integer pointing
     * at itself, but that doesn't need to be the case).
     *  @type array
     */
    aDataSort: null,
    /**
     * Define the sorting directions that are applied to the column, in sequence
     * as the column is repeatedly sorted upon - i.e. the first value is used
     * as the sorting direction when the column if first sorted (clicked on).
     * Sort it again (click again) and it will move on to the next index.
     * Repeat until loop.
     *  @type array
     */
    asSorting: null,
    /**
     * Flag to indicate if the column is searchable, and thus should be included
     * in the filtering or not.
     *  @type boolean
     */
    bSearchable: null,
    /**
     * Flag to indicate if the column is sortable or not.
     *  @type boolean
     */
    bSortable: null,
    /**
     * Flag to indicate if the column is currently visible in the table or not
     *  @type boolean
     */
    bVisible: null,
    /**
     * Store for manual type assignment using the `column.type` option. This
     * is held in store so we can manipulate the column's `sType` property.
     *  @type string
     *  @default null
     *  @private
     */
    _sManualType: null,
    /**
     * Flag to indicate if HTML5 data attributes should be used as the data
     * source for filtering or sorting. True is either are.
     *  @type boolean
     *  @default false
     *  @private
     */
    _bAttrSrc: false,
    /**
     * Developer definable function that is called whenever a cell is created (Ajax source,
     * etc) or processed for input (DOM source). This can be used as a compliment to mRender
     * allowing you to modify the DOM element (add background colour for example) when the
     * element is available.
     *  @type function
     *  @param {element} nTd The TD node that has been created
     *  @param {*} sData The Data for the cell
     *  @param {array|object} oData The data for the whole row
     *  @param {int} iRow The row index for the aoData data store
     *  @default null
     */
    fnCreatedCell: null,
    /**
     * Function to get data from a cell in a column. You should <b>never</b>
     * access data directly through _aData internally in DataTables - always use
     * the method attached to this property. It allows mData to function as
     * required. This function is automatically assigned by the column
     * initialisation method
     *  @type function
     *  @param {array|object} oData The data array/object for the array
     *    (i.e. aoData[]._aData)
     *  @param {string} sSpecific The specific data type you want to get -
     *    'display', 'type' 'filter' 'sort'
     *  @returns {*} The data for the cell from the given row's data
     *  @default null
     */
    fnGetData: null,
    /**
     * Function to set data for a cell in the column. You should <b>never</b>
     * set the data directly to _aData internally in DataTables - always use
     * this method. It allows mData to function as required. This function
     * is automatically assigned by the column initialisation method
     *  @type function
     *  @param {array|object} oData The data array/object for the array
     *    (i.e. aoData[]._aData)
     *  @param {*} sValue Value to set
     *  @default null
     */
    fnSetData: null,
    /**
     * Property to read the value for the cells in the column from the data
     * source array / object. If null, then the default content is used, if a
     * function is given then the return from the function is used.
     *  @type function|int|string|null
     *  @default null
     */
    mData: null,
    /**
     * Partner property to mData which is used (only when defined) to get
     * the data - i.e. it is basically the same as mData, but without the
     * 'set' option, and also the data fed to it is the result from mData.
     * This is the rendering method to match the data method of mData.
     *  @type function|int|string|null
     *  @default null
     */
    mRender: null,
    /**
     * Unique header TH/TD element for this column - this is what the sorting
     * listener is attached to (if sorting is enabled.)
     *  @type node
     *  @default null
     */
    nTh: null,
    /**
     * Unique footer TH/TD element for this column (if there is one). Not used
     * in DataTables as such, but can be used for plug-ins to reference the
     * footer for each column.
     *  @type node
     *  @default null
     */
    nTf: null,
    /**
     * The class to apply to all TD elements in the table's TBODY for the column
     *  @type string
     *  @default null
     */
    sClass: null,
    /**
     * When DataTables calculates the column widths to assign to each column,
     * it finds the longest string in each column and then constructs a
     * temporary table and reads the widths from that. The problem with this
     * is that "mmm" is much wider then "iiii", but the latter is a longer
     * string - thus the calculation can go wrong (doing it properly and putting
     * it into an DOM object and measuring that is horribly(!) slow). Thus as
     * a "work around" we provide this option. It will append its value to the
     * text that is found to be the longest string for the column - i.e. padding.
     *  @type string
     */
    sContentPadding: null,
    /**
     * Allows a default value to be given for a column's data, and will be used
     * whenever a null data source is encountered (this can be because mData
     * is set to null, or because the data source itself is null).
     *  @type string
     *  @default null
     */
    sDefaultContent: null,
    /**
     * Name for the column, allowing reference to the column by name as well as
     * by index (needs a lookup to work by name).
     *  @type string
     */
    sName: null,
    /**
     * Custom sorting data type - defines which of the available plug-ins in
     * afnSortData the custom sorting will use - if any is defined.
     *  @type string
     *  @default std
     */
    sSortDataType: "std",
    /**
     * Class to be applied to the header element when sorting on this column
     *  @type string
     *  @default null
     */
    sSortingClass: null,
    /**
     * Class to be applied to the header element when sorting on this column -
     * when jQuery UI theming is used.
     *  @type string
     *  @default null
     */
    sSortingClassJUI: null,
    /**
     * Title of the column - what is seen in the TH element (nTh).
     *  @type string
     */
    sTitle: null,
    /**
     * Column sorting and filtering type
     *  @type string
     *  @default null
     */
    sType: null,
    /**
     * Width of the column
     *  @type string
     *  @default null
     */
    sWidth: null,
    /**
     * Width of the column when it was first "encountered"
     *  @type string
     *  @default null
     */
    sWidthOrig: null,
  };
  DataTable.defaults = {
    /**
     * An array of data to use for the table, passed in at initialisation which
     * will be used in preference to any data which is already in the DOM. This is
     * particularly useful for constructing tables purely in Javascript, for
     * example with a custom Ajax call.
     *  @type array
     *  @default null
     *
     *  @dtopt Option
     *  @name DataTable.defaults.data
     *
     *  @example
     *    // Using a 2D array data source
     *    $(document).ready( function () {
     *      $('#example').dataTable( {
     *        "data": [
     *          ['Trident', 'Internet Explorer 4.0', 'Win 95+', 4, 'X'],
     *          ['Trident', 'Internet Explorer 5.0', 'Win 95+', 5, 'C'],
     *        ],
     *        "columns": [
     *          { "title": "Engine" },
     *          { "title": "Browser" },
     *          { "title": "Platform" },
     *          { "title": "Version" },
     *          { "title": "Grade" }
     *        ]
     *      } );
     *    } );
     *
     *  @example
     *    // Using an array of objects as a data source (`data`)
     *    $(document).ready( function () {
     *      $('#example').dataTable( {
     *        "data": [
     *          {
     *            "engine":   "Trident",
     *            "browser":  "Internet Explorer 4.0",
     *            "platform": "Win 95+",
     *            "version":  4,
     *            "grade":    "X"
     *          },
     *          {
     *            "engine":   "Trident",
     *            "browser":  "Internet Explorer 5.0",
     *            "platform": "Win 95+",
     *            "version":  5,
     *            "grade":    "C"
     *          }
     *        ],
     *        "columns": [
     *          { "title": "Engine",   "data": "engine" },
     *          { "title": "Browser",  "data": "browser" },
     *          { "title": "Platform", "data": "platform" },
     *          { "title": "Version",  "data": "version" },
     *          { "title": "Grade",    "data": "grade" }
     *        ]
     *      } );
     *    } );
     */
    aaData: null,
    /**
     * If ordering is enabled, then DataTables will perform a first pass sort on
     * initialisation. You can define which column(s) the sort is performed
     * upon, and the sorting direction, with this variable. The `sorting` array
     * should contain an array for each column to be sorted initially containing
     * the column's index and a direction string ('asc' or 'desc').
     *  @type array
     *  @default [[0,'asc']]
     *
     *  @dtopt Option
     *  @name DataTable.defaults.order
     *
     *  @example
     *    // Sort by 3rd column first, and then 4th column
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "order": [[2,'asc'], [3,'desc']]
     *      } );
     *    } );
     *
     *    // No initial sorting
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "order": []
     *      } );
     *    } );
     */
    aaSorting: [[0, "asc"]],
    /**
     * This parameter is basically identical to the `sorting` parameter, but
     * cannot be overridden by user interaction with the table. What this means
     * is that you could have a column (visible or hidden) which the sorting
     * will always be forced on first - any sorting after that (from the user)
     * will then be performed as required. This can be useful for grouping rows
     * together.
     *  @type array
     *  @default null
     *
     *  @dtopt Option
     *  @name DataTable.defaults.orderFixed
     *
     *  @example
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "orderFixed": [[0,'asc']]
     *      } );
     *    } )
     */
    aaSortingFixed: [],
    /**
     * DataTables can be instructed to load data to display in the table from a
     * Ajax source. This option defines how that Ajax call is made and where to.
     *
     * The `ajax` property has three different modes of operation, depending on
     * how it is defined. These are:
     *
     * * `string` - Set the URL from where the data should be loaded from.
     * * `object` - Define properties for `jQuery.ajax`.
     * * `function` - Custom data get function
     *
     * `string`
     * --------
     *
     * As a string, the `ajax` property simply defines the URL from which
     * DataTables will load data.
     *
     * `object`
     * --------
     *
     * As an object, the parameters in the object are passed to
     * [jQuery.ajax](http://api.jquery.com/jQuery.ajax/) allowing fine control
     * of the Ajax request. DataTables has a number of default parameters which
     * you can override using this option. Please refer to the jQuery
     * documentation for a full description of the options available, although
     * the following parameters provide additional options in DataTables or
     * require special consideration:
     *
     * * `data` - As with jQuery, `data` can be provided as an object, but it
     *   can also be used as a function to manipulate the data DataTables sends
     *   to the server. The function takes a single parameter, an object of
     *   parameters with the values that DataTables has readied for sending. An
     *   object may be returned which will be merged into the DataTables
     *   defaults, or you can add the items to the object that was passed in and
     *   not return anything from the function. This supersedes `fnServerParams`
     *   from DataTables 1.9-.
     *
     * * `dataSrc` - By default DataTables will look for the property `data` (or
     *   `aaData` for compatibility with DataTables 1.9-) when obtaining data
     *   from an Ajax source or for server-side processing - this parameter
     *   allows that property to be changed. You can use Javascript dotted
     *   object notation to get a data source for multiple levels of nesting, or
     *   it my be used as a function. As a function it takes a single parameter,
     *   the JSON returned from the server, which can be manipulated as
     *   required, with the returned value being that used by DataTables as the
     *   data source for the table. This supersedes `sAjaxDataProp` from
     *   DataTables 1.9-.
     *
     * * `success` - Should not be overridden it is used internally in
     *   DataTables. To manipulate / transform the data returned by the server
     *   use `ajax.dataSrc`, or use `ajax` as a function (see below).
     *
     * `function`
     * ----------
     *
     * As a function, making the Ajax call is left up to yourself allowing
     * complete control of the Ajax request. Indeed, if desired, a method other
     * than Ajax could be used to obtain the required data, such as Web storage
     * or an AIR database.
     *
     * The function is given four parameters and no return is required. The
     * parameters are:
     *
     * 1. _object_ - Data to send to the server
     * 2. _function_ - Callback function that must be executed when the required
     *    data has been obtained. That data should be passed into the callback
     *    as the only parameter
     * 3. _object_ - DataTables settings object for the table
     *
     * Note that this supersedes `fnServerData` from DataTables 1.9-.
     *
     *  @type string|object|function
     *  @default null
     *
     *  @dtopt Option
     *  @name DataTable.defaults.ajax
     *  @since 1.10.0
     *
     * @example
     *   // Get JSON data from a file via Ajax.
     *   // Note DataTables expects data in the form `{ data: [ ...data... ] }` by default).
     *   $('#example').dataTable( {
     *     "ajax": "data.json"
     *   } );
     *
     * @example
     *   // Get JSON data from a file via Ajax, using `dataSrc` to change
     *   // `data` to `tableData` (i.e. `{ tableData: [ ...data... ] }`)
     *   $('#example').dataTable( {
     *     "ajax": {
     *       "url": "data.json",
     *       "dataSrc": "tableData"
     *     }
     *   } );
     *
     * @example
     *   // Get JSON data from a file via Ajax, using `dataSrc` to read data
     *   // from a plain array rather than an array in an object
     *   $('#example').dataTable( {
     *     "ajax": {
     *       "url": "data.json",
     *       "dataSrc": ""
     *     }
     *   } );
     *
     * @example
     *   // Manipulate the data returned from the server - add a link to data
     *   // (note this can, should, be done using `render` for the column - this
     *   // is just a simple example of how the data can be manipulated).
     *   $('#example').dataTable( {
     *     "ajax": {
     *       "url": "data.json",
     *       "dataSrc": function ( json ) {
     *         for ( var i=0, ien=json.length ; i<ien ; i++ ) {
     *           json[i][0] = '<a href="/message/'+json[i][0]+'>View message</a>';
     *         }
     *         return json;
     *       }
     *     }
     *   } );
     *
     * @example
     *   // Add data to the request
     *   $('#example').dataTable( {
     *     "ajax": {
     *       "url": "data.json",
     *       "data": function ( d ) {
     *         return {
     *           "extra_search": $('#extra').val()
     *         };
     *       }
     *     }
     *   } );
     *
     * @example
     *   // Send request as POST
     *   $('#example').dataTable( {
     *     "ajax": {
     *       "url": "data.json",
     *       "type": "POST"
     *     }
     *   } );
     *
     * @example
     *   // Get the data from localStorage (could interface with a form for
     *   // adding, editing and removing rows).
     *   $('#example').dataTable( {
     *     "ajax": function (data, callback, settings) {
     *       callback(
     *         JSON.parse( localStorage.getItem('dataTablesData') )
     *       );
     *     }
     *   } );
     */
    ajax: null,
    /**
     * This parameter allows you to readily specify the entries in the length drop
     * down menu that DataTables shows when pagination is enabled. It can be
     * either a 1D array of options which will be used for both the displayed
     * option and the value, or a 2D array which will use the array in the first
     * position as the value, and the array in the second position as the
     * displayed options (useful for language strings such as 'All').
     *
     * Note that the `pageLength` property will be automatically set to the
     * first value given in this array, unless `pageLength` is also provided.
     *  @type array
     *  @default [ 10, 25, 50, 100 ]
     *
     *  @dtopt Option
     *  @name DataTable.defaults.lengthMenu
     *
     *  @example
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]]
     *      } );
     *    } );
     */
    aLengthMenu: [10, 25, 50, 100],
    aoColumns: null,
    aoColumnDefs: null,
    /**
     * Basically the same as `search`, this parameter defines the individual column
     * filtering state at initialisation time. The array must be of the same size
     * as the number of columns, and each element be an object with the parameters
     * `search` and `escapeRegex` (the latter is optional). 'null' is also
     * accepted and the default will be used.
     *  @type array
     *  @default []
     *
     *  @dtopt Option
     *  @name DataTable.defaults.searchCols
     *
     *  @example
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "searchCols": [
     *          null,
     *          { "search": "My filter" },
     *          null,
     *          { "search": "^[0-9]", "escapeRegex": false }
     *        ]
     *      } );
     *    } )
     */
    aoSearchCols: [],
    /**
     * An array of CSS classes that should be applied to displayed rows. This
     * array may be of any length, and DataTables will apply each class
     * sequentially, looping when required.
     *  @type array
     *  @default null <i>Will take the values determined by the `oClasses.stripe*`
     *    options</i>
     *
     *  @dtopt Option
     *  @name DataTable.defaults.stripeClasses
     *
     *  @example
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "stripeClasses": [ 'strip1', 'strip2', 'strip3' ]
     *      } );
     *    } )
     */
    asStripeClasses: null,
    /**
     * Enable or disable automatic column width calculation. This can be disabled
     * as an optimisation (it takes some time to calculate the widths) if the
     * tables widths are passed in using `columns`.
     *  @type boolean
     *  @default true
     *
     *  @dtopt Features
     *  @name DataTable.defaults.autoWidth
     *
     *  @example
     *    $(document).ready( function () {
     *      $('#example').dataTable( {
     *        "autoWidth": false
     *      } );
     *    } );
     */
    bAutoWidth: true,
    /**
     * Deferred rendering can provide DataTables with a huge speed boost when you
     * are using an Ajax or JS data source for the table. This option, when set to
     * true, will cause DataTables to defer the creation of the table elements for
     * each row until they are needed for a draw - saving a significant amount of
     * time.
     *  @type boolean
     *  @default false
     *
     *  @dtopt Features
     *  @name DataTable.defaults.deferRender
     *
     *  @example
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "ajax": "sources/arrays.txt",
     *        "deferRender": true
     *      } );
     *    } );
     */
    bDeferRender: false,
    /**
     * Replace a DataTable which matches the given selector and replace it with
     * one which has the properties of the new initialisation object passed. If no
     * table matches the selector, then the new DataTable will be constructed as
     * per normal.
     *  @type boolean
     *  @default false
     *
     *  @dtopt Options
     *  @name DataTable.defaults.destroy
     *
     *  @example
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "srollY": "200px",
     *        "paginate": false
     *      } );
     *
     *      // Some time later....
     *      $('#example').dataTable( {
     *        "filter": false,
     *        "destroy": true
     *      } );
     *    } );
     */
    bDestroy: false,
    /**
     * Enable or disable filtering of data. Filtering in DataTables is "smart" in
     * that it allows the end user to input multiple words (space separated) and
     * will match a row containing those words, even if not in the order that was
     * specified (this allow matching across multiple columns). Note that if you
     * wish to use filtering in DataTables this must remain 'true' - to remove the
     * default filtering input box and retain filtering abilities, please use
     * {@link DataTable.defaults.dom}.
     *  @type boolean
     *  @default true
     *
     *  @dtopt Features
     *  @name DataTable.defaults.searching
     *
     *  @example
     *    $(document).ready( function () {
     *      $('#example').dataTable( {
     *        "searching": false
     *      } );
     *    } );
     */
    bFilter: true,
    /**
     * Enable or disable the table information display. This shows information
     * about the data that is currently visible on the page, including information
     * about filtered data if that action is being performed.
     *  @type boolean
     *  @default true
     *
     *  @dtopt Features
     *  @name DataTable.defaults.info
     *
     *  @example
     *    $(document).ready( function () {
     *      $('#example').dataTable( {
     *        "info": false
     *      } );
     *    } );
     */
    bInfo: true,
    /**
     * Allows the end user to select the size of a formatted page from a select
     * menu (sizes are 10, 25, 50 and 100). Requires pagination (`paginate`).
     *  @type boolean
     *  @default true
     *
     *  @dtopt Features
     *  @name DataTable.defaults.lengthChange
     *
     *  @example
     *    $(document).ready( function () {
     *      $('#example').dataTable( {
     *        "lengthChange": false
     *      } );
     *    } );
     */
    bLengthChange: true,
    /**
     * Enable or disable pagination.
     *  @type boolean
     *  @default true
     *
     *  @dtopt Features
     *  @name DataTable.defaults.paging
     *
     *  @example
     *    $(document).ready( function () {
     *      $('#example').dataTable( {
     *        "paging": false
     *      } );
     *    } );
     */
    bPaginate: true,
    /**
     * Enable or disable the display of a 'processing' indicator when the table is
     * being processed (e.g. a sort). This is particularly useful for tables with
     * large amounts of data where it can take a noticeable amount of time to sort
     * the entries.
     *  @type boolean
     *  @default false
     *
     *  @dtopt Features
     *  @name DataTable.defaults.processing
     *
     *  @example
     *    $(document).ready( function () {
     *      $('#example').dataTable( {
     *        "processing": true
     *      } );
     *    } );
     */
    bProcessing: false,
    /**
     * Retrieve the DataTables object for the given selector. Note that if the
     * table has already been initialised, this parameter will cause DataTables
     * to simply return the object that has already been set up - it will not take
     * account of any changes you might have made to the initialisation object
     * passed to DataTables (setting this parameter to true is an acknowledgement
     * that you understand this). `destroy` can be used to reinitialise a table if
     * you need.
     *  @type boolean
     *  @default false
     *
     *  @dtopt Options
     *  @name DataTable.defaults.retrieve
     *
     *  @example
     *    $(document).ready( function() {
     *      initTable();
     *      tableActions();
     *    } );
     *
     *    function initTable ()
     *    {
     *      return $('#example').dataTable( {
     *        "scrollY": "200px",
     *        "paginate": false,
     *        "retrieve": true
     *      } );
     *    }
     *
     *    function tableActions ()
     *    {
     *      var table = initTable();
     *      // perform API operations with oTable
     *    }
     */
    bRetrieve: false,
    /**
     * When vertical (y) scrolling is enabled, DataTables will force the height of
     * the table's viewport to the given height at all times (useful for layout).
     * However, this can look odd when filtering data down to a small data set,
     * and the footer is left "floating" further down. This parameter (when
     * enabled) will cause DataTables to collapse the table's viewport down when
     * the result set will fit within the given Y height.
     *  @type boolean
     *  @default false
     *
     *  @dtopt Options
     *  @name DataTable.defaults.scrollCollapse
     *
     *  @example
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "scrollY": "200",
     *        "scrollCollapse": true
     *      } );
     *    } );
     */
    bScrollCollapse: false,
    /**
     * Configure DataTables to use server-side processing. Note that the
     * `ajax` parameter must also be given in order to give DataTables a
     * source to obtain the required data for each draw.
     *  @type boolean
     *  @default false
     *
     *  @dtopt Features
     *  @dtopt Server-side
     *  @name DataTable.defaults.serverSide
     *
     *  @example
     *    $(document).ready( function () {
     *      $('#example').dataTable( {
     *        "serverSide": true,
     *        "ajax": "xhr.php"
     *      } );
     *    } );
     */
    bServerSide: false,
    /**
     * Enable or disable sorting of columns. Sorting of individual columns can be
     * disabled by the `sortable` option for each column.
     *  @type boolean
     *  @default true
     *
     *  @dtopt Features
     *  @name DataTable.defaults.ordering
     *
     *  @example
     *    $(document).ready( function () {
     *      $('#example').dataTable( {
     *        "ordering": false
     *      } );
     *    } );
     */
    bSort: true,
    /**
     * Enable or display DataTables' ability to sort multiple columns at the
     * same time (activated by shift-click by the user).
     *  @type boolean
     *  @default true
     *
     *  @dtopt Options
     *  @name DataTable.defaults.orderMulti
     *
     *  @example
     *    // Disable multiple column sorting ability
     *    $(document).ready( function () {
     *      $('#example').dataTable( {
     *        "orderMulti": false
     *      } );
     *    } );
     */
    bSortMulti: true,
    /**
     * Allows control over whether DataTables should use the top (true) unique
     * cell that is found for a single column, or the bottom (false - default).
     * This is useful when using complex headers.
     *  @type boolean
     *  @default false
     *
     *  @dtopt Options
     *  @name DataTable.defaults.orderCellsTop
     *
     *  @example
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "orderCellsTop": true
     *      } );
     *    } );
     */
    bSortCellsTop: false,
    /**
     * Enable or disable the addition of the classes `sorting\_1`, `sorting\_2` and
     * `sorting\_3` to the columns which are currently being sorted on. This is
     * presented as a feature switch as it can increase processing time (while
     * classes are removed and added) so for large data sets you might want to
     * turn this off.
     *  @type boolean
     *  @default true
     *
     *  @dtopt Features
     *  @name DataTable.defaults.orderClasses
     *
     *  @example
     *    $(document).ready( function () {
     *      $('#example').dataTable( {
     *        "orderClasses": false
     *      } );
     *    } );
     */
    bSortClasses: true,
    /**
     * Enable or disable state saving. When enabled HTML5 `localStorage` will be
     * used to save table display information such as pagination information,
     * display length, filtering and sorting. As such when the end user reloads
     * the page the display display will match what thy had previously set up.
     *
     * Due to the use of `localStorage` the default state saving is not supported
     * in IE6 or 7. If state saving is required in those browsers, use
     * `stateSaveCallback` to provide a storage solution such as cookies.
     *  @type boolean
     *  @default false
     *
     *  @dtopt Features
     *  @name DataTable.defaults.stateSave
     *
     *  @example
     *    $(document).ready( function () {
     *      $('#example').dataTable( {
     *        "stateSave": true
     *      } );
     *    } );
     */
    bStateSave: false,
    /**
     * This function is called when a TR element is created (and all TD child
     * elements have been inserted), or registered if using a DOM source, allowing
     * manipulation of the TR element (adding classes etc).
     *  @type function
     *  @param {node} row "TR" element for the current row
     *  @param {array} data Raw data array for this row
     *  @param {int} dataIndex The index of this row in the internal aoData array
     *
     *  @dtopt Callbacks
     *  @name DataTable.defaults.createdRow
     *
     *  @example
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "createdRow": function( row, data, dataIndex ) {
     *          // Bold the grade for all 'A' grade browsers
     *          if ( data[4] == "A" )
     *          {
     *            $('td:eq(4)', row).html( '<b>A</b>' );
     *          }
     *        }
     *      } );
     *    } );
     */
    fnCreatedRow: null,
    /**
     * This function is called on every 'draw' event, and allows you to
     * dynamically modify any aspect you want about the created DOM.
     *  @type function
     *  @param {object} settings DataTables settings object
     *
     *  @dtopt Callbacks
     *  @name DataTable.defaults.drawCallback
     *
     *  @example
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "drawCallback": function( settings ) {
     *          alert( 'DataTables has redrawn the table' );
     *        }
     *      } );
     *    } );
     */
    fnDrawCallback: null,
    /**
     * Identical to fnHeaderCallback() but for the table footer this function
     * allows you to modify the table footer on every 'draw' event.
     *  @type function
     *  @param {node} foot "TR" element for the footer
     *  @param {array} data Full table data (as derived from the original HTML)
     *  @param {int} start Index for the current display starting point in the
     *    display array
     *  @param {int} end Index for the current display ending point in the
     *    display array
     *  @param {array int} display Index array to translate the visual position
     *    to the full data array
     *
     *  @dtopt Callbacks
     *  @name DataTable.defaults.footerCallback
     *
     *  @example
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "footerCallback": function( tfoot, data, start, end, display ) {
     *          tfoot.getElementsByTagName('th')[0].innerHTML = "Starting index is "+start;
     *        }
     *      } );
     *    } )
     */
    fnFooterCallback: null,
    /**
     * When rendering large numbers in the information element for the table
     * (i.e. "Showing 1 to 10 of 57 entries") DataTables will render large numbers
     * to have a comma separator for the 'thousands' units (e.g. 1 million is
     * rendered as "1,000,000") to help readability for the end user. This
     * function will override the default method DataTables uses.
     *  @type function
     *  @member
     *  @param {int} toFormat number to be formatted
     *  @returns {string} formatted string for DataTables to show the number
     *
     *  @dtopt Callbacks
     *  @name DataTable.defaults.formatNumber
     *
     *  @example
     *    // Format a number using a single quote for the separator (note that
     *    // this can also be done with the language.thousands option)
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "formatNumber": function ( toFormat ) {
     *          return toFormat.toString().replace(
     *            /\B(?=(\d{3})+(?!\d))/g, "'"
     *          );
     *        };
     *      } );
     *    } );
     */
    fnFormatNumber: function (e) {
      return e
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, (this || n).oLanguage.sThousands);
    },
    /**
     * This function is called on every 'draw' event, and allows you to
     * dynamically modify the header row. This can be used to calculate and
     * display useful information about the table.
     *  @type function
     *  @param {node} head "TR" element for the header
     *  @param {array} data Full table data (as derived from the original HTML)
     *  @param {int} start Index for the current display starting point in the
     *    display array
     *  @param {int} end Index for the current display ending point in the
     *    display array
     *  @param {array int} display Index array to translate the visual position
     *    to the full data array
     *
     *  @dtopt Callbacks
     *  @name DataTable.defaults.headerCallback
     *
     *  @example
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "fheaderCallback": function( head, data, start, end, display ) {
     *          head.getElementsByTagName('th')[0].innerHTML = "Displaying "+(end-start)+" records";
     *        }
     *      } );
     *    } )
     */
    fnHeaderCallback: null,
    /**
     * The information element can be used to convey information about the current
     * state of the table. Although the internationalisation options presented by
     * DataTables are quite capable of dealing with most customisations, there may
     * be times where you wish to customise the string further. This callback
     * allows you to do exactly that.
     *  @type function
     *  @param {object} oSettings DataTables settings object
     *  @param {int} start Starting position in data for the draw
     *  @param {int} end End position in data for the draw
     *  @param {int} max Total number of rows in the table (regardless of
     *    filtering)
     *  @param {int} total Total number of rows in the data set, after filtering
     *  @param {string} pre The string that DataTables has formatted using it's
     *    own rules
     *  @returns {string} The string to be displayed in the information element.
     *
     *  @dtopt Callbacks
     *  @name DataTable.defaults.infoCallback
     *
     *  @example
     *    $('#example').dataTable( {
     *      "infoCallback": function( settings, start, end, max, total, pre ) {
     *        return start +" to "+ end;
     *      }
     *    } );
     */
    fnInfoCallback: null,
    /**
     * Called when the table has been initialised. Normally DataTables will
     * initialise sequentially and there will be no need for this function,
     * however, this does not hold true when using external language information
     * since that is obtained using an async XHR call.
     *  @type function
     *  @param {object} settings DataTables settings object
     *  @param {object} json The JSON object request from the server - only
     *    present if client-side Ajax sourced data is used
     *
     *  @dtopt Callbacks
     *  @name DataTable.defaults.initComplete
     *
     *  @example
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "initComplete": function(settings, json) {
     *          alert( 'DataTables has finished its initialisation.' );
     *        }
     *      } );
     *    } )
     */
    fnInitComplete: null,
    /**
     * Called at the very start of each table draw and can be used to cancel the
     * draw by returning false, any other return (including undefined) results in
     * the full draw occurring).
     *  @type function
     *  @param {object} settings DataTables settings object
     *  @returns {boolean} False will cancel the draw, anything else (including no
     *    return) will allow it to complete.
     *
     *  @dtopt Callbacks
     *  @name DataTable.defaults.preDrawCallback
     *
     *  @example
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "preDrawCallback": function( settings ) {
     *          if ( $('#test').val() == 1 ) {
     *            return false;
     *          }
     *        }
     *      } );
     *    } );
     */
    fnPreDrawCallback: null,
    /**
     * This function allows you to 'post process' each row after it have been
     * generated for each table draw, but before it is rendered on screen. This
     * function might be used for setting the row class name etc.
     *  @type function
     *  @param {node} row "TR" element for the current row
     *  @param {array} data Raw data array for this row
     *  @param {int} displayIndex The display index for the current table draw
     *  @param {int} displayIndexFull The index of the data in the full list of
     *    rows (after filtering)
     *
     *  @dtopt Callbacks
     *  @name DataTable.defaults.rowCallback
     *
     *  @example
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "rowCallback": function( row, data, displayIndex, displayIndexFull ) {
     *          // Bold the grade for all 'A' grade browsers
     *          if ( data[4] == "A" ) {
     *            $('td:eq(4)', row).html( '<b>A</b>' );
     *          }
     *        }
     *      } );
     *    } );
     */
    fnRowCallback: null,
    /**
     * __Deprecated__ The functionality provided by this parameter has now been
     * superseded by that provided through `ajax`, which should be used instead.
     *
     * This parameter allows you to override the default function which obtains
     * the data from the server so something more suitable for your application.
     * For example you could use POST data, or pull information from a Gears or
     * AIR database.
     *  @type function
     *  @member
     *  @param {string} source HTTP source to obtain the data from (`ajax`)
     *  @param {array} data A key/value pair object containing the data to send
     *    to the server
     *  @param {function} callback to be called on completion of the data get
     *    process that will draw the data on the page.
     *  @param {object} settings DataTables settings object
     *
     *  @dtopt Callbacks
     *  @dtopt Server-side
     *  @name DataTable.defaults.serverData
     *
     *  @deprecated 1.10. Please use `ajax` for this functionality now.
     */
    fnServerData: null,
    /**
     * __Deprecated__ The functionality provided by this parameter has now been
     * superseded by that provided through `ajax`, which should be used instead.
     *
     *  It is often useful to send extra data to the server when making an Ajax
     * request - for example custom filtering information, and this callback
     * function makes it trivial to send extra information to the server. The
     * passed in parameter is the data set that has been constructed by
     * DataTables, and you can add to this or modify it as you require.
     *  @type function
     *  @param {array} data Data array (array of objects which are name/value
     *    pairs) that has been constructed by DataTables and will be sent to the
     *    server. In the case of Ajax sourced data with server-side processing
     *    this will be an empty array, for server-side processing there will be a
     *    significant number of parameters!
     *  @returns {undefined} Ensure that you modify the data array passed in,
     *    as this is passed by reference.
     *
     *  @dtopt Callbacks
     *  @dtopt Server-side
     *  @name DataTable.defaults.serverParams
     *
     *  @deprecated 1.10. Please use `ajax` for this functionality now.
     */
    fnServerParams: null,
    /**
     * Load the table state. With this function you can define from where, and how, the
     * state of a table is loaded. By default DataTables will load from `localStorage`
     * but you might wish to use a server-side database or cookies.
     *  @type function
     *  @member
     *  @param {object} settings DataTables settings object
     *  @param {object} callback Callback that can be executed when done. It
     *    should be passed the loaded state object.
     *  @return {object} The DataTables state object to be loaded
     *
     *  @dtopt Callbacks
     *  @name DataTable.defaults.stateLoadCallback
     *
     *  @example
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "stateSave": true,
     *        "stateLoadCallback": function (settings, callback) {
     *          $.ajax( {
     *            "url": "/state_load",
     *            "dataType": "json",
     *            "success": function (json) {
     *              callback( json );
     *            }
     *          } );
     *        }
     *      } );
     *    } );
     */
    fnStateLoadCallback: function (e) {
      try {
        return JSON.parse(
          (-1 === e.iStateDuration ? sessionStorage : localStorage).getItem(
            "DataTables_" + e.sInstance + "_" + location.pathname
          )
        );
      } catch (e) {
        return {};
      }
    },
    /**
     * Callback which allows modification of the saved state prior to loading that state.
     * This callback is called when the table is loading state from the stored data, but
     * prior to the settings object being modified by the saved state. Note that for
     * plug-in authors, you should use the `stateLoadParams` event to load parameters for
     * a plug-in.
     *  @type function
     *  @param {object} settings DataTables settings object
     *  @param {object} data The state object that is to be loaded
     *
     *  @dtopt Callbacks
     *  @name DataTable.defaults.stateLoadParams
     *
     *  @example
     *    // Remove a saved filter, so filtering is never loaded
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "stateSave": true,
     *        "stateLoadParams": function (settings, data) {
     *          data.oSearch.sSearch = "";
     *        }
     *      } );
     *    } );
     *
     *  @example
     *    // Disallow state loading by returning false
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "stateSave": true,
     *        "stateLoadParams": function (settings, data) {
     *          return false;
     *        }
     *      } );
     *    } );
     */
    fnStateLoadParams: null,
    /**
     * Callback that is called when the state has been loaded from the state saving method
     * and the DataTables settings object has been modified as a result of the loaded state.
     *  @type function
     *  @param {object} settings DataTables settings object
     *  @param {object} data The state object that was loaded
     *
     *  @dtopt Callbacks
     *  @name DataTable.defaults.stateLoaded
     *
     *  @example
     *    // Show an alert with the filtering value that was saved
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "stateSave": true,
     *        "stateLoaded": function (settings, data) {
     *          alert( 'Saved filter was: '+data.oSearch.sSearch );
     *        }
     *      } );
     *    } );
     */
    fnStateLoaded: null,
    /**
     * Save the table state. This function allows you to define where and how the state
     * information for the table is stored By default DataTables will use `localStorage`
     * but you might wish to use a server-side database or cookies.
     *  @type function
     *  @member
     *  @param {object} settings DataTables settings object
     *  @param {object} data The state object to be saved
     *
     *  @dtopt Callbacks
     *  @name DataTable.defaults.stateSaveCallback
     *
     *  @example
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "stateSave": true,
     *        "stateSaveCallback": function (settings, data) {
     *          // Send an Ajax request to the server with the state object
     *          $.ajax( {
     *            "url": "/state_save",
     *            "data": data,
     *            "dataType": "json",
     *            "method": "POST"
     *            "success": function () {}
     *          } );
     *        }
     *      } );
     *    } );
     */
    fnStateSaveCallback: function (e, t) {
      try {
        (-1 === e.iStateDuration ? sessionStorage : localStorage).setItem(
          "DataTables_" + e.sInstance + "_" + location.pathname,
          JSON.stringify(t)
        );
      } catch (e) {}
    },
    /**
     * Callback which allows modification of the state to be saved. Called when the table
     * has changed state a new state save is required. This method allows modification of
     * the state saving object prior to actually doing the save, including addition or
     * other state properties or modification. Note that for plug-in authors, you should
     * use the `stateSaveParams` event to save parameters for a plug-in.
     *  @type function
     *  @param {object} settings DataTables settings object
     *  @param {object} data The state object to be saved
     *
     *  @dtopt Callbacks
     *  @name DataTable.defaults.stateSaveParams
     *
     *  @example
     *    // Remove a saved filter, so filtering is never saved
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "stateSave": true,
     *        "stateSaveParams": function (settings, data) {
     *          data.oSearch.sSearch = "";
     *        }
     *      } );
     *    } );
     */
    fnStateSaveParams: null,
    /**
     * Duration for which the saved state information is considered valid. After this period
     * has elapsed the state will be returned to the default.
     * Value is given in seconds.
     *  @type int
     *  @default 7200 <i>(2 hours)</i>
     *
     *  @dtopt Options
     *  @name DataTable.defaults.stateDuration
     *
     *  @example
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "stateDuration": 60*60*24; // 1 day
     *      } );
     *    } )
     */
    iStateDuration: 7200,
    /**
     * When enabled DataTables will not make a request to the server for the first
     * page draw - rather it will use the data already on the page (no sorting etc
     * will be applied to it), thus saving on an XHR at load time. `deferLoading`
     * is used to indicate that deferred loading is required, but it is also used
     * to tell DataTables how many records there are in the full table (allowing
     * the information element and pagination to be displayed correctly). In the case
     * where a filtering is applied to the table on initial load, this can be
     * indicated by giving the parameter as an array, where the first element is
     * the number of records available after filtering and the second element is the
     * number of records without filtering (allowing the table information element
     * to be shown correctly).
     *  @type int | array
     *  @default null
     *
     *  @dtopt Options
     *  @name DataTable.defaults.deferLoading
     *
     *  @example
     *    // 57 records available in the table, no filtering applied
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "serverSide": true,
     *        "ajax": "scripts/server_processing.php",
     *        "deferLoading": 57
     *      } );
     *    } );
     *
     *  @example
     *    // 57 records after filtering, 100 without filtering (an initial filter applied)
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "serverSide": true,
     *        "ajax": "scripts/server_processing.php",
     *        "deferLoading": [ 57, 100 ],
     *        "search": {
     *          "search": "my_filter"
     *        }
     *      } );
     *    } );
     */
    iDeferLoading: null,
    /**
     * Number of rows to display on a single page when using pagination. If
     * feature enabled (`lengthChange`) then the end user will be able to override
     * this to a custom setting using a pop-up menu.
     *  @type int
     *  @default 10
     *
     *  @dtopt Options
     *  @name DataTable.defaults.pageLength
     *
     *  @example
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "pageLength": 50
     *      } );
     *    } )
     */
    iDisplayLength: 10,
    /**
     * Define the starting point for data display when using DataTables with
     * pagination. Note that this parameter is the number of records, rather than
     * the page number, so if you have 10 records per page and want to start on
     * the third page, it should be "20".
     *  @type int
     *  @default 0
     *
     *  @dtopt Options
     *  @name DataTable.defaults.displayStart
     *
     *  @example
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "displayStart": 20
     *      } );
     *    } )
     */
    iDisplayStart: 0,
    /**
     * By default DataTables allows keyboard navigation of the table (sorting, paging,
     * and filtering) by adding a `tabindex` attribute to the required elements. This
     * allows you to tab through the controls and press the enter key to activate them.
     * The tabindex is default 0, meaning that the tab follows the flow of the document.
     * You can overrule this using this parameter if you wish. Use a value of -1 to
     * disable built-in keyboard navigation.
     *  @type int
     *  @default 0
     *
     *  @dtopt Options
     *  @name DataTable.defaults.tabIndex
     *
     *  @example
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "tabIndex": 1
     *      } );
     *    } );
     */
    iTabIndex: 0,
    oClasses: {},
    oLanguage: {
      oAria: {
        /**
         * ARIA label that is added to the table headers when the column may be
         * sorted ascending by activing the column (click or return when focused).
         * Note that the column header is prefixed to this string.
         *  @type string
         *  @default : activate to sort column ascending
         *
         *  @dtopt Language
         *  @name DataTable.defaults.language.aria.sortAscending
         *
         *  @example
         *    $(document).ready( function() {
         *      $('#example').dataTable( {
         *        "language": {
         *          "aria": {
         *            "sortAscending": " - click/return to sort ascending"
         *          }
         *        }
         *      } );
         *    } );
         */
        sSortAscending: ": activate to sort column ascending",
        /**
         * ARIA label that is added to the table headers when the column may be
         * sorted descending by activing the column (click or return when focused).
         * Note that the column header is prefixed to this string.
         *  @type string
         *  @default : activate to sort column ascending
         *
         *  @dtopt Language
         *  @name DataTable.defaults.language.aria.sortDescending
         *
         *  @example
         *    $(document).ready( function() {
         *      $('#example').dataTable( {
         *        "language": {
         *          "aria": {
         *            "sortDescending": " - click/return to sort descending"
         *          }
         *        }
         *      } );
         *    } );
         */
        sSortDescending: ": activate to sort column descending",
      },
      oPaginate: {
        /**
         * Text to use when using the 'full_numbers' type of pagination for the
         * button to take the user to the first page.
         *  @type string
         *  @default First
         *
         *  @dtopt Language
         *  @name DataTable.defaults.language.paginate.first
         *
         *  @example
         *    $(document).ready( function() {
         *      $('#example').dataTable( {
         *        "language": {
         *          "paginate": {
         *            "first": "First page"
         *          }
         *        }
         *      } );
         *    } );
         */
        sFirst: "First",
        /**
         * Text to use when using the 'full_numbers' type of pagination for the
         * button to take the user to the last page.
         *  @type string
         *  @default Last
         *
         *  @dtopt Language
         *  @name DataTable.defaults.language.paginate.last
         *
         *  @example
         *    $(document).ready( function() {
         *      $('#example').dataTable( {
         *        "language": {
         *          "paginate": {
         *            "last": "Last page"
         *          }
         *        }
         *      } );
         *    } );
         */
        sLast: "Last",
        /**
         * Text to use for the 'next' pagination button (to take the user to the
         * next page).
         *  @type string
         *  @default Next
         *
         *  @dtopt Language
         *  @name DataTable.defaults.language.paginate.next
         *
         *  @example
         *    $(document).ready( function() {
         *      $('#example').dataTable( {
         *        "language": {
         *          "paginate": {
         *            "next": "Next page"
         *          }
         *        }
         *      } );
         *    } );
         */
        sNext: "Next",
        /**
         * Text to use for the 'previous' pagination button (to take the user to
         * the previous page).
         *  @type string
         *  @default Previous
         *
         *  @dtopt Language
         *  @name DataTable.defaults.language.paginate.previous
         *
         *  @example
         *    $(document).ready( function() {
         *      $('#example').dataTable( {
         *        "language": {
         *          "paginate": {
         *            "previous": "Previous page"
         *          }
         *        }
         *      } );
         *    } );
         */
        sPrevious: "Previous",
      },
      /**
       * This string is shown in preference to `zeroRecords` when the table is
       * empty of data (regardless of filtering). Note that this is an optional
       * parameter - if it is not given, the value of `zeroRecords` will be used
       * instead (either the default or given value).
       *  @type string
       *  @default No data available in table
       *
       *  @dtopt Language
       *  @name DataTable.defaults.language.emptyTable
       *
       *  @example
       *    $(document).ready( function() {
       *      $('#example').dataTable( {
       *        "language": {
       *          "emptyTable": "No data available in table"
       *        }
       *      } );
       *    } );
       */
      sEmptyTable: "No data available in table",
      /**
       * This string gives information to the end user about the information
       * that is current on display on the page. The following tokens can be
       * used in the string and will be dynamically replaced as the table
       * display updates. This tokens can be placed anywhere in the string, or
       * removed as needed by the language requires:
       *
       * * `\_START\_` - Display index of the first record on the current page
       * * `\_END\_` - Display index of the last record on the current page
       * * `\_TOTAL\_` - Number of records in the table after filtering
       * * `\_MAX\_` - Number of records in the table without filtering
       * * `\_PAGE\_` - Current page number
       * * `\_PAGES\_` - Total number of pages of data in the table
       *
       *  @type string
       *  @default Showing _START_ to _END_ of _TOTAL_ entries
       *
       *  @dtopt Language
       *  @name DataTable.defaults.language.info
       *
       *  @example
       *    $(document).ready( function() {
       *      $('#example').dataTable( {
       *        "language": {
       *          "info": "Showing page _PAGE_ of _PAGES_"
       *        }
       *      } );
       *    } );
       */
      sInfo: "Showing _START_ to _END_ of _TOTAL_ entries",
      /**
       * Display information string for when the table is empty. Typically the
       * format of this string should match `info`.
       *  @type string
       *  @default Showing 0 to 0 of 0 entries
       *
       *  @dtopt Language
       *  @name DataTable.defaults.language.infoEmpty
       *
       *  @example
       *    $(document).ready( function() {
       *      $('#example').dataTable( {
       *        "language": {
       *          "infoEmpty": "No entries to show"
       *        }
       *      } );
       *    } );
       */
      sInfoEmpty: "Showing 0 to 0 of 0 entries",
      /**
       * When a user filters the information in a table, this string is appended
       * to the information (`info`) to give an idea of how strong the filtering
       * is. The variable _MAX_ is dynamically updated.
       *  @type string
       *  @default (filtered from _MAX_ total entries)
       *
       *  @dtopt Language
       *  @name DataTable.defaults.language.infoFiltered
       *
       *  @example
       *    $(document).ready( function() {
       *      $('#example').dataTable( {
       *        "language": {
       *          "infoFiltered": " - filtering from _MAX_ records"
       *        }
       *      } );
       *    } );
       */
      sInfoFiltered: "(filtered from _MAX_ total entries)",
      /**
       * If can be useful to append extra information to the info string at times,
       * and this variable does exactly that. This information will be appended to
       * the `info` (`infoEmpty` and `infoFiltered` in whatever combination they are
       * being used) at all times.
       *  @type string
       *  @default <i>Empty string</i>
       *
       *  @dtopt Language
       *  @name DataTable.defaults.language.infoPostFix
       *
       *  @example
       *    $(document).ready( function() {
       *      $('#example').dataTable( {
       *        "language": {
       *          "infoPostFix": "All records shown are derived from real information."
       *        }
       *      } );
       *    } );
       */
      sInfoPostFix: "",
      /**
       * This decimal place operator is a little different from the other
       * language options since DataTables doesn't output floating point
       * numbers, so it won't ever use this for display of a number. Rather,
       * what this parameter does is modify the sort methods of the table so
       * that numbers which are in a format which has a character other than
       * a period (`.`) as a decimal place will be sorted numerically.
       *
       * Note that numbers with different decimal places cannot be shown in
       * the same table and still be sortable, the table must be consistent.
       * However, multiple different tables on the page can use different
       * decimal place characters.
       *  @type string
       *  @default
       *
       *  @dtopt Language
       *  @name DataTable.defaults.language.decimal
       *
       *  @example
       *    $(document).ready( function() {
       *      $('#example').dataTable( {
       *        "language": {
       *          "decimal": ","
       *          "thousands": "."
       *        }
       *      } );
       *    } );
       */
      sDecimal: "",
      /**
       * DataTables has a build in number formatter (`formatNumber`) which is
       * used to format large numbers that are used in the table information.
       * By default a comma is used, but this can be trivially changed to any
       * character you wish with this parameter.
       *  @type string
       *  @default ,
       *
       *  @dtopt Language
       *  @name DataTable.defaults.language.thousands
       *
       *  @example
       *    $(document).ready( function() {
       *      $('#example').dataTable( {
       *        "language": {
       *          "thousands": "'"
       *        }
       *      } );
       *    } );
       */
      sThousands: ",",
      /**
       * Detail the action that will be taken when the drop down menu for the
       * pagination length option is changed. The '_MENU_' variable is replaced
       * with a default select list of 10, 25, 50 and 100, and can be replaced
       * with a custom select box if required.
       *  @type string
       *  @default Show _MENU_ entries
       *
       *  @dtopt Language
       *  @name DataTable.defaults.language.lengthMenu
       *
       *  @example
       *    // Language change only
       *    $(document).ready( function() {
       *      $('#example').dataTable( {
       *        "language": {
       *          "lengthMenu": "Display _MENU_ records"
       *        }
       *      } );
       *    } );
       *
       *  @example
       *    // Language and options change
       *    $(document).ready( function() {
       *      $('#example').dataTable( {
       *        "language": {
       *          "lengthMenu": 'Display <select>'+
       *            '<option value="10">10</option>'+
       *            '<option value="20">20</option>'+
       *            '<option value="30">30</option>'+
       *            '<option value="40">40</option>'+
       *            '<option value="50">50</option>'+
       *            '<option value="-1">All</option>'+
       *            '</select> records'
       *        }
       *      } );
       *    } );
       */
      sLengthMenu: "Show _MENU_ entries",
      /**
       * When using Ajax sourced data and during the first draw when DataTables is
       * gathering the data, this message is shown in an empty row in the table to
       * indicate to the end user the the data is being loaded. Note that this
       * parameter is not used when loading data by server-side processing, just
       * Ajax sourced data with client-side processing.
       *  @type string
       *  @default Loading...
       *
       *  @dtopt Language
       *  @name DataTable.defaults.language.loadingRecords
       *
       *  @example
       *    $(document).ready( function() {
       *      $('#example').dataTable( {
       *        "language": {
       *          "loadingRecords": "Please wait - loading..."
       *        }
       *      } );
       *    } );
       */
      sLoadingRecords: "Loading...",
      /**
       * Text which is displayed when the table is processing a user action
       * (usually a sort command or similar).
       *  @type string
       *  @default Processing...
       *
       *  @dtopt Language
       *  @name DataTable.defaults.language.processing
       *
       *  @example
       *    $(document).ready( function() {
       *      $('#example').dataTable( {
       *        "language": {
       *          "processing": "DataTables is currently busy"
       *        }
       *      } );
       *    } );
       */
      sProcessing: "Processing...",
      /**
       * Details the actions that will be taken when the user types into the
       * filtering input text box. The variable "_INPUT_", if used in the string,
       * is replaced with the HTML text box for the filtering input allowing
       * control over where it appears in the string. If "_INPUT_" is not given
       * then the input box is appended to the string automatically.
       *  @type string
       *  @default Search:
       *
       *  @dtopt Language
       *  @name DataTable.defaults.language.search
       *
       *  @example
       *    // Input text box will be appended at the end automatically
       *    $(document).ready( function() {
       *      $('#example').dataTable( {
       *        "language": {
       *          "search": "Filter records:"
       *        }
       *      } );
       *    } );
       *
       *  @example
       *    // Specify where the filter should appear
       *    $(document).ready( function() {
       *      $('#example').dataTable( {
       *        "language": {
       *          "search": "Apply filter _INPUT_ to table"
       *        }
       *      } );
       *    } );
       */
      sSearch: "Search:",
      /**
       * Assign a `placeholder` attribute to the search `input` element
       *  @type string
       *  @default
       *
       *  @dtopt Language
       *  @name DataTable.defaults.language.searchPlaceholder
       */
      sSearchPlaceholder: "",
      /**
       * All of the language information can be stored in a file on the
       * server-side, which DataTables will look up if this parameter is passed.
       * It must store the URL of the language file, which is in a JSON format,
       * and the object has the same properties as the oLanguage object in the
       * initialiser object (i.e. the above parameters). Please refer to one of
       * the example language files to see how this works in action.
       *  @type string
       *  @default <i>Empty string - i.e. disabled</i>
       *
       *  @dtopt Language
       *  @name DataTable.defaults.language.url
       *
       *  @example
       *    $(document).ready( function() {
       *      $('#example').dataTable( {
       *        "language": {
       *          "url": "http://www.sprymedia.co.uk/dataTables/lang.txt"
       *        }
       *      } );
       *    } );
       */
      sUrl: "",
      /**
       * Text shown inside the table records when the is no information to be
       * displayed after filtering. `emptyTable` is shown when there is simply no
       * information in the table at all (regardless of filtering).
       *  @type string
       *  @default No matching records found
       *
       *  @dtopt Language
       *  @name DataTable.defaults.language.zeroRecords
       *
       *  @example
       *    $(document).ready( function() {
       *      $('#example').dataTable( {
       *        "language": {
       *          "zeroRecords": "No records to display"
       *        }
       *      } );
       *    } );
       */
      sZeroRecords: "No matching records found",
    },
    oSearch: e.extend({}, DataTable.models.oSearch),
    /**
     * __Deprecated__ The functionality provided by this parameter has now been
     * superseded by that provided through `ajax`, which should be used instead.
     *
     * By default DataTables will look for the property `data` (or `aaData` for
     * compatibility with DataTables 1.9-) when obtaining data from an Ajax
     * source or for server-side processing - this parameter allows that
     * property to be changed. You can use Javascript dotted object notation to
     * get a data source for multiple levels of nesting.
     *  @type string
     *  @default data
     *
     *  @dtopt Options
     *  @dtopt Server-side
     *  @name DataTable.defaults.ajaxDataProp
     *
     *  @deprecated 1.10. Please use `ajax` for this functionality now.
     */
    sAjaxDataProp: "data",
    /**
     * __Deprecated__ The functionality provided by this parameter has now been
     * superseded by that provided through `ajax`, which should be used instead.
     *
     * You can instruct DataTables to load data from an external
     * source using this parameter (use aData if you want to pass data in you
     * already have). Simply provide a url a JSON object can be obtained from.
     *  @type string
     *  @default null
     *
     *  @dtopt Options
     *  @dtopt Server-side
     *  @name DataTable.defaults.ajaxSource
     *
     *  @deprecated 1.10. Please use `ajax` for this functionality now.
     */
    sAjaxSource: null,
    /**
     * This initialisation variable allows you to specify exactly where in the
     * DOM you want DataTables to inject the various controls it adds to the page
     * (for example you might want the pagination controls at the top of the
     * table). DIV elements (with or without a custom class) can also be added to
     * aid styling. The follow syntax is used:
     *   <ul>
     *     <li>The following options are allowed:
     *       <ul>
     *         <li>'l' - Length changing</li>
     *         <li>'f' - Filtering input</li>
     *         <li>'t' - The table!</li>
     *         <li>'i' - Information</li>
     *         <li>'p' - Pagination</li>
     *         <li>'r' - pRocessing</li>
     *       </ul>
     *     </li>
     *     <li>The following constants are allowed:
     *       <ul>
     *         <li>'H' - jQueryUI theme "header" classes ('fg-toolbar ui-widget-header ui-corner-tl ui-corner-tr ui-helper-clearfix')</li>
     *         <li>'F' - jQueryUI theme "footer" classes ('fg-toolbar ui-widget-header ui-corner-bl ui-corner-br ui-helper-clearfix')</li>
     *       </ul>
     *     </li>
     *     <li>The following syntax is expected:
     *       <ul>
     *         <li>'&lt;' and '&gt;' - div elements</li>
     *         <li>'&lt;"class" and '&gt;' - div with a class</li>
     *         <li>'&lt;"#id" and '&gt;' - div with an ID</li>
     *       </ul>
     *     </li>
     *     <li>Examples:
     *       <ul>
     *         <li>'&lt;"wrapper"flipt&gt;'</li>
     *         <li>'&lt;lf&lt;t&gt;ip&gt;'</li>
     *       </ul>
     *     </li>
     *   </ul>
     *  @type string
     *  @default lfrtip <i>(when `jQueryUI` is false)</i> <b>or</b>
     *    <"H"lfr>t<"F"ip> <i>(when `jQueryUI` is true)</i>
     *
     *  @dtopt Options
     *  @name DataTable.defaults.dom
     *
     *  @example
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "dom": '&lt;"top"i&gt;rt&lt;"bottom"flp&gt;&lt;"clear"&gt;'
     *      } );
     *    } );
     */
    sDom: "lfrtip",
    /**
     * Search delay option. This will throttle full table searches that use the
     * DataTables provided search input element (it does not effect calls to
     * `dt-api search()`, providing a delay before the search is made.
     *  @type integer
     *  @default 0
     *
     *  @dtopt Options
     *  @name DataTable.defaults.searchDelay
     *
     *  @example
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "searchDelay": 200
     *      } );
     *    } )
     */
    searchDelay: null,
    /**
     * DataTables features six different built-in options for the buttons to
     * display for pagination control:
     *
     * * `numbers` - Page number buttons only
     * * `simple` - 'Previous' and 'Next' buttons only
     * * 'simple_numbers` - 'Previous' and 'Next' buttons, plus page numbers
     * * `full` - 'First', 'Previous', 'Next' and 'Last' buttons
     * * `full_numbers` - 'First', 'Previous', 'Next' and 'Last' buttons, plus page numbers
     * * `first_last_numbers` - 'First' and 'Last' buttons, plus page numbers
     *
     * Further methods can be added using {@link DataTable.ext.oPagination}.
     *  @type string
     *  @default simple_numbers
     *
     *  @dtopt Options
     *  @name DataTable.defaults.pagingType
     *
     *  @example
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "pagingType": "full_numbers"
     *      } );
     *    } )
     */
    sPaginationType: "simple_numbers",
    /**
     * Enable horizontal scrolling. When a table is too wide to fit into a
     * certain layout, or you have a large number of columns in the table, you
     * can enable x-scrolling to show the table in a viewport, which can be
     * scrolled. This property can be `true` which will allow the table to
     * scroll horizontally when needed, or any CSS unit, or a number (in which
     * case it will be treated as a pixel measurement). Setting as simply `true`
     * is recommended.
     *  @type boolean|string
     *  @default <i>blank string - i.e. disabled</i>
     *
     *  @dtopt Features
     *  @name DataTable.defaults.scrollX
     *
     *  @example
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "scrollX": true,
     *        "scrollCollapse": true
     *      } );
     *    } );
     */
    sScrollX: "",
    /**
     * This property can be used to force a DataTable to use more width than it
     * might otherwise do when x-scrolling is enabled. For example if you have a
     * table which requires to be well spaced, this parameter is useful for
     * "over-sizing" the table, and thus forcing scrolling. This property can by
     * any CSS unit, or a number (in which case it will be treated as a pixel
     * measurement).
     *  @type string
     *  @default <i>blank string - i.e. disabled</i>
     *
     *  @dtopt Options
     *  @name DataTable.defaults.scrollXInner
     *
     *  @example
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "scrollX": "100%",
     *        "scrollXInner": "110%"
     *      } );
     *    } );
     */
    sScrollXInner: "",
    /**
     * Enable vertical scrolling. Vertical scrolling will constrain the DataTable
     * to the given height, and enable scrolling for any data which overflows the
     * current viewport. This can be used as an alternative to paging to display
     * a lot of data in a small area (although paging and scrolling can both be
     * enabled at the same time). This property can be any CSS unit, or a number
     * (in which case it will be treated as a pixel measurement).
     *  @type string
     *  @default <i>blank string - i.e. disabled</i>
     *
     *  @dtopt Features
     *  @name DataTable.defaults.scrollY
     *
     *  @example
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "scrollY": "200px",
     *        "paginate": false
     *      } );
     *    } );
     */
    sScrollY: "",
    /**
     * __Deprecated__ The functionality provided by this parameter has now been
     * superseded by that provided through `ajax`, which should be used instead.
     *
     * Set the HTTP method that is used to make the Ajax call for server-side
     * processing or Ajax sourced data.
     *  @type string
     *  @default GET
     *
     *  @dtopt Options
     *  @dtopt Server-side
     *  @name DataTable.defaults.serverMethod
     *
     *  @deprecated 1.10. Please use `ajax` for this functionality now.
     */
    sServerMethod: "GET",
    /**
     * DataTables makes use of renderers when displaying HTML elements for
     * a table. These renderers can be added or modified by plug-ins to
     * generate suitable mark-up for a site. For example the Bootstrap
     * integration plug-in for DataTables uses a paging button renderer to
     * display pagination buttons in the mark-up required by Bootstrap.
     *
     * For further information about the renderers available see
     * DataTable.ext.renderer
     *  @type string|object
     *  @default null
     *
     *  @name DataTable.defaults.renderer
     *
     */
    renderer: null,
    /**
     * Set the data property name that DataTables should use to get a row's id
     * to set as the `id` property in the node.
     *  @type string
     *  @default DT_RowId
     *
     *  @name DataTable.defaults.rowId
     */
    rowId: "DT_RowId",
  };
  _fnHungarianMap(DataTable.defaults);
  DataTable.defaults.column = {
    /**
     * Define which column(s) an order will occur on for this column. This
     * allows a column's ordering to take multiple columns into account when
     * doing a sort or use the data from a different column. For example first
     * name / last name columns make sense to do a multi-column sort over the
     * two columns.
     *  @type array|int
     *  @default null <i>Takes the value of the column index automatically</i>
     *
     *  @name DataTable.defaults.column.orderData
     *  @dtopt Columns
     *
     *  @example
     *    // Using `columnDefs`
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "columnDefs": [
     *          { "orderData": [ 0, 1 ], "targets": [ 0 ] },
     *          { "orderData": [ 1, 0 ], "targets": [ 1 ] },
     *          { "orderData": 2, "targets": [ 2 ] }
     *        ]
     *      } );
     *    } );
     *
     *  @example
     *    // Using `columns`
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "columns": [
     *          { "orderData": [ 0, 1 ] },
     *          { "orderData": [ 1, 0 ] },
     *          { "orderData": 2 },
     *          null,
     *          null
     *        ]
     *      } );
     *    } );
     */
    aDataSort: null,
    iDataSort: -1,
    /**
     * You can control the default ordering direction, and even alter the
     * behaviour of the sort handler (i.e. only allow ascending ordering etc)
     * using this parameter.
     *  @type array
     *  @default [ 'asc', 'desc' ]
     *
     *  @name DataTable.defaults.column.orderSequence
     *  @dtopt Columns
     *
     *  @example
     *    // Using `columnDefs`
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "columnDefs": [
     *          { "orderSequence": [ "asc" ], "targets": [ 1 ] },
     *          { "orderSequence": [ "desc", "asc", "asc" ], "targets": [ 2 ] },
     *          { "orderSequence": [ "desc" ], "targets": [ 3 ] }
     *        ]
     *      } );
     *    } );
     *
     *  @example
     *    // Using `columns`
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "columns": [
     *          null,
     *          { "orderSequence": [ "asc" ] },
     *          { "orderSequence": [ "desc", "asc", "asc" ] },
     *          { "orderSequence": [ "desc" ] },
     *          null
     *        ]
     *      } );
     *    } );
     */
    asSorting: ["asc", "desc"],
    /**
     * Enable or disable filtering on the data in this column.
     *  @type boolean
     *  @default true
     *
     *  @name DataTable.defaults.column.searchable
     *  @dtopt Columns
     *
     *  @example
     *    // Using `columnDefs`
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "columnDefs": [
     *          { "searchable": false, "targets": [ 0 ] }
     *        ] } );
     *    } );
     *
     *  @example
     *    // Using `columns`
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "columns": [
     *          { "searchable": false },
     *          null,
     *          null,
     *          null,
     *          null
     *        ] } );
     *    } );
     */
    bSearchable: true,
    /**
     * Enable or disable ordering on this column.
     *  @type boolean
     *  @default true
     *
     *  @name DataTable.defaults.column.orderable
     *  @dtopt Columns
     *
     *  @example
     *    // Using `columnDefs`
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "columnDefs": [
     *          { "orderable": false, "targets": [ 0 ] }
     *        ] } );
     *    } );
     *
     *  @example
     *    // Using `columns`
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "columns": [
     *          { "orderable": false },
     *          null,
     *          null,
     *          null,
     *          null
     *        ] } );
     *    } );
     */
    bSortable: true,
    /**
     * Enable or disable the display of this column.
     *  @type boolean
     *  @default true
     *
     *  @name DataTable.defaults.column.visible
     *  @dtopt Columns
     *
     *  @example
     *    // Using `columnDefs`
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "columnDefs": [
     *          { "visible": false, "targets": [ 0 ] }
     *        ] } );
     *    } );
     *
     *  @example
     *    // Using `columns`
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "columns": [
     *          { "visible": false },
     *          null,
     *          null,
     *          null,
     *          null
     *        ] } );
     *    } );
     */
    bVisible: true,
    /**
     * Developer definable function that is called whenever a cell is created (Ajax source,
     * etc) or processed for input (DOM source). This can be used as a compliment to mRender
     * allowing you to modify the DOM element (add background colour for example) when the
     * element is available.
     *  @type function
     *  @param {element} td The TD node that has been created
     *  @param {*} cellData The Data for the cell
     *  @param {array|object} rowData The data for the whole row
     *  @param {int} row The row index for the aoData data store
     *  @param {int} col The column index for aoColumns
     *
     *  @name DataTable.defaults.column.createdCell
     *  @dtopt Columns
     *
     *  @example
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "columnDefs": [ {
     *          "targets": [3],
     *          "createdCell": function (td, cellData, rowData, row, col) {
     *            if ( cellData == "1.7" ) {
     *              $(td).css('color', 'blue')
     *            }
     *          }
     *        } ]
     *      });
     *    } );
     */
    fnCreatedCell: null,
    /**
     * This property can be used to read data from any data source property,
     * including deeply nested objects / properties. `data` can be given in a
     * number of different ways which effect its behaviour:
     *
     * * `integer` - treated as an array index for the data source. This is the
     *   default that DataTables uses (incrementally increased for each column).
     * * `string` - read an object property from the data source. There are
     *   three 'special' options that can be used in the string to alter how
     *   DataTables reads the data from the source object:
     *    * `.` - Dotted Javascript notation. Just as you use a `.` in
     *      Javascript to read from nested objects, so to can the options
     *      specified in `data`. For example: `browser.version` or
     *      `browser.name`. If your object parameter name contains a period, use
     *      `\\` to escape it - i.e. `first\\.name`.
     *    * `[]` - Array notation. DataTables can automatically combine data
     *      from and array source, joining the data with the characters provided
     *      between the two brackets. For example: `name[, ]` would provide a
     *      comma-space separated list from the source array. If no characters
     *      are provided between the brackets, the original array source is
     *      returned.
     *    * `()` - Function notation. Adding `()` to the end of a parameter will
     *      execute a function of the name given. For example: `browser()` for a
     *      simple function on the data source, `browser.version()` for a
     *      function in a nested property or even `browser().version` to get an
     *      object property if the function called returns an object. Note that
     *      function notation is recommended for use in `render` rather than
     *      `data` as it is much simpler to use as a renderer.
     * * `null` - use the original data source for the row rather than plucking
     *   data directly from it. This action has effects on two other
     *   initialisation options:
     *    * `defaultContent` - When null is given as the `data` option and
     *      `defaultContent` is specified for the column, the value defined by
     *      `defaultContent` will be used for the cell.
     *    * `render` - When null is used for the `data` option and the `render`
     *      option is specified for the column, the whole data source for the
     *      row is used for the renderer.
     * * `function` - the function given will be executed whenever DataTables
     *   needs to set or get the data for a cell in the column. The function
     *   takes three parameters:
     *    * Parameters:
     *      * `{array|object}` The data source for the row
     *      * `{string}` The type call data requested - this will be 'set' when
     *        setting data or 'filter', 'display', 'type', 'sort' or undefined
     *        when gathering data. Note that when `undefined` is given for the
     *        type DataTables expects to get the raw data for the object back<
     *      * `{*}` Data to set when the second parameter is 'set'.
     *    * Return:
     *      * The return value from the function is not required when 'set' is
     *        the type of call, but otherwise the return is what will be used
     *        for the data requested.
     *
     * Note that `data` is a getter and setter option. If you just require
     * formatting of data for output, you will likely want to use `render` which
     * is simply a getter and thus simpler to use.
     *
     * Note that prior to DataTables 1.9.2 `data` was called `mDataProp`. The
     * name change reflects the flexibility of this property and is consistent
     * with the naming of mRender. If 'mDataProp' is given, then it will still
     * be used by DataTables, as it automatically maps the old name to the new
     * if required.
     *
     *  @type string|int|function|null
     *  @default null <i>Use automatically calculated column index</i>
     *
     *  @name DataTable.defaults.column.data
     *  @dtopt Columns
     *
     *  @example
     *    // Read table data from objects
     *    // JSON structure for each row:
     *    //   {
     *    //      "engine": {value},
     *    //      "browser": {value},
     *    //      "platform": {value},
     *    //      "version": {value},
     *    //      "grade": {value}
     *    //   }
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "ajaxSource": "sources/objects.txt",
     *        "columns": [
     *          { "data": "engine" },
     *          { "data": "browser" },
     *          { "data": "platform" },
     *          { "data": "version" },
     *          { "data": "grade" }
     *        ]
     *      } );
     *    } );
     *
     *  @example
     *    // Read information from deeply nested objects
     *    // JSON structure for each row:
     *    //   {
     *    //      "engine": {value},
     *    //      "browser": {value},
     *    //      "platform": {
     *    //         "inner": {value}
     *    //      },
     *    //      "details": [
     *    //         {value}, {value}
     *    //      ]
     *    //   }
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "ajaxSource": "sources/deep.txt",
     *        "columns": [
     *          { "data": "engine" },
     *          { "data": "browser" },
     *          { "data": "platform.inner" },
     *          { "data": "details.0" },
     *          { "data": "details.1" }
     *        ]
     *      } );
     *    } );
     *
     *  @example
     *    // Using `data` as a function to provide different information for
     *    // sorting, filtering and display. In this case, currency (price)
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "columnDefs": [ {
     *          "targets": [ 0 ],
     *          "data": function ( source, type, val ) {
     *            if (type === 'set') {
     *              source.price = val;
     *              // Store the computed display and filter values for efficiency
     *              source.price_display = val=="" ? "" : "$"+numberFormat(val);
     *              source.price_filter  = val=="" ? "" : "$"+numberFormat(val)+" "+val;
     *              return;
     *            }
     *            else if (type === 'display') {
     *              return source.price_display;
     *            }
     *            else if (type === 'filter') {
     *              return source.price_filter;
     *            }
     *            // 'sort', 'type' and undefined all just use the integer
     *            return source.price;
     *          }
     *        } ]
     *      } );
     *    } );
     *
     *  @example
     *    // Using default content
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "columnDefs": [ {
     *          "targets": [ 0 ],
     *          "data": null,
     *          "defaultContent": "Click to edit"
     *        } ]
     *      } );
     *    } );
     *
     *  @example
     *    // Using array notation - outputting a list from an array
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "columnDefs": [ {
     *          "targets": [ 0 ],
     *          "data": "name[, ]"
     *        } ]
     *      } );
     *    } );
     *
     */
    mData: null,
    /**
     * This property is the rendering partner to `data` and it is suggested that
     * when you want to manipulate data for display (including filtering,
     * sorting etc) without altering the underlying data for the table, use this
     * property. `render` can be considered to be the the read only companion to
     * `data` which is read / write (then as such more complex). Like `data`
     * this option can be given in a number of different ways to effect its
     * behaviour:
     *
     * * `integer` - treated as an array index for the data source. This is the
     *   default that DataTables uses (incrementally increased for each column).
     * * `string` - read an object property from the data source. There are
     *   three 'special' options that can be used in the string to alter how
     *   DataTables reads the data from the source object:
     *    * `.` - Dotted Javascript notation. Just as you use a `.` in
     *      Javascript to read from nested objects, so to can the options
     *      specified in `data`. For example: `browser.version` or
     *      `browser.name`. If your object parameter name contains a period, use
     *      `\\` to escape it - i.e. `first\\.name`.
     *    * `[]` - Array notation. DataTables can automatically combine data
     *      from and array source, joining the data with the characters provided
     *      between the two brackets. For example: `name[, ]` would provide a
     *      comma-space separated list from the source array. If no characters
     *      are provided between the brackets, the original array source is
     *      returned.
     *    * `()` - Function notation. Adding `()` to the end of a parameter will
     *      execute a function of the name given. For example: `browser()` for a
     *      simple function on the data source, `browser.version()` for a
     *      function in a nested property or even `browser().version` to get an
     *      object property if the function called returns an object.
     * * `object` - use different data for the different data types requested by
     *   DataTables ('filter', 'display', 'type' or 'sort'). The property names
     *   of the object is the data type the property refers to and the value can
     *   defined using an integer, string or function using the same rules as
     *   `render` normally does. Note that an `_` option _must_ be specified.
     *   This is the default value to use if you haven't specified a value for
     *   the data type requested by DataTables.
     * * `function` - the function given will be executed whenever DataTables
     *   needs to set or get the data for a cell in the column. The function
     *   takes three parameters:
     *    * Parameters:
     *      * {array|object} The data source for the row (based on `data`)
     *      * {string} The type call data requested - this will be 'filter',
     *        'display', 'type' or 'sort'.
     *      * {array|object} The full data source for the row (not based on
     *        `data`)
     *    * Return:
     *      * The return value from the function is what will be used for the
     *        data requested.
     *
     *  @type string|int|function|object|null
     *  @default null Use the data source value.
     *
     *  @name DataTable.defaults.column.render
     *  @dtopt Columns
     *
     *  @example
     *    // Create a comma separated list from an array of objects
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "ajaxSource": "sources/deep.txt",
     *        "columns": [
     *          { "data": "engine" },
     *          { "data": "browser" },
     *          {
     *            "data": "platform",
     *            "render": "[, ].name"
     *          }
     *        ]
     *      } );
     *    } );
     *
     *  @example
     *    // Execute a function to obtain data
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "columnDefs": [ {
     *          "targets": [ 0 ],
     *          "data": null, // Use the full data source object for the renderer's source
     *          "render": "browserName()"
     *        } ]
     *      } );
     *    } );
     *
     *  @example
     *    // As an object, extracting different data for the different types
     *    // This would be used with a data source such as:
     *    //   { "phone": 5552368, "phone_filter": "5552368 555-2368", "phone_display": "555-2368" }
     *    // Here the `phone` integer is used for sorting and type detection, while `phone_filter`
     *    // (which has both forms) is used for filtering for if a user inputs either format, while
     *    // the formatted phone number is the one that is shown in the table.
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "columnDefs": [ {
     *          "targets": [ 0 ],
     *          "data": null, // Use the full data source object for the renderer's source
     *          "render": {
     *            "_": "phone",
     *            "filter": "phone_filter",
     *            "display": "phone_display"
     *          }
     *        } ]
     *      } );
     *    } );
     *
     *  @example
     *    // Use as a function to create a link from the data source
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "columnDefs": [ {
     *          "targets": [ 0 ],
     *          "data": "download_link",
     *          "render": function ( data, type, full ) {
     *            return '<a href="'+data+'">Download</a>';
     *          }
     *        } ]
     *      } );
     *    } );
     */
    mRender: null,
    /**
     * Change the cell type created for the column - either TD cells or TH cells. This
     * can be useful as TH cells have semantic meaning in the table body, allowing them
     * to act as a header for a row (you may wish to add scope='row' to the TH elements).
     *  @type string
     *  @default td
     *
     *  @name DataTable.defaults.column.cellType
     *  @dtopt Columns
     *
     *  @example
     *    // Make the first column use TH cells
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "columnDefs": [ {
     *          "targets": [ 0 ],
     *          "cellType": "th"
     *        } ]
     *      } );
     *    } );
     */
    sCellType: "td",
    /**
     * Class to give to each cell in this column.
     *  @type string
     *  @default <i>Empty string</i>
     *
     *  @name DataTable.defaults.column.class
     *  @dtopt Columns
     *
     *  @example
     *    // Using `columnDefs`
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "columnDefs": [
     *          { "class": "my_class", "targets": [ 0 ] }
     *        ]
     *      } );
     *    } );
     *
     *  @example
     *    // Using `columns`
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "columns": [
     *          { "class": "my_class" },
     *          null,
     *          null,
     *          null,
     *          null
     *        ]
     *      } );
     *    } );
     */
    sClass: "",
    /**
     * When DataTables calculates the column widths to assign to each column,
     * it finds the longest string in each column and then constructs a
     * temporary table and reads the widths from that. The problem with this
     * is that "mmm" is much wider then "iiii", but the latter is a longer
     * string - thus the calculation can go wrong (doing it properly and putting
     * it into an DOM object and measuring that is horribly(!) slow). Thus as
     * a "work around" we provide this option. It will append its value to the
     * text that is found to be the longest string for the column - i.e. padding.
     * Generally you shouldn't need this!
     *  @type string
     *  @default <i>Empty string<i>
     *
     *  @name DataTable.defaults.column.contentPadding
     *  @dtopt Columns
     *
     *  @example
     *    // Using `columns`
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "columns": [
     *          null,
     *          null,
     *          null,
     *          {
     *            "contentPadding": "mmm"
     *          }
     *        ]
     *      } );
     *    } );
     */
    sContentPadding: "",
    /**
     * Allows a default value to be given for a column's data, and will be used
     * whenever a null data source is encountered (this can be because `data`
     * is set to null, or because the data source itself is null).
     *  @type string
     *  @default null
     *
     *  @name DataTable.defaults.column.defaultContent
     *  @dtopt Columns
     *
     *  @example
     *    // Using `columnDefs`
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "columnDefs": [
     *          {
     *            "data": null,
     *            "defaultContent": "Edit",
     *            "targets": [ -1 ]
     *          }
     *        ]
     *      } );
     *    } );
     *
     *  @example
     *    // Using `columns`
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "columns": [
     *          null,
     *          null,
     *          null,
     *          {
     *            "data": null,
     *            "defaultContent": "Edit"
     *          }
     *        ]
     *      } );
     *    } );
     */
    sDefaultContent: null,
    /**
     * This parameter is only used in DataTables' server-side processing. It can
     * be exceptionally useful to know what columns are being displayed on the
     * client side, and to map these to database fields. When defined, the names
     * also allow DataTables to reorder information from the server if it comes
     * back in an unexpected order (i.e. if you switch your columns around on the
     * client-side, your server-side code does not also need updating).
     *  @type string
     *  @default <i>Empty string</i>
     *
     *  @name DataTable.defaults.column.name
     *  @dtopt Columns
     *
     *  @example
     *    // Using `columnDefs`
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "columnDefs": [
     *          { "name": "engine", "targets": [ 0 ] },
     *          { "name": "browser", "targets": [ 1 ] },
     *          { "name": "platform", "targets": [ 2 ] },
     *          { "name": "version", "targets": [ 3 ] },
     *          { "name": "grade", "targets": [ 4 ] }
     *        ]
     *      } );
     *    } );
     *
     *  @example
     *    // Using `columns`
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "columns": [
     *          { "name": "engine" },
     *          { "name": "browser" },
     *          { "name": "platform" },
     *          { "name": "version" },
     *          { "name": "grade" }
     *        ]
     *      } );
     *    } );
     */
    sName: "",
    /**
     * Defines a data source type for the ordering which can be used to read
     * real-time information from the table (updating the internally cached
     * version) prior to ordering. This allows ordering to occur on user
     * editable elements such as form inputs.
     *  @type string
     *  @default std
     *
     *  @name DataTable.defaults.column.orderDataType
     *  @dtopt Columns
     *
     *  @example
     *    // Using `columnDefs`
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "columnDefs": [
     *          { "orderDataType": "dom-text", "targets": [ 2, 3 ] },
     *          { "type": "numeric", "targets": [ 3 ] },
     *          { "orderDataType": "dom-select", "targets": [ 4 ] },
     *          { "orderDataType": "dom-checkbox", "targets": [ 5 ] }
     *        ]
     *      } );
     *    } );
     *
     *  @example
     *    // Using `columns`
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "columns": [
     *          null,
     *          null,
     *          { "orderDataType": "dom-text" },
     *          { "orderDataType": "dom-text", "type": "numeric" },
     *          { "orderDataType": "dom-select" },
     *          { "orderDataType": "dom-checkbox" }
     *        ]
     *      } );
     *    } );
     */
    sSortDataType: "std",
    /**
     * The title of this column.
     *  @type string
     *  @default null <i>Derived from the 'TH' value for this column in the
     *    original HTML table.</i>
     *
     *  @name DataTable.defaults.column.title
     *  @dtopt Columns
     *
     *  @example
     *    // Using `columnDefs`
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "columnDefs": [
     *          { "title": "My column title", "targets": [ 0 ] }
     *        ]
     *      } );
     *    } );
     *
     *  @example
     *    // Using `columns`
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "columns": [
     *          { "title": "My column title" },
     *          null,
     *          null,
     *          null,
     *          null
     *        ]
     *      } );
     *    } );
     */
    sTitle: null,
    /**
     * The type allows you to specify how the data for this column will be
     * ordered. Four types (string, numeric, date and html (which will strip
     * HTML tags before ordering)) are currently available. Note that only date
     * formats understood by Javascript's Date() object will be accepted as type
     * date. For example: "Mar 26, 2008 5:03 PM". May take the values: 'string',
     * 'numeric', 'date' or 'html' (by default). Further types can be adding
     * through plug-ins.
     *  @type string
     *  @default null <i>Auto-detected from raw data</i>
     *
     *  @name DataTable.defaults.column.type
     *  @dtopt Columns
     *
     *  @example
     *    // Using `columnDefs`
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "columnDefs": [
     *          { "type": "html", "targets": [ 0 ] }
     *        ]
     *      } );
     *    } );
     *
     *  @example
     *    // Using `columns`
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "columns": [
     *          { "type": "html" },
     *          null,
     *          null,
     *          null,
     *          null
     *        ]
     *      } );
     *    } );
     */
    sType: null,
    /**
     * Defining the width of the column, this parameter may take any CSS value
     * (3em, 20px etc). DataTables applies 'smart' widths to columns which have not
     * been given a specific width through this interface ensuring that the table
     * remains readable.
     *  @type string
     *  @default null <i>Automatic</i>
     *
     *  @name DataTable.defaults.column.width
     *  @dtopt Columns
     *
     *  @example
     *    // Using `columnDefs`
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "columnDefs": [
     *          { "width": "20%", "targets": [ 0 ] }
     *        ]
     *      } );
     *    } );
     *
     *  @example
     *    // Using `columns`
     *    $(document).ready( function() {
     *      $('#example').dataTable( {
     *        "columns": [
     *          { "width": "20%" },
     *          null,
     *          null,
     *          null,
     *          null
     *        ]
     *      } );
     *    } );
     */
    sWidth: null,
  };
  _fnHungarianMap(DataTable.defaults.column);
  DataTable.models.oSettings = {
    oFeatures: {
      /**
       * Flag to say if DataTables should automatically try to calculate the
       * optimum table and columns widths (true) or not (false).
       * Note that this parameter will be set by the initialisation routine. To
       * set a default use {@link DataTable.defaults}.
       *  @type boolean
       */
      bAutoWidth: null,
      /**
       * Delay the creation of TR and TD elements until they are actually
       * needed by a driven page draw. This can give a significant speed
       * increase for Ajax source and Javascript source data, but makes no
       * difference at all for DOM and server-side processing tables.
       * Note that this parameter will be set by the initialisation routine. To
       * set a default use {@link DataTable.defaults}.
       *  @type boolean
       */
      bDeferRender: null,
      /**
       * Enable filtering on the table or not. Note that if this is disabled
       * then there is no filtering at all on the table, including fnFilter.
       * To just remove the filtering input use sDom and remove the 'f' option.
       * Note that this parameter will be set by the initialisation routine. To
       * set a default use {@link DataTable.defaults}.
       *  @type boolean
       */
      bFilter: null,
      /**
       * Table information element (the 'Showing x of y records' div) enable
       * flag.
       * Note that this parameter will be set by the initialisation routine. To
       * set a default use {@link DataTable.defaults}.
       *  @type boolean
       */
      bInfo: null,
      /**
       * Present a user control allowing the end user to change the page size
       * when pagination is enabled.
       * Note that this parameter will be set by the initialisation routine. To
       * set a default use {@link DataTable.defaults}.
       *  @type boolean
       */
      bLengthChange: null,
      /**
       * Pagination enabled or not. Note that if this is disabled then length
       * changing must also be disabled.
       * Note that this parameter will be set by the initialisation routine. To
       * set a default use {@link DataTable.defaults}.
       *  @type boolean
       */
      bPaginate: null,
      /**
       * Processing indicator enable flag whenever DataTables is enacting a
       * user request - typically an Ajax request for server-side processing.
       * Note that this parameter will be set by the initialisation routine. To
       * set a default use {@link DataTable.defaults}.
       *  @type boolean
       */
      bProcessing: null,
      /**
       * Server-side processing enabled flag - when enabled DataTables will
       * get all data from the server for every draw - there is no filtering,
       * sorting or paging done on the client-side.
       * Note that this parameter will be set by the initialisation routine. To
       * set a default use {@link DataTable.defaults}.
       *  @type boolean
       */
      bServerSide: null,
      /**
       * Sorting enablement flag.
       * Note that this parameter will be set by the initialisation routine. To
       * set a default use {@link DataTable.defaults}.
       *  @type boolean
       */
      bSort: null,
      /**
       * Multi-column sorting
       * Note that this parameter will be set by the initialisation routine. To
       * set a default use {@link DataTable.defaults}.
       *  @type boolean
       */
      bSortMulti: null,
      /**
       * Apply a class to the columns which are being sorted to provide a
       * visual highlight or not. This can slow things down when enabled since
       * there is a lot of DOM interaction.
       * Note that this parameter will be set by the initialisation routine. To
       * set a default use {@link DataTable.defaults}.
       *  @type boolean
       */
      bSortClasses: null,
      /**
       * State saving enablement flag.
       * Note that this parameter will be set by the initialisation routine. To
       * set a default use {@link DataTable.defaults}.
       *  @type boolean
       */
      bStateSave: null,
    },
    oScroll: {
      /**
       * When the table is shorter in height than sScrollY, collapse the
       * table container down to the height of the table (when true).
       * Note that this parameter will be set by the initialisation routine. To
       * set a default use {@link DataTable.defaults}.
       *  @type boolean
       */
      bCollapse: null,
      /**
       * Width of the scrollbar for the web-browser's platform. Calculated
       * during table initialisation.
       *  @type int
       *  @default 0
       */
      iBarWidth: 0,
      /**
       * Viewport width for horizontal scrolling. Horizontal scrolling is
       * disabled if an empty string.
       * Note that this parameter will be set by the initialisation routine. To
       * set a default use {@link DataTable.defaults}.
       *  @type string
       */
      sX: null,
      /**
       * Width to expand the table to when using x-scrolling. Typically you
       * should not need to use this.
       * Note that this parameter will be set by the initialisation routine. To
       * set a default use {@link DataTable.defaults}.
       *  @type string
       *  @deprecated
       */
      sXInner: null,
      /**
       * Viewport height for vertical scrolling. Vertical scrolling is disabled
       * if an empty string.
       * Note that this parameter will be set by the initialisation routine. To
       * set a default use {@link DataTable.defaults}.
       *  @type string
       */
      sY: null,
    },
    oLanguage: {
      /**
       * Information callback function. See
       * {@link DataTable.defaults.fnInfoCallback}
       *  @type function
       *  @default null
       */
      fnInfoCallback: null,
    },
    oBrowser: {
      /**
       * Indicate if the browser incorrectly calculates width:100% inside a
       * scrolling element (IE6/7)
       *  @type boolean
       *  @default false
       */
      bScrollOversize: false,
      /**
       * Determine if the vertical scrollbar is on the right or left of the
       * scrolling container - needed for rtl language layout, although not
       * all browsers move the scrollbar (Safari).
       *  @type boolean
       *  @default false
       */
      bScrollbarLeft: false,
      /**
       * Flag for if `getBoundingClientRect` is fully supported or not
       *  @type boolean
       *  @default false
       */
      bBounding: false,
      /**
       * Browser scrollbar width
       *  @type integer
       *  @default 0
       */
      barWidth: 0,
    },
    ajax: null,
    /**
     * Array referencing the nodes which are used for the features. The
     * parameters of this object match what is allowed by sDom - i.e.
     *   <ul>
     *     <li>'l' - Length changing</li>
     *     <li>'f' - Filtering input</li>
     *     <li>'t' - The table!</li>
     *     <li>'i' - Information</li>
     *     <li>'p' - Pagination</li>
     *     <li>'r' - pRocessing</li>
     *   </ul>
     *  @type array
     *  @default []
     */
    aanFeatures: [],
    /**
     * Store data information - see {@link DataTable.models.oRow} for detailed
     * information.
     *  @type array
     *  @default []
     */
    aoData: [],
    /**
     * Array of indexes which are in the current display (after filtering etc)
     *  @type array
     *  @default []
     */
    aiDisplay: [],
    /**
     * Array of indexes for display - no filtering
     *  @type array
     *  @default []
     */
    aiDisplayMaster: [],
    /**
     * Map of row ids to data indexes
     *  @type object
     *  @default {}
     */
    aIds: {},
    /**
     * Store information about each column that is in use
     *  @type array
     *  @default []
     */
    aoColumns: [],
    /**
     * Store information about the table's header
     *  @type array
     *  @default []
     */
    aoHeader: [],
    /**
     * Store information about the table's footer
     *  @type array
     *  @default []
     */
    aoFooter: [],
    oPreviousSearch: {},
    /**
     * Store the applied search for each column - see
     * {@link DataTable.models.oSearch} for the format that is used for the
     * filtering information for each column.
     *  @type array
     *  @default []
     */
    aoPreSearchCols: [],
    /**
     * Sorting that is applied to the table. Note that the inner arrays are
     * used in the following manner:
     * <ul>
     *   <li>Index 0 - column number</li>
     *   <li>Index 1 - current sorting direction</li>
     * </ul>
     * Note that this parameter will be set by the initialisation routine. To
     * set a default use {@link DataTable.defaults}.
     *  @type array
     *  @todo These inner arrays should really be objects
     */
    aaSorting: null,
    /**
     * Sorting that is always applied to the table (i.e. prefixed in front of
     * aaSorting).
     * Note that this parameter will be set by the initialisation routine. To
     * set a default use {@link DataTable.defaults}.
     *  @type array
     *  @default []
     */
    aaSortingFixed: [],
    /**
     * Classes to use for the striping of a table.
     * Note that this parameter will be set by the initialisation routine. To
     * set a default use {@link DataTable.defaults}.
     *  @type array
     *  @default []
     */
    asStripeClasses: null,
    /**
     * If restoring a table - we should restore its striping classes as well
     *  @type array
     *  @default []
     */
    asDestroyStripes: [],
    /**
     * If restoring a table - we should restore its width
     *  @type int
     *  @default 0
     */
    sDestroyWidth: 0,
    /**
     * Callback functions array for every time a row is inserted (i.e. on a draw).
     *  @type array
     *  @default []
     */
    aoRowCallback: [],
    /**
     * Callback functions for the header on each draw.
     *  @type array
     *  @default []
     */
    aoHeaderCallback: [],
    /**
     * Callback function for the footer on each draw.
     *  @type array
     *  @default []
     */
    aoFooterCallback: [],
    /**
     * Array of callback functions for draw callback functions
     *  @type array
     *  @default []
     */
    aoDrawCallback: [],
    /**
     * Array of callback functions for row created function
     *  @type array
     *  @default []
     */
    aoRowCreatedCallback: [],
    /**
     * Callback functions for just before the table is redrawn. A return of
     * false will be used to cancel the draw.
     *  @type array
     *  @default []
     */
    aoPreDrawCallback: [],
    /**
     * Callback functions for when the table has been initialised.
     *  @type array
     *  @default []
     */
    aoInitComplete: [],
    /**
     * Callbacks for modifying the settings to be stored for state saving, prior to
     * saving state.
     *  @type array
     *  @default []
     */
    aoStateSaveParams: [],
    /**
     * Callbacks for modifying the settings that have been stored for state saving
     * prior to using the stored values to restore the state.
     *  @type array
     *  @default []
     */
    aoStateLoadParams: [],
    /**
     * Callbacks for operating on the settings object once the saved state has been
     * loaded
     *  @type array
     *  @default []
     */
    aoStateLoaded: [],
    /**
     * Cache the table ID for quick access
     *  @type string
     *  @default <i>Empty string</i>
     */
    sTableId: "",
    /**
     * The TABLE node for the main table
     *  @type node
     *  @default null
     */
    nTable: null,
    /**
     * Permanent ref to the thead element
     *  @type node
     *  @default null
     */
    nTHead: null,
    /**
     * Permanent ref to the tfoot element - if it exists
     *  @type node
     *  @default null
     */
    nTFoot: null,
    /**
     * Permanent ref to the tbody element
     *  @type node
     *  @default null
     */
    nTBody: null,
    /**
     * Cache the wrapper node (contains all DataTables controlled elements)
     *  @type node
     *  @default null
     */
    nTableWrapper: null,
    /**
     * Indicate if when using server-side processing the loading of data
     * should be deferred until the second draw.
     * Note that this parameter will be set by the initialisation routine. To
     * set a default use {@link DataTable.defaults}.
     *  @type boolean
     *  @default false
     */
    bDeferLoading: false,
    /**
     * Indicate if all required information has been read in
     *  @type boolean
     *  @default false
     */
    bInitialised: false,
    /**
     * Information about open rows. Each object in the array has the parameters
     * 'nTr' and 'nParent'
     *  @type array
     *  @default []
     */
    aoOpenRows: [],
    /**
     * Dictate the positioning of DataTables' control elements - see
     * {@link DataTable.model.oInit.sDom}.
     * Note that this parameter will be set by the initialisation routine. To
     * set a default use {@link DataTable.defaults}.
     *  @type string
     *  @default null
     */
    sDom: null,
    /**
     * Search delay (in mS)
     *  @type integer
     *  @default null
     */
    searchDelay: null,
    /**
     * Which type of pagination should be used.
     * Note that this parameter will be set by the initialisation routine. To
     * set a default use {@link DataTable.defaults}.
     *  @type string
     *  @default two_button
     */
    sPaginationType: "two_button",
    /**
     * The state duration (for `stateSave`) in seconds.
     * Note that this parameter will be set by the initialisation routine. To
     * set a default use {@link DataTable.defaults}.
     *  @type int
     *  @default 0
     */
    iStateDuration: 0,
    /**
     * Array of callback functions for state saving. Each array element is an
     * object with the following parameters:
     *   <ul>
     *     <li>function:fn - function to call. Takes two parameters, oSettings
     *       and the JSON string to save that has been thus far created. Returns
     *       a JSON string to be inserted into a json object
     *       (i.e. '"param": [ 0, 1, 2]')</li>
     *     <li>string:sName - name of callback</li>
     *   </ul>
     *  @type array
     *  @default []
     */
    aoStateSave: [],
    /**
     * Array of callback functions for state loading. Each array element is an
     * object with the following parameters:
     *   <ul>
     *     <li>function:fn - function to call. Takes two parameters, oSettings
     *       and the object stored. May return false to cancel state loading</li>
     *     <li>string:sName - name of callback</li>
     *   </ul>
     *  @type array
     *  @default []
     */
    aoStateLoad: [],
    /**
     * State that was saved. Useful for back reference
     *  @type object
     *  @default null
     */
    oSavedState: null,
    /**
     * State that was loaded. Useful for back reference
     *  @type object
     *  @default null
     */
    oLoadedState: null,
    /**
     * Source url for AJAX data for the table.
     * Note that this parameter will be set by the initialisation routine. To
     * set a default use {@link DataTable.defaults}.
     *  @type string
     *  @default null
     */
    sAjaxSource: null,
    /**
     * Property from a given object from which to read the table data from. This
     * can be an empty string (when not server-side processing), in which case
     * it is  assumed an an array is given directly.
     * Note that this parameter will be set by the initialisation routine. To
     * set a default use {@link DataTable.defaults}.
     *  @type string
     */
    sAjaxDataProp: null,
    /**
     * The last jQuery XHR object that was used for server-side data gathering.
     * This can be used for working with the XHR information in one of the
     * callbacks
     *  @type object
     *  @default null
     */
    jqXHR: null,
    /**
     * JSON returned from the server in the last Ajax request
     *  @type object
     *  @default undefined
     */
    json: i,
    /**
     * Data submitted as part of the last Ajax request
     *  @type object
     *  @default undefined
     */
    oAjaxData: i,
    /**
     * Function to get the server-side data.
     * Note that this parameter will be set by the initialisation routine. To
     * set a default use {@link DataTable.defaults}.
     *  @type function
     */
    fnServerData: null,
    /**
     * Functions which are called prior to sending an Ajax request so extra
     * parameters can easily be sent to the server
     *  @type array
     *  @default []
     */
    aoServerParams: [],
    /**
     * Send the XHR HTTP method - GET or POST (could be PUT or DELETE if
     * required).
     * Note that this parameter will be set by the initialisation routine. To
     * set a default use {@link DataTable.defaults}.
     *  @type string
     */
    sServerMethod: null,
    /**
     * Format numbers for display.
     * Note that this parameter will be set by the initialisation routine. To
     * set a default use {@link DataTable.defaults}.
     *  @type function
     */
    fnFormatNumber: null,
    /**
     * List of options that can be used for the user selectable length menu.
     * Note that this parameter will be set by the initialisation routine. To
     * set a default use {@link DataTable.defaults}.
     *  @type array
     *  @default []
     */
    aLengthMenu: null,
    /**
     * Counter for the draws that the table does. Also used as a tracker for
     * server-side processing
     *  @type int
     *  @default 0
     */
    iDraw: 0,
    /**
     * Indicate if a redraw is being done - useful for Ajax
     *  @type boolean
     *  @default false
     */
    bDrawing: false,
    /**
     * Draw index (iDraw) of the last error when parsing the returned data
     *  @type int
     *  @default -1
     */
    iDrawError: -1,
    /**
     * Paging display length
     *  @type int
     *  @default 10
     */
    _iDisplayLength: 10,
    /**
     * Paging start point - aiDisplay index
     *  @type int
     *  @default 0
     */
    _iDisplayStart: 0,
    /**
     * Server-side processing - number of records in the result set
     * (i.e. before filtering), Use fnRecordsTotal rather than
     * this property to get the value of the number of records, regardless of
     * the server-side processing setting.
     *  @type int
     *  @default 0
     *  @private
     */
    _iRecordsTotal: 0,
    /**
     * Server-side processing - number of records in the current display set
     * (i.e. after filtering). Use fnRecordsDisplay rather than
     * this property to get the value of the number of records, regardless of
     * the server-side processing setting.
     *  @type boolean
     *  @default 0
     *  @private
     */
    _iRecordsDisplay: 0,
    /**
     * The classes to use for the table
     *  @type object
     *  @default {}
     */
    oClasses: {},
    /**
     * Flag attached to the settings object so you can check in the draw
     * callback if filtering has been done in the draw. Deprecated in favour of
     * events.
     *  @type boolean
     *  @default false
     *  @deprecated
     */
    bFiltered: false,
    /**
     * Flag attached to the settings object so you can check in the draw
     * callback if sorting has been done in the draw. Deprecated in favour of
     * events.
     *  @type boolean
     *  @default false
     *  @deprecated
     */
    bSorted: false,
    /**
     * Indicate that if multiple rows are in the header and there is more than
     * one unique cell per column, if the top one (true) or bottom one (false)
     * should be used for sorting / title by DataTables.
     * Note that this parameter will be set by the initialisation routine. To
     * set a default use {@link DataTable.defaults}.
     *  @type boolean
     */
    bSortCellsTop: null,
    /**
     * Initialisation object that is used for the table
     *  @type object
     *  @default null
     */
    oInit: null,
    /**
     * Destroy callback functions - for plug-ins to attach themselves to the
     * destroy so they can clean up markup and events.
     *  @type array
     *  @default []
     */
    aoDestroyCallback: [],
    /**
     * Get the number of records in the current record set, before filtering
     *  @type function
     */
    fnRecordsTotal: function () {
      return "ssp" == _fnDataSource(this || n)
        ? 1 * (this || n)._iRecordsTotal
        : (this || n).aiDisplayMaster.length;
    },
    /**
     * Get the number of records in the current record set, after filtering
     *  @type function
     */
    fnRecordsDisplay: function () {
      return "ssp" == _fnDataSource(this || n)
        ? 1 * (this || n)._iRecordsDisplay
        : (this || n).aiDisplay.length;
    },
    /**
     * Get the display end point - aiDisplay index
     *  @type function
     */
    fnDisplayEnd: function () {
      var e = (this || n)._iDisplayLength,
        t = (this || n)._iDisplayStart,
        r = t + e,
        i = (this || n).aiDisplay.length,
        l = (this || n).oFeatures,
        o = l.bPaginate;
      return l.bServerSide
        ? false === o || -1 === e
          ? t + i
          : Math.min(t + e, (this || n)._iRecordsDisplay)
        : !o || r > i || -1 === e
        ? i
        : r;
    },
    /**
     * The DataTables object for this table
     *  @type object
     *  @default null
     */
    oInstance: null,
    /**
     * Unique identifier for each instance of the DataTables object. If there
     * is an ID on the table node, then it takes that value, otherwise an
     * incrementing internal counter is used.
     *  @type string
     *  @default null
     */
    sInstance: null,
    iTabIndex: 0,
    nScrollHead: null,
    nScrollFoot: null,
    /**
     * Last applied sort
     *  @type array
     *  @default []
     */
    aLastSort: [],
    /**
     * Stored plug-in instances
     *  @type object
     *  @default {}
     */
    oPlugins: {},
    /**
     * Function used to get a row's id from the row's data
     *  @type function
     *  @default null
     */
    rowIdFn: null,
    /**
     * Data location where to store a row's id
     *  @type string
     *  @default null
     */
    rowId: null,
  };
  DataTable.ext = l = {
    /**
     * Buttons. For use with the Buttons extension for DataTables. This is
     * defined here so other extensions can define buttons regardless of load
     * order. It is _not_ used by DataTables core.
     *
     *  @type object
     *  @default {}
     */
    buttons: {},
    /**
     * Element class names
     *
     *  @type object
     *  @default {}
     */
    classes: {},
    /**
     * DataTables build type (expanded by the download builder)
     *
     *  @type string
     */
    builder: "-source-",
    /**
     * Error reporting.
     *
     * How should DataTables report an error. Can take the value 'alert',
     * 'throw', 'none' or a function.
     *
     *  @type string|function
     *  @default alert
     */
    errMode: "alert",
    /**
     * Feature plug-ins.
     *
     * This is an array of objects which describe the feature plug-ins that are
     * available to DataTables. These feature plug-ins are then available for
     * use through the `dom` initialisation option.
     *
     * Each feature plug-in is described by an object which must have the
     * following properties:
     *
     * * `fnInit` - function that is used to initialise the plug-in,
     * * `cFeature` - a character so the feature can be enabled by the `dom`
     *   instillation option. This is case sensitive.
     *
     * The `fnInit` function has the following input parameters:
     *
     * 1. `{object}` DataTables settings object: see
     *    {@link DataTable.models.oSettings}
     *
     * And the following return is expected:
     *
     * * {node|null} The element which contains your feature. Note that the
     *   return may also be void if your plug-in does not require to inject any
     *   DOM elements into DataTables control (`dom`) - for example this might
     *   be useful when developing a plug-in which allows table control via
     *   keyboard entry
     *
     *  @type array
     *
     *  @example
     *    $.fn.dataTable.ext.features.push( {
     *      "fnInit": function( oSettings ) {
     *        return new TableTools( { "oDTSettings": oSettings } );
     *      },
     *      "cFeature": "T"
     *    } );
     */
    feature: [],
    /**
     * Row searching.
     *
     * This method of searching is complimentary to the default type based
     * searching, and a lot more comprehensive as it allows you complete control
     * over the searching logic. Each element in this array is a function
     * (parameters described below) that is called for every row in the table,
     * and your logic decides if it should be included in the searching data set
     * or not.
     *
     * Searching functions have the following input parameters:
     *
     * 1. `{object}` DataTables settings object: see
     *    {@link DataTable.models.oSettings}
     * 2. `{array|object}` Data for the row to be processed (same as the
     *    original format that was passed in as the data source, or an array
     *    from a DOM data source
     * 3. `{int}` Row index ({@link DataTable.models.oSettings.aoData}), which
     *    can be useful to retrieve the `TR` element if you need DOM interaction.
     *
     * And the following return is expected:
     *
     * * {boolean} Include the row in the searched result set (true) or not
     *   (false)
     *
     * Note that as with the main search ability in DataTables, technically this
     * is "filtering", since it is subtractive. However, for consistency in
     * naming we call it searching here.
     *
     *  @type array
     *  @default []
     *
     *  @example
     *    // The following example shows custom search being applied to the
     *    // fourth column (i.e. the data[3] index) based on two input values
     *    // from the end-user, matching the data in a certain range.
     *    $.fn.dataTable.ext.search.push(
     *      function( settings, data, dataIndex ) {
     *        var min = document.getElementById('min').value * 1;
     *        var max = document.getElementById('max').value * 1;
     *        var version = data[3] == "-" ? 0 : data[3]*1;
     *
     *        if ( min == "" && max == "" ) {
     *          return true;
     *        }
     *        else if ( min == "" && version < max ) {
     *          return true;
     *        }
     *        else if ( min < version && "" == max ) {
     *          return true;
     *        }
     *        else if ( min < version && version < max ) {
     *          return true;
     *        }
     *        return false;
     *      }
     *    );
     */
    search: [],
    /**
     * Selector extensions
     *
     * The `selector` option can be used to extend the options available for the
     * selector modifier options (`selector-modifier` object data type) that
     * each of the three built in selector types offer (row, column and cell +
     * their plural counterparts). For example the Select extension uses this
     * mechanism to provide an option to select only rows, columns and cells
     * that have been marked as selected by the end user (`{selected: true}`),
     * which can be used in conjunction with the existing built in selector
     * options.
     *
     * Each property is an array to which functions can be pushed. The functions
     * take three attributes:
     *
     * * Settings object for the host table
     * * Options object (`selector-modifier` object type)
     * * Array of selected item indexes
     *
     * The return is an array of the resulting item indexes after the custom
     * selector has been applied.
     *
     *  @type object
     */
    selector: { cell: [], column: [], row: [] },
    /**
     * Internal functions, exposed for used in plug-ins.
     *
     * Please note that you should not need to use the internal methods for
     * anything other than a plug-in (and even then, try to avoid if possible).
     * The internal function may change between releases.
     *
     *  @type object
     *  @default {}
     */
    internal: {},
    /**
     * Legacy configuration options. Enable and disable legacy options that
     * are available in DataTables.
     *
     *  @type object
     */
    legacy: {
      /**
       * Enable / disable DataTables 1.9 compatible server-side processing
       * requests
       *
       *  @type boolean
       *  @default null
       */
      ajax: null,
    },
    /**
     * Pagination plug-in methods.
     *
     * Each entry in this object is a function and defines which buttons should
     * be shown by the pagination rendering method that is used for the table:
     * {@link DataTable.ext.renderer.pageButton}. The renderer addresses how the
     * buttons are displayed in the document, while the functions here tell it
     * what buttons to display. This is done by returning an array of button
     * descriptions (what each button will do).
     *
     * Pagination types (the four built in options and any additional plug-in
     * options defined here) can be used through the `paginationType`
     * initialisation parameter.
     *
     * The functions defined take two parameters:
     *
     * 1. `{int} page` The current page index
     * 2. `{int} pages` The number of pages in the table
     *
     * Each function is expected to return an array where each element of the
     * array can be one of:
     *
     * * `first` - Jump to first page when activated
     * * `last` - Jump to last page when activated
     * * `previous` - Show previous page when activated
     * * `next` - Show next page when activated
     * * `{int}` - Show page of the index given
     * * `{array}` - A nested array containing the above elements to add a
     *   containing 'DIV' element (might be useful for styling).
     *
     * Note that DataTables v1.9- used this object slightly differently whereby
     * an object with two functions would be defined for each plug-in. That
     * ability is still supported by DataTables 1.10+ to provide backwards
     * compatibility, but this option of use is now decremented and no longer
     * documented in DataTables 1.10+.
     *
     *  @type object
     *  @default {}
     *
     *  @example
     *    // Show previous, next and current page buttons only
     *    $.fn.dataTableExt.oPagination.current = function ( page, pages ) {
     *      return [ 'previous', page, 'next' ];
     *    };
     */
    pager: {},
    renderer: { pageButton: {}, header: {} },
    /**
     * Ordering plug-ins - custom data source
     *
     * The extension options for ordering of data available here is complimentary
     * to the default type based ordering that DataTables typically uses. It
     * allows much greater control over the the data that is being used to
     * order a column, but is necessarily therefore more complex.
     *
     * This type of ordering is useful if you want to do ordering based on data
     * live from the DOM (for example the contents of an 'input' element) rather
     * than just the static string that DataTables knows of.
     *
     * The way these plug-ins work is that you create an array of the values you
     * wish to be ordering for the column in question and then return that
     * array. The data in the array much be in the index order of the rows in
     * the table (not the currently ordering order!). Which order data gathering
     * function is run here depends on the `dt-init columns.orderDataType`
     * parameter that is used for the column (if any).
     *
     * The functions defined take two parameters:
     *
     * 1. `{object}` DataTables settings object: see
     *    {@link DataTable.models.oSettings}
     * 2. `{int}` Target column index
     *
     * Each function is expected to return an array:
     *
     * * `{array}` Data for the column to be ordering upon
     *
     *  @type array
     *
     *  @example
     *    // Ordering using `input` node values
     *    $.fn.dataTable.ext.order['dom-text'] = function  ( settings, col )
     *    {
     *      return this.api().column( col, {order:'index'} ).nodes().map( function ( td, i ) {
     *        return $('input', td).val();
     *      } );
     *    }
     */
    order: {},
    type: {
      /**
       * Type detection functions.
       *
       * The functions defined in this object are used to automatically detect
       * a column's type, making initialisation of DataTables super easy, even
       * when complex data is in the table.
       *
       * The functions defined take two parameters:
       *
       *  1. `{*}` Data from the column cell to be analysed
       *  2. `{settings}` DataTables settings object. This can be used to
       *     perform context specific type detection - for example detection
       *     based on language settings such as using a comma for a decimal
       *     place. Generally speaking the options from the settings will not
       *     be required
       *
       * Each function is expected to return:
       *
       * * `{string|null}` Data type detected, or null if unknown (and thus
       *   pass it on to the other type detection functions.
       *
       *  @type array
       *
       *  @example
       *    // Currency type detection plug-in:
       *    $.fn.dataTable.ext.type.detect.push(
       *      function ( data, settings ) {
       *        // Check the numeric part
       *        if ( ! data.substring(1).match(/[0-9]/) ) {
       *          return null;
       *        }
       *
       *        // Check prefixed by currency
       *        if ( data.charAt(0) == '$' || data.charAt(0) == '&pound;' ) {
       *          return 'currency';
       *        }
       *        return null;
       *      }
       *    );
       */
      detect: [],
      /**
       * Type based search formatting.
       *
       * The type based searching functions can be used to pre-format the
       * data to be search on. For example, it can be used to strip HTML
       * tags or to de-format telephone numbers for numeric only searching.
       *
       * Note that is a search is not defined for a column of a given type,
       * no search formatting will be performed.
       *
       * Pre-processing of searching data plug-ins - When you assign the sType
       * for a column (or have it automatically detected for you by DataTables
       * or a type detection plug-in), you will typically be using this for
       * custom sorting, but it can also be used to provide custom searching
       * by allowing you to pre-processing the data and returning the data in
       * the format that should be searched upon. This is done by adding
       * functions this object with a parameter name which matches the sType
       * for that target column. This is the corollary of <i>afnSortData</i>
       * for searching data.
       *
       * The functions defined take a single parameter:
       *
       *  1. `{*}` Data from the column cell to be prepared for searching
       *
       * Each function is expected to return:
       *
       * * `{string|null}` Formatted string that will be used for the searching.
       *
       *  @type object
       *  @default {}
       *
       *  @example
       *    $.fn.dataTable.ext.type.search['title-numeric'] = function ( d ) {
       *      return d.replace(/\n/g," ").replace( /<.*?>/g, "" );
       *    }
       */
      search: {},
      /**
       * Type based ordering.
       *
       * The column type tells DataTables what ordering to apply to the table
       * when a column is sorted upon. The order for each type that is defined,
       * is defined by the functions available in this object.
       *
       * Each ordering option can be described by three properties added to
       * this object:
       *
       * * `{type}-pre` - Pre-formatting function
       * * `{type}-asc` - Ascending order function
       * * `{type}-desc` - Descending order function
       *
       * All three can be used together, only `{type}-pre` or only
       * `{type}-asc` and `{type}-desc` together. It is generally recommended
       * that only `{type}-pre` is used, as this provides the optimal
       * implementation in terms of speed, although the others are provided
       * for compatibility with existing Javascript sort functions.
       *
       * `{type}-pre`: Functions defined take a single parameter:
       *
       *  1. `{*}` Data from the column cell to be prepared for ordering
       *
       * And return:
       *
       * * `{*}` Data to be sorted upon
       *
       * `{type}-asc` and `{type}-desc`: Functions are typical Javascript sort
       * functions, taking two parameters:
       *
       *  1. `{*}` Data to compare to the second parameter
       *  2. `{*}` Data to compare to the first parameter
       *
       * And returning:
       *
       * * `{*}` Ordering match: <0 if first parameter should be sorted lower
       *   than the second parameter, ===0 if the two parameters are equal and
       *   >0 if the first parameter should be sorted height than the second
       *   parameter.
       *
       *  @type object
       *  @default {}
       *
       *  @example
       *    // Numeric ordering of formatted numbers with a pre-formatter
       *    $.extend( $.fn.dataTable.ext.type.order, {
       *      "string-pre": function(x) {
       *        a = (a === "-" || a === "") ? 0 : a.replace( /[^\d\-\.]/g, "" );
       *        return parseFloat( a );
       *      }
       *    } );
       *
       *  @example
       *    // Case-sensitive string ordering, with no pre-formatting method
       *    $.extend( $.fn.dataTable.ext.order, {
       *      "string-case-asc": function(x,y) {
       *        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
       *      },
       *      "string-case-desc": function(x,y) {
       *        return ((x < y) ? 1 : ((x > y) ? -1 : 0));
       *      }
       *    } );
       */
      order: {},
    },
    /**
     * Unique DataTables instance counter
     *
     * @type int
     * @private
     */
    _unique: 0,
    /**
     * Version check function.
     *  @type function
     *  @depreciated Since 1.10
     */
    fnVersionCheck: DataTable.fnVersionCheck,
    /**
     * Index for what 'this' index API functions should use
     *  @type int
     *  @deprecated Since v1.10
     */
    iApiIndex: 0,
    /**
     * jQuery UI class container
     *  @type object
     *  @deprecated Since v1.10
     */
    oJUIClasses: {},
    /**
     * Software version
     *  @type string
     *  @deprecated Since v1.10
     */
    sVersion: DataTable.version,
  };
  e.extend(l, {
    afnFiltering: l.search,
    aTypes: l.type.detect,
    ofnSearch: l.type.search,
    oSort: l.type.order,
    afnSortData: l.order,
    aoFeatures: l.feature,
    oApi: l.internal,
    oStdClasses: l.classes,
    oPagination: l.pager,
  });
  e.extend(DataTable.ext.classes, {
    sTable: "dataTable",
    sNoFooter: "no-footer",
    sPageButton: "paginate_button",
    sPageButtonActive: "current",
    sPageButtonDisabled: "disabled",
    sStripeOdd: "odd",
    sStripeEven: "even",
    sRowEmpty: "dataTables_empty",
    sWrapper: "dataTables_wrapper",
    sFilter: "dataTables_filter",
    sInfo: "dataTables_info",
    sPaging: "dataTables_paginate paging_",
    sLength: "dataTables_length",
    sProcessing: "dataTables_processing",
    sSortAsc: "sorting_asc",
    sSortDesc: "sorting_desc",
    sSortable: "sorting",
    sSortableAsc: "sorting_desc_disabled",
    sSortableDesc: "sorting_asc_disabled",
    sSortableNone: "sorting_disabled",
    sSortColumn: "sorting_",
    sFilterInput: "",
    sLengthSelect: "",
    sScrollWrapper: "dataTables_scroll",
    sScrollHead: "dataTables_scrollHead",
    sScrollHeadInner: "dataTables_scrollHeadInner",
    sScrollBody: "dataTables_scrollBody",
    sScrollFoot: "dataTables_scrollFoot",
    sScrollFootInner: "dataTables_scrollFootInner",
    sHeaderTH: "",
    sFooterTH: "",
    sSortJUIAsc: "",
    sSortJUIDesc: "",
    sSortJUI: "",
    sSortJUIAscAllowed: "",
    sSortJUIDescAllowed: "",
    sSortJUIWrapper: "",
    sSortIcon: "",
    sJUIHeader: "",
    sJUIFooter: "",
  });
  var R = DataTable.ext.pager;
  function _numbers(e, t) {
    var n = [],
      r = R.numbers_length,
      i = Math.floor(r / 2);
    if (t <= r) n = _range(0, t);
    else if (e <= i) {
      n = _range(0, r - 2);
      n.push("ellipsis");
      n.push(t - 1);
    } else if (e >= t - 1 - i) {
      n = _range(t - (r - 2), t);
      n.splice(0, 0, "ellipsis");
      n.splice(0, 0, 0);
    } else {
      n = _range(e - i + 2, e + i - 1);
      n.push("ellipsis");
      n.push(t - 1);
      n.splice(0, 0, "ellipsis");
      n.splice(0, 0, 0);
    }
    n.DT_el = "span";
    return n;
  }
  e.extend(R, {
    simple: function (e, t) {
      return ["previous", "next"];
    },
    full: function (e, t) {
      return ["first", "previous", "next", "last"];
    },
    numbers: function (e, t) {
      return [_numbers(e, t)];
    },
    simple_numbers: function (e, t) {
      return ["previous", _numbers(e, t), "next"];
    },
    full_numbers: function (e, t) {
      return ["first", "previous", _numbers(e, t), "next", "last"];
    },
    first_last_numbers: function (e, t) {
      return ["first", _numbers(e, t), "last"];
    },
    _numbers: _numbers,
    numbers_length: 7,
  });
  e.extend(true, DataTable.ext.renderer, {
    pageButton: {
      _: function (t, n, l, o, s, f) {
        var u = t.oClasses;
        var c = t.oLanguage.oPaginate;
        var d = t.oLanguage.oAria.paginate || {};
        var h,
          p,
          v = 0;
        var attach = function (n, r) {
          var i, o, _, g, b;
          var m = u.sPageButtonDisabled;
          var clickHandler = function (e) {
            _fnPageChange(t, e.data.action, true);
          };
          for (i = 0, o = r.length; i < o; i++) {
            g = r[i];
            if (Array.isArray(g)) {
              var S = e("<" + (g.DT_el || "div") + "/>").appendTo(n);
              attach(S, g);
            } else {
              h = null;
              p = g;
              b = t.iTabIndex;
              switch (g) {
                case "ellipsis":
                  n.append('<span class="ellipsis">&#x2026;</span>');
                  break;
                case "first":
                  h = c.sFirst;
                  if (0 === s) {
                    b = -1;
                    p += " " + m;
                  }
                  break;
                case "previous":
                  h = c.sPrevious;
                  if (0 === s) {
                    b = -1;
                    p += " " + m;
                  }
                  break;
                case "next":
                  h = c.sNext;
                  if (0 === f || s === f - 1) {
                    b = -1;
                    p += " " + m;
                  }
                  break;
                case "last":
                  h = c.sLast;
                  if (0 === f || s === f - 1) {
                    b = -1;
                    p += " " + m;
                  }
                  break;
                default:
                  h = t.fnFormatNumber(g + 1);
                  p = s === g ? u.sPageButtonActive : "";
                  break;
              }
              if (null !== h) {
                _ = e("<a>", {
                  class: u.sPageButton + " " + p,
                  "aria-controls": t.sTableId,
                  "aria-label": d[g],
                  "data-dt-idx": v,
                  tabindex: b,
                  id:
                    0 === l && "string" === typeof g
                      ? t.sTableId + "_" + g
                      : null,
                })
                  .html(h)
                  .appendTo(n);
                _fnBindAction(_, { action: g }, clickHandler);
                v++;
              }
            }
          }
        };
        var _;
        try {
          _ = e(n).find(r.activeElement).data("dt-idx");
        } catch (e) {}
        attach(e(n).empty(), o);
        _ !== i &&
          e(n)
            .find("[data-dt-idx=" + _ + "]")
            .trigger("focus");
      },
    },
  });
  e.extend(DataTable.ext.type.detect, [
    function (e, t) {
      var n = t.oLanguage.sDecimal;
      return _isNumber(e, n) ? "num" + n : null;
    },
    function (e, t) {
      if (e && !(e instanceof Date) && !h.test(e)) return null;
      var n = Date.parse(e);
      return (null !== n && !isNaN(n)) || _empty(e) ? "date" : null;
    },
    function (e, t) {
      var n = t.oLanguage.sDecimal;
      return _isNumber(e, n, true) ? "num-fmt" + n : null;
    },
    function (e, t) {
      var n = t.oLanguage.sDecimal;
      return _htmlNumeric(e, n) ? "html-num" + n : null;
    },
    function (e, t) {
      var n = t.oLanguage.sDecimal;
      return _htmlNumeric(e, n, true) ? "html-num-fmt" + n : null;
    },
    function (e, t) {
      return _empty(e) || ("string" === typeof e && -1 !== e.indexOf("<"))
        ? "html"
        : null;
    },
  ]);
  e.extend(DataTable.ext.type.search, {
    html: function (e) {
      return _empty(e)
        ? e
        : "string" === typeof e
        ? e.replace(c, " ").replace(d, "")
        : "";
    },
    string: function (e) {
      return _empty(e) ? e : "string" === typeof e ? e.replace(c, " ") : e;
    },
  });
  var __numericReplace = function (e, t, n, r) {
    if (0 !== e && (!e || "-" === e)) return -Infinity;
    t && (e = _numToDecimal(e, t));
    if (e.replace) {
      n && (e = e.replace(n, ""));
      r && (e = e.replace(r, ""));
    }
    return 1 * e;
  };
  function _addNumericSort(t) {
    e.each(
      {
        num: function (e) {
          return __numericReplace(e, t);
        },
        "num-fmt": function (e) {
          return __numericReplace(e, t, v);
        },
        "html-num": function (e) {
          return __numericReplace(e, t, d);
        },
        "html-num-fmt": function (e) {
          return __numericReplace(e, t, d, v);
        },
      },
      function (e, n) {
        l.type.order[e + t + "-pre"] = n;
        e.match(/^html\-/) && (l.type.search[e + t] = l.type.search.html);
      }
    );
  }
  e.extend(l.type.order, {
    "date-pre": function (e) {
      var t = Date.parse(e);
      return isNaN(t) ? -Infinity : t;
    },
    "html-pre": function (e) {
      return _empty(e)
        ? ""
        : e.replace
        ? e.replace(/<.*?>/g, "").toLowerCase()
        : e + "";
    },
    "string-pre": function (e) {
      return _empty(e)
        ? ""
        : "string" === typeof e
        ? e.toLowerCase()
        : e.toString
        ? e.toString()
        : "";
    },
    "string-asc": function (e, t) {
      return e < t ? -1 : e > t ? 1 : 0;
    },
    "string-desc": function (e, t) {
      return e < t ? 1 : e > t ? -1 : 0;
    },
  });
  _addNumericSort("");
  e.extend(true, DataTable.ext.renderer, {
    header: {
      _: function (t, n, r, i) {
        e(t.nTable).on("order.dt.DT", function (e, l, o, s) {
          if (t === l) {
            var f = r.idx;
            n.removeClass(i.sSortAsc + " " + i.sSortDesc).addClass(
              "asc" == s[f]
                ? i.sSortAsc
                : "desc" == s[f]
                ? i.sSortDesc
                : r.sSortingClass
            );
          }
        });
      },
      jqueryui: function (t, n, r, i) {
        e("<div/>")
          .addClass(i.sSortJUIWrapper)
          .append(n.contents())
          .append(e("<span/>").addClass(i.sSortIcon + " " + r.sSortingClassJUI))
          .appendTo(n);
        e(t.nTable).on("order.dt.DT", function (e, l, o, s) {
          if (t === l) {
            var f = r.idx;
            n.removeClass(i.sSortAsc + " " + i.sSortDesc).addClass(
              "asc" == s[f]
                ? i.sSortAsc
                : "desc" == s[f]
                ? i.sSortDesc
                : r.sSortingClass
            );
            n.find("span." + i.sSortIcon)
              .removeClass(
                i.sSortJUIAsc +
                  " " +
                  i.sSortJUIDesc +
                  " " +
                  i.sSortJUI +
                  " " +
                  i.sSortJUIAscAllowed +
                  " " +
                  i.sSortJUIDescAllowed
              )
              .addClass(
                "asc" == s[f]
                  ? i.sSortJUIAsc
                  : "desc" == s[f]
                  ? i.sSortJUIDesc
                  : r.sSortingClassJUI
              );
          }
        });
      },
    },
  });
  var __htmlEscapeEntities = function (e) {
    Array.isArray(e) && (e = e.join(","));
    return "string" === typeof e
      ? e
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;")
      : e;
  };
  DataTable.render = {
    number: function (e, t, n, r, i) {
      return {
        display: function (l) {
          if ("number" !== typeof l && "string" !== typeof l) return l;
          var o = l < 0 ? "-" : "";
          var s = parseFloat(l);
          if (isNaN(s)) return __htmlEscapeEntities(l);
          s = s.toFixed(n);
          l = Math.abs(s);
          var f = parseInt(l, 10);
          var u = n ? t + (l - f).toFixed(n).substring(2) : "";
          0 === f && 0 === parseFloat(u) && (o = "");
          return (
            o +
            (r || "") +
            f.toString().replace(/\B(?=(\d{3})+(?!\d))/g, e) +
            u +
            (i || "")
          );
        },
      };
    },
    text: function () {
      return { display: __htmlEscapeEntities, filter: __htmlEscapeEntities };
    },
  };
  /**
   * Create a wrapper function for exporting an internal functions to an external API.
   *  @param {string} fn API function name
   *  @returns {function} wrapped function
   *  @memberof DataTable#internal
   */ function _fnExternApiFunc(e) {
    return function () {
      var t = [
        _fnSettingsFromNode((this || n)[DataTable.ext.iApiIndex]),
      ].concat(Array.prototype.slice.call(arguments));
      return DataTable.ext.internal[e].apply(this || n, t);
    };
  }
  e.extend(DataTable.ext.internal, {
    _fnExternApiFunc: _fnExternApiFunc,
    _fnBuildAjax: _fnBuildAjax,
    _fnAjaxUpdate: _fnAjaxUpdate,
    _fnAjaxParameters: _fnAjaxParameters,
    _fnAjaxUpdateDraw: _fnAjaxUpdateDraw,
    _fnAjaxDataSrc: _fnAjaxDataSrc,
    _fnAddColumn: _fnAddColumn,
    _fnColumnOptions: _fnColumnOptions,
    _fnAdjustColumnSizing: _fnAdjustColumnSizing,
    _fnVisibleToColumnIndex: _fnVisibleToColumnIndex,
    _fnColumnIndexToVisible: _fnColumnIndexToVisible,
    _fnVisbleColumns: _fnVisbleColumns,
    _fnGetColumns: _fnGetColumns,
    _fnColumnTypes: _fnColumnTypes,
    _fnApplyColumnDefs: _fnApplyColumnDefs,
    _fnHungarianMap: _fnHungarianMap,
    _fnCamelToHungarian: _fnCamelToHungarian,
    _fnLanguageCompat: _fnLanguageCompat,
    _fnBrowserDetect: _fnBrowserDetect,
    _fnAddData: _fnAddData,
    _fnAddTr: _fnAddTr,
    _fnNodeToDataIndex: _fnNodeToDataIndex,
    _fnNodeToColumnIndex: _fnNodeToColumnIndex,
    _fnGetCellData: _fnGetCellData,
    _fnSetCellData: _fnSetCellData,
    _fnSplitObjNotation: _fnSplitObjNotation,
    _fnGetObjectDataFn: b,
    _fnSetObjectDataFn: m,
    _fnGetDataMaster: _fnGetDataMaster,
    _fnClearTable: _fnClearTable,
    _fnDeleteIndex: _fnDeleteIndex,
    _fnInvalidate: _fnInvalidate,
    _fnGetRowElements: _fnGetRowElements,
    _fnCreateTr: _fnCreateTr,
    _fnBuildHead: _fnBuildHead,
    _fnDrawHead: _fnDrawHead,
    _fnDraw: _fnDraw,
    _fnReDraw: _fnReDraw,
    _fnAddOptionsHtml: _fnAddOptionsHtml,
    _fnDetectHeader: _fnDetectHeader,
    _fnGetUniqueThs: _fnGetUniqueThs,
    _fnFeatureHtmlFilter: _fnFeatureHtmlFilter,
    _fnFilterComplete: _fnFilterComplete,
    _fnFilterCustom: _fnFilterCustom,
    _fnFilterColumn: _fnFilterColumn,
    _fnFilter: _fnFilter,
    _fnFilterCreateSearch: _fnFilterCreateSearch,
    _fnEscapeRegex: S,
    _fnFilterData: _fnFilterData,
    _fnFeatureHtmlInfo: _fnFeatureHtmlInfo,
    _fnUpdateInfo: _fnUpdateInfo,
    _fnInfoMacros: _fnInfoMacros,
    _fnInitialise: _fnInitialise,
    _fnInitComplete: _fnInitComplete,
    _fnLengthChange: _fnLengthChange,
    _fnFeatureHtmlLength: _fnFeatureHtmlLength,
    _fnFeatureHtmlPaginate: _fnFeatureHtmlPaginate,
    _fnPageChange: _fnPageChange,
    _fnFeatureHtmlProcessing: _fnFeatureHtmlProcessing,
    _fnProcessingDisplay: _fnProcessingDisplay,
    _fnFeatureHtmlTable: _fnFeatureHtmlTable,
    _fnScrollDraw: _fnScrollDraw,
    _fnApplyToChildren: _fnApplyToChildren,
    _fnCalculateColumnWidths: _fnCalculateColumnWidths,
    _fnThrottle: T,
    _fnConvertToWidth: _fnConvertToWidth,
    _fnGetWidestNode: _fnGetWidestNode,
    _fnGetMaxLenString: _fnGetMaxLenString,
    _fnStringToCss: _fnStringToCss,
    _fnSortFlatten: _fnSortFlatten,
    _fnSort: _fnSort,
    _fnSortAria: _fnSortAria,
    _fnSortListener: _fnSortListener,
    _fnSortAttachListener: _fnSortAttachListener,
    _fnSortingClasses: _fnSortingClasses,
    _fnSortData: _fnSortData,
    _fnSaveState: _fnSaveState,
    _fnLoadState: _fnLoadState,
    _fnImplementState: _fnImplementState,
    _fnSettingsFromNode: _fnSettingsFromNode,
    _fnLog: _fnLog,
    _fnMap: _fnMap,
    _fnBindAction: _fnBindAction,
    _fnCallbackReg: _fnCallbackReg,
    _fnCallbackFire: _fnCallbackFire,
    _fnLengthOverflow: _fnLengthOverflow,
    _fnRenderer: _fnRenderer,
    _fnDataSource: _fnDataSource,
    _fnRowAttributes: _fnRowAttributes,
    _fnExtend: _fnExtend,
    _fnCalculateEnd: function () {},
  });
  e.fn.dataTable = DataTable;
  DataTable.$ = e;
  e.fn.dataTableSettings = DataTable.settings;
  e.fn.dataTableExt = DataTable.ext;
  e.fn.DataTable = function (t) {
    return e(this || n)
      .dataTable(t)
      .api();
  };
  e.each(DataTable, function (t, n) {
    e.fn.DataTable[t] = n;
  });
  return DataTable;
});
var i = r;
export { i as default };
