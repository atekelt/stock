import {Controller} from "@hotwired/stimulus"

import "jquery";
import "select2.min";

export default class extends Controller {
    connect() {
             $("select").select2({
                theme: "bootstrap-5",
            });


    }
}

