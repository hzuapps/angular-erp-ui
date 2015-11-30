// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var searchModule = angular.module('searchModule', []);

// use the myAppModule variable to
// configure the module with a controller
searchModule.controller('MyFilterDemoCtrl', function ($scope) {
       // controller code would go here
       var searchData = {
            shengchandingdan: '007',
            xiaoshoudingdan: 'GRANT',
            dingdanleixing: 'JENNA',
            kehumingcheng: 'JENNA',
            dingdanzhuangtai: 'super-basic-plan',
            dingdanriqi: 'JENNA',
            fahuoriqi: 'JENNA'
        };
        $scope.data = searchData;
    }
); 

// use the myAppModule variable to
// configure the module with a filter
searchModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; });
