import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Form from './form/form';
import peopleComponent from './people.component';

let peopleModule = angular.module('people', [
  uiRouter,
  Form
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
        onEnter: ($state, userInfo) => {
          "ngInject";
          if (!userInfo.account) {
            $state.go('account');
          }
        }
      }
    });
})

.component('people', peopleComponent)

.name;

export default peopleModule;
