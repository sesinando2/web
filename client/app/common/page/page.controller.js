class PageController {
  constructor($timeout) {
    this.name = 'page';
    angular.element(document).ready(() => {
      $timeout(() => {
        $('div#wrapper').show();
      }, 100);
    });
  }
}

export default PageController;
