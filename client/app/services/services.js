import angular from 'angular';
import Member from './member/member';
import Profile from './profile/profile';

let servicesModule = angular.module('app.services', [
  Member, Profile
])

.name;

export default servicesModule;
