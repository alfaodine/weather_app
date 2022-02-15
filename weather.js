class Weather{
    constructor(city){
        this.apiKey = '3ba3858e60c0d261da676220094b2b99';
        this.city = city;
    }

    async getWeather() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=${this.apiKey}`);
        const responseData = await response.json();
        return responseData;
    }

    changeLocation(city){
        this.city = city;
    }
}