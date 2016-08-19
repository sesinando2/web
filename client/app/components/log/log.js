import angular from 'angular';
import uiRouter from 'angular-ui-router';
import logComponent from './log.component';

let logModule = angular.module('log', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('log', {
      url: '/log',
      component: 'log'
    });
})

.component('log', logComponent)

.name;

export default logModule;
