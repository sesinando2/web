import angular from 'angular';
import ngResource from 'angular-resource';
import MemberService from './member.service';

let memberModule = angular.module('member', [
  ngResource,
  'config'
])

.service('memberService', MemberService)

.name;

export default memberModule;
