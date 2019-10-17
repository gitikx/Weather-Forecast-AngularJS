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
    var ctrl = this;
    debugger;
    console.log(ctrl.citiesNames);

}
