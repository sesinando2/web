import angular from 'angular';
import uiRouter from 'angular-ui-router';
import formComponent from './form.component';

let formModule = angular.module('groups.form', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject"

  $stateProvider
    .state('groups.details', {
      url: '/:id',
      component: 'groupForm',
      resolve: {
        selected: (teamService, $stateParams) => {
          "ngInject"

          return teamService.get({ id: $stateParams.id });
        }
      }
    })
})

.component('groupForm', formComponent)

.name;

export default formModule;
