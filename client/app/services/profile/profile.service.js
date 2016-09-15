import BaseService from '../common/base-service';
import Profile from './profile.model';

class ProfileService extends BaseService {

  /* @ngInject */
  constructor($resource, baseUrl) {
    super($resource, baseUrl);
  }

  _wrapData(data) {
    return new Profile(data);
  }

  get _resource() {
    return this.$resource(this.baseUrl + '/api/profiles/:id', {id: '@id'});
  }
}

export default ProfileService;
