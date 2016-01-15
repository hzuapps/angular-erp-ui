 
var myapp = angular.module("myapp", ["ngRoute"]);





function theRoute($routeProvider){
	$routeProvider.
	when("/home",{
		templateUrl:"home.html",
		controller:"homeController"
	}).
	when("/aboutMe",{
		templateUrl:"aboutMe.html"
	}).
	otherwise({
		templateUrl:"error.html"
	});
}
myapp.config(theRoute);
myapp.controller("homeController", function ($scope,$http){
	
	var promise=$http({
			url:"jsonData/myJson.json",
			method:"get",
		});
    promise.success(function(data,status){ 
	
	     $scope.renshizz1 = {
			 suoshubumen:data["suoshubumen"],
			 gangweimingcheng: data["gangweimingcheng"],
             gangweichenchi: data["gangweichenchi"],
             gangweileixin: data["gangweileixin"],
             jibenxinzhi: data["jibenxinzhi"],
             gangweizhizhe:data["gangweizhizhe"]
		 };
  });
	
		
});

myapp.directive("thesuoshubumen",function(){
return{
     restrict:"AEC",
     template:'<input type="text" style="margin-left:5px;" ng-model="renshizz1.suoshubumen">',
      replace:true

};
});

myapp.directive("thegangweimingcheng",function(){
return{
     restrict:"AEC",
     template:'<input type="text" style="margin-left:5px;" ng-model="renshizz1.gangweimingcheng">',
      replace:true

};
});

myapp.directive("thegangweichenchi",function(){
return{
     restrict:"AEC",
     template:'<input type="text" style="margin-left:5px;" ng-model="renshizz1.gangweichenchi">',
      replace:true

};
});

myapp.directive("thegangweileixin",function(){
return{
     restrict:"AEC",
     template:'<input type="text" style="margin-left:5px;" ng-model="renshizz1.gangweileixin">',
      replace:true

};
});

myapp.directive("thejibenxinzhi",function(){
return{
     restrict:"AEC",
     template:'<input type="text" style="margin-left:5px;" ng-model="renshizz1.jibenxinzhi">',
      replace:true

};
});

myapp.directive("thegangweizhizhe",function(){
return{
     restrict:"AEC",
     template:'<input type="text" style="margin-left:5px;" ng-model="renshizz1.gangweizhizhe">',
      replace:true

};
});

