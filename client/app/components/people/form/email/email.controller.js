import BaseInputController from '../../../../common/form/base-input.controller';

class EmailController extends BaseInputController {

  getHelpText() {
    let helpText;
    if (!this.isValid()) {
      if (this.hasError('required')) {
        helpText = 'Please enter the member\'s email address.';
      } else if (this.hasError('email')) {
        helpText = 'Please enter a valid email address.';
      } else if (this.hasError('uniqueEmail')) {
        helpText = 'This email has been used by another user.';
      }
    }
    return helpText;
  }
}

export default EmailController;
