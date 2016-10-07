import angular from 'angular';
import uiRouter from 'angular-ui-router';
import uiBootstrap from 'angular-ui-bootstrap';
import nameComponent from './name.component';
import MemberName from './member-name/member-name.directive';
import MobileAppConfig from './mobile-app-config/mobile-app-config.directive';

let nameModule = angular.module('person.form.name', [
  uiRouter,
  uiBootstrap
])

.directive('memberName', () => new MemberName())
.directive('mobileAppConfig', ($timeout) =>  {
  "ngInject";

  return new MobileAppConfig($timeout);
})

.component('personName', nameComponent)



.name;

export default nameModule;
