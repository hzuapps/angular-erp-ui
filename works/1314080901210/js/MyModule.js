// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var MyModule = angular.module('MyModule', []);

// use the myAppModule variable to
// configure the module with a controller
MyModule.controller('MyFilterDemoCtrl', function($scope) {
        function MyFilterDemoCtrl($scope) {
        var wuliaoxinxi = {
            wuliaoleibie: 'bancai',
            wuliaomingchen: '',
            gengxinriqi: new Date(2010, 2, 23),
            pinyinma: ' ' ,
            wuliaomiaoshu: '   '
        };
        $scope.data = wuliaoxinxi;
});

// use the myAppModule variable to
// configure the module with a filter
MyModule.filter('stripDashes', function() {
	return function(txt) {
		// filter code would go here
	};
});