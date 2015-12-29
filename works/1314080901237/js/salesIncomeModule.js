// create a new module called 'salesIncomeModule' and save 
// a reference to it in a variable called salesIncomeModule 
var salesIncomeModule = angular.module('salesIncomeModule', []);

// use the salesIncomeModule variable to
// configure the module with a controller
salesIncomeModule.controller('createSalesIncomeCtrl', function ($scope) {
    // controller code would go here
        var salesIncome = {
            UnitName: ' ',
            CollectMode: ' ',
            CollectDay: 123,
            jingshouren: ' ',
            shoukuanyue: 123,
            shoukuanzhanghu:123,
            yinhangzhnanghu:123,
            zhuangtai:' ',
            hexiaoyue:123,
            beizhu:' '
        };
        $scope.data = salesIncome;
    }
);

salesIncomeModule.controller('createSalesIncomeCtrl', function ($scope) {
        $scope.colorsArray = ['red', 'green', 'blue', 'purple', 'olive']
} );
salesIncomeModule.directive('colorList', function ($compile) {
return {
        restrict: 'AE',
        template: "<button ng-click='showHideColors()' type='button'>"
            + "{{isHidden ? 'Show Available Colors' : 'Hide Available Colors'}}"
            + "</button><div ng-hide='isHidden' id='colorContainer'>"
            + "</div>",
        link: function ($scope, $element) {
            // set default state of hide/show
            $scope.isHidden = true;
            // add function to manage hide/show state
            $scope.showHideColors = function () {
                $scope.isHidden = !$scope.isHidden;
            }
            // add colors divs to the document
            var colorContainer = $element.find('div'); angular.forEach($scope.colorsArray, function (color) {
                var appendString = "<div style='background-color:" + color + "'>" + color +  "</div>"
                colorContainer.append(appendString);
            });
        } 
    };
});
// use the salesIncomeModule variable to
// configure the module with a filter
salesIncomeModule.filter('stripDashes', function () {
    return function (txt) {
        // filter code would go here
    };
});// javascript.js 
