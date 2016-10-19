app.controller('bookListController',  
['$scope', '$routeParams', 'commonService', 
function($scope, $routeParams, c_service){
    console.log($routeParams.id);
    c_service.getData($routeParams.id, function(res){
        console.dir(res.data);
        $scope.data = res.data;
    });

    // $scope.data = [
    //     {title:'1', author:'2', img:'http://img3x8.ddimg.cn/20/27/24042368-1_l_6.jpg'},
    //     {title:'2', author:'2', img:'http://img3x8.ddimg.cn/20/27/24042368-1_l_6.jpg'},
    //     {title:'3', author:'2', img:'http://img3x8.ddimg.cn/20/27/24042368-1_l_6.jpg'},
    //     {title:'4', author:'2', img:'http://img3x8.ddimg.cn/20/27/24042368-1_l_6.jpg'},
        
    // ];
}])