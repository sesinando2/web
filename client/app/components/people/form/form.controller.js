const REFRESH = 5000;

class FormController {

  /* @ngInject */
  constructor($state, $timeout, memberService) {
    this.formData = null;
    this.added = [];
    this.removed = [];
    this.isSaving = false;
    this.isDeleting = false;
    this.timer = null;
    this.continueResfresh = true;

    this.$state = $state;
    this.$timeout = $timeout;
    this.memberService = memberService;
  }

  $onInit() {
    this.formData = this.selected.data.clone();
    this.deleteable = this.selected.header('no-delete') !== 'true';
    this._setupRefreshMobileKey()
  }

  $onDestroy() {
    this.$timeout.cancel(this.timer);
    this.continueResfresh = true;
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

  hasFormChanged() {
    return ['name', 'email', 'country', 'primaryNumber', 'alternativeNumber', 'available', 'admin',
        'map', 'message', 'service', 'mobileAppUser']
      .reduce((previous, field) => {
        return this.hasChanged(field) || previous;
      }, false) || this.hasRoleChanged();
  }

  isFormLoading() {
    return this.isSaving || this.isDeleting;
  }

  update() {
    if (this.isUpdateadble()) {
      this.isSaving = true;
      this.memberService.save(this.formData, this.added, this.removed)
        .then(() => {
          this.$state.reload();
        });
    }
  }

  delete() {
    if (this.isDeleteable()) {
      this.isDeleting = true;
      this.memberService.delete(this.selected.data).then(() => {
        this.$state.go('^', null, {reload: true});
      }, () => {
        this.isDeleting = false;
      });
    }
  }

  isDeleteable() {
    return this.deleteable && !this.isFormLoading();
  }

  isUpdateadble() {
    return this.hasFormChanged() && !this.isFormLoading() && this.form.$valid;
  }

  _setupRefreshMobileKey() {
    this._refreshMobileKey();
  }

  _refreshMobileKey() {
    if (this.continueResfresh) {
      let refreshMobileKey = () => {
        this.timer = this.$timeout(() => this._refreshMobileKey(), REFRESH);
      };
      this._updateMobileKey().then(refreshMobileKey, refreshMobileKey);
    }
  }

  _updateMobileKey() {
    return this.memberService.getMobileKey(this.selected.data.id)
      .then((mobileKey) => {
        this.selected.data.mobileKey = this.formData.mobileKey = mobileKey;
      });
  }
}

export default FormController;
