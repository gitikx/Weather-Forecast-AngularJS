app.service("weatherService", weatherService);

function weatherService(apiService, $q) {
    this.getWeather = function () {
        let promises = [],
            data = [],
            deferred = $q.defer();

        cities.forEach(function (city) {
            promises.push(apiService.get('weather', {q: city.fullName}));
        });

        $q.all(promises).then(function (results) {
            results.forEach(function (element) {
                data.push(element.data);
            });
            deferred.resolve(data);
        }, function (reject) {
            deferred.reject("Connection error");
        });

        return deferred.promise;
    };
}