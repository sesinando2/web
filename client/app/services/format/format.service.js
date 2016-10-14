import libphonenumber from 'google-libphonenumber/dist/browser/libphonenumber.js';

class FormatService {

  constructor() {
    this.PhoneNumberFormat = libphonenumber.PhoneNumberFormat;
    this.phoneNumberUtil = libphonenumber.PhoneNumberUtil.getInstance();
  }

  formatToE164(text, region) {
    let formatted = null;
    try {
      let phoneNumber = this.phoneNumberUtil.parseAndKeepRawInput(text, region);
      if (this.phoneNumberUtil.isValidNumber(phoneNumber)) {
        return this.phoneNumberUtil.format(phoneNumber, this.PhoneNumberFormat.E164);
      }
    } catch (e) { /* Ignore */ }
    return formatted;
  }
}

export default FormatService;
