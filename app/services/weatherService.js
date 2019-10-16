app.service("weatherService", weatherService);

function weatherService(apiService, $q) {
    this.updateWeather = function () {
        let promises = [], data = [];
        cities.forEach(function (city) {
            promises.push(apiService.get('weather', {q: city.requestParameter}));
        });
        $q.all(promises).then(function (results) {
            results.forEach(function (element) {
                data.push(element.data);
            })
        });
        return data;
    };
}
