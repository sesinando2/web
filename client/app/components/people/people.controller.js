class PeopleController {

  /* @ngInject */
  constructor($state, $timeout, memberService) {
    this.$state = $state;
    this.$timeout = $timeout;
    this.memberService = memberService;

    this.query = null;

    this.max = 10;
    this.data = [];
    this.count = 0;
    this.current = 1;
    this.pageCount = 1;

    this._delete = this._delete.bind(this);
    this._toggleAvailability = this._toggleAvailability.bind(this);
  }

  $onInit() {
    this._refreshList();
  }

  pageChange(current) {
    this._list(this.max, current, this.query);
  }

  searchChange(query) {
    this._list(this.max, this.current, query);
  }

  _refreshList() {
    this._list(this.max, this.current, this.query);
  }

  _list(max, current, query) {
    this.enabled = false;
    return this.memberService.list(max, current, query, this.accountId).then((response) => {
      let header = response.header;
      let data = response.data;
      this._handleResponse(data, header);
    });
  }

  _handleResponse(data, header) {
    this.$timeout(() => {
      this.data = this._bindHandlers(data);
      this.count = parseInt(header('count'));
      this.pageCount = Math.ceil(this.count / this.max);
      this.enabled = true;
    });
  }

  _bindHandlers(data) {
    return data.map((member) => {
      member.deleteHandler = this._delete;
      member.toggleAvailabilityHandler = this._toggleAvailability;
      return member;
    });
  }

  _delete(member) {
    if (!member.noDelete) {
      this.enabled = false;
      this.memberService.delete(member).then(() => {
        this.$state.transitionTo('people');
        this._refreshList();
      });
    }
  }

  _toggleAvailability(member) {
    this.enabled = false;
    this.memberService.toggleAvailability(member).then(() => {
      this.$state.transitionTo('people.details', { id: member.id });
      this._refreshList();
    });
  }
}

export default PeopleController;
