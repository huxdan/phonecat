'use strict';

angular.module('phoneDetail')
  .component('phoneDetail',{
    templateUrl:'phone-detail/phone-detail.template.html',
    controller:['$http', '$stateParams',
      function($http, $stateParams){
        var self = this;

        $http.get('phones/'+ $stateParams.phoneId + '.json').then(function(resp){
          self.setImage(resp.data.images[0]);
          self.phone = resp.data;
          console.log(resp.data);
        });
        
        self.setImage = function setImage(imageUrl) {
          self.mainImageUrl = imageUrl;
        };
        
      }
    ]
  })