app.component("autoCompleteComponent", {
    templateUrl: "views/autoCompleteComponent.html",
    controller: autoCompleteCtrl,
    controllerAs: "ctrl"
});

function autoCompleteCtrl(weatherService) {
    let ctrl = this;

    ctrl.searchParameters = weatherService.searchParameters;

    ctrl.citiesNames = cities;
}
