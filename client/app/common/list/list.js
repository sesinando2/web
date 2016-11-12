import angular from 'angular';
import uiRouter from 'angular-ui-router';
import uiBootstrap from 'angular-ui-bootstrap';
import header from './header/header';
import member from './member/member';
import team from './team/team'
import listItemComponent from './item/item.component';

import listComponent from './list.component';

let listModule = angular.module('common.list', [
  uiRouter,
  uiBootstrap,
  header,
  member,
  team
])

.component('list', listComponent)
.component('listItem', listItemComponent)

.name;

export default listModule;
