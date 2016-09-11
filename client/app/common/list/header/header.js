import angular from 'angular';
import ngAnimate from 'angular-animate';
import Header from './header.directive';

let listModule = angular.module('list.header', [
  ngAnimate
])

.directive('listHeader', ($window) => {
  "ngInject"
  return new Header($window);
})

.name;

export default listModule;
