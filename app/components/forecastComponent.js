app.component("forecastComponent", {
    templateUrl: "views/forecastComponent.html",
    controller: forecastController,
    controllerAs: "forecastCtrl",
    bindings: {
        data: "<"
    }
});

function forecastController(weatherService) {
    let ctrl = this;

    ctrl.selectedDay = 0;

    ctrl.showInfo = false;

    ctrl.forecasts = [];

    ctrl.currentDate = new Date();

    ctrl.selectedDate = new Date();

    ctrl.$onInit = function () {
        ctrl.id = ctrl.data.id;
        ctrl.name = ctrl.data.name;
        ctrl.currentWeather = ctrl.data;
        ctrl.updateForecast();
    };

    ctrl.setWeather = function () {
        ctrl.data = ctrl.selectedDay === 0 ? ctrl.currentWeather : ctrl.forecasts[ctrl.selectedDay - 1];
        ctrl.selectedDate = new Date();
        ctrl.selectedDate.setDate(ctrl.currentDate.getDate() + ctrl.selectedDay);
    };


    this.updateForecast = function () {
        weatherService.getForecast(ctrl.id).then(function (result) {
            ctrl.forecasts = result.list;
        })
    }

}
