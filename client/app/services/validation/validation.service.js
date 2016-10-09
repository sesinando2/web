class ValidationService {

  /* @ngInject */
  constructor($http, baseUrl) {
    this.$http = $http;
    this.baseUrl = baseUrl;
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
}

export default ValidationService;
