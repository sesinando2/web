import angular from 'angular';
import memberModule from './member/member';
import profileModule from './profile/profile';
import validationModule from './validation/validation';
import formatModule from './format/format';

let servicesModule = angular.module('app.services', [
  memberModule, profileModule, validationModule, formatModule
])

.name;

export default servicesModule;
