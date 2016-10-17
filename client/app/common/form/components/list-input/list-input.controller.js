import controller from './add-list-item-modal/add-list-item-modal.controller';
import template from './add-list-item-modal/add-list-item-modal.html';

class ListInputController {

  /* @ngInject */
  constructor($uibModal) {
    this.$uibModal = $uibModal;
  }

  addItem() {
    this.$uibModal.open({
      controller,
      template,
      controllerAs: '$ctrl',
      resolve: {
        title: () => this.addModalTitle
      }
    });
  }

  hasSelected() {
    return this.selected && this.selected.length > 0;
  }
}

export default ListInputController;
