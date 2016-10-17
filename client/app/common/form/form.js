import './form.styl';

import angular from 'angular';
import listInputModule from './components/list-input/list-input';
import ToggleButtonDirective from './directives/toggle-button/toggle-button.directive';
import UniqueEmail from './directives/unique-email/unique-email.directive';
import NgName from './directives/ng-name/ng-name.directive';
import ValidPhoneNumber from './directives/valid-phone-number/valid-phone-number.directive';
import countryInput from './components/country-input/country-input.component';
import phoneInput from './components/phone-input/phone-input.component';
import alternativePhoneInput from './components/phone-input/alternative-phone-input.component';

let formModule = angular.module('common.form', [
    listInputModule
  ])

  .directive('toggleButton', ($timeout) => {
    "ngInject";
    return new ToggleButtonDirective($timeout);
  })
  .directive('uniqueEmail', (validationService) => {
    "ngInject"
    return new UniqueEmail(validationService);
  })
  .directive('validPhoneNumber', ($q, validationService) => {
    "ngInject"
    return new ValidPhoneNumber($q, validationService)
  })
  .directive('ngName', () => new NgName())

  .component('countryInput', countryInput)
  .component('phoneInput', phoneInput)
  .component('alternativePhoneInput', alternativePhoneInput)

  .name;

export default formModule;
