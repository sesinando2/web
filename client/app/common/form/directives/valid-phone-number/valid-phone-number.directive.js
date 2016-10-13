class ValidPhoneDirective {

  constructor(validationService) {
    this.restrict = 'A';
    this.require = 'ngModel';

    this.validationService = validationService;
    this.link = this.link.bind(this);
  }

  link(scope, element, attributes, controller) {
    this.createPhoneNumberValidator(controller, scope, attributes);

    scope.$watch(attributes.unique, (unique) => {
      if (unique) {
        this.createUniquePhoneNumberValidator(controller, scope, attributes);
      } else {
        this.removeUniquePhoneNumberValidator(controller);
      }
    });
  }

  createPhoneNumberValidator(controller, scope, attributes) {
    controller.$validators.phoneNumber = (modelValue, viewValue) => {
      if (controller.$isEmpty(modelValue)) {
        return true;
      }

      let country = scope.$eval(attributes.validPhoneNumber);
      return this.validationService.validatePhoneNumber(viewValue, country);
    };
  }

  createUniquePhoneNumberValidator(controller, scope, attributes) {
    if (!controller.$asyncValidators.uniquePhoneNumber) {
      controller.$asyncValidators.uniquePhoneNumber = (modelValue) => {
        if (controller.$isEmpty(modelValue)) {
          return Promise.resolve();
        }

        let memberId = scope.$eval(attributes.memberId);
        let country = scope.$eval(attributes.validPhoneNumber);

        if (country) {
          return this.validateUniquePhoneNumber(modelValue, country, memberId);
        }

        return Promise.reject();
      };
    }
  }

  validateUniquePhoneNumber(modelValue, country, memberId) {
    return new Promise((resolve, reject) => {
      this.validationService.validateUniquePhoneNumber(modelValue, country, memberId)
        .then((response) => {
          if (response && response.data && response.data.success === true) {
            resolve();
          } else {
            reject();
          }
        });
    });
  }

  removeUniquePhoneNumberValidator(controller) {
    if (controller.$asyncValidators.uniquePhoneNumber) {
      delete controller.$asyncValidators.uniquePhoneNumber;
    }
  }
}

export default ValidPhoneDirective;
