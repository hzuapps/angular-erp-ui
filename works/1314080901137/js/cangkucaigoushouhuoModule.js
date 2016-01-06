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
            {
            "xuhao":"0",
            "bianma":"000", 
            "leibie":"man", 
            "mingcheng":"box",
            "xinghao":"m",
            "chang":"1.0",
            "kuan":"1.0",
            "hou":"1.0",
            "danwei":"jian",
            "shuliang":"10"     
        },
{           "xuhao":"1",
            "bianma":"001", 
            "leibie":"man", 
            "mingcheng":"box",
            "xinghao":"l",
            "chang":"2.0",
            "kuan":"2.0",
            "hou":"2.0",
            "danwei":"jian",
            "shuliang":"20"   
        },
{           "xuhao":"2",
            "bianma":"002", 
            "leibie":"man", 
            "mingcheng":"box",
            "xinghao":"xl",
            "chang":"3.0",
            "kuan":"3.0",
            "hou":"3.0",
            "danwei":"jian",
            "shuliang":"50"    
        }
        ];
        var promise =cakuDetailService.getData();
        promise.success(function (data, status, headers, config, statusText) {
            $scope.backMess = data.cangkucaigoushouhuodata;
        });
        promise.error(function(data,status){
           alert('«Î«Û≥ˆ¥Ì£¨«Î÷ÿ ‘');
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
