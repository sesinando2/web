import BaseService from '../common/base-service';
import Member from './member.model';

class MemberService extends BaseService {

  /* @ngInject */
  constructor($resource, $uibModal, baseUrl, profileService) {
    super($resource, baseUrl);
    this.$uibModal = $uibModal;
    this.profileService = profileService;
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

  getMobileKey(memberId) {
    return super.get({id: memberId}).then((response) => {
      return response.data.mobileKey;
    })
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
    let promise = null;
    if (member.mobileAppUser || member.mobileKey) {
      promise = this._showDeleteFailedModal()
        .then(() => Promise.reject());
    } else {
      promise = this._showDeleteConfirmationModal(member)
        .then(() => super.delete(member));
    }
    return promise;
  }
  resend(id, email) {
    return new Promise((resolve, reject) => {
      let member = new this._resource();
      member.id = id;
      member.$resend({type: email}, (response) => {
        resolve(response);
      }, (response) => {
        reject(response);
      });
    });
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
    return this.$uibModal.open({
      component: 'alertDialog',
      size: 'md',
      resolve: {
        title: () => 'Delete Failed',
        message: () =>
          '<p>Unable to delete mobile app users. Please deactivate mobile app user first before deleting.</p><p>If you have already deactivated this mobile app user then please wait for at most 10 seconds then try again.</p>'
      }
    }).result;
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
