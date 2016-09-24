class PeopleController {

  /* @ngInject */
  constructor($timeout, memberService) {
    this.$timeout = $timeout;
    this.memberService = memberService;

    this.enabled = true;
    this.query = null;

    this.max = 10;
    this.data = [];
    this.count = 0;
    this.current = 1;
    this.pageCount = 1;
  }

  $onInit() {
    this._list(this.max, this.current, this.query);
  }

  pageChange(current) {
    this._list(this.max, current, this.query);
  }

  searchChange(query) {
    this._list(this.max, this.current, query);
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
      this.data = data;
      this.count = parseInt(header('count'));
      this.pageCount = Math.ceil(this.count / this.max);
      this.enabled = true;
    });
  }

  /*delete(member) {
    if (!member.noDelete) {
      this.enabled = false;
      this.memberService.delete(member).then(() => {
        this.$state.transitionTo('people');
      });
    }
  }

  toggleAvailability(member) {
    this.enabled = false;
    this.memberService.toggleAvailability(member).then(() => {
      this.$state.transitionTo('people.details', { id: member.id });
    });
  }*/
}

export default PeopleController;
