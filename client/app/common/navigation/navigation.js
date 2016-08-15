import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngSanitize from 'angular-sanitize';
import navigationComponent from './navigation.component';

import './logo.png';

let navigationModule = angular.module('navigation', [
  uiRouter, ngSanitize, 'config'
])

.component('navigation', navigationComponent)

.name;

export default navigationModule;
