import {Controller} from "@hotwired/stimulus";


export default class extends Controller {
    static values = {
        sidebarCollapsed: Boolean
    }

    connect() {
        $(document).on('turbo:load', this.initializeAdminLTEComponents.bind(this))
        if (this.sidebarCollapsedValue) {
            $('body').addClass('sidebar-collapse');
        }
    }

    initializeAdminLTEComponents() {
        // Sidebar menu
        $('.sidebar-menu').tree();

        // Bootstrap tooltip
        $('[data-toggle="tooltip"]').tooltip();

        // SlimScroll
        $('.slimscroll').slimScroll({
            height: '100%',
            railOpacity: 0.4,
            wheelStep: 10
        });
    }
}
