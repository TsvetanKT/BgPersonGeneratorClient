'use strict';

var app = angular.module('myApp', ['ngRoute', 'ngResource', 'ngCookies']).
config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/main', {
                templateUrl: 'views/partials/main.html',
                controller: 'MainCtrl'
            })
            .when('/create', {
                templateUrl: 'views/partials/create.html',
                controller: 'CreateCtrl'
            })
            .when('/generate', {
                templateUrl: 'views/partials/generate.html',
                controller: 'GenerateCtrl'
            })
            .when('/edit/:id', {
                templateUrl: 'views/partials/edit.html',
                controller: 'EditCtrl'
            })
            .when('/deleteAll', {
                templateUrl: 'views/partials/delete.html',
                controller: 'DeleteCtrl'
            })
            .otherwise({
                redirectTo: '/main'
            });
    }])
    .value('toastr', toastr)
    // Path to web api service
    .constant('baseServiceUrl', 'http://localhost:11647/api/BgPersonModels/');
