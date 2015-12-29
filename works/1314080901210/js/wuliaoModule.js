// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var wuliaoModule = angular.module('wuliaoModule', []);

// use the myAppModule variable to
// configure the module with a controller
wuliaoModule.controller('MyFilterDemoCtrl', function($scope) {
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
wuliaoModule.filter('stripDashes', function() {
	return function(txt) {
		// filter code would go here
	};
});