import {Controller} from "@hotwired/stimulus"

// Connects to data-controller="max-min-validator"


export default class extends Controller {
    static targets = [ "input", "error" ];

    connect() {
        this.validate();
    }

    validate() {
        const input = this.inputTarget;
        const error = this.errorTarget;
        const minScore = parseFloat(input.dataset.minScore);
        const maxScore = parseFloat(input.dataset.maxScore);
        const value = parseFloat(input.value);

        if (isNaN(value) || value < minScore || value > maxScore) {
            input.classList.add("is-invalid");
            error.classList.remove("d-none");
        } else {
            input.classList.remove("is-invalid");
            error.classList.add("d-none");
        }
    }

    get inputTarget() {
        const targetSelector = this.data.get("max_min_validator_target");
        return document.querySelector(targetSelector);
    }

    get errorTarget() {
        const targetSelector = this.data.get("max_min_validator_error_target");
        return document.querySelector(targetSelector);
    }

    initialize() {
        this.inputTarget.addEventListener("input", () => {
            this.validate();
        });
    }
}
