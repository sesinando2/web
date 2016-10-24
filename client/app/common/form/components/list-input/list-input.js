import angular from 'angular';
import listInputComponent from './list-input.component';
import addListItemModalComponent from './add-list-item-modal/add-list-item-modal.component';

let listInputModule = angular.module('common.form.listInput', [])

  .component('listInput', listInputComponent)
  .component('addListItemModal', addListItemModalComponent)

  .name;

export default listInputModule;
