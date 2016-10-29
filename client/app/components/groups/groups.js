import angular from 'angular';
import uiRouter from 'angular-ui-router';
import groupsComponent from './groups.component';

let groupsModule = angular.module('groups', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('groups', {
      url: '/groups',
      component: 'groups'
    });
})

.component('groups', groupsComponent)

.name;

export default groupsModule;
