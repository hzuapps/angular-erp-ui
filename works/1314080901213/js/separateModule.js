// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var separateModule = angular.module('separateModule', ['ngRoute']);

// use the myAppModule variable to
// configure the module with a controller
separateModule.controller('separateModuleCtrl', function ($scope, $http) {
    // controller code would go here
    var separateDetail = {
        name: '¹þ¹þ',
        Mlength: "1",
        Mwidth: "2",
        Mheight: "3",
        amount: '1',
        packagemethod: 'a',
        artsymbol: 'Z1',
        unitprice: '2.00',
        Plength: "0.8",
        Pwidth: "1.9",
        Pheight: "2.3",



    };
    var promise = $http({
        url: "separate_JSON.json",
        method: "get"
    });
    
    promise.success(function (data, status) {
        $scope.items = [{
            name: data[0].name,
            Mlength: data[0].Mlength,
            Mwidth: data[0].Mwidth,
            Mheight: data[0].Mheight,
            amount: data[0].amount,
            packagemethod: data[0].packagemethod,
            artsymbol: data[0].artsymbol,
            unitprice: data[0].unitprice,
            Plength: data[0].Plength,
            Pwidth: data[0].Pwidth,
            Pheight: data[0].Pheight,
            
        }];
    }

);
    $scope.data = separateDetail;
});

// use the myAppModule variable to
// configure the module with a filter
separateModule.filter('separateModelestripDashes', function() {
    return function(txt) {
        // filter code would go here
    };
});

separateModule.config(['$routeProvider',
         function ($routeProvider) {
             $routeProvider.
                when('/website', {
                    templateUrl: 'website.html',
                    //controller: 'aboutController'
                }).
                when('/table', {
                    templateUrl: 'table.html',
                    //controller: 'aboutController'
                }).
                when('/about', {
                    templateUrl: 'about.html',
                    //controller: 'aboutController'
                }).
                otherwise({
                    redirectTo: '/about'
                });
         }]);
