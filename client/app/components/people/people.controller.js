class PeopleController {

  /* @ngInject */
  constructor(memberService, userInfo) {
    this.memberService = memberService;
    this.userInfo = userInfo;
    this.listComponent = null;
  }

  registerList(component) {
    this.listComponent = component;
  }

  list(max, currentPage, query) {
    return this.memberService.list(max, currentPage, query, this.userInfo.account.id)
      .then((response) => { return this._handleListResponse(response) });
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
    this.memberService.get({ id: member.id }).then((response) => {
      console.log(response);
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
