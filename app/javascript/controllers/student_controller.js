import {Controller} from "@hotwired/stimulus"

// Connects to data-controller="assessment"
export default class extends Controller {
    static targets = ["type", "results"]

    async search(e) {
        event.preventDefault();

        const type = this.typeTarget.value;
        const url = `/students/search?q=${type}`;

        const response = await fetch(url, {headers: {"Turbo-Frame": this.resultsTarget.id}});
        const html = await response.text();

        this.resultsTarget.innerHTML = html;
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
}