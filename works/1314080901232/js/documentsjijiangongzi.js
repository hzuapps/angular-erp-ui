// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var documentsDetailModule = angular.module('documentsDetailModule', []);

// use the myAppModule variable to
// configure the module with a controller
documentsDetailModule.controller('MyFilterDemoCtrl', function ($scope) {
       // controller code would go here
       var JijianGongzi = {
            Type: '类型',
            price: '单价',
            number: ‘数量’,
            money: ‘金额’,
            IdCard: ' IdCard '
        };
        $scope.data = JijianGongzi;

    }
);

// use the myAppModule variable to
// configure the module with a filter
documentsDetailModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; });
