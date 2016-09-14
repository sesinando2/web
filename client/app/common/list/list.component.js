import template from './list.html';
import controller from './list.controller';
import './list.styl';

let listComponent = {
  restrict: 'E',
  bindings: {
    list: '&'
  },
  template,
  controller
};

export default listComponent;
