// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var myAppModule = angular.module('myStoreModule', []);

myAppModule.factory('storeService', function($http) {
    var service = {};

    service.create = function() {
        var promise = $http({
            method: 'POST',
            url: 'someServer/create',
            data: {
                "id": 001,
                "name": "jinhaoxu",
                "age": 20,
                "dateJoined": new Date(2010, 2, 23),
                "dateEnd": new Date(2015, 10, 22),
                "remark": "i'm a handsome boy!"
            }
        })

        return promise;
    };

    service.save = function() {
        var promise = $http({
            method: 'PUT',
            url: 'someServer/save/operator/id',
            data: {
                "id": 002,
                "name": "hengdanwang",
                "age": 22,
                "dateJoined": new Date(2010, 2, 23),
                "dateEnd": new Date(2015, 10, 22),
                "remark": "i'm a handsome boy!"
            }
        })

        return promise;
    };

    service.finish = function() {
        var promise = $http({
            method: 'GET',
            url: 'someServer/finish/operator/id',
        })

        return promise;
    };

    return service;
})

// use the myAppModule variable to
// configure the module with a controller
myAppModule.controller('MyFilterDemoCtrl', function($scope, storeService) {
    // controller code would go here
    // $scope.data = storeService.getData();
    $scope.create = function() {
        // storeService.create();
        var promise = storeService.create();
        promise.success(function(data, status, headers, config, statusText) {
            var backMsg = data.success;
            alert(backMsg.message);
        });
        promise.error(function(data, status, headers, config, statusText) {
            var backMess = data.error;
            alert(backMsg.message);
        });
    }

    $scope.save = function() {

        var promise = storeService.save();
        promise.success(function(data, status, headers, config, statusText) {
            var backMsg = data.success;
            alert(backMsg.message);
        });
        promise.error(function(data, status, headers, config, statusText) {
            var backMess = data.error;
            alert(backMsg.message);
        });
    }

    $scope.finish = function() {

        var promise = storeService.finish();
        promise.success(function(data, status, headers, config, statusText) {
            var backMsg = data.success;
            alert(backMsg.message);
        });
        promise.error(function(data, status, headers, config, statusText) {
            var backMess = data.error;
            alert(backMsg.message);
        });
    }

});

// use the myAppModule variable to
// configure the module with a filter
myAppModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
    };
});
