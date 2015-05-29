'use strict';

app.factory('CreatePersonResource', ['$resource', 'baseServiceUrl', function($resource, baseServiceUrl) {
    var CreatePersonResource = $resource(baseServiceUrl + 'PostBgPersonModel', null, {
        'create': {
            method: 'Post',
            isArray: false,
        }
    });

    return {
        create: function(person) {
            return CreatePersonResource.create(person).$promise;
        }
    }
}]);
