class ItemController {

  getType() {
    return this.item.constructor.name;
  }
}

export default ItemController;
