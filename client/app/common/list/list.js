import angular from 'angular';
import uiRouter from 'angular-ui-router';
import uiBootstrap from 'angular-ui-bootstrap';
import Header from './header/header';
import Member from './member/member';

import listComponent from './list.component';

let listModule = angular.module('list', [
  uiRouter,
  uiBootstrap,
  Header,
  Member
])

.component('list', listComponent)

.name;

export default listModule;
