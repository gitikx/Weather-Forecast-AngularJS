app.component("routeComponent", {
    controller: routeCtrl,
    controllerAs : "routeCtrl",
    templateUrl: "views/routeComponent.html"
});

function routeCtrl(weatherService) {
    this.log = function () {
        console.log(weatherService.updateWeather());
    }
}
