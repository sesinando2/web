import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngSanitize from 'angular-sanitize';

import MenuItem from './menuItem/menuItem';
import navigationComponent from './navigation.component';

let navigationModule = angular.module('navigation', [
  uiRouter, ngSanitize, 'config', MenuItem
])

.component('navigation', navigationComponent)

.name;

export default navigationModule;
