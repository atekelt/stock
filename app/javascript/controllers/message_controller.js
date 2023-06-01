import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    static targets = [ "results" ]

    async fetch(event) {
        event.preventDefault()

        const link = event.target
        const frame = link.getAttribute("data-turbo-frame") || "_top"
        const response = await fetch(link.href, { headers: { "Turbo-Frame": frame } })
        const data = await response.json()

        this.resultsTarget.innerHTML = `
      <table>
        <thead>
          <tr>
            <th>Subject</th>
            <th>Sender</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>${data.subject}</td>
            <td>${data.sender.user_name}</td>
          </tr>
        </tbody>
      </table>
    `
    }
}