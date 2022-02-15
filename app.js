const ui = new UI();
const storage = new Storage();

const weatherLocation = storage.getLocationData();

const weather = new Weather(weatherLocation);

document.addEventListener('DOMContentLoaded', getWeather)

document.querySelector('#w-change-btn').addEventListener('click', (e) => {
    const city = document.querySelector('#city').value;
    weather.changeLocation(city);
    storage.setLocationData(city);
    getWeather();
    $('#locModal').modal('hide');
})

function getWeather(){
    weather.getWeather()
    .then(result => {
        ui.paint(result)
        initMap(result.coord.lat, result.coord.lon)
    })
    .catch(err => console.log(err))
}