import angular from 'angular';
import uiRouter from 'angular-ui-router';
import peopleComponent from './people.component';
import peopleForm from './form/form';

let peopleModule = angular.module('people', [
  uiRouter, peopleForm
])

.config(($stateProvider) => {
  "ngInject";

  $stateProvider
    .state('people', {
      url: '/people',
      component: 'people',
      resolve: {
        accountId: (userInfo) => {
          "ngInject";
          return userInfo.account ? userInfo.account.id : undefined;
        },
        data: ($stateParams, memberService, userInfo) => {
          "ngInject";

          return memberService.list($stateParams.max, $stateParams.current, $stateParams.query, userInfo.account.id);
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

.component('people', peopleComponent)

.name;

export default peopleModule;
