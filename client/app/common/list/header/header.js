import angular from 'angular';
import Header from './header.directive';

let listModule = angular.module('list.header', [])

.directive('listHeader', ($window, $timeout) => {
  "ngInject"
  return new Header($window, $timeout);
})

.name;

export default listModule;
