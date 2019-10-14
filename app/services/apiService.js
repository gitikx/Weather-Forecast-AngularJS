app.service("apiService", apiService);

function apiService($http) {
    this.updateWeather = function (url, parameters) {
        parameters.forEach(function (city) {
            $http({
                method: 'GET',
                url: url,
                params: {
                    "q": city.requestParameter
                },
                headers: {
                    'X-RapidAPI-Key': "f2fd435ba9msha503b8651eee0c8p1e9af2jsn219cc11ca6b5",
                    'X-RapidAPI-Host': "community-open-weather-map.p.rapidapi.com",
                }
            }).then(function successCallback(response) {
                city.data = response.data;
            }, function errorCallback(response) {
                console.log("error request");
            });
        })
    };
}
