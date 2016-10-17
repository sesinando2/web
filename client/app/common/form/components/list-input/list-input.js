import angular from 'angular';
import listInputComponent from './list-input.component';

let listInputModule = angular.module('common.form.listInput', [])

  .component('listInput', listInputComponent)

  .name;

export default listInputModule;
