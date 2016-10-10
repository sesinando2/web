import libphonenumber from 'google-libphonenumber/dist/browser/libphonenumber.js';

class ValidationService {

  /* @ngInject */
  constructor($http, baseUrl) {
    this.$http = $http;
    this.baseUrl = baseUrl;
    this.PhoneNumberFormat = libphonenumber.PhoneNumberFormat;
    this.phoneNumberUtil = libphonenumber.PhoneNumberUtil.getInstance();
  }

  validateEmail(email, data) {
    let url = this.baseUrl + "/api/validate-email";
    if (!data) {
      data = { email: email };
    } else {
      data.email = email;
    }
    return this.$http.post(url, data);
  }

  validatePhoneNumber(text, region) {
    let number = this.phoneNumberUtil.parseAndKeepRawInput(text, region);
    let isValid = false;
    try {
      isValid = number
        && this.phoneNumberUtil.isValidNumber(number)
        && this.phoneNumberUtil.isValidNumberForRegion(number, region);
    } catch (e) { /* Ignore */ }
    return isValid;
  }
}

export default ValidationService;
