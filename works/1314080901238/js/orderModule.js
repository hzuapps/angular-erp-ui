// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule

//定义数据结构
var myData = {
          name: '名称1',
          number: '01',
          position: "位置1",
          details: '描述1',
      };


var myOrder = angular.module('myModule', ["ngRoute"]);

function theRoute($routeProvider){
  $routeProvider.
  when("/home",{
    templateUrl:"home.html",
    controller:"myController"
      }).
  when("/about",{
    templateUrl:"aboutMe.html",
    controller:"aboutController"
  }).
  otherwise({
    templateUrl:"error.html"
  });
}
myOrder.config(theRoute);




// use the myAppModule variable to
// configure the module with a controller
myOrder.controller('myController', function ($scope,$http) {
        var promise=$http({
              url:"json/myData.json",
              method:"get",
            });
        promise.success(function(data,status){
           $scope.myData=data;
        });
        promise.error(function(data,status){
           alert(status);
           alert("请求出现错误，具体是什么错误还有待检查");
     });
    });

myOrder.controller("aboutController",function($scope){
   $scope.myName="严文伟";
   $scope.myNumber="1314080901238";
 });

myOrder.directive("myorderdata",function(){
  return{
      restrict:"AEC",
      template:'<table>'
              +'<tr><td>名称：</td></tr>'
              +'<tr><td colspan="2" ><input class="form-control" type="text" id="name" ng-model="myData.name"></td><td></td></tr>'
              +'<tr><td>代号：</td></tr>'
              +'<tr><td colspan="2" ><input class="form-control" type="text" id="number" ng-model="myData.number"></td><td></td></tr>'
              +'<tr><td>位置：</td></tr>'
              +'<tr><td colspan="2" ><input class="form-control" type="text" id="position" ng-model="myData.position"></td><td></td></tr>'
              +'<tr><td >描述：</td></tr>'
              +'<tr><td colspan="1" ><textarea class="form-control" name="details" id="details" rows="4" cols="100%" ng-model="myData.details">'
                  +'</textarea><td></td></tr>'
              +'</table>',
      transclude: true
  };
});





// use the myAppModule variable to
// configure the module with a filter
myOrder.filter('stripDashes', function () {
    return function (txt) {
        // filter code would go here
    };
});// javascript.js