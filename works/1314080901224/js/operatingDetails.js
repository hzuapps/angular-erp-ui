//流程-审核-操作明细js文件

//定义操作明细的数据实体
var operationData = {
	operateName: 'theOperationName',
	detail: 'operationDetail',
	notes: 'theNotes'};








var myOperationModule=angular.module("operationModule",[]);
myOperationModule.controller("CreateOperation",function($scope){
$scope.theData=operationData;

});



