app.component("forecastComponent", {
    templateUrl: "views/forecastComponent.html",
    controller: forecastController,
    controllerAs: "forecastCtrl",
    bindings: {
        starred: '<',
        onDelete: '&',
        data: "<"
    }
});

function forecastController(weatherService, dataService) {
    let ctrl = this;

    ctrl.selectedDay = 0;

    ctrl.showInfo = false;

    ctrl.forecasts = [];

    ctrl.currentDate = new Date();

    ctrl.endDate = new Date();

    ctrl.selectedDate = new Date();

    ctrl.$onInit = function () {
        ctrl.endDate.setDate(ctrl.currentDate.getDate() + 16);
        ctrl.id = ctrl.data.id;
        ctrl.name = ctrl.data.name;
        ctrl.currentWeather = ctrl.data;
        ctrl.updateForecast();
    };

    ctrl.setWeather = function () {
        console.log(ctrl.endDate.getDate());
        ctrl.data = ctrl.selectedDay === 0 ? ctrl.currentWeather : ctrl.forecasts[ctrl.selectedDay - 1];
        ctrl.selectedDate = new Date();
        ctrl.selectedDate.setDate(ctrl.currentDate.getDate() + ctrl.selectedDay);
    };

    ctrl.addToStarred = function () {
        if (ctrl.starred == true) {
            dataService.removeFromStarred(ctrl.data.id);
            ctrl.onDelete({index: ctrl.data.id});
        } else {
            dataService.addToStarred(ctrl.data.id);
        }

    };

    ctrl.updateForecast = function () {
        weatherService.getForecast(ctrl.id).then(function (result) {
            ctrl.forecasts = result.list;
        })
    }

}
