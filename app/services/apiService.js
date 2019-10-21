app.service("apiService", apiService);

function apiService($http) {
    this.get = function (url, parameters) {
        return $http({
            method: 'GET',
            url: apiConfig.apiUrl + url,
            params: parameters,
            headers: apiConfig
        })
    };
}
