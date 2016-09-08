import template from './page.html';
import controller from './page.controller';
import './page.styl';

let pageComponent = {
  restrict: 'E',
  bindings: {
    title: '@'
  },
  template,
  controller,
  transclude: true
};

export default pageComponent;
