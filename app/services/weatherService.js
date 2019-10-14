app.service("weatherService", weatherService);

function weatherService(apiService) {
    this.citiesData = [
        {
            requestParameter: "Minsk, belarus",
            city: "Minsk",
            country: "Belarus"
        },
        {
            requestParameter: "Grodno, belarus",
            city: "Grodno",
            country: "Belarus"
        },
        {
            requestParameter: "Homyel, belarus",
            city: "Homyel",
            country: "Belarus"
        }, {
            requestParameter: "Brest, belarus",
            city: "Brest",
            country: "Belarus"
        }, {
            requestParameter: 'Vitsyebsk, belarus',
            city: "Vitsebsk",
            country: "Belarus"
        },
        {
            requestParameter: 'Mahilyow, belarus',
            city: "Mogilev",
            country: "Belarus"
        }
    ];
    apiService.updateWeather('https://community-open-weather-map.p.rapidapi.com/weather', this.citiesData);
}