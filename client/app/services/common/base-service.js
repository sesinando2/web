class BaseService {

  /* @ngInject */
  constructor($resource, baseUrl) {
    this.$resource = $resource;
    this.baseUrl = baseUrl;

    if (!this._resource) {
      throw 'this._resource should be implemented';
    }

    if (!this._wrapData) {
      throw 'this._wrapData should be implemented';
    }
  }

  query(query) {
    return new Promise((resolve, reject) => {
      this._resource.query(query, this._handleList(resolve), this._handle(reject));
    });
  }

  get(query) {
    return new Promise((resolve, reject) => {
      this._resource.get(query, this._handleSingle(resolve), this._handle(reject));
    });
  }

  delete(object) {
    let resource = this._createResourceFromObject(object);
    return new Promise((resolve, reject) => {
      resource.$delete(this._handle(resolve), this._handle(reject));
    });
  }

  save(object) {
    let resource = this._createResourceFromObject(object);
    return new Promise((resolve, reject) => {
      resource.$save(this._handleSingle(resolve), this._handle(reject));
    });
  }

  _createResourceFromObject(object) {
    let resource = new this._resource();
    Object.assign(resource, object);
    return resource;
  }

  _handle(handler) {
    return (data, header) => {
      handler({ data, header });
    }
  }

  _offset(current, max) {
    return (current - 1) * max;
  }

  _handleSingle(resolve) {
    return (data, header) => {
      data = this._wrapData(data);
      resolve({data, header});
    };
  }

  _handleList(resolve) {
    return (data, header) => {
      if (data && data instanceof Array) {
        data = data.map((member) => this._wrapData(member));
      }
      resolve({data, header})
    }
  }
}

export default BaseService;
