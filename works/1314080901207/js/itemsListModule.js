// create a new module called 'itemsListModule' and save 
// a reference to it in a variable called myAppModule 
var itemsListModule = angular.module('itemsListModule', []);

// use the itemsListModule variable to
// configure the module with a controller
itemsListModule.controller('itemsListCtrl', function ($scope) {
       // controller code would go here
	     var itemsList = {
            coding:'001',
            name:'迪斯尼龙',
			      type:'家具',
            color:'红色',
		      	inventoryCount:'260',
			      checkCount:'26'
        };
        $scope.data =itemsList;
    }
);

// use the itemsListModule variable to
// configure the module with a filter
itemsListModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; });
