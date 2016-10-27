import angular from 'angular';
import ConfirmDialog from './confirm-dialog/confirm-dialog.component';
import AlertDialog from './alert-dialog/alert-dialog.component';

let modalModule = angular.module('app.common.dialog', [
])
.component('confirmDialog', ConfirmDialog)
.component('alertDialog', AlertDialog)
.name;

export default modalModule;
