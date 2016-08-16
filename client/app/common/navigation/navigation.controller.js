import logo from './logo.png';

class NavigationController {

  /* ngInject */
  constructor($state, userInfo) {
    this.$state = $state;

    this.name = 'navigation';
    this.logo = logo;
    this.username = userInfo.name;

    console.log($state);
  }
}

export default NavigationController;
