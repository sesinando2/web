import BaseModel from '../common/base-model';

class Team extends BaseModel {

  constructor(data) {
    super(data);
    this._delete = null;
  }

  delete() {
    if (this._delete) {
      this._delete(this);
    }
  }

  set deleteHandler(value) {
    this._delete = value;
  }
}

export default Team;
