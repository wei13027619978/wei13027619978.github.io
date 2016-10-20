require('./lib/angular.js');
require('./lib/angular-route.js');
// <script src="assets/api/service.js"></script>
// <script src="assets/controllers/main_controller.js"></script>
// <script src="assets/controllers/book_controller.js"></script>
// <script src="assets/controllers/bookList_controller.js"></script>


// var about_me = require('./tpl/about_me.html');
// var blog = require('./tpl/blog.html');
// var book = require('./tpl/book.html');
// var bookList = require('./tpl/bookList.html');
// var index = require('./tpl/index.html');

var app = angular.module('app', ['ngRoute']);

require('./api/service.js');
require('./controllers/main_controller.js');
require('./controllers/book_controller.js');
require('./controllers/bookList_controller.js');
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/tpl/index.html',
            controller: ''
        })
        .when('/blog', {
            templateUrl: '/tpl/blog.html',
            controller: ''
        })
        .when('/book', {
            templateUrl: '/tpl/book.html',
            controller: 'bookController'
        })
        .when('/about_me', {
            templateUrl: '/tpl/about_me.html',
            controller: ''
        })
        .when('/:id', {
            ttemplateUrl: '/tpl/bookList.html',
            controller: 'bookListController'
        })
        .otherwise({
            redirectTo: '/'
        })
}])