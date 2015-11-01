+// create a new module called 'myAppModule' and save 
+// a reference to it in a variable called myAppModule 
+var orderModule = angular.module('orderModule', []);
+
+// use the myAppModule variable to
+// configure the module with a controller
+orderModule.controller('createOrderCtrl', function($scope) {
+	var BOMmessage = {
+		  dingdan: '某某公司装修工程',
          chanping: '楼层装饰',
          data1: '2015.9.1',
          data2: '2015.9.31',
          status: '装修中',
          caidanyuan: '小张',
          beizhu: '无',
+	};
+	$scope.data = BOMmessage;
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