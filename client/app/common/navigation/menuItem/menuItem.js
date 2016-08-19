import angular from 'angular';
import uiRouter from 'angular-ui-router';
import menuItemComponent from './menuItem.component';

let menuItemModule = angular.module('menuItem', [
  uiRouter
])

.component('menuItem', menuItemComponent)

.name;

export default menuItemModule;
