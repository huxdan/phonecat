'use strict';

angular.module('phonecatApp')
  .config(['$locationProvider', '$stateProvider',
    function ($locationProvider, $stateProvider){
      $locationProvider.hashPrefix('');
      var helloState = {
        name: 'hello',
        url: '/hello',
        template: '<phone-list></phone-list>'
      }
      
      var detailState = {
        name: 'phone',
        url: '/phones/:phoneId',
        template: '<phone-detail></phone-detail>'
      }

      var aboutState = {
        name: 'about',
        url: '/about',
        template: '<h3>Its the UI-Router hello world app!</h3>'
      }

      $stateProvider.state(helloState);
      $stateProvider.state(aboutState);
      $stateProvider.state(detailState);
    }
])
