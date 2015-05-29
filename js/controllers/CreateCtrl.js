'use strict';

app.controller('CreateCtrl', ['$scope', 'notifier', '$location', 'CreatePersonResource',
    function CreateCtrl($scope, notifier, $location, CreatePersonResource) {
        var person = $scope.person;
        $scope.createPerson = function(person) {
            CreatePersonResource.create(person)
                .then(function() {
                    notifier.success(person.firstName + ' ' + person.lastName + ' created successfully!');
                    $location.path('/main');
                });
        }
    }
]);
