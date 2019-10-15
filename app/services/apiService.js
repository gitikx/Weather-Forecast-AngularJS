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
                headers: apiConfig
            }).then(function successCallback(response) {
                city.data = response.data;
            }, function errorCallback(response) {
                console.log("error request");
            });
        })
    };
}
