import PageModule from './page'
import PageController from './page.controller';
import PageComponent from './page.component';
import PageTemplate from './page.html';

describe('Page', () => {
  let $rootScope, makeController;

  beforeEach(window.module(PageModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new PageController();
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
      expect(PageTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = PageComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(PageTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(PageController);
      });
  });
});
