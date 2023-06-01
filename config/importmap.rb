# Pin npm packages by running ./bin/importmap

pin 'application', preload: true
pin '@hotwired/turbo-rails', to: 'turbo.min.js', preload: true
pin '@hotwired/stimulus', to: 'stimulus.min.js', preload: true
pin '@hotwired/stimulus-loading', to: 'stimulus-loading.js', preload: true

pin 'trix', preload: true
pin '@rails/actiontext', to: 'actiontext.js', preload: true
pin 'local-time' # @2.1.0
pin 'bootstrap' # @5.1.3
# pin "@popperjs/core", to: "@popperjs--core.js" # @2.11.2
pin 'underscore' # @1.4.4
pin 'jquery' # @3.6.0
pin 'sortablejs' # @1.14.0
pin 'overlay-scrollbars'
pin_all_from 'app/javascript/controllers', under: 'controllers'
pin 'adminlte' # @3.2.2
pin 'jquery.dataTables.min'
pin 'dataTables.bootstrap5.min'
pin 'dataTables.responsive.min'

pin 'select2.min' # @4.1.0
pin 'ii'
pin "chartkick", to: "chartkick.js"
pin "Chart.bundle", to: "Chart.bundle.js"

pin 'datatables.net-buttons/js/buttons.colVis',
    to: 'datatables.net-buttons.js.buttons.colVis.js' # @2.2.2
pin 'datatables.net' # @1.11.4

pin 'datatables.net-buttons-bs5' # @2.2.2
pin 'datatables.net-bs5' # @1.11.4
pin 'dataTables.searchPanes' # @1.3.0
pin 'searchPanes.bootstrap5' # @1.3.0
pin 'dataTables.select' # @1.3.0
pin 'select.bootstrap5' # @1.3.0
pin 'jzip'
pin 'vfs_fonts'
pin 'pdfmake.min'
pin 'highcharts' # @9.3.3
pin 'timer' # @9.3.3
pin 'dataTables.rowGroup.min.js'

pin "trix"
pin "@rails/actiontext", to: "actiontext.js"
pin "stimulus-read-more", to: "https://ga.jspm.io/npm:stimulus-read-more@4.1.0/dist/stimulus-read-more.mjs"
pin "@hotwired/stimulus", to: "https://ga.jspm.io/npm:@hotwired/stimulus@3.2.1/dist/stimulus.js"
pin "stimulus-rails-nested-form", to: "https://ga.jspm.io/npm:stimulus-rails-nested-form@4.1.0/dist/stimulus-rails-nested-form.mjs"
pin "highcharts" # @10.3.3
