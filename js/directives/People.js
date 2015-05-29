'use strict';

app.directive('people', [function() {
    return {
        restrict: 'A',
        templateUrl: 'views/directives/people.html',
        scope: true,
        replace: true
    }
}]);
