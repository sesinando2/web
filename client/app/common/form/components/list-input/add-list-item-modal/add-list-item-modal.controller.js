class AddListItemModalController {

  /* @ngInject */
  constructor($uibModalInstance, title) {
    this.$uibModalInstance = $uibModalInstance;
    this.title = title;
  }

  cancel() {
    this.$uibModalInstance.dismiss();
  }
}

export default AddListItemModalController;
