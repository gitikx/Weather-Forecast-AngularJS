app.directive('forecastDirective', function () {
    return {
        restrict: 'AE',
        scope: {
            data: '<'
        },
        templateUrl: 'views/forecastDirective.html',
        controller: function ($scope, $timeout) {
            $scope.$watch('data', function (newValue) {
                    $timeout(function () {
                        $scope.rotationStyle = {
                            transform: 'rotate(' + newValue + 'deg)'
                        };

                    })
                }
            );
            $scope.rotationStyle = {
                transform: 'rotate(' + $scope.data.wind.deg + 'deg)'
            };
        },

    }
});
