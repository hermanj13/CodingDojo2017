app.controller('listController', ['$scope', 'friendFactory', function($scope, friendFactory) {
    $scope.friends = {};
    var index = function() {
        friendFactory.index(function(data) {
            $scope.friends = data.friends
        })
    }
    index()
    $scope.deleteFriend = function(id) {
        friendFactory.delete(id, function(data) {
            index();
        })
    };
}]);
