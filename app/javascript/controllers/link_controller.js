// hello_controller.js
import { Controller } from "@hotwired/stimulus";


export default class extends Controller {
  connect() {
    if (this.element.href === window.location.href) {
      this.element.classList.add("active")
    }
  }
}
