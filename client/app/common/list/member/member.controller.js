class MemberController {

  constructor($state, memberService) {
    this.$state = $state;
    this.memberService = memberService;
  }

  get icon() {
    return this.item.mobileAppUser ? 'phone' : 'user';
  }

  get iconCss() {
    return { admin: this.item.admin };
  }

  get iconTooltip() {
    let text = [];

    if (this.item.mobileAppUser) {
      text.push('Mobile App User');
    } else {
      text.push('Non-Mobile App User')
    }

    if (this.item.admin) {
      text.push('Account Administrator');
    }

    return text.join(' & ');
  }

  get availabilityTooltip() {
    return this.item.available ? 'This member is available. Click to make it unavailable.' : 'This member is unavailable. Click to make it available.'
  }
}

export default MemberController;
