import angular from 'angular';
import memberModule from './member/member';
import profileModule from './profile/profile';
import validationModule from './validation/validation';

let servicesModule = angular.module('app.services', [
  memberModule, profileModule, validationModule
])

.name;

export default servicesModule;
