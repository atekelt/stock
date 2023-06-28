import {Controller} from "@hotwired/stimulus"

// Connects to data-controller="inbox"

export default class extends Controller {
    static targets = ["results"]

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

            this._initDataTable();
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
            this._initDataTable();
        } catch (error) {
            console.error(error);
        }
    }
    async compose(event) {
        event.preventDefault()


        try {


            const link = event.currentTarget

            const url = link.href

            const response = await fetch(url, {headers: {"Turbo-Frame": this.resultsTarget.id}});
            console.log(response)
            const html = await response.text();
            this.resultsTarget.innerHTML = html;
        } catch (error) {
            console.error(error);
        }
    }

    _initDataTable() {
        const table = document.querySelector("#user-table");
        if (table) {
            const dataTable = new DataTable(table, {
                pagination: true,
                // searching: true,
                responsive: true,
                processing: true,
                info: true,
            });
        }
    }

    renderData(data) {
        const table = document.createElement("table");
        table.classList.add("table");
        table.id = "user-table";
        table.innerHTML = `
     <thead>
        <tr>
          <th>Username</th>
          <th>Subject</th>
          <th>Time</th>
            </thead>
      <tbody>
      </tbody>
    `;
        const tbody = table.querySelector("tbody");

        data.forEach((message) => {
            const tr = document.createElement("tr");
            tr.innerHTML = `
        <td>${message.sender.user_name}</td>
        <td>${message.subject}</td>
        <td>${message.created_at}</td>
        `
            tbody.appendChild(tr);
        });

        return table;

    }
}
