class FormController {

  /* @ngInject */
  constructor($state, $timeout, teamService) {
    this.formData = null;

    this.$state = $state;
    this.$timeout = $timeout;
    this.teamService = teamService;
  }

  $onInit() {
    this.formData = this.selected.data.clone();
  }
}

export default FormController;
