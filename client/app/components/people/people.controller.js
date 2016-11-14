import BaseComponentController from '../common/base-component.controller';

class PeopleController extends BaseComponentController {

  /* @ngInject */
  constructor($state, $stateParams, $timeout, memberService) {
    super($state, $stateParams, $timeout);
    this.memberService = memberService;
    this._delete = this._delete.bind(this);
    this._toggleAvailability = this._toggleAvailability.bind(this);
  }

  _refreshList() {
    this.memberService.list(this.$stateParams.max, this.$stateParams.current, this.$stateParams.query, this.accountId)
      .then((data) => this._handleResponse(data));
  }

  _bindHandlers(data) {
    data.items.forEach((member) => {
      member.deleteHandler = this._delete;
      member.toggleAvailabilityHandler = this._toggleAvailability;
    });
  }

  _delete(member) {
    if (!member.noDelete) {
      this.memberService.delete(member).then(() => this._reloadState());
    }
  }

  _toggleAvailability(member) {
    this.memberService.toggleAvailability(member).then(() => this._reloadState());
  }
}

export default PeopleController;
