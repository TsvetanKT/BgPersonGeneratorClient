'use strict';

app.factory('EditPersonResource', ['$resource', 'baseServiceUrl', function($resource, baseServiceUrl) {
    var EditPersonResource = $resource(baseServiceUrl + 'PutBgPersonModel/:id', null, {
        'edit': {
            method: 'PUT',
            params: {
                id: '@id'
            },
            isArray: false,
        }
    });

    return {
        edit: function(person) {
            return EditPersonResource.edit({
                id: person.Id
            }, person)
            .$promise;
        }
    }
}]);
