'use strict';

app.controller('MainCtrl', ['$scope', '$http', '$location', 'notifier', 'PeopleResource', 'currentPerson',
    function MainCtrl($scope, $http, $location, notifier, PeopleResource, currentPerson) {
        $scope.people = PeopleResource.getAll();

        $scope.setCurrent = function(id) {
            for (var i = 0; i < $scope.people.length; i += 1) {
                if ($scope.people[i].Id === id) {
                    currentPerson.set($scope.people[i]);
                }
            }
            var temp = currentPerson.get();
            $location.path('/edit/' + id);
        }
    }
]);
