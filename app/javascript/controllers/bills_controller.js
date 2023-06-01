import {Controller} from "@hotwired/stimulus"

// Connects to data-controller="bills"

export default class extends Controller {
    connect() {
        // if (!this.data.has("dataTableInitialized")) {
        //     const table = $('.dtable').DataTable()
        //      this.data.set("dataTableInitialized", true);
        // }


        $("form").on('submit', (e) => {
            const $form = $(e.target)
            // Iterate over all checkboxes in the table
            table.$('input[type="checkbox"]').each(function(){
                // If checkbox doesn't exist in DOM
                if(!$.contains(document, this)){
                    // If checkbox is checked
                    if(this.checked){
                        // Create a hidden element
                        $form.append(
                            $('<input>')
                                .attr('type', 'hidden')
                                .attr('name', this.name)
                                .val(this.value)
                        )
                    }
                }
            })
        })

        $("input:checkbox").on("click", false)

        $(this.element).on('click', 'tr', (e) => {
            const theCheckBox = $(e.target).closest('tr').find(".form-check-input")
            if (theCheckBox.length != 0) {
                $(e.target).closest('tr').toggleClass('selected')
                theCheckBox.prop("checked",!theCheckBox.prop("checked"))
                $("#selected_count").text(table.$('input:checkbox:checked').length + " Bills Selected")
            }
        })
    }
}