app.controller('indexController', ['$scope', 'userFactory', '$location', function($scope, userFactory, $location) {
    /* Private Methods */
    var usersIndex = function() {
        userFactory.index(function(factoryUsers) {
            $scope.users = factoryUsers;
        } /* end args passed to userFactor index */ ); //end userFactory method invokation
    } //end usersIndex

    /* Scope Methods */
    $scope.show = function(user_id) {
        $location.url('/edit/' + user_id);
    }
    /* on load time */
    console.log("loading the controller");
    console.log(userFactory);
    console.log(this);
    usersIndex();
}]);
