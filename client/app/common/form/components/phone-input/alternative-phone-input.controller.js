import PhoneInputController from './phone-input.controller';

class AlternativePhoneInputController extends PhoneInputController {

  /* @ngInject */
  constructor($scope, formatService, validationService) {
    super($scope, formatService, validationService);
    $scope.$watch('$ctrl.primary', () => this.validate());
  }

  getHelpText() {
    let helpText;
    if (!this.isValid()) {
      if (this.hasError('required')) {
        helpText = 'Mobile App Users requires a primary number.';
      } else if (this.hasError('phoneNumber')) {
        helpText = 'Please enter a valid phone number. If you are entering a fixed phone number please include the area code.';
      } else if (this.hasError('uniquePhoneNumber')) {
        helpText = 'This phone number has already been used by another user.';
      } else if (this.hasError('alternativeNumber')) {
        helpText = 'Please enter a different number.';
      } else if (this.hasError('noPrimary')) {
        helpText = 'Please fill out primary number before the alternative number.';
      }
    }
    return helpText;
  }
}

export default AlternativePhoneInputController;
