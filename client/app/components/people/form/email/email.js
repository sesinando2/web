import angular from 'angular';
import uiRouter from 'angular-ui-router';
import emailComponent from './email.component';

let emailModule = angular.module('people.form.email', [
  uiRouter
])

.component('personEmail', emailComponent)

.name;

export default emailModule;
