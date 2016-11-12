class BaseModel {

  constructor(data) {
    Object.assign(this, data);
  }

  clone() {
    return new this.constructor(this);
  }
}

export default BaseModel;
