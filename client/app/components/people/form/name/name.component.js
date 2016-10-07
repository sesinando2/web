import template from './name.html';
import controller from './name.controller';
import './name.styl';

let nameComponent = {
  restrict: 'E',
  bindings: {
    form:         '<',
    formData:     '<',
    hasChanged:   '<',
    name:         '@',
    label:        '@',
    placeholder:  '@'
  },
  template,
  controller
};

export default nameComponent;
