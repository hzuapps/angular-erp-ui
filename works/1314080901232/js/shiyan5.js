 <body ng-controller="JijianGongziSelectCtrl">
       名字：{{data.name}}
  <div id="content">
    <div id="head" style="width:auto;height:32px;background-color:#0066c0;color:#fff;font-size:28px;padding-left:20px;">
     计件工资
    </div>
    <div>
      <table class="table">
      <tr style="background-color:#e3e3e3">
        <td>类型</td>
        <td>单价</td>
        <td>数量</td>
        <td>金额</td>
        <td> IdCard</td>
      </tr>
      <tr  ng-repeat="item in someData">
        <td>{{item.Type}}</td>
        <td>{{item.price}}</td>
        <td>{{item.number}}</td>
        <td>{{item.money}}</td>
        <td>{{item. IdCard }}</td>
      </tr>
      </table>
    </div>
  </div>