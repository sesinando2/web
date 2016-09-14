import angular from 'angular';
import uiRouter from 'angular-ui-router';
import memberComponent from './member.component';

let memberModule = angular.module('member', [
  uiRouter
])

.component('member', memberComponent)

.name;

export default memberModule;
