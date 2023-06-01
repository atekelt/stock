import {Controller} from "@hotwired/stimulus";

export default class extends Controller {
    static targets = ["resultsContainer", "term", "loading"];


    async search1(e) {
        event.preventDefault();

        const type = this.termTarget.value;
        const url = `/admin/users/search?query=${type}`;

        const response = await fetch(url, { headers: { "Turbo-Frame": this.resultsContainerTarget.id } });
        const html = await response.text();

        this.resultsContainerTarget.innerHTML = html;
    }

    async search(e) {
        event.preventDefault();

        const type = this.termTarget.value;
        const url = `/admin/users/search?query=${type}`;

        const response = await fetch(url, { headers: { "Turbo-Frame": this.resultsContainerTarget.id } });
        const html = await response.text();

        this.resultsContainerTarget.innerHTML = html;
    }
}
