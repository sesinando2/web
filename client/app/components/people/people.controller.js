class PeopleController {

  /* @ngInject */
  constructor(memberService, userInfo) {
    this.name = 'people';
    this.memberService = memberService;
    this.userInfo = userInfo;
  }

  $onInit() {

  }

  list() {
    return this.memberService.list(10, 1, null, this.userInfo.account.id)
  }
}

export default PeopleController;
