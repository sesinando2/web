import template from './email.html';
import controller from './email.controller';
import './email.styl';

let emailComponent = {
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

export default emailComponent;
