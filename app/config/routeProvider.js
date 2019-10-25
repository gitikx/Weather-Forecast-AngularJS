app.config(function ($routeProvider) {
    $routeProvider.when('/',
        {
            template : "<weather-component class='ng-class: weatherComponent'></weather-component>"
        });
    $routeProvider.when('/starred',
        {
            template : "<starred-component class='ng-class: weatherComponent'></starred-component>"
        });
    $routeProvider.otherwise({redirectTo: '/'})
});
