app.service("dialogService", dialogService);

function dialogService() {
    this.showDialog = function (message,$compile) {
        var elem = angular.element(document.querySelector("body"));
        // var dialog = angular.element('<div class="dialog-container">' +
        //     '<div class="dialog-container_window">' +
        //     '<div class="dialog-container_image"></div>' +
        //     '<div class="dialog-container_message">' + message + '</div>' +
        //     '</div> <dialog-component></dialog-component>' +
        //     '</div>');
        var dialog = angular.element('<dialog-component></dialog-component>');
        console.log($compile);
        dialog.on("click", function (){
            dialog.remove();
        });
        elem.prepend(dialog);
    }
}
