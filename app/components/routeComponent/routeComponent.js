app.component("routeComponent", {
    controller: routeCtrl,
    templateUrl: "views/routeComponent.html"
});

function routeCtrl(weatherService) {
    this.log = function () {
        console.log(weatherService.updateWeather());
    }
}
