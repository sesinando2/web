import angular from 'angular';
import ToggleButtonDirective from './directives/toggle-button/toggle-button.directive';
import UniqueEmail from './directives/unique-email/unique-email.directive';
import NgName from './directives/ng-name/ng-name.directive';

let formModule = angular.module('common.form', [])

  .directive('toggleButton', ($timeout) => {
    "ngInject";
    return new ToggleButtonDirective($timeout);
  })

  .directive('uniqueEmail', (validationService) => {
    "ngInject"
    return new UniqueEmail(validationService);
  })

  .directive('ngName', () => new NgName())

  .name;

export default formModule;
