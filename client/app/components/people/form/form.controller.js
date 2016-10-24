class FormController {
  constructor($timeout) {
    this.$timeout = $timeout;
    this.formData = null;
    this.added = [];
    this.deleted = [];
  }

  $onInit() {
    this.formData = this.selected.data.clone();
  }

  hasChanged(field) {
    let original = this.selected.data[field];
    let formValue = this.formData[field];
    let hasValueChanged = true;
    if (!original && !formValue) {
      hasValueChanged = false;
    } else if (original && formValue) {
      hasValueChanged = (original != formValue);
    }
    return hasValueChanged;
  }
}

export default FormController;
