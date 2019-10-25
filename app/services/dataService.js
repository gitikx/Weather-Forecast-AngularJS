app.service('dataService', dataService);

function dataService($cookies) {
    this.componentsData = {
        isMenuShown: false
    }

    this.addToStarred = function (cityId) {
        let starred = $cookies.get('starred');
        if (starred === undefined) starred = cityId;
        else {
            $cookies.remove('starred');
            starred = starred.split('_').indexOf(cityId.toString()) === -1 ? starred + "_" + cityId : starred;
        }
        $cookies.put('starred', starred);
    }

    this.getStarred = function () {
        return $cookies.get('starred').split('_');
    }

    this.removeFromStarred = function (cityId) {
        let starred = $cookies.get('starred').split('_');
        starred.splice(starred.indexOf(cityId.toString()), 1);
        $cookies.put('starred',starred.join('_'));
    }
}