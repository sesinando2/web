import BaseService from '../common/base-service';
import Member from './member.model';

class MemberService extends BaseService {

  /* @ngInject */
  constructor($resource, $uibModal, baseUrl, profileService) {
    super($resource, baseUrl);
    this.$uibModal = $uibModal;
    this.profileService = profileService;
  }

  list(max, current, query, accountId) {
    return this.query({ offset: this._offset(current, max), max, q: query, sort: 'name', accountId }).then((response) => {
      let header = response.header;
      let items = response.data;
      let count = parseInt(header('count'));
      let pageCount = Math.ceil(count / max);
      return { items, count, pageCount };
    });
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

  save(formData, added, removed) {
    let member = formData.clone();
    let teamMemberProfile = new this._resource();
    delete member['mobileKey'];
    delete member['comcentId'];
    delete member['profiles'];
    teamMemberProfile.member = member;
    teamMemberProfile.added = added;
    teamMemberProfile.deleted = removed;
    teamMemberProfile.admin = formData.admin;
    return new Promise((resolve, reject) => {
      teamMemberProfile.$save((response) => {
        resolve(response);
      }, (response) => {
        reject(response);
      });
    });
  }

  delete(member) {
    return new Promise((resolve, reject) => {
      if (member.mobileAppUser || member.mobileKey) {
        this._showDeleteFailedModal().then(() => reject());
      } else {
        this._showDeleteConfirmationModal(member)
          .then(() => this._doDeletion(member, resolve, reject), () => reject());
      }
    });
  }

  _doDeletion(member, resolve, reject) {
    let resource = new this._resource();
    resource.id = member.id;
    return resource.$delete(this._handle(resolve), this._handle(reject));
  }

  _showDeleteConfirmationModal(member) {
    return this.$uibModal.open({
      component: 'confirmDialog',
      backdrop: 'static',
      size: 'sm',
      resolve: {
        title: () => 'Confirm Deletion',
        message: () => `Are you sure you want to delete ${member.name}?`
      }
    }).result;
  }

  _showDeleteFailedModal() {
    this.$uibModal.open({
      component: 'alertDialog',
      size: 'md',
      resolve: {
        title: () => 'Delete Failed',
        message: () =>
          '<p>Unable to delete mobile app users. Please deactivate mobile app user first before deleting.</p><p>If you have already deactivated this mobile app user then please wait for at most 10 seconds then try again.</p>'
      }
    });
  }

  toggleAvailability(member) {
    let admin = member.admin;
    member.available = !member.available;
    return super.save({ member, admin });
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
