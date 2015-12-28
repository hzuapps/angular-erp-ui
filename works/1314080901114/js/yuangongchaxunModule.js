// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var yuangongchaxunModule = angular.module('yuangongchaxunModule', []);

// use the myAppModule variable to
// configure the module with a controller
yuangongchaxunModule.controller('yuangongchaxunFilterDemoCtrl', function ($scope,$http) {
       // controller code would go here
       var yuangongchaxun = {
            leixing: '123',
            danjia: 123,
            shuliang: 123,
            jine: 123,
            IDcard: '123'
        };


        var promise=$http({
            url:"data.json",
            method:"get",
        });

        promise.success(function(data,status){
            $scope.items = [{leixing:data[0].leixing,
                danjia:data[0].danjia,
                shuliang:data[0].shuliang,
                jine:data[0].jine,
                IDcard:data[0].IDcard
                },
                {leixing:data[1].leixing,
                    danjia:data[1].danjia,
                    shuliang:data[1].shuliang,
                    jine:data[1].jine,
                    IDcard:data[1].IDcard},
                {leixing:data[2].leixing,
                    danjia:data[2].danjia,
                    shuliang:data[2].shuliang,
                    jine:data[2].jine,
                    IDcard:data[2].IDcard}];
        });
        promise.error(function(data,status){
            alert(status);
            alert("请求出现错误，具体是什么错误还有待检查");
        });


    }


);



// use the myAppModule variable to
// configure the module with a filter
yuangongchaxunModule.filter('yuangongchaxunstripDashes', function() {
    return function(txt) {
        // filter code would go here
}; });
