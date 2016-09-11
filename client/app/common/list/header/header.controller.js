class HeaderController {

  _isRemoveIcon() {
    return this.search && this.searchVisible;
  }

  get searchButtonIcon() {
    return this._isRemoveIcon() ? 'glyphicon-remove' : 'glyphicon-search';
  }
}

export default HeaderController;
