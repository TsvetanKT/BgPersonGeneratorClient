'use strict';

app.controller('GenerateCtrl', ['$scope', 'notifier', '$location', 'GeneratePeopleResource',
    function GenerateCtrl($scope, notifier, $location, GeneratePeopleResource) {
        var generateData = $scope.generateData;
        $scope.generatePeople = function(generateData) {
            GeneratePeopleResource.generate(generateData)
                .then(function() {
                    notifier.success(generateData.numberOfPeople + ' people generated successfully!');
                    $location.path('/main');
                });
        }
    }
]);
