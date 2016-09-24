import template from './list.html';
import controller from './list.controller';
import './list.styl';

let listComponent = {
  restrict: 'E',
  bindings: {
    enabled:        '<',
    items:          '<',
    pageCount:      '<',
    max:            '=',
    current:        '=',
    count:          '=',
    pageChange:     '&',
    searchChange:   '&'
  },
  template,
  controller
};

export default listComponent;
