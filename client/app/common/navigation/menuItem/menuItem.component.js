import template from './menuItem.html';
import controller from './menuItem.controller';
import './menuItem.styl';

let menuItemComponent = {
  restrict: 'E',
  bindings: {
    text: '@',
    link: '@',
    state: '@',
    icons: '<',
    onClick: '&',
    matchingStates: '<'
  },
  template,
  controller,
  transclude: true
};

export default menuItemComponent;
