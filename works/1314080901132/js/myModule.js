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

myModule.directive("mydata",function(){
	return{
		restrict:"AEC",
		template:'<div style="display:inline-block;width:100px;">类别名称</div> <div style="display:inline-block;width:100px;">类别代码</div>'
            +'<div ng-repeat="theData in datas">'
              +'<div style="display:inline-block;width:100px;">{{theData.theClassName}}</div>'
               +'<div style="display:inline-block;width:100px;">{{theData.classNumber}}</div>'
             +'</div>',
		transclude: true
	};
});

  
 