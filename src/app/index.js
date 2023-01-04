import { Weather } from './Weather.js'
import { UI } from './UI.js'
import { Store } from './Store.js'
require('./index.css')


const { city, countryCode } = store.getLocationData
const weather = new Weather(city, countryCode)
const ui = new UI()
const store = new Store()

async function fetchWeather() {
    const data = await weather.getWeather()
    console.log(data);
    ui.render(data)
}

document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value
    const countryCode = document.getElementById('country-code').value
    weather.changeLocation(city, countryCode)
    store.setLocationData(city, countryCode)
    fetchWeather()
    e.preventDefault()
})

document.addEventListener('DOMContentLoaded', fetchWeather)