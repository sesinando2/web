import angular from 'angular';
import uiRouter from 'angular-ui-router';
import formComponent from './form.component';

let formModule = angular.module('form', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";

  $stateProvider
    .state('people.details', {
      url: '/:id',
      component: 'peopleForm',
      resolve: {
        selected: (memberService, $stateParams) => {
          "ngInject";

          return memberService.get({ id: $stateParams.id });
        }
      }
    })
})

.component('peopleForm', formComponent)

.name;

export default formModule;
