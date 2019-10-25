app.directive('forecastDirective', function () {
    return {
        restrict: 'AE',
        scope: {
            data: '<'
        },
        templateUrl: 'views/forecastDirective.html',
        controller: function ($scope) {
            $scope.rotationStyle = {
                transform : 'rotate(' + $scope.data.wind.deg + 'deg)'
            };
        }
    }
});