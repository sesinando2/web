import angular from 'angular';
import People from './people/people';
import Group from './group/group';

let componentModule = angular.module('app.components', [
  People, Group
])

.name;

export default componentModule;
