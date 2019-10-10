app.component("routeComponent", {
    controller: routeCtrl,
    template: "<div class='switcher'><div class='switchButton'>Button</div><div class='switchButton'>Button</div></div>"

})
function routeCtrl() {
    this.name = "routeComponent!";
}