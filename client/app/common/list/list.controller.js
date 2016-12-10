class ListController {

  /* @ngInject */
  constructor($state) {
    this.$state = $state;
  }

  select(data) {
    switch (data.constructor.name) {
      case 'Member':
        this.$state.go('people.details', { id: data.id, current: this.current, query: this.search });
        break;
      case 'Team':
        this.$state.go('groups.details', { id: data.id, current: this.current, query: this.search });
        break;
      default:
        throw `Unknown constructor for + ${data}`
        break;
    }

  }
}

export default ListController;
