

// create a new module called 'myAppModule' and save 
// a reference to it in a variable called itemListModule
var itemListModule = angular.module('itemListModule', []);

// use the itemListModule variable to
// configure the module with a controller
itemListModule.controller('itemListModuleCtrl', function ($scope,$http)
    {        
        var workerInformation = {
                code: 'a',
                name: 'T恤',
                type: '衣服',
                color: 'black',
                inventory_number:'100',
               check_number:'1000',
            };
            var promise=$http({
                url:"itemList_JSON.json",
                method:"get"
            });
            promise.success(function(data,status){
                $scope.items = [{code: data[0].code, name: data[0].name, type: data[0].type, color: data[0].color,inventory_number: data[0].inventory_number,check_number:data[0].check_number},
{code: data[1].code, name: data[1].name, type: data[1].type, color: data[1].color,inventory_number: data[1].inventory_number,check_number:data[1].check_number},
{code: data[2].code, name: data[2].name, type: data[2].type, color: data[2].color,inventory_number: data[2].inventory_number,check_number:data[2].check_number}];
                
            });
            $scope.data = workerInformation;
            
        }


);

// use the myAppModule variable to
// configure the module with a filter
itemListModule.filter('itemListModulestripDashes', function() {
    return function(txt) {
        // filter code would go here
    }; });
