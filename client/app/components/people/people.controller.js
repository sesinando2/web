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
    this._reloadState();
  }

  searchChange() {
    this.$timeout(() => this._refreshList());
  }

  _refreshList() {
    this.memberService.list(this.$stateParams.max, this.$stateParams.current, this.$stateParams.query, this.accountId)
      .then((data) => this._handleResponse(data));
  }

  _handleResponse(data) {
    this.$timeout(() => {
      this.data = data;
      this._bindHandlers(data);
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
      this.memberService.delete(member).then(() => this._reloadState());
    }
  }

  _toggleAvailability(member) {
    this.memberService.toggleAvailability(member).then(() => this._reloadState());
  }

  _reloadState() {
    this.$timeout(() => this.$state.reload());
  }
}

export default PeopleController;
