import './mobile-app-config.styl';

class MobileAppConfigDirective {

  constructor() {
    this.restrict = 'A';
    this.link = this.link.bind(this);
  }

  link(scope, element, attributes) {
    this.button = element;
    let updateClassesHandler = this.createUpdateClassesHandler();
    let onBodyClickHandler = this.createOnBodyClickHandler(scope, attributes);
    let unbindHandler = this.createUnbindHandler(onBodyClickHandler);
    updateClassesHandler(scope.$eval(attributes.mobileAppConfig));
    scope.$watch(attributes.mobileAppConfig, (value) => updateClassesHandler(value));
    $('body').on('click', onBodyClickHandler);
    element.on('$destroy', unbindHandler)
  }

  isButton(target) {
    return $(this.button).is(target);
  }

  isPopover(target) {
    let popover = $(this.button).siblings('.popover');
    return $(popover).is(target) || $(popover).has(target).length > 0;
  }

  showPopover(scope, attributes) {
    scope.$apply(`${attributes.popoverIsOpen} = true`);
  }

  hidePopover(scope, attributes) {
    scope.$apply(`${attributes.popoverIsOpen} = false`);
  }

  isPopoverOpen(scope, attributes) {
    return scope.$eval(attributes.popoverIsOpen);
  }

  createOnBodyClickHandler(scope, attributes) {
    return (e) => {
      if (this.isPopoverOpen(scope, attributes)) {
        if (!this.isButton(e.target) && !this.isPopover(e.target)) {
          this.hidePopover(scope, attributes);
        }
      }
    };
  }

  createUnbindHandler(onBodyClickHandler) {
    return () => {
      this.button.unbind('click', onBodyClickHandler);
    };
  }

  createUpdateClassesHandler() {
    return (value) => {
      if (value) {
        this.button.removeClass('btn-default');
        this.button.addClass('btn-success');
      } else {
        this.button.removeClass('btn-success');
        this.button.addClass('btn-default');
      }
    };
  }
}

export default MobileAppConfigDirective;
