app.component("forecastComponent", {
    templateUrl: "views/forecastComponent.html",
    controller: forecastController,
    controllerAs : "forecastCtrl",
    bindings: {
        data: "<"
    }
});

function forecastController() {

}
