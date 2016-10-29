import angular from 'angular';
import uiRouter from 'angular-ui-router';
import logsComponent from './logs.component';

let logModule = angular.module('log', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('logs', {
      url: '/logs',
      component: 'logs'
    });
})

.component('logs', logsComponent)

.name;

export default logModule;
