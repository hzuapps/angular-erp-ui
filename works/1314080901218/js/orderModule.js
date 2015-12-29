
// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var orderModule = angular.module('orderModule', []);
 var someData = {
            "sidePlates":"侧板名",
            "laminates":"层板名",
            "backboard":"背板名",
            "door":"门板名",
            "veneer":"木皮名"
        };
// use the myAppModule variable to
// configure the module with a controller
orderModule.controller('Ctrl', function ($scope,$http) {
    // controller code would go here
       var promise=$http({
              url:"jsonData/myJsonDatas.json",
              method:"get",
           });
       promise.success(function(data,status){
        var data1=someData;
        data1.sidePlates=data.sidePlates;
        data1.laminates=data.laminates;
        data1.backboard=data.backboard;
        data1.door=data.door;
        data1.veneer=data.veneer;
        $scope.myData=data1;
         
       });
       promise.error(function(data,status){
           alert(status);
           
     });
        
    }
);
orderModule.directive("myorderdata",function(){
  return{
      restrict:"AEC",
      template:'<div class="row">'
                    +'<label for="example1">侧板：</label>'
                    +'<input type="text" class="form-control input-sm" ng-model="myData.sidePlates" id="example1"/>'
                    +'<br/>'
                     +'<br/>'
                    +'<label for="example2">层板：</label>'
                    +'<input type="text" class="form-control input-sm" ng-model="myData.laminates" id="example2"/>'
                    +'<br/>'
                     +'<br/>'
                    +'<label for="example3">背板：</label>'
                    +'<input type="text" class="form-control input-sm" ng-model="myData.backboard" id="example3"/>'
                    +'<br/>'
                     +'<br/>'
                    +'<label for="example4">门板：</label>'
                    +'<input type="text" class="form-control input-sm" ng-model="myData.door" id="example4"/>'
                    +'<br/>'
                    +' <br/>'
                    +'<label for="example5">木皮：</label>'
                    +'<input type="text" class="form-control input-sm" ng-model="myData.veneer" id="example5"/>'
                    +'<br/>'
                     +'<br/>'
                +'</div>',
      transclude: true
  };
});


// use the myAppModule variable to
// configure the module with a filter
orderModule.filter('Dashes', function () {
    return function (txt) {
        // filter code would go here
    };
});// javascript.js