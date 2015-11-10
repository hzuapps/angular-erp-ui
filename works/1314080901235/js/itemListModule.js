// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var itemListModule = angular.module('itemListModule', []);

// use the myAppModule variable to
// configure the module with a controller
itemListModule.controller('MyFilterDemoCtrl', function ($scope) {
          // controller code would go here
        var someDate = {
            code: '编码',
            name: '品名',
            type: '类型',
            color: '颜色',
            inventory_number: '库存数',
            check_number:'盘点数'
        };
       
    }
);

itemListModule.directive('itemListModule',function(){
console.log();
	return {
	restrict:'AE',
	template:"<div ng-repeat=\"data in data\">"+
			"{{data.code}}   &nbsp; &nbsp; &nbsp;  {{data.name}} &nbsp; &nbsp; &nbsp; {{data.type}} &nbsp; &nbsp; &nbsp;{{data.color}} &nbsp; &nbsp; &nbsp; {{data.inventory_number}} &nbsp; &nbsp; &nbsp; {{data.check_number}}</div>"
};
});

// use the myAppModule variable to
// configure the module with a filter
itemListModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; });
