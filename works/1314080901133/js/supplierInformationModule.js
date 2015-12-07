// create a new module called 'supplierInformationModule' and save 
// a reference to it in a variable called supplierInformationModule 
var supplierInformationModule = angular.module('supplierInformationModule', []);

// use the supplierInformationModule variable to
// configure the module with a controller
angular.module('supplierInformationModule').controller('MyFilterDemoCtrl', function($scope) {

    $scope.isHidden = true;
    $scope.showHideColors = function() {
        $scope.isHidden = !$scope.isHidden;
    }

    var someData = {
        "suppliers": [{
            numbers: '131401001',
            name: 'xidada1',
            code: '110120119',
            photo: '20151021.jpg',
            createTime: '2015-10-21'
        }, {
            numbers: '131401002',
            name: 'xidada2',
            code: '110120120',
            photo: '20151022.jpg',
            createTime: '2015-10-22'
        }, {
            numbers: '131401003',
            name: 'xidada3',
            code: '110120121',
            photo: '20151023.jpg',
            createTime: '2015-10-23'
        }]

    };
    $scope.data = someData;
    // controller code would go here


});

// use the supplierInformationModule variable to
// configure the module with a filter
supplierInformationModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
    };
});
