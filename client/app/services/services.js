import angular from 'angular';
import memberModule from './member/member';
import profileModule from './profile/profile';
import validationModule from './validation/validation';
import formatModule from './format/format';
import teamModule from './team/team'

let servicesModule = angular.module('app.services', [
  memberModule, profileModule, validationModule, formatModule, teamModule
])

.name;

export default servicesModule;
