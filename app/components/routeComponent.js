app.component("routeComponent", {
    controller: routeCtrl,
    controllerAs : "routeCtrl",
    templateUrl: "views/routeComponent.html"
});

function routeCtrl(dataService) {
     let ctrl = this;

     this.isSearchShown = false;

     this.data = dataService.componentsData;

     this.searchShow = function () {
         ctrl.isSearchShown = !ctrl.isSearchShown;
     }

     this.menuShow = function () {
         ctrl.data.isMenuShown = !ctrl.data.isMenuShown;
     }
}
