import template from './form.html';
import controller from './form.controller';
import './form.styl';

let formComponent = {
  restrict: 'E',
  bindings: {
    selected: '<'
  },
  template,
  controller
};

export default formComponent;
