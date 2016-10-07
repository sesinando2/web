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
}

export default FormController;
