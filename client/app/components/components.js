import angular from 'angular';
import People from './people/people';

let componentModule = angular.module('app.components', [
  People
])

.name;

export default componentModule;
