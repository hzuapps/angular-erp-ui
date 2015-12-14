
//初始化表单数据
var ManifestData = {
		ManifestNum: '001',
        Wearhouse: '001',
        Handler: 'Ayden',
        HandlingData: '2000-10-15',
        State: ' ',
	    Remark: ' ',
		

};


//创建模块
var ManifestDataModule = angular.module("ManifestDataModule", ['ngRoute']);
      
      ManifestDataModule.config(['$routeProvider',
         function($routeProvider) {
            $routeProvider.
               when('/myWebsite', {
                  templateUrl: 'myWebsite.html',
                  //controller: 'myWebsiteController'
               }).
               when('/aboutMe', {
                  templateUrl: 'aboutMe.html',
                  //controller: 'aboutMeController'
               }).
               otherwise({
                  redirectTo: '/myWebsite'
               });
         }]);

         /*ManifestDataModule.controller('myWebsiteController', function($scope) {
            $scope.message = "Welcome to my Website";
         });

         ManifestDataModule.controller('aboutMeController', function($scope) {
            $scope.message = "machaorong 1314080901225";
         });*/



//创建服务
ManifestDataModule.factory("ManifestService",function($http){
      var getManifestData={};
      
	  //getData方法
      getManifestData.getData=function(buttondata){
            var promise=$http({
              url:"jsonData/buttonData.json",
              method:"GET",
			  data:buttondata
            });
            return promise;
      }
      
      return getManifestData;

});

//定义控制器

angular.module('ManifestDataModule').controller('MyFilterDemoCtrl', function($scope,ManifestService) {
          var promise=ManifestService.getData();
		  
		  $scope.create = function () {
			$scope.showSuccessMessage=false;
			$scope.showErrorMessage=false;
			//promise的成功方法
			promise.success(function(data,status){
			
		  
			$scope.successMessage =data[0].SMessage;
   		    $scope.showSuccessMessage=true;
			});
		  
			//promise的失败方法
			promise.error(function(data,status){
		  
		  
			$scope.errorsMessage =data[0].EMessage;
			$scope.showErrorMessage=true; 
		  
			});
		  }

			
			
			$scope.SelectItem = [
			 {
				ManifestNum:'00001',
				Wearhouse:'1号仓库',
				Handler:'富土康质检员张全蛋',

			 },
			 {
				ManifestNum:'00002',
				Wearhouse:'2号仓库',
				Handler:'隔壁老王',
			 }
			 
			];
			
			
			

			


});



//定义过滤器
ManifestDataModule.filter('stripDashes', function() {
	return function(txt) {
		// filter code would go here
	};
});

/*ManifestDataModule.config(['$routeProvider',
         function($routeProvider) {
            $routeProvider.
               when('/addStudent', {
                  templateUrl: 'addStudent.html',
                  controller: 'AddStudentController'
               }).
               when('/viewStudents', {
                  templateUrl: 'viewStudents.html',
                  controller: 'ViewStudentsController'
               }).
               otherwise({
                  redirectTo: '/addStudent'
               });
         }]);

ManifestDataModule.controller('AddStudentController', function($scope) {
            $scope.message = "This page will be used to display add student form";
         });

ManifestDataModule.controller('ViewStudentsController', function($scope) {
            $scope.message = "This page will be used to display all the students";
         });*/