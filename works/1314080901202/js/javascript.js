+// create a new module called 'myAppModule' and save 
+// a reference to it in a variable called myAppModule 
+var orderModule = angular.module('orderModule', []);
+
+// use the myAppModule variable to
+// configure the module with a controller
+orderModule.controller('createOrderCtrl', function($scope) {
+	var banjianlist = {
            ceban: '侧板',
            cengban: '层板',
            menban: '门板',
            beiban: '背板',            
            mupi: '木皮',
+	};
+	$scope.data = banjianlist;
+});
+
+// use the myAppModule variable to
+// configure the module with a filter
+myAppModule.filter('stripDashes', function() {
+	return function(txt) {
+		// filter code would go here
+	};
+}); 
// javascript.js