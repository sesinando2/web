import angular from 'angular';
import uiRouter from 'angular-ui-router';
import formComponent from './form.component';
import personName from './name/name';
import personEmail from './email/email';

let formModule = angular.module('people.form', [
  uiRouter, personName, personEmail
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
