class ValidPhoneDirective {

  constructor($q, validationService) {
    this.restrict = 'A';
    this.require = 'ngModel';

    this.$q = $q;
    this.validationService = validationService;
    this.link = this.link.bind(this);
  }

  link(scope, element, attributes, controller) {
    this.setupValidators(controller, scope, attributes);
    this.setupWatchForUnique(scope, attributes, controller);
    this.allowOnlyPhoneNumberCharacters(element);
  }

  allowOnlyPhoneNumberCharacters(element) {
    this.isCommand = false;
    let onKeydown = this.createOnKeydown();
    let onKeyup = this.createOnKeyup();
    element.on('keydown', onKeydown);
    element.on('keyup', onKeyup);
    element.on('$destroy', () => {
      element.unbind('keydown', onKeydown);
      element.unbind('keyup', onKeyup);
    });
  }

  createOnKeydown() {
    return (event) => {
      if (this.isCommandKey(event)) {
        this.isCommand = true;
      }
      if (!this.isNumeric(event.which)
        && !this.isPlus(event.which)
        && !this.isArrowKey(event.which)
        && !this.isDelete(event.which)
        && !this.isCopy(event)) {

        event.preventDefault();
      }
    };
  }

  createOnKeyup() {
    return (event) => {
      if (this.isCommandKey(event)) {
        this.isCommand = false;
      }
    };
  }

  isCommandKey(event) {
    return [224, 17, 91, 93].includes(event.which);
  }

  isNumeric(keycode) {
    return keycode >= 48 && keycode <= 57;
  }

  isPlus(keycode) {
    return [187, 107].includes(keycode);
  }

  isArrowKey(keycode) {
    return keycode >= 37 && keycode <= 40;
  }

  isDelete(keycode) {
    return [8, 46].includes(keycode);
  }

  isCopy(event) {
    return event.which == 67 && (event.ctrlKey || this.isCommand);
  }

  setupValidators(controller, scope, attributes) {
    this.createPhoneNumberValidator(controller, scope, attributes);
    if (attributes.primary) {
      this.createAlternativePhoneNumberValidators(controller, scope, attributes);
    }
  }

  createAlternativePhoneNumberValidators(controller, scope, attributes) {
    this.createAlternativeNumberValidator(controller, scope, attributes);
    this.createNoPrimaryValidator(controller, scope, attributes);
  }

  createNoPrimaryValidator(controller, scope, attributes) {
    controller.$validators.noPrimary = (modelValue) => {
      let isValid = false;
      let primary = scope.$eval(attributes.primary);
      if (controller.$isEmpty(modelValue) || primary) {
        isValid = true;
      }
      return isValid;
    };
  }

  createAlternativeNumberValidator(controller, scope, attributes) {
    controller.$validators.alternativeNumber = (modelValue, viewValue) => {
      let isValid = true;
      if (!controller.$isEmpty(modelValue)) {
        let primary = scope.$eval(attributes.primary);
        if (primary && primary === viewValue) {
          isValid = false;
        }
      }
      return isValid;
    };
  }

  createPhoneNumberValidator(controller, scope, attributes) {
    controller.$validators.phoneNumber = (modelValue, viewValue) => {
      let isValid = false;
      if (controller.$isEmpty(modelValue)) {
        isValid = true;
      } else {
        let country = scope.$eval(attributes.validPhoneNumber);
        isValid = this.validationService.validatePhoneNumber(viewValue, country);
      }
      return isValid;
    };
  }

  setupWatchForUnique(scope, attributes, controller) {
    scope.$watch(attributes.unique, (unique) => {
      if (unique) {
        this.createUniquePhoneNumberValidator(controller, scope, attributes);
      } else {
        this.removeUniquePhoneNumberValidator(controller);
      }
    });
  }

  createUniquePhoneNumberValidator(controller, scope, attributes) {
    if (!controller.$asyncValidators.uniquePhoneNumber) {
      controller.$asyncValidators.uniquePhoneNumber = (modelValue) => {
        return new Promise((resolve, reject) => {
          if (controller.$isEmpty(modelValue)) {
            resolve();
          } else {
            this.validateUniquePhoneNumber(scope, attributes, modelValue, resolve, reject);
          }
        });
      };
    }
  }

  validateUniquePhoneNumber(scope, attributes, modelValue, resolve, reject) {
    let country = scope.$eval(attributes.validPhoneNumber);
    if (country) {
      let memberId = scope.$eval(attributes.memberId);
      this.validationService.validateUniquePhoneNumber(modelValue, country, memberId)
        .then((response) => {
          if (response && response.data && response.data.success === true) {
            resolve();
          } else {
            reject();
          }
        }, () => reject());
    }
  }

  removeUniquePhoneNumberValidator(controller) {
    if (controller.$asyncValidators.uniquePhoneNumber) {
      delete controller.$asyncValidators.uniquePhoneNumber;
    }
  }
}

export default ValidPhoneDirective;
