class EmailController {
  constructor() {
    this.name = 'email';
  }

  getCssClass() {
    let css = [];
    if (this.hasChanged) {
      if (!this._isEmailValid()) {
        css.push('has-error');
      }  else {
        css.push('has-success');
      }
    }
    return css;
  }

  getHelpText() {
    let helpText;
    if (!this._isEmailValid()) {
      if (this.emailController.$error.required) {
        helpText = 'Please enter the member\'s email address.';
      } else if (this.emailController.$error.email) {
        helpText = 'Please enter a valid email address.';
      } else if (this.emailController.$error.uniqueEmail) {
        helpText = 'This email has been used by another user.';
      }
    }
    return helpText;
  }

  _isEmailValid() {
    return this.emailController.$valid;
  }

  get emailController() {
    return this.form[this.name];
  }
}

export default EmailController;
