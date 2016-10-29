const CLOSE_IN = 2000;

class ResendEmailDialogController {

  /* @ngInject */
  constructor($timeout, memberService) {
    this.sending = false;
    this.emailSent = false;
    this.emailFailed = false;
    this.$timeout = $timeout;
    this.memberService = memberService;
  }

  isIdle() {
    return !this.sending && !this.emailSent;
  }

  isRegisteredOwner() {
    return this.resolve.user.owner && this.resolve.user.account.status.name !== 'TRIAL';
  }

  isTrialOwner() {
    return this.resolve.user.owner && this.resolve.user.account.status.name === 'TRIAL';
  }

  isTrialExpired() {
    return this.resolve.user.account.status.name === 'TRIAL_EXPIRED';
  }

  isNotOwner() {
    return !this.resolve.user.owner;
  }

  isNotOwnerNorAdmin() {
    return !this.resolve.user.owner && this.resolve.user.admin;
  }

  cancel() {
    this.dismiss();
  }

  select(email) {
    if (!this.sending) {
      this.emailFailed = this.emailSent = false;
      this.sending = true;
      this.memberService.resend(this.resolve.user.id, email)
        .then(() => this._onSuccess(), () => this._onFailed());
    }
  }

  _onSuccess() {
    this.$timeout(() => {
      this.sending = false;
      this.emailSent = true;
      this.$timeout(() => { this.close() }, CLOSE_IN);
    });
  }

  _onFailed() {
    this.$timeout(() => {
      this.sending = false;
      this.emailFailed = true;
      this.$timeout(() => { this.dismiss() }, CLOSE_IN);
    });
  }
}

export default ResendEmailDialogController;
