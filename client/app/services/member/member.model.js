class Member {

  constructor(data) {
    Object.assign(this, data);

    this._roles = [];

    this._toggleAvailability = null;
    this._delete = null;
  }

  delete() {
    if (this._delete) {
      this._delete(this);
    }
  }

  toggleAvailability() {
    if (this._toggleAvailability) {
      this._toggleAvailability(this)
    }
  }

  clone() {
    return new Member(this);
  }

  get roles() {
    return this._roles;
  }

  set roles(roleList) {
    if (roleList && roleList instanceof Array) {
      this._roles = roleList;
    }
  }

  set deleteHandler(value) {
    this._delete = value;
  }

  set toggleAvailabilityHandler(value) {
    this._toggleAvailability = value;
  }
}

export default Member;
