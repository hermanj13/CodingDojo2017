var app = angular.module('friendApp', ['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'partials/list.html',
            controller: 'listController'
        })
        .when('/new', {
            templateUrl: 'partials/new.html',
            controller: 'newController',
        })
        .when('/edit/:id', {
            templateUrl: 'partials/edit.html',
            controller: 'editController',
        })
        .otherwise({
            redirectTo: '/'
        });
});
