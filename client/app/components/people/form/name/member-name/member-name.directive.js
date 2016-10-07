class MemberNameDirective {

  constructor() {
    this.require = ['^form', 'ngModel'];
  }

  link(scope, element, attributes, controllers) {
    let name = scope.$eval(attributes.memberName);
    let formController = controllers[0];
    let modelController = controllers[1];

    if (name) {
      element.attr('name', name);
      formController[name] = modelController;
    }
  }
}

export default MemberNameDirective;
