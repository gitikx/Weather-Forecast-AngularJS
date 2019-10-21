app.component("weatherComponent", {
    controller: weatherCtrl,
    controllerAs: "weatherCtrl",
    templateUrl: "views/weatherComponent.html"
});

function weatherCtrl(weatherService, dialogService) {
    let ctrl = this;

    ctrl.searchParameter = "";

    ctrl.$onInit = function () {

        ctrl.getWeather();
        ctrl.citiesNames = cities.map(function (item) {
            return item.city;
        });
    };

    ctrl.getWeather = function () {
        weatherService.getWeather().then(function (result) {
            ctrl.citiesWeather = result;
        }, function (message) {
            ctrl.showDialog(message);
        });
    };

    ctrl.showDialog = function (message) {
        dialogService.showDialog(message);
    }
}
