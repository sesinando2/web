class ListInputController {

  /* @ngInject */
  constructor($uibModal) {
    this.$uibModal = $uibModal;
  }

  addItem() {
    this.$uibModal.open({
      component: 'addListItemModal',
      resolve: {
        title:    () => this.addModalTitle,
        notIn:    () => this.notIn,
        added:    () => this.added,
        removed:  () => this.removed
      }
    }).result.then((selected) => this._handleModalResult(selected));
  }

  hasSelected() {
    return this.selected && this.selected.length > 0;
  }

  remove(item) {
    if (this._isItemIn(this.added, item)) {
      this._removeFromArray(this.added, item)
    } else {
      this._pushToArray(this.removed, item)
    }
    this._removeFromArray(this.selected, item);
  }

  _isItemIn(array, item) {
    return array.find(this._createIdFilter(item));
  }

  _removeFromArray(array, item) {
    if (this._isItemIn(array, item)) {
      let index = array.findIndex(this._createIdFilter(item));
      if (index >= 0) {
        array.splice(index, 1);
      }
    }
  }

  _pushToArray(array, item) {
    if (!this._isItemIn(array, item)) {
      array.push(item);
    }
  }

  _takeFromArray(array, item) {
    let foundItem = array.find(this._createIdFilter(item));
    if (foundItem) {
      this._removeFromArray(array, foundItem);
    }
    return foundItem;
  }

  _handleModalResult(selected) {
    selected.forEach((item) => {
      if (this._isItemIn(this.removed, item)) {
        item = this._takeFromArray(this.removed, item);
      } else {
        this._pushToArray(this.added, item);
      }
      this._pushToArray(this.selected, item);
    });
  }

  _createIdFilter(item) {
    return (e) => e.id == item.id;
  }
}

export default ListInputController;
