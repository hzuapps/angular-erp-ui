var myOrderModule = angular.module('myOrderModule', ["ngRoute"]);


//创建一个Service
myOrderModule.factory("orderService",function($http){
      var getOrderData={};
      getOrderData.getTime=function(){

        return new Date().toDateString();
      }
      return getOrderData;

});


function theRoute($routeProvider){
  $routeProvider.
  when("/home",{
    templateUrl:"home.html",
    controller:"CreateOrderInformation"
      }).
  when("/about",{
    templateUrl:"aboutMe.html",
    controller:"aboutController"
  }).
  otherwise({
    templateUrl:"routeNotFound.html",
    controller:"notFoundController"
  });
}
myOrderModule.config(theRoute);

myOrderModule.controller("aboutController",function($scope){
  $scope.myName="陈嘉霖";
  $scope.myNumber="1314080901203";
});
myOrderModule.controller("notFoundController",function($scope){
  $scope.message="Moore ";
});





myOrderModule.directive("mytittle",function(){
  return{
      restrict:"E",
      template:'<span>费用明细</span>',
      transclude: true
  };
});

myOrderModule.filter("", function () {
});


//测试引用js文件是否成功的函数调用
function a() { alert("引用js文件成功");}