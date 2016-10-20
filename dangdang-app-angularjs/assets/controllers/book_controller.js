angular.module('app').controller('bookController', ['$scope', function($scope){
    $scope.bookTypes = [
        {id: 'ertong', name:'儿童', img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2077810900,2007243753&fm=116&gp=0.jpg', description: '这里是适合儿童观看的书籍'},
        {id: 'lishi', name:'历史', img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2077810900,2007243753&fm=116&gp=0.jpg', description: '历史爱好者的福利'},
        {id: 'dongman', name:'动漫', img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2077810900,2007243753&fm=116&gp=0.jpg', description: '据说火影要完结了'},
        {id: 'qingchunwenxue', name:'青春文学', img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2077810900,2007243753&fm=116&gp=0.jpg', description: '文艺青年点进来'}
    ]
}])


