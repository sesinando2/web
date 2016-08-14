import angular from 'angular';
import Page from './page/page';
import Header from './header/header';
import Sidebar from './sidebar/sidebar';

let commonModule = angular.module('app.common', [
  Page,
  Header,
  Sidebar
])

.name;

export default commonModule;
