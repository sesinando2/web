import angular from 'angular';
import Page from './page/page';
import Navigation from './navigation/navigation';

let commonModule = angular.module('app.common', [
  Page,
  Navigation
])

.name;

export default commonModule;
