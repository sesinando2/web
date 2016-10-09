class FormController {
  constructor($timeout) {
    this.$timeout = $timeout;
    this.formData = null;
  }

  $onInit() {
    this.formData = this.selected.data.clone();
  }

  hasPersonNameChanged() {
    return this.selected.data.name != this.formData.name;
  }

  hasPersonEmailChanged() {
    return this.selected.data.email != this.formData.email;
  }

  hasCountryChanged() {
    return this.selected.data.country != this.formData.country;
  }
}

export default FormController;
