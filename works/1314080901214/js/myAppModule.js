
// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var myAppModule = angular.module('myAppModule', []);

// use the myAppModule variable to
// configure the module with a controller
var documentsDetail = {
                 laiyuan:"laiyuan1",
                 leibie:"leibie1",
                 mingchen:"mingchen1",
                 xinhao:"xinhao1",
                 yanse:"red",
                 changdu:"changdu1",
                 kuandu:"kuandu1",
                 houdu:"houdu1",
                 zhuangtai:"zhuangtai1",
                 kucunshu:"kucunshu1",
                 xuqiushu:"xuqiushu1",
                 caigoushu:"caigoushu1",
                 BOM:"bom1"
                };

myAppModule.controller('MyFilterDemoCtrl', function ($scope) {
       // controller code would go here
         
        $scope.data1 = documentsDetail;
        
    }
);

// use the myAppModule variable to
// configure the module with a filter
myAppModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; });