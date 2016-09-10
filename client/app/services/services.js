import angular from 'angular';
import Member from './member/member';

let servicesModule = angular.module('app.services', [
  Member
])

.name;

export default servicesModule;
