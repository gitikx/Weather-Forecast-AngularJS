app.component("weatherComponent", {
    controller: weatherCtrl,
    templateUrl: "components/weatherComponent/weatherComponent.html"
});

function weatherCtrl(weatherService) {
    this.data = weatherService.citiesData;
}
