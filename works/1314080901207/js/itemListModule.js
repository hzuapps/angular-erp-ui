// create a new module called 'myAppModule' and save 
// a reference to it in a variable called itemListModule
var itemListModule = angular.module('itemListModule', ["ngRoute"]);
function theRoute($routeProvider)
{
	$routeProvider.
	when("/",{
		templateUrl:"home.html",
        controller:"itemListCtrl"
	}).
	when("/home",{
		templateUrl:"home.html",
        controller:"itemListCtrl"
	}).
	when("/aboutMe",{
		templateUrl:"aboutMe.html"
	}).
	otherwise({
		templateUrl:"error.html"
	});
}
itemListModule.config(theRoute);
 
// use the itemListModule variable to
// configure the module with a controller

itemListModule.controller('itemListCtrl', function ($scope,$http)
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
{code: data[1].code, name: data[1].name, type: data[1].type, color: data[1].color,inventory_number: data[1].inventory_number,check_number:data[1].check_number}
];
                
            });
                       
            
         }
 
 );
 
 itemListModule.directive("mydata",function(){
	 return{
		 restrict:"AEC",
		 template:'<table class="table table-bordered table-condensed" align="center" >'
            +'<thead>'
            +'<tr>'
                +'<th rowspan="2" class="text-center">编码</th>'
                +'<th rowspan="2" class="text-center">品名</th>'
				+'<th rowspan="2" class="text-center">类型</th>'
				+'<th rowspan="2" class="text-center">颜色</th>'
				+'<th rowspan="2" class="text-center">库存数</th>'
				+'<th rowspan="2" class="text-center">盘点数</th>'
            +'</tr>'
            +'<tbody ng-repeat="item in items">'
            +'<tr>'
                +'<td rowspan="2" class="text-center">{{item.code}}</td>'
                +'<td rowspan="2" class="text-center">{{item.name}}</td>'
				+'<td rowspan="2" class="text-center">{{item.type}}</td>'
				+'<td rowspan="2" class="text-center">{{item.color}}</td>'
				+'<td rowspan="2" class="text-center">{{item.inventory_number}}</td>'
				+'<td rowspan="2" class="text-center">{{item.check_number}}</td>'
            +'</tr>'
            +'</tbody>'
        +'</table>',
		 transclude:true
	 }
 });
 // use the myAppModule variable to
 // configure the module with a filter
 itemListModule.filter('itemListModulestripDashes', function() {
     return function(txt) {
         // filter code would go here
     }; });