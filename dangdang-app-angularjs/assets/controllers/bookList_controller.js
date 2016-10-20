angular.module('app').controller('bookListController',  
['$scope', '$routeParams', 'commonService', 
function($scope, $routeParams, c_service){
    console.log($routeParams.id);
    c_service.getData($routeParams.id, function(res){
        console.dir(res.data);
        $scope.data = res.data;
    });

}])