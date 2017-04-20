app.controller('postController', ['$scope', 'wallFactory', '$location', '$cookies', function($scope, wallFactory, $location, $cookies) {
    $scope.errors = [];
    $scope.username = $cookies.get('_username')
    var index = function() {
        if (!$cookies.get('_user')) {
            $location.url('/');
        } else {
            wallFactory.getPosts(function(data) {
                $scope.posts = data.posts
            })
        }
    }
    index();
    $scope.createPost = function() {
        $scope.newPost._user = $cookies.get('_user');
        wallFactory.createPost($scope.newPost, function(data) {
            if (data.errors) {
                $scope.errors.push(data.errors);
            }
            index();
        })
        $scope.newPost = {};
    }

    $scope.newComment = {}
    $scope.createComment = function(post_id) {
        $scope.newComment[post_id]._post = post_id;
        $scope.newComment[post_id]._user = $cookies.get('_user');
        $scope.newComment[post_id].name = $scope.username;
        wallFactory.createComment($scope.newComment[post_id], function(data) {
            if (data.errors) {
                $scope.errors.push(data.errors);
            }
            index();
        })
        $scope.newComment[post_id] = {};
    }
}]);
