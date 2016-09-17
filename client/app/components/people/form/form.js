import angular from 'angular';
import uiRouter from 'angular-ui-router';
import formComponent from './form.component';

let formModule = angular.module('people.form', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('people.details', {
      url: '/:id',
      component: 'peopleForm',
    });
})

.component('peopleForm', formComponent)

.name;

export default formModule;
