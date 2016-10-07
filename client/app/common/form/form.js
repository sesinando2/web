import angular from 'angular';
import ToggleButton from './toggle-button/toggle-button.directive';

let formModule = angular.module('common.form', [])

  .directive('toggleButton', ($timeout) => {
    "ngInject"
    return new ToggleButton($timeout)
  })

  .name;

export default formModule;
