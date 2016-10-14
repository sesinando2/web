import BaseInputController from '../../base-input.controller';

class PhoneInputController extends BaseInputController{

  /* @ngInject */
  constructor($scope, formatService, validationService) {
    super();
    $scope.$watch('$ctrl.country', () => this.validate());
    this.formatService = formatService;
    this.validationService = validationService;
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
      }
    }
    return helpText;
  }

  getRequiredIndicatorText() {
    return this.required ? 'Required' : 'Optional';
  }

  onBlur() {
    this.model = this.formatService.formatToE164(this.model, this.country);
  }
}

export default PhoneInputController;
