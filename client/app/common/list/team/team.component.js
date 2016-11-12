import controller from './team.controller';
import template from './team.html';

let teamComponent = {
  bindings: {
    item:    '<',
    enabled: '<'
  },
  controller,
  template
};

export default teamComponent;
