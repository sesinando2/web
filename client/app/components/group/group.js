import angular from 'angular';
import uiRouter from 'angular-ui-router';
import groupComponent from './group.component';

let groupModule = angular.module('group', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('group', {
      url: '/group',
      component: 'group'
    });
})

.component('group', groupComponent)

.name;

export default groupModule;
