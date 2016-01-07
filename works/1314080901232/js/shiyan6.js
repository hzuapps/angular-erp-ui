   <title>工资-计件工资列表-1314080901232</title>
       <script src="js/jquery.min.js"></script>
       <script src="../../lib/angular-1.4.5/angular.min.js"></script>
    <script src="js/JijianGongziSelect.js"></script>                                        
 <td>金额</td>
          <td>IdCard</td>
        </tr>

      <tr  ng-repeat="item in data">
          <td>{{item.Type}}</td>
          <td>{{item.price}}</td>
          <td>{{item.number}}</td>
// use the myAppModule variable to
  // configure the module with a controller
JijianGongziSelect.controller('JijianGongziSelectCtrl', function ($http,$scope) {
         // controller code would go here
         $scope.someData = [
           { Type: '直接计件工资',price: '10',number:'100',money:'1000', IdCard:'440852199611884963'},
            { Type: '直接计件工资',price: '10',number:'100',money:'1000', IdCard:'440852199611884963'},
           { Type: '直接计件工资',price: '10',number:'100',money:'1000', IdCard:'440852199611884963'}
            ];
     }
 );
       $http.get("materialList_JSON.txt").success(function(someData){
        $scope.data=someData;
       });
     })

  
  // use the myAppModule variable to
  // configure the module with a filter
