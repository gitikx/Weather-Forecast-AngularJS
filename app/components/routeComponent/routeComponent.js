app.component("routeComponent", {
    controller: routeCtrl,
    templateUrl: "components/routeComponent/routeComponent.html"

})
function routeCtrl() {
    this.name = "routeComponent!";
}
