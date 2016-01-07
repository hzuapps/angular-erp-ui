 <div id="head" style="width:auto;height:32px;background-color:#0066c0;color:#fff;font-size:28px;padding-left:20px;">
 +       计件工资
 +     </div>
 +     <div>
 +       <table class="table">
 +       <tr style="background-color:#e3e3e3">
 +         <td>类型</td>
 +        <td>单价</td>
 +        <td>数量</td>
 +        <td>金额</td>
 +        <td> IdCard</td>
 +       </tr>
 +     <tr  ng-repeat="item in data">
 +         <td>{{item.Type}}</td>
 +        <td>{{item.price}}</td>
 +        <td>{{item.number}}</td>
 +        <td>{{item.money}}</td>
 +        <td>{{item. IdCard }}</td>
 +      </tr>
 +      </table>
 +    </div> 
 +View 111  works/1314080901211/index.html
 +@@ -1,56 +1,59 @@
 +  <!DOCTYPE html>
 +
 +<html lang="zh-CN" ng-app="JijianGongziSelect">
 +  <head>
 +    <meta charset="utf-8">
 +   <meta http-equiv="X-UA-Compatible" content="IE=edge">
 +    <meta name="viewport" content="width=device-width, initial-scale=1">
 +    <!-- 上述3个meta标签*必须*放在最前面，任何其他内容都*必须*跟随其后！ -->
    <title>工资-计件工资-1314080901232</title>
    <script src="js/jquery.min.js"></script>
    <script src="../../lib/angular-1.4.5/angular.min.js"></script> 
    <script src="../../lib/angular-1.4.5/angular-route.js"></script>
    <script src="../../lib/angular-1.4.5/angular-route.min.js"></script>
    <script src="js/JijianGongziSelect.js"></script>                                                                                                                                                 
    <link rel="shortcut icon" href="icons/favicon.ico" />
    
    <!-- Bootstrap -->
    <link href="../../lib/bootstrap-3.3.5/css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="css/style.css" rel="stylesheet">


  
     <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
   <script src="//cdn.bootcss.com/jquery/1.11.3/jquery.min.js"></script>
   <!-- Include all compiled plugins (below), or include individual files as needed -->
   <script src="../../lib/bootstrap-3.3.5/js/bootstrap.min.js"></script>
  </body>
</html> 
View 34  works/1314080901232/js/JijianGongziSelect.js
@@ -1,16 +1,38 @@
       // create a new module called 'myAppModule' and save 
   // a reference to it in a variable called myAppModule 
 
  +var wuliaoSelect = angular.module('JijianGongziSelect', ['ngRoute']);
   
  // use the myAppModule variable to
   // configure the module with a controller
  JijianGongziSelect.config(function ($routeProvider) {
       // configure the routes
    $routeProvider
     .when('/index', {
       // route for the home page
         templateUrl: 'title.html',
      })
     .when('/home', {
       // route for the home page
         templateUrl: 'home.html',
         controller: 'homeController'
     })
     .when('/about', {
       // route for the about page
         templateUrl:'about.html',
         controller:'aboutController'
     });
 });
   
 
JijianGongziSelect.controller('aboutController', function ($scope) {
     $scope.title = ' 学号1314080901232';
    });


JijianGongziSelect.controller('homeController', function ($http,$scope) {
         // controller code would go here
      $http.get("materialList_JSON.txt").success(function(someData){
       $scope.data=someData;
       });
     })
       $http.get("materialList_JSON.txt").success(function(someData){$scope.data=someData;});
     
    });
   
  
  // use the myAppModule variable to
 View 10  works/1314080901232/title.html
 @@ -0,0 +1,10 @@
 <!DOCTYPE html>
 <html lang="en">
 <head>
     <meta charset="UTF-8">
     <title>title</title>
 </head>
 <body>
     <h1>工资-计件工资</h1>
 </body>
 +</html> 