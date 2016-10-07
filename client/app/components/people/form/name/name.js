import angular from 'angular';
import uiRouter from 'angular-ui-router';
import nameComponent from './name.component';
import MemberName from './member-name/member-name.directive';

let nameModule = angular.module('person.form.name', [
  uiRouter
])

.directive('memberName', () => new MemberName())
.component('personName', nameComponent)



.name;

export default nameModule;
