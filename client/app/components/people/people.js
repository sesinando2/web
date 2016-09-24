import angular from 'angular';
import uiRouter from 'angular-ui-router';
import peopleComponent from './people.component';
import formTemplate from './people.form.html';

let peopleModule = angular.module('people', [
  uiRouter
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
        }
      },
      onEnter: ($state, userInfo) => {
        "ngInject";
        if (!userInfo.account) {
          $state.go('account');
        }
      }
    })
    .state('people.details', {
      url: '/:id',
      template: formTemplate
    });
})

.component('people', peopleComponent)

.name;

export default peopleModule;
