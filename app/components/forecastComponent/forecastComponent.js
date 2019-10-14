app.component("forecastComponent", {
    templateUrl: "components/forecastComponent/forecastComponent.html",
    controller: forecastController,
    bindings: {
        data: "<"
    }
});

function forecastController(weatherService) {
    this.log = function (data) {
        weatherService.log()
    }
}