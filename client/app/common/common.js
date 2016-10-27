import angular from 'angular';
import aModule from './a/a';
import pageModule from './page/page';
import listModule from './list/list';
import navigationModule from './navigation/navigation';
import formModule from './form/form';
import modalModule from './modal/modal';

let commonModule = angular.module('app.common', [
  aModule,
  pageModule,
  listModule,
  navigationModule,
  formModule,
  modalModule
])

.name;

export default commonModule;
