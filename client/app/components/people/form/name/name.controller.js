class NameController {

  getCssClass() {
    let css = [];
    if (this.hasChanged) {
      if (!this._isNameValid()) {
        css.push('has-error');
      } else {
        css.push('has-success');
      }
    }
    return css;
  }

  getHelpText() {
    let helpText;
    if (!this._isNameValid()) {
      if (this.nameController.$error.required) {
        helpText = 'Please enter the member\'s name';
      }
    }
    return helpText;
  }

  _isNameValid() {
    return this.nameController.$valid;
  }

  get nameController() {
    return this.form[this.name];
  }
}

export default NameController;
