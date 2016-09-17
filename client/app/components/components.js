import angular from 'angular';
import Log from './log/log';
import Group from './group/group';
import People from './people/people';
import Account from './account/account';

let componentModule = angular.module('app.components', [
  Log, Group, People, Account
])

.name;

export default componentModule;
