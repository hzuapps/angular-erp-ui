 
var myapp = angular.module("myapp", []);
myapp.controller("homeController", function ($scope){
	var renshizz = {
            suoshubumen: 'renshi',
            gangweimingcheng: 'GRANT',
            gangweichenchi: new Date(2010, 2, 23),
            gangweileixin: 'guanligang',
            jibenxinzhi: 'super-basic-plan',
            gangweizhizhe:'myzhizhe'
        };
		$scope.renshizz1 = renshizz;
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

