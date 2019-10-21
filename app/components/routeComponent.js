app.component("routeComponent", {
    controller: routeCtrl,
    controllerAs : "routeCtrl",
    templateUrl: "views/routeComponent.html"
});

function routeCtrl(weatherService) {
     let ctrl = this;

     this.isSearchShown = false;

     this.isMenuShown = false;

     this.searchShow = function () {
         ctrl.isSearchShown = !ctrl.isSearchShown;
     }

     this.menuShow = function () {
         ctrl.isMenuShown = ! ctrl.isMenuShown;
     }
}
