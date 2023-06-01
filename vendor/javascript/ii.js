document.addEventListener("turbo:load", function () {
  var toastElList = [].slice.call(document.querySelectorAll(".toast"));
  var toastList = toastElList.map(function (toastEl) {
    return new bootstrap.Toast(toastEl).show(); // No need for options; use the default options
  });
  $("select").select2({
    theme: "bootstrap-5",
  });
  $(".nav-item").click(function () {
    $(".sidebar-mini").removeClass("sidebar-open");
    $(".sidebar-mini").addClass("sidebar-closed sidebar-collapse");
  });

  var table1 = $(".example").DataTable({
    dom: 'Pfrtip'
  });
  var table = $(".dtable").DataTable({
    responsive: true,
    // dom:
    //     '<"row justify-content-between mb-2 align-items-center"'
    //     + '<"col-md-auto col-12"B>'
    //     + '<"col-md-auto col-12 text-center"l>'
    //     + '<"col-md-auto col-12"f>'
    //     + '>'
    //     + '<t>'
    //     + '<"d-flex justify-content-between align-items-center"ip>',
    buttons: [
      {
        extend: "excel",
        titleAttr: "Export to Excel",
        exportOptions: {
          columns: ":visible",
        },
      },
      {
        extend: "csv",
        titleAttr: "Export to CSV",
        exportOptions: {
          columns: ":visible",
        },
      },
      "colvis",
    ],
  });

  $(".info").each(function (index) {
    $(this).text(
      $(this)
        .parent()
        .parent()
        .find("select option:selected")
        .parent()
        .attr("label")
    );
  });
});
