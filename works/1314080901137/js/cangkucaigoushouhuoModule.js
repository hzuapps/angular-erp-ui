// create a new module called 'cangkucaigoushouhuoModule' and save 
// a reference to it in a variable called myAppModule 
var cangkucaigoushouhuoModule = angular.module('cangkucaigoushouhuoModule', ['ngRoute']);

// use the myAppModule variable to
// configure he module with a controller

cangkucaigoushouhuoModule.config(function ($routeProvider) {
    // configure the routes
    $routeProvider
        .when('/', {
            // route for the about page
            templateUrl: 'pages/home.html'
        })
        .when('/home', {
            templateUrl: 'pages/home.html'
        })
        .when('/contact', {
            templateUrl: 'pages/aa.html',
            controller: 'cakuDetailCtrl'
        })
        .when('/about', {
            templateUrl: 'pages/about.html',
            controller: 'aboutCtrl'
        });
});


cangkucaigoushouhuoModule.factory('cakuDetailService',function($http){
   var dataStroe={};
   dataStroe.getData=function(){
    var promise=$http({method: 'GET',url: 'json/data.json'});
    return promise;
  }
    return dataStroe;

}).controller('cakuDetailCtrl', function ($scope,cakuDetailService) {
       // controller code would go here
                var cakuDetail = {
            gongyingshang: 'china',
            cangku: '001',
            jingshouren:'zhang3',
            jingbanriqi:'2015-1-1',
            zhuangtai:'ok',
            beizhu:' '  
        };
        $scope.data = cakuDetail;
 $scope.items = [
            { "序号":"0",
            "编码":"000", 
            "类别":"男装", 
            "名称":"box",
            "型号":"m",
            "长":"1.0",
            "宽":"1.0",
            "厚":"1.0",
            "单位":"件",
            "数量":"10"   },
            { "序号":"1",
            "编码":"001", 
            "类别":"男装", 
            "名称":"box",
            "型号":"l",
            "长":"2.0",
            "宽":"2.0",
            "厚":"2.0",
            "单位":"件",
            "数量":"20"   },
            {"序号":"2",
            "编码":"002", 
            "类别":"男装", 
            "名称":"box",
            "型号":"xl",
            "长":"3.0",
            "宽":"3.0",
            "厚":"3.0",
            "单位":"件",
            "数量":"50"    } 
        ];
        var promise =cakuDetailService.getData();
        promise.success(function (data, status, headers, config, statusText) {
            $scope.backMess = data.cangkucaigoushouhuodata;
        });
        promise.error(function(data,status){
           alert('请求出错，请重试');
        });
    }).controller('aboutCtrl', function ($scope) {
        var data = {
            num: '1314080901137'
        };
        $scope.data = data;
});

// use the myAppModule variable to
// configure the module with a filter
cangkucaigoushouhuoModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; });
