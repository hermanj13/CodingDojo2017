app.controller('customerController', ['$scope', 'customerFactory', '$location', '$cookies', '$rootScope', function($scope, customerFactory, $location, $cookies, $rootScope) {
    $scope.customers = []
    $scope.errors = [];

}]);
