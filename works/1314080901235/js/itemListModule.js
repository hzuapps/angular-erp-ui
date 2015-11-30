

// create a new module called 'myAppModule' and save 
// a reference to it in a variable called itemListModule
var itemListModule = angular.module('itemListModule', []);

// use the itemListModule variable to
// configure the module with a controller
itemListModule.controller('itemListModuleCtrl', function ($scope)
    {
        var workerInformation = {
                code: 'a',
                name: 'T恤',
                type: '衣服',
                color: 'black',
                inventory_number:'100',
               check_number:'1000',
            };
            $scope.data = workerInformation;
            $scope.items = [
                {code: 'a', name: '衣服', type: 'black', color: 'black',inventory_number: '100',check_number:'1000'},
                {code: 'b', name: '长袖', type: '衣服', color: 'white',inventory_number: '200',check_number:'2000'},
                {code: 'c', name: '外套', type: '衣服', color: 'yellow',inventory_number: '300',check_number:'3000'}
        ];
        }


);

// use the myAppModule variable to
// configure the module with a filter
itemListModule.filter('itemListModulestripDashes', function() {
    return function(txt) {
        // filter code would go here
    }; });
