// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var myAppModule = angular.module('myProductListModule', []);

// use the myAppModule variable to
// configure the module with a controller
myAppModule.controller('MyFilterDemoCtrl', function ($scope) {
       // controller code would go here
	var someData = {
            bianma: '01',
            pinming: '³ÄÉÀ',
            leixing:'ÒÂ·þ'£¬
            color£º'black',
            kucunshu:'1000',
            pandianshu:'100'
        };
    }
);

// use the myAppModule variable to
// configure the module with a filter
myAppModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; });