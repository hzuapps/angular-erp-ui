// create a new module called 'procedure message' and save 
// a reference to it in a variable called procedure message 
var procedure_message = angular.module('procedure_message', []);

// use the procedure message variable to
// configure the module with a controller
procedure_message.controller('procedure_message', function ($scope,$http) {
       // controller code would go here

    var procedure_message={
        	            name:'名称',
        	            unit:'单位',
        	            standard:'规格',
                        number:'系数',
                        condition:'状态'
    	            };
	   


var promise=$http({
    url:"data.json",
    method:"get",
});


promise.success(function(data,status){
    $scope.items = [{name:data[0].name,
        unit:data[0].unit,
        standard:data[0].standard,
        number:data[0].number,
        condition:data[0].condition
        },
        {name:data[1].name,
            unit:data[1].unit,
            standard:data[1].standard,
            number:data[1].number,
            condition:data[1].condition},
        {name:data[2].name,
            unit:data[2].unit,
            standard:data[2].standard,
            number:data[2].number,
            condition:data[2].condition}];
});
promise.error(function(data,status){
    alert(status);
    alert("请求出现错误，具体是什么错误还有待检查");
});


}

);

// use the procedure message variable to
// configure the module with a filter
procedure_message.filter('procedure_message', function() {
    return function(txt) {
        // filter code would go here
}; });
