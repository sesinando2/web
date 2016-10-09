import angular from 'angular';
import ValidationService from './validation.service';

let validationModule = angular.module('services.validation', [
  'config'
])

.service('validationService', ValidationService)

.name;

export default validationModule;
