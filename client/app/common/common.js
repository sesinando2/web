import angular from 'angular';
import aModule from './a/a';
import pageModule from './page/page';
import listModule from './list/list';
import navigationModule from './navigation/navigation';
import formModule from './form/form';

let commonModule = angular.module('app.common', [
  aModule,
  pageModule,
  listModule,
  navigationModule,
  formModule
])

.name;

export default commonModule;
