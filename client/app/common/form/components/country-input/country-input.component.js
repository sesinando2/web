import template from '././country-input.html';
import controller from './country-input.controller';

let countryInputComopnent = {
  bindings: {
    form:         '<',
    hasChanged:   '<',
    name:         '@',
    label:        '@',
    model:        '=',
  },
  template,
  controller
};

export default countryInputComopnent;
