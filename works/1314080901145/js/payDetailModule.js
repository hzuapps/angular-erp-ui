// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var payDetailModule = angular.module('payDetailModule', []);

// use the myAppModule variable to
// configure the module with a controller
payDetailModule.controller('MyFilterDemoCtrl', function ($scope) {

        var someData = {
            orderNum: 'JENNA',
            orderName: 'GRANT',
            abstract: 'dfsdfs ',
            yingshoujine: 123,
            yishoujine: 23,
            weishoujine: 100,
            beizhu:'dfs',      
        };
        $scope.data = someData;



       // controller code would go here
    $scope.data = someData;
    $scope.items = [
            {orderNum: '001',orderName: 'clothes',abstract: 'pants',yingshoujine:"200" ,yishoujine: "100",weishoujine: "100",beizhu: "ok"},
            {orderNum: '002',orderName: 'desk',abstract: 'white',yingshoujine: "300",yishoujine: "100",weishoujine: "200",beizhu: "ok"},
            {orderNum: '003',orderName: 'book',abstract: 'AngularJS',yingshoujine: "400",yishoujine: "100",weishoujine: "300",beizhu: "no"} 
        ];
  }
);

// use the myAppModule variable to
// configure the module with a filter
payDetailModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
    }; 
});