'use strict';

app.controller('EditCtrl', ['$scope', 'notifier', '$location', 'EditPersonResource', 'DeletePersonResource', 'PeopleResource', 'currentPerson', '$routeParams',
    function EditCtrl($scope, notifier, $location, EditPersonResource, DeletePersonResource, PeopleResource, currentPerson, $routeParams) {

        var currentPerson = currentPerson.get();
        if (currentPerson.Id === undefined || $routeParams.id != currentPerson.Id) {
            //Get currentPerson
            var currentId = $routeParams.id;
            currentPerson = PeopleResource.byId(currentId);
        }

        $scope.currentPerson = currentPerson;
        $scope.editPerson = function(currentPerson) {
            EditPersonResource.edit(currentPerson)
                .then(function() {
                    notifier.success(currentPerson.FirstName + ' ' + currentPerson.LastName + ' edited successfully!');
                    $location.path('/main');
                }, function() {
                    notifier.error('Bad person information!');
                });
        }


        $scope.deletePerson = function() {
            DeletePersonResource.delete(currentPerson.Id)
                .then(function() {
                    notifier.success(currentPerson.FirstName + ' ' + currentPerson.LastName + ' deleted successfully!');
                    $location.path('/main');
                });
        }

        $scope.genders = [{
            name: 'Male',
            value: 'true'
        }, {
            name: 'Female',
            value: 'false'
        }];
    }
]);
