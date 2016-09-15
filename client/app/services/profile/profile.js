import angular from 'angular';
import ngResource from 'angular-resource';
import ProfileService from './profile.service';

let profileModule = angular.module('services.profile', [
  ngResource,
  'config'
])

  .service('profileService', ProfileService)

  .name;

export default profileModule;
