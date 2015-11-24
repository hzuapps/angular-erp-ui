// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var EmployeeAttendanceModule = angular.module('EmployeeAttendanceModule', []);

// use the myAppModule variable to
// configure the module with a controller
EmployeeAttendanceModule.controller('MyFilterDemoCtrl', function ($scope) {
       // controller code would go here
       var EmployeeAttendanceData = [{
         personNum:'001',
         personName:'zhouzebiao',
         attenceDate:'2015-01-01',
         moring:'true',
         moringOn:'2015-01-01 08:00',
         moringOff:'2015-01-01 11:30',
         afternoon:'true',
         afternoonOn:'2015-01-01 13:30',
         afternoonOff:'2015-01-01 17:30',
         extra:'true',
         start:'2015-01-01 19:30',
         stop:'2015-01-01 22:00'
        },
        {
         personNum:'002',
         personName:'zhouzebiao',
         attenceDate:'2015-01-01',
         moring:'true',
         moringOn:'2015-01-01 08:00',
         moringOff:'2015-01-01 11:30',
         afternoon:'true',
         afternoonOn:'2015-01-01 13:30',
         afternoonOff:'2015-01-01 17:30',
         extra:'true',
         start:'2015-01-01 19:30',
         stop:'2015-01-01 22:00'
        }];
        $scope.attendance_data = EmployeeAttendanceData;
        }
);

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
