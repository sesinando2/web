import angular from 'angular';
import Logs from './logs/logs';
import Groups from './groups/groups';
import People from './people/people';
import Account from './account/account';

let componentModule = angular.module('app.components', [
  Logs, Groups, People, Account
])

.name;

export default componentModule;
