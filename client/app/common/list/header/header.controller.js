class HeaderController {

  onChange() {
    this.searchChanged({ search: this.search });
  }

  get searchButtonIcon() {
    return this._isRemoveIcon() ? 'glyphicon-remove' : 'glyphicon-search';
  }

  _isRemoveIcon() {
    return this.search && this.searchVisible;
  }
}

export default HeaderController;
