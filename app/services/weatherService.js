app.service("weatherService", weatherService);
function weatherService(apiService) {
    this.citiesData = cities;
    apiService.updateWeather('https://community-open-weather-map.p.rapidapi.com/weather', this.citiesData);
}
