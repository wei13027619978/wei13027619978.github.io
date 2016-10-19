app.controller('bookListController',  
['$scope', '$routeParams', 'commonService', function($scope, $routeParams, c_service){
    c_service.getData($routeParams.id, function(res){
        console.dir(res);
    })
}])