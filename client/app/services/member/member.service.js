import BaseService from '../common/base-service';
import Member from './member.model';

class MemberService extends BaseService {

  /* @ngInject */
  constructor($resource, baseUrl, profileService) {
    super($resource, baseUrl);
    this.profileService = profileService;
  }

  list(max, current, query, accountId) {
    return this.query({ offset: this._offset(current, max), max, q: query, sort: 'name', accountId });
  }

  get(query) {
    return super.get(query).then((response) => {
      let member = response.data;
      return this.profileService.query({ memberId: member.id }).then((profileResponse) => {
        member.roles = profileResponse.data;
        return response;
      });
    });
  }

  _wrapData(data) {
    return new Member(data);
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
