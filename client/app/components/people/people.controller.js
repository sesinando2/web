class PeopleController {

  /* @ngInject */
  constructor($timeout, memberService) {
    this.memberService = memberService;
    this.listComponent = null;

  }

  registerList(component) {
    this.listComponent = component;
  }

  list(max, currentPage, query) {
    return this.memberService.list(max, currentPage, query, this.accountId);
  }
}

export default PeopleController;
