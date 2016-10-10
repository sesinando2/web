import angular from 'angular';
import FormatService from './format.service';

let formatModule = angular.module('services.format', [
  'config'
])

.service('formatService', FormatService)

.name;

export default formatModule;
