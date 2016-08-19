import LogModule from './log'
import LogController from './log.controller';
import LogComponent from './log.component';
import LogTemplate from './log.html';

describe('Log', () => {
  let $rootScope, makeController;

  beforeEach(window.module(LogModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new LogController();
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
      expect(LogTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = LogComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(LogTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(LogController);
      });
  });
});
