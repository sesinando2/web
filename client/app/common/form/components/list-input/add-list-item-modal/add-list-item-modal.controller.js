import './add-list-item.styl';

class AddListItemModalController {

  /* @ngInject */
  constructor($timeout, profileService) {
    this.search = null;
    this.all = [];
    this.selected = [];
    this.available = [];
    this.isLoadingMore = false;

    this.$timeout = $timeout;
    this.profileService = profileService;
    this.filter = this.filter.bind(this);
  }

  $onInit() {
    this.getAvailable();
  }

  getAvailable() {
    this.profileService.getAvailable(this.resolve.notIn, this.resolve.added, this.resolve.removed)
      .then((response) => this._handleListResponse(response));
  }

  ok() {
    this.close({$value: this.selected});
  }

  cancel() {
    this.dismiss();
  }

  filter(item) {
    var re = new RegExp("^(\\w+[\\s-_])*" + this.search, 'i');
    return (!this.search || re.test(item.name)) && !this.selected.includes(item);
  }

  select(item) {
    if (!this.selected.includes(item)) {
      this.selected.push(item);
    }
  }

  unselect(item) {
    if (this.selected.includes(item)) {
      this.selected.splice(this.selected.indexOf(item), 1);
    }
  }

  _handleListResponse(response) {
    this.$timeout(() => {
      this.available = response.data;
    });
  }
}

export default AddListItemModalController;
