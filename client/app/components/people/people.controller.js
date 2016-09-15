class PeopleController {

  /* @ngInject */
  constructor($timeout, memberService, userInfo) {
    this.$timeout = $timeout;
    this.memberService = memberService;
    this.userInfo = userInfo;

    this.loading = true;
    this.listComponent = null;
  }

  registerList(component) {
    this.listComponent = component;
  }

  list(max, currentPage, query) {
    return this.memberService.list(max, currentPage, query, this.userInfo.account.id)
      .then((response) => this._handleListResponse(response));
  }

  _handleListResponse(response) {
    if (response.data && response.data instanceof Array) {
      response.data.forEach((member) => this._bindHandlers(member));
    }
    return response;
  }

  _bindHandlers(member) {
    member.selectHandler = this._select.bind(this);
    member.deleteHandler = this._delete.bind(this);
    member.toggleAvailabilityHandler = this._toggleAvailability.bind(this);
  }

  _select(member) {
    this.listEnabled = false;
    this.memberService.get({ id: member.id }).then((response) => {
      this.$timeout(() => {
        console.log(response);
        this.listEnabled = true;
      });
    });
  }

  _delete(member) {
    console.log('people.delete');
    console.log(member);
  }

  _toggleAvailability(member) {
    console.log('people.toggleAvailability');
    console.log(member);
  }
}

export default PeopleController;
