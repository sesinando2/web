class Member {

  constructor(data) {
    Object.assign(this, data);
    this._select = null;
    this._toggleAvailability = null;
    this._delete = null;
  }

  select() {
    if (this._select) {
      this._select(this);
    }
  }

  delete() {
    if (this._delete) {
      this._delete(this);
    }
  }

  toggleAvailability() {
    if (this._toggleAvailability) {
      this._toggleAvailability(this);
    }
  }

  set selectHandler(value) {
    this._select = value;
  }

  set deleteHandler(value) {
    this._delete = value;
  }

  set toggleAvailabilityHandler(value) {
    this._toggleAvailability = value;
  }
}

export default Member;
