'use strict';

app.factory('PeopleResource', ['$resource', 'baseServiceUrl', function($resource, baseServiceUrl) {
    var PeopleResource = $resource(baseServiceUrl + 'GetBgPersonModels/:id', null, {
        'public': {
            method: 'GET',
            isArray: true
        },
        'byId': {
            method: 'GET',
            params: {
                id: '@id'
            },
            isArray: false
        }
    });

    return {
        getAll: function() {
            return PeopleResource.public();
        },
        byId: function(id) {
            return PeopleResource.byId({
                id: id
            });
        }
    }
}]);
