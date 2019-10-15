app.config(function ($routeProvider) {
    $routeProvider.when('/',
        {
            template : "<weather-component></weather-component>"
        });
    $routeProvider.when('/starred',
        {
            template : "<starred-component></starred-component>"
        });
    $routeProvider.otherwise({redirectTo: '/'})
});
