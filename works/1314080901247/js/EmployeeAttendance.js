// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var EmployeeAttendanceModule = angular.module('EmployeeAttendanceModule', []);

//创建服务
EmployeeAttendanceModule.factory("EmployeeAttendanceService",function($http){
      var getEmployeeAttendanceData={};
      
	  //getData方法
      EmployeeAttendanceData.getData=function(AttenceData){
            var promise=$http({
              url:"jsonData/buttonData.json",
              method:"GET",
			  data:AttenceData
              });
            return promise;
        }
	return EmployeeAttendanceData;

});

EmployeeAttendanceModule.directive('list',function(){
	return {
	restrict:'AEC',
	template:"<div  style='text-align: center;' ng-repeat='thedata in attendance_data'>{{thedata.personNum}} &nbsp; &nbsp; &nbsp;"+
    "{{thedata.personName}} &nbsp; &nbsp; &nbsp; {{thedata.attenceDate}} &nbsp; &nbsp; &nbsp; {{thedata.moring}} &nbsp; &nbsp; &nbsp;"+
    "{{thedata.moringOn}} &nbsp; &nbsp; &nbsp;{{thedata.moringOff}} &nbsp; &nbsp; &nbsp;{{thedata.afternoon}} &nbsp; &nbsp; &nbsp;"+
    "{{thedata.afternoonOn}} &nbsp; &nbsp; &nbsp;{{thedata.afternoonOff}} &nbsp; &nbsp; &nbsp;{{thedata.extra}} &nbsp; &nbsp; &nbsp;"+
    "{{thedata.start}} &nbsp; &nbsp; &nbsp;{{thedata.stop}} &nbsp; &nbsp; &nbsp;</div>",

    transclude:true 
};
});

// use the myAppModule variable to
// configure the module with a filter
EmployeeAttendanceModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; });
