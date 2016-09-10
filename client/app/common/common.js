import angular from 'angular';
import A from './a/a';
import Page from './page/page';
import List from './list/list';
import Navigation from './navigation/navigation';

let commonModule = angular.module('app.common', [
  A,
  Page,
  List,
  Navigation
])

.name;

export default commonModule;
