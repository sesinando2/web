import angular from 'angular';
import uiRouter from 'angular-ui-router';
import pageComponent from './page.component';

let pageModule = angular.module('page', [
  uiRouter
])

.component('page', pageComponent)

.name;

export default pageModule;
