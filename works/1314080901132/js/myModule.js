// javascript.js


 var myData = {
             theClassName: "灯具",
             classNumber: '11'
               };
              
var myModule = angular.module("myapp", []);
  myModule.controller("myController", function ($scope) {
      var data1 = myData;
      data1.theClassName ="灯具" ;
      data1.classNumber = "12";
      $scope.datas = [data1];
  });
  
 