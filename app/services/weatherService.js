app.service("weatherService", weatherService);

function weatherService(apiService, $q) {
    this.searchParameters = {
        text: ""
    }

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

    this.getWeathersById = function (idArray) {
        let promises = [],
            data = [],
            deferred = $q.defer();

        idArray.forEach(function (id) {
            promises.push(apiService.get('weather', {id: id}));
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

    this.getForecast = function (cityId) {
        let data, deferred = $q.defer();
        apiService.get('forecast', {id: cityId, cnt: 16}).then(function (result) {
            data = result.data;
            deferred.resolve(data)
        }, function (reject) {
            deferred.reject("Connection error")
        });

        return deferred.promise;
    }

    this.convertTemperatures = function (cities) {
        cities.forEach(function (element) {
            element.main.temp = ~~(element.main.temp - 273);
        })
    }
}
