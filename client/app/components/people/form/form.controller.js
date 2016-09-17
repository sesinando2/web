class FormController {
  constructor($stateParams) {
    this.name = 'form';
    this.$stateParams = $stateParams;
  }

  $onInit() {
    console.log('PeopleFormController.$init()');
    console.log(this.$stateParams);
  }

  _select(member) {
    this.listEnabled = false;
    this.memberService.get({ id: member.id }).then((response) => {
      this.$timeout(() => {
        console.log(response);
        this.listEnabled = true;
      });
    });
  }

  _delete(member) {
    console.log('people.delete');
    console.log(member);
  }

  _toggleAvailability(member) {
    console.log('people.toggleAvailability');
    console.log(member);
  }
}

export default FormController;
