class MemberService {

  /* @ngInject */
  constructor($resource, baseUrl) {
    this.$resource = $resource;
    this.baseUrl = baseUrl;
  }

  list(max, current, query, accountId) {
    let offset = (current - 1) * max;
    return new Promise((resolve, reject) => {
      let onSuccess = this._handle(resolve);
      let onError = this._handle(reject);
      this._resource.query({ offset: offset, max: max, q: query, sort: 'name', accountId: accountId }, onSuccess, onError);
    });
  }

  _handle(handler) {
    return (data, header) => {
      handler(data, header);
    }
  }

  get _resource() {
    return this.$resource(`${this.baseUrl}/api/members/:id`, { id: '@id' }, {
      resend: {
        url: `${this.baseUrl}/api/members/:id/resend`,
        method: 'POST'
      }
    });
  }
}

export default MemberService;
