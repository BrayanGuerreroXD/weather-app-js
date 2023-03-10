export class Weather {
    constructor(city, countryCode) {
        this.apikey = 'ff38a395847c9b1c7d007d1112dfdd9b'
        this.city = city
        this.countryCode = countryCode
    }

    async getWeather() {
        const URI = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apikey}&units=metric`
        const response = await fetch(URI)
        const data = await response.json()
        return data
    }

    changeLocation(city, countryCode) {
        this.city = city
        this.countryCode = countryCode
    }
}