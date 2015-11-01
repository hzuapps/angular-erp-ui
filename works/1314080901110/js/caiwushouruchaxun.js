// create a new module called 'myAppModule' and save 
+// a reference to it in a variable called myAppModule 
+var myAppModule = angular.module('caiwushouruchaxunModule', []);
+
+// use the myAppModule variable to
+// configure the module with a controller
+myAppModule.controller('MyFilterDemoCtrl', function ($scope) {
+       // controller code would go here
+      var Query options = {
+            Income state: '未完成',
+            Start date:  '2015-1-1',
+     Termination date: '2015-2-13',
+        };
+        $scope.data =  Query options;
+} 
+
+// use the myAppModule variable to
+// configure the module with a filter
+myAppModule.filter('stripDashes', function() {
+    return function(txt) {
+        // filter code would go here
+}; }); 
