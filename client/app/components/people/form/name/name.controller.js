import './mobile-app-config/mobile-app-config.modal.html';

class NameController {

  constructor(agentRoles) {
    this.agentRoles = agentRoles;
  }

  $onInit() {
    this.formData.agentRole = `${this.formData.agentRole}`;
  }

  toggleMobileAppUser() {
    this.formData.mobileAppUser = !this.formData.mobileAppUser;
    this.mobileConfigIsOpen = false;
  }

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

  getMobileAppButtonCss() {
    let css = [];
    if (this.formData.mobileAppUser) {
      css.push('btn-danger');
    } else {
      css.push('btn-success')
    }
    return css;
  }

  getMobileAppButtonText() {
    return this.formData.mobileAppUser ? 'Deactivate' : 'Activate';
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
