import angular from 'angular';
import ResendEmailDirective from './resend-email.directive';
import resendEmailDialogComponent from './resend-email-dialog/resend-email-dialog.component';


let resendEmailModule = angular.module('people.form.resendEmail', [])

.component('resendEmailDialog', resendEmailDialogComponent)
.directive('resendEmailButton', ($timeout, $uibModal) => {
  "ngInject";
  return new ResendEmailDirective($timeout, $uibModal);
})

.name;

export default resendEmailModule;
