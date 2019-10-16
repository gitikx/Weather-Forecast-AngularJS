app.component("weatherComponent", {
    controller: weatherCtrl,
    templateUrl: "views/weatherComponent.html"
});

function weatherCtrl(weatherService) {
    this.data = weatherService.updateWeather();
}
