import controller from '../generic-modal.controller';
import template from './alert-dialog.html';

let alertDialogComponent = {
  bindings: {
    resolve: '<',
    close:   '&',
    dismiss: '&'
  },
  controller,
  template
};

export default alertDialogComponent;
