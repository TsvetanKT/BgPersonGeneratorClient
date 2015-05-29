'use strict';

app.factory('GeneratePeopleResource', ['$resource', 'baseServiceUrl', function($resource, baseServiceUrl) {
    var GeneratePeopleResource = $resource(baseServiceUrl + 'PostRange', null, {
        'generate': {
            method: 'Post',
            isArray: false
        }
    });

    return {
        generate: function(generateData) {
            return GeneratePeopleResource.generate(generateData).$promise;
        }
    }
}]);
