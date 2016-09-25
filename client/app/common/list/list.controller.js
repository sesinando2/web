class ListController {

  /* @ngInject */
  constructor($state) {
    this.$state = $state;
  }

  select(data) {
    this.$state.go('people.details', { id: data.id, current: this.current, query: this.search });
  }
}

export default ListController;
