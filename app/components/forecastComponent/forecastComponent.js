app.component("forecastComponent", {
    templateUrl: "components/forecastComponent/forecastComponent.html",
    controller : forecastController,
    bindings:{
        data : "<"
    }
})
function forecastController() {
    console.log(this.data);
    this.log = function (data) {
        console.log(data.weather[0].main);
    }
}
