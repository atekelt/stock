import {Controller} from "@hotwired/stimulus"

// Connects to data-controller="inbox"

export default class extends Controller {
    static targets = ["results",'modal']

    show(event) {
        event.preventDefault()
        const url = event.currentTarget.href
        fetch(url, { headers: { "X-Requested-With": "XMLHttpRequest" } })
            .then(response => response.text())
            .then(html => {
                this.results.innerHTML = html
                $(this.results).modal("show")
            })
    }
    async inbox(event) {
        event.preventDefault()


        try {


            const link = event.currentTarget

            const response = await fetch(link.href)
            const data = await response.json()
            console.log(data)
            const table = this.renderData(data);

            this.resultsTarget.innerHTML = "";
            this.resultsTarget.appendChild(table);

            // this._initDataTable();
        } catch (error) {
            console.error(error);
        }
    }

    async show(event) {
        event.preventDefault()


        try {


            const link = event.currentTarget

            const url = link.href

            const response = await fetch(url, {headers: {"Turbo-Frame": this.resultsTarget.id}});
            const html = await response.text();
            this.resultsTarget.innerHTML = html;

        } catch (error) {
            console.error(error);
        }
    }
    async fetch(event) {
        event.preventDefault()


        try {


            const link = event.currentTarget

            const url = link.href

            const response = await fetch(url, {headers: {"Turbo-Frame": this.resultsTarget.id}});
            const html = await response.text();
            this.resultsTarget.innerHTML = html;
            // this._initDataTable();
        } catch (error) {
            console.error(error);
        }
    }

    _initDataTable() {
        const table = document.querySelector(".dtable");
        if (table) {
            const dataTable = new DataTable(table, {
                // pagination: true,
                // searching: true,
                // responsive: true,
                // processing: true,
                // info: true,
            });
        }
    }


}
