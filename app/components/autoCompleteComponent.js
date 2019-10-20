app.component("autoCompleteComponent", {
    templateUrl: "views/autoCompleteComponent.html",
    controller: autoCompleteCtrl,
    controllerAs: "ctrl",
    bindings: {
        cityName: "=",
        citiesNames: '<'
    }
});

function autoCompleteCtrl() {
}
