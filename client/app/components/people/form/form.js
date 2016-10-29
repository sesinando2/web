import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ResendEmail from './resend-email/resend-email';
import formComponent from './form.component';
import PersonName from './name/name';
import PersonEmail from './email/email';

let formModule = angular.module('people.form', [
  uiRouter, PersonName, PersonEmail, ResendEmail
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
