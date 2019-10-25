app.component('starredComponent', {
    controller: starredController,
    templateUrl: 'views/starredComponent.html',
    controllerAs: 'starredCtrl'
});

function starredController(weatherService, dataService) {

    let ctrl = this;

    ctrl.searchParameters = weatherService.searchParameters;

    ctrl.$doCheck = function () {
        if (dataService.componentsData.isMenuShown) {
            ctrl.marginClass = "content_margined";
        } else ctrl.marginClass = "";
    };

    ctrl.searchParameters = weatherService.searchParameters;

    ctrl.$onInit = function () {
        ctrl.getWeather();
    };

    ctrl.getWeather = function () {
        weatherService.getWeathersById(dataService.getStarred()).then(function (result) {
            ctrl.citiesWeather = result;
        }, function (message) {
            ctrl.showDialog(message);
        });
    };

    ctrl.deleteFromStarred = function (id) {
        console.log(id);
    }

    ctrl.showDialog = function (message) {
        dialogService.showDialog(message);
    }
}