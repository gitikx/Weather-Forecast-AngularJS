app.service("dataService", dataService);

function dataService($http) {
    this.citiesData = [
        {
            requestParameter: "Minsk, belarus",
            city: "Minsk",
            country: "Belarus"
        },
        {
            requestParameter: "Grodno, belarus",
            city: "Grodno",
            country: "Belarus"
        },
        {
            requestParameter: "Homyel, belarus",
            city: "Homyel",
            country: "Belarus"
        }, {
            requestParameter: "Brest, belarus",
            city: "Brest",
            country: "Belarus"
        }, {
            requestParameter: 'Vitsyebsk, belarus',
            city: "Vitsebsk",
            country: "Belarus"
        },
        {
            requestParameter: 'Mahilyow, belarus',
            city: "Mogilev",
            country: "Belarus"
        }
    ];

    this.updateWeather = function () {
        this.citiesData.forEach(function (city) {
            $http({
                method: 'GET',
                url: 'https://community-open-weather-map.p.rapidapi.com/weather',
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

    this.updateWeather();
}
