import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Header from './header/header';
import listComponent from './list.component';

let listModule = angular.module('list', [
  uiRouter, Header
])

.component('list', listComponent)

.name;

export default listModule;
