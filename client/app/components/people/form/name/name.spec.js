import NameModule from './name'
import NameController from './name.controller';
import NameComponent from './name.component';
import NameTemplate from './name.html';

describe('Name', () => {
  let $rootScope, makeController;

  beforeEach(window.module(NameModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new NameController();
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
      expect(NameTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = NameComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(NameTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(NameController);
      });
  });
});
