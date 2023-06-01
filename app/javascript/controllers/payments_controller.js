import { Controller } from "@hotwired/stimulus";

import Chartkick from 'chartkick'

export default class extends Controller {
    connect() {
        const chartData = JSON.parse(this.element.getAttribute('data-chart-data'))
        new Chartkick.LineChart(this.element, chartData)
    }
}
