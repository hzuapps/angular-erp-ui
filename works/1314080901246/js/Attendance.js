+// create a new module called 'myAppModule' and save 
+// a reference to it in a variable called myAppModule 
+var AttendanceModule = angular.module('AttendanceModule', []);
+
+// use the myAppModule variable to
+// configure the module with a controller
+AttendanceModule.controller('MyFilterDemoCtrl', function ($scope) {
+       // controller code would go here
+        var Yuekaoqin = {
            yuangongbianhao: '123',
            yuangongxingming: '1234',
            yuefen: '123',
            shijiatianshu: '1235',
            bingjiatianshu: '123',
            kuanggongtianshu:'123',
            jiabantianshu:'123',
            dangyueqiandaoshu:'123',
            shijiqiandaoshu:'123',
        };
        $scope.data = Yuekaoqin;
+    }
+);
+AttendanceModule.directive('liebiao',function(){
	return {
	restrict:'AEC',
	template:"<p ng-repeat='dd in data>'{{thedata.yuangongbianhao}} | {{thedata.yuangongxingming}} | {{thedata.shijiatianshu}} </p>",

    transclude:true 
};
});
+// use the myAppModule variable to
+// configure the module with a filter
+AttendanceModule.filter('stripDashes', function() {
+    return function(txt) {
+        // filter code would go here
+}; });
