// create a new module called 'myAppModule' & save 
 // a reference to it in a variable called myAppModule 
 var myAppModule = angular.module('myAppModule', []);
 []);
myAppModule.controller('MyFilterDemoCtrl', function ($scope) {
 // controller code would go here
{
$scope.isHidden = true;
   $scope.showHideColors = function () {
    $scope.isHidden = !$scope.isHidden;
    }
var danjuData = {
            danweiName:'changchengzhuangshi',
            shoukuanfangshi:'zhifubao',
            shoukuanData:'2015-11-12',
            shoukuanren:'yeliangchen',
            shoukuanjine:'2000',
            shoukuanzhanghu:'zhaoritian',
            yinghangkahao:'12345678',
            zhuangtai:'wubianhua',
        };
        $scope.data = danjuData;
} 
}
);
// use the myAppModule variable to
// configure the module with a filter
myAppModule.filter('stripDashes', function() {
return function(txt) {
 // filter code would go here
}; });