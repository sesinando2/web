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
        removed:  () => this.removed
      }
    }).result.then((selected) => {
      console.log(selected);
    }, () => {
      console.log('blah');
    });
  }

  hasSelected() {
    return this.selected && this.selected.length > 0;
  }

  remove(item) {
    if (this.selected.includes(item)) {
      this.selected.splice(this.selected.indexOf(item), 1);
    }

    if (!this.removed.includes(item)) {
      this.removed.push(item);
    }
  }
}

export default ListInputController;
