import { Controller } from "@hotwired/stimulus"
import { Application } from '@hotwired/stimulus'
import ReadMore from 'stimulus-read-more'

const application = Application.start()
application.register('read-more', ReadMore)

// Connects to data-controller="read-more"
export default class extends Controller {
  connect() {
  }
}
