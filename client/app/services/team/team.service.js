import BaseService from '../common/base-service';
import Team from './team.model';

class TeamService extends BaseService {

  /* @ngInject */
  constructor($resource, baseUrl) {
    super($resource, baseUrl);
  }

  delete(team) {
    let group = new this._resource();
    group.id = team.id;
    return super.delete(group);
  }

  _wrapData(data) {
    return new Team(data);
  }

  get _resource() {
    return this.$resource(this.baseUrl + '/api/teams/:id', {id: '@id'});
  }
}

export default TeamService;
