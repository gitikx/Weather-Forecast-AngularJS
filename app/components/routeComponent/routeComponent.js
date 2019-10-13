app.component("routeComponent", {
    controller: routeCtrl,
    templateUrl: "components/routeComponent/routeComponent.html"

})

function routeCtrl(dataService, $scope) {
    dataService.updateWeather();
    this.data = dataService.citiesData;

}
