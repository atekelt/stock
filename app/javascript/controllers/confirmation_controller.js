import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="confirmation"
export default class extends Controller {
  static values = { message: String };

  confirm(event) {
    if (!window.confirm("Are You sure to save!")) {
      event.preventDefault();
    }
  }
}
