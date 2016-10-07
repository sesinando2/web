import angular from 'angular';
import uiRouter from 'angular-ui-router';
import uiBootstrap from 'angular-ui-bootstrap';
import header from './header/header';
import member from './member/member';

import listComponent from './list.component';

let listModule = angular.module('common.list', [
  uiRouter,
  uiBootstrap,
  header,
  member
])

.component('list', listComponent)

.name;

export default listModule;
