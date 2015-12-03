//流程-审核-操作明细js文件

//定义操作明细的数据实体
var operationData = {
	operateName: 'theOperationName',
	detail: 'operationDetail',
	notes: 'theNotes'};









var myOperationModule=angular.module("operationModule",[]);

myOperationModule.factory("operationService",function($http){
	var getOperationData={};
	getOperationData.getData=function(){
		var promise=$http({
			url:"jsonData/operationData.json",
			method:"get",
		});
		return promise;
	}
	return getOperationData;

});


//定义控制器
myOperationModule.controller("CreateOperation",function($scope,operationService){
  var promise=operationService.getData();
  promise.success(function(data,status){  
        var operationData1=operationData;
            operationData1.operateName=data["operateName"];
            operationData1.detail=data["detail"];
            operationData1.notes=data["notes"];

            $scope.theData=operationData1;
  });


});


//实用derective
//操作名
myOperationModule.directive("thename",function(){
return{
      restrict:"AEC",
      template:'<input id="operationName" type="text" style="width:200px;height:30px;" ng-model="theData.operateName">',
      replace:true

};
});

//操作明细
myOperationModule.directive("thedetail",function(){
return{
      restrict:"AEC",
      template:'<textarea id="operationDetail" style="width:400px;height:100px;" ng-model="theData.detail"></textarea>',
      replace:true

};
});

//操作批示
myOperationModule.directive("thenotes",function(){
return{
      restrict:"AEC",
      template:'<textarea id="operationNotes" style="width:500px;height:100px;" ng-model="theData.notes"></textarea>',
      replace:true

};
});









