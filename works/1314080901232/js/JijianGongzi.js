// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var JijianGongziModule = angular.module('JijianGongziModule', []);

// use the myAppModule variable to
// configure the module with a controller
JijianGongziModule.controller('createorterCtrl', function ($scope) {
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
JijianGongziModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; });
