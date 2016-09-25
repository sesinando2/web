class PeopleController {

  /* @ngInject */
  constructor($state, $stateParams, $timeout, memberService) {
    this.$state = $state;
    this.$stateParams = $stateParams;
    this.$timeout = $timeout;
    this.memberService = memberService;

    this._delete = this._delete.bind(this);
    this._toggleAvailability = this._toggleAvailability.bind(this);
  }

  $onInit() {
    this._bindHandlers(this.data);
  }

  pageChange() {
    this._refreshList();
  }

  searchChange() {
    this._refreshList();
  }

  _refreshList() {
    this.$timeout(() =>
      this._list(this.$stateParams.max, this.$stateParams.current, this.$stateParams.query));
  }

  _list(max, current, query) {
    this.memberService.list(max, current, query, this.accountId)
      .then((data) => this._handleResponse(data));
  }

  _handleResponse(data) {
    this.$timeout(() => {
      this._bindHandlers(data);
      this.data = data;
    });
  }

  _bindHandlers(data) {
    data.items.forEach((member) => {
      member.deleteHandler = this._delete;
      member.toggleAvailabilityHandler = this._toggleAvailability;
    });
  }

  _delete(member) {
    if (!member.noDelete) {
      this.$state.current.data.enabled  = false;
      this.memberService.delete(member).then(() => {
        this._refreshList();
        this.$state.current.data.enabled  = true;
      });
    }
  }

  _toggleAvailability(member) {
    this.$state.current.data.enabled  = false;
    this.memberService.toggleAvailability(member).then(() =>  {
      this._refreshList();
      this.$state.current.data.enabled  = true;
    });
  }
}

export default PeopleController;
