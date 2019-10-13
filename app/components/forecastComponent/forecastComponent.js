app.component("forecastComponent", {
    templateUrl: "components/forecastComponent/forecastComponent.html",
    controller: forecastController,
    bindings: {
        data: "<"
    }
});

function forecastController() {
    this.log = function (data) {
        console.log(data);
    }
}
