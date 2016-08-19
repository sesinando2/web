class MenuItemController {
  constructor($state, $window) {
    this.$state = $state;
    this.$window = $window;
    this.states = [];
  }

  $onInit() {
    if (this.matchingStates) {
      this.states = this.states.concat(this.matchingStates);
      this.matchingStates = [];
    }

    this.states.push(this.state);
  }

  click() {
    if (this.link) {
      this.$window.location.href = this.link;
    } else if (this.state) {
      this.$state.go(this.state);
    } else if (this.onClick) {
      this.onClick();
    }
  }

  get active() {
    var isActive = false;
    if (this.link) {
      isActive = this.$window.location.hash === this.link;
    } else if (this.states.length > 0) {
      isActive = this.states.includes(this.$state.current.name);
    }
    return isActive;
  }
}

export default MenuItemController;
