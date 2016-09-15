class MemberController {

  selectMember() {
    this._doIfEnabled(() => this.item.select());
  }

  toggleAvailability() {
    this._doIfEnabled(() => this.item.toggleAvailability());
  }

  deleteMember() {
    this._doIfEnabled(() => this.item.delete());
  }

  _doIfEnabled(action) {
    if (this.enabled) {
      action();
    }
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
