import {Controller} from "@hotwired/stimulus";
// import DataTable from "datatables.net";
// app/javascript/controllers/datatable_controller.js


export default class extends Controller {
    connect() {
        if (!this.data.has("dataTableInitialized")) {
            this.initDataTable();
            this.data.set("dataTableInitialized", true);
        }
    }

    initDataTable() {
        const table = this.element;
        if (table) {
            const dataTable = new DataTable(table, {
                pagination: true,
                searching: true,
                responsive: true,
                processing: true,
                info: true,
                button: true,
                // dom: 'Pfrtip'
            });
        }
    }
}
