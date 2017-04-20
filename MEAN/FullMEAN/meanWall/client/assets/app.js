var app = angular.module('wallApp', ['ngRoute', 'ngCookies']);
app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'partials/login.html',
            controller: 'userController'
        })
        .when('/messages', {
            templateUrl: 'partials/wall.html',
            controller: 'postController'
        })
        .otherwise({
            redirectTo: '/'
        });
});
