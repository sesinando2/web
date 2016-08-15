import logo from './logo.png';

class NavigationController {

  /* ngInject */
  constructor(userInfo) {
    this.name = 'navigation';
    this.logo = logo;
    this.username = userInfo.name;
  }
}

export default NavigationController;
