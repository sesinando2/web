class BaseInputController {
  constructor() {
    if (!this.isValid) {
      throw 'isValid should be defined';
    }
  }

  getCssClass() {
    let css = [];
    if (this.hasChanged) {
      if (!this.isValid()) {
        css.push('has-error');
      } else {
        css.push('has-success');
      }
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

  hasError(error) {
    return this.controller && this.controller.$error && this.controller.$error[error];
  }
}

export default BaseInputController;
