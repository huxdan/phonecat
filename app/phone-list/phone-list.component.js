'use strict';

angular.module('phoneList')
  .component('phoneList',{
    templateUrl:'phone-list/phone-list.template.html',
    controller:['$http', function($http){
      var self = this;
      this.orderProp = 'age';
      $http.get('phones/phones.json').then(function(resp){
        self.phones = resp.data;
      });
    }]
  })