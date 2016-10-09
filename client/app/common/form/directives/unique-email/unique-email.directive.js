class UniqueEmailDirective {

  constructor(formValidationService) {
    this.restrict = 'A';
    this.require = 'ngModel';

    this.formValidationService = formValidationService;
    this.link = this.link.bind(this);
  }

  link(scope, element, attributes, controller) {
    let userId = scope.$eval(attributes.userId);
    let memberId = scope.$eval(attributes.memberId);

    controller.$asyncValidators.uniqueEmail =
      this.createUniqueEmailAsyncValidator(controller, userId, memberId);
  }

  createUniqueEmailAsyncValidator(controller, userId, memberId) {
    return (modelValue) => {
      if (controller.$isEmpty(modelValue)) {
        return Promise.resolve();
      }
      return this.validateUniqueEmail(modelValue, userId, memberId);
    };
  }

  validateUniqueEmail(modelValue, userId, memberId) {
    return new Promise((resolve, reject) => {
      let successHandler = this.createValidationSuccessHandler(resolve, reject);
      this.formValidationService.validateEmail(modelValue, { userId, memberId })
        .then((response) => successHandler(response), () => reject());
    });
  }

  createValidationSuccessHandler(resolve, reject) {
    return (response) => {
      if (response && response.data && response.data.success) {
        resolve();
      } else {
        reject();
      }
    };
  }
}

export default UniqueEmailDirective;
