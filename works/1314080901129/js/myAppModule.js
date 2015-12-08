// create a new module called 'myAppModule' and save 
+// a reference to it in a variable called myAppModule 
+var myAppModule = angular.module('myAppModule', []);
+myAppModule.factory('myAppService',function($http){
	    var dataStroe = {};
+        dataStroe.doRegistration = function (theData) {
+            var promise = $http({method: 'POST',url: 'json/message.json',data: theData});
+            return promise;
+        }
+        return dataStroe;
+    }).controller('MyFilter', function 
($scope,myAppService) {
+// use the myAppModule variable to
+// configure the module with a controller
+	
	        // controller code would go hee
+       var danjuData = {
+            danweiName:'changchengzhuangshi',
+            shoukuanfangshi:'zhifubao',
+            shoukuanData:'2015-11-12',
+            shoukuanren:'yeliangchen',
+            shoukuanjine:'2000',
+            shoukuanzhanghu:'zhaoritian',
+            yinghangkahao:'12345678',
+            zhuangtai:'wubianhua',
+        };
+        $scope.data = danjuData;
     	   $scope.isHidden = true;
     	   $scope.showInput = function () {
     	   	 $scope.isHidden = 
     	   	 !$scope.isHidden;
     	   	 $scope.myApp= {};
     	   	 $scope.register = function () {
+            var promise =providerService.doRegistration($scope.provider);
+            promise.success(function (data, status, headers, config, statusText) {
+                $scope.backMess = data.success;
+                $scope.isHidden = !$scope.isHidden;
+                if(!$scope.isHidden){
+                    alert($scope.backMess[0].
message + "\n" + "\n" + "Your danju.danweiName is " + $scope.danju.danweiName);
+                }
+            });
+            promise.error(function (data, status, headers, config, statusText) {
+                $scope.backMess = data.error;
+                $scope.isHidden = !$scope.isHidden;
+                if(!$scope.isHidden){
+                    alert($scope.backMess[0].message);
+                }
+            });
+        }
+});
+// use the myAppModule variable to
+// configure the module with a filter
+myAppModule.filter('stripDashes', function() {
+    return function(txt) {
+        // filter code would go here
+}; }); 
