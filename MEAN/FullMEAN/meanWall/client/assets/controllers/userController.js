app.controller('userController', ['$scope', 'wallFactory', '$location', '$cookies', '$rootScope', function($scope, wallFactory, $location, $cookies, $rootScope) {
    $rootScope.flag = false;
    $scope.errors = [];
    var index = function() {
        if ($cookies.get('_user')) {
            $rootScope.flag = true;
            $location.url('/messages');
        } else {
            $rootScope.flag = false;
        }
    }
    index()

    $scope.login = function() {
        wallFactory.login($scope.user, function(data) {
            if (data.errors) {
                $scope.errors.push(data.errors);
            }
            $cookies.put('_user', data.user._id);
            $cookies.put('_username', data.user.name);
            $rootScope.flag = true;
            index();
        })
    };

    $scope.logout = function() {
        $cookies.remove('_user');
        $rootScope.flag = false;
        $location.url('/');
    }
}]);
