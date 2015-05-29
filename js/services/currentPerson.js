app.factory('currentPerson', [function() {
    var currentPerson = {};

    return {
        get: function() {
            return currentPerson;
        },
        set: function(value) {
            currentPerson = value;
        }
    }
}])
