require('./lib/angular');
require('./lib/angular-route');
// <script src="assets/api/service.js"></script>
// <script src="assets/controllers/main_controller.js"></script>
// <script src="assets/controllers/book_controller.js"></script>
// <script src="assets/controllers/bookList_controller.js"></script>


var about_me = require('./tpl/about_me.html');
var blog = require('./tpl/blog.html');
var book = require('./tpl/book.html');
var bookList = require('./tpl/bookList.html');
var index = require('./tpl/index.html');


var app = angular.module('app', ['ngRoute']);

require('./api/service.js');
require('./controllers/main_controller.js');
require('./controllers/book_controller.js');
require('./controllers/bookList_controller.js');
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            template: index,
            controller: ''
        })
        .when('/blog', {
            template: blog,
            controller: ''
        })
        .when('/book', {
            template: book,
            controller: 'bookController'
        })
        .when('/about_me', {
            template: about_me,
            controller: ''
        })
        .when('/:id', {
            template: bookList,
            controller: 'bookListController'
        })
        .otherwise({
            redirectTo: '/'
        })
}])