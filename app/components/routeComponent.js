app.component("routeComponent", {
    controller: routeCtrl,
    controllerAs : "routeCtrl",
    templateUrl: "views/routeComponent.html"
});

function routeCtrl(dataService, translateService) {
     let ctrl = this;

     this.selectedLanguage = "en";

     this.isSearchShown = false;

     this.data = dataService.componentsData;

     this.changeLanguage = function () {
         translateService.changeLanguage(ctrl.selectedLanguage);
     }

     this.searchShow = function () {
         ctrl.isSearchShown = !ctrl.isSearchShown;
     };

     this.menuShow = function () {
         ctrl.data.isMenuShown = !ctrl.data.isMenuShown;
     }
}
