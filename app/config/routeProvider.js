app.config(function ($routeProvider) {
    $routeProvider.when('/',
        {
            template : "<weather-component class='ng-class: weatherComponent'></weather-component>"
        });
    $routeProvider.when('/starred',
        {
            template : "<div>There are should be starred component</div>"
        });
    $routeProvider.otherwise({redirectTo: '/'})
});
