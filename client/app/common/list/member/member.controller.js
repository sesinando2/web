class MemberController {

  toggleAvailability() {
    console.log('toggleAvailability');
  }

  deleteMember() {
    console.log('deleteMember');
  }

  get icon() {
    return this.item.mobileAppUser ? 'phone' : 'user';
  }

  get iconCss() {
    return { admin: this.item.admin };
  }

  get availabilityCss() {
    return { 'has-default': !this.item.available, 'has-success': this.item.available };
  }

  get deleteCss() {
    return { 'has-error': !this.item.noDelete, 'disabled': this.item.noDelete };
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
