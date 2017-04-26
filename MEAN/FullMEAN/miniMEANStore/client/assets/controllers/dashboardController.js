app.controller('dashboardController', ['$scope', 'orderFactory', 'productFactory', 'customerFactory', '$location', '$cookies', '$rootScope', function($scope, orderFactory, productFactory, customerFactory, $location, $cookies, $rootScope) {
    $scope.orders = []
    $scope.errors = [];

}]);
