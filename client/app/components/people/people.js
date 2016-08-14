import angular from 'angular';
import uiRouter from 'angular-ui-router';
import peopleComponent from './people.component';

let peopleModule = angular.module('people', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('people', {
      url: '/',
      component: 'people'
    });
})

.component('people', peopleComponent)

.name;

export default peopleModule;
