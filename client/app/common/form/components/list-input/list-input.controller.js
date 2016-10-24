import controller from './add-list-item-modal/add-list-item-modal.controller';
import template from './add-list-item-modal/add-list-item-modal.html';

class ListInputController {

  /* @ngInject */
  constructor($uibModal) {
    this.$uibModal = $uibModal;
  }

  addItem() {
    this.$uibModal.open({
      component: 'addListItemModal',
      controllerAs: '$ctrl',
      resolve: {
        title:    () => this.addModalTitle,
        notIn:    () => this.notIn,
        added:    () => this.added,
        deleted:  () => this.deleted
      }
    });
  }

  hasSelected() {
    return this.selected && this.selected.length > 0;
  }
}

export default ListInputController;
