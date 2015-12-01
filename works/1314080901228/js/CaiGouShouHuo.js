+// create a new module called 'myAppModule' and save 
+// a reference to it in a variable called myAppModule 
+var CaiGouShouHuoModule = angular.module('CaiGouShouHuoModule', []);
+
+// use the myAppModule variable to
+// configure the module with a controller
+CaiGouShouHuoModule.controller('MyFilterDemoCtrl', function ($scope) {
+       // controller code would go here
+       var CaiGouShouHuo = {
+           order form state:'all','finish','unfinished',     
       start time:'2015-07-1',
	   terminal time:'2015-12-31',
	   
	   provider:'abc',
	   state:'finish','unfinished',
	   Warehouse:'abc',
	   remark:'abc',
	   handler:'abc',
	   Handling the date:'2015-12-31',
	   
	   number:   ,
	   encoding:  ,
	   classes:  ,
	   name:  ,
	   type:  ,
	   long:  ,
	   wide:  ,
	   hight:  ,
	   units:  ,
	   count:  ,
	   receiving count:  ,
	   remark:  ,
+        };
+        $scope.data = CaiGouShouHuo;
+    }
+);
+
+// use the myAppModule variable to
+// configure the module with a filter
+CaiGouShouHuoModule.filter('stripDashes', function() {
+    return function(txt) {
+        // filter code would go here
+}; });