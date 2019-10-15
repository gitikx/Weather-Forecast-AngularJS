app.component("forecastComponent", {
    templateUrl: "views/forecastComponent.html",
    controller: forecastController,
    bindings: {
        data: "<"
    }
});

function forecastController(weatherService) {

}
