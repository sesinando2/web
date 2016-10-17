class BaseInputController {
  constructor() {
    if (!this.isValid) {
      throw 'isValid should be defined';
    }
  }

  getCssClass() {
    let css = [];
    if (this.isInvalid()) {
      css.push('has-error');
    } else if(this.isValid() && this.hasChanged) {
      css.push('has-success');
    } else if (this.isPending()) {
      css.push('has-warning');
    }
    return css;
  }

  get controller() {
    if (this.form) {
      return this.form[this.name];
    }
  }

  validate() {
    if (this.controller) {
      this.controller.$validate();
    }
  }

  isValid() {
    return this.controller && this.controller.$valid;
  }

  isInvalid() {
    return this.controller && this.controller.$invalid;
  }

  isPending() {
    return this.controller && this.controller.$pending;
  }

  hasError(error) {
    return this.controller && this.controller.$error && this.controller.$error[error];
  }
}

export default BaseInputController;
