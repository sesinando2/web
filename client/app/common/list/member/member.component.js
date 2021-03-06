import template from './member.html';
import controller from './member.controller';
import './member.styl';

let memberComponent = {
  restrict: 'E',
  bindings: {
    item:     '<',
    enabled:  '<'
  },
  template,
  controller
};

export default memberComponent;
