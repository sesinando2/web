import angular from 'angular';
import uiRouter from 'angular-ui-router';
import nameComponent from './name.component';

let nameModule = angular.module('person.form.name', [
  uiRouter
])

.component('personName', nameComponent)

.name;

export default nameModule;
