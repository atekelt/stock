import {Controller} from "@hotwired/stimulus";


export default class extends Controller {

    static targets = ['modal']

    open() {
        this.modalTarget.modal('show')
    }

    close() {
        this.modalTarget.modal('hide')
    }
}


