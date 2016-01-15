// javascript.js


 var myData = {
             theClassName: "灯具",
             classNumber: '11'
               };
              
var myModule = angular.module("myapp", []);
  myModule.controller("myController", function ($scope,$http) {
  	  var promise=$http({
  	  	url:"myJson.json",
  	  	method:"get"
  	  });
  	  promise.success(function(data,status){
      $scope.datas = [data];
  	  });
  	   promise.error(function(data,status){
              alert("请求出错");
  	  });
     
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

  
 