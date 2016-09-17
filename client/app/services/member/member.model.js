class Member {

  constructor(data) {
    Object.assign(this, data);

    this._roles = [];

    this._select = null;
    this._toggleAvailability = null;
    this._delete = null;
  }

  set roles(roleList) {
    if (roleList && roleList instanceof Array) {
      this._roles = roleList;
    }
  }
}

export default Member;
