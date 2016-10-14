import template from './alternative-phone-input.html';
import controller from './alternative-phone-input.controller';

let alternativePhoneInputComponent = {
  bindings: {
    form:         '<',
    country:      '<',
    primary:      '<',
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
export default alternativePhoneInputComponent;
