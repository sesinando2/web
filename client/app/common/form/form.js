import angular from 'angular';
import ToggleButtonDirective from './directives/toggle-button/toggle-button.directive';
import UniqueEmail from './directives/unique-email/unique-email.directive';
import NgName from './directives/ng-name/ng-name.directive';
import countryInput from './components/country-input/country-input.component';

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

  .component('countryInput', countryInput)

  .name;

export default formModule;
