app.controller('mainController', ['$scope', function($scope){
    // c_service.getData('dongman', function(res){
    //     console.dir(res);
    // })

    $scope.selectedIndex = 0;
    $scope.linkTo = function(index){
        $scope.selectedIndex = index;
    }
}])