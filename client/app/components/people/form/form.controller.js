class FormController {
  constructor($timeout) {
    this.$timeout = $timeout;
    this.formData = null;
    this.added = [];
    this.removed = [];
    this.isSaving = false;
    this.isDeleting = false;
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

  hasRoleChanged() {
    return this.added.length > 0 || this.removed.length > 0;
  }

  isFormLoading() {
    return this.isSaving || this.isDeleting;
  }

  update() {
    this.isSaving = true;
    this.$timeout(() => {
      this.isSaving = false;
    }, 5000);
  }

  delete() {
    this.isDeleting = true;
    this.$timeout(() => {
      this.isDeleting = false;
    }, 5000);
  }
}

export default FormController;
