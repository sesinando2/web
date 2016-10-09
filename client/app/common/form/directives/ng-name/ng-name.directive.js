class NgNameDirective {

  constructor() {
    this.restrict = 'A';
    this.require = ['^form', 'ngModel'];
    this.link = this.link.bind(this);
  }

  link(scope, element, attributes, controllers) {
    let name = scope.$eval(attributes.ngName);
    let form = controllers[0];
    let ngModel = controllers[1];
    if (name) {
      element.attr('name', name);
      form[name] = ngModel;
    }
  }
}

export default NgNameDirective;
