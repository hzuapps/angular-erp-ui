 
var myapp = angular.module("myapp", []);
+myapp.controller("homeController", function ($scope){
	var renshizz = {
            suoshubumen: 'renshi',
            gangweimingcheng: 'GRANT',
            gangweichenchi: new Date(2010, 2, 23),
            gangweileixin: 'guanligang',
            jibenxinzhi: 'super-basic-plan',
            gangweizhizhe:'myzhizhe'
        };
		$scope.renshizz1 = renshizz;
});