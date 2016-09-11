class MemberService {

  /* @ngInject */
  constructor($resource, baseUrl) {
    this.$resource = $resource;
    this.baseUrl = baseUrl;
  }

  list(max, current, query, accountId) {
    return new Promise((resolve, reject) => {
      this._resource.query(
        { offset: this._offset(current, max), max: max, q: query, sort: 'name', accountId: accountId },
        this._handle(resolve), this._handle(reject)
      );
    });
  }

  _offset(current, max) {
    return (current - 1) * max;
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
