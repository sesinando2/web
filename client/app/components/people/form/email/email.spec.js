import EmailModule from './email'
import EmailController from './email.controller';
import EmailComponent from './email.component';
import EmailTemplate from './email.html';

describe('Email', () => {
  let $rootScope, makeController;

  beforeEach(window.module(EmailModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new EmailController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(EmailTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = EmailComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(EmailTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(EmailController);
      });
  });
});
