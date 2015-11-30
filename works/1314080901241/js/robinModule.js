<<<<<<< HEAD
    // create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var robinModule = angular.module('robinModule', []);
=======
// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var myAppModule = angular.module('robinModule', []);
>>>>>>> origin/master

// use the myAppModule variable to
// configure the module with a controller
robinModule.controller('createDemoCtrl', function ($scope) {
       // controller code would go here
<<<<<<< HEAD
        $scope.someData = [
           { type: '1',name: '内侧板',description:'结实'},
           { type: '3',name: '外侧板',description:'美观'},
           { type: '2',name: '中侧板',description:'好用'}
           ];
=======

  	  
  	      var DataList = {
  	          classification: '类别',
  	          name: '名称',
   	          description:'描述',
    		  };
       	 $scope.data = DataList;
		} 
	
>>>>>>> origin/master
    }
);

// use the myAppModule variable to
// configure the module with a filter
robinModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; });