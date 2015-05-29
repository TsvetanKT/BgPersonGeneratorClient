'use strict';

app.factory('DeleteAllPeopleResource', ['$resource', 'baseServiceUrl', function($resource, baseServiceUrl) {
    var DeleteAllPeopleResource = $resource(baseServiceUrl + 'DeleteAll', null, {
        'deleteAll': {
            method: 'DELETE',
            isArray: false
        }
    });

    return {
        deleteAll: function() {
            return DeleteAllPeopleResource.deleteAll().$promise;
        }
    }
}]);
