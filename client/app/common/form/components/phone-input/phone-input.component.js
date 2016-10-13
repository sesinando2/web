import template from './phone-input.html';
import controller from './phone-input.controller';

let phoneInputComponent = {
  bindings: {
    form:         '<',
    country:      '<',
    memberId:     '<',
    required:     '<',
    hasChanged:   '<',
    name:         '@',
    label:        '@',
    placeholder:  '@',
    model:        '='
  },
  template,
  controller
};

export default phoneInputComponent;
