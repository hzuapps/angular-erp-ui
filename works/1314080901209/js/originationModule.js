// create a new module called 'myAppModule' and save 
// a reference to it in a variable called originationModule
var originationModule = angular.module('originationModule', ["ngRoute"]);


//创建服务
originationModule.factory("createService",function($http){
      var Data={};
	  //getData
	  /*  */
      Data.getData=function(){
            var promise=$http({
              url:"json/organization.json",
              method:"GET",
            });
            return promise;
      }
    
      return Data;

});

function theRoute($routeProvider){
  $routeProvider.
   when("/",{
    templateUrl:"home.html",
    controller:"someData"
      }).
  when("/home",{
    templateUrl:"home.html",
    controller:"someData"
      }).
  when("/about",{
    templateUrl:"about.html",
	controller:"aController"
  }).
  otherwise({
    templateUrl:"error.html"
  });
}
originationModule.config(theRoute);


// use the originationModule variable to
// configure the module with a controller
originationModule.controller('someData', function ($scope,$http,createService)
	{
		/*
		var someData= 
			[{ 
			 dep: '公关部',
           		  quartersName:'打酱油',
            		quartersLay:'第三层',
           	  	 quartersType:'岗位类型',
           		 salary:'2000',
           		 quartersDuty:'岗位职责'
			},
		{ 
			 dep: '外联部',
           		  quartersName:'部长',
            		quartersLay:'2',
           	  	 quartersType:'岗位类型1',
           		 salary:'2898',
           		 quartersDuty:'岗位职责1'
			}];
			
			// var test=new Object();
			$http.get('json/organization.json').success(function(jsondata){
				// test = data;
			 	console.log(jsondata);
			//$scope.data = jsondata;
			
			//正常输出JSON对象
			// console.log(test)
			});
			
			 $scope.data = someData;
			*/
			    var promise=createService.getData();
				//console.log(promise);
			//	 $scope.data = someData;
			   promise.success(function(data,status){
				   console.log(data.SelectDepartment);
               $scope.SelectDepartment = data.SelectDepartment;
			    $scope.SelectQuartersType = data.SelectQuartersType;
			   });
			 promise.error(function(data,status){
			alert("json请求错误");
     });

	}
);

 originationModule.controller("aController",function($scope){
  $scope.name="陈赞毅";
  $scope.number="1314080901209";
});

 

originationModule.directive('quartersList',function(){
console.log();
	return {
	restrict:'AE',
	template:"<div ng-repeat=\"data in data\">"+
			"{{data.dep}}   &nbsp; &nbsp; &nbsp;  {{data.quartersName}} &nbsp; &nbsp; &nbsp; {{data.salary}}</div>"
};
});


// use the originationModule variable to
// configure the module with a filter
originationModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; });
