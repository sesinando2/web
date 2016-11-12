import controller from './item.controller';
import template from './item.html';

let itemComponent = {
  bindings: {
    item:       '<',
    enabled:    '<'
  },
  controller,
  template
};

export default itemComponent;
