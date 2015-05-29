'use strict';

app.controller('DeleteCtrl', ['$scope', 'notifier', '$location', 'DeleteAllPeopleResource',
    function CreateCtrl($scope, notifier, $location, DeleteAllPeopleResource) {
        $scope.deleteAll = function() {
            DeleteAllPeopleResource.deleteAll()
                .then(function() {
                    notifier.success('All people successfully deleted!');
                    $location.path('/main');
                });
        }
    }
]);
