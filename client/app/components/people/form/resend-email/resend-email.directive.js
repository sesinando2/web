class ResendEmailDirective {

  constructor($timeout, $uibModal) {
    this.restrict = 'A';
    this.transclude = true;
    this.scope = {
      resendEmailButton: '<'
    };
    this.$timeout = $timeout;
    this.$uibModal = $uibModal;
    this.link = this.link.bind(this);
  }

  link(scope, element, attributes, controller, transcludeFn) {
    let clickHandler = this._createClickHandler(scope);
    this._setupEventListeners(element, clickHandler);
    transcludeFn(scope, (clone) => element.append(clone));
  }

  _setupEventListeners(element, clickHandler) {
    element.on('click', clickHandler);
    element.on('$destroy', () => {
      element.off('click', clickHandler);
    });
  }

  _createClickHandler(scope) {
    return () => {
      this.$timeout(() => {
        this.$uibModal.open({
          component: 'resendEmailDialog',
          resolve: {
            user: () => scope.resendEmailButton
          }
        });
      });
    };
  }
}

export default ResendEmailDirective;
