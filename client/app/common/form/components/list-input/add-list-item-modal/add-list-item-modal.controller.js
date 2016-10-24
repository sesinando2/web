import './add-list-item.styl';

class AddListItemModalController {

  /* @ngInject */
  constructor(profileService) {
    this.search = null;
    this.all = [];
    this.selected = [];
    this.available = [];
    this.isLoadingMore = false;

    this.profileService = profileService;
  }

  $onInit() {
    this.profileService.query({
      notIn:    this.resolve.notIn,
      added:    this.resolve.added,
      deleted:  this.resolve.deleted
    }).then((response) => {
      console.log(response);
    });
  }

  ok() {
    this.close(this.selected);
  }

  cancel() {
    this.dismiss();
  }

  filter(item) {
    var re = new RegExp("^(\\w+[\\s-_])*" + this.search, 'i');
    return !this.search || re.test(item.name);
  }
}

export default AddListItemModalController;
