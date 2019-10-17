app.component("autoCompleteComponent", {
    templateUrl: "views/autoCompleteComponent.html",
    controller: autoCompleteCtrl,
    bindings: {
        cityName: "=",
        citiesNames: '<'
    }
});

function autoCompleteCtrl() {
    var ctrl = this;

}
