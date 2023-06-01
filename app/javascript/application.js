// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails";
import "controllers";
import {Turbo} from "@hotwired/turbo-rails";

Turbo.session.drive = false;

import * as bootstrap from "bootstrap";

import "jquery";
import "adminlte";
import "overlay-scrollbars";
import "jquery.dataTables.min";
import "dataTables.bootstrap5.min";
import "dataTables.responsive.min";
import "dataTables.searchPanes";
import "dataTables.select";
import "searchPanes.bootstrap5";
import "select.bootstrap5";
import "select2.min";
import "ii";
import "timer";
import "chartkick"
import "Chart.bundle"
import Highcharts from "highcharts"

window.Highcharts = Highcharts

import "trix"
import "@rails/actiontext"
import "@rails/request.js"

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
});

// https://getbootstrap.com/docs/5.1/forms/validation/#custom-styles
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})();