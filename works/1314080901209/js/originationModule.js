// create a new module called 'myAppModule' and save 
// a reference to it in a variable called originationModule
var originationModule = angular.module('originationModule', []);

// use the originationModule variable to
// configure the module with a controller
originationModule.controller('someData', function ($scope)
	{
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
			$scope.data = someData;
	}
);

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
