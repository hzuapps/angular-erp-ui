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
         $scope.items =[
		 {number: '001'£¬encoding: '100',classes: 'A',name: '200',type= '300',long: '400', wide: '500',hight: '600',units:'700',counts:'800',receiving count:'900',remark:'G'},
		 {number: '002'£¬encoding: '101',classes: 'B',name: '201',type= '301',long: '401', wide: '501',hight: '601',units:'701',counts:'801',receiving count:'901',remark:'H'},
		 {number: '003'£¬encoding: '102',classes: 'C',name: '202',type= '302',long: '402', wide: '502',hight: '602',units:'702',counts:'802',receiving count:'902',remark:'I'}
						]
+    }
+);
+
+// use the myAppModule variable to
+// configure the module with a filter
+CaiGouShouHuoModule.filter('stripDashes', function() {
+    return function(txt) {
+        // filter code would go here
+}; });