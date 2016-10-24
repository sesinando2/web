import BaseService from '../common/base-service';
import Profile from './profile.model';

class ProfileService extends BaseService {

  /* @ngInject */
  constructor($resource, baseUrl) {
    super($resource, baseUrl);
  }

  getAvailable(notIn, added, removed) {
    return this.query({
      notIn:   notIn,
      added:   added.map((p) => p.id),
      deleted: removed.map((p) => p.id)
    });
  }

  _wrapData(data) {
    return new Profile(data);
  }

  get _resource() {
    return this.$resource(this.baseUrl + '/api/profiles/:id', {id: '@id'});
  }
}

export default ProfileService;
