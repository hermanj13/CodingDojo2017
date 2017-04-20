app.controller('newController', ['$scope', 'friendFactory', '$location', function($scope, friendFactory, $location) {
    $scope.friends = {};
    var index = function() {
        friendFactory.index(function(data) {
            $scope.friends = data.friends
        })
    }
    index()

    $scope.createFriend = function() {
        friendFactory.create($scope.newFriend, function(data) {
            $scope.newFriend = {};
            $location.url('/')
        });
    };

    $scope.deleteFriend = function(id) {
        friendFactory.delete(id, function(data) {
            index();
        })
    };
}]);
