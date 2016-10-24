import controller from './list-input.controller';
import template from './list-input.html';
import './list-input.styl';

let listInputComponent = {
  bindings: {
    label:              '@',
    tooltipText:        '@',
    addModalTitle:      '@',
    emptySelectionText: '@',
    notIn:              '<',
    selected:           '=',
    added:              '=',
    removed:            '=',
    getNextAvailable:   '&'
  },
  controller,
  template
};

export default listInputComponent;
