import controller from './add-list-item-modal.controller';
import template from './add-list-item-modal.html';

let addListItemModal = {
  bindings: {
    resolve: '<',
    close:   '&',
    dismiss: '&'
  },
  controller,
  template
};

export default addListItemModal;
