import template from './people.html';
import controller from './people.controller';
import './people.styl';

let peopleComponent = {
  restrict: 'E',
  bindings: {
    accountId: '<'
  },
  template,
  controller
};

export default peopleComponent;
