import BaseComponentController from '../common/base-component.controller';

class GroupsController extends BaseComponentController {

  /* @ngInject */
  constructor($state, $stateParams, $timeout, teamService) {
    super($state, $stateParams, $timeout);
    this.teamService = teamService;
    this._delete = this._delete.bind(this);
  }

  _bindHandlers(data) {
    data.items.forEach((team) => {
      team.deleteHandler = this._delete;
    });
  }

  _refreshList() {
    this.teamService.list(this.$stateParams.max, this.$stateParams.current, this.$stateParams.query, this.accountId)
      .then((data) => this._handleResponse(data));
  }

  _delete(team) {
    this.teamService.delete(team).then(() => this._reloadState());
  }
}

export default GroupsController;
