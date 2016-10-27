import controller from '../generic-modal.controller';
import template from './confirm-dialog.html';

let confirmDialogComponent = {
  bindings: {
    resolve: '<',
    close:   '&',
    dismiss: '&'
  },
  controller,
  template
};

export default confirmDialogComponent;
