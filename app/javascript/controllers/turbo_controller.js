import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "resultsContainer", "term" ]

  async search(event) {
    event.preventDefault()

    let inputValue = this.termTarget.value

    try {
      let response = await fetch(`/admin/users/search?query=${inputValue}`)
      let data = await response.json()

      this.resultsContainerTarget.innerHTML = this._renderResults(data)
    } catch (error) {
      console.error(error)
    }
  }

  _renderResults(data) {
    let html = ""
    html+=` <table class="table">
    <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Role</th>
    </tr>
    </thead>
    <tbody>
   `
    data.forEach(user => {
      html += `<tr>
                 <td>${user.user_name}</td>
                 <td>${user.email}</td>
                 <td>${user.current_role}</td>
               </tr>`
    })
    html+=` </tbody> </table>`
    return html
  }
}
