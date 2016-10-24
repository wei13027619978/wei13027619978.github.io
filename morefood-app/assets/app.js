

var app = angular.module('app', ['ngRoute']);

// var index = require('./tpl/index.html');
// var didamao = require('./tpl/didamao.html');
// var jinkou = require('./tpl/jinkou.html');
// var kouwei = require('./tpl/kouwei.html');
// var techan = require('./tpl/techan.html');


app.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: './tpl/index.html',
        controller: ''
    })
    .when('/didamao', {
        templateUrl: './tpl/didamao.html',
        controller: ''
    })
    .when('/jinkou', {
        templateUrl: './tpl/jinkou.html',
        controller: ''
    })
    .when('/techan', {
        templateUrl: './tpl/techan.html',
        controller: ''
    })
    .when('/kouwei', {
        templateUrl: './tpl/kouwei.html',
        controller: ''
    })
}])