app.factory('friendFactory', ['$http', function($http) {
    var factory = {};
    factory.index = function(callback) {
        $http.get('/friends').then(function(returned_data) {
            callback(returned_data.data);
        });
    }
    factory.show = function(id, callback) {
        $http.get('/friends/' + id).then(function(returned_data) {
            if (typeof(callback) == 'function') {
                callback(returned_data.data);
            };
        });
    };
    factory.create = function(newfriend, callback) {
        $http.post('/friends', newfriend).then(function(returned_data) {
            if (typeof(callback) == 'function') {
                callback(returned_data.data);
            };
        });
    };
    factory.update = function(id, friend, callback) {
        $http.put('/friends/' + id, friend).then(function(returned_data) {
            if (typeof(callback) == 'function') {
                callback(returned_data.data);
            };
        });
    };
    factory.delete = function(id, callback) {
        $http.delete('/friends/' + id).then(function(returned_data) {
            if (typeof(callback) == 'function') {
                callback(returned_data.data);
            };
        });
    };
    return factory;
}]);
