angular.module('app').controller('showLabelCtrl', ['$scope', function($scope){
    $scope.selectedIndex = 0;
    $scope.linkTo = function(index){
        $scope.selectedIndex = index;
        console.log(index);
    }
}])