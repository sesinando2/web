import controller from './resend-email-dialog.controller';
import template from './resend-email-dialog.html';

let resendEmailDialogController = {
  bindings: {
    resolve: '<',
    close:   '&',
    dismiss: '&'
  },
  controller,
  template
};

export default resendEmailDialogController;
