'use strict';

app.factory('DeletePersonResource', ['$resource', 'baseServiceUrl', function($resource, baseServiceUrl) {
    var DeletePersonResource = $resource(baseServiceUrl + 'DeleteBgPersonModel/:id', null, {
        'delete': {
            method: 'DELETE',
            params: {
                id: '@id'
            },
            isArray: false
        }
    });

    return {
        delete: function(id) {
            return DeletePersonResource.delete({
                id: id
            })
            .$promise;
        }
    }
}]);
