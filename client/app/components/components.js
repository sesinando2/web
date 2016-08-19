import angular from 'angular';
import Log from './log/log';
import Group from './group/group';
import People from './people/people';

let componentModule = angular.module('app.components', [
  Log, Group, People
])

.name;

export default componentModule;
