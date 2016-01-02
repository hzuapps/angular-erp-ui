// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var goodsData={id:1,number:23,name:"abc",type:'a',xinghao:'b',color:'red',numbers:567,danwei:'kg',danjia:8,jine:9,avg:10,jiubianma:123};

var app = angular.module('app', ['ngRoute']); 
    function theRoute($routeProvider) {
    $routeProvider.when("/", {
      // route for the home page
        templateUrl: "pages/home.html",
         controller: "homeController"
    })
    .when("/about", {
      // route for the about page
        templateUrl: "pages/about.html",
         controller: "aboutController"
    })
    .when("/contact", {
      // route for the contact page
        templateUrl: "pages/contact.html",
         controller: "contactController"
    })
    .when("/goodsList", {
      // route for the goodsList page
        templateUrl: "pages/goodsList.html",
         controller: "goodsListController"
    })
    .otherwise({
      // when all else fails
        templateUrl: "pages/routeNotFound.html",
         controller: "notFoundController"
    });}
    app.controller("homeController", function ($scope) {
        $scope.message = "Welcome to my home page!";
    });
    app.controller("aboutController", function ($scope) {
        $scope.name = "Name:lizifeng";
        $scope.numbers = "Numbers:1314080901219";
    });
    app.controller("contactController", function ($scope) {
        $scope.message = "Contact us!";
    });
    app.controller("goodsListController", function ($scope,goodsListService) {
        var promise=goodsListService.getData();
          promise.success(function(data,status){
          alert(status+"：请求成功，获取文件里的json数据成功");
          var orderData=goodsData;
          orderData.id = data[0].id;
          orderData.number = data[0].number;
          orderData.name = data[0].name;
          orderData.type=data[0].type;
          orderData.xinghao=data[0].xinghao;
          orderData.color=data[0].color;
          orderData.numbers=data[0].numbers;
          orderData.danwei=data[0].danwei;
          orderData.danjia=data[0].danjia;
          orderData.jine=data[0].jine;
          orderData.avg=data[0].avg;
          orderData.jiubianma=data[0].jiubianma;
          $scope.theOrderDatas = [goodsData];
     });
     promise.error(function(data,status){
           alert(status);
           alert("请求出现错误，具体是什么错误还有待检查");
     });
    });
    app.controller("notFoundController", function ($scope,$location) {
      $scope.message = "There seems to be a problem finding the page you wanted";
      $scope.attemptedPath = $location.path();
    });
    app.config(theRoute);
app.factory('goodsListService',function($http){
     var getGoodsData={};
     getGoodsData.getData=function(){
            var promise=$http({
              url:"json/goodsList.json",
              method:"get",
            });
            return promise;
      }
      return getGoodsData;
});

// use the myAppModule variable to
// configure the module with a controller
/*orderModule.controller('createOrderCtrl', function ($scope) {
    // controller code would go here
        $scope.someData = [{
            id: '123',
            number: '234',
            name: '商品',
            type: '类别',
            xinghao: '型号',
            color:'颜色',
            numbers:'数量',
            danwei:'单位',
            danjia:'单价',
            jine:'金额',
            avg:'平均价',
            jiubianma:'旧编码'
        }];
    }
);*/

// use the myAppModule variable to
// configure the module with a filter
app.filter('stripDashes', function () {
    return function (txt) {
        // filter code would go here
    };
});// javascript.js