class UI{
    constructor(){
        this.location = document.querySelector('#w-location');
        this.desc = document.querySelector('#w-desc');
        this.string = document.querySelector('#w-string');
        this.details = document.querySelector('#w-details');
        this.icon = document.querySelector('#w-icon');
        this.humidity = document.querySelector('#w-humidity');
        this.feelsLike = document.querySelector('#w-feels-like');
        this.dewpoint = document.querySelector('#w-dewpoint');
        this.wind = document.querySelector('#w-wind');
    }
    paint(weather){
        this.location.textContent = weather.name;
        this.desc.textContent = weather.weather[0].description;
        this.string.textContent = `${weather.main.temp}°C`;
        // this.details.textContent = weather.weather[0].description;
        this.icon.setAttribute('src', `https://openweathermap.org/img/wn/${weather.weather[0].icon}.png` );
        this.humidity.textContent = `Realtive humidity: ${weather.main.humidity}%`;
        this.feelsLike.textContent = `Feels like ${weather.main.feels_like}`;
        this.dewpoint.textContent = `Minimun temperature today ${weather.main.temp}`; 
        this.wind.textContent = `Wind speed is ${weather.wind.speed}m/s`;

    }
}