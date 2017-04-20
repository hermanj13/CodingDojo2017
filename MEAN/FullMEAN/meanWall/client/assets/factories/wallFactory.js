app.factory('wallFactory', ['$http', function($http) {
    var factory = {};
    factory.login = function(userData, callback) {
        $http.post('/users', userData).then(function(returned_data) {
            if (typeof(callback == 'function')) {
                callback(returned_data.data)
            }
        })
    };
    factory.createPost = function(postData, callback) {
        $http.post('/posts', postData).then(function(returned_data) {
            if (typeof(callback == 'function')) {
                callback(returned_data.data);
            }
        })
    };
    factory.getPosts = function(callback) {
        $http.get('/posts').then(function(returned_data) {
            callback(returned_data.data)
        })
    };
    factory.createComment = function(commentData, callback) {
        $http.post('/comments', commentData).then(function(returned_data) {
            if (typeof(callback == 'function')) {
                callback(returned_data.data)
            }
        })
    }
    return factory;
}]);;
