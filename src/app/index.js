import { Weather } from './Weather.js'
const weather = new Weather('Londo', 'uk')
require('./index.css')

async function fetchWeather() {
    const data = await weather.getWeather()
    console.log(data);
}

document.addEventListener('DOMContentLoaded', )