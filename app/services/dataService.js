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
    };

    this.getStarred = function () {
        let cookie = $cookies.get('starred');
        if(cookie === undefined) return cookie;
        else return cookie.split('_');

    };

    this.removeFromStarred = function (cityId) {
        let starred = $cookies.get('starred').split('_');
        starred.splice(starred.indexOf(cityId.toString()), 1);
        if (starred.length === 0) $cookies.remove('starred');
        else $cookies.put('starred', starred.join('_'));
        console.log("doshel")
    }
}