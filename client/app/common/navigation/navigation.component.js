import template from './navigation.html';
import controller from './navigation.controller';
import './navigation.styl';

let navigationComponent = {
  restrict: 'E',
  bindings: {
    definition: '<'
  },
  template,
  controller
};

export default navigationComponent;
