// create a new module called 'cangkucaigoushouhuoModule' and save 
// a reference to it in a variable called myAppModule 
var cangkucaigoushouhuoModule = angular.module('cangkucaigoushouhuoModule', []);

// use the myAppModule variable to
// configure the module with a controller

cangkucaigoushouhuoModule.factory('prividerService',function($http){
   var dataSvc={};
   dataSvc.getData=function(theData){
    var promise=$http({method: 'POST',url: 'ckjson/cangkucaigoushouhuodata.json',data: theData});
    return promise;
  }
    return dataSvc;

}).controller('MyFilterDemoCtrl', function ($scope,prividerService) {
       // controller code would go here
                var cat = {
            gongyingshang: 'china',
            cangku: '001',
            jingshouren:'zhang3',
            jingbanriqi:'2015-1-1',
            zhuangtai:'ok',
            beizhu:' '  
        };
        $scope.data = cat;
         $scope.isHidden = true;
        $scope.showInput = function () {
            $scope.isHidden = !$scope.isHidden;
        }
$scope.register=function(){
              var promise=prividerService.getData($scope.provider);
              promise.success(function(data,status,headers,config,statusText){
                  $scope.backMess=data.success;
                  $scope.isHidden = !$scope.isHidden;
                  if (!$scope.isHidden) {
                    alert($scope.backMess[0].message+"\n");
                  }
              });
                promise.error(function(data,status,headers,config,statusText){
                    $scope.backMess=data.error;
                    $scope.isHidden = !$scope.isHidden;
                    if (!$scope.isHidden) {
                        alert($scope.backMess[0].message);
                    }
                });
        }
});
    


// use the myAppModule variable to
// configure the module with a filter
cangkucaigoushouhuoModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; 
});//javascript.js