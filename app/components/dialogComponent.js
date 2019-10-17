app.component("dialogComponent", {
    templateUrl: "views/dialogComponent.html",
    controller: dialogCtrl,
    controllerAs: "dialogCtrl",
    bindings :{
        message: '@'
    }
});

function dialogCtrl() {
}