import angular from 'angular';
import uiBootstrap from 'angular-ui-bootstrap';
import memberComponent from './member.component';

let memberModule = angular.module('list.member', [
  uiBootstrap
])

.component('member', memberComponent)

.name;

export default memberModule;
