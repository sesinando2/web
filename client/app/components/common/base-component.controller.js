class BaseComponentController {

  /* @ngInject */
  constructor($state, $stateParams, $timeout) {
    this.$state = $state;
    this.$stateParams = $stateParams;
    this.$timeout = $timeout;
  }

  $onInit() {
    if (this._bindHandlers) {
      this._bindHandlers(this.data);
    }
  }

  pageChange() {
    this._reloadState();
  }

  searchChange() {
    if (this._refreshList) {
      this.$timeout(() => this._refreshList());
    }
  }

  _handleResponse(data) {
    this.$timeout(() => {
      this.data = data;
      this._bindHandlers(data);
    });
  }

  _reloadState() {
    this.$timeout(() => this.$state.reload());
  }
}

export default BaseComponentController;
