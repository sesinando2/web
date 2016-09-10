import angular from 'angular';
import A from './a.directive';

let aModule = angular.module('a', [])

.directive('a', () => new A())

.name;

export default aModule;

