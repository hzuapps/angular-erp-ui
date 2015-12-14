// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var documentsDetailModule = angular.module('documentsDetailModule', []);

// use the myAppModule variable to
// configure the module with a controller
documentsDetailModule.factory('documentsDetailService',function($http){
        var dataStroe = {};
        dataStroe.getData = function () {
            var promise = $http({method: 'GET',url: 'json/data.json'});
            return promise;
        }
        return dataStroe;
    }).controller('documentsDetailFilter', function ($scope,documentsDetailService) {
       // controller code would go here
        var documentsDetail = {
            number: '001',
            code: 'AAA',
            type: 'food',
            name: 'chicken',
            model: 'big',
            unit:'kg',
            quantity:10,
            note:'taste good'
        };
        $scope.data = documentsDetail;
        $scope.items = [
            {code: '001',type: 'cake',name: 'ice cake',unit: 'kg',number: "99",length: 2,width: 1,thickness: 1.5},
            {code: '002',type: 'dress',name: 'flower dress',unit: 'mm',number: "99",length: 1.8,width: 0.9,thickness: 0.3},
            {code: '003',type: 'book',name: 'AngularJS',unit: 'cm',number: "99",length: 98,width: 56,thickness: 27} 
        ];
        var promise = documentsDetailService.getData();
        promise.success(function (data, status, headers, config, statusText) {
            $scope.backMess = data.documentsDetailData;
        });
        promise.error(function(data,status){
           alert('请求出错，请重试');
        });
});

// use the myAppModule variable to
// configure the module with a filter
documentsDetailModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; });
