// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule

//定义数据结构
var myData = {
          name: '名称1',
          number: '01',
          position: "位置1",
          details: '描述1',
      };


var myOrder = angular.module('myModule', []);

// use the myAppModule variable to
// configure the module with a controller
myOrder.controller('myController', function ($scope) {
        $scope.myData=myData;
    });

// use the myAppModule variable to
// configure the module with a filter
myOrder.filter('stripDashes', function () {
    return function (txt) {
        // filter code would go here
    };
});// javascript.js