class ListController {

  /* @ngInject */
  constructor($timeout) {
    this.$timeout = $timeout;

    this.data = [];
    this.max = 10;
    this.count = 0;
    this.pageCount = 0;
    this.enabled = true;
    this.currentPage = 1;
  }

  $onInit() {
    this._updateList();
  }

  selectMember() {
    console.log('selectMember');
  }

  onSearchChanged(search) {
    this.search = search;
    this._updateList();
  }

  onPageChange() {
    this._updateList();
  }

  _updateList() {
    this.enabled = false;
    this.list({ max: this.max, currentPage: this.currentPage, query: this.search })
      .then((response) => this._handleResponse(response));
  }

  _handleResponse(response) {
    let header = response.header;
    this.$timeout(() => {
      this.data = response.data;
      this.count = parseInt(header('count'));
      this.pageCount = Math.ceil(this.count / this.max);
      this.enabled = true;
    });
  }
}

export default ListController;
