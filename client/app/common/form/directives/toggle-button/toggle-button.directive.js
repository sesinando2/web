class ToggleButtonDirective {

  constructor($timeout) {
    this.restrict = 'A';
    this.scope = {
      ngDisabled:   '<',
      toggleButton: '='
    };

    this.$timeout = $timeout;
    this.link = this.link.bind(this);
  }

  link(scope, element) {
    let onClickHandler = this.createOnClickHandler(scope);
    let updateClassHandler = this.createUpdateClassesHandler(element);
    let unbindHandler = this.createUnbindHandler(element, onClickHandler);
    updateClassHandler(scope.value);
    scope.$watch('toggleButton', (value) => updateClassHandler(value));
    element.on('click', onClickHandler);
    element.on('$destroy', unbindHandler);
  }

  createUnbindHandler(element, onClickHandler) {
    return () => element.unbind('click', onClickHandler);
  }

  createOnClickHandler(scope) {
    return () => {
      if (!scope.ngDisabled) {
        this.$timeout(() => scope.toggleButton = !scope.toggleButton);
      }
    }
  }

  createUpdateClassesHandler(element) {
    return (value) => {
      if (value) {
        element.removeClass('btn-default');
        element.addClass('btn-success');
      } else {
        element.removeClass('btn-success');
        element.addClass('btn-default');
      }
    };
  }
}

export default ToggleButtonDirective;
