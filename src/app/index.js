import { Weather } from './Weather.js'
import { UI } from './UI.js'
require('./index.css')

const weather = new Weather('London', 'uk')
const ui = new UI()

async function fetchWeather() {
    const data = await weather.getWeather()
    console.log(data);
    ui.render(data)
}

document.getElementById('w-change-btn').addEventListener('click', () => {
    const city = document.getElementById('city').value
    const countryCode = document.getElementById('country-code').value
    weather.changeLocation(city, countryCode)
    fetchWeather()
    e.preventDefault()
})

document.addEventListener('DOMContentLoaded', fetchWeather)