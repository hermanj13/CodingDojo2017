app.controller('editController', ['$scope', '$routeParams', 'friendFactory', '$location', function($scope, $routeParams, friendFactory, $location) {
    $scope.friend = {};
    var update = function() {
        friendFactory.show($routeParams.id, function(data) {
            $scope.friend = data.friend
        });
    };
    update();

    $scope.updateFriend = function() {
        friendFactory.update($routeParams.id, $scope.friend, function(data) {
            $scope.friend = data.friend
            $location.url('/')
        });
    };
}]);
