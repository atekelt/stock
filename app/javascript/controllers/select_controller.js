import {Controller} from '@hotwired/stimulus';


import "jquery";
import "select2.min";

export default class extends Controller {
    connect() {
        $(this.element).select2({
            ajax: {
                url: '/search',
                dataType: 'json',
                delay: 250,
                data: function (params) {
                    return {
                        q: params.term,
                    };
                },
                processResults: function (data) {
                    return {
                        results: data,
                    };
                },
                cache: true,
            },
            minimumInputLength: 3,
        });
    }
}
