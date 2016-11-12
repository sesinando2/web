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
        console.log('Test');
        break;
    }

  }
}

export default ListController;
