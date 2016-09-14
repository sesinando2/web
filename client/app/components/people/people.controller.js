class PeopleController {

  /* @ngInject */
  constructor(memberService, userInfo) {
    this.memberService = memberService;
    this.userInfo = userInfo;
  }

  list(max, currentPage, query) {
    return this.memberService.list(max, currentPage, query, this.userInfo.account.id)
  }
}

export default PeopleController;
