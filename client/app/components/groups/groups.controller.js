class GroupsController {

  /* @ngInject */
  constructor($state, $stateParams) {
    this.name = 'groups';
    this.$state = $state;
    this.$stateParams = $stateParams;
  }
}

export default GroupsController;
