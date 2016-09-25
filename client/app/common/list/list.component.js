import template from './list.html';
import controller from './list.controller';
import './list.styl';

let listComponent = {
  restrict: 'E',
  bindings: {
    enabled:        '<',
    items:          '<',
    pageCount:      '<',
    selected:       '<',
    max:            '=',
    current:        '=',
    count:          '=',
    search:         '=',
    pageChange:     '&',
    searchChange:   '&'
  },
  template,
  controller
};

export default listComponent;
