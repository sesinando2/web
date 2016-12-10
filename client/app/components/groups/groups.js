import angular from 'angular';
import uiRouter from 'angular-ui-router';
import groupsComponent from './groups.component';
import groupsForm from './form/form';

let groupsModule = angular.module('groups', [
  uiRouter, groupsForm
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('groups', {
      url: '/groups',
      component: 'groups',
      resolve: {
        accountId: (userInfo) => {
          "ngInject";
          return userInfo.account ? userInfo.account.id : undefined;
        },
        data: ($stateParams, teamService, userInfo) => {
          "ngInject";
          return teamService
            .list($stateParams.max, $stateParams.current, $stateParams.query, userInfo.account.id);

        }
      },
      params: {
        current: 1,
        max: 10,
        query: null,
      },
      data: {
        enabled: true
      },
      onEnter: ($state, userInfo) => {
        "ngInject";
        if (!userInfo.account) {
          $state.go('account');
        }
      }
    });
})

.component('groups', groupsComponent)

.name;

export default groupsModule;
