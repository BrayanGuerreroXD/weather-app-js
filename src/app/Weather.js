export class Weather {
    constructor(city, countryCode) {
        this.apikey = 'ff38a395847c9b1c7d007d1112dfdd9b'
        this.city = city
        this.countryCode = countryCode
    }

    async getWeather() {
        const URI = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apikey}`
        const data = await fetch(URI)
        return data
    }
}