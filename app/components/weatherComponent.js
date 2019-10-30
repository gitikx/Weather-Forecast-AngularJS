app.component("weatherComponent", {
    controller: weatherCtrl,
    controllerAs: "weatherCtrl",
    templateUrl: "views/weatherComponent.html"
});

function weatherCtrl(weatherService, dialogService, dataService, translateService) {
    let ctrl = this;

    ctrl.$doCheck = function() {
        if(dataService.componentsData.isMenuShown){
            ctrl.marginClass = "content_margined";
        }
        else ctrl.marginClass = "";
    };

    ctrl.searchParameters = weatherService.searchParameters;

    ctrl.$onInit = function () {
        ctrl.getWeather();
        ctrl.citiesNames = cities.map(function (item) {
            return item.city;
        });
    };

    ctrl.getWeather = function () {
        weatherService.getWeather().then(function (result) {
            ctrl.citiesWeather = result;
            weatherService.convertTemperatures(ctrl.citiesWeather);
        }, function (message) {
            ctrl.showDialog(message);
        });
    };

    ctrl.showDialog = function (message) {
        dialogService.showDialog(message);
    }
}
