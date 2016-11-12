import template from './groups.html';
import controller from './groups.controller';
import './groups.styl';

let groupsComponent = {
  restrict: 'E',
  bindings: {
    accountId: '<',
    data: '='
  },
  template,
  controller
};

export default groupsComponent;
